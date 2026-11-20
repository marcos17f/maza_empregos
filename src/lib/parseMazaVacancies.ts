import type { RealVacancy } from "@/data/realVacancies";
import { resolveVacancyImage } from "@/lib/vacancyMedia";

const ENTITY_MAP: Record<string, string> = {
  "&amp;": "&",
  "&lt;": "<",
  "&gt;": ">",
  "&quot;": '"',
  "&#039;": "'",
  "&#39;": "'",
  "&nbsp;": " ",
  "&ndash;": "–",
  "&mdash;": "—",
};

function sanitizeUnicode(str: string): string {
  return str.replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDFFF]/g, (match) =>
    match.length === 2 ? match : "",
  );
}

function decodeNumericEntity(codePoint: number): string {
  if (
    !Number.isInteger(codePoint) ||
    codePoint < 0 ||
    codePoint > 0x10ffff ||
    (codePoint >= 0xd800 && codePoint <= 0xdfff)
  ) {
    return "";
  }
  return String.fromCodePoint(codePoint);
}

function decodeEntities(str: string): string {
  return sanitizeUnicode(
    str
      .replace(/&(?:amp|lt|gt|quot|#0?39|nbsp|ndash|mdash);/g, (m) => ENTITY_MAP[m] ?? m)
      .replace(/&#(\d+);/g, (_, dec) => decodeNumericEntity(Number.parseInt(dec, 10)))
      .replace(/&#x([0-9a-fA-F]+);/g, (_, hex) => decodeNumericEntity(Number.parseInt(hex, 16))),
  );
}

function stripHtml(raw: string): string {
  const withBreaks = raw.replace(/<br\s*\/?>/gi, "\n");
  const withoutTags = decodeEntities(withBreaks.replace(/<[^>]+>/g, ""));
  const normalized = withoutTags
    .replace(/\u2028|\u2029/g, "\n")
    .replace(/\r\n?/g, "\n");

  const cleaned: string[] = [];
  let prevEmpty = false;
  for (const rawLine of normalized.split("\n")) {
    const line = rawLine.trim();
    if (!line) {
      if (!prevEmpty && cleaned.length > 0) cleaned.push("");
      prevEmpty = true;
    } else {
      cleaned.push(line);
      prevEmpty = false;
    }
  }
  return cleaned.join("\n").trim();
}

function extractBetterTitle(rawTitle: string, desc: string): string {
  const title = decodeEntities(rawTitle).trim();
  if (!["diversas vagas", "vaga", "vagas", "oportunidade"].includes(title.toLowerCase())) {
    return title;
  }

  const lines = desc.split("\n");
  for (const line of lines.slice(0, 12)) {
    const match = line.match(/(?:VAGA|CARGO|OPORTUNIDADE)\s*[:\-–]\s*\*?([^\*\n]+)\*?/i);
    if (match?.[1]) {
      const candidate = match[1].replace(/^[\s*•–\-📌💼🔥🚀✨]+|[\s*•–\-📌💼🔥🚀✨]+$/gu, "");
      if (candidate.length >= 3 && candidate.length <= 85) {
        return sanitizeUnicode(candidate);
      }
    }
  }

  for (const line of lines.slice(0, 6)) {
    const clean = line.replace(/[*_📌📍💼🔥🚀✨💻📢📣🎯]+/gu, "").trim();
    const low = clean.toLowerCase();
    if (
      clean.length >= 4 &&
      clean.length <= 75 &&
      !low.startsWith("empresa ") &&
      !low.startsWith("local") &&
      !low.startsWith("são josé") &&
      !low.startsWith("buscamos") &&
      !low.startsWith("estamos")
    ) {
      return sanitizeUnicode(clean);
    }
  }

  return sanitizeUnicode(title);
}

function extractField(desc: string, regexes: RegExp[]): string {
  for (const regex of regexes) {
    const match = desc.match(regex);
    if (match?.[1]) {
      const value = match[1]
        .replace(/^[\s*•–\-:]+|[\s*•–\-:]+$/g, "")
        .replace(/\s+/g, " ");
      if (value && value.length <= 120) return value;
    }
  }
  return "";
}

function matchCategorySlug(text: string): { slug: string; name: string } | null {
  const low = text.toLowerCase();
  if (
    /desenvolvedor|programador|\bt\.i\b|\bti\b|tecnologia|suporte t[ée]cnico|infraestrutura|sistemas|software|\.net\b/.test(
      low,
    )
  ) {
    return { slug: "tecnologia", name: "Tecnologia e TI" };
  }
  if (
    /soldador|metal[úu]rgic|mec[âa]nico|eletricista|produ[çc][ãa]o|ind[úu]stria|f[áa]brica|manuten[çc][ãa]o|operador de m[áa]quina|serralheiro|marceneiro|ajudante|servi[çc]os gerais|limpeza|zelador|projetista|torneiro|caldeireiro|cozinha|cozinheiro|padeiro|a[çc]ougue|constru[çc][ãa]o civil/.test(
      low,
    )
  ) {
    return { slug: "industria-e-operacoes", name: "Indústria e Operações" };
  }
  if (
    /vendedor|vendas|comercial|consultor|sdr\b|pr[ée]-vendas|telemarketing|atendente|atendimento|\bsac\b|balconista|\bcaixa\b|loja|shopping|corretor|promotor|recepcionista|concession[áa]ria/.test(
      low,
    )
  ) {
    return { slug: "comercial-e-vendas", name: "Comercial e Vendas" };
  }
  if (
    /log[íi]stica|estoquista|expedi[çc][ãa]o|motorista|entregador|empilhadeira|almoxarifado|transporte|carga|conferente|separa[çc][ãa]o/.test(
      low,
    )
  ) {
    return { slug: "logistica", name: "Logística" };
  }
  if (
    /gerente|coordenador|supervisor|l[íi]der|\brh\b|recursos humanos|departamento pessoal|recrutamento|gestor|diretor/.test(
      low,
    )
  ) {
    return { slug: "lideranca-e-rh", name: "Liderança e RH" };
  }
  if (/administrativ|financeiro|fiscal|cont[áa]bil|faturamento|licita[çc][ãa]o|escrit[óo]rio/.test(low)) {
    return { slug: "administrativo", name: "Administrativo" };
  }
  return null;
}

function classifyCategory(title: string, desc: string): {
  slug: string;
  name: string;
} {
  return (
    matchCategorySlug(title) ??
    matchCategorySlug(desc.slice(0, 350)) ?? {
      slug: "administrativo",
      name: "Administrativo",
    }
  );
}

function buildSummary(desc: string): string {
  const lines = desc
    .split("\n")
    .map((ln) => ln.replace(/[*_]+/g, "").trim())
    .filter(
      (ln) =>
        ln.length > 0 &&
        !/^(https?:|📲|📩|siga o passo|\*?as empresas|quer receber|solicite abaixo)/iu.test(ln),
    );
  const joined = sanitizeUnicode(lines.slice(0, 4).join(" • "));
  const chars = Array.from(joined);
  return chars.length > 190 ? `${chars.slice(0, 187).join("").trimEnd()}...` : joined;
}

export function parseMazaVacanciesHtml(htmlSource: string): RealVacancy[] {
  const pattern =
    /<b style="font-size: 22px;">([\s\S]*?)<\/b>\s*<br><br>\s*<p>([\s\S]*?)<\/p>\s*<br>\s*<a href="(https:\/\/candidato\.mazaempregos\.com\.br\/vacancies\/[^"]+)"[^>]*>Candidatar-se<\/a>/gi;

  const result: RealVacancy[] = [];
  let match: RegExpExecArray | null;
  let index = 0;

  while ((match = pattern.exec(htmlSource)) !== null) {
    index += 1;
    const rawTitle = match[1] ?? "";
    const rawDesc = match[2] ?? "";
    const applyUrl = match[3] ?? "https://candidato.mazaempregos.com.br/login";

    const description = stripHtml(rawDesc);
    const title = extractBetterTitle(rawTitle, description);
    const category = classifyCategory(title, description);

    const location =
      extractField(description, [/(?:📍|Local(?:idade)?|Cidade)\s*\*?[:\-–]?\*?\s*([^\n]+)/iu]) ||
      "São José do Rio Preto – SP e Região";

    const salary =
      extractField(description, [
        /(?:💰|Sal[áa]rio(?:\s+fixo)?|Remunera[çc][ãa]o)\s*\*?[:\-–]?\*?\s*([^\n]+)/iu,
      ]) || "A combinar / conforme vaga";

    const schedule =
      extractField(description, [
        /(?:🕒|🕓|Hor[áa]rio(?:\s+de\s+trabalho)?|Jornada|Escala)\s*\*?[:\-–]?\*?\s*([^\n]+)/iu,
      ]) || "Conforme escala da vaga";

    const id = `vaga-${index}`;
    const safeTitle = sanitizeUnicode(title);
    const safeDesc = sanitizeUnicode(description);

    result.push({
      id,
      portalTitle: decodeEntities(rawTitle).trim(),
      title: safeTitle,
      categorySlug: category.slug,
      categoryName: category.name,
      image: resolveVacancyImage({
        id,
        title: safeTitle,
        categorySlug: category.slug,
        description: safeDesc,
      }),
      location: sanitizeUnicode(location),
      salary: sanitizeUnicode(salary),
      schedule: sanitizeUnicode(schedule),
      summary: buildSummary(description),
      description: safeDesc,
      applyUrl,
    });
  }

  return result;
}
