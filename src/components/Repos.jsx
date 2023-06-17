import { useSite } from "../SiteStore";
import { createEffect, createSignal, onMount } from "solid-js";
//
const ReposPage = () => {
  let statsBgs;
  // obtain our site store
  const Site = useSite();
  // obtain signal to read the current's site theme
  let siteTheme = Site.getThemeSignal();
  // create a signal to store the current page theme
  const [pageTheme, setPageTheme] = createSignal("default");
  const [statsBg, setStatsBg] = createSignal("000000");
  const [cards, setCards] = createSignal(Site.data().sections.repos.cards);
  // Since the theme names from the site are different from the page, we need to map them;
  const changePageTheme = (newTheme) => {
    statsBgs = Site.data().statsBg;
    const statsTheme = Site.data().statsTheme;
    setPageTheme(statsTheme[newTheme]);
    if (statsBgs) setStatsBg(statsBgs[newTheme]);
  };
  // create an effect subscribing to the site theme signal
  createEffect(() => changePageTheme(siteTheme()));
  //
  onMount(async () => {
    await Site.getRepos();
    setCards(Site.data().sections.repos.cards);
  });
  //
  return (
    <section id="section_repos" class="bg-base-300 pt-2 pb-16">
      <div class="container mx-auto mt-2">
        <a id="repos" href="#" class="text-info">
          <h1 class="py-8 sm:py-8 md:py-8 lg:py-8 xl:py-12 2xl:py-16 text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-10xl font-extrabold text-center drop-shadow-md">
            Github Repos
          </h1>
        </a>
        <div class="flex flex-wrap">
          <For each={cards()}>
            {(repo, i) => (
              <div class="card w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3 pl-2 pr-2 py-2">
                <div class="card bg-neutral glass w-full h-full p-1.5 shadow-lg">
                  <div
                    class="card shadow-lg w-full h-full"
                    style={`background:#${statsBg()}`}
                  >
                    <a href={`https://github.com/guinetik/${repo}`}>
                      <img
                        width="400"
                        height="120"
                        decoding="async"
                        loading="lazy"
                        class="w-full h-full rounded"
                        src={`https://github-readme-stats.vercel.app/api/pin/?username=guinetik&repo=${repo}&theme=${pageTheme()}&show_owner=true&hide_border=true`}
                        alt={repo}
                      />
                    </a>
                  </div>
                </div>
              </div>
            )}
          </For>
        </div>
      </div>
    </section>
  );
};
export default ReposPage;
