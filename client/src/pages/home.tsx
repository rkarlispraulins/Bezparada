import { ConsultationModal } from "@/components/consultation-modal";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useState, useEffect } from "react";
import {
  Calendar,
  Phone,
  Star,
  Heart,
  MessageSquare
} from "lucide-react";
import logoPath from "@assets/logo_top_1750876993008.png";
import phoneIconPath from "@assets/phone_ico1_1750880160410.png";
import mailIconPath from "@assets/mail_ico1_1750880669255.png";
import tenMinIconPath from "@assets/10_min_ico_1750881727155.png";
import confIconPath from "@assets/conf_ico_1750881727156.png";
import zvBirIconPath from "@assets/zv_bir_ico_1750881727156.png";
import backgroundImagePath from "@assets/bezparada_bg_1750882208709.jpg";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3;

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const testimonials = [
    {
      image: "https://images.unsplash.com/photo-1609220136736-443140cffec6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      alt: "Happy family spending time together",
      text: "Atvēli vairāk savai ģimenei, nevis parādu maksājumiem."
    },
    {
      image: "https://images.unsplash.com/photo-1600298881974-6be191ceeda1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      alt: "Professional business meeting",
      text: "Profesionāla palīdzība maksātnespējas procesā."
    },
    {
      image: "https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      alt: "Peaceful home environment",
      text: "Miers un stabilitāte finansiālajās attiecībās."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-green-50">
      {/* Hero Section with Navigation */}
      <section 
        className="relative overflow-hidden"
        style={{
          backgroundImage: `url(${backgroundImagePath})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Navigation */}
        <nav className="relative z-10">
          <div className="main-container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <div className="flex-shrink-0 flex items-center">
                  <img src={logoPath} alt="BEZ PARĀDA.LV" className="h-10 w-auto" />
                </div>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-8">
                  <a href="#" className="px-3 py-2 text-lg font-black hover:opacity-70 transition-opacity" style={{color: '#013720'}}>Biežākie Jautājumi</a>
                  <a href="#" className="px-3 py-2 text-lg font-black hover:opacity-70 transition-opacity" style={{color: '#013720'}}>Piesakies</a>
                  <a href="#" className="px-3 py-2 text-lg font-black hover:opacity-70 transition-opacity" style={{color: '#013720'}}>Par mums</a>
                  <a href="#" className="px-3 py-2 text-lg font-black hover:opacity-70 transition-opacity" style={{color: '#013720'}}>Kontakti</a>
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="relative pt-20 lg:pt-24 pb-32 lg:pb-40">
          <div className="main-container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left Side Content */}
              <div className="space-y-8">
                <div className="space-y-6">
                  <h1 className="hero-heading font-extrabold text-gray-900">
                    Sakārtotas saistības –
                    <span className="block">stabils pamats rītdienai.</span>
                  </h1>
                  <p className="hero-subtitle text-gray-600 leading-relaxed max-w-lg">
                    Mēs palīdzam sagatavot dokumentus un veikt maksātnespējas pieteikumu atbilstoši Latvijas likumiem.
                  </p>
                  <p className="hero-cta-text font-extrabold max-w-lg">
                    Piesakies bezmaksas konsultācijai un noskaidro, vai šis risinājums ir Tev piemērots.
                  </p>
                </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="primary-button px-8 py-4 rounded-full text-lg font-black shadow-lg hover:shadow-xl"
                  asChild
                >
                  <a href="tel:+371-123-456-789">
                    <img src={phoneIconPath} alt="Phone" className="mr-3 h-5 w-5" />
                    Zvani tagad
                  </a>
                </Button>
                <ConsultationModal>
                  <Button 
                    size="lg" 
                    className="secondary-button px-8 py-4 rounded-full text-lg font-black shadow-lg hover:shadow-xl"
                  >
                    <img src={mailIconPath} alt="Mail" className="mr-3 h-5 w-5" />
                    Raksti ziņu
                  </Button>
                </ConsultationModal>
              </div>

              {/* Benefits */}
              <div className="space-y-2 pt-6">
                <div className="flex items-center space-x-3">
                  <img src={tenMinIconPath} alt="10 minutes" className="w-8 h-8 flex-shrink-0" />
                  <span className="benefit-text font-extrabold">10 minūtes noskaidro piemērotību</span>
                </div>
                <div className="flex items-center space-x-3">
                  <img src={zvBirIconPath} alt="Law office" className="w-8 h-8 flex-shrink-0" />
                  <span className="benefit-text font-extrabold">Zvērināts Advokātu Birojs</span>
                </div>
                <div className="flex items-center space-x-3">
                  <img src={confIconPath} alt="Confidential" className="w-8 h-8 flex-shrink-0" />
                  <span className="benefit-text font-extrabold">Konfidenciāla pieeja</span>
                </div>
              </div>
            </div>

            {/* Right Side - Testimonial Slider */}
            <div className="relative max-w-lg mx-auto">
              <div className="relative overflow-hidden">
                {/* Slider Container */}
                <div 
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {testimonials.map((testimonial, index) => (
                    <div key={index} className="w-full flex-shrink-0">
                      <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                        <img 
                          src={testimonial.image}
                          alt={testimonial.alt}
                          className="w-full h-[500px] object-cover"
                        />
                        
                        {/* Speech Bubble - extending outside container */}
                        <div className="absolute -top-4 -right-8 max-w-xs z-10">
                          <div className="bg-white rounded-2xl p-4 shadow-xl border border-green-100 relative">
                            <div className="flex items-start space-x-3">
                              <div className="bg-green-100 p-2 rounded-lg flex-shrink-0">
                                <Heart className="text-green-600 h-4 w-4" />
                              </div>
                              <div className="flex-1">
                                <p className="text-gray-700 text-sm font-medium leading-relaxed">
                                  {testimonial.text}
                                </p>
                              </div>
                            </div>
                            {/* Speech bubble tail */}
                            <div className="absolute bottom-[-8px] left-8 w-4 h-4 bg-white transform rotate-45 border-b border-r border-green-100"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Interactive Carousel Dots */}
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-4 h-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 ${
                        index === currentSlide 
                          ? 'bg-green-500 ring-2 ring-white ring-opacity-50' 
                          : 'bg-white/70 hover:bg-white/90'
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>
    </div>
  );
}