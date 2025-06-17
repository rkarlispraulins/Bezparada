import { useState } from "react";
import { ConsultationModal } from "@/components/consultation-modal";
import { ContactForm } from "@/components/contact-form";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
  Calendar,
  Phone,
  Star,
  Scale,
  FileText,
  Handshake,
  TrendingUp,
  University,
  PhoneOff,
  GraduationCap,
  CheckCircle,
  Shield,
  MapPin,
  Mail,
  Facebook,
  Linkedin
} from "lucide-react";

export default function Home() {
  const services = [
    {
      icon: FileText,
      title: "Consumer Proposals",
      description: "Negotiate with creditors to reduce your debt by up to 80% while keeping your assets and rebuilding your credit."
    },
    {
      icon: Handshake,
      title: "Debt Consolidation",
      description: "Combine multiple debts into one manageable payment with better terms and lower interest rates."
    },
    {
      icon: TrendingUp,
      title: "Credit Rebuilding",
      description: "Strategic guidance to rebuild your credit score and regain financial stability faster than you thought possible."
    },
    {
      icon: University,
      title: "Bankruptcy Protection",
      description: "When necessary, we guide you through bankruptcy proceedings with dignity and minimal disruption to your life."
    },
    {
      icon: PhoneOff,
      title: "Creditor Protection",
      description: "Immediate relief from creditor calls and collection actions while we work on your long-term solution."
    },
    {
      icon: GraduationCap,
      title: "Financial Education",
      description: "Learn money management skills to maintain financial health and prevent future debt problems."
    }
  ];

  const processSteps = [
    {
      number: 1,
      title: "Free Consultation",
      description: "We listen to your situation, analyze your finances, and explain all available options without any pressure or judgment.",
      image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
    },
    {
      number: 2,
      title: "Custom Strategy",
      description: "We develop a personalized debt relief strategy that fits your specific circumstances and financial goals.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
    },
    {
      number: 3,
      title: "Implementation",
      description: "We handle all legal paperwork, creditor negotiations, and court proceedings while keeping you informed every step of the way.",
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
    },
    {
      number: 4,
      title: "Fresh Start",
      description: "Once your case is complete, we provide ongoing support to help you rebuild your credit and maintain financial health.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
    }
  ];

  const testimonials = [
    {
      name: "Sarah R.",
      role: "Small Business Owner",
      content: "Forward Legal helped me eliminate $45,000 in debt through a consumer proposal. I'm now debt-free and my credit score has improved dramatically.",
      initials: "SR"
    },
    {
      name: "Michael J.",
      role: "Construction Worker",
      content: "The team was incredibly professional and compassionate. They stopped creditor calls immediately and got me back on track financially.",
      initials: "MJ"
    },
    {
      name: "Lisa T.",
      role: "Nurse",
      content: "I wish I had found Forward Legal sooner. They made the entire process stress-free and helped me keep my home while resolving my debts.",
      initials: "LT"
    }
  ];

  const faqs = [
    {
      question: "How quickly can you stop creditor calls?",
      answer: "We can typically stop creditor harassment within 24-48 hours of filing your consumer proposal or bankruptcy petition. This provides immediate relief while we work on your long-term solution."
    },
    {
      question: "Will I lose my home or car?",
      answer: "In most cases, you can keep your home and vehicle. Consumer proposals and other debt relief options are specifically designed to help you maintain your essential assets while resolving your debt problems."
    },
    {
      question: "How much does it cost?",
      answer: "Your initial consultation is completely free. Our fees are transparent and often much less than continuing to pay minimum payments on high-interest debt. We'll explain all costs upfront with no hidden fees."
    },
    {
      question: "How will this affect my credit score?",
      answer: "While debt relief options do impact your credit initially, they often provide a faster path to credit recovery than struggling with unmanageable debt. We provide credit rebuilding guidance to help you recover quickly."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <Scale className="text-primary-500 text-2xl mr-3" />
                <span className="text-xl font-bold text-gray-900">Forward Legal</span>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#services" className="text-gray-600 hover:text-primary-500 px-3 py-2 text-sm font-medium transition-colors">Services</a>
                <a href="#process" className="text-gray-600 hover:text-primary-500 px-3 py-2 text-sm font-medium transition-colors">Our Process</a>
                <a href="#testimonials" className="text-gray-600 hover:text-primary-500 px-3 py-2 text-sm font-medium transition-colors">Success Stories</a>
                <a href="#contact" className="text-gray-600 hover:text-primary-500 px-3 py-2 text-sm font-medium transition-colors">Contact</a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button asChild className="bg-primary-500 hover:bg-primary-600">
                <a href="tel:+1-800-367-9273">
                  <Phone className="mr-2 h-4 w-4" />
                  Call Now
                </a>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 to-white py-20 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Side Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                  Get Back to
                  <span className="text-primary-500 block">Moving Forward</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                  Professional insolvency solutions that help you reclaim your financial freedom and build a stronger future. Our expert legal team provides compassionate guidance every step of the way.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <ConsultationModal>
                  <Button size="lg" className="bg-primary-500 hover:bg-primary-600 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all">
                    <Calendar className="mr-3 h-5 w-5" />
                    Book Free 30min Consultation
                  </Button>
                </ConsultationModal>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white"
                  asChild
                >
                  <a href="tel:+1-800-367-9273">
                    <Phone className="mr-3 h-5 w-5" />
                    Call Now
                  </a>
                </Button>
              </div>

              {/* Google Reviews */}
              <div className="flex items-center space-x-4 pt-4">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <div className="text-sm text-gray-600">
                  <span className="font-semibold text-gray-900">127 reviews</span> on
                  <span className="text-blue-600 font-medium ml-1">Google Reviews</span>
                </div>
              </div>
            </div>

            {/* Right Side - Hero Image with Overlay */}
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1000" 
                alt="Confident professional man representing successful debt resolution" 
                className="rounded-2xl shadow-2xl w-full h-auto object-cover"
              />
              
              {/* Success Story Overlay Card */}
              <Card className="absolute -bottom-6 -left-6 max-w-sm border border-gray-100 shadow-xl">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary-100 p-3 rounded-lg">
                      <CheckCircle className="text-primary-500 text-xl" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 text-lg">Success Story</h3>
                      <p className="text-gray-600 text-sm mt-1">
                        "Stopped creditor calls in 24 hours and started my path to financial freedom"
                      </p>
                      <div className="flex items-center mt-2 text-xs text-gray-500">
                        <span>- Michael R., Toronto</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Trust Badge */}
              <div className="absolute top-4 right-4 bg-white rounded-lg shadow-lg px-4 py-2">
                <div className="flex items-center space-x-2">
                  <Shield className="text-primary-500 h-4 w-4" />
                  <span className="text-sm font-semibold text-gray-700">Licensed & Insured</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Insolvency Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide expert legal guidance tailored to your unique situation, helping you choose the best path forward.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="bg-primary-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                    <service.icon className="text-primary-500 text-xl" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Your Journey to Financial Freedom
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our proven 4-step process has helped hundreds of clients regain control of their finances and build a brighter future.
            </p>
          </div>

          <div className="space-y-16">
            {processSteps.map((step, index) => (
              <div key={index} className={`relative grid lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <Card className="border border-gray-100 shadow-lg">
                    <CardContent className="p-8">
                      <div className={`flex items-center justify-center w-12 h-12 bg-primary-500 text-white rounded-lg font-bold text-lg mb-4 ${index % 2 === 1 ? 'lg:ml-auto' : ''}`}>
                        {step.number}
                      </div>
                      <h3 className="text-2xl font-semibold text-gray-900 mb-4">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </CardContent>
                  </Card>
                </div>
                <div className={`hidden lg:block ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <img 
                    src={step.image} 
                    alt={step.title} 
                    className="rounded-xl shadow-lg w-full h-auto object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Success Stories from Real Clients
            </h2>
            <p className="text-xl text-gray-600">
              See how we've helped people just like you reclaim their financial freedom
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <blockquote className="text-gray-600 mb-6">
                    "{testimonial.content}"
                  </blockquote>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                      <span className="text-primary-600 font-semibold text-sm">{testimonial.initials}</span>
                    </div>
                    <div className="ml-3">
                      <p className="font-semibold text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Get answers to common questions about debt relief and insolvency
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 rounded-xl px-6">
                <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-primary-500">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-primary-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Ready to Start Your Journey to Financial Freedom?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Don't let debt control your life any longer. Take the first step towards a brighter financial future with a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ConsultationModal>
              <Button size="lg" className="bg-primary-500 hover:bg-primary-600 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all">
                <Calendar className="mr-3 h-5 w-5" />
                Book Your Free Consultation
              </Button>
            </ConsultationModal>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white"
              asChild
            >
              <a href="tel:+1-800-367-9273">
                <Phone className="mr-3 h-5 w-5" />
                Call Now: 1-800-FORWARD
              </a>
            </Button>
          </div>
          <p className="text-sm text-gray-500 mt-6">
            ✓ Free consultation ✓ No obligation ✓ Confidential ✓ Licensed professionals
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-2">
              <div className="flex items-center mb-6">
                <Scale className="text-primary-500 text-2xl mr-3" />
                <span className="text-xl font-bold">Forward Legal Solutions</span>
              </div>
              <p className="text-gray-300 mb-6 max-w-md">
                Licensed insolvency trustees and legal professionals helping Canadians achieve financial freedom through compassionate, expert guidance.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
                  <Facebook className="text-xl" />
                </a>
                <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
                  <Linkedin className="text-xl" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#services" className="text-gray-300 hover:text-primary-500 transition-colors">Services</a></li>
                <li><a href="#process" className="text-gray-300 hover:text-primary-500 transition-colors">Our Process</a></li>
                <li><a href="#testimonials" className="text-gray-300 hover:text-primary-500 transition-colors">Success Stories</a></li>
                <li><a href="#" className="text-gray-300 hover:text-primary-500 transition-colors">Blog</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Phone className="text-primary-500 mr-3 h-4 w-4" />
                  <a href="tel:+1-800-367-9273" className="text-gray-300 hover:text-primary-500 transition-colors">
                    1-800-FORWARD
                  </a>
                </div>
                <div className="flex items-center">
                  <Mail className="text-primary-500 mr-3 h-4 w-4" />
                  <a href="mailto:info@forwardlegal.ca" className="text-gray-300 hover:text-primary-500 transition-colors">
                    info@forwardlegal.ca
                  </a>
                </div>
                <div className="flex items-start">
                  <MapPin className="text-primary-500 mr-3 mt-1 h-4 w-4" />
                  <div className="text-gray-300">
                    <p>123 Business Street</p>
                    <p>Toronto, ON M5V 3A8</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <ContactForm />
              </div>
              <div className="text-center md:text-left flex flex-col justify-center">
                <p className="text-gray-400 mb-4">
                  © 2024 Forward Legal Solutions. All rights reserved.
                </p>
                <div className="space-x-4">
                  <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">Privacy Policy</a>
                  <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">Terms of Service</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
