export type OpportunityType = "vaga" | "consultoria";

export type SegmentItem = {
  slug: string;
  name: string;
  description: string;
  image: string;
  category: "vagas" | "consultoria";
};

export type OpportunityVariant = {
  id: string;
  label: string;
  price: number;
  note: string;
};

export type OpportunityItem = {
  handle: string;
  title: string;
  type: OpportunityType;
  segmentSlug: string;
  segmentName: string;
  badge: string;
  highlightTag?: string;
  location: string;
  regime: string;
  sla: string;
  freeForCandidate?: boolean;
  salaryRange?: string;
  pricePix?: number;
  priceCard?: number;
  rating: number;
  reviewCount: number;
  image: string;
  summary: string;
  description: string;
  requirements: string[];
  benefits: string[];
  variants: OpportunityVariant[];
  featuredGroup?: "top" | "more" | "solutions";
};

export const SEGMENTS: SegmentItem[] = [
  {
    slug: "administrativo",
    name: "Administrativo",
    description: "Rotinas administrativas, financeiro, fiscal, compras e departamento pessoal.",
    image: "/images/vagas/vaga-administrativo-fiscal.jpg",
    category: "vagas",
  },
  {
    slug: "comercial-e-vendas",
    name: "Comercial e Vendas",
    description: "Executivos de contas B2B, consultores comerciais, pré-vendas (SDR) e gerência.",
    image: "/images/vagas/vaga-comercial-b2b.jpg",
    category: "vagas",
  },
  {
    slug: "tecnologia",
    name: "Tecnologia e TI",
    description: "Desenvolvedores, analistas de suporte, dados, infraestrutura e produto.",
    image: "/images/vagas/vaga-tecnologia-dev.webp",
    category: "vagas",
  },
  {
    slug: "industria-e-operacoes",
    name: "Indústria e Operações",
    description: "Supervisores de produção, técnicos industriais, manutenção e qualidade.",
    image: "/images/vagas/vaga-industria-solda.jpg",
    category: "vagas",
  },
  {
    slug: "logistica",
    name: "Logística",
    description: "Coordenação logística, estoque, faturamento, expedição e supply chain.",
    image: "/images/vagas/vaga-logistica-estoque.jpg",
    category: "vagas",
  },
  {
    slug: "lideranca-e-rh",
    name: "Liderança e RH",
    description: "Gestores, coordenadores, analistas de gente e gestão e posições estratégicas.",
    image: "/images/vagas/vaga-lideranca-rh.jpg",
    category: "vagas",
  },
  {
    slug: "recrutamento-e-selecao",
    name: "Recrutamento e Seleção",
    description: "Seleção assertiva de perfis operacionais, técnicos, administrativos e liderança.",
    image: "/images/career-growth.jpg",
    category: "consultoria",
  },
  {
    slug: "maza-consulting",
    name: "MaZa Consulting",
    description: "Pesquisa de clima, avaliação 360°, perfil comportamental, testes e treinamentos.",
    image: "/images/vagas/vaga-contabilidade.jpg",
    category: "consultoria",
  },
];

