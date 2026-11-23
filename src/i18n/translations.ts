export type Language = "es" | "eu";

interface Card {
  title: string;
  description: string;
}

interface Project {
  name: string;
  sector: string;
  intervention: string;
  whatWeDid: string;
  ourContribution: string;
}

export interface Translations {
  nav: { home: string; about: string; services: string; contact: string; languageLabel: string; logoAlt: string };
  hero: {
    imageAlt: string;
    sloganChange: string;
    sloganYou: string;
    introBefore: string;
    introHighlight: string;
    introAfter: string;
    quote: string;
    cta: string;
  };
  about: {
    title: string;
    intro: string;
    timelineTitle: string;
    milestones: { year: string; event: string }[];
    valuesTitle: string;
    values: Card[];
    teamTitle: string;
    teamIntro: string;
    teamRoles: { title: string; points: string[] }[];
  };
  services: {
    title: string;
    intro: string;
    areasTitle: string;
    areas: Card[];
    methodologyTitle: string;
    methodologyImageAlt: string;
    a2uTitle: string;
    a2uBefore: string;
    a2uHighlight: string;
    a2uAfter: string;
    a2uPillarsText: string;
    pillars: Card[];
    keyServicesTitle: string;
    keyServices: Card[];
    philosophy: string;
  };
  projects: {
    title: string;
    intro: string;
    whatWeDid: string;
    ourContribution: string;
    items: Project[];
  };
  contact: {
    title: string;
    imagineTitle: string;
    imagineText: string;
    formTitle: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    organizationLabel: string;
    organizationPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    sending: string;
    send: string;
    successTitle: string;
    successDescription: string;
    errorTitle: string;
    errorDescription: string;
    infoTitle: string;
    infoEmail: string;
    infoLocation: string;
    infoLocationValue: string;
    readyTitle: string;
    readyText: string;
    readyPoints: string[];
  };
  footer: { rights: string; legal: string; privacy: string; cookies: string };
  notFound: { message: string; back: string };
}

