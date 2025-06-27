import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ContactButtons } from "@/components/contact-buttons";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import bottomBackgroundPath from "@assets/bottom_background_1750934610872.jpg";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Kas ir maksātnespējas process?",
    answer: "Maksātnespējas process ir juridiska procedūra, kas ļauj fiziskajām personām atbrīvoties no parādiem, ja tie nav samaksājami. Process notiek tiesas uzraudzībā un ilgst parasti 1-3 gadus."
  },
  {
    question: "Cik ilgs ir maksātnespējas process?",
    answer: "Maksātnespējas process parasti ilgst 12-36 mēnešus atkarībā no konkrētās situācijas. Vienkāršākos gadījumos process var būt īsāks, sarežģītākos - garāks."
  },
  {
    question: "Kādi ir nosacījumi maksātnespējas pieteikšanai?",
    answer: "Galvenie nosacījumi ir: parādu summa pārsniedz 5000 EUR, nav iespējams tos samaksāt paredzamajā laikā, un jums ir regulāri ienākumi vai īpašums, ko var realizēt."
  },
  {
    question: "Cik maksā maksātnespējas process?",
    answer: "Valsts nodeva ir 70 EUR, bet kopējās izmaksas var variēt no 800 līdz 2500 EUR atkarībā no situācijas sarežģītības. Mēs piedāvājam bezmaksas konsultāciju, lai novērtētu jūsu gadījumu."
  },
  {
    question: "Vai var saglabāt mājokli maksātnespējas procesā?",
    answer: "Jā, daudzos gadījumos ir iespējams saglabāt mājokli. Tas ir atkarīgs no mājas vērtības, parādu summas un ģimenes apstākļiem. Mēs palīdzēsim izvērtēt jūsu iespējas."
  },
  {
    question: "Kā maksātnespēja ietekmē kredītvēsturi?",
    answer: "Maksātnespējas ieraksts paliek kredītvēsturē 5 gadus. Tomēr tas nenozīmē, ka nevarēsiet saņemt kredītu - pēc procesa pabeigšanas jūsu finansiālā situācija būs labāka."
  },
  {
    question: "Vai darba devējs uzzinās par maksātnespēju?",
    answer: "Darba devējs var uzzināt par maksātnespēju tikai tad, ja viņš mērķtiecīgi pārbauda jūsu datus publiskajā reģistrā. Tiesa neziņo darba devējiem par maksātnespējas procesiem."
  },
  {
    question: "Kādi parādi netiek dzēsti maksātnespējā?",
    answer: "Netiek dzēsti alimentu parādi, krimināltiesisko sodu naudas, nodokļu parādi (ar izņēmumiem), kā arī parādi, kas radušies krāpšanas rezultātā."
  }
];

export default function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Title Section */}
      <div className="pt-20 pb-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="main-container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6" style={{color: '#013720'}}>
            Biežāk Uzdotie Jautājumi
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Atbildes uz visbiežāk uzdotajiem jautājumiem par maksātnespējas procesu un to, kā mēs varam jums palīdzēt.
          </p>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-16">
        <div className="main-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {faqData.map((item, index) => (
                <div 
                  key={index}
                  className="border border-gray-200 rounded-2xl overflow-hidden transition-all duration-200 hover:shadow-md"
                >
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full px-6 py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                  >
                    <h3 className="text-lg font-bold pr-4" style={{color: '#013720'}}>
                      {item.question}
                    </h3>
                    <ChevronDown 
                      size={24} 
                      className={`flex-shrink-0 transition-transform duration-200 ${
                        openItems.includes(index) ? 'rotate-180' : ''
                      }`}
                      style={{color: '#013720'}}
                    />
                  </button>
                  
                  <div className={`overflow-hidden transition-all duration-300 ${
                    openItems.includes(index) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="px-6 pb-6 border-t border-gray-200 bg-gray-50">
                      <p className="text-gray-700 leading-relaxed pt-4">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section with Background */}
      <div 
        className="bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bottomBackgroundPath})` }}
      >
        {/* CTA Section */}
        <section className="py-16 lg:py-24">
          <div className="main-container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-black mb-6" style={{color: '#013720'}}>
              Vai jums ir citi jautājumi?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Sazinieties ar mums bezmaksas konsultācijai. Mēs atbildēsim uz visiem jūsu jautājumiem par maksātnespējas procesu.
            </p>
            <div className="flex justify-center">
              <ContactButtons />
            </div>
          </div>
        </section>

        {/* Footer with 80px bottom space */}
        <div style={{ paddingBottom: '80px' }}>
          <Footer />
        </div>
      </div>
    </div>
  );
}