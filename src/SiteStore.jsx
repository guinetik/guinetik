import { createSignal, createContext, useContext } from "solid-js";
import Site from "./Site";
import { graphql } from "https://cdn.skypack.dev/pin/@octokit/graphql@v5.0.0-og38x9UCxfOFqy1S5nAJ/mode=imports,min/optimized/@octokit/graphql.js";
/**
 * Implementing a site-wide context in solid-js
 */
// create site context
const SiteContext = createContext();
// create provider for context
const SiteProvider = (props) => {
  // to avoid exposing the github key in the source code, I'm putting it in a env.local file that never gets checked in.
  // Since I'm always building dist locally, I can maintain this file locally. if i was using github actions, I would set it up over there.
  const key = import.meta.env.VITE_GITHUB_KEY;
  const token = decodeURIComponent((window.atob(key)));
  //
  const [getTheme, setTheme] = createSignal(Site.theme);
  document.documentElement.dataset.theme = Site.theme;
  //
  const [getActive, setActive] = createSignal("home");
  // create a solid-js signal to store our site
  const [site, setSite] = createSignal(Site),
    // lets encapsulate the site data in a Facade that will be responsible for mutating state
    SiteFacade = {
      // site data
      data: site,
      // testing if the context work
      helloWorldFromContext: () => {
        console.log("Hello world from context");
      },
      getRepos: async () => {
        //console.log("fetching repos", token);
        const graphqlWithAuth = graphql.defaults({
          headers: {
            authorization: `token ${token}`,
          },
        });
        const response  = await graphqlWithAuth(`
          {
            user(login: "guinetik") {
              repositories(first: 50, isFork: false, orderBy:{field: CREATED_AT, direction: DESC}) {
                nodes {
                  name
                }
              }
            }
          }
        `);
        const repos = response.user.repositories.nodes.map((repo) => repo.name);
        //console.log("repos", repos);
        Site.sections.repos.cards = repos;
        setSite(Site);
      },
      // updates the site's theme
      setTheme: (t) => {
        SiteFacade.updateState(() => {
          setSite({ ...site(), theme: t });
        });
        setTheme(t);
      },
      getThemeSignal: () => {
        return getTheme;
      },
      // adds a custom theme
      addTheme: (t) => {
        SiteFacade.updateState(() => {
          let siteStore = site();
          let themes = siteStore.themes;
          themes.push(t);
        });
      },
      setActiveLink: (menuId) => {
        //console.log("setActiveLink", menuId);
        setActive(menuId);
        const menu = site().menu.main;
        const menuItem = menu.find((menuItem) => menuItem.id === menuId);
        //
        if (menuItem) {
          history.pushState(
            menuItem,
            "Guinetik :: " + menuItem.title,
            "#" + menuItem.id
          );
        } else {
          history.pushState(null, "Guinetik", "#");
        }
      },
      getActiveLink: () => {
        return getActive;
      },
      // prints current state
      printState: () => {
        console.log("CONTEXT:", "State:", site());
      },
      // execute a facade method, printing the state before and after the execution
      updateState: (fn, args) => {
        //console.group("Changing state...");
        //SiteFacade.printState();
        fn.apply(SiteFacade, args);
        //SiteFacade.printState();
        //console.groupEnd();
      },
    };
  //
  setTheme(Site.theme);
  //
  return (
    <SiteContext.Provider value={SiteFacade}>
      {props.children}
    </SiteContext.Provider>
  );
};
export function useSite() {
  return useContext(SiteContext);
}
export default SiteProvider;