const es: Translations = {
  nav: {
    home: "Inicio",
    about: "Quiénes somos",
    services: "Qué hacemos",
    contact: "Contacto",
    languageLabel: "Seleccionar idioma",
    logoAlt: "ALDA2U - Logo",
  },
  hero: {
    imageAlt: "ALDA2U - Diseño abstracto representando transformación y conexión humana",
    sloganChange: "Transformamos",
    sloganYou: "Para ti",
    introBefore: "Agencia de asesoramiento estratégico y diseño de servicios especializada en los sectores ",
    introHighlight: "sanitario, social y sociosanitario",
    introAfter: "",
    quote: "\"Diseñamos el cambio contigo, desde la estrategia y la empatía.\"",
    cta: "Descubre cómo transformamos",
  },
  about: {
    title: "Quiénes somos",
    intro:
      "Somos un equipo multidisciplinario con enfoque integral y amplia experiencia en el ámbito sociosanitario. Combinamos diseño estratégico, innovación tecnológica y sensibilidad humana para acompañar a las organizaciones en sus procesos de transformación y mejora continua.",
    timelineTitle: "Nuestro recorrido",
    milestones: [
      { year: "2013", event: "Fundación de ALDA2U" },
      { year: "2019", event: "Comienza nuestro camino en consultoría estratégica y diseño de servicios especializados en el sector salud, social y sociosanitario" },
      { year: "2020", event: "Desarrollamos una metodología propia de diseño de servicios para el sector sociosanitario" },
      { year: "2021", event: "Empezamos el diseño y acompañamiento de estrategias del sector público en el ámbito de sistemas de atención social y sociosanitaria" },
      { year: "2022", event: "Somos una empresa 100% online" },
      { year: "2024", event: "Comenzamos también a trabajar en acuerdos de colaboración con terceros" },
      { year: "2025", event: "Nos especializamos en interoperabilidad sociosanitaria" },
    ],
    valuesTitle: "Nuestros valores",
    values: [
      { title: "Compromiso y personalización", description: "Cada proyecto es único y merece una atención personalizada que refleje las necesidades específicas de la organización." },
      { title: "Colaboración genuina", description: "Trabajamos codo a codo con nuestros clientes, creando alianzas duraderas basadas en la confianza mutua." },
      { title: "Cuidado del vínculo", description: "Priorizamos las relaciones humanas y el bienestar de todas las personas involucradas en el proceso." },
      { title: "Discreción y respeto", description: "Mantenemos la máxima confidencialidad y respeto hacia la información y procesos de nuestros clientes." },
      { title: "Transformación con sentido", description: "Cada cambio que proponemos tiene un propósito claro y aporta valor real a la organización y las personas." },
      { title: "Innovación", description: "Exploramos nuevas formas de hacer las cosas, adaptándonos constantemente para ofrecer soluciones creativas y efectivas." },
    ],
    teamTitle: "Nuestro Equipo",
    teamIntro:
      "En alda2u creemos que el valor no está en cargos ni jerarquías, sino en la diversidad de capacidades que ponemos en juego. Somos un equipo interdisciplinario que piensa, diseña y acompaña procesos de transformación, combinando conocimiento del sector, tecnología y diseño estratégico.",
    teamRoles: [
      {
        title: "Expertos en el ámbito sociosanitario, social y sanitario",
        points: [
          "Conocen en profundidad los sistemas, las políticas y las realidades de los servicios de atención.",
          "Aportan experiencia aplicada y visión estratégica para diseñar propuestas realistas y con impacto.",
        ],
      },
      {
        title: "Especialistas en tecnología",
        points: [
          "Acompañan procesos de digitalización y desarrollo de soluciones tecnológicas con criterio.",
          "Garantizan que la tecnología sea siempre un medio al servicio de las personas.",
        ],
      },
      {
        title: "Diseñadores estratégicos de productos y servicios",
        points: [
          "Impulsan la innovación desde el diseño.",
          "Facilitan procesos de co-creación y crean experiencias más accesibles, empáticas y sostenibles.",
        ],
      },
    ],
  },
  services: {
    title: "Qué hacemos",
    intro:
      "Aplicamos diseño estratégico centrado en las personas, combinado con tecnología con sentido, para crear soluciones que realmente transformen las organizaciones del sector sociosanitario.",
    areasTitle: "Nuestras 4 áreas de actuación",
    areas: [
      { title: "Organización", description: "Rediseño de estructuras y procesos organizacionales para optimizar el funcionamiento y la eficiencia." },
      { title: "Experiencia", description: "Mejora de la experiencia de usuarios, pacientes y profesionales a través del diseño centrado en personas." },
      { title: "Servicio", description: "Diseño e implementación de servicios innovadores que respondan a las necesidades reales del sector." },
      { title: "Estrategia", description: "Desarrollo de estrategias sostenibles y planes de transformación adaptados a cada contexto." },
    ],
    methodologyTitle: "Nuestro enfoque y metodología",
    methodologyImageAlt: "Metodología de diseño centrado en las personas",
    a2uTitle: "Metodología A2U",
    a2uBefore: "Nuestra metodología propia basada en ",
    a2uHighlight: "Human-Centered Design",
    a2uAfter: " aplicado específicamente al ámbito sociosanitario, adaptada a las particularidades y necesidades de este sector.",
    a2uPillarsText:
      "Trabajamos desde cuatro pilares fundamentales que guían nuestra metodología y definen nuestra forma de entender la transformación organizacional.",
    pillars: [
      { title: "Diseño centrado en las personas", description: "Ponemos a las personas en el centro de cada decisión, considerando sus necesidades, emociones y experiencias." },
      { title: "Participación como motor de cambio", description: "Involucramos activamente a todos los actores relevantes en el proceso de diseño y transformación." },
      { title: "Mirada sistémica", description: "Analizamos el contexto completo, considerando todas las interacciones y dependencias del sistema." },
      { title: "Adaptabilidad y acompañamiento", description: "Acompañamos durante todo el proceso, adaptándonos a las necesidades cambiantes de cada organización." },
    ],
    keyServicesTitle: "Servicios clave",
    keyServices: [
      { title: "Diseño de servicios", description: "Creación de servicios centrados en las personas y adaptados al contexto sociosanitario." },
      { title: "Innovación y gestión del cambio", description: "Acompañamiento en procesos de transformación e implementación de innovaciones." },
      { title: "Consultoría de negocios", description: "Asesoramiento estratégico para el desarrollo y crecimiento sostenible de organizaciones del sector sociosanitario." },
      { title: "Oficina técnica", description: "Soporte técnico especializado para proyectos complejos del ámbito sociosanitario." },
      { title: "Interoperabilidad sociosanitaria", description: "Soluciones para la integración, coordinación y comunicación entre sistemas y organizaciones." },
      { title: "Asesoramiento tecnológico", description: "Asesoramos y apoyamos en el uso de tecnología según las necesidades del cliente y/o proyecto." },
    ],
    philosophy:
      "\"No llevamos recetas. Escuchamos, analizamos y diseñamos procesos que respondan al propósito de cada organización.\"",
  },
  projects: {
    title: "Proyectos",
    intro:
      "Cada proyecto es una muestra de lo que somos capaces de imaginar, facilitar, diseñar y acompañar. Estas experiencias reflejan nuestro enfoque y metodología en acción.",
    whatWeDid: "Qué hicimos",
    ourContribution: "Nuestra aportación",
    items: [
      {
        name: "Nerea Care",
        sector: "Empresas de cuidados - Atención domiciliaria",
        intervention: "Diseño de servicio digital",
        whatWeDid: "Diseñamos una plataforma integral que digitaliza y optimiza procesos asistenciales, centrándose en la experiencia tanto de profesionales como de pacientes.",
        ourContribution: "Transformación digital que humaniza la tecnología en el cuidado",
      },
      {
        name: "CARE2U",
        sector: "Empresas de cuidados - Atención domiciliaria",
        intervention: "Acompañamiento estratégico de interoperabilidad",
        whatWeDid: "Facilitamos la creación de un ecosistema de interoperabilidad entre servicios sociales y sanitarios, mejorando la coordinación y continuidad asistencial.",
        ourContribution: "Puente tecnológico que conecta cuidados fragmentados",
      },
      {
        name: "Elkar Bizitu",
        sector: "Participación ciudadana",
        intervention: "Metodología participativa",
        whatWeDid: "Desarrollamos una metodología que pone a las personas en situación vulnerable en el centro del diseño de servicios sociales, potenciando su participación activa.",
        ourContribution: "Empoderamiento real de personas usuarias como co-creadoras",
      },
      {
        name: "Helduak Zabaltzen",
        sector: "Centros de mayores - Entorno comunitario",
        intervention: "Innovación social comunitaria",
        whatWeDid: "Creamos una red de apoyo comunitario que integra herramientas digitales adaptadas para promover el envejecimiento activo en entornos rurales.",
        ourContribution: "Fortalecimiento de vínculos que trasciende lo digital",
      },
      {
        name: "Proyecto de Teleasistencia",
        sector: "Sector público",
        intervention: "Rediseño de servicio público",
        whatWeDid: "Lideramos la modernización integral del servicio de teleasistencia regional, aplicando un enfoque centrado en el usuario y optimizando procesos operativos.",
        ourContribution: "Servicio público más humano y eficiente",
      },
      {
        name: "Oficina Técnica para la Interoperabilidad Sociosanitaria",
        sector: "Sector público",
        intervention: "Coordinación técnica estratégica",
        whatWeDid: "Acompañamos el desarrollo y consolidación de la interoperabilidad sociosanitaria, coordinando informes de ética, apoyando estrategias regionales, diseñando portales y gestores de casos, y organizando encuentros del sector.",
        ourContribution: "Metodología y coordinación que fortalece el ecosistema sociosanitario",
      },
      {
        name: "Proyecto de Cohousing",
        sector: "Vivienda colaborativa",
        intervention: "Integración tecnológica",
        whatWeDid: "Diseño de la incorporación de tecnología para el bienestar en espacios convivenciales.",
        ourContribution: "Tecnología humanizada que potencia la vida comunitaria",
      },
      {
        name: "Organización de eventos sociosanitarios",
        sector: "Sector público",
        intervention: "Organización y producción de eventos",
        whatWeDid: "Apoyamos en la estructuración del evento, creación del material necesario (guiones, material de promoción, gestión de comunicaciones, etc.).",
        ourContribution: "Gestión integral que facilita encuentros significativos del sector",
      },
      {
        name: "Diseño de productos digitales sociosanitarios",
        sector: "Sector público",
        intervention: "Diseño y supervisión de desarrollo",
        whatWeDid: "Somos responsables de identificar necesidades de la comunidad y/o cliente, y supervisamos el diseño y desarrollo de productos como el portal sociosanitario y su área comunitaria para asegurar una adecuada experiencia de usuario.",
        ourContribution: "Productos digitales centrados en el usuario que conectan servicios y comunidad",
      },
    ],
  },
  contact: {
    title: "Contacto",
    imagineTitle: "¿Qué podemos imaginar juntos?",
    imagineText:
      "Cada desafío es único y requiere una aproximación específica. Exploremos las posibilidades que se abren cuando combinamos tu experiencia con nuestra metodología.",
    formTitle: "Envíanos un mensaje",
    nameLabel: "Nombre *",
    namePlaceholder: "Tu nombre",
    emailLabel: "Email *",
    emailPlaceholder: "tu@email.com",
    organizationLabel: "Organización",
    organizationPlaceholder: "Nombre de tu organización",
    messageLabel: "Mensaje *",
    messagePlaceholder: "Cuéntanos sobre tu desafío o proyecto...",
    sending: "Enviando...",
    send: "Enviar mensaje",
    successTitle: "Mensaje enviado",
    successDescription: "Gracias por contactarnos. Te responderemos pronto.",
    errorTitle: "Error al enviar",
    errorDescription: "No se pudo enviar el mensaje. Por favor, inténtalo de nuevo.",
    infoTitle: "Información de contacto",
    infoEmail: "Email",
    infoLocation: "Ubicación",
    infoLocationValue: "País Vasco, España",
    readyTitle: "¿Listo para transformar tu organización?",
    readyText:
      "Cada conversación es el inicio de una posible transformación. Nos adaptamos a tus tiempos y necesidades para encontrar la mejor forma de colaborar.",
    readyPoints: [
      "Consulta inicial sin compromiso",
      "Análisis personalizado de necesidades",
      "Propuesta adaptada a tu contexto",
    ],
  },
  footer: {
    rights: "Todos los derechos reservados.",
    legal: "Aviso legal",
    privacy: "Política de privacidad",
    cookies: "Política de cookies",
  },
  notFound: { message: "Vaya, no encontramos esta página", back: "Volver al inicio" },
};

