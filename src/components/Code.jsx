import { useSite } from "../SiteStore";
import { createEffect, createSignal } from "solid-js";
import { onMount } from "solid-js";
const CodePage = () => {
  const CodeCard = (props) => {
    return (
      <div class="card bg-neutral glass w-full h-full p-2 shadow-lg">
        <div
          class="card shadow-lg w-full h-full"
          style={`background:#${statsBg()}`}
        >
          <img
            width="320"
            height="95"
            decoding="async"
            loading="lazy"
            class="card w-full"
            alt={props.title}
            src={props.src}
          />
        </div>
      </div>
    );
  };
  // obtain our site store
  const Site = useSite();
  let statsThemes;
  let contribsThemes;
  let statsBgs;
  // obtain signal to read the current's site theme
  let siteTheme = Site.getThemeSignal();
  // create a signal to store the current page theme
  const [pageTheme, setPageTheme] = createSignal("nord");
  //
  const [contribsTheme, setContribsTheme] = createSignal("nord");
  //
  const [statsBg, setStatsBg] = createSignal("000000");
  // Since the theme names from the site are different from the page, we need to map them;
  const changePageTheme = (newTheme) => {
    //console.log("changePageTheme", newTheme);
    if (statsThemes) setPageTheme(statsThemes[newTheme]);
    if (contribsThemes) setContribsTheme(contribsThemes[newTheme]);
    if (statsBgs) setStatsBg(statsBgs[newTheme]);
    //console.log("statsBg", statsBgs[newTheme]);
  };
  //
  onMount(() => {
    statsThemes = Site.data().statsTheme;
    contribsThemes = Site.data().contribsTheme;
    statsBgs = Site.data().statsBg;
  });
  // create an effect subscribing to the site theme signal
  createEffect(() => changePageTheme(siteTheme()));
  return (
    <section id="section_code" class="bg-base-300 pb-16 pt-8">
      <div class="container mx-auto">
        <a id="code" href="#" class="text-info">
          <h1 class="font-title py-8 sm:py-8 md:py-8 lg:py-8 xl:py-12 2xl:py-16 text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-10xl font-extrabold text-center drop-shadow-md">
            Code & Me
          </h1>
        </a>
        <div class="flex flex-wrap p-2 gap-4">
          <div class="card w-full grid gap-4 grid-cols-1 lg:grid-cols-2">
            {/* MOST USED LANGUAGES */}
            <CodeCard
              title="Most Used Languages"
              src={`https://github-readme-stats.vercel.app/api/top-langs/?username=guinetik&langs_count=10&theme=${pageTheme()}&layout=compact&count_private=true&cache_seconds=1800&hide_border=true`}
            />
            {/* WAKA TIME */}
            <CodeCard
              title="Wakatime"
              src={`https://github-readme-stats.vercel.app/api/wakatime?username=guinetik&theme=${pageTheme()}&count_private=true&cache_seconds=1800&langs_count=16&layout=compact&hide_border=true`}
            />
          </div>
          {/* GITHUB STATS */}
          <div class="card w-full grid gap-4 grid-cols-1 lg:grid-cols-2">
            <CodeCard
              title="GithubStats"
              src={`https://github-readme-stats.vercel.app/api?username=guinetik&show_icons=true&theme=${pageTheme()}&count_private=true&hide=issues,contribs&hide_border=true`}
            />
            <CodeCard
              title="Github Contributions"
              src={`https://activity-graph.herokuapp.com/graph?username=guinetik&hide_border=true&theme=${contribsTheme()}&bg_color=${statsBg()}`}
            />
          </div>
          {/* GITHUB STREAKS */}
          <CodeCard
            title="Github Streaks"
            src={`https://github-readme-streak-stats.herokuapp.com/?user=guinetik&count_private=true&layout=compact&theme=${pageTheme()}&hide_border=true`}
          />
        </div>
      </div>
    </section>
  );
};
export default CodePage;
