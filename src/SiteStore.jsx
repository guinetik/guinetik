import { createSignal, createContext, useContext, createEffect, createResource, Show } from "solid-js";
import { useToken } from "./components/TokenProvider";
import { graphql } from "https://cdn.skypack.dev/pin/@octokit/graphql@v5.0.0-og38x9UCxfOFqy1S5nAJ/mode=imports,min/optimized/@octokit/graphql.js";
/**
 * Implementing a site-wide context in solid-js
 */
// create site context
const SiteContext = createContext();
// Default site data fallback
const defaultSiteData = {
  title: "Guinetik",
  description: "meta stuff",
  theme: "guinetik",
  menu: {
    main: [],
    mobile: []
  },
  sections: {
    about: { title: "About me", header: "Loading...", subheader: "Loading...", aside: "Loading..." },
    demos: { cards: [] },
    repos: { cards: [] },
    projects: { cards: [] }
  },
  experiments: [],
  themes: [],
  statsTheme: {},
  contribsTheme: {},
  statsBg: {}
};

// create provider for context
const SiteProvider = (props) => {
  const token = useToken();
  
  // Fetch site data from API/JSON
  const fetchSiteData = async () => {
    try {
      // For now, fetch from public/site.json
      // Later this will be /api/site
      const response = await fetch('/site.json');
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      return data;
    } catch (err) {
      console.error("Error fetching site data:", err);
      return defaultSiteData;
    }
  };

  // Create resource for site data
  const [siteData] = createResource(fetchSiteData);
  
  // Set default theme
  const defaultTheme = "guinetik";
  const [getTheme, setTheme] = createSignal(defaultTheme);
  document.documentElement.dataset.theme = defaultTheme;
  //
  const [getActive, setActive] = createSignal("home");
  // create a solid-js signal to store our site - start with null to indicate loading
  const [site, setSite] = createSignal(null);
  
  // Update site data when API data loads
  createEffect(() => {
    const data = siteData();
    if (data) {
      setSite(data);
      // Only set theme on initial load, not on every update
      if (data.theme && data.theme !== defaultTheme && getTheme() === defaultTheme) {
        setTheme(data.theme);
        document.documentElement.dataset.theme = data.theme;
      }
    }
  });
  
  // lets encapsulate the site data in a Facade that will be responsible for mutating state
  const SiteFacade = {
      // site data - return the signal value, not the signal itself
      data: () => site(),
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
        
        // Update the site data with new repos
        const currentSite = site();
        setSite({
          ...currentSite,
          sections: {
            ...currentSite.sections,
            repos: {
              ...currentSite.sections.repos,
              cards: repos
            }
          }
        });
      },
      // updates the site's theme
      setTheme: (t) => {
        setTheme(t);
        document.documentElement.dataset.theme = t;
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
        // Throttle to prevent too many calls
        if (getActive() === menuId) return;
        
        //console.log("setActiveLink", menuId);
        setActive(menuId);
        const menu = site().menu.main;
        const menuItem = menu.find((menuItem) => menuItem.id === menuId);
        //
        if (menuItem) {
          try {
            history.pushState(
              menuItem,
              "Guinetik :: " + menuItem.title,
              "#" + menuItem.id
            );
          } catch (e) {
            // Ignore history API errors
            console.warn("History API error:", e);
          }
        } else {
          try {
            history.pushState(null, "Guinetik", "#");
          } catch (e) {
            // Ignore history API errors
            console.warn("History API error:", e);
          }
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
  return (
    <SiteContext.Provider value={SiteFacade}>
      <Show when={site()} fallback={
        <div class="min-h-screen flex items-center justify-center bg-base-100">
          <div class="flex flex-col items-center gap-4">
            <div class="loading loading-spinner loading-lg text-primary"></div>
            <div class="text-base-content text-lg font-medium">Loading...</div>
          </div>
        </div>
      }>
        {props.children}
      </Show>
    </SiteContext.Provider>
  );
};
export function useSite() {
  return useContext(SiteContext);
}
export default SiteProvider;