import { createSignal, createContext, useContext, createEffect, Show } from "solid-js";
import { loadSiteDataOptimistic } from "./lib/dataLoader";

/**
 * Implementing a site-wide context in solid-js with optimized local-first data loading.
 * Loads local site.json immediately for fast FCP/LCP, then hydrates from API.
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
  // Set default theme
  const defaultTheme = "guinetik";
  const [getTheme, setTheme] = createSignal(defaultTheme);
  document.documentElement.dataset.theme = defaultTheme;
  
  const [getActive, setActive] = createSignal("home");
  // create a solid-js signal to store our site - start with default to show content immediately
  const [site, setSite] = createSignal(defaultSiteData);

  /**
   * Load site data using local-first strategy.
   * Local JSON loads immediately for fast render, API hydrates in background.
   */
  const loadSiteData = async () => {
    try {
      await loadSiteDataOptimistic({
        localPath: '/site.json',
        apiUrl: 'https://api.guinetik.com/site/content',
        apiTimeout: 5000,
        onLocalLoaded: (localData) => {
          // Immediate render with local data
          console.log('🎨 Rendering with local data');
          setSite(localData);
          
          // Set theme from local data
          if (localData.theme && localData.theme !== defaultTheme) {
            setTheme(localData.theme);
            document.documentElement.dataset.theme = localData.theme;
          }
        },
        onApiLoaded: (apiData) => {
          // Hydrate with fresh API data
          console.log('🔄 Hydrating with API data');
          setSite(apiData);
          
          // Update theme if different
          if (apiData.theme && apiData.theme !== getTheme()) {
            setTheme(apiData.theme);
            document.documentElement.dataset.theme = apiData.theme;
          }
        },
        onError: (error, source) => {
          console.warn(`⚠️ Error loading from ${source}:`, error.message);
        }
      });
    } catch (error) {
      console.error('❌ All data sources failed:', error.message);
      // Site is already initialized with defaultSiteData
    }
  };

  // Start loading data on mount
  loadSiteData();

  // lets encapsulate the site data in a Facade that will be responsible for mutating state
  const SiteFacade = {
    // site data - return the signal value, not the signal itself
    data: () => site(),
    // testing if the context work
    helloWorldFromContext: () => {
      console.log("Hello world from context");
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
      {props.children}
    </SiteContext.Provider>
  );
};
export function useSite() {
  return useContext(SiteContext);
}
export default SiteProvider;