import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ContactInfoForm } from "@/components/contact-info-form";
import kruminsLogoPath from "@assets/krumins_logo2_png_1750934247539.png";

export default function Kontakti() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Main Content */}
      <div className="pt-32 pb-24">
        <div className="main-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-black mb-6" style={{color: '#013720'}}>
              Sazinies ar mums!
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Aizpildi formu vai sazinies sev ērtākajā veidā – atbildēsim vienas 
              dienas laikā un palīdzēsim ar visiem jautājumiem.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto">
            {/* Left Column - Contact Form */}
            <div className="order-2 lg:order-1">
              <ContactInfoForm />
            </div>

            {/* Right Column - Contact Information */}
            <div className="order-1 lg:order-2">
              {/* Krumins Logo and Info */}
              <div className="space-y-8">
                <div className="text-center lg:text-left">
                  <div className="flex justify-center lg:justify-start mb-6">
                    <img src={kruminsLogoPath} alt="Krūmiņš" className="h-12" />
                  </div>
                  <p className="text-gray-600 mb-2">
                    Zvērināts Advokātu Birojs "Krūmiņš"
                  </p>
                  <p className="text-gray-600 mb-8">
                    www.zabKrumins.lv
                  </p>

                  {/* Contact Details - All in one section */}
                  <div className="space-y-8">
                    {/* Email */}
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2" style={{color: '#013720'}}>E-pasts</h4>
                      <div className="space-y-1 text-gray-600">
                        <p>info@bezparada.lv</p>
                        <p>info@krumins.lv</p>
                      </div>
                    </div>

                    {/* Phone */}
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2" style={{color: '#013720'}}>Telefons</h4>
                      <div className="space-y-1 text-gray-600">
                        <p>+371 29839892</p>
                        <p>+371 27738892</p>
                      </div>
                    </div>

                    {/* Address */}
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2" style={{color: '#013720'}}>Adrese</h4>
                      <div className="text-gray-600">
                        <p>Advokātu iela 8-3, Rīga</p>
                        <p>LV-1089</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Spacing before footer */}
      <div className="h-16"></div>
      
      <Footer />
    </div>
  );
}