export const OPPORTUNITIES: OpportunityItem[] = [
  // TOP 3 FEATURED (Home Hero Below Highlights)
  {
    handle: "analista-administrativo-financeiro",
    title: "Analista Administrativo Financeiro",
    type: "vaga",
    segmentSlug: "administrativo",
    segmentName: "Administrativo",
    badge: "Vaga ativa • Cadastro gratuito",
    highlightTag: "100% Grátis",
    location: "São José do Rio Preto – SP (Presencial)",
    regime: "CLT • Tempo integral",
    sla: "Triagem contínua com retorno direto pela plataforma",
    freeForCandidate: true,
    salaryRange: "R$ 3.400 a R$ 4.600 + benefícios",
    rating: 4.9,
    reviewCount: 142,
    image: "/images/area-administrativo.jpg",
    summary:
      "Atuação em conciliação bancária, contas a pagar e receber, fluxo de caixa e relatórios gerenciais em empresa consolidada de Rio Preto.",
    description:
      "Oportunidade para profissional organizado(a) e analítico(a) atuar no setor financeiro e administrativo de empresa parceira da MaZa Empregos em São José do Rio Preto/SP. Todo o processo de candidatura é 100% gratuito e protegido pela LGPD.",
    requirements: [
      "Ensino superior completo ou cursando em Administração, Contabilidade ou Economia",
      "Experiência prévia com contas a pagar/receber e conciliação bancária",
      "Domínio intermediário de Excel e sistemas ERP",
      "Perfil analítico, proativo e foco em organização",
    ],
    benefits: [
      "Vale-alimentação e vale-refeição",
      "Plano de saúde e odontológico",
      "Ambiente estruturado com plano de desenvolvimento",
      "Cadastro e candidatura 100% gratuitos pela MaZa Empregos",
    ],
    variants: [
      {
        id: "cand-padrao",
        label: "Candidatura Gratuita (Portal MaZa)",
        price: 0,
        note: "Envio de currículo online conforme LGPD",
      },
    ],
    featuredGroup: "top",
  },
  {
    handle: "recrutamento-e-selecao-estrategico",
    title: "Recrutamento e Seleção Estratégico",
    type: "consultoria",
    segmentSlug: "recrutamento-e-selecao",
    segmentName: "Recrutamento e Seleção",
    badge: "Para Empresas • Triagem Assertiva",
    highlightTag: "Sob medida",
    location: "São José do Rio Preto, Região e Todo o Brasil",
    regime: "Online • Gestão completa da vaga",
    sla: "Shortlist qualificada com parecer técnico e comportamental",
    pricePix: 1290,
    priceCard: 1490,
    rating: 5.0,
    reviewCount: 218,
    image: "/images/recruitment-specialist.jpg",
    summary:
      "Condução completa do processo seletivo para perfis operacionais, administrativos, comerciais, técnicos e de liderança com foco em fit cultural.",
    description:
      "A MaZa Empregos atua estrategicamente como extensão do seu RH desde 2011. Alinhamos o perfil da vaga à cultura da sua empresa, fazemos hunting ativo, triagem técnica, entrevistas por competências e entregamos os finalistas prontos para decisão.",
    requirements: [
      "Reunião online de alinhamento de perfil e cultura organizacional",
      "Divulgação multicanal + busca ativa (Job Hunting) no banco de talentos MaZa",
      "Entrevistas comportamentais, avaliação de competências e checagem de referências",
      "Relatório comparativo dos finalistas e acompanhamento pós-contratação",
    ],
    benefits: [
      "Redução drástica do tempo de fechamento de vagas",
      "Menor turnover graças ao mapeamento de fit cultural",
      "Atendimento consultivo dedicado em 100% das etapas",
      "Processo em total conformidade com a LGPD",
    ],
    variants: [
      {
        id: "rs-operacional",
        label: "Vaga Operacional / Administrativo",
        price: 1290,
        note: "Inclui triagem completa e envio de finalistas",
      },
      {
        id: "rs-especialista",
        label: "Vaga Técnica / Comercial / TI",
        price: 1890,
        note: "Inclui hunting ativo e testes técnicos",
      },
      {
        id: "rs-lideranca",
        label: "Vaga de Liderança / Gestão",
        price: 2690,
        note: "Inclui análise comportamental aprofundada",
      },
    ],
    featuredGroup: "top",
  },
  {
    handle: "executivo-de-contas-comercial-b2b",
    title: "Executivo de Contas Comercial B2B",
    type: "vaga",
    segmentSlug: "comercial-e-vendas",
    segmentName: "Comercial e Vendas",
    badge: "Vaga ativa • Rio Preto e Região",
    highlightTag: "Destaque",
    location: "São José do Rio Preto – SP (Híbrido)",
    regime: "CLT • Fixo + comissões",
    sla: "Entrevistas agendadas diretamente com o gestor",
    freeForCandidate: true,
    salaryRange: "R$ 4.200 + comissões atrativas",
    rating: 4.8,
    reviewCount: 96,
    image: "/images/area-comercial.jpg",
    summary:
      "Prospecção consultiva, gestão de carteira corporativa, negociação de contratos e expansão comercial no noroeste paulista.",
    description:
      "Buscamos profissional com excelente comunicação e visão consultiva para expandir a carteira B2B de empresa parceira em forte crescimento na região de São José do Rio Preto.",
    requirements: [
      "Experiência comprovada em vendas consultivas B2B",
      "Domínio de CRM e funil comercial",
      "Boa capacidade de negociação e apresentação de propostas",
      "CNH categoria B e disponibilidade para visitas regionais",
    ],
    benefits: [
      "Salário fixo competitivo + comissão sem teto",
      "Ajuda de custo e notebook corporativo",
      "Bonificação por metas trimestrais",
      "Candidatura gratuita pela plataforma MaZa",
    ],
    variants: [
      {
        id: "cand-padrao",
        label: "Candidatura Gratuita (Portal MaZa)",
        price: 0,
        note: "Sem taxas para candidatos",
      },
    ],
    featuredGroup: "top",
  },

  // MORE OPPORTUNITIES (6 cards in 2 rows of 3)
  {
    handle: "desenvolvedor-full-stack-pleno",
    title: "Desenvolvedor Full Stack (React / Node)",
    type: "vaga",
    segmentSlug: "tecnologia",
    segmentName: "Tecnologia e TI",
    badge: "Vaga Remota • Todo o Brasil",
    location: "100% Remoto (Brasil)",
    regime: "CLT ou PJ • Flexível",
    sla: "Processo ágil com desafio prático objetivo",
    freeForCandidate: true,
    salaryRange: "R$ 7.500 a R$ 10.500",
    rating: 4.9,
    reviewCount: 112,
    image: "/images/area-tecnologia.jpg",
    summary:
      "Desenvolvimento de aplicações web escaláveis em TypeScript, React, Next.js e APIs REST em time de produto ágil.",
    description:
      "Oportunidade 100% remota conduzida pela MaZa Empregos para empresa de tecnologia em expansão nacional. Ideal para quem busca autonomia técnica e produto em constante evolução.",
    requirements: [
      "Experiência sólida com TypeScript, React/Next.js e Node.js",
      "Conhecimento em bancos relacionais (PostgreSQL) e APIs REST",
      "Boas práticas com Git, testes automatizados e revisão de código",
    ],
    benefits: [
      "Trabalho 100% remoto com horário flexível",
      "Auxílio home office e plano de saúde",
      "Cultura de aprendizado contínuo",
    ],
    variants: [
      {
        id: "cand-padrao",
        label: "Candidatura Gratuita (Portal MaZa)",
        price: 0,
        note: "Triagem 100% online",
      },
    ],
    featuredGroup: "more",
  },
  {
    handle: "supervisor-de-producao-industrial",
    title: "Supervisor de Produção Industrial",
    type: "vaga",
    segmentSlug: "industria-e-operacoes",
    segmentName: "Indústria e Operações",
    badge: "Vaga ativa • Indústria",
    location: "São José do Rio Preto – SP (Presencial)",
    regime: "CLT • Turno comercial",
    sla: "Início imediato após aprovação",
    freeForCandidate: true,
    salaryRange: "R$ 5.800 a R$ 7.200",
    rating: 4.8,
    reviewCount: 84,
    image: "/images/area-industria.jpg",
    summary:
      "Gestão de equipes fabris, indicadores de produtividade (OEE), segurança do trabalho e melhoria contínua.",
    description:
      "Indústria parceira de médio porte busca Supervisor de Produção com experiência em liderança de equipes operacionais, controle de qualidade e cumprimento de metas de entrega.",
    requirements: [
      "Formação técnica ou superior em Engenharia de Produção ou áreas correlatas",
      "Experiência em liderança de chão de fábrica e ferramentas Lean/5S",
      "Forte atuação em segurança do trabalho e metas de produção",
    ],
    benefits: [
      "Refeitório no local e vale-alimentação",
      "Participação nos resultados (PLR)",
      "Plano de saúde extensivo a dependentes",
    ],
    variants: [
      {
        id: "cand-padrao",
        label: "Candidatura Gratuita (Portal MaZa)",
        price: 0,
        note: "Processo transparente e gratuito",
      },
    ],
    featuredGroup: "more",
  },
  {
    handle: "coordenador-de-logistica-e-estoque",
    title: "Coordenador de Logística e Estoque",
    type: "vaga",
    segmentSlug: "logistica",
    segmentName: "Logística",
    badge: "Vaga ativa • Supply Chain",
    location: "Mirassol / São José do Rio Preto – SP",
    regime: "CLT • Segunda a sexta",
    sla: "Seleção em andamento",
    freeForCandidate: true,
    salaryRange: "R$ 5.200 a R$ 6.400",
    rating: 4.9,
    reviewCount: 73,
    image: "/images/area-logistica.jpg",
    summary:
      "Coordenação de recebimento, armazenagem, inventário, roteirização de entregas e indicadores de acuracidade.",
    description:
      "Centro de distribuição na região de Rio Preto procura Coordenador(a) de Logística para liderar operações de estoque e expedição com foco em SLA e redução de avarias.",
    requirements: [
      "Experiência em coordenação logística, WMS e gestão de inventário",
      "Liderança de equipes de separação, conferência e expedição",
      "Conhecimento em indicadores de nível de serviço (OTIF)",
    ],
    benefits: [
      "Vale-alimentação e seguro de vida",
      "Plano de saúde corporativo",
      "Bônus por performance operacional",
    ],
    variants: [
      {
        id: "cand-padrao",
        label: "Candidatura Gratuita (Portal MaZa)",
        price: 0,
        note: "Cadastro online gratuito",
      },
    ],
    featuredGroup: "more",
  },
  {
    handle: "analise-de-perfil-comportamental",
    title: "Análise de Perfil Comportamental",
    type: "consultoria",
    segmentSlug: "maza-consulting",
    segmentName: "MaZa Consulting",
    badge: "MaZa Consulting • Diagnóstico RH",
    location: "Atendimento 100% online",
    regime: "Relatório individual ou por equipe",
    sla: "Devolutiva técnica em até 48 horas úteis",
    pricePix: 390,
    priceCard: 450,
    rating: 5.0,
    reviewCount: 164,
    image: "/images/area-lideranca.jpg",
    summary:
      "Mapeamento comportamental completo para contratações mais seguras, promoções internas e desenvolvimento de líderes.",
    description:
      "Serviço especializado do núcleo MaZa Consulting para mensurar perfil comportamental, motivadores, estilo de liderança e aderência à função antes de contratar ou promover.",
    requirements: [
      "Aplicação 100% digital com acompanhamento de especialista MaZa",
      "Relatório detalhado de competências, pontos fortes e pontos de atenção",
      "Sessão de devolutiva online com o gestor ou RH da empresa",
    ],
    benefits: [
      "Decisões de contratação e promoção baseadas em dados",
      "Aumento de assertividade no fit com cargo e liderança",
      "Entrega rápida e aplicável para qualquer porte de empresa",
    ],
    variants: [
      {
        id: "perfil-individual",
        label: "Avaliação Individual (1 profissional)",
        price: 390,
        note: "Inclui relatório completo + devolutiva",
      },
      {
        id: "perfil-pacote-5",
        label: "Pacote Equipe (5 avaliações)",
        price: 1650,
        note: "Economia de 15% para times e seleções",
      },
    ],
    featuredGroup: "more",
  },
  {
    handle: "pesquisa-de-clima-organizacional",
    title: "Pesquisa de Clima Organizacional",
    type: "consultoria",
    segmentSlug: "maza-consulting",
    segmentName: "MaZa Consulting",
    badge: "MaZa Consulting • Cultura & Engajamento",
    location: "Atendimento online para todo o Brasil",
    regime: "Projeto consultivo completo",
    sla: "Diagnóstico e plano de ação em 15 dias",
    pricePix: 2100,
    priceCard: 2450,
    rating: 4.9,
    reviewCount: 89,
    image: "/images/career-growth.jpg",
    summary:
      "Diagnóstico confidencial do ambiente de trabalho com indicadores claros e plano de ação prático para reter talentos.",
    description:
      "A MaZa Consulting estrutura, aplica e tabula sua Pesquisa de Clima Organizacional com sigilo garantido, transformando a percepção dos colaboradores em ações concretas de melhoria.",
    requirements: [
      "Personalização do questionário conforme realidade da empresa",
      "Coleta anônima 100% digital e segura (LGPD)",
      "Dashboard executivo por área + apresentação de plano de ação",
    ],
    benefits: [
      "Identificação precoce de causas de turnover",
      "Fortalecimento do engajamento e da marca empregadora",
      "Acompanhamento de especialistas em Gestão de Pessoas",
    ],
    variants: [
      {
        id: "clima-pme",
        label: "Empresas até 50 colaboradores",
        price: 2100,
        note: "Diagnóstico completo + reunião de entrega",
      },
      {
        id: "clima-medio",
        label: "Empresas de 51 a 200 colaboradores",
        price: 3600,
        note: "Inclui recortes por departamento",
      },
    ],
    featuredGroup: "more",
  },
  {
    handle: "treinamentos-corporativos-e-lideranca",
    title: "Treinamentos Corporativos e Liderança",
    type: "consultoria",
    segmentSlug: "maza-consulting",
    segmentName: "MaZa Consulting",
    badge: "MaZa Consulting • Capacitação",
    location: "Online ao vivo ou In-Company (Região)",
    regime: "Workshops e trilhas sob medida",
    sla: "Conteúdo desenhado para as dores do seu time",
    pricePix: 1850,
    priceCard: 2150,
    rating: 4.9,
    reviewCount: 105,
    image: "/images/hero-professional.jpg",
    summary:
      "Programas práticos de comunicação, liderança, atendimento, vendas e feedback para elevar a performance das equipes.",
    description:
      "Desenvolvemos treinamentos corporativos sob medida para preparar líderes e equipes para os desafios reais do negócio, com dinâmicas aplicáveis desde o primeiro dia.",
    requirements: [
      "Diagnóstico prévio das necessidades da equipe",
      "Material didático digital e certificados de participação",
      "Avaliação de reação e recomendações de continuidade",
    ],
    benefits: [
      "Lideranças mais preparadas para dar feedback e cobrar metas",
      "Melhoria direta no clima e na produtividade",
      "Formatos flexíveis para equipes presenciais ou remotas",
    ],
    variants: [
      {
        id: "treino-workshop",
        label: "Workshop Temático (4 horas)",
        price: 1850,
        note: "Turmas de até 25 participantes",
      },
      {
        id: "treino-trilha",
        label: "Trilha de Liderança (4 módulos)",
        price: 4900,
        note: "Acompanhamento mensal de gestores",
      },
    ],
    featuredGroup: "more",
  },

  // SOLUTIONS GRID (6 more cards for HiringSolutions section)
  {
    handle: "avaliacao-360-e-cargos",
    title: "Avaliação 360° e Perfil de Cargos",
    type: "consultoria",
    segmentSlug: "maza-consulting",
    segmentName: "MaZa Consulting",
    badge: "MaZa Consulting • Performance",
    location: "100% Online",
    regime: "Projeto consultivo",
    sla: "Estruturação completa em até 20 dias",
    pricePix: 2490,
    priceCard: 2890,
    rating: 4.9,
    reviewCount: 61,
    image: "/images/area-lideranca.jpg",
    summary:
      "Descrição de cargos, matriz de competências e ciclos de avaliação 360° para dar clareza de expectativas e meritocracia.",
    description:
      "Estruture a base da sua gestão de pessoas com descrição clara de cargos e avaliação 360° conduzida pela equipe da MaZa Consulting.",
    requirements: [
      "Mapeamento de funções, responsabilidades e competências-chave",
      "Aplicação estruturada da Avaliação 360°",
      "Relatório de PDI (Plano de Desenvolvimento Individual)",
    ],
    benefits: [
      "Clareza de papel para cada membro do time",
      "Base sólida para promoções e planos de carreira",
      "Redução de ruídos entre áreas e lideranças",
    ],
    variants: [
      {
        id: "av-360-base",
        label: "Ciclo Inicial (até 15 avaliados)",
        price: 2490,
        note: "Inclui relatórios individuais e executivo",
      },
    ],
    featuredGroup: "solutions",
  },
  {
    handle: "aplicacao-de-testes-tecnicos-e-rh",
    title: "Aplicação de Testes Técnicos e de RH",
    type: "consultoria",
    segmentSlug: "maza-consulting",
    segmentName: "MaZa Consulting",
    badge: "MaZa Consulting • Avaliação",
    location: "100% Online",
    regime: "Por candidato ou pacote",
    sla: "Resultado e parecer em até 24h úteis",
    pricePix: 290,
    priceCard: 340,
    rating: 4.8,
    reviewCount: 118,
    image: "/images/area-administrativo.jpg",
    summary:
      "Testes práticos, raciocínio lógico, redação, Excel e conduta profissional para validar finalistas com segurança.",
    description:
      "Valide na prática as competências técnicas e a postura profissional dos candidatos do seu processo seletivo com testes aplicados e corrigidos pela MaZa Empregos.",
    requirements: [
      "Seleção da bateria de testes conforme o cargo",
      "Aplicação monitorada online",
      "Parecer técnico objetivo para apoiar a decisão final",
    ],
    benefits: [
      "Evita contratações desalinhadas com o nível técnico exigido",
      "Agilidade na comparação entre finalistas",
      "Excelente custo-benefício para RHs enxutos",
    ],
    variants: [
      {
        id: "teste-unit",
        label: "Bateria Individual (1 candidato)",
        price: 290,
        note: "Parecer entregue em 24h úteis",
      },
      {
        id: "teste-pack-5",
        label: "Pacote 5 Candidatos",
        price: 1190,
        note: "Ideal para etapa final de seleção",
      },
    ],
    featuredGroup: "solutions",
  },
  {
    handle: "job-hunter-e-recolocacao-profissional",
    title: "Orientação de Carreira & Job Hunter",
    type: "vaga",
    segmentSlug: "lideranca-e-rh",
    segmentName: "Liderança e RH",
    badge: "Para Candidatos • Transição de Carreira",
    location: "Atendimento 100% online",
    regime: "Mentoria e direcionamento",
    sla: "Acompanhamento com especialistas de RH",
    freeForCandidate: true,
    salaryRange: "Cadastro gratuito no banco de talentos",
    rating: 5.0,
    reviewCount: 245,
    image: "/images/career-growth.jpg",
    summary:
      "Apoio estratégico para profissionais em busca do primeiro emprego ou transição de carreira, conectando seu perfil às vagas certas.",
    description:
      "A MaZa Empregos vai muito além de um mural de vagas: atuamos como ponte estratégica e Job Hunter para potencializar sua empregabilidade e aproximar seu currículo das empresas contratantes.",
    requirements: [
      "Currículo atualizado cadastrado diretamente na plataforma oficial",
      "Definição clara de área de interesse e objetivo profissional",
      "Disponibilidade para entrevistas online ou presenciais",
    ],
    benefits: [
      "Cadastro no banco de talentos 100% gratuito",
      "Acesso a vagas exclusivas de empresas parceiras",
      "Proteção integral dos seus dados pessoais (LGPD)",
    ],
    variants: [
      {
        id: "cand-padrao",
        label: "Cadastro no Banco de Talentos (Grátis)",
        price: 0,
        note: "Nunca solicitamos dados bancários",
      },
    ],
    featuredGroup: "solutions",
  },
  {
    handle: "entrevista-de-desligamento-estruturada",
    title: "Entrevista de Desligamento Estruturada",
    type: "consultoria",
    segmentSlug: "maza-consulting",
    segmentName: "MaZa Consulting",
    badge: "MaZa Consulting • Retenção",
    location: "Atendimento 100% online",
    regime: "Por demanda ou mensal",
    sla: "Relatório confidencial em até 72 horas",
    pricePix: 420,
    priceCard: 490,
    rating: 4.9,
    reviewCount: 54,
    image: "/images/recruitment-specialist.jpg",
    summary:
      "Escuta neutra e profissional com colaboradores desligados para descobrir gargalos reais de gestão e reduzir o turnover.",
    description:
      "Quando realizada por uma consultoria externa imparcial como a MaZa, a entrevista de desligamento traz respostas sinceras e insights estratégicos para melhorar a retenção.",
    requirements: [
      "Condução humanizada por psicólogo/consultor de RH",
      "Relatório de causas-raiz e recomendações para a diretoria",
      "Total confidencialidade e ética profissional",
    ],
    benefits: [
      "Visão imparcial sobre liderança, processos e clima",
      "Proteção da imagem empregadora da empresa",
      "Insumos reais para reduzir custos com rotatividade",
    ],
    variants: [
      {
        id: "deslig-avulsa",
        label: "Entrevista Avulsa + Relatório",
        price: 420,
        note: "Condução 100% online",
      },
    ],
    featuredGroup: "solutions",
  },
  {
    handle: "analista-de-recursos-humanos-generalista",
    title: "Analista de Recursos Humanos Generalista",
    type: "vaga",
    segmentSlug: "lideranca-e-rh",
    segmentName: "Liderança e RH",
    badge: "Vaga ativa • Rio Preto",
    location: "São José do Rio Preto – SP (Presencial)",
    regime: "CLT • Segunda a sexta",
    sla: "Triagem em andamento",
    freeForCandidate: true,
    salaryRange: "R$ 3.800 a R$ 4.900",
    rating: 4.9,
    reviewCount: 68,
    image: "/images/area-lideranca.jpg",
    summary:
      "Atuação com recrutamento interno, onboarding, treinamentos, endomarketing e interface com departamento pessoal.",
    description:
      "Empresa de serviços em São José do Rio Preto busca Analista de RH Generalista para estruturar rotinas de atração, integração e desenvolvimento de pessoas.",
    requirements: [
      "Formação em Psicologia, Administração ou Gestão de RH",
      "Vivência em recrutamento, integração e ações de clima",
      "Boa comunicação interpessoal e perfil consultivo",
    ],
    benefits: [
      "Vale-alimentação e vale-transporte",
      "Assistência médica e odontológica",
      "Processo gratuito pelo portal MaZa",
    ],
    variants: [
      {
        id: "cand-padrao",
        label: "Candidatura Gratuita (Portal MaZa)",
        price: 0,
        note: "Cadastro online gratuito",
      },
    ],
    featuredGroup: "solutions",
  },
  {
    handle: "assistente-de-atendimento-e-sucesso-do-cliente",
    title: "Analista de Atendimento e Sucesso do Cliente",
    type: "vaga",
    segmentSlug: "comercial-e-vendas",
    segmentName: "Comercial e Vendas",
    badge: "Vaga ativa • Híbrido",
    location: "São José do Rio Preto – SP (Híbrido)",
    regime: "CLT • Escala 5x2",
    sla: "Retorno ágil pela plataforma",
    freeForCandidate: true,
    salaryRange: "R$ 2.800 a R$ 3.600 + bônus",
    rating: 4.8,
    reviewCount: 79,
    image: "/images/area-comercial.jpg",
    summary:
      "Relacionamento pós-venda, onboarding de clientes, acompanhamento de satisfação (NPS) e retenção de carteira.",
    description:
      "Vaga para profissional empático(a) e organizado(a) garantir uma excelente jornada aos clientes corporativos de empresa parceira em crescimento.",
    requirements: [
      "Experiência com atendimento consultivo, pós-venda ou Customer Success",
      "Excelente comunicação escrita e verbal",
      "Familiaridade com ferramentas digitais e CRM",
    ],
    benefits: [
      "Regime híbrido após período de integração",
      "Vale-alimentação e plano de saúde",
      "Bônus por indicadores de NPS",
    ],
    variants: [
      {
        id: "cand-padrao",
        label: "Candidatura Gratuita (Portal MaZa)",
        price: 0,
        note: "Envio online gratuito",
      },
    ],
    featuredGroup: "solutions",
  },
];

