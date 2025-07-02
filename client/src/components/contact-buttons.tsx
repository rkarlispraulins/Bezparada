import { Button } from "@/components/ui/button";
import { Link } from "wouter";
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
      <WhatsAppButton className={buttonWidth} />
      <MessageButton className={buttonWidth} />
    </div>
  );
}

// Existing WhatsApp button with "Sazinies tagad" text
export function WhatsAppButton({ className = "" }: { className?: string }) {
  return (
    <Button 
      size="lg" 
      className={`primary-button px-8 py-4 rounded-full text-lg font-black shadow-lg hover:shadow-xl ${className}`}
      asChild
    >
      <a href="https://wa.me/37129025555" target="_blank" rel="noopener noreferrer">
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