import { ConsultationModal } from "@/components/consultation-modal";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
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
import heroImagePath from "@assets/bezparada_top_img_1750883534410.jpg";

export default function Home() {
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

            {/* Right Side - Hero Image with Overlay */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src={heroImagePath} 
                  alt="Happy family spending time together" 
                  className="w-full h-[500px] object-cover"
                />
                
                {/* Overlay Box with Text and Icon */}
                <div className="absolute top-6 right-6 max-w-xs bg-white rounded-2xl p-4 shadow-xl border border-green-100">
                  <div className="flex items-start space-x-3">
                    <div className="bg-green-100 p-2 rounded-lg flex-shrink-0">
                      <Heart className="text-green-600 h-4 w-4" />
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-700 text-sm font-medium leading-relaxed">
                        Atvēli vairāk savai ģimenei, nevis parādu maksājumiem.
                      </p>
                    </div>
                  </div>
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