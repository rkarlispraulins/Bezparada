import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Phone } from "lucide-react";
import whatsappIcon2Path from "@assets/whatsapp_ico_2_1750968760747.png";
import mailIconPath from "@assets/mail_ico1_1750880669255.png";

interface ContactButtonsProps {
  className?: string;
  variant?: "default" | "column" | "row";
  fullWidth?: boolean;
}

export function ContactButtons({ 
  className = "", 
  variant = "default",
  fullWidth = false
}: ContactButtonsProps) {
  const containerClasses = {
    default: "flex flex-col sm:flex-row gap-4",
    column: "flex flex-col gap-4", 
    row: "flex flex-row gap-4"
  };

  const buttonWidth = fullWidth ? "w-full" : "";

  return (
    <div className={`${containerClasses[variant]} ${className}`}>
      <PhoneButton className={buttonWidth} />
      <WhatsAppButton className={buttonWidth} />
      <MessageButton className={buttonWidth} />
    </div>
  );
}

// Phone call button with conversion tracking
export function PhoneButton({ className = "" }: { className?: string }) {
  const handlePhoneClick = () => {
    // Track Google Ads conversion for phone call lead
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'conversion', {
        'send_to': 'AW-17296725922/PHONE_CALL_CONVERSION_ID',
        'event_category': 'Phone Call',
        'event_label': 'Direct Phone Call'
      });
    }
  };

  return (
    <Button 
      size="lg" 
      className={`primary-button px-8 py-4 rounded-full text-lg font-black shadow-lg hover:shadow-xl ${className}`}
      asChild
    >
      <a 
        href="tel:+37129025555" 
        onClick={handlePhoneClick}
      >
        <Phone className="mr-2 h-5 w-5" />
        Piezvanīt tagad
      </a>
    </Button>
  );
}

// Existing WhatsApp button with "Sazinies tagad" text
export function WhatsAppButton({ className = "" }: { className?: string }) {
  const handleWhatsAppClick = () => {
    // Track Google Ads conversion for phone call lead
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'conversion', {
        'send_to': 'AW-17296725922/PHONE_CALL_CONVERSION_ID',
        'event_category': 'Phone Call',
        'event_label': 'WhatsApp Contact'
      });
    }
  };

  return (
    <Button 
      size="lg" 
      className={`primary-button px-8 py-4 rounded-full text-lg font-black shadow-lg hover:shadow-xl ${className}`}
      asChild
    >
      <a 
        href="https://wa.me/37129025555" 
        target="_blank" 
        rel="noopener noreferrer"
        onClick={handleWhatsAppClick}
      >
        <img src={whatsappIcon2Path} alt="WhatsApp" className="mr-2 h-6 w-6" />
        Sazinies tagad
      </a>
    </Button>
  );
}

// Message button that navigates to Contact Us page
export function MessageButton({ className = "" }: { className?: string }) {
  return (
    <Button 
      size="lg" 
      className={`secondary-button px-8 py-4 rounded-full text-lg font-black shadow-lg hover:shadow-xl ${className}`}
      asChild
    >
      <Link href="/kontakti">
        <img src={mailIconPath} alt="Mail" className="mr-3 h-5 w-5" />
        Atstāj Ziņu
      </Link>
    </Button>
  );
}