export function getOpportunityByHandle(handle: string): OpportunityItem | undefined {
  return OPPORTUNITIES.find((item) => item.handle === handle);
}

export function getOpportunitiesBySegment(slug?: string, type?: OpportunityType): OpportunityItem[] {
  return OPPORTUNITIES.filter((item) => {
    const matchesType = type ? item.type === type : true;
    const matchesSlug = slug ? item.segmentSlug === slug : true;
    return matchesType && matchesSlug;
  });
}

export function searchOpportunities(query: string): OpportunityItem[] {
  const normalized = query.trim().toLowerCase();
  if (!normalized) return OPPORTUNITIES;
  return OPPORTUNITIES.filter((item) => {
    const haystack = [
      item.title,
      item.segmentName,
      item.location,
      item.summary,
      item.badge,
      item.regime,
      ...item.requirements,
    ]
      .join(" ")
      .toLowerCase();
    return haystack.includes(normalized);
  });
}

export const PARTNER_SECTORS = [
  { name: "Indústria & Manufatura", initials: "IND", subtitle: "Produção e Engenharia" },
  { name: "Comércio & Varejo", initials: "VAR", subtitle: "Lojas e Redes" },
  { name: "Agronegócio Paulista", initials: "AGR", subtitle: "Gestão e Operações" },
  { name: "Tecnologia & SaaS", initials: "TEC", subtitle: "TI e Inovação" },
  { name: "Saúde & Clínicas", initials: "SAU", subtitle: "Hospitais e Labs" },
  { name: "Logística & Frota", initials: "LOG", subtitle: "CDs e Transportes" },
  { name: "Serviços Corporativos", initials: "SRV", subtitle: "B2B e Escritórios" },
  { name: "Construção & Engenharia", initials: "ENG", subtitle: "Obras e Projetos" },
  { name: "Alimentos & Bebidas", initials: "ALI", subtitle: "Distribuição" },
  { name: "Educação & Ensino", initials: "EDU", subtitle: "Instituições" },
  { name: "Finanças & Contábil", initials: "FIN", subtitle: "Controladoria" },
  { name: "E-commerce & Digital", initials: "DIG", subtitle: "Operação Online" },
];

