import Head from "next/head";
import Image from "next/image";
import RecruitmentForm from "@/ui/servicos/recruitmentForm";

export default function RecrutamentoESelecaoPage() {
  return (
    <div className="relative w-full overflow-hidden bg-[linear-gradient(120deg,#081D3D_0%,#18181B_50%,#C8161D_100%)] text-white">
      <Head>
        <title>Recrutamento e Seleção para Empresas | MaZa Empregos</title>
        <meta
          name="description"
          content="Recrutamento e Seleção assertivo para sua empresa em São José do Rio Preto, região e todo o Brasil. Preencha o briefing online e conte com a MaZa Empregos."
        />
      </Head>

      <div className="pointer-events-none absolute inset-0 opacity-20">
        <Image
          src="/images/hero-professional.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-page px-gutter py-12 lg:py-16">
        <div className="max-w-3xl">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <h1 className="border-l-4 border-[#FCA5A5] pl-4 text-4xl font-black leading-none tracking-tight sm:text-5xl lg:text-6xl">
              Recrutamento <span className="font-light">e</span> Seleção
            </h1>
            <div className="flex h-24 w-24 rotate-[12deg] flex-col items-center justify-center rounded-full border-2 border-[#FCA5A5] bg-white/10 text-center backdrop-blur-sm">
              <span className="text-[10px] font-bold uppercase">Desde</span>
              <strong className="text-2xl font-black leading-none text-[#FCA5A5]">2011</strong>
              <span className="text-[9px] font-bold uppercase">Fit Cultural</span>
            </div>
          </div>

          <p className="mt-6 text-lg leading-relaxed text-white/90 sm:text-xl">
            Preencha o briefing em <strong className="font-bold">3 passos</strong> e receba o apoio
            especializado da <strong className="font-bold">MaZa Empregos</strong> para selecionar
            perfis operacionais, administrativos, comerciais, TI e liderança.
          </p>

          <div className="mt-8">
            <RecruitmentForm theme="dark" />
          </div>
        </div>
      </div>
    </div>
  );
}
