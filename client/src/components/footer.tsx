import logoPath from "@assets/logo_top_1750876993008.png";
import kruminsFooterLogoPath from "@assets/krumins_logo2_png_1750934247539.png";
import { Link } from "wouter";

export function Footer() {
  return (
    <div className="mt-16 lg:mt-24" style={{ marginBottom: '80px' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 lg:p-12" style={{ border: '1px solid #e2e2e2' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Logo and Description */}
            <div className="space-y-6 text-center lg:text-left">
              <div className="flex flex-col lg:flex-row items-center gap-4">
                <img src={logoPath} alt="Bez Parāda.lv" className="h-12" />
                <img src={kruminsFooterLogoPath} alt="Krūmiņš" className="h-12" />
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
                  <Link href="/privatums" className="block text-sm hover:text-gray-900 font-medium" style={{ color: '#777777' }}>Privātums</Link>
                  <Link href="/sikdatnes" className="block text-sm hover:text-gray-900 font-medium" style={{ color: '#777777' }}>Sīkdatnes</Link>
                </div>
              </div>
              
              {/* Services */}
              <div className="space-y-4">
                <h4 className="font-bold text-gray-900">Sadaļas</h4>
                <div className="space-y-2">
                  <Link href="/" className="block text-sm hover:text-gray-900 font-medium" style={{ color: '#777777' }}>Sākums</Link>
                  <Link href="/faq" className="block text-sm hover:text-gray-900 font-medium" style={{ color: '#777777' }}>Jautājumi</Link>
                  <Link href="/kontakti" className="block text-sm hover:text-gray-900 font-medium" style={{ color: '#777777' }}>Sazināties</Link>
                </div>
              </div>
              
              {/* Contact */}
              <div className="space-y-4">
                <h4 className="font-bold text-gray-900">Kontakti</h4>
                <div className="space-y-2">
                  <p className="text-sm font-medium" style={{ color: '#777777' }}>+371 29025555</p>
                  <p className="text-sm font-medium" style={{ color: '#777777' }}>info@zabkrumins.lv</p>
                  <p className="text-sm font-medium" style={{ color: '#777777' }}>Brīvības iela 155A,<br />Rīga, LV-1012</p>
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
  );
}