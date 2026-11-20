import type { RealVacancy } from "@/data/realVacancies";

export const VACANCY_PHOTOS = {
  concessionaria: "/images/vagas/vaga-concessionaria.jpg",
  vendasVarejo: "/images/vagas/vaga-vendas-varejo.jpg",
  vendasCaixa: "/images/vagas/vaga-vendas-caixa.jpg",
  sacRecepcao: "/images/vagas/vaga-sac-recepcao.jpg",
  comercialB2b: "/images/vagas/vaga-comercial-b2b.jpg",
  servicosGerais: "/images/vagas/vaga-servicos-gerais.jpg",
  industriaSolda: "/images/vagas/vaga-industria-solda.jpg",
  construcaoObras: "/images/vagas/vaga-transporte-entregas.jpg",
  tecnicoProjetos: "/images/vagas/vaga-tecnico-projetos.jpg",
  tecnologiaDev: "/images/vagas/vaga-tecnologia-dev.webp",
  logisticaEstoque: "/images/vagas/vaga-logistica-estoque.jpg",
  liderancaRh: "/images/vagas/vaga-lideranca-rh.jpg",
  administrativoFiscal: "/images/vagas/vaga-administrativo-fiscal.jpg",
  saudeClinica: "/images/vagas/vaga-saude-clinica.jpg",
  gastronomia: "/images/vagas/vaga-gastronomia.jpg",
  marketingDigital: "/images/vagas/vaga-marketing-digital.jpg",
  contabilidade: "/images/vagas/vaga-contabilidade.jpg",
  motoristaFrota: "/images/vagas/vaga-motorista-frota.jpg",
  remotoHomeoffice: "/images/vagas/vaga-remoto-homeoffice.jpg",
  suporteAtendimento: "/images/vagas/vaga-suporte-atendimento.jpg",
} as const;

