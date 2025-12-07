import { useSite } from "../SiteStore";
import { For, createSignal, createEffect } from "solid-js";
import ContentCard from "./ContentCard";
const ProjectsPage = () => {
  const Site = useSite();
  const [cards, setCards] = createSignal([]);
  
  // React to site data changes (local load + API hydration)
  createEffect(() => {
    const siteData = Site.data();
    if (siteData && siteData.sections && siteData.sections.projects) {
      setCards(siteData.sections.projects.cards || []);
    }
  });
  
  return (
    <section id="section_projects" class="bg-neutral-content pb-16 pt-8">
      <div class="container mx-auto mt-2">
        <a id="projects" href="#" class="disabled">
          <h1 class="text-primary-focus py-8 sm:py-8 md:py-8 lg:py-8 xl:py-12 2xl:py-16 text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-10xl font-extrabold text-center drop-shadow-md">
            Featured Projects
          </h1>
        </a>
        <div class="gallery p-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3 font-sans">
          <For each={cards()}>
            {(card, i) => <ContentCard card={card} section="projects" />}
          </For>
        </div>
      </div>
    </section>
  );
};
export default ProjectsPage;
