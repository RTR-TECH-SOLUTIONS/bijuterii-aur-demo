// BASE_URL este "/" pe un domeniu propriu și "/nume-repo/" când site-ul stă
// într-un subdirector (GitHub Pages). u() lipește prefixul pe linkurile interne.
const base = import.meta.env.BASE_URL.replace(/\/$/, "");
export const u = (cale: string) => `${base}${cale}`;

// TODO(real): clientul nu are încă nume de firmă și nici sediu.
// „Proba 585” este un nume de lucru (585 = marcajul aurului de 14K). Se schimbă doar aici.
export const site = {
  nume: "Proba 585",
  subtitlu: "Bijuterii din aur de 14K",
  telefonAfisat: "0725 916 034",
  telefon: "+40725916034",
  whatsapp: "40725916034",
  // TODO(real): program confirmat de client
  program: [
    { zi: "Luni – Vineri", ore: "09:00 – 19:00" },
    { zi: "Sâmbătă", ore: "10:00 – 14:00" },
    { zi: "Duminică", ore: "închis" },
  ],
};

export const waLink = (mesaj: string) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(mesaj)}`;

export const nav = [
  { href: u("/bijuterii"), label: "Bijuterii" },
  { href: u("/la-comanda"), label: "La comandă" },
  { href: u("/cumparam-aur"), label: "Cumpărăm aur" },
  { href: u("/contact"), label: "Contact" },
];

// TODO(real): prețurile pe gram se vor edita din panoul de administrare.
// Valorile de mai jos sunt orientative, la nivelul pieței din octombrie 2026.
export const preturi = {
  actualizat: "7 octombrie 2026",
  // cât plătim pe gram când cumpărăm aur
  cumparare: [
    { carat: "9K", titlu: "375", leiGram: 205 },
    { carat: "14K", titlu: "585", leiGram: 330 },
    { carat: "18K", titlu: "750", leiGram: 425 },
    { carat: "22K", titlu: "916", leiGram: 520 },
    { carat: "24K", titlu: "999", leiGram: 565 },
  ],
  // de la cât pornește gramul la bijuteriile pe care le vindem (14K)
  vanzare: { amanet: 430, reconditionat: 460, nou: 590 },
};

export const lei = (n: number) =>
  new Intl.NumberFormat("ro-RO", { maximumFractionDigits: 0 }).format(n) + " lei";
export const grame = (n: number) =>
  new Intl.NumberFormat("ro-RO", { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(n) + " g";
