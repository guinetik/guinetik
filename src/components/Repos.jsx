import { useSite } from "../SiteStore";
import { createEffect, createSignal } from "solid-js";
//
const ReposPage = () => {
  // obtain our site store
  const Site = useSite();
  // obtain signal to read the current's site theme
  let siteTheme = Site.getThemeSignal();
  // create a signal to store the current page theme
  const [pageTheme, setPageTheme] = createSignal('default');
  // Since the theme names from the site are different from the page, we need to map them;
  const changePageTheme = (newTheme) => {
    const statsTheme = Site.data().statsTheme;
    setPageTheme(statsTheme[newTheme]);
  };
  // create an effect subscribing to the site theme signal
  createEffect(() => changePageTheme(siteTheme()));
  //
  return (
    <section id="section_repos" class="bg-base-300 pt-2 pb-16">
      <div class="container mx-auto mt-2">
        <a id="repos" href="#" class="disabled">
          <h1 class="font-title p-8 text-4xl font-extrabold sm:text-5xl lg:text-7xl text-center drop-shadow-md">
            Github Repos
          </h1>
        </a>
        <div class="flex flex-wrap">
          <For each={Site.data().sections.repos.cards}>
            {(repo, i) => (
              <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3 px-2 mb-4">
                <div class="w-full h-full bg-grey shadow-lg p-2">
                  <a href={`https://github.com/guinetik/${repo}`}>
                    <img
                      class="w-full h-full"
                      src={`https://github-readme-stats.vercel.app/api/pin/?username=guinetik&repo=${repo}&theme=${pageTheme()}&show_owner=true&hide_border=true`}
                      alt={repo}
                    />
                  </a>
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
