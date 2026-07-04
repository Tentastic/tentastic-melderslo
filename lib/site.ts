export const site = {
  name: "Tentastic Melderslo",
  edition: "2026",
  date: "Vrijdag 10 juli 2026",
  eventDate: "2026-07-10",
  eventDateTime: "2026-07-10T20:00:00",
  time: "20:00 - 01:00",
  location: "Wei tegenover Sint Odastraat 58, Melderslo",
  mapsUrl: "https://maps.app.goo.gl/HA5qt37ee7QxFih99",
  ageLimit: "16+",
  ticketUrl:
    "https://ticketshop.veiligreserveren.nl/nl/event/tentastic-melderslo-2026",
  contactEmail: "tentastic@kpj-melderslo.nl",
  instagramUrl: "https://www.instagram.com/tentastic_melderslo/",
  facebookUrl:
    "https://www.facebook.com/profile.php?id=61578673043197",
  latitude: 51.46167,
  longitude: 6.08611,
  parkingName: "MFC de Zwingel, Melderslo",
  parkingMapsUrl:
    "https://www.google.com/maps/search/?api=1&query=MFC+de+Zwingel+Melderslo",
};

export const about = {
  intro:
    "Wat vroeger bekendstond als de Melderse Examenfuif, heet nu Tentastic Melderslo. Het feest werd oorspronkelijk gehouden na de examens van Dendron/Citaverde.",
  paragraphs: [
    "Door de jaren heen is het evenement meegegroeid met zijn publiek, en daarom hebben we gekozen voor een nieuwe naam die past bij het feest van nu: Tentastic Melderslo — een naam met toekomst.",
    "Inmiddels is Tentastic uitgegroeid tot een jaarlijks terugkerend, succesvol evenement. Ieder jaar wordt het mede opgebouwd door geslaagden van Dendron/Citaverde — de traditie die is overgebleven van de vroegere Examenfuif.",
  ],
};

export const sponsorPitch = {
  intro:
    "Tentastic is op zoek naar sponsoren. We bieden sponsorpakketten aan waarmee we een win-win willen creëren: jullie zichtbaarheid en betrokkenheid, en voor ons de mogelijkheid om Tentastic duurzaam voort te zetten.",
  bullets: [
    "Je helpt een dorpsinitiatief overeind te houden.",
    "Je steunt een evenement dat al jaren bij Melderslo hoort.",
    "Je laat zien dat jouw bedrijf betrokken is bij de regio.",
  ],
};

export type SponsorTier = {
  name: string;
  price: string;
  benefits: string[];
};

export const sponsorTiers: SponsorTier[] = [
  {
    name: "Brons",
    price: "75 euro",
    benefits: ["Met alle bronzen sponsoren samen op het LED-scherm"],
  },
  {
    name: "Zilver",
    price: "150 euro",
    benefits: [
      "Met 4 bedrijven op het LED-scherm",
      "5 consumpties t.w.v. €15,-",
    ],
  },
  {
    name: "Goud",
    price: "225 euro",
    benefits: [
      "Met 2 bedrijven het logo op het grote LED-scherm",
      "Social media promotie",
      "2 vrijkaarten t.w.v. €30,-",
      "10 consumpties t.w.v. €30,-",
    ],
  },
  {
    name: "Platinum",
    price: "300 euro",
    benefits: [
      "Logo op het grote LED-scherm",
      "Social media promotie",
      "Rondleiding achter de organisatie",
      "5 vrijkaarten t.w.v. €75,-",
      "15 consumpties t.w.v. €45,-",
    ],
  },
  {
    name: "Hoofdsponsor",
    price: "Bedrag in overleg",
    benefits: [
      "Naamskoppeling aan het evenement (bijv. Tentastic powered by …)",
      "Social media promotie",
      "Rondleiding achter de organisatie",
      "Logo op het grote LED-scherm",
      "Kaarten en munten in overleg",
      "Eigen ideeën kunnen in overleg toegevoegd worden",
    ],
  },
];

export const sponsorContact = {
  intro:
    "Passen de huidige pakketten/budgetten niet bij jullie als sponsor, maar willen jullie toch op de een of andere manier een steentje bijdragen? Neem dan contact met ons op, alles helpt!",
  email: site.contactEmail,
};

