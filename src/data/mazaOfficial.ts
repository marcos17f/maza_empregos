export type PartnerCompany = {
  name: string;
  logo: string;
};

export type OfficialService = {
  id: string;
  title: string;
  description: string;
  image: string;
  highlights: string[];
};

export type TestimonialVideo = {
  id: string;
  videoId: string;
  title: string;
  subtitle: string;
  category: "Depoimento de Empresa" | "Treinamento & Dicas";
  thumbnail: string;
  url: string;
  embedUrl: string;
};

export const PARTNER_COMPANIES: PartnerCompany[] = [
  { name: "O Boticário", logo: "/images/partners/o-boticario.jpg" },
  { name: "Quem Disse, Berenice?", logo: "/images/partners/quem-disse-berenice.jpg" },
  { name: "Usaflex", logo: "/images/partners/usaflex.jpg" },
  { name: "Projeto Alumínio", logo: "/images/partners/projeto-aluminio.png" },
  { name: "Facchini", logo: "/images/partners/facchini.jpg" },
  { name: "Noroaço", logo: "/images/partners/noroaco.png" },
  { name: "Unipetro", logo: "/images/partners/unipetro.png" },
  { name: "Lolita Jóias", logo: "/images/partners/lolita-joias.webp" },
  { name: "Cia do Aço", logo: "/images/partners/cia-do-aco.png" },
  { name: "Werk-Schott", logo: "/images/partners/werk-schott.png" },
  { name: "Ceopag", logo: "/images/partners/ceopag.png" },
  { name: "DBK", logo: "/images/partners/dbk.jpg" },
  { name: "Bispo Food Service", logo: "/images/partners/bispo-food-service.png" },
  { name: "Topping", logo: "/images/partners/topping.jpg" },
  { name: "Unicos", logo: "/images/partners/unicos.png" },
  { name: "Rodoviário Crismar", logo: "/images/partners/rodoviario-crismar.png" },
  { name: "Maxifarma", logo: "/images/partners/maxifarma.png" },
  { name: "Levare", logo: "/images/partners/levare.png" },
  { name: "Start Anglo", logo: "/images/partners/start-anglo.png" },
  { name: "Mundial Química", logo: "/images/partners/mundial-quimica.jpg" },
  { name: "Agrometal", logo: "/images/partners/agrometal.jpg" },
  { name: "Grupo EZ Cobranças", logo: "/images/partners/grupo-ez.jpg" },
  { name: "Coferraço", logo: "/images/partners/coferraco.png" },
  { name: "JZ", logo: "/images/partners/jz.png" },
  { name: "Dantecolor", logo: "/images/partners/dantecolor.jpg" },
  { name: "Stark Eletric", logo: "/images/partners/stark-eletric.jpg" },
];

export const OFFICIAL_SERVICES_INTRO =
  "A MaZa é muito mais do que um site hospedeiro de vagas: há recrutamento e seleção de excelência e serviços de consultoria que dão suporte de desenvolvimento para empresas, empresários e candidatos.";

export const OFFICIAL_SERVICES: OfficialService[] = [
  {
    id: "recrutamento-e-selecao",
    title: "Recrutamento e Seleção",
    description:
      "Utilizamos técnicas modernas e testadas de recrutamento para identificar os candidatos ideais que se encaixam na cultura e nas necessidades específicas da sua empresa, otimizando processos e eficiência para o devido cargo.",
    image: "/images/servicos/recrutamento-selecao.png",
    highlights: [
      "Técnicas modernas e testadas de recrutamento",
      "Alinhamento à cultura e às necessidades da empresa",
      "Otimização de processos e eficiência na contratação",
    ],
  },
  {
    id: "maza-consulting",
    title: "MaZa Consulting",
    description:
      "Nossa consultoria oferece uma gama de serviços especializados, que incluem: Consultoria personalizada para Avaliação do Perfil do Cargo, Treinamentos diversos, Pesquisa de Clima Organizacional, Avaliação 360 graus, Análise do Perfil Comportamental, Avaliações focadas em mudanças de cargo e Entrevistas de Desligamento.",
    image: "/images/servicos/maza-consulting.png",
    highlights: [
      "Avaliação do Perfil do Cargo e Mudanças de Cargo",
      "Pesquisa de Clima Organizacional e Avaliação 360°",
      "Análise do Perfil Comportamental, Treinamentos e Entrevistas de Desligamento",
    ],
  },
  {
    id: "aplicacao-de-testes",
    title: "Aplicação de Testes",
    description:
      "A MaZa também oferece serviço de aplicação de testes para avaliação da conduta e qualificação profissional. A partir dos testes é possível analisar o comportamento e desempenho para apoiar contratações mais assertivas.",
    image: "/images/servicos/aplicacao-testes.jpg",
    highlights: [
      "Avaliação de conduta e qualificação profissional",
      "Análise de comportamento e desempenho",
      "Mais segurança e objetividade na escolha dos finalistas",
    ],
  },
];