export const COVERAGE_REGIONS = [
  {
    region: "Noroeste Paulista",
    cities: [
      "São José do Rio Preto",
      "Mirassol",
      "Bady Bassitt",
      "Catanduva",
      "Votuporanga",
      "Olímpia",
    ],
  },
  {
    region: "Região de Rio Preto",
    cities: [
      "José Bonifácio",
      "Cedral",
      "Guapiaçu",
      "Monte Aprazível",
      "Tanabi",
      "Fernandópolis",
    ],
  },
  {
    region: "Interior de São Paulo",
    cities: [
      "Ribeirão Preto",
      "Araçatuba",
      "Bauru",
      "Campinas",
      "São Carlos",
      "Araraquara",
    ],
  },
  {
    region: "Abrangência Online",
    cities: [
      "São Paulo (Capital)",
      "Grande São Paulo",
      "Vagas Híbridas",
      "Vagas 100% Remotas",
      "Consultoria Nacional",
    ],
  },
];

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  image: string;
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "como-montar-curriculo-assertivo",
    title: "Como estruturar um currículo objetivo que chama a atenção dos recrutadores",
    excerpt:
      "Saiba quais informações realmente fazem diferença na triagem, como destacar resultados práticos e os erros mais comuns que eliminam bons candidatos logo no início.",
    category: "Carreira",
    readTime: "4 min de leitura",
    image: "/images/career-growth.jpg",
  },
  {
    slug: "fit-cultural-no-recrutamento-e-selecao",
    title: "Por que o fit cultural reduz o turnover nos primeiros 90 dias de contratação?",
    excerpt:
      "Contratar apenas pelo currículo técnico pode gerar alto custo de reposição. Veja como a MaZa avalia competências comportamentais alinhadas à cultura da sua empresa.",
    category: "Para Empresas",
    readTime: "5 min de leitura",
    image: "/images/hero-professional.jpg",
  },
  {
    slug: "preparacao-entrevista-online",
    title: "Entrevista online: 7 boas práticas para se destacar em processos seletivos",
    excerpt:
      "Com a digitalização do RH, saber comunicar sua trajetória por vídeo virou habilidade essencial. Confira o checklist completo preparado por nossos especialistas.",
    category: "Entrevistas",
    readTime: "3 min de leitura",
    image: "/images/recruitment-specialist.jpg",
  },
  {
    slug: "pesquisa-de-clima-como-aplicar",
    title: "Pesquisa de clima organizacional: quando aplicar e como transformar dados em ação",
    excerpt:
      "Entenda como ouvir sua equipe de forma anônima e estruturada ajuda gestores a corrigir gargalos, engajar talentos e aumentar a produtividade.",
    category: "MaZa Consulting",
    readTime: "6 min de leitura",
    image: "/images/area-lideranca.jpg",
  },
  {
    slug: "transicao-de-carreira-com-estrategia",
    title: "Transição de carreira com segurança: o papel do Job Hunter na sua recolocação",
    excerpt:
      "Mudar de área ou buscar um novo patamar profissional exige planejamento. Veja como mapear suas competências transferíveis e se posicionar no mercado.",
    category: "Recolocação",
    readTime: "4 min de leitura",
    image: "/images/area-administrativo.jpg",
  },
  {
    slug: "lgpd-no-recrutamento-digital",
    title: "Segurança de dados e LGPD: o que observar ao cadastrar seu currículo na internet",
    excerpt:
      "A MaZa Empregos nunca cobra taxas de candidatos e nunca solicita dados bancários. Entenda seus direitos e como protegemos suas informações.",
    category: "Segurança & LGPD",
    readTime: "3 min de leitura",
    image: "/images/area-tecnologia.jpg",
  },
];

