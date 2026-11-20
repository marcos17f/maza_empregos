import Head from "next/head";
import React from "react";
import { MAZA_CONTACT } from "@/utils/contact";

export default function PoliticaDePrivacidadePage() {
  return (
    <section className="mx-auto flex w-full max-w-4xl flex-col items-start gap-6 pt-4">
      <Head>
        <title>Política de Privacidade e LGPD | MaZa Empregos</title>
        <meta
          name="description"
          content="Política de Privacidade e proteção de dados pessoais conforme a LGPD (Lei nº 13.709/2018) na MaZa Empregos."
        />
      </Head>

      <div>
        <span className="text-xs font-bold uppercase tracking-wider text-brand">
          Lei Federal nº 13.709/2018 (LGPD)
        </span>
        <h1 className="mt-1 text-3xl font-bold text-[#18181B] md:text-4xl">
          Política de Privacidade
        </h1>
      </div>

      <div className="space-y-5 text-sm leading-relaxed text-[#303030] md:text-base">
        <p>
          Na <strong>MaZa Empregos</strong>, privacidade, ética e segurança da informação são
          prioridades. Esta Política de Privacidade descreve como coletamos, utilizamos, armazenamos
          e protegemos os dados pessoais de candidatos e representantes de empresas parceiras em
          total conformidade com a Lei Geral de Proteção de Dados Pessoais (LGPD — Lei nº
          13.709/2018).
        </p>

        <h2 className="text-lg font-bold text-[#18181B]">
          1. Finalidade da coleta de dados
        </h2>
        <p>
          Os dados pessoais e profissionais fornecidos por candidatos são utilizados exclusivamente
          para avaliação curricular, encaminhamento a processos seletivos, contato para entrevistas
          e atuação em recolocação profissional. Dados de empresas parceiras são usados para gestão
          de vagas, propostas comerciais e prestação de serviços de Recrutamento e MaZa Consulting.
        </p>

        <h2 className="text-lg font-bold text-[#18181B]">
          2. Compromisso de gratuidade e segurança
        </h2>
        <p>
          O cadastro de currículo e a candidatura a vagas são <strong>100% gratuitos</strong> para
          os candidatos. A MaZa Empregos <strong>nunca solicita informações bancárias</strong> ou
          pagamentos no cadastro de currículo e orienta que currículos sejam enviados exclusivamente
          pela plataforma oficial, não sendo aceitos por e-mail.
        </p>

        <h2 className="text-lg font-bold text-[#18181B]">
          3. Consentimento e direitos do titular
        </h2>
        <p>
          Conforme o artigo 18 da LGPD, você pode, a qualquer momento e gratuitamente: confirmar a
          existência de tratamento, acessar, corrigir ou atualizar seus dados, solicitar a
          eliminação de dados tratados mediante consentimento ou revogar sua autorização.
        </p>

        <h2 className="text-lg font-bold text-[#18181B]">
          4. Compartilhamento seguro
        </h2>
        <p>
          Os dados curriculares de candidatos são compartilhados apenas com empresas contratantes
          efetivamente vinculadas às vagas para as quais o perfil seja compatível, sempre sob
          compromisso de confidencialidade e finalidade específica de recrutamento e seleção.
        </p>

        <h2 className="text-lg font-bold text-[#18181B]">
          5. Canal de atendimento ao titular de dados
        </h2>
        <p>
          Para exercer seus direitos previstos na LGPD ou esclarecer dúvidas sobre privacidade,
          entre em contato pelo e-mail oficial{" "}
          <strong className="text-brand">{MAZA_CONTACT.email}</strong> ou pelo WhatsApp{" "}
          <strong>{MAZA_CONTACT.whatsappPrimaryDisplay}</strong>.
        </p>
      </div>
    </section>
  );
}