export const TESTIMONIAL_VIDEOS: TestimonialVideo[] = [
  {
    id: "facchini-depoimento",
    videoId: "qXyIZa13czs",
    title: "Facchini & Empresas Parceiras — Seu currículo nas melhores empresas",
    subtitle: "Veja como grandes empresas da região confiam na MaZa para contratar talentos.",
    category: "Depoimento de Empresa",
    thumbnail: "/images/depoimentos/facchini-maza.jpg",
    url: "https://www.youtube.com/watch?v=qXyIZa13czs",
    embedUrl: "https://www.youtube.com/embed/qXyIZa13czs?autoplay=1",
  },
  {
    id: "colegio-invictus",
    videoId: "OxyzkPW_2JY",
    title: "Colégio Invictus e MaZa Empregos",
    subtitle: "Depoimento real sobre a parceria no recrutamento e seleção de profissionais.",
    category: "Depoimento de Empresa",
    thumbnail: "https://i.ytimg.com/vi/OxyzkPW_2JY/maxresdefault.jpg",
    url: "https://www.youtube.com/watch?v=OxyzkPW_2JY",
    embedUrl: "https://www.youtube.com/embed/OxyzkPW_2JY?autoplay=1",
  },
  {
    id: "aggro-e-maza",
    videoId: "nrCT4Ll62AQ",
    title: "A Aggro é MaZa!",
    subtitle: "História e resultado da parceria entre a Aggro e a MaZa Empregos.",
    category: "Depoimento de Empresa",
    thumbnail: "https://i.ytimg.com/vi/nrCT4Ll62AQ/maxresdefault.jpg",
    url: "https://www.youtube.com/watch?v=nrCT4Ll62AQ",
    embedUrl: "https://www.youtube.com/embed/nrCT4Ll62AQ?autoplay=1",
  },
  {
    id: "ferro-velho-sp",
    videoId: "vc5gh3-6CF8",
    title: "Ferro Velho SP | MaZa Empregos",
    subtitle: "Parceria no recrutamento de profissionais em São José do Rio Preto e região.",
    category: "Depoimento de Empresa",
    thumbnail: "https://i.ytimg.com/vi/vc5gh3-6CF8/maxresdefault.jpg",
    url: "https://www.youtube.com/watch?v=vc5gh3-6CF8",
    embedUrl: "https://www.youtube.com/embed/vc5gh3-6CF8?autoplay=1",
  },
  {
    id: "clinica-verde",
    videoId: "ZnBF6Bv3cqo",
    title: "Treinamento Clínica Verde — Feedback mútuo para inspirar crescimento",
    subtitle: "Ação prática da MaZa Consulting em treinamento e desenvolvimento de equipes.",
    category: "Treinamento & Dicas",
    thumbnail: "https://i.ytimg.com/vi/ZnBF6Bv3cqo/maxresdefault.jpg",
    url: "https://www.youtube.com/watch?v=ZnBF6Bv3cqo",
    embedUrl: "https://www.youtube.com/embed/ZnBF6Bv3cqo?autoplay=1",
  },
  {
    id: "postura-entrevista",
    videoId: "e3DX8klsNno",
    title: "Treinamento de postura durante a entrevista",
    subtitle: "Orientações práticas da MaZa para candidatos se destacarem no processo seletivo.",
    category: "Treinamento & Dicas",
    thumbnail: "https://i.ytimg.com/vi/e3DX8klsNno/mqdefault.jpg",
    url: "https://www.youtube.com/watch?v=e3DX8klsNno",
    embedUrl: "https://www.youtube.com/embed/e3DX8klsNno?autoplay=1",
  },
  {
    id: "curriculo-sucesso",
    videoId: "wRxcqG6hBDg",
    title: "Como ter um currículo de sucesso",
    subtitle: "Dicas oficiais da MaZa Empregos para organizar experiências e chamar atenção do RH.",
    category: "Treinamento & Dicas",
    thumbnail: "https://i.ytimg.com/vi/wRxcqG6hBDg/maxresdefault.jpg",
    url: "https://www.youtube.com/watch?v=wRxcqG6hBDg",
    embedUrl: "https://www.youtube.com/embed/wRxcqG6hBDg?autoplay=1",
  },
  {
    id: "melhores-empresas-2",
    videoId: "ph4jz0B69IQ",
    title: "MaZa Empregos — Seu currículo nas melhores empresas",
    subtitle: "Depoimento de empresa parceira sobre a qualidade das contratações pela MaZa.",
    category: "Depoimento de Empresa",
    thumbnail: "https://i.ytimg.com/vi/ph4jz0B69IQ/maxresdefault.jpg",
    url: "https://www.youtube.com/watch?v=ph4jz0B69IQ",
    embedUrl: "https://www.youtube.com/embed/ph4jz0B69IQ?autoplay=1",
  },
  {
    id: "melhores-empresas-3",
    videoId: "1Gje5baalCk",
    title: "MaZa Empregos — Conexões de valor no mercado",
    subtitle: "Empresas de Rio Preto e região compartilham sua experiência com a MaZa.",
    category: "Depoimento de Empresa",
    thumbnail: "https://i.ytimg.com/vi/1Gje5baalCk/mqdefault.jpg",
    url: "https://www.youtube.com/watch?v=1Gje5baalCk",
    embedUrl: "https://www.youtube.com/embed/1Gje5baalCk?autoplay=1",
  },
];

export const MAZA_ABOUT_INFO = {
  title: "Mais do que uma agência de empregos",
  paragraphs: [
    "Na MaZa, vamos além de uma simples agência de empregos. Nosso compromisso é entender a essência de cada vaga e encontrar a combinação ideal com candidatos como você. Nos dedicamos a criar conexões de valor, buscando o encaixe perfeito entre talentos e oportunidades.",
    "Nosso legado se estende por São José do Rio Preto e região, alcançando também candidatos e empresas de diversas partes do Brasil. Cadastre seu currículo gratuitamente, detalhe suas experiências e candidate-se às vagas abertas.",
  ],
  founderImage: "/images/maza/marina-maza.jpg",
  bannerImage: "/images/maza/maza-rio-preto.jpg",
  mission:
    "Conectar candidatos a oportunidades de emprego, promovendo o crescimento profissional e a realização pessoal. Somos a ponte que facilita e torna essa jornada mais produtiva e enriquecedora.",
  vision:
    "Ser uma plataforma de reconhecimento nacional, com crescimento constante e compromisso com as empresas e colaboradores.",
};
