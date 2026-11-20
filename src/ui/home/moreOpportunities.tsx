import { OPPORTUNITIES } from "@/data/catalog";
import OpportunityCards from "./opportunityCards";

const moreItems = OPPORTUNITIES.filter((item) => item.featuredGroup === "more");

export default function MoreOpportunities() {
  return (
    <section
      id="mais-oportunidades"
      aria-labelledby="more-opportunities-title"
      className="mx-auto w-full"
    >
      <h2
        id="more-opportunities-title"
        className="mb-4 font-OpenSans text-2xl font-semibold text-[#18181B] lg:text-[28px]"
      >
        Vagas abertas & MaZa Consulting
      </h2>
      <OpportunityCards items={moreItems} />
    </section>
  );
}
