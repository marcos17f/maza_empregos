import Head from "next/head";
import OfficialServicesSection from "@/ui/home/officialServicesSection";
import { OFFICIAL_SERVICES_INTRO } from "@/data/mazaOfficial";

export default function ServicosPage() {
  return (
    <div className="space-y-8 pt-4 font-WorkSans">
      <Head>
        <title>Serviços — Recrutamento, MaZa Consulting e Testes | MaZa Empregos</title>
        <meta name="description" content={OFFICIAL_SERVICES_INTRO} />
      </Head>

      <div className="overflow-hidden rounded-card bg-[linear-gradient(100deg,#18181B_0%,#C8161D_60%,#C8161D_100%)] px-6 py-8 text-white md:px-10 md:py-10">
        <span className="inline-block rounded-full bg-white/15 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#FCA5A5]">
          MaZa Empregos • Para Empresas e Candidatos
        </span>
        <h1 className="mt-3 text-2xl font-bold leading-tight md:text-4xl">Serviços</h1>
        <p className="mt-2 max-w-3xl text-sm text-white/90 md:text-base">
          {OFFICIAL_SERVICES_INTRO}
        </p>
      </div>

      <OfficialServicesSection showHeadingLink={false} />
    </div>
  );
}
