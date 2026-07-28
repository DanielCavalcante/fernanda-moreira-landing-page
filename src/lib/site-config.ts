/**
 * Single source of truth for all page content and contact data.
 * Keeping copy here keeps section components presentational and makes
 * the site editable without touching JSX.
 */

const WHATSAPP_NUMBER =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "558396312561";

const WHATSAPP_MESSAGE = encodeURIComponent(
  "Olá! Vim pelo site e gostaria de agendar um atendimento.",
);

export const siteConfig = {
  name: "Fernanda Moreira Bezerra",
  legalName: "Fernanda Moreira Bezerra Advocacia",
  role: "Advocacia Imobiliária, Cível e de Família",
  description:
    "Advocacia Imobiliária, Cível e de Família com atendimento estratégico e personalizado para proteger seu patrimônio, seus direitos e sua tranquilidade.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://fernandamoreirabezerra.adv.br",
  contact: {
    whatsappNumber: WHATSAPP_NUMBER,
    whatsappUrl: `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`,
    phoneDisplay: "(83) 9 6312-561",
    email: "contato@fernandamoreirabezerra.adv.br",
    instagram: "@fernandamoreiramb_",
    instagramUrl: "https://www.instagram.com/fernandamoreiramb_",
    oab: "OAB/PB [nº do registro]",
    hours: "Segunda a sexta, 9h às 18h",
  },
  nav: [
    { label: "Sobre", href: "#sobre" },
    { label: "Áreas", href: "#areas" },
    { label: "Diferenciais", href: "#diferenciais" },
    { label: "Atendimento", href: "#atendimento" },
    { label: "FAQ", href: "#faq" },
    { label: "Contato", href: "#contato" },
  ],
} as const;

export type PracticeAreaKey = "imobiliario" | "civil" | "familia";

export const practiceAreas: {
  key: PracticeAreaKey;
  title: string;
  items: string[];
}[] = [
  {
    key: "imobiliario",
    title: "Direito Imobiliário",
    items: [
      "Compra e venda de imóveis",
      "Due Diligence Imobiliária",
      "Análise de riscos",
      "Revisão de contratos",
      "Regularização de imóveis",
      "Usucapião",
      "Distratos",
      "Locação",
      "Incorporação",
      "Escrituras e registros",
    ],
  },
  {
    key: "civil",
    title: "Direito Civil",
    items: [
      "Responsabilidade Civil",
      "Indenizações",
      "Cobranças",
      "Contratos",
      "Litígios Cíveis",
      "Consultoria Jurídica",
      "Inventário Judicial e Extrajudicial",
    ],
  },
  {
    key: "familia",
    title: "Direito de Família",
    items: [
      "Divórcio",
      "Guarda",
      "Pensão Alimentícia",
      "Regulamentação de visitas",
      "União Estável",
      "Partilha de bens",
      "Investigação e reconhecimento de paternidade",
    ],
  },
];

export const services = [
  {
    title: "Consultoria",
    items: [
      "Avaliação de casos",
      "Orientação jurídica",
      "Due Diligence Imobiliária",
      "Análise de riscos",
    ],
  },
  {
    title: "Contratos",
    items: [
      "Revisão de contratos",
      "Elaboração de contratos",
      "Compra e venda de imóveis",
      "Transações imobiliárias",
    ],
  },
  {
    title: "Processos Judiciais",
    items: ["Litígios cíveis", "Litígios contratuais", "Usucapião", "Inventários"],
  },
];

export const differentials = [
  "Atendimento personalizado",
  "Clareza e transparência",
  "Estratégia jurídica individualizada",
  "Agilidade no atendimento",
  "Atuação preventiva e contenciosa",
  "Atendimento presencial e online em todo o Brasil",
];

export const processSteps = [
  {
    step: 1,
    title: "Primeiro contato",
    description: "Você explica sua situação e o contexto do seu caso.",
  },
  {
    step: 2,
    title: "Análise jurídica",
    description: "Avaliação completa da documentação e dos riscos envolvidos.",
  },
  {
    step: 3,
    title: "Estratégia",
    description: "Definição da melhor solução jurídica para o seu objetivo.",
  },
  {
    step: 4,
    title: "Acompanhamento",
    description:
      "Você acompanha cada etapa do processo, com transparência total.",
  },
];

export const faqs = [
  {
    question: "Posso ser atendido online?",
    answer:
      "Sim. As consultas e o acompanhamento processual podem ser feitos totalmente online, com a mesma atenção e segurança do atendimento presencial.",
  },
  {
    question: "Atende todo o Brasil?",
    answer:
      "Sim, dependendo da natureza da demanda. Atendimentos consultivos podem ser feitos remotamente em todo o país; casos que exigem atuação presencial são avaliados conforme a comarca.",
  },
  {
    question: "Quanto custa a consulta?",
    answer:
      "Os honorários variam conforme a complexidade do caso. Após entender sua situação, você recebe uma proposta clara antes de qualquer decisão.",
  },
  {
    question: "Quanto tempo dura um processo?",
    answer:
      "Cada caso possui características próprias e depende de diversos fatores, como a complexidade da causa e o andamento do órgão responsável. Na consulta inicial você recebe uma expectativa realista de prazo.",
  },
];
