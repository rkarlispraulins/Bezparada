import { Navbar } from "@/components/navbar";
import { ContactInfoForm } from "@/components/contact-info-form";
import kruminsLogoPath from "@assets/krumins_horizontal_1751898609665.png";
import bottomBackgroundPath from "@assets/bottom_background_1750934610872.jpg";
import logoPath from "@assets/logo_top_1750876993008.png";

export default function Kontakti() {
  return (
    <div 
      style={{
        backgroundImage: `url(${bottomBackgroundPath})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        paddingBottom: '80px'
      }}
    >
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
                    Zvērinātu advokātu birojs KRŪMIŅŠ SIA
                  </p>
                  <p className="text-gray-600 mb-8">
                    www.zabKrumins.lv
                  </p>

                  {/* Contact Details - All in one section */}
                  <div className="space-y-8">
                    {/* Email */}
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2" style={{color: '#013720'}}>E-pasts</h4>
                      <div className="text-gray-600">
                        <p>info@zabkrumins.lv</p>
                      </div>
                    </div>

                    {/* Phone */}
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2" style={{color: '#013720'}}>Telefons</h4>
                      <div className="text-gray-600">
                        <p>+371 2902 5555</p>
                      </div>
                    </div>

                    {/* Address */}
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2" style={{color: '#013720'}}>Adrese</h4>
                      <div className="text-gray-600">
                        <p>Brīvības iela 155A, Rīga, LV-1012</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Reduced spacing before footer */}
      <div className="h-4 lg:h-8"></div>
      
      {/* Footer without bottom margin for this page */}
      <div className="mt-4 lg:mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 lg:p-12" style={{ border: '1px solid #e2e2e2' }}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Logo and Description */}
              <div className="space-y-6 text-center lg:text-left">
                <div className="flex flex-col lg:flex-row items-center gap-4">
                  <img src={logoPath} alt="Bez Parāda.lv" className="h-12" />
                  <img src={kruminsLogoPath} alt="Krūmiņš" className="h-12" />
                </div>
                
                <p className="text-sm leading-relaxed max-w-md font-medium mx-auto lg:mx-0" style={{ color: '#777777' }}>
                  Iniciatīvu "Bez Parāda.lv" piedāvā ZAB "Krūmiņš" ar mērķi padarīt maksātnespējas procesa iepazīšanu caurspīdīgu, drošu un pieejamu ikvienam. Mēs apzināmies, ka šajā jomā nereti valda dezinformācija un negodrātīga rīcība pret cilvēkiem grūtībās, tāpēc piedāvājam juridiski korektu risinājumu, ko nodrošina pieredzējuši, kvalificēti profesionāļi.
                </p>
              </div>
              
              {/* Three Column Layout for Right Side */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center lg:text-left">
                {/* Documents Links */}
                <div className="space-y-4">
                  <h4 className="font-bold text-gray-900">Dokumenti</h4>
                  <div className="space-y-2">
                    <a href="#" className="block text-sm hover:text-gray-900 font-medium" style={{ color: '#777777' }}>Privātuma politika</a>
                    <a href="#" className="block text-sm hover:text-gray-900 font-medium" style={{ color: '#777777' }}>Sīkdatņu politika</a>
                    <a href="#" className="block text-sm hover:text-gray-900 font-medium" style={{ color: '#777777' }}>Lietošanas politika</a>
                  </div>
                </div>
                
                {/* Services */}
                <div className="space-y-4">
                  <h4 className="font-bold text-gray-900">Sadejas</h4>
                  <div className="space-y-2">
                    <a href="#" className="block text-sm hover:text-gray-900 font-medium" style={{ color: '#777777' }}>Nosacījumi</a>
                    <a href="#" className="block text-sm hover:text-gray-900 font-medium" style={{ color: '#777777' }}>Kāpēc</a>
                    <a href="#" className="block text-sm hover:text-gray-900 font-medium" style={{ color: '#777777' }}>Pieteikties</a>
                  </div>
                </div>
                
                {/* Contact */}
                <div className="space-y-4">
                  <h4 className="font-bold text-gray-900">Kontakti</h4>
                  <div className="space-y-2">
                    <p className="text-sm font-medium" style={{ color: '#777777' }}>+371 2239424</p>
                    <p className="text-sm font-medium" style={{ color: '#777777' }}>info@bezparada.lv</p>
                    <p className="text-sm font-medium" style={{ color: '#777777' }}>Biroja iela 30-12,<br />Rīga, Latvija</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Bottom Row */}
            <div className="mt-8 lg:mt-12 pt-6" style={{ borderTop: '1px solid #e2e2e2' }}>
              <p className="text-sm font-medium" style={{ color: '#777777' }}>© ZAB "Krūmiņš", 2025. Visas tiesības aizsargātas.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}