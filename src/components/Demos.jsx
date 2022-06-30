import { useSite } from "../SiteStore";
import ContentCard from "./ContentCard";
const DemosPage = () => {
  const Site = useSite();
  return (
    <section id="section_demos" class="bg-neutral-content pt-2 pb-16">
      <div class="container mx-auto mt-2">
        <a id="demos" href="#" class="disabled">
          <h1 class="text-primary-focus font-title p-8 text-4xl font-extrabold sm:text-5xl lg:text-7xl text-center drop-shadow-lg">
            Github Demos
          </h1>
        </a>
        <div class="gallery p-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3 font-sans">
          <For each={Site.data().sections.demos.cards}>
            {(card, i) => <ContentCard card={card} />}
          </For>
        </div>
      </div>
    </section>
  );
};
export default DemosPage;