export const FAQ_CANDIDATOS = [
  {
    question: "O cadastro de currículo na MaZa Empregos é gratuito?",
    answer:
      "Sim! O cadastro de currículo, a busca por oportunidades e a participação em processos seletivos pela MaZa Empregos são 100% gratuitos para todos os candidatos.",
  },
  {
    question: "Posso enviar meu currículo por e-mail ou entregar pessoalmente?",
    answer:
      "Não recebemos currículos por e-mail nem realizamos atendimento presencial para entrega física. Para concorrer às vagas com segurança e conformidade à LGPD, cadastre seu currículo diretamente no site oficial e candidate-se às oportunidades de interesse.",
  },
  {
    question: "A MaZa Empregos pede dados bancários no cadastro?",
    answer:
      "Nunca. A MaZa Empregos não solicita informações bancárias, senhas ou pagamentos para cadastro de currículo ou participação em entrevistas. Em caso de dúvida, fale conosco pelos canais oficiais.",
  },
  {
    question: "Quem faz a convocação para as entrevistas finais?",
    answer:
      "Após a triagem inicial e alinhamento de perfil, a seleção final e o agendamento de entrevistas podem ser conduzidos pela equipe de recrutamento da MaZa ou diretamente pelas empresas contratantes.",
  },
  {
    question: "Atuam apenas em São José do Rio Preto?",
    answer:
      "Temos forte atuação em São José do Rio Preto (SP) e todo o noroeste paulista desde 2011, além de vagas presenciais no interior de SP, híbridas e 100% remotas com abrangência nacional.",
  },
];

