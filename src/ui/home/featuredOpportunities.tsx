import { OPPORTUNITIES } from "@/data/catalog";
import OpportunityCards from "./opportunityCards";

const topItems = OPPORTUNITIES.filter((item) => item.featuredGroup === "top");

export default function FeaturedOpportunities() {
  return (
    <section
      id="oportunidades-em-destaque"
      aria-label="Vagas e soluções em destaque"
      className="mx-auto w-full"
    >
      <h2 className="sr-only">Vagas e soluções de RH em destaque na MaZa Empregos</h2>
      <OpportunityCards items={topItems} />
    </section>
  );
}
