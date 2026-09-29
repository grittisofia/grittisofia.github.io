/* ==========================================================
   CONTENT — edit this file to update the portfolio.
   Every text exists in three languages: en (UK), sv, it.
   Images: replace the Wix URLs with local files in
   assets/img/ (e.g. "assets/img/vallotti-cover.png").
   ========================================================== */

const WIX = "https://static.wixstatic.com/media/";

window.SITE = {
  name: "Sofia Gritti",
  email: "grittisofiaa@gmail.com",
  linkedin: "https://www.linkedin.com/in/sofia-gritti/",
  cv: "assets/Sofia_Gritti_CV.pdf",
  portrait: "assets/img/sofia-gritti.jpg",
  location: "Malmö, Sweden"
};

/* ---------- Case studies (order = order on the home page) ---------- */
window.PROJECTS = [
  {
    id: "recent-4c",
    placeholder: true,          // ← set to false once the case study is written
    year: "2023–2026",
    cover: "",
    tags: ["Design system", "Design tokens", "B2B"],
    i18n: {
      en: { title: "Design system & design tokens", client: "4C Strategies",
            summary: "How I led the creation of 4C Strategies' design system and token architecture, from strategy to adoption across design and development. Case study coming soon." },
      sv: { title: "Designsystem & design tokens", client: "4C Strategies",
            summary: "Hur jag ledde arbetet med 4C Strategies designsystem och token-arkitektur, från strategi till införande i design och utveckling. Fallstudien kommer snart." },
      it: { title: "Design system & design token", client: "4C Strategies",
            summary: "Come ho guidato la creazione del design system e dell'architettura dei token di 4C Strategies, dalla strategia all'adozione tra design e sviluppo. Case study in arrivo." }
    }
  },
  {
    id: "japan-trip",
    year: "2026",
    cover: "assets/img/japan/cover.jpg",
    video: "assets/img/japan/walkthrough.mp4",
    poster: "assets/img/japan/home.webp",
    prototype: "https://www.figma.com/proto/e67KySye6VPckuf0s9OCfV/Japan?page-id=0%3A1&node-id=59-824&viewport=-4125%2C725%2C0.62&t=fATb0IiBpk2lVibb-9&scaling=scale-down&content-scaling=fixed&show-proto-sidebar=1&starting-point-node-id=59%3A824",
    gallery: [
      { src: "assets/img/japan/home.webp", en: "Trip overview by city", sv: "Resan i överblick, stad för stad", it: "Panoramica del viaggio per città" },
      { src: "assets/img/japan/city-day.webp", en: "Day-by-day plan with times and costs", sv: "Dag för dag med tider och kostnader", it: "Programma giorno per giorno con orari e costi" },
      { src: "assets/img/japan/place-castle.webp", en: "Place guide: weather, packing, events", sv: "Platsguide: väder, packning, evenemang", it: "Guida al luogo: meteo, cosa mettere in valigia, eventi" },
      { src: "assets/img/japan/place-getting-there.webp", en: "How to get there and visitor info", sv: "Hur man tar sig dit och besöksinfo", it: "Come arrivare e info per la visita" },
      { src: "assets/img/japan/city-tips.webp", en: "Hotel details and local tips", sv: "Hotellinfo och lokala tips", it: "Info hotel e consigli locali" },
      { src: "assets/img/japan/fuji.webp", en: "Each stop ready at a glance", sv: "Varje stopp klart på ett ögonblick", it: "Ogni tappa pronta a colpo d'occhio" }
    ],
    tags: ["Mobile app", "Proof of concept", "Figma"],
    i18n: {
      en: {
        title: "Japan Trip Companion", client: "Personal project",
        summary: "A mobile app I designed in my spare time to plan a three-week trip across Japan: the itinerary, the bookings not to miss and everything worth knowing about each place, in one pocket-sized guide.",
        role: "Product Designer (solo)", audience: "Travellers (my own trip)", scope: "Mobile app · Proof of concept",
        challenge: "Planning a multi-city trip meant juggling flights, hotels, tickets that sell out, opening hours, transport and dozens of notes spread across emails, chats and bookmarks. I needed one place to keep track of the plan and to be reminded of what still had to be booked.",
        approach: [
          "Mapped the trip as a structure: cities, days, and the places within each day",
          "Separated what needs action before departure (critical bookings) from what is useful on the day",
          "Designed a place template reused everywhere: address, how to get there, weather and packing, visitor info, events and tips",
          "Built a clickable Figma prototype with real content and tested it on my own planning"
        ],
        solution: "A warm, image-led app: a city carousel with dates, a day-by-day schedule with times and costs, detailed place guides with a 'mark as completed' action, plus quick access to flights, hotels and the bookings to check before travelling.",
        outcome: "A working proof of concept that turned a scattered plan into a single, calm source of truth, and a playground for exploring information architecture and content design outside of work."
      },
      sv: {
        title: "Japan Trip Companion", client: "Personligt projekt",
        summary: "En mobilapp som jag designade på fritiden för att planera en tre veckor lång resa genom Japan: resplanen, bokningarna man inte får missa och allt värt att veta om varje plats, samlat i en guide i fickformat.",
        role: "Produktdesigner (solo)", audience: "Resenärer (min egen resa)", scope: "Mobilapp · Proof of concept",
        challenge: "Att planera en resa med flera städer innebar att hålla koll på flyg, hotell, biljetter som tar slut, öppettider, transporter och massor av anteckningar utspridda i mejl, chattar och bokmärken. Jag behövde ett ställe där planen fanns samlad och som påminde mig om vad som fortfarande behövde bokas.",
        approach: [
          "Kartlade resan som en struktur: städer, dagar och platserna inom varje dag",
          "Skilde på det som kräver en åtgärd före avresan (kritiska bokningar) och det som är användbart på plats",
          "Designade en platsmall som återanvänds överallt: adress, hur man tar sig dit, väder och packning, besöksinfo, evenemang och tips",
          "Byggde en klickbar Figma-prototyp med riktigt innehåll och testade den i min egen planering"
        ],
        solution: "En varm, bilddriven app: en karusell med städer och datum, ett schema dag för dag med tider och kostnader, detaljerade platsguider med en knapp för att markera som klart, samt snabb åtkomst till flyg, hotell och bokningar att kontrollera före resan.",
        outcome: "En fungerande proof of concept som gjorde en utspridd plan till en enda, lugn informationskälla, och en lekplats för att utforska informationsarkitektur och innehållsdesign utanför jobbet."
      },
      it: {
        title: "Japan Trip Companion", client: "Progetto personale",
        summary: "Un'app mobile che ho progettato nel tempo libero per organizzare un viaggio di tre settimane in Giappone: l'itinerario, le prenotazioni da non dimenticare e tutto quello che vale la pena sapere su ogni luogo, in una guida tascabile.",
        role: "Product Designer (in autonomia)", audience: "Viaggiatori (il mio viaggio)", scope: "App mobile · Proof of concept",
        challenge: "Organizzare un viaggio in più città significava tenere insieme voli, hotel, biglietti che si esauriscono, orari di apertura, trasporti e decine di appunti sparsi tra email, chat e segnalibri. Mi serviva un unico posto per seguire il piano e ricordarmi cosa restava ancora da prenotare.",
        approach: [
          "Ho mappato il viaggio come una struttura: città, giorni e luoghi all'interno di ogni giornata",
          "Ho separato ciò che richiede un'azione prima della partenza (prenotazioni critiche) da ciò che serve sul posto",
          "Ho progettato un template per i luoghi riusato ovunque: indirizzo, come arrivare, meteo e abbigliamento, info per la visita, eventi e consigli",
          "Ho costruito un prototipo cliccabile in Figma con contenuti reali e l'ho messo alla prova durante la mia pianificazione"
        ],
        solution: "Un'app calda e guidata dalle immagini: un carosello delle città con le date, un programma giorno per giorno con orari e costi, guide dettagliate per ogni luogo con l'azione 'segna come completato', e accesso rapido a voli, hotel e prenotazioni da controllare prima della partenza.",
        outcome: "Un proof of concept funzionante che ha trasformato un piano sparso in un'unica fonte di riferimento, chiara e tranquilla, e un terreno di prova per sperimentare architettura dell'informazione e content design fuori dal lavoro."
      }
    }
  },
  {
    id: "vallotti",
    year: "",
    cover: WIX + "bdf1c7_976403e5f42e482ea623e205b8afef98~mv2.png",
    screens: [],
    prototype: "https://xd.adobe.com/view/ad1e4aaf-40ce-4b25-86e1-4b4351626381-f84d/?fullscreen",
    tags: ["Research", "Web", "Mobile app"],
    i18n: {
      en: {
        title: "Vallotti Music School", client: "Scuola di musica Vallotti",
        summary: "A portfolio-style website and companion app that helps a music school attract students and simplifies how students, teachers and staff work together.",
        role: "UX/UI Designer", audience: "Ages 5–99+", scope: "Website · Mobile app",
        challenge: "The school needed more than a brochure site. Course information was hard to compare, enrolment relied on manual steps, and teachers had no shared place to manage materials or talk to students.",
        approach: [
          "Interviews and surveys with students, parents and teachers to map needs across a 5–99+ age range",
          "Personas and user journeys for enrolment, scheduling and lesson resources",
          "Information architecture built around courses rather than the organisation chart",
          "Wireframes and interactive prototypes, iterated together with the school"
        ],
        solution: "A visually rich, portfolio-style site that showcases courses through imagery and interactive elements, plus an app where students enrol, check schedules and access resources, and teachers manage courses and message students.",
        outcome: "The school reported higher user satisfaction, smoother day-to-day administration and new enrolments driven by the redesigned experience."
      },
      sv: {
        title: "Musikskolan Vallotti", client: "Scuola di musica Vallotti",
        summary: "En webbplats i portfoliostil och en tillhörande app som hjälper en musikskola att locka elever och förenklar samarbetet mellan elever, lärare och personal.",
        role: "UX/UI-designer", audience: "5–99+ år", scope: "Webbplats · Mobilapp",
        challenge: "Skolan behövde mer än en broschyrsajt. Kursinformationen var svår att jämföra, anmälan krävde manuella steg och lärarna saknade en gemensam plats för material och kontakt med eleverna.",
        approach: [
          "Intervjuer och enkäter med elever, föräldrar och lärare för att kartlägga behov i åldrarna 5–99+",
          "Personas och användarresor för anmälan, schemaläggning och lektionsmaterial",
          "Informationsarkitektur byggd kring kurserna i stället för organisationen",
          "Wireframes och interaktiva prototyper som itererades tillsammans med skolan"
        ],
        solution: "En bildrik webbplats i portfoliostil som visar kurserna med bilder och interaktiva element, samt en app där elever anmäler sig, ser sitt schema och hittar material, och där lärare hanterar kurser och kommunicerar med eleverna.",
        outcome: "Skolan upplevde nöjdare användare, en smidigare administration och nya anmälningar tack vare den nya upplevelsen."
      },
      it: {
        title: "Scuola di musica Vallotti", client: "Scuola di musica Vallotti",
        summary: "Un sito in stile portfolio e un'app dedicata che aiutano una scuola di musica ad attrarre nuovi allievi e semplificano la collaborazione tra studenti, docenti e segreteria.",
        role: "UX/UI Designer", audience: "5–99+ anni", scope: "Sito web · App mobile",
        challenge: "La scuola aveva bisogno di più di un sito vetrina. Le informazioni sui corsi erano difficili da confrontare, l'iscrizione richiedeva passaggi manuali e i docenti non avevano uno spazio condiviso per materiali e comunicazioni.",
        approach: [
          "Interviste e sondaggi con studenti, genitori e docenti per mappare i bisogni in una fascia d'età da 5 a 99+ anni",
          "Personas e user journey per iscrizione, orari e materiali didattici",
          "Architettura dell'informazione costruita attorno ai corsi, non all'organigramma",
          "Wireframe e prototipi interattivi, iterati insieme alla scuola"
        ],
        solution: "Un sito ricco di immagini in stile portfolio che racconta i corsi con elementi interattivi, e un'app in cui gli studenti si iscrivono, consultano gli orari e accedono ai materiali, mentre i docenti gestiscono i corsi e comunicano con gli allievi.",
        outcome: "La scuola ha registrato una maggiore soddisfazione degli utenti, una gestione quotidiana più efficiente e nuove iscrizioni grazie alla nuova esperienza."
      }
    }
  },
  {
    id: "puglia-airports",
    year: "",
    cover: WIX + "bdf1c7_38a34cbb6a0c43e9b4a370e5fd4483fa~mv2.png",
    screens: [WIX + "bdf1c7_816d53419a034532ab8efb254ffd9a7c~mv2.jpg"],
    prototype: "https://xd.adobe.com/view/63d618b1-0b0a-406e-936e-3927d7bd771b-3685/?fullscreen",
    tags: ["Travel", "Information architecture", "Responsive"],
    i18n: {
      en: {
        title: "Puglia Airports", client: "Puglia, Italy",
        summary: "One portal for every airport in Puglia, combining flight information with the trains, buses and taxis travellers need next.",
        role: "UX/UI & Graphic Designer", audience: "Ages 15–99+", scope: "Responsive website",
        challenge: "To plan a single journey, travellers had to jump between separate airport and transport websites, each with its own logic and level of detail.",
        approach: [
          "User research with travellers using Puglia's airports",
          "Analysis of existing airport and transport sites to find gaps and opportunities",
          "A sitemap with sections for each airport, transport options and services",
          "Interactive maps, timetable lookup and service directories",
          "Usability testing to refine the solution"
        ],
        solution: "A unified, responsive site with real-time transport schedules, fare calculators and booking links, designed mobile-first for people on the move.",
        outcome: "A centralised experience that cuts the steps from landing to onward travel, refined through usability feedback."
      },
      sv: {
        title: "Puglias flygplatser", client: "Apulien, Italien",
        summary: "En portal för alla flygplatser i Apulien som kombinerar flyginformation med tåg, bussar och taxi som resenärer behöver härnäst.",
        role: "UX/UI- och grafisk designer", audience: "15–99+ år", scope: "Responsiv webbplats",
        challenge: "För att planera en enda resa fick resenärer hoppa mellan separata flygplats- och trafiksajter, var och en med sin egen logik och detaljnivå.",
        approach: [
          "Användarresearch med resenärer på Apuliens flygplatser",
          "Analys av befintliga flygplats- och trafiksajter för att hitta luckor och möjligheter",
          "Sajtkarta med sektioner per flygplats, transport och tjänster",
          "Interaktiva kartor, tidtabellssök och tjänstekataloger",
          "Användbarhetstester för att förfina lösningen"
        ],
        solution: "En samlad, responsiv webbplats med realtidstidtabeller, priskalkylator och bokningslänkar, designad mobile first för människor i rörelse.",
        outcome: "En samlad upplevelse som minskar stegen från landning till vidare resa, förfinat med hjälp av användbarhetstester."
      },
      it: {
        title: "Aeroporti di Puglia", client: "Puglia, Italia",
        summary: "Un unico portale per tutti gli aeroporti pugliesi, che unisce le informazioni sui voli a treni, autobus e taxi di cui i viaggiatori hanno bisogno subito dopo.",
        role: "UX/UI & Graphic Designer", audience: "15–99+ anni", scope: "Sito responsive",
        challenge: "Per pianificare un solo viaggio, i viaggiatori dovevano passare da un sito all'altro tra aeroporti e trasporti, ciascuno con la propria logica e il proprio livello di dettaglio.",
        approach: [
          "Ricerca con i viaggiatori che utilizzano gli aeroporti pugliesi",
          "Analisi dei siti aeroportuali e dei trasporti esistenti per individuare lacune e opportunità",
          "Sitemap con sezioni per ciascun aeroporto, trasporti e servizi",
          "Mappe interattive, ricerca orari e directory dei servizi",
          "Test di usabilità per affinare la soluzione"
        ],
        solution: "Un sito unico e responsive con orari in tempo reale, calcolo tariffe e link di prenotazione, progettato mobile first per chi è in movimento.",
        outcome: "Un'esperienza centralizzata che riduce i passaggi dall'atterraggio al proseguimento del viaggio, affinato grazie ai test di usabilità."
      }
    }
  },
  {
    id: "venezia-unica",
    year: "",
    cover: WIX + "bdf1c7_89ae76cb07e84b6d810d606ff238beff~mv2.png",
    screens: [WIX + "bdf1c7_103d2e24a626478cb165ca1dab62677e~mv2.png"],
    prototype: "https://xd.adobe.com/view/075b4c91-1f7c-4116-9858-950ccf25851e-5208/?fullscreen",
    tags: ["Public sector", "E-commerce", "Service design"],
    i18n: {
      en: {
        title: "Venezia Unica", client: "Venice, Italy",
        summary: "An integrated city platform for Venice, bringing municipal information, transport and e-commerce into one experience for residents and visitors.",
        role: "UX/UI & Graphic Designer", audience: "Residents & visitors", scope: "Platform · E-commerce",
        challenge: "Residents and tourists have very different needs, yet both depend on the same services, timetables and tickets, spread across disconnected channels.",
        approach: [
          "Research with both residents and tourists",
          "Analysis of municipal and tourism websites to identify best practice",
          "Information architecture spanning information, services, transport and shop",
          "Interactive maps, timetables and service directories",
          "Notifications for service changes, events and emergency alerts"
        ],
        solution: "A responsive platform combining city news, transport and a shop for tickets and local crafts, with real-time updates and alerts.",
        outcome: "A single, coherent front door to the city that serves two very different audiences without compromising either."
      },
      sv: {
        title: "Venezia Unica", client: "Venedig, Italien",
        summary: "En samlad stadsplattform för Venedig som förenar kommunal information, kollektivtrafik och e-handel i en upplevelse för både invånare och besökare.",
        role: "UX/UI- och grafisk designer", audience: "Invånare & besökare", scope: "Plattform · E-handel",
        challenge: "Invånare och turister har väldigt olika behov, men är beroende av samma tjänster, tidtabeller och biljetter, utspridda över separata kanaler.",
        approach: [
          "Research med både invånare och turister",
          "Analys av kommunala webbplatser och turistsajter för att hitta bästa praxis",
          "Informationsarkitektur för information, tjänster, transport och butik",
          "Interaktiva kartor, tidtabeller och tjänstekataloger",
          "Aviseringar vid trafikstörningar, evenemang och akuta meddelanden"
        ],
        solution: "En responsiv plattform med nyheter, kollektivtrafik och en butik för biljetter och lokalt hantverk, med realtidsuppdateringar och aviseringar.",
        outcome: "En enda, sammanhållen ingång till staden som tjänar två mycket olika målgrupper utan att kompromissa med någon av dem."
      },
      it: {
        title: "Venezia Unica", client: "Venezia, Italia",
        summary: "Una piattaforma integrata per la città di Venezia che riunisce informazioni comunali, trasporti ed e-commerce in un'unica esperienza per residenti e visitatori.",
        role: "UX/UI & Graphic Designer", audience: "Residenti e visitatori", scope: "Piattaforma · E-commerce",
        challenge: "Residenti e turisti hanno bisogni molto diversi, ma dipendono dagli stessi servizi, orari e biglietti, sparsi su canali scollegati.",
        approach: [
          "Ricerca con residenti e turisti",
          "Analisi dei siti comunali e turistici per individuare le best practice",
          "Architettura dell'informazione per informazioni, servizi, trasporti e shop",
          "Mappe interattive, orari e directory dei servizi",
          "Notifiche per variazioni del servizio, eventi e allerte"
        ],
        solution: "Una piattaforma responsive con notizie, trasporti e uno shop per biglietti e artigianato locale, con aggiornamenti in tempo reale e notifiche.",
        outcome: "Un'unica porta d'accesso alla città, coerente, che serve due pubblici molto diversi senza sacrificarne nessuno."
      }
    }
  },
  {
    id: "ambre-botanique",
    year: "",
    cover: WIX + "bdf1c7_6ce48fe59b4145c380a56e0822fde3a3~mv2.png",
    screens: [WIX + "bdf1c7_870964c68e574c1bbbfec73f07a0c0c1~mv2.jpg"],
    prototype: "https://xd.adobe.com/view/d53d1e0f-3157-4313-9824-cc1d61dcfb98-806e/?fullscreen",
    tags: ["Brand", "E-commerce", "Mobile app"],
    i18n: {
      en: {
        title: "Ambre Botanique", client: "Thesis project",
        summary: "An eco-friendly cosmetics brand built end-to-end, from visual identity to a responsive website and mobile app.",
        role: "UX/UI & Graphic Designer", audience: "Ages 15–99+", scope: "Brand · Website · App",
        challenge: "Sustainability-minded shoppers want transparency about ingredients, sourcing and packaging, but most cosmetics e-commerce buries it. The brand had to make its values tangible at every touchpoint.",
        approach: [
          "Market analysis of consumer needs around sustainable cosmetics",
          "Benchmark of UX practice in cosmetics and sustainable e-commerce",
          "Logo, colour palette and tone of voice expressing transparency and sustainability",
          "Information architecture and responsive design for every device",
          "An app with product search, ingredient lists and usage guidance"
        ],
        solution: "A cohesive brand and digital ecosystem where ingredients, instructions and educational content sit alongside the products, not hidden behind them.",
        outcome: "A complete concept showing how brand strategy, content and interaction design can work as one system."
      },
      sv: {
        title: "Ambre Botanique", client: "Examensarbete",
        summary: "Ett miljövänligt kosmetikavarumärke skapat från grunden, från visuell identitet till responsiv webbplats och mobilapp.",
        role: "UX/UI- och grafisk designer", audience: "15–99+ år", scope: "Varumärke · Webb · App",
        challenge: "Hållbarhetsmedvetna kunder vill ha transparens kring ingredienser, ursprung och förpackningar, men de flesta e-handlare inom kosmetik gömmer den informationen. Varumärket behövde göra sina värderingar konkreta i varje kontaktpunkt.",
        approach: [
          "Marknadsanalys av konsumenters behov kring hållbar kosmetik",
          "Benchmark av UX-praxis inom kosmetik och hållbar e-handel",
          "Logotyp, färgpalett och tonalitet som uttrycker transparens och hållbarhet",
          "Informationsarkitektur och responsiv design för alla enheter",
          "En app med produktsök, ingredienslistor och användarinstruktioner"
        ],
        solution: "Ett sammanhållet varumärke och digitalt ekosystem där ingredienser, instruktioner och kunskapsinnehåll finns bredvid produkterna, inte gömda bakom dem.",
        outcome: "Ett komplett koncept som visar hur varumärkesstrategi, innehåll och interaktionsdesign kan fungera som ett system."
      },
      it: {
        title: "Ambre Botanique", client: "Progetto di tesi",
        summary: "Un brand di cosmetici eco-sostenibili costruito da zero, dall'identità visiva al sito responsive e all'app mobile.",
        role: "UX/UI & Graphic Designer", audience: "15–99+ anni", scope: "Brand · Sito · App",
        challenge: "Chi acquista in modo consapevole vuole trasparenza su ingredienti, provenienza e packaging, ma la maggior parte degli e-commerce di cosmetica la nasconde. Il brand doveva rendere tangibili i propri valori in ogni punto di contatto.",
        approach: [
          "Analisi di mercato sui bisogni dei consumatori di cosmetica sostenibile",
          "Benchmark delle best practice UX nella cosmetica e nell'e-commerce sostenibile",
          "Logo, palette e tone of voice che esprimono trasparenza e sostenibilità",
          "Architettura dell'informazione e design responsive per ogni dispositivo",
          "Un'app con ricerca prodotti, liste ingredienti e istruzioni d'uso"
        ],
        solution: "Un brand e un ecosistema digitale coerenti, in cui ingredienti, istruzioni e contenuti educativi stanno accanto ai prodotti, non dietro.",
        outcome: "Un concept completo che dimostra come strategia di brand, contenuti e interaction design possano funzionare come un unico sistema."
      }
    }
  }
];

