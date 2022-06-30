import { useSite } from "../SiteStore";
import { createEffect, createSignal } from "solid-js";
import { Dynamic } from "solid-js/web";
const CodePage = () => {
  // obtain our site store
  const Site = useSite();
  // obtain signal to read the current's site theme
  let siteTheme = Site.getThemeSignal();
  // create a signal to store the current page theme
  const [pageTheme, setPageTheme] = createSignal(siteTheme());
  console.log("pageTheme", pageTheme());
  // Since the theme names from the site are different from the page, we need to map them;
  const changePageTheme = (newTheme) => {
    const statsTheme = Site.data().statsTheme;
    setPageTheme(statsTheme[newTheme]);
  };
  // create an effect subscribing to the site theme signal
  createEffect(() => changePageTheme(siteTheme()));
  return (
    <section id="section_code" class="bg-base-300 pt-2 pb-16">
      <div class="container mx-auto mt-2">
        <a id="code" href="#" class="disabled">
          <h1 class="font-title p-8 text-4xl font-extrabold sm:text-5xl lg:text-7xl text-center drop-shadow-lg">
            Code & Me
          </h1>
        </a>

        <div class="flex flex-wrap p-2">
          {/* WAKA TIME */}
          <div class="w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2 p-2">
            <div class="bg-grey shadow-lg p-2 self-center">
              <img
                class="w-full"
                alt="Waka Time"
                src={`https://github-readme-stats.vercel.app/api/wakatime?username=guinetik&theme=${pageTheme()}&count_private=true&cache_seconds=1800&langs_count=18&layout=compact&hide_border=true`}
              />
            </div>
          </div>
          {/* MOST USED LANGUAGES */}
          <div class="w-full sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-2 mb-4">
            <div class="bg-grey shadow-lg p-2 self-center">
              <img
                class="w-full"
                alt="Most used Languages"
                src={`https://github-readme-stats.vercel.app/api/top-langs/?username=guinetik&langs_count=12&theme=${pageTheme()}&layout=compact&count_private=true&cache_seconds=1800&hide_border=true`}
              />
            </div>
          </div>
          {/* TOP REPOS */}
          <div class="w-full sm:w-full md:w-1/2 lg:w-full xl:w-full px-2 mb-4">
            <div class="bg-grey shadow-lg p-2 self-center">
              <img
                class="w-full"
                alt="Github Stats"
                src={`https://github-readme-stats.vercel.app/api?username=guinetik&show_icons=true&theme=${pageTheme()}&count_private=true&hide=issues,contribs&hide_border=true`}
              />

              <img
                class="w-full hidden sm:hidden md:block lg:hidden xl:hidden 2xl:hidden"
                alt="Contributions"
                src={`https://activity-graph.herokuapp.com/graph?username=guinetik&hide_border=true&theme=${pageTheme()}`}
              />
            </div>
          </div>
          <div class="w-full sm:w-full md:hidden lg:block lg:w-full xl:w-full px-2 mb-4 border-2 border-black">
            <div class="bg-grey shadow-lg p-2 self-center">
              <img
                alt="Contributions"
                src={`https://activity-graph.herokuapp.com/graph?username=guinetik&hide_border=true&theme=${pageTheme()}`}
              />
            </div>
          </div>
          <div class="w-full">
            <div class="bg-grey shadow-lg p-2 self-center">
              <img
                alt="Github Streaks"
                class="w-full"
                src={`https://github-readme-streak-stats.herokuapp.com/?user=guinetik&count_private=true&layout=compact&theme=${pageTheme()}&hide_border=true`}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default CodePage;
