// TODO(real): lista vine din panoul de administrare (Keystatic sau PocketBase);
// clientul adaugă piesa, pozele, gramajul și prețul fără să ne contacteze.
// Piesele de mai jos sunt exemple pentru demo, cu fotografii de pe Unsplash.

export type Provenienta = "amanet" | "reconditionat" | "nou";
export type Categorie = "inele" | "verighete" | "lanturi" | "bratari" | "cercei" | "monede";

export interface Piesa {
  cod: string;
  slug: string;
  nume: string;
  categorie: Categorie;
  provenienta: Provenienta;
  gramaj: number;
  // Măsurile se completează în funcție de tipul piesei:
  marimi?: number[]; // inele și verighete: mărimea (circumferința interioară în mm); diametrul se calculează
  lungime?: number | [number, number]; // lanțuri și brățări, în cm; interval dacă e reglabilă
  diametru?: number; // cercei, brățări fixe și monede, în mm
  titlu?: { carat: string; marcaj: string }; // lipsă = 14K, marcaj 585
  pret: number;
  pretVechi?: number; // preț tăiat, la piesele din loturi de amanet care se lichidează
  deLa?: boolean; // preț de pornire, pentru piesele făcute la comandă
  img: string; // numele fișierului din src/assets/img, fără extensie
  alt: string;
  stare: string;
  descriere: string;
}

export const provenienteInfo: Record<Provenienta, { eticheta: string; scurt: string }> = {
  amanet: { eticheta: "Din amanet", scurt: "Piesă rămasă nerăscumpărată, verificată și curățată." },
  reconditionat: { eticheta: "Recondiționată", scurt: "Cumpărată de la o persoană fizică, lustruită și reparată unde a fost cazul." },
  nou: { eticheta: "Nouă, la comandă", scurt: "Se lucrează după ce confirmați comanda." },
};

export const categoriiInfo: Record<Categorie, string> = {
  inele: "Inele",
  verighete: "Verighete",
  lanturi: "Lanțuri",
  bratari: "Brățări",
  cercei: "Cercei",
  monede: "Monede",
};