/* ---------- Graphic design & illustration ---------- */
window.CRAFT = [
  { img: WIX + "bdf1c7_95c5ca672fb5456c9329bfc5509a1648~mv2.png",
    i18n: { en: ["The Little Prince", "Editorial design & illustration"],
            sv: ["Lille prinsen", "Redaktionell design & illustration"],
            it: ["Il Piccolo Principe", "Editoria e illustrazione"] } },
  { img: WIX + "bdf1c7_fcab8241c3c942a2954455dde515f58c~mv2.png",
    i18n: { en: ["Franciacorta Headache", "Identity & print for a medical conference"],
            sv: ["Franciacorta Headache", "Identitet & trycksaker för en medicinsk konferens"],
            it: ["Franciacorta Headache", "Identità e stampa per un congresso medico"] } },
  { img: WIX + "bdf1c7_fdcf49ddc1d049cea300148d47dd2586~mv2.png",
    i18n: { en: ["Vini Naturali", "Brand identity & wine labels"],
            sv: ["Vini Naturali", "Varumärke & vinetiketter"],
            it: ["Vini Naturali", "Brand identity ed etichette"] } }
];

/* ---------- Experience (verify dates & titles) ---------- */
window.EXPERIENCE = [
  { when: "2023", now: true, org: "4C Strategies · Malmö",
    i18n: { en: ["Product Designer / UX Designer", "Led the company design system and design tokens from strategy to adoption. Owns end-to-end UX for complex product workflows, runs user research (interviews, usability tests, user forums, on-site visits) and aligns product, engineering and stakeholders on trade-offs. Tech Award Q4 2025."],
            sv: ["Produktdesigner / UX-designer", "Ledde arbetet med företagets designsystem och design tokens, från strategi till införande. Ansvarar för UX i komplexa produktflöden från början till slut, driver användarresearch (intervjuer, användbarhetstester, användarforum och platsbesök) och förankrar avvägningar hos produkt, utveckling och intressenter. Tech Award Q4 2025."],
            it: ["Product Designer / UX Designer", "Ho guidato la creazione del design system aziendale e dei design token, dalla strategia all'adozione. Seguo la UX end-to-end di flussi di prodotto complessi, conduco la ricerca utente (interviste, test di usabilità, user forum, visite on-site) e allineo product, engineering e stakeholder sui trade-off. Tech Award Q4 2025."] } },
  { when: "2022–2023", org: "SwedenFoodTech · Stockholm",
    i18n: { en: ["UX Designer / Web Designer", "Designed and maintained web experiences, from layout and navigation to interaction patterns, iterating on live pages based on user feedback."],
            sv: ["UX-designer / webbdesigner", "Designade och förvaltade webbupplevelser, från layout och navigation till interaktionsmönster, och itererade på live-sidor utifrån användarnas feedback."],
            it: ["UX Designer / Web Designer", "Ho progettato e mantenuto esperienze web, dal layout alla navigazione ai pattern di interazione, iterando sulle pagine live in base al feedback degli utenti."] } },
  { when: "2021–2022", org: "BBS s.r.l. · Italy",
    i18n: { en: ["Product Designer / UX Designer", "UX for public sector clients from research to prototype: interviews, wireframes, prototypes and usability testing for accessible interfaces."],
            sv: ["Produktdesigner / UX-designer", "UX för offentliga kunder från research till prototyp: intervjuer, wireframes, prototyper och användbarhetstester för tillgängliga gränssnitt."],
            it: ["Product Designer / UX Designer", "UX per clienti del settore pubblico, dalla ricerca al prototipo: interviste, wireframe, prototipi e test di usabilità per interfacce accessibili."] } }
];
