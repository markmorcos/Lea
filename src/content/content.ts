// Full bilingual content for the Lea Zoe Pfaffeneder website.
// DE and EN are equal — manual switch in the header, no auto-redirect.
// [bracketed] values are placeholders still to confirm; shown verbatim.

export type Lang = "de" | "en";

export type NavItem = { id: string; label: string };
export type Step = { n: string; title: string; body: string };
export type ValuePill = { icon: string; label: string };
export type ServiceCard = { icon: string; name: string; body: string; badge: string };
export type TopicItem = { icon: string; title: string; body: string };
export type SideItem = { icon: string; label: string };
export type FaqItem = { q: string; a: string };

export type Dict = {
  nav: NavItem[];
  cta: string;
  moreAbout: string;
  hero: { eyebrow: string; title: string; lead: string; note: string; meta: string[] };
  forWho: { eyebrow: string; body: string };
  aboutTeaser: { eyebrow: string; body: string; link: string };
  homeTopics: { eyebrow: string; title: string; chips: string[]; link: string };
  homeSteps: { eyebrow: string; title: string; steps: Step[] };
  ctaBand: { text: string; cta: string };
  about: {
    eyebrow: string;
    title: string;
    bio: string[];
    qualTitle: string;
    quals: string[];
    values: ValuePill[];
  };
  services: { eyebrow: string; title: string; cards: ServiceCard[]; disclaimer: string };
  topics: { eyebrow: string; title: string; lead: string; items: TopicItem[]; safety: string };
  fees: {
    eyebrow: string;
    title: string;
    ablaufTitle: string;
    steps: Step[];
    costTitle: string;
    cost: string;
    priceFigure: string;
    priceUnit: string;
    insuranceTitle: string;
    insurance: string;
  };
  booking: {
    eyebrow: string;
    title: string;
    intro: string;
    schedulerLabel: string;
    schedulerNote: string;
    formTitle: string;
    fields: { name: string; email: string; times: string; message: string };
    timesPlaceholder: string;
    consent: string;
    submit: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    lead: string;
    notice: string;
    fields: { name: string; email: string; phone: string; message: string };
    consent: string;
    submit: string;
    errEmail: string;
    errConsent: string;
    successTitle: string;
    successBody: string;
    sideTitle: string;
    side: SideItem[];
  };
  faq: { eyebrow: string; title: string; items: FaqItem[] };
  impressum: { eyebrow: string; title: string; rows: [string, string][]; note: string };
  datenschutz: { eyebrow: string; title: string; intro: string; sections: { h: string; b: string }[] };
  footer: { tagline: string; legal: string[]; safety: string };
};