const ROLE_RULES: { pattern: RegExp; images: readonly string[] }[] = [
  {
    pattern:
      /sa[úu]de|biom[ée]dic|enfermeir|farmac[êe]ut|fonoaudi[óo]log|cuidador|m[ée]dic|odont|fisioterap|hospital|laborat[óo]rio/i,
    images: [VACANCY_PHOTOS.saudeClinica],
  },
  {
    pattern:
      /restaurante|cozinh|cozinheir|gastronom|padeir|confeit|a[çc]ougu|gar[çc]om|barista|alimento|churrasc|lanchonete/i,
    images: [VACANCY_PHOTOS.gastronomia],
  },
  {
    pattern: /concession[áa]ria|ve[íi]culo|autom[óo]vel|automotiv|carro|moto\b|oficina mec/i,
    images: [VACANCY_PHOTOS.concessionaria],
  },
  {
    pattern: /motorista|entregador|frete|rodovia|vendedor\s*\(a\)\s*externo|porta a porta|\bpap\b/i,
    images: [VACANCY_PHOTOS.motoristaFrota],
  },
  {
    pattern: /marketing|marketplace|e-?commerce|social media|tr[áa]fego|m[íi]dia|analista de dados|\bbi\b/i,
    images: [VACANCY_PHOTOS.marketingDigital],
  },
  {
    pattern: /remoto|remotas|home\s?office|h[íi]brid|estagi[áa]rio|est[áa]gio/i,
    images: [VACANCY_PHOTOS.remotoHomeoffice, VACANCY_PHOTOS.suporteAtendimento],
  },
  {
    pattern:
      /limpeza|higieniza|servi[çc]os gerais|zelador|copeir|faxin|cl[íi]nica|est[ée]tica|beleza|instituto de beleza/i,
    images: [VACANCY_PHOTOS.servicosGerais],
  },
  {
    pattern:
      /desenvolvedor|programador|\.net\b|software|sistemas|full\s?stack|front-?end|back-?end|devops|analista de ti|\bt\.i\b|tecnologia/i,
    images: [VACANCY_PHOTOS.tecnologiaDev, VACANCY_PHOTOS.remotoHomeoffice],
  },
  {
    pattern: /help\s?desk|suporte t[ée]cnico|suporte ao cliente/i,
    images: [VACANCY_PHOTOS.suporteAtendimento, VACANCY_PHOTOS.tecnologiaDev],
  },
  {
    pattern: /sac\b|atendimento ao cliente|recepcionista|recep[çc][ãa]o|telemarketing/i,
    images: [VACANCY_PHOTOS.sacRecepcao, VACANCY_PHOTOS.suporteAtendimento],
  },
  {
    pattern: /loja de shopping|vendedor(?:a)?\s*[–-]\s*loja/i,
    images: [VACANCY_PHOTOS.vendasVarejo],
  },
  {
    pattern: /loja de roupas|moda|fitness|boutique/i,
    images: [VACANCY_PHOTOS.vendasCaixa],
  },
  {
    pattern: /operador(?:a)? de caixa|\bcaixa\b|livraria|balconista|padaria|supermercado|atendente/i,
    images: [VACANCY_PHOTOS.vendasCaixa, VACANCY_PHOTOS.vendasVarejo],
  },
  {
    pattern: /shopping|varejo|vendedor(?:a)?\b|promotor(?:a)?/i,
    images: [VACANCY_PHOTOS.vendasVarejo, VACANCY_PHOTOS.comercialB2b],
  },
  {
    pattern:
      /soldador|metal[úu]rgic|torneiro|usinagem|cnc\b|caldeireiro|serralheiro|produ[çc][ãa]o|f[áa]brica|ind[úu]stria/i,
    images: [VACANCY_PHOTOS.industriaSolda],
  },
  {
    pattern:
      /constru[çc][ãa]o civil|ajudante geral|auxiliar geral|pr[ée]-moldado|obra\b|pedreiro|trator|caminh[ãa]o|escavadeira/i,
    images: [VACANCY_PHOTOS.construcaoObras, VACANCY_PHOTOS.industriaSolda],
  },
  {
    pattern:
      /projetista|autocad|\bcad\b|engenh|arquitet|assistente t[ée]cnico|assessor(?:a)? t[ée]cnico|manuten[çc][ãa]o|eletricista|mec[âa]nico/i,
    images: [VACANCY_PHOTOS.tecnicoProjetos],
  },
  {
    pattern:
      /estoque|estoquista|almoxarifado|log[íi]stica|expedi[çc][ãa]o|separa[çc][ãa]o|conferente|empilhadeira|\bpcp\b/i,
    images: [VACANCY_PHOTOS.logisticaEstoque],
  },
  {
    pattern: /contabil|fiscal|faturamento|faturista|financeiro|cons[óo]rcio|licita[çc][ãa]o/i,
    images: [VACANCY_PHOTOS.contabilidade, VACANCY_PHOTOS.administrativoFiscal],
  },
  {
    pattern:
      /departamento pessoal|\brh\b|recursos humanos|recrutamento|supervisor|gerente|coordenador|l[íi]der|gestor|diretor/i,
    images: [VACANCY_PHOTOS.comercialB2b, VACANCY_PHOTOS.liderancaRh],
  },
  {
    pattern: /administrativ|escrit[óo]rio|backoffice|compras|auxiliar adm/i,
    images: [VACANCY_PHOTOS.administrativoFiscal, VACANCY_PHOTOS.contabilidade],
  },
  {
    pattern: /comercial|vendas|consultor|representante|sdr\b|hunter|prospec[çc][ãa]o|neg[óo]cios/i,
    images: [
      VACANCY_PHOTOS.comercialB2b,
      VACANCY_PHOTOS.liderancaRh,
      VACANCY_PHOTOS.suporteAtendimento,
    ],
  },
];

