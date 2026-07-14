/* ============================================================
   SITIO DE BODA — SCRIPT
   1) Traducciones ES/EN
   2) Selector de idioma con detección + localStorage
   3) TEMPORAL: selector de tipografía A/B/C para revisión
   4) Fade-in de secciones con Intersection Observer
   ============================================================ */

/* ------------------------------------------------------------
   1. TRADUCCIONES
   ------------------------------------------------------------ */
// Todo el contenido de este archivo es simulado/ficticio para
// visualizar el diseño. Reemplazar con la información real de la
// pareja antes de publicar.
const translations = {
  es: {
    /* --- Hero --- */
    hero_names: "Vanessa & Devan",
    hero_date: "12 – 14 de junio de 2026",
    hero_location: "Santa Rosa de Cabal, Colombia",
    alt_hacienda: "Ilustración en acuarela de la hacienda entre las montañas",

    /* --- Bienvenida / info general --- */
    welcome_title: "¡Nos casamos!",
    welcome_text:
      "Nos hace muchísima ilusión celebrar nuestro matrimonio rodeados de las personas que más queremos, en el corazón del Eje Cafetero. Prepárense para un fin de semana de café, montañas y mucha fiesta: aquí encontrarán todo lo que necesitan para acompañarnos.",
    alt_colibri: "Ilustración en acuarela de un colibrí y una orquídea",
    info1_title: "Dónde hospedarse",
    info1_text:
      "Recomendamos el Hotel Boutique Los Guaduales, a 10 minutos de la hacienda y con vista a los cafetales. Al reservar, mencionen la boda de Vanessa y Devan para acceder a la tarifa especial de grupo.",
    info2_title: "Cómo llegar",
    info2_text:
      "El aeropuerto más cercano es el Internacional Matecaña de Pereira (PEI), a unos 45 minutos en carro. Habrá transporte compartido desde Pereira y desde el parque principal de Santa Rosa antes de cada evento.",
    info2_button: "Reservar transporte",
    info3_title: "Antes o después",
    info3_text:
      "Si quieren quedarse unos días más, la agencia Rutas del Cafetal organiza salidas a los termales, fincas cafeteras y el Valle de Cocora. Escríbanles de nuestra parte y armamos plan.",

    /* --- Mapa --- */
    map_title: "El lugar",
    map_caption: "Valle de Santa Rosa de Cabal, Risaralda — Eje Cafetero colombiano",
    alt_mapa: "Mapa ilustrado en acuarela del valle de Santa Rosa de Cabal",

    /* --- Itinerario --- */
    itin_title: "Itinerario",
    alt_cafe: "Ícono de taza de café",
    alt_copas: "Ícono de copas de vino",
    alt_orquidea: "Ícono de flor de orquídea",
    day1_title: "Día 1",
    day1_date: "Viernes, 12 de junio",
    day1_e1_time: "4:00 p. m.",
    day1_e1_name: "Llegada y check-in",
    day1_e2_time: "7:00 p. m.",
    day1_e2_name: "Cóctel de bienvenida",
    day2_title: "Día 2",
    day2_date: "Sábado, 13 de junio",
    day2_e1_time: "9:00 a. m.",
    day2_e1_name: "Desayuno cafetero",
    day2_e2_time: "4:00 p. m.",
    day2_e2_name: "Ceremonia",
    day2_e3_time: "6:30 p. m.",
    day2_e3_name: "Recepción y fiesta",
    day3_title: "Día 3",
    day3_date: "Domingo, 14 de junio",
    day3_e1_time: "10:00 a. m.",
    day3_e1_name: "Brunch de despedida",
    day3_e2_time: "1:00 p. m.",
    day3_e2_name: "Hasta pronto",

    /* --- Detalle de eventos --- */
    events_title: "Los eventos",
    ev1_name: "Cóctel de bienvenida",
    ev1_datetime: "Viernes 12 de junio · 7:00 p. m.",
    ev1_place: "Jardín central, Hacienda La Camelia",
    ev1_desc:
      "Abrimos el fin de semana con un brindis al atardecer entre guaduas y farolitos. Habrá picadas de la región, música en vivo y todo el tiempo del mundo para ponernos al día.",
    ev1_dress: "Dress code: casual elegante",
    ev2_name: "Ceremonia",
    ev2_datetime: "Sábado 13 de junio · 4:00 p. m.",
    ev2_place: "Capilla al aire libre, Hacienda La Camelia",
    ev2_desc:
      "El momento que nos reúne a todos: nos casamos frente a las montañas, al aire libre. Les recomendamos llegar 30 minutos antes para acomodarse con calma.",
    ev2_dress: "Dress code: formal",
    ev3_name: "Recepción y fiesta",
    ev3_datetime: "Sábado 13 de junio · 6:30 p. m.",
    ev3_place: "Salón principal y terraza, Hacienda La Camelia",
    ev3_desc:
      "Cena, brindis y pista de baile hasta la madrugada con orquesta y DJ. Si hay una canción que no puede faltar, cuéntennosla al confirmar su asistencia.",
    ev3_dress: "Dress code: formal, el mismo de la ceremonia",
    ev4_name: "Brunch de despedida",
    ev4_datetime: "Domingo 14 de junio · 10:00 a. m.",
    ev4_place: "Terraza del café, Hacienda La Camelia",
    ev4_desc:
      "Para cerrar con calma: café recién pasado, arepas y jugos de la región mientras nos despedimos. Vengan como estén, sin afán — los queremos ver antes de que viajen.",

    /* --- Dress code general --- */
    dc_title: "Dress code",
    dc_col1_title: "Hombres",
    dc_col1_text:
      "Traje completo o saco y pantalón en tonos tierra, verde o azul; la corbata es opcional. En la montaña refresca al caer la noche, así que el saco se agradece. Zapatos cómodos: hay senderos de piedra y pasto.",
    dc_col2_title: "Mujeres",
    dc_col2_text:
      "Vestido largo o midi en tonos suaves — la paleta de abajo es una buena guía. Recomendamos tacón grueso o plataforma por el pasto, y un chal o abrigo ligero para la noche. Por favor, eviten el blanco.",
    alt_palma: "Ilustración en acuarela de una palma de cera",

    /* --- RSVP / cierre --- */
    rsvp_title: "Confirma tu asistencia",
    rsvp_text:
      "Nada nos haría más felices que contar con ustedes. Por favor confirmen su asistencia antes del 1 de mayo de 2026 para poder reservar su lugar en la mesa (y en la pista de baile).",
    rsvp_button: "Confirmar asistencia",
    rsvp_extra:
      "El mejor regalo es que nos acompañen. Si además quieren tener un detalle, el día de la boda habrá lluvia de sobres, o pueden aportar a la luna de miel: IBAN DE89 3704 0044 0532 0130 00.",

    /* --- Pie de página --- */
    footer_text: "Vanessa & Devan · Santa Rosa de Cabal · Junio 2026",
  },

  en: {
    /* --- Hero --- */
    hero_names: "Vanessa & Devan",
    hero_date: "June 12 – 14, 2026",
    hero_location: "Santa Rosa de Cabal, Colombia",
    alt_hacienda: "Watercolor illustration of the hacienda in the mountains",

    /* --- Welcome / general info --- */
    welcome_title: "We're getting married!",
    welcome_text:
      "We couldn't be more excited to celebrate our wedding surrounded by the people we love most, in the heart of Colombia's coffee region. Get ready for a weekend of coffee, mountains and plenty of dancing — everything you need to join us is right here.",
    alt_colibri: "Watercolor illustration of a hummingbird and an orchid",
    info1_title: "Where to stay",
    info1_text:
      "We recommend Hotel Boutique Los Guaduales, ten minutes from the hacienda with views over the coffee fields. Mention Vanessa and Devan's wedding when booking to get the group rate.",
    info2_title: "Getting there",
    info2_text:
      "The closest airport is Matecaña International in Pereira (PEI), about 45 minutes away by car. Shared shuttles will run from Pereira and from Santa Rosa's main square before each event.",
    info2_button: "Book transport",
    info3_title: "Make it a trip",
    info3_text:
      "If you'd like to stay a few extra days, our friends at Rutas del Cafetal run tours to the hot springs, coffee farms and the Cocora Valley. Tell them we sent you.",

    /* --- Map --- */
    map_title: "The place",
    map_caption: "Santa Rosa de Cabal valley, Risaralda — Colombia's coffee region",
    alt_mapa: "Watercolor illustrated map of the Santa Rosa de Cabal valley",

    /* --- Itinerary --- */
    itin_title: "Schedule",
    alt_cafe: "Coffee cup icon",
    alt_copas: "Wine glasses icon",
    alt_orquidea: "Orchid flower icon",
    day1_title: "Day 1",
    day1_date: "Friday, June 12",
    day1_e1_time: "4:00 PM",
    day1_e1_name: "Arrival & check-in",
    day1_e2_time: "7:00 PM",
    day1_e2_name: "Welcome cocktail",
    day2_title: "Day 2",
    day2_date: "Saturday, June 13",
    day2_e1_time: "9:00 AM",
    day2_e1_name: "Coffee-farm breakfast",
    day2_e2_time: "4:00 PM",
    day2_e2_name: "Ceremony",
    day2_e3_time: "6:30 PM",
    day2_e3_name: "Reception & party",
    day3_title: "Day 3",
    day3_date: "Sunday, June 14",
    day3_e1_time: "10:00 AM",
    day3_e1_name: "Farewell brunch",
    day3_e2_time: "1:00 PM",
    day3_e2_name: "See you soon",

    /* --- Event details --- */
    events_title: "The events",
    ev1_name: "Welcome cocktail",
    ev1_datetime: "Friday, June 12 · 7:00 PM",
    ev1_place: "Main garden, Hacienda La Camelia",
    ev1_desc:
      "We kick off the weekend with a sunset toast among bamboo and string lights. Expect regional bites, live music and all the time in the world to catch up.",
    ev1_dress: "Dress code: smart casual",
    ev2_name: "Ceremony",
    ev2_datetime: "Saturday, June 13 · 4:00 PM",
    ev2_place: "Open-air chapel, Hacienda La Camelia",
    ev2_desc:
      "The moment that brings us all together: we're getting married outdoors, facing the mountains. Please arrive 30 minutes early so you can settle in.",
    ev2_dress: "Dress code: formal",
    ev3_name: "Reception & party",
    ev3_datetime: "Saturday, June 13 · 6:30 PM",
    ev3_place: "Main hall & terrace, Hacienda La Camelia",
    ev3_desc:
      "Dinner, toasts and a dance floor open until late, with a live band and DJ. If there's a song we just can't skip, tell us when you RSVP.",
    ev3_dress: "Dress code: formal — same as the ceremony",
    ev4_name: "Farewell brunch",
    ev4_datetime: "Sunday, June 14 · 10:00 AM",
    ev4_place: "Coffee terrace, Hacienda La Camelia",
    ev4_desc:
      "A slow goodbye: freshly brewed coffee, arepas and local juices while we see everyone off. Come as you are — we want one last hug before you travel.",

    /* --- General dress code --- */
    dc_title: "Dress code",
    dc_col1_title: "Men",
    dc_col1_text:
      "A full suit or a jacket-and-trousers combination in earth, green or blue tones; ties are optional. Mountain evenings get cool, so you'll be glad to have the jacket. Comfortable shoes are wise — there are stone paths and grass.",
    dc_col2_title: "Women",
    dc_col2_text:
      "A long or midi dress in soft tones — the palette below is a good guide. We suggest block heels or platforms for the grass, plus a shawl or light coat for the evening. Please avoid white.",
    alt_palma: "Watercolor illustration of a wax palm",

    /* --- RSVP / closing --- */
    rsvp_title: "RSVP",
    rsvp_text:
      "Nothing would make us happier than having you there. Please confirm by May 1, 2026 so we can save your seat at the table (and on the dance floor).",
    rsvp_button: "Confirm attendance",
    rsvp_extra:
      "Your presence is the best gift. If you'd also like to give something, there will be an envelope shower on the wedding day, or you can contribute to our honeymoon: IBAN DE89 3704 0044 0532 0130 00.",

    /* --- Footer --- */
    footer_text: "Vanessa & Devan · Santa Rosa de Cabal · June 2026",
  },
};

