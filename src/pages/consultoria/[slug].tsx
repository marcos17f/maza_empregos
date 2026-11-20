import Head from "next/head";
import { useRouter } from "next/router";
import { SEGMENTS } from "@/data/catalog";
import CatalogTemplate from "@/ui/catalog/catalogTemplate";

export default function ConsultoriaBySegmentPage() {
  const router = useRouter();
  const slug = typeof router.query.slug === "string" ? router.query.slug : "";
  const segment = SEGMENTS.find((item) => item.slug === slug);

  return (
    <>
      <Head>
        <title>{segment ? segment.name : "MaZa Consulting"} | MaZa Empregos</title>
        <meta
          name="description"
          content={segment?.description ?? "Soluções de consultoria em Recursos Humanos pela MaZa Empregos."}
        />
      </Head>
      <CatalogTemplate mode="consultoria" slug={slug} />
    </>
  );
}
