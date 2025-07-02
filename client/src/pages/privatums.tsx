import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function Privatums() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="container mx-auto px-4 max-w-4xl" style={{ paddingTop: '150px', paddingBottom: '48px' }}>
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Privātuma politika</h1>
        
        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Pārzinis un kontaktinformācija</h2>
            <div className="text-gray-700 leading-relaxed space-y-2">
              <p><strong>Pārzinis:</strong> Zvērinātu advokātu birojs KRŪMIŅŠ SIA</p>
              <p><strong>Reģistrācijas numurs:</strong> 40203341881</p>
              <p><strong>Adrese:</strong> Brīvības iela 155A, Rīga, LV-1012</p>
              <p><strong>Tālrunis:</strong> +371 29025555</p>
              <p><strong>E-pasts:</strong> info@zabkrumins.lv</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Datu apstrādes mērķis un tiesiskais pamats</h2>
            <div className="text-gray-700 leading-relaxed space-y-4">
              <p><strong>Jūsu personas dati tiek apstrādāti šādiem mērķiem:</strong></p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Lai noslēgtu un izpildītu līgumu par juridisko pakalpojumu sniegšanu;</li>
                <li>Lai nodrošinātu atbilstošas juridiskās konsultācijas un pakalpojumus.</li>
              </ul>
              
              <p><strong>Apstrādes tiesiskais pamats:</strong></p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>VDAR 6. panta 1. punkta b) apakšpunkts – datu apstrāde ir nepieciešama līguma izpildei vai līguma noslēgšanai pēc datu subjekta pieprasījuma;</li>
                <li>VDAR 6. panta 1. punkta c) apakšpunkts – datu apstrāde ir nepieciešama juridiska pienākuma izpildei, kam pakļauts pārzinis.</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Apstrādājamo datu kategorijas</h2>
            <div className="text-gray-700 leading-relaxed">
              <p className="mb-4">Tiek apstrādāti šādi personas dati, kurus Jūs kā klients iesniedzat, lai saņemtu juridiskos pakalpojumus:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Identifikācijas dati (vārds, uzvārds, personas kods vai dzimšanas dati);</li>
                <li>Kontaktinformācija (tālrunis, e-pasts, dzīvesvietas adrese);</li>
                <li>Finanšu dati (informācija par maksājumiem, saistībām, ienākumiem u.c.);</li>
                <li>Dati par darba attiecībām (nodarbinātības statuss, amata nosaukums, darba devējs u.c.);</li>
                <li>Citi dati, kurus iesniedzat juridiskās konsultācijas ietvaros.</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Datu avots</h2>
            <p className="text-gray-700 leading-relaxed">
              Dati tiek iegūti tieši no Jums kā klienta.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Datu saņēmēji un nodošana trešajām personām</h2>
            <div className="text-gray-700 leading-relaxed space-y-4">
              <p>Jūsu dati netiek nodoti trešajām personām, izņemot:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>ja tas nepieciešams, lai izpildītu juridisko pienākumu (piemēram, pēc valsts iestāžu pieprasījuma);</li>
                <li>ja tas nepieciešams klienta uzdevuma izpildei, piemēram, tiesās vai valsts iestādēs ar klienta piekrišanu.</li>
              </ul>
              <p>Dati netiek pārsūtīti ārpus Eiropas Savienības vai Eiropas Ekonomikas zonas.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Datu glabāšanas termiņš</h2>
            <div className="text-gray-700 leading-relaxed">
              <p className="mb-2">Personas dati tiek glabāti:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>kamēr ir spēkā līgums vai pakalpojumu sniegšanas attiecības;</li>
                <li>ievērojot normatīvo aktu prasības par dokumentu uzglabāšanas termiņiem.</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Jūsu kā datu subjekta tiesības</h2>
            <div className="text-gray-700 leading-relaxed">
              <p className="mb-4">Jums ir šādas tiesības:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>piekļūt saviem datiem;</li>
                <li>pieprasīt datu labošanu vai dzēšanu;</li>
                <li>ierobežot apstrādi;</li>
                <li>iebilst pret apstrādi, ja tā notiek uz likumīgo interešu pamata;</li>
                <li>atsaukt savu piekrišanu (ja apstrāde notiek uz piekrišanas pamata);</li>
                <li>iesniegt sūdzību Datu valsts inspekcijā ({" "}
                  <a href="https://www.dvi.gov.lv" className="text-green-600 hover:text-green-700 underline" target="_blank" rel="noopener noreferrer">
                    www.dvi.gov.lv
                  </a>
                  ).
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Automatizēta lēmumu pieņemšana un profilēšana</h2>
            <p className="text-gray-700 leading-relaxed">
              Jūsu dati netiek izmantoti automatizētai lēmumu pieņemšanai vai profilēšanai.
            </p>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
}