/* ------------------------------------------------------------
   2. IDIOMA (detección + localStorage + render)
   ------------------------------------------------------------ */
const LANG_STORAGE_KEY = "wedding_lang";

function getInitialLang() {
  // Preferencia guardada manualmente > detección automática
  let saved = null;
  try {
    saved = localStorage.getItem(LANG_STORAGE_KEY);
  } catch (e) {
    /* localStorage no disponible (p. ej. modo privado): usar detección */
  }
  if (saved === "es" || saved === "en") return saved;

  const browserLang = (navigator.language || "").toLowerCase();
  return browserLang.startsWith("es") ? "es" : "en";
}

function applyLang(lang) {
  const dict = translations[lang];
  if (!dict) return;

  document.documentElement.lang = lang;

  // Textos
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    if (dict[key] !== undefined) el.textContent = dict[key];
  });

  // Textos alternativos de imágenes
  document.querySelectorAll("[data-i18n-alt]").forEach((el) => {
    const key = el.dataset.i18nAlt;
    if (dict[key] !== undefined) el.setAttribute("alt", dict[key]);
  });

  // Estado visual de los botones ES/EN
  document.querySelectorAll(".lang-switch button").forEach((btn) => {
    const isActive = btn.dataset.lang === lang;
    btn.classList.toggle("active", isActive);
    btn.setAttribute("aria-pressed", String(isActive));
  });
}

