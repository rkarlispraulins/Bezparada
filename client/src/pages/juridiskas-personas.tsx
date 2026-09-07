import { useState } from "react";
import { Link } from "wouter";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { ContactButtons } from "@/components/contact-buttons";
import { ContactInfoForm } from "@/components/contact-info-form";
import { Button } from "@/components/ui/button";
import { Check, ChevronDown, Building2, Mail } from "lucide-react";

import tenMinIconPath from "@assets/10_min_ico_1750881727155.png";
import confIconPath from "@assets/conf_ico_1750881727156.png";
import zvBirIconPath from "@assets/zv_bir_ico_1750881727156.png";
import backgroundImagePath from "@assets/bezparada_jur_bg_4.jpg";
import guideCardBgPath from "@assets/pdf_bg_flip.jpg";
import guideCardBgMobilePath from "@assets/pdf_Bg_iphone.png";
import heroImagePath from "@assets/bp_jur_top.jpg";
import section2ImagePath from "@assets/var_but.jpg";
import cardBg1Path from "@assets/card_bg1_1750926232986.png";
import cardBg2Path from "@assets/card_bg2_1750926232987.png";
import cardBg3Path from "@assets/card_bg3_1750926232987.png";
import cardIco1Path from "@assets/card1_cal.svg";
import cardIco2Path from "@assets/card2_shield.svg";
import cardIco3Path from "@assets/card3_stop.svg";
import kruminsImagePath from "@assets/zab_krumins_team_2.jpg";
import kruminsLogoPath from "@assets/krumins_about1_1751899119601.png";
import bottomBackgroundPath from "@assets/bg_bottom.jpg";

// All 9 statutory insolvency signs (Maksātnespējas likuma 57. pants)
const ALL_SIGNS = [
  "Nav bijis iespējams izpildīt tiesas nolēmumu par parāda piedziņu no uzņēmuma.",
  "SIA vai AS pamatparāds pārsniedz 4 268 EUR, un pēc kreditora brīdinājuma tas nav samaksāts trīs nedēļu laikā.",
  "Citam maksātnespējas subjektam pamatparāds pārsniedz 2 134 EUR (tādi paši brīdinājuma nosacījumi).",
  "Divu mēnešu laikā nav pilnībā izmaksāta alga, kaitējuma atlīdzība vai veiktas sociālās iemaksas.",
  "Termiņā iestājušās saistības nav nokārtotas ilgāk nekā divus mēnešus.",
  "Likvidācijas laikā aktīvu nepietiek visu pamatoto prasījumu segšanai.",
  "Gada laikā otro reizi ierosināta tiesiskās aizsardzības procesa (TAP) lieta, bet TAP nav pasludināts.",
  "TAP laikā konstatēti likumā noteikti būtiski pārkāpumi.",
  "Uzņēmums nespēj izpildīt TAP pasākumu plānā paredzētās saistības.",
];

// Most common signs in practice (shown by default)
const COMMON_SIGNS = [
  "Termiņā iestājušās saistības nav nokārtotas ilgāk nekā divus mēnešus.",
  "Divu mēnešu laikā nav pilnībā izmaksātas algas vai veiktas sociālās iemaksas.",
  "Uzņēmuma mantas nepietiek visu pamatoto saistību segšanai.",
];

const GUIDE_INCLUDES = [
  "Visas 9 likuma pazīmes un kad pieteikums ir obligāts",
  "Process soli pa solim — no pieteikuma līdz izslēgšanai no reģistra",
  "Valdes locekļa atbildība un kā sevi pasargāt",
  "Izmaksas: valsts nodeva, depozīts un citi maksājumi",
  "Atbildes uz biežāk uzdotajiem jautājumiem",
];