export const SITE: Record<Lang, Dict> = {
  de: {
    nav: [
      { id: "ueber", label: "Über mich" },
      { id: "angebot", label: "Angebot" },
      { id: "themen", label: "Themen" },
      { id: "kosten", label: "Ablauf & Kosten" },
      { id: "termine", label: "Termine" },
      { id: "kontakt", label: "Kontakt" },
    ],
    cta: "Termin anfragen",
    moreAbout: "Mehr über mich",

    hero: {
      eyebrow: "Psychologische Beratung & Coaching",
      title: "Raum für das, was Sie gerade bewegt.",
      lead: "Psychologische Beratung & Begleitung — online und deutschlandweit, ressourcenorientiert, wertschätzend, auf Augenhöhe.",
      note: "Lea Zoe Pfaffeneder · M.Sc. Psychologin",
      meta: ["Online · deutschlandweit", "Deutsch & English", "Erstgespräch unverbindlich"],
    },
    forWho: {
      eyebrow: "Für wen",
      body: "Manchmal wird das Leben unübersichtlich — durch Stress, Veränderungen oder belastende Phasen. In der Beratung schauen wir gemeinsam und in Ruhe auf Ihr Anliegen und stärken das, was Ihnen Halt gibt.",
    },
    aboutTeaser: {
      eyebrow: "Über mich",
      body: "Ich bin Psychologin (M.Sc.) und begleite Menschen in unterschiedlichen Lebenslagen.",
      link: "Mehr über mich",
    },
    homeTopics: {
      eyebrow: "Themen",
      title: "Womit ich Sie begleite.",
      chips: [
        "Stress & Überforderung",
        "Lebenskrisen & Veränderung",
        "Selbstwert",
        "Orientierung & Entscheidungen",
        "Belastende Beziehungen",
        "Persönliche Entwicklung",
      ],
      link: "Alle Themen ansehen",
    },
    homeSteps: {
      eyebrow: "So läuft es ab",
      title: "In drei ruhigen Schritten.",
      steps: [
        { n: "01", title: "Erstgespräch", body: "Ein kurzes, unverbindliches Kennenlernen." },
        { n: "02", title: "Anliegen klären", body: "Wir klären gemeinsam Ihr Anliegen und Ihre Ziele." },
        { n: "03", title: "Gemeinsam weitergehen", body: "Regelmäßige Gespräche, in Ihrem Tempo." },
      ],
    },
    ctaBand: { text: "Bereit für den ersten Schritt?", cta: "Termin anfragen" },

    about: {
      eyebrow: "Über mich",
      title: "Über mich",
      bio: [
        "Ich bin Psychologin (M.Sc.) und befinde mich derzeit in der Ausbildung zur Psychologischen Psychotherapeutin mit Schwerpunkt Verhaltenstherapie.",
        "In meiner bisherigen Arbeit, insbesondere im psychiatrischen Kontext, habe ich Menschen mit ganz unterschiedlichen Anliegen begleitet – von Ängsten und depressiven Symptomen über emotionale Belastungen und Selbstwertthemen bis hin zu Beziehungsschwierigkeiten, Stress, Suchterkrankungen und Problemen der Emotions- und Impulskontrolle. Dadurch habe ich ein breites Verständnis für die unterschiedlichen Herausforderungen entwickelt, mit denen Menschen im Laufe ihres Lebens konfrontiert sein können.",
        "Meine Arbeit basiert auf wissenschaftlich fundierten psychologischen und psychotherapeutischen Methoden. Neben verhaltenstherapeutischen Ansätzen lasse ich auch Elemente moderner Verfahren wie der Akzeptanz- und Commitment-Therapie (ACT) und der Schematherapie einfließen. Je nach Anliegen können zudem psychodynamische Perspektiven hilfreich sein, um wiederkehrende Muster und deren Ursprung besser zu verstehen.",
        "Mir ist wichtig, Menschen in ihrer individuellen Lebensgeschichte und Persönlichkeit wahrzunehmen – nicht nur im Hinblick auf aktuelle Belastungen. In einem geschützten und vertraulichen Rahmen unterstütze ich Sie dabei, sich selbst besser zu verstehen, Zusammenhänge zu erkennen und einen wohlwollenden Blick auf sich selbst zu entwickeln. Dabei orientiere ich mich an Ihren Stärken und Ressourcen, um gemeinsam neue Perspektiven und Handlungsmöglichkeiten zu erarbeiten.",
        "Bitte beachten Sie, dass ich im Rahmen meiner psychologischen Beratung keine Psychotherapie im heilkundlichen Sinne anbiete. Meine Arbeit orientiert sich jedoch an wissenschaftlich fundierten psychologischen und psychotherapeutischen Konzepten.",
      ],
      qualTitle: "Qualifikationen",
      quals: [
        "M.Sc. Forensische & Rechtspsychologie — Erasmus-Universität Rotterdam",
        "B.Sc. Psychologie — Universität Maastricht",
        "In Ausbildung: Psychologische Psychotherapeutin (Verhaltenstherapie)",
        "Weiterbildung: „Traumatherapie mit Geflüchteten“ — Universitätsklinikum Ulm",
        "Sprachen: Deutsch, English",
      ],
      values: [
        { icon: "shield", label: "Vertraulich" },
        { icon: "leaf", label: "Ressourcenorientiert" },
        { icon: "heart", label: "Auf Augenhöhe" },
      ],
    },

    services: {
      eyebrow: "Angebot",
      title: "Mein Angebot",
      cards: [
        { icon: "video", name: "Einzelberatung — online", body: "Vertrauliche Videositzungen, ortsunabhängig und flexibel. 50 Minuten.", badge: "Online" },
        { icon: "sparkle", name: "Kennenlern-Gespräch", body: "Ein erstes Gespräch zum Kennenlernen — wie eine reguläre Sitzung (50 Minuten, 45 €), unverbindlich.", badge: "Unverbindlich" },
      ],
      disclaimer: "Psychologische Beratung ersetzt keine ärztliche oder psychotherapeutische Behandlung.",
    },

    topics: {
      eyebrow: "Themen",
      title: "Womit ich Sie begleite",
      lead: "Themen, keine Diagnosen — für all das gibt es hier Platz.",
      items: [
        { icon: "compass", title: "Stress & Überforderung", body: "Wenn der Alltag zu viel wird und Sie zur Ruhe kommen möchten." },
        { icon: "leaf", title: "Lebenskrisen & Veränderungen", body: "In Umbruchphasen Halt und neue Perspektiven finden." },
        { icon: "heart", title: "Selbstwert & Selbstvertrauen", body: "Ein freundlicherer, stärkender Blick auf sich selbst." },
        { icon: "compass", title: "Orientierung & Entscheidungen", body: "Klarheit gewinnen, wenn die Richtung unklar ist." },
        { icon: "shield", title: "Belastende Beziehungen", body: "Muster verstehen und gut für sich sorgen." },
        { icon: "sparkle", title: "Umgang mit schwierigen Gefühlen", body: "Raum für das, was schwer wiegt — ohne Wertung." },
        { icon: "leaf", title: "Persönliche Weiterentwicklung", body: "Das stärken, was bereits in Ihnen angelegt ist." },
      ],
      safety:
        "Wenn Sie sich in einer akuten Krise befinden, wenden Sie sich bitte an den Notruf 112 oder die Telefonseelsorge (0800 111 0 111). Psychologische Beratung ersetzt keine Behandlung psychischer Erkrankungen.",
    },

    fees: {
      eyebrow: "Ablauf & Kosten",
      title: "Ablauf & Kosten",
      ablaufTitle: "So läuft es ab",
      steps: [
        { n: "01", title: "Kennenlernen", body: "Ein kurzes, unverbindliches Erstgespräch." },
        { n: "02", title: "Anliegen klären", body: "Wir klären gemeinsam Ihr Anliegen und Ihre Ziele." },
        { n: "03", title: "Beratungssitzungen", body: "Regelmäßige Gespräche (i.d.R. 50 Min.), in Ihrem Tempo." },
        { n: "04", title: "Abschluss & Reflexion", body: "Wir blicken zurück und sichern, was Sie mitnehmen." },
      ],
      costTitle: "Kosten",
      cost: "Eine Beratungssitzung (50 Minuten) kostet 45 €. Das Kennenlern-Gespräch entspricht einer regulären Sitzung (50 Minuten, 45 €). Termine, die nicht mindestens 24 Stunden vorher abgesagt werden, berechne ich als Ausfallhonorar.",
      priceFigure: "45 €",
      priceUnit: "50 Minuten",
      insuranceTitle: "Krankenkasse",
      insurance:
        "Psychologische Beratung ist eine Selbstzahlerleistung und wird in der Regel nicht von gesetzlichen oder privaten Krankenkassen übernommen.",
    },

    booking: {
      eyebrow: "Termine",
      title: "Termin anfragen",
      intro: "Wählen Sie einen Zeitraum, der Ihnen passt — ich melde mich zur Bestätigung. Bitte teilen Sie hier noch keine Gesundheitsdaten.",
      schedulerLabel: "Online-Kalender",
      schedulerNote: "Hier wird der Buchungskalender eingebettet.",
      formTitle: "Oder Anfrage per Formular",
      fields: { name: "Name", email: "E-Mail", times: "Bevorzugte Zeiten", message: "Kurze Nachricht" },
      timesPlaceholder: "z. B. werktags vormittags",
      consent: "Ich habe die Datenschutzerklärung gelesen und bin mit der Verarbeitung meiner Angaben zur Kontaktaufnahme einverstanden.",
      submit: "Anfrage senden",
    },

    contact: {
      eyebrow: "Kontakt",
      title: "Kontakt",
      lead: "Schreiben Sie mir ein paar Zeilen — ich melde mich bei Ihnen.",
      notice:
        "Bitte schreiben Sie keine vertraulichen Informationen, insbesondere keine Gesundheitsdaten, in das Kontaktformular oder in eine unverschlüsselte E-Mail. Nutzen Sie es nur für eine erste Kontaktaufnahme.",
      fields: { name: "Name", email: "E-Mail", phone: "Telefon (optional)", message: "Nachricht" },
      consent: "Ich habe die Datenschutzerklärung gelesen und bin mit der Verarbeitung meiner Angaben zur Kontaktaufnahme einverstanden.",
      submit: "Nachricht senden",
      errEmail: "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
      errConsent: "Bitte bestätigen Sie die Datenschutzerklärung.",
      successTitle: "Danke — Ihre Nachricht ist angekommen.",
      successBody: "Ich antworte i.d.R. innerhalb von 2 Werktagen.",
      sideTitle: "So erreichen Sie mich",
      side: [
        { icon: "mail", label: "kontakt@pfaffeneder-psychologische-beratung.de" },
        { icon: "phone", label: "015567138410" },
        { icon: "mapPin", label: "Online · deutschlandweit" },
        { icon: "calendar", label: "Antwort i.d.R. innerhalb von 2 Werktagen" },
      ],
    },

    faq: {
      eyebrow: "Häufige Fragen",
      title: "Häufige Fragen",
      items: [
        { q: "Was ist der Unterschied zwischen Beratung und Psychotherapie?", a: "Psychologische Beratung unterstützt Sie bei Belastungen, Entscheidungen und persönlicher Entwicklung. Sie ist keine Heilbehandlung psychischer Erkrankungen — dafür ist eine psychotherapeutische oder ärztliche Behandlung zuständig." },
        { q: "Für wen ist das Angebot geeignet?", a: "Für Menschen, die sich Unterstützung in belastenden oder unsicheren Lebensphasen wünschen — unabhängig davon, ob es um eine konkrete Entscheidung, Stress oder persönliche Weiterentwicklung geht." },
        { q: "Finden die Sitzungen online statt?", a: "Ja — alle Sitzungen finden online über eine sichere Videoverbindung statt, ortsunabhängig in ganz Deutschland." },
        { q: "Was kostet eine Sitzung — zahlt die Kasse?", a: "Psychologische Beratung ist eine Selbstzahlerleistung; eine Kassenübernahme ist in der Regel nicht möglich." },
        { q: "Wie lange dauert eine Sitzung?", a: "In der Regel 50 Minuten." },
        { q: "Wie ist es um Vertraulichkeit und Datenschutz bestellt?", a: "Alles, was Sie teilen, bleibt vertraulich. Die Datenverarbeitung erfolgt DSGVO-konform; Online-Sitzungen laufen über eine sichere Verbindung." },
        { q: "In welchen Sprachen findet die Beratung statt?", a: "Deutsch und Englisch." },
      ],
    },

    impressum: {
      eyebrow: "Rechtliches",
      title: "Impressum",
      rows: [
        ["Name", "Lea Zoe Pfaffeneder"],
        ["E-Mail", "kontakt@pfaffeneder-psychologische-beratung.de"],
        ["Telefon", "015567138410"],
        ["Berufsbezeichnung", "M.Sc. Psychologin"],
        ["Tätigkeit", "Psychologische Beratung"],
        ["Verantwortlich i.S.d. § 18 MStV", "Lea Zoe Pfaffeneder"],
      ],
      note: "Inhaltlich verantwortlich gemäß § 18 Abs. 2 MStV.",
    },
    datenschutz: {
      eyebrow: "Rechtliches",
      title: "Datenschutzerklärung",
      intro: "Der Schutz Ihrer personenbezogenen Daten ist mir wichtig. Nachfolgend informiere ich Sie über die Verarbeitung Ihrer Daten gemäß DSGVO. (Finaler Rechtstext wird juristisch geprüft.)",
      sections: [
        { h: "1. Verantwortliche Stelle", b: "Verantwortlich für die Datenverarbeitung ist Lea Zoe Pfaffeneder (Kontaktdaten siehe Impressum)." },
        { h: "2. Erhebung & Verarbeitung", b: "Personenbezogene Daten werden nur erhoben, soweit Sie sie über das Kontakt- oder Anfrageformular freiwillig mitteilen, zum Zweck der Kontaktaufnahme." },
        { h: "3. Rechtsgrundlage", b: "Die Verarbeitung erfolgt auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO)." },
        { h: "4. Ihre Rechte", b: "Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung sowie Widerruf Ihrer Einwilligung." },
        { h: "5. Hosting", b: "Die Website wird auf Servern innerhalb der EU gehostet." },
      ],
    },

    footer: {
      tagline: "Psychologische Beratung & Coaching · Berlin & online",
      legal: ["Impressum", "Datenschutz"],
      safety: "Psychologische Beratung ersetzt keine ärztliche oder psychotherapeutische Behandlung. In akuten Krisen wählen Sie bitte den Notruf 112 oder die Telefonseelsorge: 0800 111 0 111.",
    },
  },

  en: {
    nav: [
      { id: "ueber", label: "About" },
      { id: "angebot", label: "Services" },
      { id: "themen", label: "Topics" },
      { id: "kosten", label: "How it works & Fees" },
      { id: "termine", label: "Booking" },
      { id: "kontakt", label: "Contact" },
    ],
    cta: "Request an appointment",
    moreAbout: "More about me",

    hero: {
      eyebrow: "Psychological counselling & coaching",
      title: "Space for what's on your mind right now.",
      lead: "Psychological counselling & support — online, across Germany — resource-oriented, respectful, at eye level.",
      note: "Lea Zoe Pfaffeneder · M.Sc. Psychologist",
      meta: ["Online · across Germany", "German & English", "No-obligation intro call"],
    },
    forWho: {
      eyebrow: "Who it's for",
      body: "Sometimes life gets overwhelming — through stress, change, or difficult phases. In counselling we look at what's on your mind together, calmly, and strengthen what gives you stability.",
    },
    aboutTeaser: {
      eyebrow: "About me",
      body: "I'm a psychologist (M.Sc.) supporting people through many different situations.",
      link: "More about me",
    },
    homeTopics: {
      eyebrow: "Topics",
      title: "What I can support you with.",
      chips: ["Stress & overwhelm", "Life crises & change", "Self-worth", "Orientation & decisions", "Difficult relationships", "Personal growth"],
      link: "See all topics",
    },
    homeSteps: {
      eyebrow: "How it works",
      title: "In three calm steps.",
      steps: [
        { n: "01", title: "Intro call", body: "A short, no-obligation conversation." },
        { n: "02", title: "Clarify your concern", body: "We clarify your concern and goals together." },
        { n: "03", title: "Move forward together", body: "Regular sessions, at your pace." },
      ],
    },
    ctaBand: { text: "Ready for the first step?", cta: "Request an appointment" },

    about: {
      eyebrow: "About me",
      title: "About me",
      bio: [
        "I am a psychologist (M.Sc.) and am currently training to become a Psychological Psychotherapist with a focus on cognitive behavioural therapy.",
        "In my work so far, particularly in psychiatric settings, I have supported people with a wide range of concerns – from anxiety and depressive symptoms to emotional strain and self-worth issues, through to relationship difficulties, stress, addiction, and challenges with emotion and impulse regulation. This has given me a broad understanding of the different challenges people can face over the course of their lives.",
        "My work is grounded in scientifically based psychological and psychotherapeutic methods. Alongside cognitive behavioural approaches, I also draw on elements of modern methods such as Acceptance and Commitment Therapy (ACT) and Schema Therapy. Depending on your concern, psychodynamic perspectives can also help to better understand recurring patterns and where they come from.",
        "It matters to me to see people in their individual life story and personality – not only in terms of their current difficulties. In a safe and confidential space, I support you in understanding yourself better, recognising connections, and developing a kinder view of yourself. In doing so, I focus on your strengths and resources, so that together we can work out new perspectives and ways forward.",
        "Please note that within my psychological counselling I do not provide psychotherapy in the medical (Heilkunde) sense. My work is, however, guided by scientifically based psychological and psychotherapeutic concepts.",
      ],
      qualTitle: "Qualifications",
      quals: [
        "M.Sc. Forensic & Legal Psychology — Erasmus University Rotterdam",
        "B.Sc. Psychology — Maastricht University",
        "In training: Psychological Psychotherapist (cognitive behavioural)",
        "Continuing education: “Trauma therapy with refugees” — Ulm University Hospital",
        "Languages: German, English",
      ],
      values: [
        { icon: "shield", label: "Confidential" },
        { icon: "leaf", label: "Resource-oriented" },
        { icon: "heart", label: "At eye level" },
      ],
    },

    services: {
      eyebrow: "Services",
      title: "What I offer",
      cards: [
        { icon: "video", name: "Individual counselling — online", body: "Confidential video sessions, location-independent and flexible. 50 minutes.", badge: "Online" },
        { icon: "sparkle", name: "Intro call", body: "A first conversation to get to know each other — same as a regular session (50 minutes, €45), no obligation.", badge: "No obligation" },
      ],
      disclaimer: "Psychological counselling is not a substitute for medical or psychotherapeutic treatment.",
    },

    topics: {
      eyebrow: "Topics",
      title: "What I can support you with",
      lead: "Themes, not diagnoses — there's room here for all of it.",
      items: [
        { icon: "compass", title: "Stress & overwhelm", body: "When everyday life becomes too much and you want to find calm." },
        { icon: "leaf", title: "Life crises & change", body: "Finding footing and new perspectives in times of upheaval." },
        { icon: "heart", title: "Self-worth & confidence", body: "A kinder, more strengthening view of yourself." },
        { icon: "compass", title: "Orientation & decisions", body: "Gaining clarity when the direction feels unclear." },
        { icon: "shield", title: "Difficult relationships", body: "Understanding patterns and caring well for yourself." },
        { icon: "sparkle", title: "Working with difficult emotions", body: "Room for what weighs on you — without judgement." },
        { icon: "leaf", title: "Personal growth", body: "Strengthening what is already within you." },
      ],
      safety:
        "If you're in an acute crisis, please contact emergency services (112) or Telefonseelsorge (0800 111 0 111). Psychological counselling does not replace treatment of mental illness.",
    },

    fees: {
      eyebrow: "How it works & fees",
      title: "How it works & fees",
      ablaufTitle: "How it works",
      steps: [
        { n: "01", title: "Getting to know each other", body: "A short, no-obligation intro call." },
        { n: "02", title: "Clarifying your concern", body: "We clarify your concern and goals together." },
        { n: "03", title: "Counselling sessions", body: "Regular sessions (usually 50 min), at your pace." },
        { n: "04", title: "Closing & reflection", body: "We look back and consolidate what you take with you." },
      ],
      costTitle: "Fees",
      cost: "A counselling session (50 minutes) costs €45. The intro call is the same as a regular session (50 minutes, €45). Appointments not cancelled at least 24 hours in advance are charged as a cancellation fee.",
      priceFigure: "€45",
      priceUnit: "50 minutes",
      insuranceTitle: "Health insurance",
      insurance: "Psychological counselling is a self-pay service and is generally not covered by statutory or private health insurance.",
    },

    booking: {
      eyebrow: "Booking",
      title: "Request an appointment",
      intro: "Choose a time that suits you — I'll get back to you to confirm. Please don't share any health details here.",
      schedulerLabel: "Online calendar",
      schedulerNote: "The booking calendar will be embedded here.",
      formTitle: "Or request via form",
      fields: { name: "Name", email: "Email", times: "Preferred times", message: "Short message" },
      timesPlaceholder: "e.g. weekday mornings",
      consent: "I have read the privacy policy and consent to my details being processed for the purpose of getting in touch.",
      submit: "Send request",
    },

    contact: {
      eyebrow: "Contact",
      title: "Contact",
      lead: "Write me a few lines — I'll get back to you.",
      notice: "Please do not include any confidential information, especially health data, in the contact form or in an unencrypted email. Use it only to make initial contact.",
      fields: { name: "Name", email: "Email", phone: "Phone (optional)", message: "Message" },
      consent: "I have read the privacy policy and consent to my details being processed for the purpose of getting in touch.",
      submit: "Send message",
      errEmail: "Please enter a valid email address.",
      errConsent: "Please confirm the privacy policy.",
      successTitle: "Thank you — your message has arrived.",
      successBody: "I usually reply within 2 working days.",
      sideTitle: "How to reach me",
      side: [
        { icon: "mail", label: "kontakt@pfaffeneder-psychologische-beratung.de" },
        { icon: "phone", label: "015567138410" },
        { icon: "mapPin", label: "Online · across Germany" },
        { icon: "calendar", label: "Reply usually within 2 working days" },
      ],
    },

    faq: {
      eyebrow: "FAQ",
      title: "FAQ",
      items: [
        { q: "What's the difference between counselling and psychotherapy?", a: "Psychological counselling supports you with stress, decisions and personal growth. It is not a medical treatment for mental illness — that is the role of psychotherapeutic or medical care." },
        { q: "Who is this for?", a: "For people who would like support through difficult or uncertain phases of life — whether it's about a specific decision, stress, or personal growth." },
        { q: "Are sessions held online?", a: "Yes — all sessions take place online over a secure video connection, anywhere in Germany." },
        { q: "What does a session cost — is it covered by insurance?", a: "Psychological counselling is a self-pay service; reimbursement by health insurance is generally not possible." },
        { q: "How long is a session?", a: "Usually 50 minutes." },
        { q: "How are confidentiality and data protection handled?", a: "Everything you share stays confidential. Data is processed in line with GDPR; online sessions run over a secure connection." },
        { q: "Which languages are sessions held in?", a: "German and English." },
      ],
    },

    impressum: {
      eyebrow: "Legal",
      title: "Imprint",
      rows: [
        ["Name", "Lea Zoe Pfaffeneder"],
        ["Email", "kontakt@pfaffeneder-psychologische-beratung.de"],
        ["Phone", "015567138410"],
        ["Professional title", "M.Sc. Psychologist"],
        ["Activity", "Psychological counselling"],
        ["Responsible per § 18 MStV", "Lea Zoe Pfaffeneder"],
      ],
      note: "Responsible for content pursuant to § 18 (2) MStV.",
    },
    datenschutz: {
      eyebrow: "Legal",
      title: "Privacy policy",
      intro: "Protecting your personal data matters to me. Below I inform you about the processing of your data under the GDPR. (Final legal text to be reviewed by a lawyer.)",
      sections: [
        { h: "1. Controller", b: "The controller for data processing is Lea Zoe Pfaffeneder (contact details see Imprint)." },
        { h: "2. Collection & processing", b: "Personal data is only collected insofar as you voluntarily provide it via the contact or request form, for the purpose of getting in touch." },
        { h: "3. Legal basis", b: "Processing is based on your consent (Art. 6 (1)(a) GDPR)." },
        { h: "4. Your rights", b: "You have the right to access, rectification, erasure, restriction, and withdrawal of your consent." },
        { h: "5. Hosting", b: "The website is hosted on servers within the EU." },
      ],
    },

    footer: {
      tagline: "Psychological counselling & coaching · Berlin & online",
      legal: ["Imprint", "Privacy"],
      safety: "Psychological counselling is not a substitute for medical or psychotherapeutic treatment. In an acute crisis, please call 112 or the German helpline Telefonseelsorge: 0800 111 0 111.",
    },
  },
};

// Route id → URL slug (shared across languages; home is the index).
export const SLUGS: Record<string, string> = {
  home: "",
  ueber: "ueber",
  angebot: "angebot",
  themen: "themen",
  kosten: "kosten",
  termine: "termine",
  kontakt: "kontakt",
  faq: "faq",
  impressum: "impressum",
  datenschutz: "datenschutz",
};

export const LANGS: Lang[] = ["de", "en"];

// German is the default locale and lives at the root (no /de prefix).
// English lives under /en. This keeps a single canonical home per language.
export function hrefFor(lang: Lang, routeId: string): string {
  const slug = SLUGS[routeId] ?? "";
  if (lang === "en") return slug ? `/en/${slug}/` : `/en/`;
  return slug ? `/${slug}/` : `/`;
}
