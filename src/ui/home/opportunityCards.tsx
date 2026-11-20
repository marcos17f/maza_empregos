import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { OpportunityItem } from "@/data/catalog";
import OpportunityCard, { useFavorites } from "./opportunityCard";

type Props = {
  items: readonly OpportunityItem[];
  layout?: "grid" | "carousel";
};

export default function OpportunityCards({ items, layout = "grid" }: Props) {
  const { favorites, toggleFavorite } = useFavorites();
  const isCarousel = layout === "carousel";

  return (
    <Carousel
      aria-label={items.map(({ title }) => title).join(", ")}
      opts={
        isCarousel
          ? { align: "start", slidesToScroll: "auto" }
          : { align: "start", breakpoints: { "(min-width: 768px)": { active: false } } }
      }
    >
      <CarouselContent
        className={
          isCarousel ? "-ml-3 lg:-ml-4" : "-ml-3 md:ml-0 md:grid md:grid-cols-3 md:gap-3 lg:gap-4"
        }
      >
        {items.map((item) => (
          <CarouselItem
            key={item.handle}
            className={
              isCarousel
                ? "basis-[88%] pl-3 sm:basis-1/2 md:basis-1/3 lg:pl-4"
                : "basis-[88%] pl-3 sm:basis-1/2 md:basis-auto md:pl-0"
            }
          >
            <OpportunityCard
              item={item}
              isFavorite={favorites.includes(item.handle)}
              onToggleFavorite={toggleFavorite}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious
        aria-label="Item anterior"
        className={`left-1 top-[160px] border-[#dedede] bg-white text-[#555] disabled:invisible ${
          isCarousel ? "" : "md:hidden"
        }`}
      />
      <CarouselNext
        aria-label="Próximo item"
        className={`right-1 top-[160px] border-[#dedede] bg-white text-[#555] disabled:invisible ${
          isCarousel ? "" : "md:hidden"
        }`}
      />
    </Carousel>
  );
}
