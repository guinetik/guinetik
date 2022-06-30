import { useSite } from "../SiteStore";
const ThemeSwitcher = () => {
  const Site = useSite();
  Site.helloWorldFromContext();
  return (
    <button class="dropdown inline">
      <div tabindex="2" class="m-1 btn btn-sm">
        🤔 Pick your Mood
      </div>
      <ul
        tabindex="2"
        class="p-2 shadow menu dropdown-content bg-base-100 rounded-box"
      >
        <For each={Site.data().themes}>
          {(theme, i) => (
            <li>
              <a
                data-set-theme={theme.id}
                data-act-class="active"
                onClick={() => {
                  Site.setTheme(theme.id);
                }}
              >
                {theme.name}
              </a>
            </li>
          )}
        </For>
      </ul>
    </button>
  );
};
export default ThemeSwitcher;
