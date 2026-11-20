export const MAZA_CONTACT = {
  brandName: "MaZa Empregos",
  tagline: "Mais do que uma agência de empregos — Recrutamento, Seleção e Consultoria de RH",
  email: "contato@mazaempregos.com.br",
  whatsappPrimaryDisplay: "(17) 99703-2045",
  whatsappPrimaryNumber: "5517997032045",
  whatsappSecondaryDisplay: "(17) 98844-5009",
  whatsappSecondaryNumber: "5517988445009",
  website: "https://www.mazaempregos.com.br",
  candidatePortal: "https://candidato.mazaempregos.com.br/login",
  companyPortal: "https://empresas.mazaempregos.com.br",
  whatsappGroupUrl: "https://chat.whatsapp.com/CSGMUZS73Yi8ZtV15KKcZz",
  instagram: "https://instagram.com/mazaempregos",
  facebook: "https://www.facebook.com/mazaempregos",
  facebookReviews: "https://www.facebook.com/mazaempregos/reviews",
  linkedin: "https://www.linkedin.com/company/mazaempregos/",
  youtube: "https://www.youtube.com/@mazaempregos/videos",
  tiktok: "https://www.tiktok.com/@mazaempregos",
  region: "São José do Rio Preto – SP, região e abrangência nacional",
  serviceMode: "Atendimento 100% online",
  businessHours: "Segunda a Sexta | 09h às 18h (exceto feriados nacionais)",
} as const;

export const SPECIALIST_MESSAGE =
  "Olá! Vim pelo site da MaZa Empregos e gostaria de falar com um especialista em Recrutamento e RH.";

export const QUOTE_MESSAGE =
  "Olá! Gostaria de saber mais sobre os serviços de Recrutamento e Seleção, MaZa Consulting e Aplicação de Testes para minha empresa.";

export const CANDIDATE_MESSAGE =
  "Olá! Sou candidato(a) e gostaria de tirar uma dúvida sobre cadastro de currículo e vagas na MaZa Empregos.";

export function whatsappLink(message: string, secondary = false): string {
  const number = secondary
    ? MAZA_CONTACT.whatsappSecondaryNumber
    : MAZA_CONTACT.whatsappPrimaryNumber;
  const safeMessage = message.replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDFFF]/g, (match) =>
    match.length === 2 ? match : "",
  );
  return `https://wa.me/${number}?text=${encodeURIComponent(safeMessage)}`;
}