export const bijuterii: Piesa[] = [
  {
    cod: "A-0412", slug: "inel-barbatesc-onix", nume: "Inel bărbătesc cu onix",
    categorie: "inele", provenienta: "amanet", gramaj: 7.85, marimi: [64], pret: 3380,
    img: "ghiul-onix", alt: "Inel bărbătesc din aur cu piatră neagră dreptunghiulară",
    stare: "Urme fine de purtare pe verigă, piatra fără ciobituri.",
    descriere: "Ghiul cu onix tăiat dreptunghiular, montură cu gheare la colțuri și umeri lucrați. Marcaj 585 în interiorul verigii.",
  },
  {
    cod: "A-0388", slug: "lant-barbatesc-zale-curb", nume: "Lanț bărbătesc, zale Curb",
    categorie: "lanturi", provenienta: "amanet", gramaj: 21.4, lungime: 55, pret: 9200,
    img: "lant-curb", alt: "Lanț gros din aur cu zale late, pe fundal negru",
    stare: "Zale întregi, închizătoare înlocuită cu una nouă.",
    descriere: "Lanț plin, zale Curb de 6 mm, șlefuite pe ambele fețe. Închizătoare tip carabină, marcată 585.",
  },
  {
    cod: "N-0048", slug: "verighete-clasice-pereche", nume: "Verighete clasice, pereche",
    categorie: "verighete", provenienta: "nou", gramaj: 8.0, pret: 4720, deLa: true,
    img: "verighete-satin", alt: "Două verighete clasice din aur galben, pe satin",
    stare: "Piesă nouă.",
    descriere: "Profil semirotund de 4 mm, finisaj lucios. Gramajul de 8 g este pentru mărimile 52 și 62; se recalculează la mărimile dumneavoastră. Gravura interioară este inclusă.",
  },
  {
    cod: "R-0127", slug: "set-inel-zirconiu-verigheta", nume: "Inel cu zirconiu și verighetă, set",
    categorie: "inele", provenienta: "reconditionat", gramaj: 6.1, marimi: [54], pret: 2790,
    img: "inel-piatra-verigheta", alt: "Inel din aur cu piatră așezat peste o verighetă gravată",
    stare: "Lustruite, gheara pietrei strânsă din nou.",
    descriere: "Inel cu zirconiu rotund pe montură răsucită, împreună cu verigheta lui. Verigheta are o gravură veche în interior, care se poate șterge la cerere.",
  },
  {
    cod: "A-0409", slug: "cercei-creole-late", nume: "Cercei creole late",
    categorie: "cercei", provenienta: "amanet", gramaj: 3.82, diametru: 14, pret: 1640,
    img: "cercei-creole", alt: "Pereche de cercei creole late din aur",
    stare: "Fără lovituri, balamalele închid ferm.",
    descriere: "Creole cu închidere pe balama, lățime 5 mm, suprafață lucioasă simplă.",
  },
  {
    cod: "R-0124", slug: "bratara-fixa-bicolora", nume: "Brățară fixă bicoloră",
    categorie: "bratari", provenienta: "reconditionat", gramaj: 11.3, lungime: 18, diametru: 58, pret: 5200,
    img: "bratara-fixa", alt: "Brățară fixă din aur galben cu model împletit și accent din aur alb",
    stare: "Balama reparată, model curățat la ultrasunete.",
    descriere: "Brățară rigidă cu deschidere pe balama, model cu romburi în relief și o undă din aur alb pe mijloc.",
  },
  {
    cod: "N-0055", slug: "lantisoare-subtiri", nume: "Lănțișor subțire, zale la alegere",
    categorie: "lanturi", provenienta: "nou", gramaj: 1.9, lungime: 45, pret: 1120, deLa: true,
    img: "lanturi-fine", alt: "Cinci lănțișoare subțiri din aur, cu zale diferite",
    stare: "Piesă nouă.",
    descriere: "Zale șarpe, Rolo, ancoră, Forzatina și Singapore. Lungimi de 40, 45 și 50 cm. Prețul afișat este pentru modelul ancoră de 45 cm.",
  },
  {
    cod: "A-0398", slug: "inel-barbatesc-medalion", nume: "Inel bărbătesc cu medalion",
    categorie: "inele", provenienta: "amanet", gramaj: 9.2, marimi: [66], pret: 3950, pretVechi: 4390,
    img: "inel-medalion", alt: "Inel masiv din aur cu medalion rotund în relief",
    stare: "Relief bine păstrat, verigă ușor zgâriată la bază.",
    descriere: "Inel masiv cu medalion rotund lucrat în relief și cruce pe umeri. Se poate mări sau micșora cu până la două numere.",
  },
  {
    cod: "A-0417", slug: "bratara-zale-ovale", nume: "Brățară cu zale ovale, bicoloră",
    categorie: "bratari", provenienta: "amanet", gramaj: 5.6, lungime: 19, pret: 2410, pretVechi: 2690,
    img: "bratara-zale", alt: "Brățară din aur cu zale ovale alungite, pe material negru",
    stare: "Stare bună, o za a fost sudată din nou.",
    descriere: "Zale ovale alungite, alternate galben și alb, cu închizătoare tip carabină.",
  },
  {
    cod: "N-0050", slug: "cercei-creole-groase", nume: "Cercei creole groase, 20 mm",
    categorie: "cercei", provenienta: "nou", gramaj: 4.1, diametru: 20, pret: 2420,
    img: "cercei-creole-groase", alt: "Pereche de cercei creole groase din aur lucios",
    stare: "Piesă nouă.",
    descriere: "Creole tubulare cu tijă și fluturaș. Sunt goale în interior, deci ușoare la purtat.",
  },
  {
    cod: "R-0131", slug: "inel-ametist", nume: "Inel cu ametist și zirconii",
    categorie: "inele", provenienta: "reconditionat", gramaj: 3.05, marimi: [55], pret: 1520,
    img: "inel-ametist", alt: "Inel din aur cu piatră mov dreptunghiulară înconjurată de pietre mici",
    stare: "Două zirconii mici înlocuite, lustruit.",
    descriere: "Ametist tăiat dreptunghiular, cu un rând de zirconii în jur și pe umerii inelului.",
  },
  {
    cod: "R-0119", slug: "verighete-cu-model-pereche", nume: "Verighete cu model, pereche",
    categorie: "verighete", provenienta: "reconditionat", gramaj: 7.2, marimi: [53, 61], pret: 3310,
    img: "verighete-verde", alt: "Două verighete din aur pe satin verde",
    stare: "Gravura veche ștearsă, relustruite.",
    descriere: "Profil plat de 3,5 mm, cu o linie mată pe mijloc. Se pot ajusta pe alte mărimi.",
  },
  {
    cod: "N-0057", slug: "bratara-placuta-gravata", nume: "Brățară cu plăcuță gravabilă",
    categorie: "bratari", provenienta: "nou", gramaj: 2.6, lungime: [16, 18], pret: 1530, deLa: true,
    img: "bratara-placuta", alt: "Brățară subțire din aur cu plăcuță ovală netedă",
    stare: "Piesă nouă.",
    descriere: "Plăcuță ovală netedă, pe lanț dublu. Gravăm un nume sau o dată, cu litere de mână ori de tipar.",
  },
  {
    cod: "A-0421", slug: "inel-aur-roz-zirconiu", nume: "Inel din aur roz cu zirconiu",
    categorie: "inele", provenienta: "amanet", gramaj: 2.35, marimi: [53], pret: 1010,
    img: "inel-roz", alt: "Inel subțire din aur roz cu o piatră centrală",
    stare: "Urme fine de purtare.",
    descriere: "Verigă dublă din aur roz, cu un zirconiu montat pe o stea din aur alb.",
  },
  {
    cod: "R-0129", slug: "cercei-creole-zirconii", nume: "Cercei creole cu zirconii",
    categorie: "cercei", provenienta: "reconditionat", gramaj: 2.9, diametru: 12, pret: 1330,
    img: "cercei-pietre", alt: "Cercei creole mici din aur, cu două rânduri de pietre",
    stare: "Toate pietrele prezente, curățați la ultrasunete.",
    descriere: "Creole mici cu două rânduri de zirconii pe partea din față și închidere cu clic.",
  },
  {
    cod: "N-0059", slug: "lantisor-pandantiv-dreptunghiular", nume: "Lănțișor cu pandantiv",
    categorie: "lanturi", provenienta: "nou", gramaj: 3.2, lungime: 45, pret: 1890,
    img: "lantisor-pandantiv", alt: "Lănțișor fin din aur cu pandantiv mic dreptunghiular",
    stare: "Piesă nouă.",
    descriere: "Lanț ancoră cu pandantiv dreptunghiular, decorat cu zirconii pe margine.",
  },
  {
    cod: "A-0402", slug: "cercei-creole-rasucite", nume: "Cercei creole răsucite",
    categorie: "cercei", provenienta: "amanet", gramaj: 3.3, diametru: 18, pret: 1420, pretVechi: 1580,
    img: "cercei-rasuciti", alt: "Cercei creole din aur cu model răsucit",
    stare: "Stare foarte bună.",
    descriere: "Creole cu model împletit, închidere cu tijă rabatabilă.",
  },
  {
    cod: "N-0052", slug: "inel-logodna-zirconiu", nume: "Inel de logodnă cu zirconiu",
    categorie: "inele", provenienta: "nou", gramaj: 2.8, pret: 1790, deLa: true,
    img: "inel-solitaire", alt: "Inel de logodnă din aur galben cu piatră centrală și pietre mici pe verigă",
    stare: "Piesă nouă.",
    descriere: "Piatră centrală tăiată smarald, pe patru gheare, cu zirconii mici pe jumătate de verigă. Se poate lucra și în aur alb sau roz.",
  },
  {
    cod: "A-0405", slug: "verighete-subtiri-set", nume: "Verighete subțiri, set de două",
    categorie: "verighete", provenienta: "amanet", gramaj: 3.9, marimi: [52, 54], pret: 1680,
    img: "verighete-negru", alt: "Două verighete subțiri din aur, una cu granule, pe fundal negru",
    stare: "Urme fine de purtare.",
    descriere: "O verighetă netedă de 2 mm și una cu granule, purtate de obicei împreună pe același deget.",
  },
  {
    cod: "M-0031", slug: "moneda-krugerrand-1-uncie", nume: "Monedă Krugerrand, 1 uncie",
    categorie: "monede", provenienta: "amanet", gramaj: 33.93, diametru: 32.8, pret: 19700,
    titlu: { carat: "22K", marcaj: "916" },
    img: "moneda-krugerrand", alt: "Monede de investiție din aur, printre care Krugerrand, pe fundal negru",
    stare: "Urme fine de manipulare pe cant.",
    descriere: "Monedă de investiție din Africa de Sud. Conține o uncie de aur fin (31,10 g) într-un aliaj de 22K, de aceea cântărește 33,93 g.",
  },
  {
    cod: "M-0034", slug: "moneda-queens-beasts-1-uncie", nume: "Monedă Queen's Beasts, 1 uncie",
    categorie: "monede", provenienta: "amanet", gramaj: 31.1, diametru: 32.7, pret: 19900,
    titlu: { carat: "24K", marcaj: "999,9" },
    img: "moneda-queens-beasts", alt: "Patru monede din aur din seria Queen's Beasts, pe fundal negru",
    stare: "Fără zgârieturi, păstrată în capsulă.",
    descriere: "Monedă de investiție din Marea Britanie, aur fin 999,9. Avem mai multe modele din serie; prețul este pe bucată.",
  },
  {
    cod: "M-0036", slug: "moneda-filarmonica-vienei-sfert-uncie", nume: "Monedă Filarmonica Vienei, 1/4 uncie",
    categorie: "monede", provenienta: "amanet", gramaj: 7.78, diametru: 22, pret: 5050,
    titlu: { carat: "24K", marcaj: "999,9" },
    img: "moneda-filarmonica", alt: "Monede de investiție din aur, printre care Filarmonica Vienei și Maple Leaf",
    stare: "Stare foarte bună.",
    descriere: "Monedă de investiție din Austria, aur fin 999,9, cu orga și instrumentele Filarmonicii din Viena.",
  },
];