const CATEGORY_POOLS: Record<string, readonly string[]> = {
  "comercial-e-vendas": [
    VACANCY_PHOTOS.comercialB2b,
    VACANCY_PHOTOS.vendasVarejo,
    VACANCY_PHOTOS.vendasCaixa,
    VACANCY_PHOTOS.sacRecepcao,
    VACANCY_PHOTOS.suporteAtendimento,
  ],
  logistica: [VACANCY_PHOTOS.logisticaEstoque, VACANCY_PHOTOS.motoristaFrota],
  "industria-e-operacoes": [
    VACANCY_PHOTOS.industriaSolda,
    VACANCY_PHOTOS.servicosGerais,
    VACANCY_PHOTOS.construcaoObras,
    VACANCY_PHOTOS.tecnicoProjetos,
    VACANCY_PHOTOS.gastronomia,
  ],
  tecnologia: [
    VACANCY_PHOTOS.tecnologiaDev,
    VACANCY_PHOTOS.marketingDigital,
    VACANCY_PHOTOS.remotoHomeoffice,
    VACANCY_PHOTOS.tecnicoProjetos,
  ],
  "lideranca-e-rh": [
    VACANCY_PHOTOS.liderancaRh,
    VACANCY_PHOTOS.comercialB2b,
    VACANCY_PHOTOS.administrativoFiscal,
  ],
  administrativo: [
    VACANCY_PHOTOS.administrativoFiscal,
    VACANCY_PHOTOS.contabilidade,
    VACANCY_PHOTOS.remotoHomeoffice,
    VACANCY_PHOTOS.sacRecepcao,
  ],
};

function stableIndex(seed: string, length: number): number {
  let hash = 0;
  for (let i = 0; i < seed.length; i += 1) {
    hash = (hash * 31 + seed.charCodeAt(i)) >>> 0;
  }
  return hash % length;
}

export function resolveVacancyImage(
  vacancy: Pick<RealVacancy, "id" | "title" | "categorySlug" | "description">,
): string {
  const title = vacancy.title || "";
  const snippet = (vacancy.description || "").slice(0, 320);
  const seed = `${vacancy.id}-${title}-${snippet.slice(0, 80)}`;

  // Check if a generic title like "Supervisor" has specific context in description (e.g. SAC vs Telecom/Vendas)
  const combinedHeader = `${title} ${snippet.slice(0, 140)}`;
  if (/^supervisor$/i.test(title.trim())) {
    if (/\bsac\b|atendimento ao cliente/i.test(combinedHeader)) {
      return VACANCY_PHOTOS.suporteAtendimento;
    }
    if (/telecom|vendedores|vendas|comercial/i.test(combinedHeader)) {
      return VACANCY_PHOTOS.comercialB2b;
    }
  }

  for (const rule of ROLE_RULES) {
    if (rule.pattern.test(title)) {
      return rule.images[stableIndex(seed, rule.images.length)] ?? rule.images[0];
    }
  }

  for (const rule of ROLE_RULES) {
    if (rule.pattern.test(snippet)) {
      return rule.images[stableIndex(seed, rule.images.length)] ?? rule.images[0];
    }
  }

  const pool = CATEGORY_POOLS[vacancy.categorySlug] ?? [
    VACANCY_PHOTOS.comercialB2b,
    VACANCY_PHOTOS.administrativoFiscal,
    VACANCY_PHOTOS.liderancaRh,
    VACANCY_PHOTOS.remotoHomeoffice,
  ];
  return pool[stableIndex(seed, pool.length)] ?? VACANCY_PHOTOS.comercialB2b;
}

export function resolveVacancyCategoryName(
  vacancy: Pick<RealVacancy, "title" | "categoryName" | "description">,
): string {
  const t = (vacancy.title || "").toLowerCase();
  if (/desenvolvedor|programador|\.net\b|\bti\b|\bt\.i\b|software|sistemas|suporte t[ée]cnico/.test(t)) {
    return "Tecnologia e TI";
  }
  if (/soldador|metal[úu]rgic|mec[âa]nico|eletricista|produ[çc][ãa]o|servi[çc]os gerais|limpeza|ajudante|projetista|constru[çc][ãa]o/.test(t)) {
    return "Indústria e Operações";
  }
  if (/vendedor|vendas|comercial|consultor|\bsac\b|atendente|atendimento|recepcionista|caixa|loja|shopping|livraria|concession[áa]ria/.test(t)) {
    return "Comercial e Vendas";
  }
  if (/log[íi]stica|estoque|estoquista|expedi[çc][ãa]o|motorista|entregador|empilhadeira|almoxarifado/.test(t)) {
    return "Logística";
  }
  if (/gerente|coordenador|supervisor|l[íi]der|\brh\b|departamento pessoal|diretor/.test(t)) {
    return "Liderança e RH";
  }
  if (/administrativ|financeiro|fiscal|cont[áa]bil|faturamento|faturista|licita[çc][ãa]o/.test(t)) {
    return "Administrativo";
  }
  return vacancy.categoryName;
}
