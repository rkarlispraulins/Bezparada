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
    question: "Kādi dokumenti man būs jāiesniedz, lai pieteiktos maksātnespējai?",
    answer: "Jums būs jāiesniedz dažādi dokumenti, kas apliecina jūsu ienākumus, parādus un mantu. Būs nepieciešams, piemēram:\n\n• izziņa no VID par ienākumiem\n• izziņa no VSAA par ienākumiem un sociālajām iemaksām\n• deklarētās dzīvesvietas izziņa\n• dokumenti par saistībām, izpildu lietām, u.c.\n• izziņa, izdruka no zemesgrāmatas\n• izziņa, izdruka no CSDD\n• u.c. dokumenti atkarībā no situācijas"
  },
  {
    question: "Kas var pieteikties maksātnespējai?",
    answer: "Maksātnespējas procesu var pieteikt jebkura persona, ja ir reģistrējusies Latvijā vismaz 6 mēnešus un:\n\n• personai ir vismaz 5000 eiro parāds, kurus nevar nomaksāt\n• vai tuvākajā gadā būs vairāk nekā 10 000 eiro parāds, ko nevarēs samaksāt\n• Ir iespējama maksātnespēja kopā ar ģimenes locekļiem\n• atsevišķos gadījumos arī, ja persona ir galvojusi par citu cilvēku parādu vai nevar nosegt parādus individuālā komersanta, individuālā (ģimenes) uzņēmuma, zemnieku saimniecības, zvejnieku saimniecības vai saimnieciskās darbības ietvaros"
  },
  {
    question: "Kad maksātnespēju nevar piemērot?",
    answer: "Pastāv ierobežojumi piemērot maksātnespēju, ja:\n\n• pēdējos 3 gados esat apzināti maldinājis kreditorus\n• esat sodīts par ļaunprātīgu kredīta izmantošanu\n• jau esat izgājis maksātnespējas procesu pēdējo 10 gadu laikā\n• esat sodīts par nodokļu nemaksāšanu pēdējo 5 gadu laikā\n• pēdējā gada laikā process jums jau ir bijis un ticis pārtraukts"
  },
  {
    question: "Kā norit maksātnespējas process?",
    answer: "Jūs iesniedzat pieteikumu tiesā.\n\nTiesa lemj, vai to pieņemt, un ieceļ administratoru.\n\nAdministrators pieprasa informāciju par jūsu ienākumiem, īpašumu un parādiem.\n\nMaksātnespējas process ir sadalīts divos posmos:\n\n• Bankrota posms – apzina visu informāciju un pārdod Jūsu mantu, ja Jums ir, piemēram, nekustamais īpašums vai automašīna\n• Saistību dzēšanas posms – noteiktu laiku daļu no ienākumiem maksājat kreditoriem, pēc tam atlikušie parādi tiek dzēsti pilnībā"
  },
  {
    question: "Kas notiek pēc tam, kad plāns izpildīts?",
    answer: "Kad visi maksājumi veikti un termiņš beidzies, pārējie parādi tiek dzēsti – neviens tos vairs nevar piedzīt. Jūs kļūstat finansiāli brīvs."
  },
  {
    question: "Kādi parādi netiek dzēsti maksātnespējas laikā?",
    answer: "Maksātnespējas laikā nav iespējams dzēst:\n\n• uzturlīdzekļus (piemēram, alimentus)\n• sodus, kompensācijas par nodarīto kaitējumu\n• nodrošinātās saistības, ja Jūsu īpašums netiek pārdots, bet saglabāts"
  },
  {
    question: "Cik ilgi jāveic maksājumi?",
    answer: "Tas atkarīgs no tā, cik lielu parādu varēsiet atmaksāt: 6 mēneši līdz 3 gadi, atkarībā no Jūsu ienākumiem un parāda apmēra."
  },
  {
    question: "Kas ir ģimenes maksātnespēja?",
    answer: "Ja vairākiem ģimenes locekļiem (piemēram, laulātajiem, bērniem, vecākiem) ir saistīti parādi, viņi var kopā iesniegt vienu maksātnespējas pieteikumu. Šādā veidā tiek ietaupīts uz kopējām maksātnespējas izmaksām, taču no parādiem tiek atbrīvoti visi ģimenes locekļi, kas maksātnespējas procesu iziet."
  },
  {
    question: "Vai varu dzīvot savā mājoklī maksātnespējas laikā?",
    answer: "Jā, ja īpašums ir ieķīlāts bankai un izdodas ar to vienoties, ka jūs turpināt maksāt kredītu īpašumu nepārdod. Tā ir savstarpēja vienošanās, nevis automātisks nosacījums."
  },
  {
    question: "Cik tas maksās?",
    answer: "Atkarībā no tā, kādi pakalpojumi Jums būs nepieciešami, vai tikai sagatavot kādu konkrētu dokumentu, kas var maksāt sākot no EUR 50, līdz atbalstam, konsultācijām un visu dokumentu sagatavošanai visa procesa gaitā vairāku gadu garumā, kas var maksāt līdz EUR 1900.\n\nLai izietu procesu, Valsts kasē ir jāiemaksā depozīts divu minimālo mēnešalgu apmērā (šobrīd EUR 1480) un valsts nodeva EUR 80."
  },
  {
    question: "Vai ir garantija ka maksātnespējas process būs veiksmīgs?",
    answer: "Šādu garantiju nav iespējams sniegt, taču mūsu mērķis ir sniegt caurskatāmus un godprātīgus pakalpojumus tikai personām, kam ir vislabākās izredzes procesu veiksmīgi pabeigt, ja sākotnējās konsultācijas laikā mēs redzēsim, ka pastāv risks, ka procesu Jūs nevarēsiet iziet, mēs to godīgi Jums pateiksim, nevis piestādīsim tālāk rēķinus un ņemsim naudu par pakalpojumu, kas Jums nav piemērots.\n\nJa gadījumā pēc konsultācijas mēs būsim devuši \"zaļo gaismu\" un pateikuši, ka Jūs atbilstat visām prasībām, lai veiksmīgi izietu procesu, taču tas kādu iemeslu dēļ neizdosies, mēs Jums atgriezīsim samaksāto naudu par pakalpojumiem."
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