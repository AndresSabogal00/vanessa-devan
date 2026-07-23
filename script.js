/* ============================================================
   SITIO DE BODA — SCRIPT
   1) Traducciones ES/EN
   2) Selector de idioma con detección + localStorage
   3) Fade-in de secciones con Intersection Observer

   Tipografías: los novios eligieron la Opción B (Sacramento /
   Cormorant Garamond itálica / Karla). El selector A/B/C se quitó;
   las variables --font-* quedaron fijas en :root (styles.css).
   ============================================================ */

/* ------------------------------------------------------------
   1. TRADUCCIONES
   Contenido real de la boda de Vanessa & Devan.
   Pendientes por completar (marcados en index.html):
   - URL real de la Hacienda El Jardín (venue de las bodas y la recepción)
   - Dato de contacto de "Access" (en el doc original figura como XXX)
   ------------------------------------------------------------ */
const translations = {
  es: {
    /* --- Hero --- */
    hero_names: "Vanessa & Devan",
    hero_date: "23 – 26 de septiembre de 2026",
    hero_location: "Santa Rosa de Cabal, Colombia",
    alt_hacienda: "Ilustración en acuarela de una casita cafetera entre las montañas",

    /* --- Bienvenida --- */
    welcome_title: "¡Nos casamos!",
    welcome_text:
      "Nos emociona muchísimo celebrar nuestra boda con nuestra familia y amigos en el corazón de la hermosa región cafetera de Colombia. Prepárense para un fin de semana inolvidable lleno de paisajes espectaculares, café, buena música y mucho baile. Aquí encontrarán todo lo que necesitan para planear su viaje y celebrar con nosotros.",
    alt_colibri: "Ilustración en acuarela de un colibrí y una orquídea",

    /* --- Info práctica --- */
    info1_title: "Dónde quedarse",
    info1_subtitle: "Hotel Finca del Café",
    info1_text:
      "Enclavado en el corazón de la región cafetera de Colombia, el Hotel Finca del Café está rodeado de naturaleza exuberante y campo tranquilo. Despierten con el aire fresco de la montaña, disfruten café cultivado en la zona y relájense mientras celebramos juntos un fin de semana inolvidable.",
    info1_button: "Más información",
    info2_title: "Cómo llegar",
    info2_text:
      "El aeropuerto más cercano es el Internacional Matecaña (PEI) en Pereira, a unos 45 minutos. Habrá transporte compartido desde Pereira entre el hotel y cada evento de la boda. Una vez que tengan sus vuelos, hagan clic abajo para compartir los datos y nosotros nos encargamos del resto.",
    info2_button: "Comparte los datos de tu vuelo",
    info3_title: "Quédate unos días",
    info3_text:
      "Si quieren quedarse unos días más, nuestros amigos de Access organizan tours por la región cafetera: termales, fincas de café y el Valle de Cocora. Solo díganles que van de nuestra parte.",

    /* --- Mapa --- */
    alt_mapa: "Mapa ilustrado: del aeropuerto de Pereira al Hotel Finca del Café y la Hacienda El Jardín",

    /* --- Itinerario --- */
    itin_title: "Itinerario",
    alt_cafe: "Ícono de taza de café",
    alt_copas: "Ícono de copas de vino",
    alt_orquidea: "Ícono de flor de orquídea",
    day1_title: "Día 1",
    day1_date: "Jueves 24 de septiembre",
    day1_e1_time: "10:00 a. m.",
    day1_e1_name: "Haldi",
    day1_e2_time: "Mediodía",
    day1_e2_name: "Tour opcional",
    day1_e3_time: "5:00 p. m.",
    day1_e3_name: "Sangeet",
    day2_title: "Día 2",
    day2_date: "Viernes 25 de septiembre",
    day2_e1_time: "10:00 a. m.",
    day2_e1_name: "Barat y ceremonia hindú",
    day2_e2_time: "1:00 p. m.",
    day2_e2_name: "Almuerzo",
    day2_e3_time: "3:00 p. m.",
    day2_e3_name: "Ceremonia católica",
    day3_title: "Día 3",
    day3_date: "Sábado 26 de septiembre",
    day3_e1_time: "9:00 a. m.",
    day3_e1_name: "Tour opcional (mañana y mediodía)",
    day3_e2_time: "5:00 p. m.",
    day3_e2_name: "Recepción",

    /* --- Los eventos --- */
    events_title: "Los eventos",
    /* Haldi */
    ev_haldi_name: "Haldi",
    ev_haldi_meta1: "Jueves 24 de septiembre · 10:00 a. m.",
    ev_haldi_meta2: "Casa Típica, Hotel Finca del Café",
    ev_haldi_desc:
      "El Haldi es una alegre tradición india que marca el comienzo de un nuevo capítulo; una celebración del amor y la familia antes de que todo empiece. Juntos, nuestros seres queridos bendecirán a los novios con una pasta de cúrcuma, un gesto que busca traer felicidad, prosperidad y buena fortuna a nuestro matrimonio. Entre los colores vibrantes, las risas y las bendiciones, es la manera perfecta de arrancar nuestro fin de semana de boda.",
    ev_haldi_dress: "Atuendo: colores cálidos de amanecer. ¡Cómodo y colorido!",
    alt_haldi: "Ilustración en acuarela de la ceremonia Haldi",
    /* Baile y Sangeet */
    ev_sangeet_name: "Baile y Sangeet",
    ev_sangeet_meta1: "Jueves 24 de septiembre · 5:00 p. m.",
    ev_sangeet_meta2: "Patio de la Casa Típica, Hotel Finca del Café",
    ev_sangeet_desc:
      "Vive lo mejor de India y Colombia en una sola noche inolvidable. Desde las vibrantes tradiciones del Sangeet y el Garba hasta los ritmos festivos de la cumbia colombiana, dos culturas se unen en una celebración de amor, familia, música y baile.",
    ev_sangeet_dress: "Atuendo: vestidos coloridos y vaporosos, en telas ligeras y listas para bailar. ¡Festivo y fresco!",
    alt_sangeet: "Ilustración en acuarela de baile de Sangeet y cumbia",
    /* Las bodas (hindú + católica) */
    ev_wed_name: "Las bodas",
    ev_wed_meta1: "Viernes 25 de septiembre · 10:00 a. m. a 5:00 p. m.",
    ev_wed_venue: "Hacienda El Jardín",
    ev_wed_buses: "Los buses salen a las 8:45 a. m. y regresan al hotel a las 6:00 p. m.",
    ev_wed_hindu_title: "Ceremonia hindú",
    ev_wed_hindu_desc:
      "Arraigada en siglos de tradición y celebrada en presencia de todos los que amamos, nuestra ceremonia hindú es donde dos familias se vuelven una. Entre las verdes colinas de Colombia, los rituales ancestrales se despliegan bajo el cielo abierto; cada paso una promesa silenciosa, cada bendición un hilo que une nuestros dos mundos.",
    alt_hindu: "Ilustración en acuarela de un mandap para la ceremonia hindú",
    ev_wed_catholic_title: "Ceremonia católica",
    ev_wed_catholic_desc:
      "En la quietud de un bosque de guadua, nuestra ceremonia católica es una celebración sagrada de fe, amor y las promesas que llevaremos toda la vida. Rodeados de las personas que más queremos, intercambiaremos nuestros votos y comenzaremos juntos el camino del matrimonio.",
    alt_catholic: "Ilustración en acuarela de un camino en un bosque de guadua",
    ev_wed_dress:
      "Atuendo: formal y festivo. Para la ceremonia hindú son igual de bienvenidos el atuendo tradicional indio, el formal occidental o una mezcla de ambos. Pueden quedarse con el mismo atuendo para la ceremonia católica que sigue; la familia cercana y el cortejo pueden preferir cambiarse a un formal de jardín o cóctel.",
    /* Recepción */
    ev_rec_name: "Recepción",
    ev_rec_meta1: "Sábado 26 de septiembre · 5:30 p. m. a 12:00 a. m.",
    ev_rec_venue: "Hacienda El Jardín",
    ev_rec_buses: "Los buses salen a las 4:45 p. m. y regresan al hotel a las 12:00 a. m.",
    ev_rec_desc:
      "Cuando cae el sol, la celebración cobra vida. Una banda increíble, una pista llena de energía y un ambiente eléctrico preparan el escenario para una noche de baile sin parar. Ritmos latinos en vivo y música de alta energía mantendrán la fiesta hasta altas horas, cerrando nuestro fin de semana de boda por todo lo alto.",
    ev_rec_dress: "Atuendo: ¡con todo! Glamour, diversión y lista para la fiesta. Piensen en lentejuelas, brillo, colores intensos y su mejor look de noche; eso sí, algo con lo que puedan bailar.",
    alt_reception: "Ilustración en acuarela de la fiesta de recepción de noche",

    /* --- Qué traer --- */
    bring_title: "Qué traer",
    bring_1: "Dandiya",
    bring_2: "Repelente de insectos",
    bring_3: "Zapatos cómodos",
    bring_4: "Protector solar",
    bring_5: "Chaqueta ligera",
    bring_6: "Efectivo en pesos (COP)",

    /* --- Contacto --- */
    contact_title: "Contacto",
    contact_text1:
      "Para preguntas sobre transporte, hotel o el itinerario del fin de semana, escríbanle a Access.",
    contact_text2_pre: "Para cualquier otra cosa, no duden en contactarnos directamente al",
    contact_text2_or: "o al",

    /* --- Pie de página --- */
    footer_text: "Vanessa & Devan · Santa Rosa de Cabal · 2026",
  },

  en: {
    /* --- Hero --- */
    hero_names: "Vanessa & Devan",
    hero_date: "September 23 – 26, 2026",
    hero_location: "Santa Rosa de Cabal, Colombia",
    alt_hacienda: "Watercolor illustration of a coffee-country house in the mountains",

    /* --- Welcome --- */
    welcome_title: "We're getting married!",
    welcome_text:
      "We're so excited to celebrate our wedding with our family and friends in the heart of Colombia's beautiful coffee region. Get ready for an unforgettable weekend filled with beautiful scenery, coffee, great music, and plenty of dancing. Everything you need to plan your trip and celebrate with us can be found right here.",
    alt_colibri: "Watercolor illustration of a hummingbird and an orchid",

    /* --- Practical info --- */
    info1_title: "Where to stay",
    info1_subtitle: "Hotel Finca del Café",
    info1_text:
      "Nestled in the heart of Colombia's beautiful coffee region, Hotel Finca del Café is surrounded by lush scenery and peaceful countryside. Wake up to fresh mountain air, enjoy locally grown coffee, and relax as we celebrate an unforgettable weekend together.",
    info1_button: "More information",
    info2_title: "Getting there",
    info2_text:
      "The nearest airport is Matecaña International (PEI) in Pereira, about 45 minutes away. Shared transportation will run from Pereira between the hotel and every wedding event. Once your travel is booked, click below to share your flight details and we'll take it from there.",
    info2_button: "Share your flight details",
    info3_title: "Make it a trip",
    info3_text:
      "If you'd like to stay a few extra days, our friends at Access run tours through the coffee region: hot springs, coffee farms, and the Cocora Valley. Just tell them we sent you.",

    /* --- Map --- */
    alt_mapa: "Illustrated map: from Pereira airport to Hotel Finca del Café and Hacienda El Jardín",

    /* --- Schedule --- */
    itin_title: "Schedule",
    alt_cafe: "Coffee cup icon",
    alt_copas: "Wine glasses icon",
    alt_orquidea: "Orchid flower icon",
    day1_title: "Day 1",
    day1_date: "Thursday, September 24",
    day1_e1_time: "10:00 AM",
    day1_e1_name: "Haldi",
    day1_e2_time: "Midday",
    day1_e2_name: "Optional tour",
    day1_e3_time: "5:00 PM",
    day1_e3_name: "Sangeet",
    day2_title: "Day 2",
    day2_date: "Friday, September 25",
    day2_e1_time: "10:00 AM",
    day2_e1_name: "Barat & Hindu ceremony",
    day2_e2_time: "1:00 PM",
    day2_e2_name: "Lunch",
    day2_e3_time: "3:00 PM",
    day2_e3_name: "Catholic ceremony",
    day3_title: "Day 3",
    day3_date: "Saturday, September 26",
    day3_e1_time: "9:00 AM",
    day3_e1_name: "Optional morning & midday tour",
    day3_e2_time: "5:00 PM",
    day3_e2_name: "Reception",

    /* --- The Events --- */
    events_title: "The Events",
    /* Haldi */
    ev_haldi_name: "Haldi",
    ev_haldi_meta1: "Thursday, September 24 · 10:00 AM",
    ev_haldi_meta2: "Casa Típica, Hotel Finca del Café",
    ev_haldi_desc:
      "The Haldi is a joyful Indian tradition that marks the beginning of a new chapter; a celebration of love and family before everything else begins. Together, our loved ones will bless the bride and groom with a turmeric paste, a gesture meant to bring happiness, prosperity, and good fortune into our marriage. Between the vibrant colors, the laughter, and the blessings, it's the perfect way to kick off our wedding weekend.",
    ev_haldi_dress: "Attire: casual sunrise colors. Comfortable and colorful!",
    alt_haldi: "Watercolor illustration of the Haldi ceremony",
    /* Baile y Sangeet */
    ev_sangeet_name: "Baile y Sangeet",
    ev_sangeet_meta1: "Thursday, September 24 · 5:00 PM",
    ev_sangeet_meta2: "Casa Típica courtyard, Hotel Finca del Café",
    ev_sangeet_desc:
      "Experience the best of India and Colombia in one unforgettable evening. From the vibrant traditions of Sangeet and Garba to the festive rhythms of Colombian cumbia, watch two cultures come together in a celebration of love, family, music, and dance.",
    ev_sangeet_dress: "Attire: colorful, flowy dresses in light, dance-ready fabrics. Festive and breezy!",
    alt_sangeet: "Watercolor illustration of Sangeet and cumbia dancing",
    /* Weddings (Hindu + Catholic) */
    ev_wed_name: "Weddings",
    ev_wed_meta1: "Friday, September 25 · 10:00 AM to 5:00 PM",
    ev_wed_venue: "Hacienda El Jardín",
    ev_wed_buses: "Buses depart at 8:45 AM and return to the hotel at 6:00 PM.",
    ev_wed_hindu_title: "Hindu Ceremony",
    ev_wed_hindu_desc:
      "Rooted in centuries of tradition and held in the presence of everyone we love, our Hindu wedding ceremony is where two families become one. Amid Colombia's lush green hills, ancient rituals unfold beneath the open sky; each step a quiet promise, each blessing a thread tying our two worlds together.",
    alt_hindu: "Watercolor illustration of a mandap for the Hindu ceremony",
    ev_wed_catholic_title: "Catholic Ceremony",
    ev_wed_catholic_desc:
      "Held in the quiet stillness of a bamboo forest, our Catholic wedding ceremony is a sacred celebration of faith, love, and the promises we carry for a lifetime. Surrounded by the people we love most, we'll exchange our vows and begin the journey of marriage together.",
    alt_catholic: "Watercolor illustration of a path through a bamboo forest",
    ev_wed_dress:
      "Attire: formal festive attire. Traditional Indian wear, Western formal, or a mix of both are all equally welcome for the Hindu ceremony. Feel free to stay in the same outfit for the Catholic ceremony that follows; close family and the wedding party may choose to change into garden or cocktail formal instead.",
    /* Reception */
    ev_rec_name: "Reception",
    ev_rec_meta1: "Saturday, September 26 · 5:30 PM to 12:00 AM",
    ev_rec_venue: "Hacienda El Jardín",
    ev_rec_buses: "Buses depart at 4:45 PM and return to the hotel at 12:00 AM.",
    ev_rec_desc:
      "As the sun sets, the celebration comes alive. An incredible band, an energetic dance floor, and an electric atmosphere set the stage for a night of nonstop dancing. Soulful live Latin rhythms and high-energy music will keep the party going late into the night, closing out our wedding weekend in unforgettable style.",
    ev_rec_dress: "Attire: go all out! Glam, fun, and party-ready. Think sequins, sparkle, bold colors, and your best night-out look; just make sure it's something you can dance in.",
    alt_reception: "Watercolor illustration of the evening reception party",

    /* --- What to bring --- */
    bring_title: "What to bring",
    bring_1: "Dandiya",
    bring_2: "Bug spray",
    bring_3: "Comfortable shoes",
    bring_4: "Sunscreen",
    bring_5: "Light jacket",
    bring_6: "Cash (COP)",

    /* --- Contact --- */
    contact_title: "Contact",
    contact_text1:
      "For questions about transportation, hotel, or the weekend schedule, reach out to Access.",
    contact_text2_pre: "For anything else, feel free to contact us directly at",
    contact_text2_or: "or",

    /* --- Footer --- */
    footer_text: "Vanessa & Devan · Santa Rosa de Cabal · 2026",
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
   3. FADE-IN SUAVE AL HACER SCROLL (Intersection Observer)
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
