import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactSchema, type InsertContact } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

// Extended schema for the contact info form
const contactInfoSchema = insertContactSchema.extend({
  firstName: z.string().min(1, "Vārds ir obligāts"),
  lastName: z.string().min(1, "Uzvārds ir obligāts"),
  phone: z.string().min(1, "Tālruņa numurs ir obligāts"),
  details: z.string().optional(),
  privacyAccepted: z.boolean().refine(val => val === true, "Jums jāpiekrīt privātuma politikai")
});

type ContactInfoFormData = z.infer<typeof contactInfoSchema>;

interface ContactInfoFormProps {
  onSuccess?: () => void;
  className?: string;
}

export function ContactInfoForm({ onSuccess, className = "" }: ContactInfoFormProps) {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const form = useForm<ContactInfoFormData>({
    resolver: zodResolver(contactInfoSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      name: "",
      email: "",
      phone: "",
      subject: "Konsultācijas pieprasījums",
      message: "",
      details: "",
      privacyAccepted: false,
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: ContactInfoFormData) => {
      // Combine first and last name for the backend
      const contactData: InsertContact = {
        name: `${data.firstName} ${data.lastName}`,
        email: data.email,
        phone: data.phone,
        subject: data.subject || "Konsultācijas pieprasījums",
        message: data.details || "",
      };
      
      const response = await apiRequest("POST", "/api/contact", contactData);
      return response;
    },
    onSuccess: () => {
      toast({
        title: "Ziņojums nosūtīts!",
        description: "Mēs ar jums sazināsimies tuvākajā laikā.",
      });
      form.reset();
      queryClient.invalidateQueries({ queryKey: ["/api/contact"] });
      onSuccess?.();
    },
    onError: (error: any) => {
      toast({
        title: "Kļūda",
        description: error.message || "Neizdevās nosūtīt ziņojumu. Lūdzu, mēģiniet vēlreiz.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ContactInfoFormData) => {
    mutation.mutate(data);
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className={`max-w-lg mx-auto space-y-4 ${className}`}>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <input 
            {...form.register("firstName")}
            type="text" 
            placeholder="Tavs vārds"
            className="w-full px-4 py-3 lg:py-4 border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent text-base lg:text-lg h-11 lg:h-[50px]"
            style={{ borderRadius: '24px' }}
          />
          {form.formState.errors.firstName && (
            <p className="text-red-500 text-sm mt-1">{form.formState.errors.firstName.message}</p>
          )}
        </div>
        <div>
          <input 
            {...form.register("lastName")}
            type="text" 
            placeholder="Tavs uzvārds"
            className="w-full px-4 py-3 lg:py-4 border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent text-base lg:text-lg h-11 lg:h-[50px]"
            style={{ borderRadius: '24px' }}
          />
          {form.formState.errors.lastName && (
            <p className="text-red-500 text-sm mt-1">{form.formState.errors.lastName.message}</p>
          )}
        </div>
      </div>
      
      <div>
        <input 
          {...form.register("email")}
          type="email" 
          placeholder="Tavs epasts"
          className="w-full px-4 py-3 lg:py-4 border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent text-base lg:text-lg h-11 lg:h-[50px]"
          style={{ borderRadius: '24px' }}
        />
        {form.formState.errors.email && (
          <p className="text-red-500 text-sm mt-1">{form.formState.errors.email.message}</p>
        )}
      </div>
      
      <div className="flex">
        <div className="relative">
          <div className="px-4 py-3 lg:py-4 border border-gray-300 bg-white text-base lg:text-lg h-11 lg:h-[50px] flex items-center gap-2 min-w-[100px]" style={{ borderRadius: '24px 0 0 24px' }}>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
            <span>+371</span>
          </div>
        </div>
        <div className="flex-1">
          <input 
            {...form.register("phone")}
            type="tel" 
            placeholder="Tavs Tālruņa Numurs"
            className="w-full px-4 py-3 lg:py-4 border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent text-base lg:text-lg h-11 lg:h-[50px]"
            style={{ borderRadius: '0 24px 24px 0' }}
          />
          {form.formState.errors.phone && (
            <p className="text-red-500 text-sm mt-1">{form.formState.errors.phone.message}</p>
          )}
        </div>
      </div>
      
      <div>
        <textarea 
          {...form.register("details")}
          placeholder="Detaļas"
          rows={4}
          className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none text-base lg:text-lg"
          style={{ borderRadius: '24px' }}
        />
        {form.formState.errors.details && (
          <p className="text-red-500 text-sm mt-1">{form.formState.errors.details.message}</p>
        )}
      </div>
      
      <div>
        <label className="flex items-center gap-3 text-gray-600" style={{ fontSize: '18px' }}>
          <input 
            {...form.register("privacyAccepted")}
            type="checkbox" 
            className="rounded w-6 h-6" 
          />
          Es piekrītu Privātuma Politikai
        </label>
        {form.formState.errors.privacyAccepted && (
          <p className="text-red-500 text-sm mt-1">{form.formState.errors.privacyAccepted.message}</p>
        )}
      </div>
      
      <button 
        type="submit"
        disabled={mutation.isPending}
        className="w-full text-white text-xl font-black py-4 rounded-full transition-all duration-200 hover:opacity-90 disabled:opacity-50"
        style={{ backgroundColor: '#94f27f' }}
      >
        {mutation.isPending ? "Nosūta..." : "Nosūtīt"}
      </button>
    </form>
  );
}