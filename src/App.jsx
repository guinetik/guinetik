import DrawerSide from "./components/DrawerSide";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import AboutPage from "./components/About";
import Experiment from "./components/Experiment";
import CodePage from "./components/Code";
import DemosPage from "./components/Demos";
import ReposPage from "./components/Repos";
import ProjectsPage from "./components/Projects";
const App = () => {
  return (
    <div class="drawer transition-all">
      <input id="main-drawer" type="checkbox" class="drawer-toggle" />
      <div id="drawer-content" class="drawer-content flex flex-col" style="scroll-behavior: smooth; scroll-padding-top: 5rem;">
        <Nav />
        <main>
          <Experiment />
          <AboutPage />
          <CodePage />
          <DemosPage />
          <ReposPage />
          <ProjectsPage />
        </main>
        <Footer />
      </div>
      <DrawerSide />
    </div>
  );
};

export default App;