export const FAQ_EMPRESAS = [
  {
    question: "Quais tipos de vagas a MaZa Empregos recruta?",
    answer:
      "Atendemos demandas de todos os níveis hierárquicos: perfis operacionais, administrativos, comerciais, técnicos, tecnologia/TI, especialistas e cargos de liderança/gestão.",
  },
  {
    question: "O que inclui o MaZa Consulting (Consultoria de RH)?",
    answer:
      "Nosso núcleo de consultoria oferece Recrutamento e Seleção estratégico, análise de perfil comportamental, aplicação de testes técnicos e de conduta, pesquisa de clima organizacional, avaliação 360°, avaliação de perfil de cargos, treinamentos corporativos e entrevistas de desligamento.",
  },
  {
    question: "Como funciona a abertura de uma vaga para minha empresa?",
    answer:
      "Basta preencher o briefing rápido na seção Recrutamento e Seleção ou falar com nosso time pelo WhatsApp (17) 99703-2045. Realizamos o alinhamento cultural e técnico online e iniciamos a triagem e hunting de talentos imediatamente.",
  },
  {
    question: "Os dados da empresa e dos candidatos seguem a LGPD?",
    answer:
      "Sim. Todo o fluxo da plataforma MaZa Empregos opera em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018), com consentimento explícito e controle de acesso restrito.",
  },
];
