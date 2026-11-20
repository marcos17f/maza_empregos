import { cn } from "@/lib/utils";
import WhatsappButton from "@/ui/home/whatsappButton";
import Footer from "@/ui/layout/footer";
import Header from "@/ui/layout/header";
import { useRouter } from "next/router";
import { ReactNode } from "react";

export default function BasicLayout({ children }: { children: ReactNode }) {
  const router = useRouter();
  return (
    <>
      <Header />
      <main
        className={cn(
          "mx-auto mb-section mt-header-offset flex w-full max-w-page flex-1 flex-col justify-start px-gutter antialiased",
          router.asPath === "/servicos/recrutamento-e-selecao" && "max-w-none p-0",
        )}
      >
        {children}
        <WhatsappButton />
      </main>
      <Footer />
    </>
  );
}
