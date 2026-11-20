# MaZa Empregos — Portal Web (Frontend)

Frontend em Next.js + React + TypeScript + Tailwind CSS desenvolvido para a **MaZa Empregos** (`mazaempregos.com.br`), no segmento de **recrutamento, seleção, recolocação profissional (Job Hunter) e consultoria de RH (MaZa Consulting)**, com foco em São José do Rio Preto/SP, região e abrangência nacional.

## Como rodar localmente

```bash
npm install
npm run dev
```

Acesse `http://localhost:3001`.

## Scripts disponíveis

- `npm run dev` — servidor de desenvolvimento
- `npm run build` — build de produção
- `npm run start` — executa o build de produção
- `npm run lint` — verificação ESLint
- `npm run typecheck` — verificação TypeScript (`tsc --noEmit`)

## Páginas e funcionalidades

- **Home (`/`)**: Hero carousel com busca rápida MaZa Talentos, faixa de diferenciais (Desde 2011), vagas e serviços em destaque, carrossel de dores/soluções de RH, áreas de atuação, formulário multi-etapas de Recrutamento e Seleção, setores atendidos, destaque LGPD, atendimento via WhatsApp e artigos de carreira.
- **Vagas (`/vagas` e `/vagas/[slug]`)**: Catálogo filtrável por área de atuação, busca e favoritos salvos no navegador.
- **MaZa Consulting (`/consultoria` e `/consultoria/[slug]`)**: Soluções corporativas de RH (Recrutamento & Seleção, Avaliação Comportamental, Pesquisa de Clima, Avaliação 360°, Treinamentos e Aplicação de Testes).
- **Detalhe da Oportunidade/Serviço (`/oportunidade/[handle]`)**: Descrição completa, modalidade, requisitos/entregáveis, candidatura gratuita ou adição à lista de solicitações corporativas.
- **Recrutamento e Seleção (`/servicos/recrutamento-e-selecao`)**: Landing dedicada com briefing multi-etapas de abertura de vaga.
- **Cadastrar Currículo (`/cadastrar-curriculo`)**: Cadastro 100% gratuito para candidatos com validação e aviso LGPD.
- **Pesquisa (`/pesquisa`)**, **Como Funciona (`/como-funciona`)**, **FAQ (`/faq`)**, **Contato (`/contato`)**, **Solicitações & Checkout (`/solicitacoes`, `/checkout`, `/checkout/pedido-finalizado`)** e **Política de Privacidade (`/politica-de-privacidade`)**.
