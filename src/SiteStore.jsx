import { createSignal, createContext, useContext, createEffect, createResource, Show } from "solid-js";
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

  /**
   * Fetches site data from API endpoint with fallback to local JSON.
   * First attempts to load from api.guinetik.com/site/content,
   * then falls back to local site.json if API fails,
   * finally falls back to defaultSiteData if both fail.
   * @returns {Promise<Object>} Site configuration object
   */
  const fetchSiteData = async () => {
    // Try API endpoint first
    try {
      console.log("Attempting to fetch from API endpoint...");
      const apiResponse = await fetch('https://api.guinetik.com/site/content');

      if (apiResponse.ok) {
        const data = await apiResponse.json();
        console.log("✓ Successfully loaded data from API endpoint");
        return data;
      }
      
      throw new Error(`API returned status: ${apiResponse.status}`);
    } catch (apiError) {
      console.warn("API fetch failed, falling back to local site.json:", apiError.message);
      
      // Fallback to local site.json
      try {
        const jsonResponse = await fetch('/site.json');
        
        if (jsonResponse.ok) {
          const data = await jsonResponse.json();
          console.log("✓ Successfully loaded data from local site.json");
          return data;
        }
        
        throw new Error(`Local JSON returned status: ${jsonResponse.status}`);
      } catch (jsonError) {
        console.error("Both API and local JSON failed:", jsonError.message);
        console.log("Using default site data");
        return defaultSiteData;
      }
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