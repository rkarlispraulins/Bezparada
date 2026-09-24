import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertConsultationSchema, insertContactSchema } from "@shared/schema";
import { sendContactEmail } from "./email";
import { sendGuideEmail } from "../api/guide";
import { z } from "zod";
import express from "express";
import path from "path";

export async function registerRoutes(app: Express): Promise<Server> {
  // Serve static files from public directory
  app.use(express.static(path.resolve(process.cwd(), "public")));
  
  // Handle favicon specifically
  app.get("/favicon.ico", (req, res) => {
    res.sendFile(path.resolve(process.cwd(), "public", "favicon.ico"));
  });
  // Book consultation endpoint
  app.post("/api/consultations", async (req, res) => {
    try {
      const validatedData = insertConsultationSchema.parse(req.body);
      const consultation = await storage.createConsultation(validatedData);
      res.json({ success: true, consultation });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Invalid consultation data", 
          errors: error.errors 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "Failed to book consultation" 
        });
      }
    }
  });

  // Get all consultations (for admin purposes)
  app.get("/api/consultations", async (req, res) => {
    try {
      const consultations = await storage.getConsultations();
      res.json({ success: true, consultations });
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Failed to fetch consultations" 
      });
    }
  });

  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(validatedData);
      
      // Extract name parts for email
      const nameParts = contact.name.split(' ');
      const firstName = nameParts[0] || '';
      const lastName = nameParts.slice(1).join(' ') || '';
      
      // Send email notification
      try {
        await sendContactEmail({
          firstName,
          lastName,
          email: contact.email,
          phone: contact.phone || '',
          details: contact.message || '',
          subject: contact.subject || '',
        });
      } catch (emailError) {
        console.error('Failed to send email notification:', emailError);
        // Don't fail the request if email fails
      }
      
      res.json({ success: true, contact });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Invalid contact data", 
          errors: error.errors 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "Failed to submit contact form" 
        });
      }
    }
  });

  // Get all contacts (for admin purposes)
  app.get("/api/contact", async (req, res) => {
    try {
      const contacts = await storage.getContacts();
      res.json({ success: true, contacts });
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Failed to fetch contacts" 
      });
    }
  });

  // Guide (lead magnet) request endpoint
  const guideSchema = z.object({
    email: z.string().email(),
    consent: z.literal(true),
  });

  app.post("/api/guide", async (req, res) => {
    try {
      const { email } = guideSchema.parse(req.body);

      const proto = (req.headers["x-forwarded-proto"] as string) || req.protocol;
      const host = req.headers["x-forwarded-host"] || req.get("host");
      const origin = host ? `${proto}://${host}` : undefined;

      await sendGuideEmail(email, origin);

      res.json({ success: true });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({
          success: false,
          message: "Invalid guide request",
          errors: error.errors,
        });
      }

      console.error("Failed to send guide:", error);
      res.status(500).json({
        success: false,
        message: "Failed to send the guide",
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
