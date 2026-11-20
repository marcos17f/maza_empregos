import Head from "next/head";
import { useRouter } from "next/router";
import { SEGMENTS } from "@/data/catalog";
import RealVacancyBoard from "@/ui/vagas/realVacancyBoard";

export default function VagasBySegmentPage() {
  const router = useRouter();
  const slug = typeof router.query.slug === "string" ? router.query.slug : "";
  const segment = SEGMENTS.find((item) => item.slug === slug);

  return (
    <div className="pt-4">
      <Head>
        <title>{segment ? `Vagas de ${segment.name}` : "Vagas"} | MaZa Empregos</title>
        <meta
          name="description"
          content={`Vagas abertas na área de ${segment?.name ?? "atuação"} na MaZa Empregos. Cadastro gratuito e seguro pela LGPD.`}
        />
      </Head>
      <RealVacancyBoard initialCategory={slug} />
    </div>
  );
}
