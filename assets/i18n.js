// All UI strings keyed by language code.
// Keys match data-i18n attributes in the HTML.
// HTML is allowed in values — innerHTML is used for injection.

const I18N = {
  en: {
    nav_profile: 'CHARACTER PROFILE',
    nav_quests:  'QUEST LOG',
    nav_skills:  'MEANS OF PRODUCTION',
    nav_contact: 'SEND MESSAGE',

    hero_tag:      'PLAYER ONE \u00a0/\u00a0 RIO DE JANEIRO, BRAZIL',
    hero_sub_bold: 'Software Engineer',
    hero_sub_rest: ' \u2014 from product to production',
    hero_tagline:  'I build things end-to-end \u2014 from blank canvas to shipped product. Full-cycle: architecture, code, UX, and the ruthless judgement of what\u2019s worth building at all. Nine years in, the hard problems are still the interesting ones.',
    hero_cta:      'IT\u2019S DANGEROUS TO GO ALONE \u2014 HIRE ME.',
    btn_quests:    'VIEW QUESTS',

    about_p1: 'Senior engineer with 9+ years building products end-to-end \u2014 from architecture to the moment someone actually uses it, and everything in between. I work across the full stack, but my actual job is deciding what matters, then building it.',
    about_p2: 'Led <span class="highlight">Parquet Digital</span> to a national innovation award \u2014 <span class="stat-inline">300% users</span> <span class="stat-inline">60% faster</span> <span class="stat-inline">30% less dev time</span>. Now building <span class="highlight">Monopop</span> \u2014 starts as inventory and shopping management, ends somewhere considerably more ambitious.',
    about_p3: 'Six languages. CS at UFF, incomplete \u2014 four years, teaching assistant for Databases and Advanced Java. Plans to finish.',

    badge_active: '\u25b6 ACTIVE',

    monopop_desc: 'Offline-first Android app for inventory and shopping management \u2014 built for one specific person who uses it every day at work and at the supermarket. No backend, no account, no internet required. Data belongs to the user by architecture, not by policy. The name comes from <em>monops\u00f4nio popular</em> \u2014 the consumer, collectively, as the dominant buyer. This is the first layer of that idea made functional.',
    monopop_b1:   '<strong>Full product ownership</strong> \u2014 schema design (V1\u2192V10 versioned migrations), UI architecture, UX driven by observed behavior. Real users, real feedback loop, real consequences when things break.',
    monopop_b2:   '<strong>Performance engineering, three separate wins</strong> \u2014 New Architecture/JSI eliminated the JSON bridge (cold start 3s \u2192 1s; ~90% of total gains from this alone); WAL mode + explicit PRAGMAs eliminated lock overhead (repeat-visit load 900ms \u2192 33ms); profiling identified a single query as bottleneck (1287ms \u2192 5ms after indexes in V8 migration).',
    monopop_b3:   '<strong>Source of truth follows observation</strong> \u2014 during v1.7 development, caught a fundamental data model flaw: the app was storing a derived value (price per unit) as canonical. User typed R$14,00 and got R$14,0000000003 back. The rounding error was a symptom; the real fix was epistemics. Corrected before shipping.',
    monopop_b4:   '<strong>Spec-driven AI-assisted development</strong> \u2014 complex features fully specced before implementation. AI proposes, human decides, human reviews every diff, human owns the architecture. Faster iteration without surrendering design ownership.',

    intel_desc: 'End-to-end market price intelligence for Rio de Janeiro supermarkets: scraper \u2192 normalization \u2192 dual-layer storage \u2192 API \u2192 UI. Tracks 18,000+ product prices daily. Built and shipped in two weeks \u2014 two systems in production during an active financial crunch, both live, both with real users. Closes the loop with Monopop: know your stock, know the market, buy smarter.',
    intel_b1:   '<strong>Per-store concurrency control</strong> \u2014 asyncio.Semaphore scoped per store independently, not globally. A global semaphore lets one slow store (VTEX averages 5\u20136s per call, spikes to 20\u201330s) consume all slots and starve the others. Per-store isolation contains the damage. Result: full scrape cycle 3 hours \u2192 6 minutes (30\u00d7).',
    intel_b2:   '<strong>Dual-layer storage</strong> \u2014 reactive SQLite cache (4h TTL, low-latency search) + PostgreSQL time-series (90-day price history). Two different problems \u2014 search latency and price trend data \u2014 each solved with the right tool. One database wouldn\u2019t handle both correctly.',
    intel_b3:   '<strong>Self-healing retry pipeline</strong> \u2014 GitHub Actions cron writes scrape results to a log table. The hourly retry job queries for failures in the last 24h with no subsequent success and re-enqueues only those (term, store) pairs. No dead-letter queue, no fixed retry counter. Idempotent writes throughout.',

    parquet_desc:   'Internal platform used by prosecutors across Rio de Janeiro state. SPA awarded <strong>2nd place \u2014 2021 CNMP National Innovation Award</strong>. Led architecture, CI/CD, and a design system that scaled across teams.',
    freelance_title: 'FREELANCE',
    freelance_desc:  'Websites and web applications for clients across the years. Full ownership from spec to delivery \u2014 backend, frontend, infrastructure.',

    skill_product: 'PRODUCT THINKING',

    contact_loc_label: '\u25c6 LOCATION',
    contact_loc_val:   'Rio de Janeiro, Brazil',
    cta_main: 'IT\u2019S DANGEROUS TO GO ALONE \u2014 HIRE ME.',
    cta_sub:  'Available for senior frontend, fullstack, and product-minded roles.',

    footer_year: '2026',
    footer_note: 'NO FRAMEWORKS HARMED',
  },

  pt: {
    nav_profile: 'PERFIL',
    nav_quests:  'MISS\u00d5ES',
    nav_skills:  'MEIOS DE PRODU\u00c7\u00c3O',
    nav_contact: 'CONTATO',

    hero_tag:      'JOGADOR UM \u00a0/\u00a0 RIO DE JANEIRO, BRASIL',
    hero_sub_bold: 'Engenheiro de Software',
    hero_sub_rest: ' \u2014 do produto \u00e0 produ\u00e7\u00e3o',
    hero_tagline:  'Constru\u00f3 produtos do in\u00edcio ao fim \u2014 do zero ao lan\u00e7amento. Ciclo completo: arquitetura, c\u00f3digo, UX, e o julgamento impiedoso do que vale a pena construir. Nove anos depois, os problemas dif\u00edceis ainda s\u00e3o os mais interessantes.',
    hero_cta:      '\u00c9 PERIGOSO IR SOZINHO \u2014 ME CONTRATE.',
    btn_quests:    'VER MISS\u00d5ES',

    about_p1: 'Engenheiro s\u00eanior com 9+ anos construindo produtos do in\u00edcio ao fim \u2014 da arquitetura ao momento em que algu\u00e9m realmente usa, e tudo que h\u00e1 no meio. Trabalho em toda a stack, mas meu trabalho real \u00e9 decidir o que importa e construir.',
    about_p2: 'Levei o <span class="highlight">Parquet Digital</span> a um pr\u00eamio nacional \u2014 <span class="stat-inline">300% usu\u00e1rios</span> <span class="stat-inline">60% mais r\u00e1pido</span> <span class="stat-inline">30% menos dev</span>. Agora construindo <span class="highlight">Monopop</span> \u2014 come\u00e7a como gest\u00e3o de estoque e compras, termina em algum lugar consideravelmente mais ambicioso.',
    about_p3: 'Seis idiomas. Ci\u00eancia da Computa\u00e7\u00e3o na UFF, incompleto \u2014 quatro anos, monitor de Banco de Dados e Java Avan\u00e7ado. Pretende concluir.',

    badge_active: '\u25b6 ATIVO',

    monopop_desc: 'App Android offline-first para gest\u00e3o de estoque e lista de compras \u2014 constru\u00eddo para uma pessoa espec\u00edfica que usa todos os dias no trabalho e no supermercado. Sem backend, sem conta, sem internet. Os dados pertencem ao usu\u00e1rio por arquitetura, n\u00e3o por pol\u00edtica. O nome vem de <em>monops\u00f4nio popular</em> \u2014 o consumidor, coletivamente, como comprador dominante. Esta \u00e9 a primeira camada dessa ideia em funcionamento.',
    monopop_b1:   '<strong>Produto completo sob responsabilidade pr\u00f3pria</strong> \u2014 schema (migra\u00e7\u00f5es V1\u2192V10), arquitetura de UI, UX orientado por comportamento observado. Usu\u00e1rios reais, feedback loop real, consequ\u00eancias reais quando algo quebra.',
    monopop_b2:   '<strong>Engenharia de performance, tr\u00eas ganhos separados</strong> \u2014 New Architecture/JSI eliminou o bridge JSON (cold start 3s \u2192 1s; ~90% do ganho total veio disso); WAL mode + PRAGMAs expl\u00edcitos eliminaram lock overhead (900ms \u2192 33ms em visita repetida); profiling identificou uma query como gargalo (1287ms \u2192 5ms com \u00edndices na migra\u00e7\u00e3o V8).',
    monopop_b3:   '<strong>Source of truth segue a observa\u00e7\u00e3o</strong> \u2014 durante o v1.7, capturou uma falha fundamental no modelo de dados: o app armazenava um valor derivado (pre\u00e7o por unidade) como can\u00f4nico. Usu\u00e1rio digitou R$14,00 e recebeu R$14,0000000003. O erro de ponto flutuante era sintoma; a corre\u00e7\u00e3o real foi epist\u00eamica. Corrigido antes do lan\u00e7amento.',
    monopop_b4:   '<strong>Desenvolvimento spec-driven com IA</strong> \u2014 funcionalidades complexas especificadas antes da implementa\u00e7\u00e3o. IA prop\u00f5e, humano decide, humano revisa cada diff, humano \u00e9 dono da arquitetura. Itera\u00e7\u00e3o mais r\u00e1pida sem abrir m\u00e3o da propriedade do design.',

    intel_desc: 'Intelig\u00eancia de pre\u00e7os end-to-end para supermercados do Rio: scraper \u2192 normaliza\u00e7\u00e3o \u2192 armazenamento dual-layer \u2192 API \u2192 UI. Rastreia 18.000+ pre\u00e7os diariamente. Constru\u00eddo e entregue em duas semanas \u2014 dois sistemas em produ\u00e7\u00e3o durante um per\u00edodo financeiro cr\u00edtico, ambos ao vivo, ambos com usu\u00e1rios reais.',
    intel_b1:   '<strong>Controle de concorr\u00eancia por loja</strong> \u2014 asyncio.Semaphore com escopo por loja, n\u00e3o global. Um sem\u00e1foro global deixa uma loja lenta (VTEX: m\u00e9dia 5\u20136s por chamada, picos de 20\u201330s) consumir todos os slots e travar as outras. Resultado: ciclo completo 3 horas \u2192 6 minutos (30\u00d7).',
    intel_b2:   '<strong>Armazenamento dual-layer</strong> \u2014 cache SQLite reativo (TTL 4h) + time-series PostgreSQL (hist\u00f3rico de 90 dias). Dois problemas diferentes, cada um resolvido com a ferramenta certa.',
    intel_b3:   '<strong>Pipeline de retry auto-curativo</strong> \u2014 cron registra resultados em log; retry hor\u00e1rio reenfileira apenas pares (termo, loja) com falha sem sucesso posterior. Writes idempotentes em todo o pipeline.',

    parquet_desc:    'Plataforma interna usada por promotores em todo o Rio. Premiada em <strong>2\u00ba lugar \u2014 Pr\u00eamio CNMP de Inova\u00e7\u00e3o 2021</strong>. Liderou arquitetura, CI/CD e sistema de design.',
    freelance_title: 'FREELANCE',
    freelance_desc:  'Sites e aplica\u00e7\u00f5es web para clientes. Responsabilidade total do spec \u00e0 entrega \u2014 backend, frontend, infraestrutura.',

    skill_product: 'VIS\u00c3O DE PRODUTO',

    contact_loc_label: '\u25c6 LOCALIZA\u00c7\u00c3O',
    contact_loc_val:   'Rio de Janeiro, Brasil',
    cta_main: '\u00c9 PERIGOSO IR SOZINHO \u2014 ME CONTRATE.',
    cta_sub:  'Dispon\u00edvel para vagas s\u00eanior de frontend, fullstack e produto.',

    footer_year: '2026',
    footer_note: 'NENHUM FRAMEWORK FOI PREJUDICADO',
  },

  es: {
    nav_profile: 'PERFIL',
    nav_quests:  'MISIONES',
    nav_skills:  'MEDIOS DE PRODUCCI\u00d3N',
    nav_contact: 'CONTACTO',

    hero_tag:      'JUGADOR UNO \u00a0/\u00a0 R\u00cdO DE JANEIRO, BRASIL',
    hero_sub_bold: 'Ingeniero de Software',
    hero_sub_rest: ' \u2014 del producto a la producci\u00f3n',
    hero_tagline:  'Construyo productos de principio a fin. Arquitectura, c\u00f3digo, UX. Nueve a\u00f1os despu\u00e9s, los problemas dif\u00edciles siguen siendo los interesantes.',
    hero_cta:      'ES PELIGROSO IR SOLO \u2014 CONTR\u00c1TAME.',
    btn_quests:    'VER MISIONES',

    about_p1: 'Ingeniero senior con 9+ a\u00f1os construyendo productos de principio a fin.',
    about_p2: 'Llev\u00e9 <span class="highlight">Parquet Digital</span> a un premio nacional \u2014 <span class="stat-inline">300% usuarios</span> <span class="stat-inline">60% m\u00e1s r\u00e1pido</span>. Ahora <span class="highlight">Monopop</span>.',
    about_p3: 'Seis idiomas. Inform\u00e1tica en la UFF, incompleto \u2014 cuatro a\u00f1os, asistente de c\u00e1tedra. Planes de terminar.',

    badge_active: '\u25b6 ACTIVO',

    monopop_desc: 'App Android offline-first para inventario y lista de compras \u2014 construida para una persona espec\u00edfica que la usa todos los d\u00edas.',
    monopop_b1:   '<strong>Producto completo</strong> \u2014 schema V1\u2192V10, arquitectura UI, UX de comportamiento observado.',
    monopop_b2:   '<strong>Rendimiento, tres victorias</strong> \u2014 JSI: 3s\u21921s; WAL: 900ms\u219233ms; \u00edndices: 1287ms\u21925ms.',
    monopop_b3:   '<strong>Source of truth sigue la observaci\u00f3n</strong> \u2014 fallo fundamental en modelo de datos capturado en v1.7 y corregido antes del lanzamiento.',
    monopop_b4:   '<strong>Desarrollo spec-driven con IA</strong> \u2014 IA propone, humano decide, humano es due\u00f1o.',

    intel_desc: 'Inteligencia de precios end-to-end. 18.000+ precios diarios. Construido en dos semanas.',
    intel_b1:   '<strong>Control por tienda</strong> \u2014 Semaphore por tienda, no global. 3 horas \u2192 6 minutos (30\u00d7).',
    intel_b2:   '<strong>Almacenamiento dual</strong> \u2014 SQLite reactivo + PostgreSQL series temporales.',
    intel_b3:   '<strong>Retry auto-reparador</strong> \u2014 log-driven, solo re-encola fallos reales. Idempotente.',

    parquet_desc:    'Plataforma para fiscales en Rio. <strong>2\u00b0 lugar \u2014 Premio CNMP de Innovaci\u00f3n 2021</strong>.',
    freelance_title: 'FREELANCE',
    freelance_desc:  'Aplicaciones web para clientes. Responsabilidad total del spec a la entrega.',

    skill_product: 'PENSAMIENTO DE PRODUCTO',

    contact_loc_label: '\u25c6 UBICACI\u00d3N',
    contact_loc_val:   'R\u00edo de Janeiro, Brasil',
    cta_main: 'ES PELIGROSO IR SOLO \u2014 CONTR\u00c1TAME.',
    cta_sub:  'Disponible para roles senior de frontend, fullstack y producto.',

    footer_year: '2026',
    footer_note: 'NING\u00daN FRAMEWORK FUE DA\u00d1ADO',
  },

  ja: {
    nav_profile: 'PROFILE \u30fb \u30d7\u30ed\u30d5\u30a3\u30fc\u30eb',
    nav_quests:  'QUEST LOG \u30fb \u30af\u30a8\u30b9\u30c8',
    nav_skills:  'MEANS OF PRODUCTION',
    nav_contact: 'CONTACT \u30fb \u9023\u7d61',

    hero_tag:      'PLAYER ONE \u00a0/\u00a0 \u30d6\u30e9\u30b8\u30eb \u30fb \u30ea\u30aa\u30c7\u30b8\u30e3\u30cd\u30a4\u30ed',
    hero_sub_bold: 'Software Engineer \u30fb \u30a8\u30f3\u30b8\u30cb\u30a2',
    hero_sub_rest: ' \u2014 \u30d7\u30ed\u30c0\u30af\u30c8\u304b\u3089\u30d7\u30ed\u30c0\u30af\u30b7\u30e7\u30f3\u3078',
    hero_tagline:  '9\u5e74\u4ee5\u4e0a\u3001\u30a8\u30f3\u30c9\u30c4\u30fc\u30a8\u30f3\u30c9\u3067\u30d7\u30ed\u30c0\u30af\u30c8\u3092\u69cb\u7bc9\u3002\u9769\u666e\u6e21\u3063\u3066\u3082\u3001\u96e3\u3057\u3044\u554f\u984c\u304c\u4e00\u756a\u9762\u767d\u3044\u3002',
    hero_cta:      '\u3072\u3068\u308a\u306f\u5371\u967a\u3060 \u2014 HIRE ME.',
    btn_quests:    'QUEST LOG',

    about_p1: 'Senior engineer \u30fb 9\u5e74\u4ee5\u4e0a\u3002Full stack\u3001\u672c\u5f53\u306e\u4ed5\u4e8b\u306f\u4f55\u3092\u4f5c\u308b\u3079\u304d\u304b\u5224\u65ad\u3059\u308b\u3053\u3068\u3002',
    about_p2: '<span class="highlight">Parquet Digital</span> \u2014 \u5168\u56fd\u8cde2\u4f4d\u3002\u73fe\u5728 <span class="highlight">Monopop</span> \u958b\u767a\u4e2d\u3002',
    about_p3: '6\u8a00\u8a9e\u3002CS at UFF, incomplete\u3002\u5c65\u4fee4\u5e74\u3001TA\u7d4c\u9a13\u3042\u308a\u3002\u5352\u696d\u4e88\u5b9a\u3002',

    badge_active: '\u25b6 \u9032\u884c\u4e2d',

    monopop_desc: '\u30aa\u30d5\u30e9\u30a4\u30f3\u30d5\u30a1\u30fc\u30b9\u30c8\u306eAndroid\u30a2\u30d7\u30ea\u3002\u6bce\u65e5\u4f7f\u3046\u5b9f\u969b\u306e\u30e6\u30fc\u30b6\u30fc\u306e\u305f\u3081\u306b\u4f5c\u3089\u308c\u305f\u3002',
    monopop_b1:   '<strong>\u30d5\u30eb\u30d7\u30ed\u30c0\u30af\u30c8\u30aa\u30fc\u30ca\u30fc\u30b7\u30c3\u30d7</strong> \u2014 V1\u2192V10\u30de\u30a4\u30b0\u30ec\u30fc\u30b7\u30e7\u30f3\u3001UI\u3001UX\u3002',
    monopop_b2:   '<strong>\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b93\u52dd</strong> \u2014 JSI: 3s\u21921s; WAL: 900ms\u219233ms; \u30a4\u30f3\u30c7\u30c3\u30af\u30b9: 1287ms\u21925ms\u3002',
    monopop_b3:   '<strong>Source of truth\u306f\u89b3\u5bdf\u306b\u5f93\u3046</strong> \u2014 v1.7\u3067\u6839\u672c\u7684\u6b20\u967a\u3092\u767a\u898b\u3001\u51fa\u8377\u524d\u306b\u4fee\u6b63\u3002',
    monopop_b4:   '<strong>Spec-driven AI\u652f\u63f4\u958b\u767a</strong> \u2014 AI\u304c\u63d0\u6848\u3001\u4eba\u9593\u304c\u6c7a\u5b9a\u3002',

    intel_desc: '\u30a8\u30f3\u30c9\u30c4\u30fc\u30a8\u30f3\u30c9\u4fa1\u683c\u60c5\u5831\u300218,000+\u4fa1\u683c\u3092\u6bce\u65e5\u8ffd\u8de1\u3002\u30012\u9031\u9593\u3067\u69cb\u7bc9\u30fb\u672c\u756a\u30ea\u30ea\u30fc\u30b9\u3002',
    intel_b1:   '<strong>\u5e97\u8217\u5225\u4e26\u884c\u5236\u5fa1</strong> \u2014 Semaphore\u3092\u5e97\u8217\u3054\u3068\u306b\u72ec\u7acb\u8a2d\u5b9a\u30023\u6642\u9593\u21926\u5206 (30\u500d)\u3002',
    intel_b2:   '<strong>\u30c7\u30e5\u30a2\u30eb\u30ec\u30a4\u30e4\u30fc\u30b9\u30c8\u30ec\u30fc\u30b8</strong> \u2014 SQLite\u30ad\u30e3\u30c3\u30b7\u30e5 + PostgreSQL\u6642\u7cfb\u5217\u3002',
    intel_b3:   '<strong>\u81ea\u5df1\u4fee\u5fa9\u30ea\u30c8\u30e9\u30a4</strong> \u2014 \u30ed\u30b0\u99c6\u52d5\u3001\u5931\u6557\u30da\u30a2\u306e\u307f\u518d\u6295\u5165\u3002\u3079\u304d\u7b49\u3002',

    parquet_desc:    '\u691c\u5bdf\u5b98\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u3002<strong>CNMP Innovation Award 2021 \u30fb 2\u4f4d</strong>\u3002',
    freelance_title: 'FREELANCE \u30fb \u30d5\u30ea\u30fc\u30e9\u30f3\u30b9',
    freelance_desc:  'Web\u30a2\u30d7\u30ea\u958b\u767a\u3002Spec\u304b\u3089delivery\u307e\u3067\u5168\u8cac\u4efb\u3002',

    skill_product: 'PRODUCT THINKING \u30fb \u30d7\u30ed\u30c0\u30af\u30c8\u601d\u8003',

    contact_loc_label: '\u25c6 \u5834\u6240',
    contact_loc_val:   '\u30d6\u30e9\u30b8\u30eb \u30fb \u30ea\u30aa\u30c7\u30b8\u30e3\u30cd\u30a4\u30ed',
    cta_main: "IT'S DANGEROUS TO GO ALONE \u2014 HIRE ME.",
    cta_sub:  'Frontend / Fullstack / Product.',

    footer_year: '2026',
    footer_note: 'NO FRAMEWORKS HARMED',
  },

  de: {
    nav_profile: 'PROFIL',
    nav_quests:  'AUFGABEN',
    nav_skills:  'PRODUKTIONSMITTEL',
    nav_contact: 'KONTAKT',

    hero_tag:      'SPIELER EINS \u00a0/\u00a0 RIO DE JANEIRO, BRASILIEN',
    hero_sub_bold: 'Software-Ingenieur',
    hero_sub_rest: ' \u2014 vom Produkt zur Produktion',
    hero_tagline:  'Produkte von Anfang bis Ende. Architektur, Code, UX. Neun Jahre sp\u00e4ter sind die schwierigen Probleme immer noch die interessanten.',
    hero_cta:      'ES IST GEF\u00c4HRLICH ALLEIN ZU GEHEN \u2014 STELLE MICH EIN.',
    btn_quests:    'AUFGABEN',

    about_p1: 'Senior-Ingenieur mit 9+ Jahren End-to-End-Erfahrung.',
    about_p2: '<span class="highlight">Parquet Digital</span> \u2014 nationaler Innovationspreis. Jetzt <span class="highlight">Monopop</span>.',
    about_p3: 'Sechs Sprachen. Informatik an der UFF, unvollst\u00e4ndig \u2014 vier Jahre, Tutor. Plant abzuschlie\u00dfen.',

    badge_active: '\u25b6 AKTIV',

    monopop_desc: 'Offline-first Android-App f\u00fcr Inventar und Einkaufslisten \u2014 f\u00fcr t\u00e4gliche Nutzung gebaut.',
    monopop_b1:   '<strong>Vollst\u00e4ndiges Produkteigentum</strong> \u2014 Schema V1\u2192V10, UI, UX.',
    monopop_b2:   '<strong>Performance, drei Gewinne</strong> \u2014 JSI: 3s\u21921s; WAL: 900ms\u219233ms; Index: 1287ms\u21925ms.',
    monopop_b3:   '<strong>Source of truth folgt Beobachtung</strong> \u2014 fundamentaler Datenmodellfehler in v1.7 gefunden und vor Launch behoben.',
    monopop_b4:   '<strong>Spec-gesteuerter KI-Workflow</strong> \u2014 KI schl\u00e4gt vor, Mensch entscheidet.',

    intel_desc: 'End-to-end Preisanalyse. 18.000+ Preise t\u00e4glich. In zwei Wochen gebaut.',
    intel_b1:   '<strong>Speicherspezifische Parallelit\u00e4t</strong> \u2014 Semaphore pro Gesch\u00e4ft. 3 Stunden \u2192 6 Minuten (30\u00d7).',
    intel_b2:   '<strong>Dual-Layer-Speicher</strong> \u2014 SQLite-Cache + PostgreSQL-Zeitreihen.',
    intel_b3:   '<strong>Selbstheilender Retry</strong> \u2014 Log-gesteuert, nur fehlgeschlagene Paare. Idempotent.',

    parquet_desc:    'Plattform f\u00fcr Staatsanw\u00e4lte. <strong>2. Platz \u2014 CNMP-Innovationspreis 2021</strong>.',
    freelance_title: 'FREIBERUFLICH',
    freelance_desc:  'Webanwendungen f\u00fcr Kunden. Vollverantwortung.',

    skill_product: 'PRODUKTDENKEN',

    contact_loc_label: '\u25c6 STANDORT',
    contact_loc_val:   'Rio de Janeiro, Brasilien',
    cta_main: 'ES IST GEF\u00c4HRLICH ALLEIN ZU GEHEN \u2014 STELLE MICH EIN.',
    cta_sub:  'Senior Frontend, Fullstack, Product.',

    footer_year: '2026',
    footer_note: 'KEIN FRAMEWORK WURDE VERLETZT',
  },
};