export default function JuridiskasPersonas() {
  const [showAllSigns, setShowAllSigns] = useState(false);
  const [guideEmail, setGuideEmail] = useState("");
  const [guideConsent, setGuideConsent] = useState(false);
  const [guideError, setGuideError] = useState("");
  const [guideSubmitted, setGuideSubmitted] = useState(false);

  const handleGuideSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!/^\S+@\S+\.\S+$/.test(guideEmail)) {
      setGuideError("Lūdzu, ievadi derīgu e-pasta adresi.");
      return;
    }
    if (!guideConsent) {
      setGuideError("Lūdzu, apstiprini piekrišanu, lai saņemtu ceļvedi.");
      return;
    }
    setGuideError("");
    // TODO: wire to a lead endpoint (send the guide + capture the email).
    setGuideSubmitted(true);
  };

  return (
    <div className="jur-page min-h-screen bg-gradient-to-b from-orange-50 to-green-50">
      {/* Navigation */}
      <Navbar />

      {/* Section 1 — HERO */}
      <section className="relative overflow-hidden pt-16">
        {/* Background image at 60% opacity */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${backgroundImagePath})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            opacity: 1,
          }}
        />
        <div className="relative pt-8 lg:pt-24 pb-8 lg:pb-40">
          <div className="main-container mx-auto px-4 sm:px-6 lg:px-8">
            {/* Mobile Layout */}
            <div className="lg:hidden">
              <div className="mb-8 px-4">
                <img
                  src={heroImagePath}
                  alt="Uzņēmējs noskaidro juridiskās personas maksātnespējas risinājumu"
                  className="w-full h-[275px] object-cover rounded-3xl"
                />
              </div>

              <div className="px-4">
                <h1 className="text-3xl font-extrabold text-gray-900 mb-4 leading-tight">
                  Uzņēmums parādos?{" "}
                  <span className="block">Ir likumīgs ceļš, kā to noslēgt.</span>
                </h1>

                <p className="text-lg text-gray-600 mb-4 font-medium">
                  Mēs palīdzam sagatavot nepieciešamos dokumentus un iesniegt juridiskās personas maksātnespējas procesa pieteikumu atbilstoši Latvijas normatīvajam regulējumam.
                </p>

                <p className="text-base mb-6 font-extrabold" style={{ color: "#111827" }}>
                  Piesakies bezmaksas konsultācijai un noskaidro, vai Tavam uzņēmumam pieteikums jau ir obligāts.
                </p>

                <ContactButtons variant="column" fullWidth whatsappUrl="/whatsapp-open?t=jur" messageUrl="/kontakti?t=jur" />

                <div className="space-y-3 pt-6">
                  <div className="flex items-center space-x-3">
                    <img src={tenMinIconPath} alt="10 minūtes" className="w-8 h-8 flex-shrink-0" />
                    <span className="benefit-text font-extrabold">10 minūšu zvanā izvērtējam uzņēmuma situāciju</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <img src={zvBirIconPath} alt="Advokātu birojs" className="w-8 h-8 flex-shrink-0" />
                    <span className="benefit-text font-extrabold">Zvērinātu Advokātu Birojs</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <img src={confIconPath} alt="Konfidenciāli" className="w-8 h-8 flex-shrink-0" />
                    <span className="benefit-text font-extrabold">Konfidenciāla pieeja</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop Layout */}
            <div className="hidden lg:grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="space-y-8">
                <div className="space-y-6">
                  <h1 className="hero-heading font-extrabold text-gray-900">
                    Uzņēmums parādos?
                    <span className="block">Ir likumīgs ceļš, kā to noslēgt.</span>
                  </h1>
                  <p className="hero-subtitle text-gray-600 leading-relaxed max-w-lg">
                    Mēs palīdzam sagatavot nepieciešamos dokumentus un iesniegt juridiskās personas maksātnespējas procesa pieteikumu atbilstoši Latvijas normatīvajam regulējumam.
                  </p>
                  <p className="hero-cta-text font-extrabold max-w-lg" style={{ color: "#111827" }}>
                    Piesakies bezmaksas konsultācijai un noskaidro, vai Tavam uzņēmumam pieteikums jau ir obligāts.
                  </p>
                </div>

                <ContactButtons variant="row" whatsappUrl="/whatsapp-open?t=jur" messageUrl="/kontakti?t=jur" />

                <div className="space-y-2 pt-6">
                  <div className="flex items-center space-x-3">
                    <img src={tenMinIconPath} alt="10 minūtes" className="w-8 h-8 flex-shrink-0" />
                    <span className="benefit-text font-extrabold">10 minūšu zvanā izvērtējam uzņēmuma situāciju</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <img src={zvBirIconPath} alt="Advokātu birojs" className="w-8 h-8 flex-shrink-0" />
                    <span className="benefit-text font-extrabold">Zvērinātu Advokātu Birojs</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <img src={confIconPath} alt="Konfidenciāli" className="w-8 h-8 flex-shrink-0" />
                    <span className="benefit-text font-extrabold">Konfidenciāla pieeja</span>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src={heroImagePath}
                    alt="Uzņēmējs noskaidro juridiskās personas maksātnespējas risinājumu"
                    className="w-full h-[600px] object-cover"
                  />
                </div>

                <div className="absolute -top-4 -right-8 max-w-sm bg-white rounded-2xl p-5 shadow-xl border border-green-100 z-10">
                  <div className="flex items-start space-x-3">
                    <div className="bg-green-100 p-2 rounded-lg flex-shrink-0">
                      <Building2 className="text-green-600 h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-700 text-sm font-medium leading-relaxed">
                        Skaidrs, likumīgs ceļš, kā pabeigt uzņēmuma darbību — un noslēgt valdes locekļa pienākumus.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 — VAI PROCESS IR PIEMĒROJAMS? */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="main-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Image */}
            <div className="order-2 lg:order-1 lg:sticky lg:top-24">
              <div className="relative">
                <img
                  src={section2ImagePath}
                  alt="Uzņēmējs pilsētas biznesa vidē"
                  className="w-full rounded-3xl shadow-2xl"
                />
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2 space-y-8">
              <div className="space-y-6">
                <h2 className="hero-heading font-extrabold text-gray-900">
                  Maksātnespēja var būt{" "}
                  <span className="block">Tava uzņēmuma risinājums.</span>
                </h2>

                <p className="text-lg text-gray-600 leading-relaxed">
                  Juridiskās personas maksātnespējas process ir likumā noteikts veids, kā pabeigt darbību uzņēmumam, kas vairs nespēj segt saistības. Kreditoru prasījumi tiek segti no uzņēmuma pieejamās mantas, process noslēdzas ar uzņēmuma izslēgšanu no reģistra — un līdz ar to noslēdzas arī valdes locekļa atbildība.
                </p>
              </div>

              <div className="space-y-4">
                <p className="text-lg font-bold text-gray-900">Likumā ir 9 maksātnespējas pazīmes. Biežākās praksē:</p>

                <div className="space-y-4">
                  {COMMON_SIGNS.map((sign, i) => (
                    <div key={i} className="flex items-start space-x-4">
                      <div
                        className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center border-2"
                        style={{ backgroundColor: "#94f27f", borderColor: "#bff7b2" }}
                      >
                        <span className="font-black text-lg" style={{ color: "#013720" }}>{i + 1}</span>
                      </div>
                      <p className="benefit-text font-extrabold">{sign}</p>
                    </div>
                  ))}
                </div>

                {/* Expandable: all 9 signs */}
                <button
                  type="button"
                  onClick={() => setShowAllSigns((v) => !v)}
                  className="inline-flex items-center gap-2 font-extrabold text-base pt-2 transition-colors"
                  style={{ color: "#111827" }}
                  aria-expanded={showAllSigns}
                >
                  <ChevronDown
                    className={`h-5 w-5 transition-transform ${showAllSigns ? "rotate-180" : ""}`}
                  />
                  <span className="underline underline-offset-4">
                    {showAllSigns ? "Paslēpt pazīmes" : "Skatīt visas 9 likuma pazīmes"}
                  </span>
                </button>

                {showAllSigns && (
                  <div className="rounded-2xl border-2 p-6 space-y-4" style={{ borderColor: "#bff7b2", backgroundColor: "#f3fdf1" }}>
                    <p className="text-sm font-bold text-gray-500 uppercase tracking-wide">
                      Visas Maksātnespējas likuma 57. pantā noteiktās pazīmes
                    </p>
                    <ol className="space-y-3">
                      {ALL_SIGNS.map((sign, i) => (
                        <li key={i} className="flex items-start space-x-3">
                          <span
                            className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-sm font-black"
                            style={{ backgroundColor: "#94f27f", color: "#013720" }}
                          >
                            {i + 1}
                          </span>
                          <span className="text-gray-700 leading-relaxed">{sign}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                )}
              </div>

              {/* Important note */}
              <div className="rounded-2xl p-5 border-l-4" style={{ borderColor: "#013720", backgroundColor: "#f3fdf1" }}>
                <p className="text-gray-700 leading-relaxed">
                  <span className="font-extrabold" style={{ color: "#111827" }}>Svarīgi:</span>{" "}
                  noteiktos gadījumos pieteikuma iesniegšana nav izvēle, bet likumā noteikts pienākums — un kavēšanās var radīt valdes loceklim personisku atbildību. Bezmaksas sarunā pārbaudīsim, vai kāda no pazīmēm attiecas uz Tavu uzņēmumu.
                </p>
              </div>

              <div className="pt-2">
                <ContactButtons whatsappUrl="/whatsapp-open?t=jur" messageUrl="/kontakti?t=jur" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 — IEGUVUMI */}
      <section className="pt-6 pb-16 lg:pt-14 lg:pb-24 bg-white">
        <div className="main-container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1280px]">
          <div className="text-center mb-32">
            <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
              Kāpēc ierosināt{" "}
              <span className="block">maksātnespējas procesu?</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-8 gap-y-32 mb-12">
            {/* Card 1 */}
            <div
              className="rounded-3xl p-8 pt-24 pb-12 text-center shadow-lg border relative min-h-[400px]"
              style={{ background: "linear-gradient(160deg, #ffffff 0%, #f3f4fb 55%, #e7e8f4 100%)", borderColor: "#a8b1dd" }}
            >
              <div className="absolute -top-24 left-1/2 transform -translate-x-1/2 z-0">
                <img src={cardIco1Path} alt="Skaidrs noslēgums" className="card-icon" />
              </div>
              <h3 className="text-3xl font-extrabold text-gray-900 mb-6 relative z-10">Risinājums ar skaidru noslēgumu</h3>
              <p className="text-xl leading-relaxed relative z-10" style={{ color: "#475569" }}>
                Process noslēdzas ar uzņēmuma izslēgšanu no reģistra. Saistības beidzas kopā ar uzņēmumu — un līdz ar to noslēdzas arī valdes locekļa atbildība.
              </p>
            </div>

            {/* Card 2 */}
            <div
              className="rounded-3xl p-8 pt-24 pb-12 text-center shadow-lg border relative min-h-[400px]"
              style={{ background: "linear-gradient(160deg, #ffffff 0%, #eef4fb 55%, #dfe9f5 100%)", borderColor: "#a1c5e2" }}
            >
              <div className="absolute -top-24 left-1/2 transform -translate-x-1/2 z-0">
                <img src={cardIco2Path} alt="Aizsardzība" className="card-icon" />
              </div>
              <h3 className="text-3xl font-extrabold text-gray-900 mb-6 relative z-10">Aizsardzība no piedziņas metodēm</h3>
              <p className="text-xl leading-relaxed relative z-10" style={{ color: "#475569" }}>
                Pēc procesa pasludināšanas iepriekš uzsāktās izpildu lietvedības tiek izbeigtas, un kreditori prasījumus piesaka vienotā, tiesas kontrolētā procesā — atsevišķu piedziņu un kontu bloķēšanas vietā.
              </p>
            </div>

            {/* Card 3 */}
            <div
              className="rounded-3xl p-8 pt-24 pb-12 text-center shadow-lg border relative min-h-[400px]"
              style={{ background: "linear-gradient(160deg, #ffffff 0%, #f4f5f8 55%, #e8ebf1 100%)", borderColor: "#c9c9c9" }}
            >
              <div className="absolute -top-24 left-1/2 transform -translate-x-1/2 z-0">
                <img src={cardIco3Path} alt="Apturēts pieaugums" className="card-icon" />
              </div>
              <h3 className="text-3xl font-extrabold text-gray-900 mb-6 relative z-10">Apturēts parādu pieaugums</h3>
              <p className="text-xl leading-relaxed relative z-10" style={{ color: "#475569" }}>
                Pēc maksātnespējas procesa pasludināšanas netiek aprēķināti jauni procenti, līgumsodi un nokavējuma naudas. Parāds vairs neaug — un neaug arī risks Tev personīgi.
              </p>
            </div>
          </div>

          <div className="flex justify-center">
            <ContactButtons whatsappUrl="/whatsapp-open?t=jur" messageUrl="/kontakti?t=jur" />
          </div>
        </div>
      </section>

      {/* Section 3 — CEĻVEDIS (LEAD COLLECTOR) */}
      <section className="bg-white py-8 lg:py-12">
        <div className="relative mx-[10px] rounded-3xl shadow-lg overflow-hidden px-6 py-14 sm:px-10 lg:px-16 lg:py-24 flex items-center min-h-[620px]">
          {/* Desktop background (man on the right) */}
          <div
            className="absolute inset-0 hidden lg:block"
            style={{
              backgroundImage: `linear-gradient(90deg, rgba(1,55,32,0.86) 0%, rgba(1,55,32,0.62) 32%, rgba(1,55,32,0.32) 62%, rgba(1,55,32,0.12) 100%), url(${guideCardBgPath})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />
          {/* Mobile background (portrait crop) */}
          <div
            className="absolute inset-0 lg:hidden"
            style={{
              backgroundImage: `linear-gradient(180deg, rgba(1,55,32,0.80) 0%, rgba(1,55,32,0.58) 45%, rgba(1,55,32,0.52) 100%), url(${guideCardBgMobilePath})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />
          <div className="relative max-w-[1100px] mx-auto w-full">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left: pitch + checklist */}
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-extrabold text-white leading-tight">
                Vēlies vispirms izprast procesu pats?
              </h2>
              <p className="text-lg text-white/90 leading-relaxed">
                Esam sagatavojuši bezmaksas ceļvedi <span className="font-bold" style={{ color: "#ffffff" }}>„Juridiskās personas maksātnespēja no A līdz Z“</span> — vienkāršā un saprotamā valodā.
              </p>

              <div className="space-y-3">
                <p className="font-bold text-white">Kas iekļauts ceļvedī:</p>
                {GUIDE_INCLUDES.map((item, i) => (
                  <div key={i} className="flex items-start space-x-3">
                    <span
                      className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5"
                      style={{ backgroundColor: "#94f27f" }}
                    >
                      <Check className="h-4 w-4" style={{ color: "#013720" }} strokeWidth={3} />
                    </span>
                    <span className="benefit-text font-medium" style={{ color: "#ffffff" }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: email capture card */}
            <div className="rounded-3xl shadow-xl p-8" style={{ background: "rgba(255,255,255,0.12)", backdropFilter: "blur(14px)", WebkitBackdropFilter: "blur(14px)", border: "1.5px solid rgba(255,255,255,0.65)" }}>
              {guideSubmitted ? (
                <div className="text-center py-8">
                  <div className="mx-auto mb-5 w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: "#94f27f" }}>
                    <Check className="h-7 w-7" style={{ color: "#013720" }} strokeWidth={3} />
                  </div>
                  <h3 className="text-xl font-extrabold mb-3 text-white">Paldies!</h3>
                  <p className="text-white/85 leading-relaxed">
                    Ceļvedis ir ceļā uz Tavu e-pastu. Ja tas neparādās dažu minūšu laikā, ieskaties mēstuļu mapē.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleGuideSubmit} className="space-y-4">
                  <div className="flex items-center gap-3 mb-1">
                    <div className="p-2 rounded-lg" style={{ backgroundColor: "rgba(255,255,255,0.18)" }}>
                      <Mail className="h-5 w-5" style={{ color: "#ffffff" }} />
                    </div>
                    <h3 className="text-xl font-extrabold text-white">Saņem bezmaksas ceļvedi</h3>
                  </div>

                  <input
                    type="email"
                    value={guideEmail}
                    onChange={(e) => setGuideEmail(e.target.value)}
                    placeholder="Tavs e-pasts"
                    className="w-full rounded-xl border px-4 py-3 text-base text-white placeholder-white/60 outline-none transition-colors focus:border-white"
                    style={{ borderColor: "rgba(255,255,255,0.45)", backgroundColor: "rgba(255,255,255,0.12)" }}
                  />

                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={guideConsent}
                      onChange={(e) => setGuideConsent(e.target.checked)}
                      className="mt-1 h-4 w-4 flex-shrink-0 accent-[#94f27f]"
                    />
                    <span className="text-sm text-white/85 leading-relaxed">
                      Piekrītu, ka Bezparāda.lv apstrādā manu e-pastu ceļveža nosūtīšanai. Esmu iepazinies/-usies ar{" "}
                      <Link href="/privatums" className="underline" style={{ color: "#ffffff" }}>privātuma politiku</Link>.
                    </span>
                  </label>

                  {guideError && <p className="text-sm text-red-300 font-medium">{guideError}</p>}

                  <Button
                    type="submit"
                    size="lg"
                    className="primary-button w-full rounded-full text-lg font-black shadow-lg hover:shadow-xl"
                  >
                    Saņemt ceļvedi
                  </Button>

                  <p className="text-xs text-white/70 leading-relaxed text-center">
                    Lejupielādes saiti nosūtīsim uz Tavu e-pastu.
                  </p>
                </form>
              )}
            </div>
          </div>
          </div>
        </div>
      </section>

      {/* Section 5 — KOMANDA / UZTICĪBA */}
      <section id="about-us" className="py-16 lg:py-24 bg-white">
        <div className="main-container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1280px]">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="lg:pr-8 order-2 lg:order-1">
              <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-8 leading-tight">
                Izvēlies pārbaudītu pieredzi maksātnespējas procesos.
              </h2>

              <div className="space-y-6">
                <p className="text-lg text-gray-600 leading-relaxed">
                  Pakalpojumu nodrošina kvalificēta juristu komanda ciešā sadarbībā ar zvērinātu advokātu biroju KRŪMIŅŠ SIA.
                </p>

                <p className="text-lg text-gray-600 leading-relaxed">
                  Biroja vadošajam partnerim Kalvim Krūmiņam ir vairāk nekā 10 gadu profesionālā pieredze advokāta darbā, kā arī vairāk nekā 5 gadu pieredze maksātnespējas administratora amatā. Viena no viņa specializācijas jomām ir tieši juridisko personu maksātnespējas procesi.
                </p>
              </div>
            </div>

            <div className="relative order-1 lg:order-2">
              <div className="rounded-3xl overflow-hidden shadow-xl">
                <img
                  src={kruminsImagePath}
                  alt="Zvērinātu advokātu biroja KRŪMIŅŠ komanda"
                  className="w-full h-[400px] lg:h-[500px] object-cover"
                />
              </div>

              <div className="absolute -bottom-8 right-8 w-[154px] h-[205px] rounded-2xl overflow-hidden shadow-xl hidden lg:block">
                <img src={kruminsLogoPath} alt="KRŪMIŅŠ advokātu biroja logo" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6 — KONTAKTFORMA */}
      <section
        className="py-16 lg:py-24 bg-gray-50 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bottomBackgroundPath})` }}
      >
        <div className="main-container mx-auto px-4 sm:px-6 lg:px-8 max-w-[800px]">
          <div className="text-center">
            <h2 className="text-3xl lg:text-6xl font-extrabold mb-6 leading-tight" style={{ color: "#111827" }}>
              Piesakies bezmaksas<br />konsultācijai.
            </h2>

            <p className="mb-8 leading-relaxed" style={{ fontSize: "26px", color: "#777777" }}>
              Atstāj ziņu, un mēs ar Tevi sazināsimies<br />vienas dienas laikā.
            </p>

            <div className="mb-12 flex justify-center">
              <ContactButtons whatsappUrl="/whatsapp-open?t=jur" messageUrl="/kontakti?t=jur" />
            </div>

            <ContactInfoForm subject="Juridiskas Maksātnespējas Konsultācijas Pieprasījums" />
          </div>

          <Footer />
        </div>
      </section>
    </div>
  );
}
