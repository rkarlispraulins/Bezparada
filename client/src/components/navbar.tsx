import { useState, useEffect } from "react";
import { Phone, X } from "lucide-react";
import { Link } from "wouter";
import logoPath from "@assets/logo_top_1750876993008.png";
import whatsappIconPath from "@assets/whatsapp_ico_cta_1750940514669.png";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Sticky Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}>
        <div className="main-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <Link href="/" className="cursor-pointer">
                  <img src={logoPath} alt="BEZ PARĀDA.LV" className="h-[50px] w-auto" />
                </Link>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:block">
              <div className="ml-10 flex items-center space-x-8">
                <Link href="/" className="px-3 py-2 text-lg font-black hover:opacity-70 transition-opacity" style={{color: '#013720'}}>Sākums</Link>
                <Link href="/faq" className="px-3 py-2 text-lg font-black hover:opacity-70 transition-opacity" style={{color: '#013720'}}>Biežākie Jautājumi</Link>
                <Link href="/kontakti" className="px-3 py-2 text-lg font-black hover:opacity-70 transition-opacity" style={{color: '#013720'}}>Kontakti</Link>
                <a 
                  href="tel:+37122394242" 
                  className="px-6 py-2 text-base font-black rounded-full hover:opacity-90 transition-opacity border-2 flex items-center gap-2"
                  style={{
                    backgroundColor: '#94f27f',
                    color: '#013720',
                    borderColor: '#bff7b2'
                  }}
                >
                  <Phone size={18} />
                  +371 2239424
                </a>
              </div>
            </div>
            
            {/* Mobile actions */}
            <div className="lg:hidden flex items-center space-x-3">
              {/* WhatsApp Link */}
              <a 
                href="https://wa.me/37125776643" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex-shrink-0"
              >
                <img 
                  src={whatsappIconPath} 
                  alt="WhatsApp" 
                  className="w-[50px] h-[50px] hover:opacity-80 transition-opacity"
                />
              </a>
              
              {/* Menu button */}
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="w-[50px] h-[50px] rounded-full flex items-center justify-center focus:outline-none" 
                style={{backgroundColor: '#013720'}}
              >
                {isMobileMenuOpen ? (
                  <X size={20} style={{color: '#94f27f'}} />
                ) : (
                  <div className="flex flex-col space-y-1">
                    <div className="w-4 h-0.5 rounded-full" style={{backgroundColor: '#94f27f'}}></div>
                    <div className="w-4 h-0.5 rounded-full" style={{backgroundColor: '#94f27f'}}></div>
                    <div className="w-4 h-0.5 rounded-full" style={{backgroundColor: '#94f27f'}}></div>
                  </div>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black bg-opacity-50"
            onClick={() => setIsMobileMenuOpen(false)}
          ></div>
          
          {/* Menu Content */}
          <div className="fixed top-20 left-4 right-4 bg-white rounded-3xl p-6 shadow-lg">
            {/* Phone CTA Button */}
            <div className="mb-8">
              <a 
                href="tel:+37122394242" 
                className="w-full px-6 py-4 text-lg font-black rounded-full hover:opacity-90 transition-opacity border-2 flex items-center justify-center gap-2"
                style={{
                  backgroundColor: '#94f27f',
                  color: '#013720',
                  borderColor: '#bff7b2'
                }}
              >
                <Phone size={20} />
                +371 2239424
              </a>
            </div>
            
            {/* Navigation Links */}
            <div className="space-y-6">
              <a 
                href="/" 
                className="block text-center text-xl font-black py-3 hover:opacity-70 transition-opacity"
                style={{color: '#013720'}}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Sākums
              </a>
              <a 
                href="/faq" 
                className="block text-center text-xl font-black py-3 hover:opacity-70 transition-opacity"
                style={{color: '#013720'}}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Biežākie Jautājumi
              </a>
              <a 
                href="/kontakti" 
                className="block text-center text-xl font-black py-3 hover:opacity-70 transition-opacity"
                style={{color: '#013720'}}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Kontakti
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}