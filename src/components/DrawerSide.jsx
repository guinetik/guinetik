// create JSX component for DrawerSide
const DrawerSide = () => {
  return (
    <div class="drawer-side">
      <label for="main-drawer" class="drawer-overlay"></label>
      <ul class="menu p-4 overflow-y-auto w-80 bg-base-100">
        <li>
          <a href="#about">🙋‍♂️ About me</a>
        </li>
        <li>
          <a href="#code">📈 Code & Me</a>
        </li>
        <li>
          <a href="#demos">🔭 Github Demos</a>
        </li>
        <li>
          <a href="#repos">🗃️ Github Repos</a>
        </li>
        <li>
          <a href="#projects">🛠️ Featured Projects</a>
        </li>
      </ul>
    </div>
  );
};
export default DrawerSide;
