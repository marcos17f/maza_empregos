import Image from "next/image";
import RecruitmentForm from "@/ui/servicos/recruitmentForm";

export default function RecrutamentoESelecao() {
  return (
    <section
      id="recrutamento-e-selecao-home"
      aria-labelledby="recruitment-home-title"
      className="relative w-full overflow-hidden rounded-card bg-surface-card font-WorkSans text-[#171717]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-[73%] right-0 hidden overflow-hidden lg:block"
      >
        <Image
          src="/images/recruitment-specialist.jpg"
          alt=""
          fill
          sizes="400px"
          className="object-cover object-top"
        />
        <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#F3EEEE] to-transparent" />
      </div>

      <div className="relative z-10 px-4 pb-6 pt-6 md:px-8 md:py-9 lg:w-[73%]">
        <div className="grid grid-cols-1 items-center gap-4 md:block">
          <div className="min-w-0">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <h2
                id="recruitment-home-title"
                className="border-l-4 border-brand pl-3.5 text-[28px] font-bold leading-none tracking-tight text-[#18181B] md:text-[42px] xl:text-[50px]"
              >
                Recrutamento
                <br />e Seleção
              </h2>
              <div
                aria-label="Atendimento 100% Online e foco em Fit Cultural"
                className="flex h-20 w-20 shrink-0 rotate-[12deg] flex-col items-center justify-center rounded-full border-2 border-brand bg-white text-center text-[#18181B] shadow-sm md:h-28 md:w-28"
              >
                <span className="text-[9px] font-bold uppercase md:text-[11px]">Processo</span>
                <strong className="text-lg font-black leading-none text-[#0EA57A] md:text-3xl">
                  100%
                </strong>
                <span className="mt-0.5 text-[9px] font-bold uppercase md:text-[11px]">
                  Assertivo
                </span>
              </div>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-[#303030] md:mb-6 md:mt-5 md:text-base">
              Preencha o briefing em <strong className="font-semibold">3 passos rápidos</strong> e
              conte com a equipe da <strong className="font-semibold">MaZa Empregos</strong> para
              encontrar profissionais alinhados à cultura da sua empresa.
            </p>
          </div>
        </div>

        <div className="mt-4 md:mt-0">
          <RecruitmentForm theme="light" />
        </div>
      </div>
    </section>
  );
}
