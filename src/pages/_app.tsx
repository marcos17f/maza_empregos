import "@/styles/globals.css";
import type { AppProps } from "next/app";
import type { NextPage } from "next";
import { ReactNode } from "react";
import localFont from "next/font/local";
import BasicLayout from "@/ui/layout/mainLayout";
import { ProposalProvider } from "@/ui/context/proposalContext";

const lato = localFont({
  src: [
    { path: "../fonts/lato/lato-300.woff2", weight: "300", style: "normal" },
    { path: "../fonts/lato/lato-400.woff2", weight: "400", style: "normal" },
    { path: "../fonts/lato/lato-700.woff2", weight: "700", style: "normal" },
    { path: "../fonts/lato/lato-900.woff2", weight: "900", style: "normal" },
  ],
  display: "swap",
  variable: "--font-lato",
});

type ExtendedAppProps = AppProps & {
  Component: NextPage & {
    getLayout?: (page: ReactNode) => ReactNode;
  };
};

export default function App({ Component, pageProps }: ExtendedAppProps) {
  const getLayout = Component.getLayout ?? ((page) => <BasicLayout>{page}</BasicLayout>);

  return (
    <ProposalProvider>
      <style jsx global>{`
        :root {
          --font-lato: ${lato.style.fontFamily};
        }
      `}</style>
      {getLayout(<Component {...pageProps} />)}
    </ProposalProvider>
  );
}