export const pretPeGram = (p: Piesa) => Math.round(p.pret / p.gramaj);

const zecimala = (n: number) => new Intl.NumberFormat("ro-RO", { maximumFractionDigits: 1 }).format(n);

export const titluPiesa = (p: Piesa) => p.titlu ?? { carat: "14K", marcaj: "585" };

// mărimea unui inel este circumferința interioară în mm; diametrul = mărime / π
export const diametruInel = (marime: number) => zecimala(marime / Math.PI);

const lungimeText = (l: number | [number, number]) => (Array.isArray(l) ? `${l[0]} – ${l[1]} cm` : `${zecimala(l)} cm`);

// rândurile de măsuri din fișa piesei
export const masuri = (p: Piesa): { eticheta: string; valoare: string }[] => {
  const r: { eticheta: string; valoare: string }[] = [];
  const inel = p.categorie === "inele" || p.categorie === "verighete";
  if (p.marimi?.length) {
    r.push({ eticheta: p.marimi.length > 1 ? "Mărimi" : "Mărime", valoare: p.marimi.join(" și ") });
    r.push({ eticheta: "Diametru interior", valoare: p.marimi.map(diametruInel).join(" și ") + " mm" });
  } else if (inel) {
    r.push({ eticheta: "Mărime", valoare: "se lucrează pe mărimea dumneavoastră" });
  }
  if (p.lungime) r.push({ eticheta: "Lungime", valoare: lungimeText(p.lungime) });
  if (p.diametru) r.push({ eticheta: "Diametru", valoare: `${zecimala(p.diametru)} mm` });
  return r;
};

// varianta scurtă, pentru cardul din catalog
export const masuraScurta = (p: Piesa): string => {
  if (p.marimi?.length) return (p.marimi.length > 1 ? "mărimile " : "mărimea ") + p.marimi.join(" și ");
  if (p.lungime) return lungimeText(p.lungime);
  if (p.diametru) return `Ø ${zecimala(p.diametru)} mm`;
  return "";
};
