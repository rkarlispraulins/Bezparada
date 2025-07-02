import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function Sikdatnes() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Sīkdatņu politika</h1>
        
        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Kas ir sīkdatne?</h2>
            <p className="text-gray-700 leading-relaxed">
              Sīkdatne ir neliela teksta datne, kas tiek nosūtīta uz Jūsu datoru vai mobilo iekārtu tīmekļa vietnes apmeklēšanās laikā un ko tīmekļa vietne saglabā jūsu datorā vai mobilajā ierīcē, kad jūs atverat vietni. Katrā turpmākajā apmeklējuma reizē sīkdatnes tiek nosūtītas atpakaļ uz izcelsmes mājas lapu vai uz citu mājas lapu, kas atpazīst šo sīkdatni. Sīkdatnes darbojas kā konkrētas mājas lapas atmiņa, ļaujot šai lapai atcerēties Jūsu datoru nākamajā apmeklējuma reizē.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Kā mēs sīkdatnes izmantojam?</h2>
            <p className="text-gray-700 leading-relaxed">
              Bezparāda.lv tīmekļa vietnē tiek izmantotas sīkdatnes, lai tīmekļa vietne atcerētos, vai esat jau piekritis tam, ka mēs šajā vietnē izmantojam sīkdatnes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Google Analytics</h2>
            <p className="text-gray-700 leading-relaxed">
              Bezparāda.lv tīmekļa vietnē ir uzstādīts "Google Inc" izveidotās programmas "Google Analytics" veidotās sīkdatnes. "Google Analytics" sīkdatņu izmantošanas mērķis ir tīmekļa vietnes satura kvalitātes uzlabošana un satura pielāgošana lietotāju vajadzībām. Plašāk par "Google Analytics" pakalpojuma sniegšanas noteikumiem var iepazīties mājaslapā{" "}
              <a href="http://www.google.com/analytics/terms/us.html" className="text-green-600 hover:text-green-700 underline" target="_blank" rel="noopener noreferrer">
                http://www.google.com/analytics/terms/us.html
              </a>
              . Ja Jūs vēlaties, lai bezparāda.lv neiegūst informāciju par Jūsu lietošanas paradumiem, Jūs varat instalēt Google Analytics izvairīšanās paplašinājumu no{" "}
              <a href="https://tools.google.com/dlpage/gaoptout" className="text-green-600 hover:text-green-700 underline" target="_blank" rel="noopener noreferrer">
                https://tools.google.com/dlpage/gaoptout
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Kā izslēgt sīkdatnes?</h2>
            <p className="text-gray-700 leading-relaxed">
              Pēc vēlēšanās varat sīkdatnes kontrolēt un izdzēst. Plašāk lasiet šeit:{" "}
              <a href="https://www.aboutcookies.org" className="text-green-600 hover:text-green-700 underline" target="_blank" rel="noopener noreferrer">
                aboutcookies.org
              </a>
              . Jūs varat izdzēst visas sīkdatnes, kuras ir Jūsu datorā, un lielāko daļu pārlūkprogrammu var iestatīt tā, lai tiktu bloķēta sīkdatņu ievietošana datorā. Taču tādā gadījumā Jums manuāli būs jāpielāgo iestatījumi ikreiz, kad apmeklēsiet tīmekļa vietni, un turklāt pastāv iespējamība, ka daži pakalpojumi un funkcijas nedarbosies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Detalizēta informācija</h2>
            
            <div className="space-y-6">
              <div>
                <p className="text-gray-700 leading-relaxed">
                  <strong>1.</strong> Interneta vietnē www.zabkrumins.lv; www.bezparada.lv (turpmāk – Vietne) tiek vākti dati par Vietnes apmeklētājiem, tādējādi gūstot iespēju Vietnes uzturētājam izvērtēt, cik noderīga ir Vietne, un kā to varētu uzlabot.
                </p>
              </div>

              <div>
                <p className="text-gray-700 leading-relaxed">
                  <strong>2.</strong> Pārzinis, kas Vietnē vāc datus par Vietnes apmeklētājiem, ir Zvērinātu advokātu birojs KRŪMIŅŠ SIA, reģistrācijas numurs 40203341881, turpmāk – Pārzinis.
                </p>
              </div>

              <div>
                <p className="text-gray-700 leading-relaxed">
                  <strong>3.</strong> Pārziņa adrese: Brīvības 155A, Rīga, LV-1012<br />
                  Tālrunis: +371 29025555
                </p>
              </div>

              <div>
                <p className="text-gray-700 leading-relaxed">
                  <strong>4.</strong> Pārzinis nemitīgi pilnveido Vietni, ar mērķi, uzlabot tās lietošanu, tāpēc Pārzinim ir jāzina, kāda informācija ir svarīga Vietnes apmeklētājiem, cik bieži viņi šo Vietni apmeklē, kādas ierīces un pārlūkprogrammu viņi izmanto, no kāda reģiona nāk apmeklētāji, un kādu saturu vislabprātāk lasa.
                </p>
              </div>

              <div>
                <p className="text-gray-700 leading-relaxed">
                  <strong>5.</strong> Pārzinis izmanto sistēmu Google Analytics, kas ļauj Pārzinim analizēt, kā apmeklētāji izmanto Vietni. Par to, kā darbojas Google Analytics pamatprincipi, iespējams uzzināt Google mājas lapā{" "}
                  <a href="https://support.google.com/analytics/answer/1012034?hl=lten&ref_topic=6157800" className="text-green-600 hover:text-green-700 underline" target="_blank" rel="noopener noreferrer">
                    https://support.google.com/analytics/answer/1012034?hl=lten&ref_topic=6157800
                  </a>
                  . Pārzinis izmanto savāktos datus savās tiesiskajās interesēs, lai uzlabotu izpratni par Vietnes apmeklētāju vajadzībām un uzlabotu pieejamību Pārziņa publiskotajai informācijai. Apmeklētāji tiks informēti par sīkdatņu izmantošanu un konsultēti par savām izvēlēm sīkdatņu izmantošanā.
                </p>
              </div>

              <div>
                <p className="text-gray-700 leading-relaxed">
                  <strong>6.</strong> Serveris, kurā izvietota Vietne, var reģistrēt apmeklētāja nosūtītos pieprasījumus (izmantotā ierīce, pārlūkprogramma, IP adrese, piekļuves datums un laiks). Šajā punktā minētie dati tiek izmantoti tehniskiem nolūkiem: lai nodrošinātu Vietnes pienācīgu funkcionēšanu un drošību un izmeklētu iespējamos drošības incidentus. Šajā punktā minēto datu vākšanas pamats ir Pārziņa tiesiskā interese nodrošināt Vietnes tehnisku pieejamību un integritāti.
                </p>
              </div>

              <div>
                <p className="text-gray-700 leading-relaxed">
                  <strong>7.</strong> Sīkdatnes ir nelieli faili, kurus, katru reizi, kad apmeklētājs apmeklē Vietni, pārlūkprogramma saglabā apmeklētāja datorā tādā apmērā, kā norādīts apmeklētāja datora pārlūkprogrammas iestatījumos. Atsevišķas sīkdatnes tiek izmantotas, lai atlasītu un piemērotu apmeklētājam piedāvājamo informāciju un reklāmas, pamatojoties uz saturu, ko apmeklētājs aplūkojis agrāk, un tādējādi veidotu apmeklētājiem Vietnes lietošanu vienkāršu, ērtu un piemērotu.
                </p>
              </div>

              <div>
                <p className="text-gray-700 leading-relaxed">
                  <strong>8.</strong> Vietne izmanto sīkdatnes, lai vāktu lietotāja IP adreses un pārlūkošanas informāciju un ļautu Vietnei atcerēties apmeklētāja izvēli. Sīkdatnes ļauj Pārzinim sekot līdzi Vietnes datu plūsmai un lietotāju mijiedarbībai ar Vietni – Pārzinis izmanto šos datus, lai analizētu apmeklētāju uzvedību un uzlabotu Vietni. Sīkdatņu izmantošanas tiesiskais pamats ir Pārziņa leģitīmā interese nodrošināt Vietnes funkcionalitāti, pieejamību un integritāti.
                </p>
              </div>

              <div>
                <p className="text-gray-700 leading-relaxed">
                  <strong>9.</strong> Apmeklētājs var kontrolēt un/vai dzēst sīkdatnes pēc savas izvēles. Plašāka informācija par šo procesu ir pieejama šeit{" "}
                  <a href="https://www.aboutcookies.org" className="text-green-600 hover:text-green-700 underline" target="_blank" rel="noopener noreferrer">
                    www.aboutcookies.org
                  </a>
                  . Apmeklētājs var izdzēst visas sīkdatnes, kuras ir viņa datorā, un lielāko daļu pārlūkprogrammu var iestatīt tā, lai tiktu bloķēta sīkdatņu ievietošana datorā. Apmeklētājs var atteikties no sīkdatnēm pārlūkprogrammas izvēlnē vai{" "}
                  <a href="https://tools.google.com/dlpage/gaoptout" className="text-green-600 hover:text-green-700 underline" target="_blank" rel="noopener noreferrer">
                    https://tools.google.com/dlpage/gaoptout
                  </a>
                  . Lai veiktu nepieciešamos uzstādījumus, apmeklētājam jāievēro attiecīgās pārlūkprogrammas norādījumi.
                </p>
              </div>

              <div>
                <p className="text-gray-700 leading-relaxed">
                  <strong>10.</strong> Statistikas datiem par Vietnes apmeklētājiem var piekļūt tikai tie Pārziņa darbinieki, kuri ir atbildīgi par tādu datu analīzi.
                </p>
              </div>

              <div>
                <p className="text-gray-700 leading-relaxed">
                  <strong>11.</strong> Ja nav noteikts citādi, sīkdatnes tiek glabātas, kamēr tiek izpildīta darbība, kādam nolūkam tās vāktas, un pēc tam tās tiek dzēstas.
                </p>
              </div>

              <div>
                <p className="text-gray-700 leading-relaxed">
                  <strong>12.</strong> Pārzinis apliecina, ka sīkdatnes un statistikas informācija tiks apkopota, apstrādāta un glabāta saskaņā ar Eiropas Savienības normatīvo aktu prasībām, tai skaitā 2016. gada 27. aprīļa Eiropas Parlamenta un ES Padomes Personas datu aizsardzības regulu Nr. 2016/679.
                </p>
              </div>

              <div>
                <p className="text-gray-700 leading-relaxed">
                  <strong>13.</strong> Pārzinis patur tiesības jebkurā brīdī mainīt šos noteikumus. Vietnes apmeklētāja pienākums ir patstāvīgi pārbaudīt Vietnes saturu, lai iepazītos ar noteikumu izmaiņām.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
}