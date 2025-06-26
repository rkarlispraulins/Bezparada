import { ConsultationModal } from "@/components/consultation-modal";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Calendar,
  Star,
  Heart,
  MessageSquare
} from "lucide-react";

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
import kruminsImagePath from "@assets/krumins_ZAB_advokatsB_1750929258775.jpg";
import kruminsLogoPath from "@assets/krumins_logo_1750929443251.png";

import bottomBackgroundPath from "@assets/bottom_background_1750934610872.jpg";
import whatsappIcon2Path from "@assets/whatsapp_ico_2_1750968760747.png";


export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-green-50">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section 
        className="relative overflow-hidden pt-16"
        style={{
          backgroundImage: `url(${backgroundImagePath})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >

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
                      <img src={whatsappIcon2Path} alt="WhatsApp" className="mr-3 h-5 w-5" />
                      Sazinies tagad
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
                      <img src={whatsappIcon2Path} alt="WhatsApp" className="mr-3 h-5 w-5" />
                      Sazinies tagad
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
                    <img src={whatsappIcon2Path} alt="WhatsApp" className="mr-3 h-5 w-5" />
                    Sazinies tagad
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
                    <img src={whatsappIcon2Path} alt="WhatsApp" className="mr-3 h-5 w-5" />
                    Sazinies tagad
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
          <div className="text-center mb-32">
            <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
              Kāpēc ierosināt{" "}
              <span className="block">maksātnespējas procesu?</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-8 gap-y-32 mb-12">
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
                  className="card-icon"
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
                  className="card-icon"
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
                  className="card-icon"
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
                <img src={whatsappIcon2Path} alt="WhatsApp" className="mr-3 h-5 w-5" />
                Sazinies tagad
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

      {/* Section 4 - Expert Introduction */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="main-container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1280px]">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Mobile: Images first, Desktop: Content */}
            <div className="lg:pr-8 order-2 lg:order-1">
              <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-8 leading-tight">
                Izvēlies pārbaudītu pieredzi maksātnespējas procesos.
              </h2>
              
              <div className="space-y-6">
                <p className="text-lg text-gray-600 leading-relaxed">
                  Pakalpojumu nodrošina Zvērināta Advokata Biroja "Krūmiņš". Biroja vadošais partneris Kalvis Krūmiņš ir ar vairāk nekā 10 gadu pieredzi maksātnespējas administratora amatā un specializējas fizisko personu maksātnespējas procesos.
                </p>
                
                <p className="text-lg text-gray-600 leading-relaxed">
                  Konsultācija pie pieredzējuša advokata vadītās komandas nodrošina, ka Tava situācija tiks izvērtēta profesionāli un atbilstoši likumam.
                </p>
              </div>
            </div>

            {/* Mobile: Images first, Desktop: Images */}
            <div className="relative order-1 lg:order-2">
              {/* Main image */}
              <div className="rounded-3xl overflow-hidden shadow-xl">
                <img 
                  src={kruminsImagePath} 
                  alt="Kalvis Krūmiņš - Legal expert" 
                  className="w-full h-[400px] lg:h-[500px] object-cover"
                />
              </div>
              
              {/* Overlaid logo image */}
              <div className="absolute -bottom-8 right-8 w-48 h-64 rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src={kruminsLogoPath}
                  alt="Krūmiņš Law Firm Logo"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 - Contact CTA */}
      <section 
        className="py-16 lg:py-24 bg-gray-50 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bottomBackgroundPath})` }}
      >
        <div className="main-container mx-auto px-4 sm:px-6 lg:px-8 max-w-[800px]">
          <div className="text-center">
            {/* Title */}
            <h2 className="text-3xl lg:text-6xl font-extrabold mb-6 leading-tight" style={{ color: '#013720' }}>
              Lielas pārmaiņas<br />sākas ar mazu soli.
            </h2>
            
            {/* Small CTA text */}
            <p className="mb-8 leading-relaxed" style={{ fontSize: '26px', color: '#777777' }}>
              Pirmais solis nav lēmums – tā ir iespēja uzziņāt, kas Tev ir pieejams.<br />
              Pirmā konsultācija bez maksas.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
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
                  <img src={mailIconPath} alt="Calendar" className="mr-3 h-5 w-5" />
                  Raksti Mums
                </Button>
              </ConsultationModal>
            </div>
            
            {/* Text with CTA to leave message */}
            <p className="mb-8" style={{ fontSize: '26px', color: '#777777' }}>
              Vai atstāj ziņu, un mēs ar<br />
              Tevi sazināsimies vienas dienas laikā.
            </p>
            
            {/* Contact Form */}
            <div className="max-w-lg mx-auto space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input 
                  type="text" 
                  placeholder="Tavs vārds"
                  className="px-4 py-3 lg:py-4 border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent text-base lg:text-lg h-11 lg:h-[50px]"
                  style={{ borderRadius: '24px' }}
                />
                <input 
                  type="text" 
                  placeholder="Tavs uzvārds"
                  className="px-4 py-3 lg:py-4 border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent text-base lg:text-lg h-11 lg:h-[50px]"
                  style={{ borderRadius: '24px' }}
                />
              </div>
              
              <input 
                type="email" 
                placeholder="Tavs epasts"
                className="w-full px-4 py-3 lg:py-4 border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent text-base lg:text-lg h-11 lg:h-[50px]"
                style={{ borderRadius: '24px' }}
              />
              
              <div className="flex">
                <div className="relative">
                  <div className="px-4 py-3 lg:py-4 border border-gray-300 bg-white text-base lg:text-lg h-11 lg:h-[50px] flex items-center gap-2 cursor-pointer min-w-[100px]" style={{ borderRadius: '24px 0 0 24px' }}>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                    <span>+371</span>
                  </div>
                </div>
                <input 
                  type="tel" 
                  placeholder="Tavs Tālruņa Numurs"
                  className="flex-1 px-4 py-3 lg:py-4 border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent text-base lg:text-lg h-11 lg:h-[50px]"
                  style={{ borderRadius: '0 24px 24px 0' }}
                />
              </div>
              
              <textarea 
                placeholder="Detaļas"
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none text-base lg:text-lg"
                style={{ borderRadius: '24px' }}
              ></textarea>
              
              <label className="flex items-center gap-3 text-gray-600" style={{ fontSize: '18px' }}>
                <input type="checkbox" className="rounded w-6 h-6" />
                Es piekrītu Privātuma Politikai
              </label>
              
              <Button className="w-full primary-button px-6 py-3 rounded-full text-lg font-black">
                Nosūtīt
              </Button>
            </div>
          </div>
          
          {/* Footer */}
          <Footer />
        </div>
      </section>
    </div>
  );
}