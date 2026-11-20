import type { NextApiRequest, NextApiResponse } from "next";
import { REAL_VACANCIES, type RealVacancy } from "@/data/realVacancies";
import { parseMazaVacanciesHtml } from "@/lib/parseMazaVacancies";

type ApiResponse = {
  vacancies: RealVacancy[];
  source: "live" | "snapshot";
  updatedAt: string;
};

const CACHE_TTL_MS = 15 * 60 * 1000;
let cached: { vacancies: RealVacancy[]; fetchedAt: number } | null = null;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse>,
) {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).end();
  }

  const now = Date.now();
  if (cached && now - cached.fetchedAt < CACHE_TTL_MS) {
    res.setHeader("Cache-Control", "s-maxage=900, stale-while-revalidate=1800");
    return res.status(200).json({
      vacancies: cached.vacancies,
      source: "live",
      updatedAt: new Date(cached.fetchedAt).toISOString(),
    });
  }

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 8000);
    const response = await fetch("https://candidato.mazaempregos.com.br/listvacancies", {
      signal: controller.signal,
      headers: {
        "User-Agent": "MaZaEmpregos-Web/1.0",
        Accept: "text/html",
      },
    });
    clearTimeout(timeoutId);

    if (response.ok) {
      const html = await response.text();
      const parsed = parseMazaVacanciesHtml(html);
      if (parsed.length > 0) {
        cached = { vacancies: parsed, fetchedAt: now };
        res.setHeader("Cache-Control", "s-maxage=900, stale-while-revalidate=1800");
        return res.status(200).json({
          vacancies: parsed,
          source: "live",
          updatedAt: new Date(now).toISOString(),
        });
      }
    }
  } catch {
    // Fallback automático para o snapshot local caso o portal oficial esteja lento/indisponível
  }

  res.setHeader("Cache-Control", "s-maxage=300, stale-while-revalidate=600");
  return res.status(200).json({
    vacancies: REAL_VACANCIES,
    source: "snapshot",
    updatedAt: new Date(now).toISOString(),
  });
}