document.querySelectorAll(".lang-switch button").forEach((btn) => {
  btn.addEventListener("click", () => {
    const lang = btn.dataset.lang;
    try {
      localStorage.setItem(LANG_STORAGE_KEY, lang);
    } catch (e) {
      /* sin persistencia, pero el cambio en vivo funciona igual */
    }
    applyLang(lang);
  });
});

applyLang(getInitialLang());

/* ------------------------------------------------------------
   3. TIPOGRAFÍA DE MUESTRA
   // TEMPORAL: selector de tipografía para revisión, quitar cuando decidan
   Solo cambia las variables CSS --font-* en :root; no toca el
   idioma ni el layout. Opción B activa por defecto.
   ------------------------------------------------------------ */
const fontOptions = {
  A: {
    display: '"Alex Brush", cursive',
    displayStyle: "normal",
    subtitle: '"Cormorant Garamond", serif',
    subtitleStyle: "italic",
    body: '"Work Sans", sans-serif',
  },
  B: {
    display: '"Sacramento", cursive',
    displayStyle: "normal",
    subtitle: '"Cormorant Garamond", serif',
    subtitleStyle: "italic",
    body: '"Karla", sans-serif',
  },
  C: {
    display: '"Cormorant Garamond", serif',
    displayStyle: "italic",
    subtitle: '"Cormorant Garamond", serif',
    subtitleStyle: "normal",
    body: '"Montserrat", sans-serif',
  },
};

function applyFont(optionKey) {
  const option = fontOptions[optionKey];
  if (!option) return;

  const rootStyle = document.documentElement.style;
  rootStyle.setProperty("--font-display", option.display);
  rootStyle.setProperty("--font-display-style", option.displayStyle);
  rootStyle.setProperty("--font-subtitle", option.subtitle);
  rootStyle.setProperty("--font-subtitle-style", option.subtitleStyle);
  rootStyle.setProperty("--font-body", option.body);

  document.querySelectorAll(".font-switch button").forEach((btn) => {
    const isActive = btn.dataset.font === optionKey;
    btn.classList.toggle("active", isActive);
    btn.setAttribute("aria-pressed", String(isActive));
  });
}

document.querySelectorAll(".font-switch button").forEach((btn) => {
  btn.addEventListener("click", () => applyFont(btn.dataset.font));
});

applyFont("B"); // Opción B por defecto al cargar

/* ------------------------------------------------------------
   4. FADE-IN SUAVE AL HACER SCROLL (Intersection Observer)
   ------------------------------------------------------------ */
const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  revealElements.forEach((el) => observer.observe(el));
} else {
  // Navegadores sin soporte: mostrar todo directamente
  revealElements.forEach((el) => el.classList.add("visible"));
}
