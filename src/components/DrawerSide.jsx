// create JSX component for DrawerSide
import { useSite } from "../SiteStore";
import ThemeSwitcher from "./ThemeSwitcher";
const DrawerSide = () => {
  const Site = useSite();
  // obtain signal to read the current's active link
  let activeLink = Site.getActiveLink();
  return (
    <ul class="menu p-4 overflow-y-auto w-60 sm:w-80 bg-base-100">
      <For each={Site.data().menu.mobile}>
        {(menu, i) => (
          <li>
            <a
              onClick={() => {
                Site.setActiveLink(menu.id);
              }}
              class={`${activeLink() === menu.id ? "active" : "notactive"}`}
              href={menu.link}
            >
              {menu.title}
            </a>
          </li>
        )}
      </For>
      <li><ThemeSwitcher/></li>
    </ul>
  );
};
export default DrawerSide;
