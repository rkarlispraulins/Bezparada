import { ConsultationModal } from "@/components/consultation-modal";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Calendar,
  Phone,
  Star,
  Heart
} from "lucide-react";
import logoPath from "@assets/logo_top_1750876993008.png";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-green-50">
      {/* Navigation */}
      <nav className="">
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

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
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
                <p className="text-sm text-gray-500 font-medium">
                  Piesakies bezmaksas konsultācijai un noskaijdro, vai šis risinājums ir Tev piemērots.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <ConsultationModal>
                  <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all">
                    <Calendar className="mr-3 h-5 w-5" />
                    Rezervē laiku
                  </Button>
                </ConsultationModal>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white px-8 py-4 rounded-full font-semibold"
                  asChild
                >
                  <a href="tel:+371-123-456-789">
                    <Phone className="mr-3 h-5 w-5" />
                    Uzzvani tagad!
                  </a>
                </Button>
              </div>

              {/* Google Reviews */}
              <div className="flex items-center space-x-4 pt-4">
                <div className="flex items-center space-x-1">
                  <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                    <span className="text-blue-600 font-bold text-sm">G</span>
                  </div>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <div className="text-sm text-gray-600">
                  <span className="font-semibold text-gray-900">4,9 Stars</span> |
                  <span className="font-semibold text-gray-900 ml-1">21 review</span>
                  <br />
                  <span className="text-blue-600 font-medium">Google Reviews</span>
                </div>
              </div>
            </div>

            {/* Right Side - Hero Image with Overlay */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1609220136736-443140cffec6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                  alt="Happy family spending time together" 
                  className="w-full h-[500px] object-cover"
                />
                
                {/* Success Story Overlay Card */}
                <Card className="absolute top-6 right-6 max-w-xs bg-white/95 backdrop-blur-sm border border-green-100 shadow-xl">
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-3">
                      <div className="bg-green-100 p-2 rounded-lg">
                        <Heart className="text-green-600 h-4 w-4" />
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-700 text-sm font-medium leading-relaxed">
                          Atvēli vairāk savai ģimenei, nevis parādu maksājumiem.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Carousel dots */}
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-white/50 rounded-full"></div>
                  <div className="w-2 h-2 bg-white/50 rounded-full"></div>
                  <div className="w-2 h-2 bg-white/50 rounded-full"></div>
                  <div className="w-2 h-2 bg-white/50 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}