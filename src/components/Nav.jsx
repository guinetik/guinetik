import ThemeSwitcher from "./ThemeSwitcher";
import { useSite } from "../SiteStore";
import { onMount, onCleanup, createSignal } from "solid-js";
const Nav = () => {
  // creating a signal to save current scroll position
  //  const [getScroll, setScroll] = createSignal(0);
  const [menu, setMenu] = createSignal([]);
  const handleScroll = () => {
    //setScroll(document.getElementById("drawer-content").scrollTop);
    if (isInViewport(document.getElementById("section_experiment"))) {
      Site.setActiveLink("home");
    } else {
      menu().forEach((item) => {
        const id = item.id;
        const element = document.getElementById(id);
        if (isInViewport(element)) {
          Site.setActiveLink(id);
        }
      });
    }
  };
  const isInViewport = (el) => {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };
  onCleanup(async () => {
    document
      .getElementById("drawer-content")
      .removeEventListener("scroll", handleScroll);
  });
  onMount(() => {
    setMenu(Site.data().menu.main);
    document.getElementById("drawer-content").addEventListener(
      "scroll",
      function () {
        handleScroll();
      },
      false
    );
  });
  //
  const Site = useSite();
  let activeLink = Site.getActiveLink();
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
