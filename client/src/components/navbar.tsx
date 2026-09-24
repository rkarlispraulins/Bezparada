import { useState, useEffect } from "react";
import { Phone, X, ChevronDown } from "lucide-react";
import { Link, useLocation } from "wouter";
import logoPath from "@assets/logo_top_1750876993008.png";
import whatsappIconPath from "@assets/whatsapp_ico_cta_1750940514669.png";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();
  // Legal-entity page uses a different pre-filled WhatsApp message.
  const whatsappHref =
    location === "/juridiskas-personas-maksatnespeja"
      ? "/whatsapp-open?t=jur"
      : "/whatsapp-open";

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

                {/* Pakalpojumi — opens on hover, and on keyboard focus */}
                <div className="relative group">
                  <button
                    type="button"
                    className="px-3 py-2 text-lg font-black hover:opacity-70 transition-opacity flex items-center gap-1.5"
                    style={{color: '#013720'}}
                    aria-haspopup="true"
                  >
                    Pakalpojumi
                    <ChevronDown size={18} className="transition-transform duration-200 group-hover:rotate-180" />
                  </button>

                  {/* padding-top keeps the panel reachable across the gap */}
                  <div className="absolute left-0 top-full pt-3 opacity-0 invisible translate-y-1 transition-all duration-200 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-focus-within:opacity-100 group-focus-within:visible group-focus-within:translate-y-0">
                    <div className="w-72 bg-white rounded-2xl shadow-lg border overflow-hidden" style={{borderColor: '#e2e4df'}}>
                      <Link
                        href="/"
                        className="block px-5 py-4 text-base font-black leading-tight transition-colors hover:bg-[#f2f9ef]"
                        style={{color: '#013720'}}
                      >
                        Fiziskās Personas Maksātnespēja
                      </Link>
                      <div className="h-px mx-5" style={{backgroundColor: '#e2e4df'}}></div>
                      <Link
                        href="/juridiskas-personas-maksatnespeja"
                        className="block px-5 py-4 text-base font-black leading-tight transition-colors hover:bg-[#f2f9ef]"
                        style={{color: '#013720'}}
                      >
                        Juridiskās Personas Maksātnespēja
                      </Link>
                    </div>
                  </div>
                </div>

                <Link href="/faq" className="px-3 py-2 text-lg font-black hover:opacity-70 transition-opacity" style={{color: '#013720'}}>Biežākie Jautājumi</Link>
                <Link href="/kontakti" className="px-3 py-2 text-lg font-black hover:opacity-70 transition-opacity" style={{color: '#013720'}}>Kontakti</Link>
                <a 
                  href="tel:+37129025555" 
                  className="px-6 py-2 text-base font-black rounded-full hover:opacity-90 transition-opacity border-2 flex items-center gap-2"
                  style={{
                    backgroundColor: '#94f27f',
                    color: '#013720',
                    borderColor: '#bff7b2'
                  }}
                  onClick={() => {
                    if (typeof window !== 'undefined' && (window as any).gtag_report_conversion) {
                      (window as any).gtag_report_conversion('tel:+37129025555');
                    }
                  }}
                >
                  <Phone size={18} />
                  +371 29025555
                </a>
              </div>
            </div>
            
            {/* Mobile actions */}
            <div className="lg:hidden flex items-center space-x-3">
              {/* WhatsApp Link */}
              <Link
                href={whatsappHref}
                className="flex-shrink-0"
              >
                <img 
                  src={whatsappIconPath} 
                  alt="WhatsApp" 
                  className="w-[50px] h-[50px] hover:opacity-80 transition-opacity"
                />
              </Link>
              
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
                href="tel:+37129025555" 
                className="w-full px-6 py-4 text-lg font-black rounded-full hover:opacity-90 transition-opacity border-2 flex items-center justify-center gap-2"
                style={{
                  backgroundColor: '#94f27f',
                  color: '#013720',
                  borderColor: '#bff7b2'
                }}
                onClick={() => {
                  if (typeof window !== 'undefined' && (window as any).gtag_report_conversion) {
                    (window as any).gtag_report_conversion('tel:+37129025555');
                  }
                }}
              >
                <Phone size={20} />
                +371 29025555
              </a>
            </div>
            
            {/* Navigation Links */}
            <div className="space-y-6">
              <Link 
                href="/" 
                className="block text-center text-xl font-black py-3 hover:opacity-70 transition-opacity"
                style={{color: '#013720'}}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Sākums
              </Link>
              <Link
                href="/"
                className="block text-center text-lg font-black py-3 leading-tight hover:opacity-70 transition-opacity"
                style={{color: '#013720'}}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Fiziskās Personas Maksātnespēja
              </Link>
              <Link
                href="/juridiskas-personas-maksatnespeja"
                className="block text-center text-lg font-black py-3 leading-tight hover:opacity-70 transition-opacity"
                style={{color: '#013720'}}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Juridiskās Personas Maksātnespēja
              </Link>
              <Link
                href="/faq"
                className="block text-center text-xl font-black py-3 hover:opacity-70 transition-opacity"
                style={{color: '#013720'}}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Biežākie Jautājumi
              </Link>
              <Link 
                href="/kontakti" 
                className="block text-center text-xl font-black py-3 hover:opacity-70 transition-opacity"
                style={{color: '#013720'}}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Kontakti
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}