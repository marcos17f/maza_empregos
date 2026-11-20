import Head from "next/head";
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <section className="mx-auto max-w-xl py-20 text-center">
      <Head>
        <title>Página não encontrada | MaZa Empregos</title>
      </Head>
      <p className="font-DMSerif text-7xl text-brand">404</p>
      <h1 className="mt-3 text-2xl font-bold text-[#18181B]">Página não encontrada</h1>
      <p className="mt-2 text-sm text-[#4c4c4c]">
        O endereço que você acessou não existe ou foi atualizado. Explore nossas vagas abertas ou
        retorne à página inicial.
      </p>
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <Link
          href="/"
          className="rounded-full bg-brand px-6 py-3 text-sm font-bold text-white hover:bg-brand-dark"
        >
          Ir para a página inicial
        </Link>
        <Link
          href="/vagas"
          className="rounded-full border border-brand px-6 py-3 text-sm font-bold text-brand hover:bg-primary-50"
        >
          Ver vagas abertas
        </Link>
      </div>
    </section>
  );
}