export type FaqItem = {
  question: string;
  answer: string;
};

export const faq: FaqItem[] = [
  {
    question: "Vanaf welke leeftijd mag ik naar binnen?",
    answer: `Tentastic Melderslo is ${"16+"}. Neem een geldig legitimatiebewijs mee, dit wordt bij de ingang gecontroleerd.`,
  },
  {
    question: "Kan ik nog tickets kopen?",
    answer:
      "Tickets zijn verkrijgbaar via de link in onze bio op Instagram of rechtstreeks via onze ticketshop. Regular Bird is uitverkocht, Late Bird tickets zijn (zolang de voorraad strekt) nog beschikbaar.",
  },
  {
    question: "Kan ik pinnen, of moet ik contant geld meenemen?",
    answer:
      "Tentastic is een cashless festival: overal op het terrein wordt uitsluitend gepind. Contant geld kun je dus thuis laten — zorg wel dat je je bankpas op zak hebt.",
  },
  {
    question: "Is er een garderobe?",
    answer:
      "Zeker! Bij de garderobe kun je je jas veilig achterlaten voor €1,50 per stuk.",
  },
  {
    question: "Mag ik eigen eten of drinken meenemen?",
    answer:
      "Nee, het is niet toegestaan om zelf eten of drinken mee naar binnen te nemen. Op het terrein staan catering en een bar voor al je hapjes en drankjes.",
  },
  {
    question: "Waar kan ik mijn auto of fiets parkeren?",
    answer: `Auto's kun je parkeren bij ${"MFC de Zwingel"} in Melderslo, op loopafstand van het terrein. Kom je op de fiets? Op het evenemententerrein zelf is een fietsenstalling aanwezig.`,
  },
];

export type LineupAct = {
  name: string;
  time: string;
  instagram?: string;
};

export const lineup: LineupAct[] = [
  {
    name: "Two Face",
    time: "20:00 - 21:00",
    instagram: "djtwoface",
  },
  {
    name: "Hitmaestro",
    time: "21:00 - 22:00",
    instagram: "hitmaestro",
  },
  {
    name: "Young Dylan",
    time: "22:00 - 22:30",
    instagram: "youngdylanpb",
  },
  {
    name: "Hitmaestro",
    time: "22:30 - 00:00",
    instagram: "hitmaestro",
  },
  {
    name: "La$$a",
    time: "00:00 - 01:00",
    instagram: "lassaonthetrack",
  },
];

export type Sponsor = {
  name: string;
  logo: string;
};

export const platinumSponsors: Sponsor[] = [
  { name: "Metaalhandel Henraath B.V.", logo: "/sponsors/platinum-metaalhandel-henraath.jpeg" },
  { name: "GTE", logo: "/sponsors/platinum-gte.jpeg" },
  { name: "RE-CARS", logo: "/sponsors/platinum-re-cars.png" },
  { name: "Driessen Blueberries B.V.", logo: "/sponsors/platinum-driessen-blueberries.png" },
  { name: "H&H Feest & Event Verhuur", logo: "/sponsors/platinum-hh-feest-event-verhuur.jpeg" },
  { name: "Euro Tree", logo: "/sponsors/platinum-eurotree.jpeg" },
  { name: "Loonbedrijf Heldens", logo: "/sponsors/platinum-loonbedrijf-heldens.png" },
];

export const goldSponsors: Sponsor[] = [
  { name: "JTB Transporten", logo: "/sponsors/gold-jtb-transporten.jpeg" },
  { name: "ARCO", logo: "/sponsors/gold-arco.png" },
  { name: "Peters Bouw en Onderhoud", logo: "/sponsors/gold-peters-bouw-en-onderhoud.png" },
  { name: "Hotraco (by Speria)", logo: "/sponsors/gold-hotraco-by-speria.png" },
  { name: "CLT Metal Service", logo: "/sponsors/gold-clt-metal-service.png" },
  { name: "La Fleur Coiffure", logo: "/sponsors/gold-la-fleur-coiffure.jpeg" },
  { name: "Sun-Power", logo: "/sponsors/gold-sun-power.svg" },
];
