import ThemeSwitcher from "./ThemeSwitcher";
import { useSite } from "../SiteStore";
import { onMount, onCleanup, createSignal, createEffect, For } from "solid-js";
import { createNavigationObserver } from "../lib/observer";

/**
 * Navigation component with IntersectionObserver for efficient active link tracking.
 * Replaces scroll event listener with observer for better performance.
 */
const Nav = () => {
  const Site = useSite();
  const [menu, setMenu] = createSignal([]);
  let observer = null;
  
  // React to data changes
  createEffect(() => {
    const siteData = Site.data();
    if (siteData && siteData.menu && siteData.menu.main) {
      setMenu(siteData.menu.main);
    }
  });
  
  onCleanup(() => {
    // Disconnect observer on cleanup
    if (observer) {
      observer.disconnect();
    }
  });
  
  onMount(() => {
    // Wait a bit for data to load, then set up observer
    setTimeout(() => {
      const menuData = menu();
      if (menuData && menuData.length > 0) {
        // Build array of all section IDs - sections use 'section_' prefix
        const sectionIds = [
          'section_experiment',
          ...menuData.map(item => `section_${item.id}`)
        ];
        
        // Create observer for all sections
        observer = createNavigationObserver(
          sectionIds,
          (activeSectionId) => {
            // Map section IDs to menu IDs (remove 'section_' prefix)
            let menuId;
            if (activeSectionId === 'section_experiment') {
              menuId = 'home';
            } else {
              menuId = activeSectionId.replace('section_', '');
            }
            Site.setActiveLink(menuId);
          },
          {
            // Trigger when section reaches top 100px of viewport
            // Large bottom margin means only top portion matters
            rootMargin: '-100px 0px -80% 0px',
            threshold: 0
          }
        );
      }
    }, 100);
  });
  
  const activeLink = Site.getActiveLink()
  //
  return (
    <div>
      <div class="flex-none hidden lg:block">
          <ul class="menu menu-horizontal">
            <For each={menu()}>
              {(menu, i) => (
                <li>
                  <a
                    onClick={() => {
                      Site.setActiveLink(menu.id);
                    }}
                    class={`${
                      activeLink() === menu.id ? "active" : "notactive"
                    }`}
                    href={menu.link}
                  >
                    {menu.title}
                  </a>
                </li>
              )}
            </For>
          </ul>
        </div>
        <aside class="invisible sm:visible">
          <ThemeSwitcher />
        </aside>
    </div>
  );
};
export default Nav;
