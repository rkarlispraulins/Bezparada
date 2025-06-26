import { ConsultationModal } from "@/components/consultation-modal";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Calendar,
  Phone,
  Star,
  Heart,
  MessageSquare,
  Menu
} from "lucide-react";
import logoPath from "@assets/logo_top_1750876993008.png";
import phoneIconPath from "@assets/phone_ico1_1750880160410.png";
import mailIconPath from "@assets/mail_ico1_1750880669255.png";
import tenMinIconPath from "@assets/10_min_ico_1750881727155.png";
import confIconPath from "@assets/conf_ico_1750881727156.png";
import zvBirIconPath from "@assets/zv_bir_ico_1750881727156.png";
import backgroundImagePath from "@assets/bezparada_bg_1750882208709.jpg";
import heroImagePath from "@assets/bezparada_top_img_1750883534410.jpg";
import section2ImagePath from "@assets/tmep_section2_img_1750890039308.png";
import cardBg1Path from "@assets/card_bg1_1750926232986.png";
import cardBg2Path from "@assets/card_bg2_1750926232987.png";
import cardBg3Path from "@assets/card_bg3_1750926232987.png";
import cardIco1Path from "@assets/card_ico1_1750927292240.png";
import cardIco2Path from "@assets/card_ico2_1750927292240.png";
import cardIco3Path from "@assets/card_ico3_1750927292240.png";

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
        <nav className="relative z-20 bg-transparent pt-0 lg:pt-4">
          <div className="main-container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <div className="flex-shrink-0 flex items-center">
                  <img src={logoPath} alt="BEZ PARĀDA.LV" className="h-[50px] w-auto" />
                </div>
              </div>
              
              {/* Desktop Navigation */}
              <div className="hidden lg:block">
                <div className="ml-10 flex items-baseline space-x-8">
                  <a href="#" className="px-3 py-2 text-lg font-black hover:opacity-70 transition-opacity" style={{color: '#013720'}}>Biežākie Jautājumi</a>
                  <a href="#" className="px-3 py-2 text-lg font-black hover:opacity-70 transition-opacity" style={{color: '#013720'}}>Piesakies</a>
                  <a href="#" className="px-3 py-2 text-lg font-black hover:opacity-70 transition-opacity" style={{color: '#013720'}}>Par mums</a>
                  <a href="#" className="px-3 py-2 text-lg font-black hover:opacity-70 transition-opacity" style={{color: '#013720'}}>Kontakti</a>
                </div>
              </div>
              
              {/* Mobile menu button */}
              <div className="lg:hidden">
                <button className="w-[50px] h-[50px] rounded-full flex items-center justify-center focus:outline-none" style={{backgroundColor: '#013720'}}>
                  <div className="flex flex-col space-y-1">
                    <div className="w-4 h-0.5 rounded-full" style={{backgroundColor: '#94f27f'}}></div>
                    <div className="w-4 h-0.5 rounded-full" style={{backgroundColor: '#94f27f'}}></div>
                    <div className="w-4 h-0.5 rounded-full" style={{backgroundColor: '#94f27f'}}></div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="relative pt-8 lg:pt-24 pb-8 lg:pb-40">
          <div className="main-container mx-auto px-4 sm:px-6 lg:px-8">
            {/* Mobile Layout */}
            <div className="lg:hidden">
              {/* Mobile Image */}
              <div className="mb-8 px-4">
                <img 
                  src={heroImagePath} 
                  alt="Happy family spending time together" 
                  className="w-full h-[275px] object-cover rounded-3xl"
                />
              </div>

              {/* Mobile Content */}
              <div className="px-4">
                <h1 className="text-3xl font-extrabold text-gray-900 mb-4 leading-tight">
                  Sakartotas saistības –{" "}
                  <span className="block">stabils pamats rītdienai.</span>
                </h1>
                
                <p className="text-lg text-gray-600 mb-4 font-medium">
                  Mēs palīdzam sagatavot dokumentus un veikt maksātnespējas pieteikumu atbilstoši Latvijas likumiem.
                </p>
                
                <p className="text-base text-gray-600 mb-6">
                  Piesākies bezmaksas konsultācijai un noskaidro, vai šis risinājums ir Tev piemērots.
                </p>

                <div className="flex flex-col gap-4">
                  <Button 
                    size="lg" 
                    className="primary-button px-8 py-4 rounded-full text-lg font-black shadow-lg hover:shadow-xl w-full"
                    asChild
                  >
                    <a href="tel:+371-123-456-789">
                      <img src={phoneIconPath} alt="Phone" className="mr-3 h-5 w-5" />
                      Zvani tagad!
                    </a>
                  </Button>
                  
                  <ConsultationModal>
                    <Button 
                      size="lg" 
                      className="secondary-button px-8 py-4 rounded-full text-lg font-black shadow-lg hover:shadow-xl w-full"
                    >
                      <img src={mailIconPath} alt="Mail" className="mr-3 h-5 w-5" />
                      Raksti Mums
                    </Button>
                  </ConsultationModal>
                </div>

                {/* Mobile Benefits */}
                <div className="space-y-3 pt-6">
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
            </div>

            {/* Desktop Layout */}
            <div className="hidden lg:grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
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
                <div className="flex flex-row gap-4">
                  <Button 
                    size="lg" 
                    className="primary-button px-8 py-4 rounded-full text-lg font-black shadow-lg hover:shadow-xl"
                    asChild
                  >
                    <a href="tel:+371-123-456-789">
                      <img src={phoneIconPath} alt="Phone" className="mr-3 h-5 w-5" />
                      Zvani tagad!
                    </a>
                  </Button>
                  <ConsultationModal>
                    <Button 
                      size="lg" 
                      className="secondary-button px-8 py-4 rounded-full text-lg font-black shadow-lg hover:shadow-xl"
                    >
                      <img src={mailIconPath} alt="Mail" className="mr-3 h-5 w-5" />
                      Raksti Mums
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
                    className="w-full h-[600px] object-cover"
                  />
                </div>
                
                {/* Overlay Box extending outside image */}
                <div className="absolute -top-4 -right-8 max-w-sm bg-white rounded-2xl p-5 shadow-xl border border-green-100 z-10">
                  <div className="flex items-start space-x-3">
                    <div className="bg-green-100 p-2 rounded-lg flex-shrink-0">
                      <Heart className="text-green-600 h-5 w-5" />
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
      </section>

      {/* Section 2 - Insolvency Eligibility */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="main-container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Mobile Layout */}
          <div className="lg:hidden space-y-8">
            <div className="px-4">
              <div className="relative">
                <img 
                  src={section2ImagePath} 
                  alt="Phone showing insolvency process checkmark" 
                  className="w-full rounded-3xl shadow-2xl"
                  style={{height: '275px', objectFit: 'cover'}}
                />
              </div>
            </div>

            <div className="px-4">
              <h2 className="hero-heading font-extrabold text-gray-900 mb-4">
                Maksātnespēja var būt{" "}
                <span className="block">Tev piemērots risinājums.</span>
              </h2>
              
              <p className="text-lg text-gray-600 mb-4 font-medium">
                Fiziskās personas maksātnespējas process ir likumā noteikta iespēja sakārtot savas parādsaistības. Ja no Tevīs neatkārīgi iemeslu dēļ — piemēram, pēc ienākumu samazinājuma, veselības problēmām vai ģimenes dzīves pārmaiņām — vairs nevari segt saistības, šis process var palīdzēt.
              </p>
              
              <p className="text-base text-gray-600 mb-6">
                Procesu var piemērot, ja:
              </p>

              <div className="space-y-2 pt-6">
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center border-2" style={{backgroundColor: '#94f27f', borderColor: '#bff7b2'}}>
                    <span className="font-black text-lg" style={{color: '#013720'}}>1</span>
                  </div>
                  <span className="benefit-text font-extrabold">Persona pēdējo sešu mēnešu laikā ir bijusi Latvijas Republikas nodokļu maksātājs</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center border-2" style={{backgroundColor: '#94f27f', borderColor: '#bff7b2'}}>
                    <span className="font-black text-lg" style={{color: '#013720'}}>2</span>
                  </div>
                  <span className="benefit-text font-extrabold">Parādsaistības ir vismaz 5 000 euro vai pārsniedz 10 000 euro</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center border-2" style={{backgroundColor: '#94f27f', borderColor: '#bff7b2'}}>
                    <span className="font-black text-lg" style={{color: '#013720'}}>3</span>
                  </div>
                  <span className="benefit-text font-extrabold">Finanšiālu grūtību dēļ persona nespēj segt savas parādus</span>
                </div>
              </div>

              <div className="flex flex-col gap-4 pt-6">
                <Button 
                  size="lg" 
                  className="primary-button px-8 py-4 rounded-full text-lg font-black shadow-lg hover:shadow-xl w-full"
                  asChild
                >
                  <a href="tel:+371-123-456-789">
                    <img src={phoneIconPath} alt="Phone" className="mr-3 h-5 w-5" />
                    Zvani tagad!
                  </a>
                </Button>
                
                <ConsultationModal>
                  <Button 
                    size="lg" 
                    className="secondary-button px-8 py-4 rounded-full text-lg font-black shadow-lg hover:shadow-xl w-full"
                  >
                    <img src={mailIconPath} alt="Mail" className="mr-3 h-5 w-5" />
                    Raksti Mums
                  </Button>
                </ConsultationModal>
              </div>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Side - Image */}
            <div className="order-2 lg:order-1">
              <div className="relative">
                <img 
                  src={section2ImagePath} 
                  alt="Phone showing insolvency process checkmark" 
                  className="w-full rounded-3xl shadow-2xl"
                />
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="order-1 lg:order-2 space-y-8">
              <div className="space-y-6">
                <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
                  Maksātnespēja var būt{" "}
                  <span className="block">Tev piemērots risinājums.</span>
                </h2>
                
                <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                  Fiziskās personas maksātnespējas process ir likumā noteikta iespēja sakārtot savas parādsaistības. Ja no Tevīs neatkārīgi iemeslu dēļ — piemēram, pēc ienākumu samazinājuma, veselības problēmām vai ģimenes dzīves pārmaiņām — vairs nevari segt saistības, šis process var palīdzēt.
                </p>
              </div>

              <div className="space-y-4">
                <p className="text-lg font-bold text-gray-900">Procesu var piemērot, ja:</p>
                
                <div className="space-y-4 max-w-lg">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center border-2" style={{backgroundColor: '#94f27f', borderColor: '#bff7b2'}}>
                      <span className="font-black text-lg" style={{color: '#013720'}}>1</span>
                    </div>
                    <p className="benefit-text font-extrabold">
                      Persona pēdējo sešu mēnešu laikā ir bijusi Latvijas Republikas nodokļu maksātājs.
                    </p>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center border-2" style={{backgroundColor: '#94f27f', borderColor: '#bff7b2'}}>
                      <span className="font-black text-lg" style={{color: '#013720'}}>2</span>
                    </div>
                    <p className="benefit-text font-extrabold">
                      Parādsaistības, kurām jau iestājies izpildes termiņš, ir vismaz 5 000 euro vai arī parādsaistības, kuru izpildes termiņš iestāsies gada laikā, pārsniedz 10 000 euro.
                    </p>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center border-2" style={{backgroundColor: '#94f27f', borderColor: '#bff7b2'}}>
                      <span className="font-black text-lg" style={{color: '#013720'}}>3</span>
                    </div>
                    <p className="benefit-text font-extrabold">
                      Finanšiālu grūtību dēļ persona nespēj segt savas parādus.
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button 
                  size="lg" 
                  className="primary-button px-8 py-4 rounded-full text-lg font-black shadow-lg hover:shadow-xl"
                  asChild
                >
                  <a href="tel:+371-123-456-789">
                    <img src={phoneIconPath} alt="Phone" className="mr-3 h-5 w-5" />
                    Zvani tagad!
                  </a>
                </Button>
                
                <ConsultationModal>
                  <Button 
                    size="lg" 
                    className="secondary-button px-8 py-4 rounded-full text-lg font-black shadow-lg hover:shadow-xl"
                  >
                    <img src={mailIconPath} alt="Mail" className="mr-3 h-5 w-5" />
                    Raksti Mums
                  </Button>
                </ConsultationModal>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 - Why Initiate Insolvency Process */}
      <section className="pt-6 pb-16 lg:pt-14 lg:pb-24 bg-white">
        <div className="main-container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1280px]">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
              Kāpēc ierosināt{" "}
              <span className="block">maksātnespējas procesu?</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {/* Card 1 - Risk and Clarity */}
            <div 
              className="rounded-3xl p-8 pt-24 pb-12 text-center shadow-lg border-2 relative min-h-[400px]" 
              style={{
                backgroundImage: `url(${cardBg1Path})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderColor: '#f3e8ff'
              }}
            >
              <div className="absolute -top-24 left-1/2 transform -translate-x-1/2 z-0">
                <img 
                  src={cardIco1Path} 
                  alt="Calendar icon" 
                  className="w-45 h-45"
                  style={{width: '180px', height: '180px'}}
                />
              </div>
              <h3 className="text-3xl font-extrabold text-gray-900 mb-6 relative z-10">
                Risinājums ar skaidru noskaņu
              </h3>
              <p className="text-xl leading-relaxed relative z-10" style={{color: '#475569'}}>
                Maksātnespējas process piedāvā iespēju noteikta termiņā veikt dažāju maksājumu, pēc kā persona tiek atbrīvota no atlikušajām saistībām.
              </p>
            </div>

            {/* Card 2 - Protection from Methods */}
            <div 
              className="rounded-3xl p-8 pt-24 pb-12 text-center shadow-lg border-2 relative min-h-[400px]" 
              style={{
                backgroundImage: `url(${cardBg2Path})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderColor: '#c0f2df'
              }}
            >
              <div className="absolute -top-24 left-1/2 transform -translate-x-1/2 z-0">
                <img 
                  src={cardIco2Path} 
                  alt="Shield icon" 
                  className="w-45 h-45"
                  style={{width: '180px', height: '180px'}}
                />
              </div>
              <h3 className="text-3xl font-extrabold text-gray-900 mb-6 relative z-10">
                Aizsardzība no piedzīņas metodēm
              </h3>
              <p className="text-xl leading-relaxed relative z-10" style={{color: '#475569'}}>
                Procesa laikā tiek apturēti piedzīņas procesi, kontu bloķēšana un izpildraksti – tas sniedz stabilitāti un iespēju situāciju risināt likumīgā, kontrolētā veidā.
              </p>
            </div>

            {/* Card 3 - Debt Growth Stop */}
            <div 
              className="rounded-3xl p-8 pt-24 pb-12 text-center shadow-lg border-2 relative min-h-[400px]" 
              style={{
                backgroundImage: `url(${cardBg3Path})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderColor: '#ffded6'
              }}
            >
              <div className="absolute -top-24 left-1/2 transform -translate-x-1/2 z-0">
                <img 
                  src={cardIco3Path} 
                  alt="Hand stop icon" 
                  className="w-45 h-45"
                  style={{width: '180px', height: '180px'}}
                />
              </div>
              <h3 className="text-3xl font-extrabold text-gray-900 mb-6 relative z-10">
                Apturēts parādu pieaugums
              </h3>
              <p className="text-xl leading-relaxed relative z-10" style={{color: '#475569'}}>
                Pēc maksātnespējas procesa pasludināšanas esošās saistības tiek "iesaldētas" – netiek aprēķināti jauni procenti, līgumsodi vai nokavējuma naudas.
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="primary-button px-8 py-4 rounded-full text-lg font-black shadow-lg hover:shadow-xl"
              asChild
            >
              <a href="tel:+371-123-456-789">
                <img src={phoneIconPath} alt="Phone" className="mr-3 h-5 w-5" />
                Uzzvani tagad!
              </a>
            </Button>
            
            <ConsultationModal>
              <Button 
                size="lg" 
                className="secondary-button px-8 py-4 rounded-full text-lg font-black shadow-lg hover:shadow-xl"
              >
                <img src={mailIconPath} alt="Mail" className="mr-3 h-5 w-5" />
                Raksti Mums
              </Button>
            </ConsultationModal>
          </div>
        </div>
      </section>
    </div>
  );
}