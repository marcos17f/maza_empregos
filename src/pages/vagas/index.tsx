import Head from "next/head";
import RealVacancyBoard from "@/ui/vagas/realVacancyBoard";

export default function VagasPage() {
  return (
    <div className="pt-4">
      <Head>
        <title>Vagas de Emprego Disponíveis | MaZa Empregos</title>
        <meta
          name="description"
          content="Confira as vagas abertas na MaZa Empregos em São José do Rio Preto, região e todo o Brasil. Cadastre-se gratuitamente pelo portal oficial ou compartilhe no WhatsApp."
        />
      </Head>
      <RealVacancyBoard />
    </div>
  );
}