const eu: Translations = {
  nav: {
    home: "Hasiera",
    about: "Nor gara",
    services: "Zer egiten dugu",
    contact: "Kontaktua",
    languageLabel: "Hizkuntza aukeratu",
    logoAlt: "ALDA2U - Logoa",
  },
  hero: {
    imageAlt: "ALDA2U - Eraldaketa eta giza konexioa irudikatzen dituen diseinu abstraktua",
    sloganChange: "Eraldatzen dugu",
    sloganYou: "Zuretzat",
    introBefore: "",
    introHighlight: "Osasun, gizarte eta soziosanitario",
    introAfter: " arloetan espezializatutako aholkularitza estrategikoko eta zerbitzu-diseinuko agentzia",
    quote: "\"Aldaketa zurekin diseinatzen dugu, estrategiatik eta enpatiatik abiatuta.\"",
    cta: "Ezagutu nola eraldatzen dugun",
  },
  about: {
    title: "Nor gara",
    intro:
      "Diziplina anitzeko taldea gara, ikuspegi integrala eta eremu soziosanitarioan esperientzia zabala dituena. Diseinu estrategikoa, berrikuntza teknologikoa eta giza sentsibilitatea uztartzen ditugu, erakundeei beren eraldaketa- eta etengabeko hobekuntza-prozesuetan laguntzeko.",
    timelineTitle: "Gure ibilbidea",
    milestones: [
      { year: "2013", event: "ALDA2U sortu zen" },
      { year: "2019", event: "Osasun, gizarte eta soziosanitario arloetan espezializatutako aholkularitza estrategikoan eta zerbitzu-diseinuan hasi ginen" },
      { year: "2020", event: "Arlo soziosanitarioko zerbitzuak diseinatzeko metodologia propioa garatu genuen" },
      { year: "2021", event: "Sektore publikoko estrategiak diseinatzen eta laguntzen hasi ginen, gizarte- eta soziosanitario-aretako sistemen esparruan" },
      { year: "2022", event: "% 100 online enpresa gara" },
      { year: "2024", event: "Hirugarrenekin lankidetza-akordioetan ere lanean hasi ginen" },
      { year: "2025", event: "Elkarreragingarritasun soziosanitarioan espezializatu gara" },
    ],
    valuesTitle: "Gure balioak",
    values: [
      { title: "Konpromisoa eta pertsonalizazioa", description: "Proiektu bakoitza bakarra da, eta erakundearen behar zehatzak islatuko dituen arreta pertsonalizatua eskatzen du." },
      { title: "Benetako lankidetza", description: "Gure bezeroekin batera lan egiten dugu, elkarrekiko konfiantzan oinarritutako aliantza iraunkorrak sortuz." },
      { title: "Loturaren zaintza", description: "Giza harremanak eta prozesuan parte hartzen duten pertsona guztien ongizatea lehenesten ditugu." },
      { title: "Diskrezioa eta errespetua", description: "Konfidentzialtasun osoa eta errespetua gordetzen ditugu gure bezeroen informazioarekiko eta prozesuekiko." },
      { title: "Zentzuzko eraldaketa", description: "Proposatzen dugun aldaketa orok helburu argia du eta benetako balioa ematen die erakundeari eta pertsonei." },
      { title: "Berrikuntza", description: "Gauzak egiteko modu berriak esploratzen ditugu, etengabe egokituz irtenbide sortzaile eta eraginkorrak eskaintzeko." },
    ],
    teamTitle: "Gure taldea",
    teamIntro:
      "Alda2u-n uste dugu balioa ez dagoela karguetan ezta hierarkietan, jokoan jartzen ditugun gaitasunen aniztasunean baizik. Diziplinarteko taldea gara: eraldaketa-prozesuak pentsatu, diseinatu eta laguntzen ditugu, sektorearen ezagutza, teknologia eta diseinu estrategikoa uztartuz.",
    teamRoles: [
      {
        title: "Soziosanitario, gizarte eta osasun arloko adituak",
        points: [
          "Arreta-zerbitzuen sistemak, politikak eta errealitateak sakon ezagutzen dituzte.",
          "Esperientzia aplikatua eta ikuspegi estrategikoa ekartzen dituzte, proposamen errealistak eta eragin handikoak diseinatzeko.",
        ],
      },
      {
        title: "Teknologian espezialistak",
        points: [
          "Digitalizazio-prozesuak eta irtenbide teknologikoen garapena irizpidez laguntzen dituzte.",
          "Teknologia beti pertsonen zerbitzura dagoen bitarteko bat izatea bermatzen dute.",
        ],
      },
      {
        title: "Produktu eta zerbitzuen diseinatzaile estrategikoak",
        points: [
          "Berrikuntza diseinutik bultzatzen dute.",
          "Sormen partekatuko prozesuak errazten dituzte, eta esperientzia irisgarriagoak, enpatikoagoak eta jasangarriagoak sortzen dituzte.",
        ],
      },
    ],
  },
  services: {
    title: "Zer egiten dugu",
    intro:
      "Pertsonengan oinarritutako diseinu estrategikoa aplikatzen dugu, zentzuzko teknologiarekin uztartuta, sektore soziosanitarioko erakundeak benetan eraldatuko dituzten irtenbideak sortzeko.",
    areasTitle: "Gure 4 jarduera-arloak",
    areas: [
      { title: "Antolaketa", description: "Antolaketa-egiturak eta -prozesuak birdiseinatzea, funtzionamendua eta eraginkortasuna hobetzeko." },
      { title: "Esperientzia", description: "Erabiltzaile, paziente eta profesionalen esperientzia hobetzea, pertsonengan oinarritutako diseinuaren bidez." },
      { title: "Zerbitzua", description: "Sektorearen benetako beharrei erantzuten dieten zerbitzu berritzaileak diseinatzea eta ezartzea." },
      { title: "Estrategia", description: "Testuinguru bakoitzera egokitutako estrategia jasangarriak eta eraldaketa-planak garatzea." },
    ],
    methodologyTitle: "Gure ikuspegia eta metodologia",
    methodologyImageAlt: "Pertsonengan oinarritutako diseinu-metodologia",
    a2uTitle: "A2U metodologia",
    a2uBefore: "Gure metodologia propioa ",
    a2uHighlight: "Human-Centered Design",
    a2uAfter: " ikuspegian oinarritzen da, eta berariaz arlo soziosanitariora aplikatzen dugu, sektore honen berezitasun eta beharretara egokituta.",
    a2uPillarsText:
      "Lau oinarri nagusitatik abiatuta lan egiten dugu; horiek gidatzen dute gure metodologia eta zehazten dute antolaketa-eraldaketa ulertzeko dugun modua.",
    pillars: [
      { title: "Pertsonengan oinarritutako diseinua", description: "Pertsonak jartzen ditugu erabaki bakoitzaren erdigunean, haien beharrak, emozioak eta esperientziak kontuan hartuta." },
      { title: "Parte-hartzea, aldaketaren motor", description: "Eragile garrantzitsu guztiak modu aktiboan inplikatzen ditugu diseinu- eta eraldaketa-prozesuan." },
      { title: "Ikuspegi sistemikoa", description: "Testuinguru osoa aztertzen dugu, sistemaren elkarreragin eta mendekotasun guztiak kontuan hartuta." },
      { title: "Egokitzapena eta laguntza", description: "Prozesu osoan zehar laguntzen dugu, erakunde bakoitzaren behar aldakorretara egokituz." },
    ],
    keyServicesTitle: "Zerbitzu nagusiak",
    keyServices: [
      { title: "Zerbitzu-diseinua", description: "Pertsonengan oinarritutako eta testuinguru soziosanitariora egokitutako zerbitzuak sortzea." },
      { title: "Berrikuntza eta aldaketaren kudeaketa", description: "Eraldaketa-prozesuetan eta berrikuntzen ezarpenean laguntzea." },
      { title: "Negozio-aholkularitza", description: "Sektore soziosanitarioko erakundeen garapen eta hazkunde jasangarrirako aholkularitza estrategikoa." },
      { title: "Bulego teknikoa", description: "Arlo soziosanitarioko proiektu konplexuetarako laguntza tekniko espezializatua." },
      { title: "Elkarreragingarritasun soziosanitarioa", description: "Sistemen eta erakundeen arteko integrazio, koordinazio eta komunikaziorako irtenbideak." },
      { title: "Aholkularitza teknologikoa", description: "Teknologiaren erabileran aholkatu eta laguntzen dugu, bezeroaren eta/edo proiektuaren beharren arabera." },
    ],
    philosophy:
      "\"Ez dugu errezetarik ekartzen. Entzun, aztertu eta erakunde bakoitzaren helburuari erantzuten dioten prozesuak diseinatzen ditugu.\"",
  },
  projects: {
    title: "Proiektuak",
    intro:
      "Proiektu bakoitza irudikatu, erraztu, diseinatu eta lagundu dezakegunaren erakusgarri bat da. Esperientzia hauek gure ikuspegia eta metodologia ekintzan islatzen dituzte.",
    whatWeDid: "Zer egin genuen",
    ourContribution: "Gure ekarpena",
    items: [
      {
        name: "Nerea Care",
        sector: "Zaintza-enpresak - Etxez etxeko arreta",
        intervention: "Zerbitzu digitalaren diseinua",
        whatWeDid: "Laguntza-prozesuak digitalizatu eta optimizatzen dituen plataforma integrala diseinatu genuen, profesionalen zein pazienteen esperientzian arreta jarriz.",
        ourContribution: "Zaintzan teknologia gizatiartzen duen eraldaketa digitala",
      },
      {
        name: "CARE2U",
        sector: "Zaintza-enpresak - Etxez etxeko arreta",
        intervention: "Elkarreragingarritasunerako laguntza estrategikoa",
        whatWeDid: "Gizarte- eta osasun-zerbitzuen arteko elkarreragingarritasun-ekosistema bat sortzen lagundu genuen, arretaren koordinazioa eta jarraitutasuna hobetuz.",
        ourContribution: "Zaintza zatikatuak lotzen dituen zubi teknologikoa",
      },
      {
        name: "Elkar Bizitu",
        sector: "Herritarren parte-hartzea",
        intervention: "Parte-hartze metodologia",
        whatWeDid: "Egoera zaurgarrian dauden pertsonak gizarte-zerbitzuen diseinuaren erdigunean jartzen dituen metodologia garatu genuen, haien parte-hartze aktiboa sustatuz.",
        ourContribution: "Erabiltzaileak benetan ahalduntzea, sortzaile kide gisa",
      },
      {
        name: "Helduak Zabaltzen",
        sector: "Adinekoen zentroak - Komunitate-ingurunea",
        intervention: "Komunitate-berrikuntza soziala",
        whatWeDid: "Landa-inguruneetan zahartze aktiboa sustatzeko, tresna digital egokituak integratzen dituen komunitate-laguntzako sare bat sortu genuen.",
        ourContribution: "Digitaletik haratago doan loturen sendotzea",
      },
      {
        name: "Telelaguntza proiektua",
        sector: "Sektore publikoa",
        intervention: "Zerbitzu publikoaren birdiseinua",
        whatWeDid: "Eskualdeko telelaguntza-zerbitzuaren modernizazio integrala gidatu genuen, erabiltzailean oinarritutako ikuspegia aplikatuz eta prozesu operatiboak optimizatuz.",
        ourContribution: "Zerbitzu publiko gizatiarragoa eta eraginkorragoa",
      },
      {
        name: "Elkarreragingarritasun Soziosanitariorako Bulego Teknikoa",
        sector: "Sektore publikoa",
        intervention: "Koordinazio tekniko estrategikoa",
        whatWeDid: "Elkarreragingarritasun soziosanitarioaren garapenean eta sendotzean laguntzen dugu: etikari buruzko txostenak koordinatzen, eskualdeko estrategiak babesten, atariak eta kasu-kudeatzaileak diseinatzen eta sektoreko topaketak antolatzen.",
        ourContribution: "Ekosistema soziosanitarioa indartzen duen metodologia eta koordinazioa",
      },
      {
        name: "Cohousing proiektua",
        sector: "Etxebizitza kolaboratiboa",
        intervention: "Integrazio teknologikoa",
        whatWeDid: "Bizikidetza-espazioetan ongizaterako teknologia txertatzeko diseinua.",
        ourContribution: "Komunitate-bizitza indartzen duen teknologia gizatiartua",
      },
      {
        name: "Soziosanitario-ekitaldien antolaketa",
        sector: "Sektore publikoa",
        intervention: "Ekitaldien antolaketa eta ekoizpena",
        whatWeDid: "Ekitaldiaren egituraketan eta beharrezko materialaren sorkuntzan laguntzen dugu (gidoiak, sustapen-materiala, komunikazioen kudeaketa, etab.).",
        ourContribution: "Sektoreko topaketa esanguratsuak errazten dituen kudeaketa integrala",
      },
      {
        name: "Gizarte-osasun produktu digitalen diseinua",
        sector: "Sektore publikoa",
        intervention: "Garapenaren diseinua eta gainbegiratzea",
        whatWeDid: "Komunitatearen eta/edo bezeroaren beharrak identifikatzeaz arduratzen gara, eta soziosanitario-atariaren eta haren komunitate-eremuaren moduko produktuen diseinua eta garapena gainbegiratzen ditugu, erabiltzaile-esperientzia egokia bermatzeko.",
        ourContribution: "Zerbitzuak eta komunitatea lotzen dituzten produktu digitalak, erabiltzailean oinarrituak",
      },
    ],
  },
  contact: {
    title: "Kontaktua",
    imagineTitle: "Zer irudika dezakegu elkarrekin?",
    imagineText:
      "Erronka bakoitza bakarra da, eta hurbilketa espezifikoa eskatzen du. Azter ditzagun zure esperientzia eta gure metodologia uztartzean sortzen diren aukerak.",
    formTitle: "Bidali iezaguzu mezu bat",
    nameLabel: "Izena *",
    namePlaceholder: "Zure izena",
    emailLabel: "Helbide elektronikoa *",
    emailPlaceholder: "zu@email.com",
    organizationLabel: "Erakundea",
    organizationPlaceholder: "Zure erakundearen izena",
    messageLabel: "Mezua *",
    messagePlaceholder: "Kontaiguzu zure erronka edo proiektua...",
    sending: "Bidaltzen...",
    send: "Bidali mezua",
    successTitle: "Mezua bidali da",
    successDescription: "Eskerrik asko gurekin harremanetan jartzeagatik. Laster erantzungo dizugu.",
    errorTitle: "Errorea bidaltzean",
    errorDescription: "Ezin izan da mezua bidali. Saiatu berriro, mesedez.",
    infoTitle: "Harremanetarako informazioa",
    infoEmail: "Helbide elektronikoa",
    infoLocation: "Kokapena",
    infoLocationValue: "Euskadi, Espainia",
    readyTitle: "Prest zaude zure erakundea eraldatzeko?",
    readyText:
      "Elkarrizketa bakoitza eraldaketa posible baten hasiera da. Zure erritmora eta beharretara egokitzen gara, elkarlanean aritzeko modurik onena aurkitzeko.",
    readyPoints: [
      "Hasierako kontsulta, konpromisorik gabe",
      "Beharren azterketa pertsonalizatua",
      "Zure testuingurura egokitutako proposamena",
    ],
  },
  footer: {
    rights: "Eskubide guztiak erreserbatuta.",
    legal: "Lege-oharra",
    privacy: "Pribatutasun-politika",
    cookies: "Cookie-politika",
  },
  notFound: { message: "Ez dugu orri hau aurkitu", back: "Itzuli hasierara" },
};

export const translations: Record<Language, Translations> = { es, eu };
