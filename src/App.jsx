import { lazy } from "solid-js";
import DrawerSide from "./components/DrawerSide";
const Footer = lazy(() => import("./components/Footer"));
import Nav from "./components/Nav";
import ThemeSwitcher from "./components/ThemeSwitcher";
import LazySection from "./components/LazySection";

// Above-the-fold: load immediately
const Experiment = lazy(() => import("./components/Experiment"));

// Below-the-fold: code-split and lazy-load via LazySection wrapper
const AboutPage = lazy(() => import("./components/About"));
const CodePage = lazy(() => import("./components/Code"));
const ProjectsPage = lazy(() => import("./components/Projects"));
const DemosPage = lazy(() => import("./components/Demos"));
const ReposPage = lazy(() => import("./components/Repos"));
const App = () => {
  return (
    <div class="drawer transition-all">
      <input id="main-drawer" type="checkbox" class="drawer-toggle" />
      <div
        id="drawer-content"
        class="drawer-content flex flex-col"
        style="scroll-behavior: smooth; scroll-padding-top: 5rem;"
      >
        <div
          class="sticky top-0 z-30 flex h-16 w-full justify-center 
          bg-opacity-80 backdrop-blur transition-all duration-100 
          text-base-content glass bg-base-300"
        >
          <nav class={`w-full navbar z-50`}>
            <div class="flex-none lg:hidden">
              <label for="main-drawer" class="btn btn-square btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  class="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div class="flex-1">
              <a
                id="logo"
                href="/"
                title="Go to Home"
                onClick={() => {
                  Site.setActiveLink("home");
                  document.getElementById("drawer-content").scrollTo(0, 0);
                }}
              >
                <svg
                  style="filter: drop-shadow(1px 1px 1px rgba(0,0,0,0.5));"
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-10 drop-shadow-xl -mt-2 text-white"
                  fill="currentColor"
                  viewBox="10.848 14.449 356.239 88.472"
                >
                  <g
                    id="Layer1000"
                    transform="matrix(0.940946, 0, 0, 0.940946, -206.421127, -94.125977)"
                    style=""
                  >
                    <path
                      class="stroke symbol letter_g shadow"
                      d="m 282.8607,148.5988 h -18.0991 v 3.8121 c -0.5444,-0.5444 -1.1193,-1.0286 -1.7244,-1.4524 -0.6051,-0.4235 -1.2405,-0.8167 -1.9063,-1.1797 -2.7231,-1.3919 -5.7185,-2.0877 -8.9862,-2.0877 -6.7773,0 -12.0421,2.0877 -15.7937,6.2628 -1.8761,2.0575 -3.2527,4.4931 -4.1301,7.3071 -0.8775,2.8138 -1.3163,6.006 -1.3163,9.5763 0,6.3538 1.997,11.5578 5.9908,15.6123 3.994,4.0542 9.0771,6.0815 15.2493,6.0815 3.0256,0 5.9908,-0.7563 8.8955,-2.2691 1.4524,-0.7868 2.6928,-1.6945 3.7214,-2.7231 -0.1209,2.6019 -0.4083,4.7806 -0.862,6.5352 -0.454,1.755 -1.1045,3.2073 -1.9517,4.3571 -1.6337,2.2996 -4.5082,3.4491 -8.6232,3.4491 -1.9967,0 -3.9484,-0.2721 -5.8545,-0.8167 -1.1203,-0.32 -2.1299,-0.7037 -3.0306,-1.149 l -3.9101,6.7027 c 0.6275,0.4194 1.2765,0.7774 1.9483,1.0724 1.2405,0.5447 2.481,0.938 3.7217,1.1801 1.2405,0.2421 2.4054,0.3932 3.4945,0.4537 1.0893,0.0604 2.0272,0.0909 2.814,0.0909 3.2674,0 6.2477,-0.4993 8.9406,-1.4977 2.6928,-0.9986 4.9168,-2.4054 6.6717,-4.2207 1.6942,-1.8157 2.9196,-4.0697 3.6761,-6.7625 0.7563,-2.6928 1.1347,-5.7638 1.1347,-9.2132 v -32.0417 h 9.9296 z m -18.0991,21.8754 c 0,4.7806 -1.1193,8.4718 -3.3584,11.0739 -2.2388,2.6019 -5.2947,3.9031 -9.1676,3.9031 -3.5702,0 -6.5656,-1.4221 -8.9862,-4.2663 -2.4205,-2.9045 -3.6307,-6.5657 -3.6307,-10.983 0,-4.7201 1.1798,-8.5023 3.5398,-11.3462 2.2391,-2.7231 5.2647,-4.0848 9.0771,-4.0848 4.1755,0 7.2616,1.3315 9.2586,3.9941 2.1784,2.6623 3.2674,6.5654 3.2674,11.7092 z"
                    />
                    <path
                      class="stroke symbol letter_u shadow"
                      d="m 335.3805,193.0759 v -7.0798 h -7.2615 v -37.3972 h -8.1691 v 5.2645 20.5141 c 0,3.5098 -0.9684,6.4145 -2.9047,8.714 -1.7549,2.1784 -4.2661,3.2675 -7.5339,3.2675 -1.755,0 -3.2071,-0.1815 -4.3569,-0.5446 -1.1497,-0.3631 -2.0273,-0.8473 -2.6322,-1.4522 -0.6659,-0.6658 -1.1651,-1.5431 -1.4979,-2.6325 -0.3327,-1.0891 -0.4991,-2.5415 -0.4991,-4.3568 v -28.774 H 285.548 v 7.0801 h 6.808 v 21.9663 c 0,2.7229 0.3175,5.1434 0.953,7.2615 0.6353,2.118 1.7096,3.8727 3.2221,5.2645 1.4525,1.3314 3.2375,2.2997 5.3555,2.9046 2.1181,0.6052 4.5386,0.9077 7.2616,0.9077 2.6022,0 5.2344,-0.6656 7.897,-1.9967 0.5445,-0.3028 1.044,-0.6203 1.4978,-0.9533 0.4539,-0.3328 0.9227,-0.711 1.4069,-1.1345 v 3.1768 z"
                    />
                    <path
                      class="stroke symbol letter_i shadow"
                      d="m 362.0923,193.0758 v -7.0802 h -7.8971 v -37.3968 h -8.1692 v 5.2644 32.1324 h -8.4416 v 7.0802 z"
                    />
                    <path
                      class="stroke symbol symbol shadow"
                      id="path8"
                      d="m 562.6845,164.9387 v -20.9177 -8.5136 h 17.1383 v -6.0917 h -11.9492 v -14.0263 h -5.1891 v 14.2982 5.8198 h -25.0713 v 8.9127 h 17.4776 v 20.5186 z m 21.7455,14.0269 v -14.2985 -5.8201 h 25.0713 v -8.9132 H 592.0231 V 129.4157 H 584.43 v 20.9172 8.5141 h -17.138 v 6.0928 h 11.9474 v 14.0258 z"
                    />
                    <path
                      class="stroke symbol letter_netik shadow"
                      d="m 411.9412,151.342 v -3.0104 h -9.5097 v 3.0104 39.0654 c -2.0525,-3.6031 -4.1048,-7.1609 -6.1574,-10.6727 -2.0526,-3.5121 -4.1278,-6.9786 -6.2257,-10.3995 -2.0526,-3.4206 -3.9912,-6.8757 -5.8156,-10.3649 -1.8244,-3.4891 -3.7627,-7.0353 -5.8153,-10.6387 h -6.8417 v 3.0104 38.7233 h -5.7466 v 3.0104 h 9.5779 v -3.0104 -38.9971 l 24.2193,42.0075 h 6.6364 V 151.342 Z m 36.6026,41.7337 v -3.0104 h -3.4208 -22.4402 v -18.0618 h 11.6306 v -3.0101 H 422.6828 V 151.342 h 17.1856 4.8441 3.4209 v -3.0104 h -29.2136 v 3.0104 38.7233 h -6.1574 v 3.0104 z m 40.0921,-41.7337 v -3.0104 H 450.665 v 3.0104 10.2623 h 3.4209 V 151.342 h 13.6148 v 38.7233 h -7.526 v 3.0104 h 11.3573 v -3.0104 0 -38.7233 h 13.6831 v 0 z m 19.4984,41.7337 v -3.0104 h -6.1574 V 151.342 h 6.1574 v -3.0104 h -16.1461 v 3.0104 h 6.1577 v 38.7233 h -6.1577 v 3.0104 z m 44.0598,0 -3.0787,-3.0104 v 0 l -21.0719,-20.5932 20.5931,-18.1301 v 0 l 3.3523,-3.0104 h -14.3672 v 3.0104 h 6.1574 l -20.3879,17.9932 v -17.9932 0 -3.0104 h -9.9887 v 3.0104 h 6.1574 v 38.7233 0 3.0104 h 3.8313 v -3.0104 -3.5652 -5.8076 -10.8782 l 20.7298,20.251 h -6.1574 v 3.0104 z"
                    />
                  </g>
                </svg>
              </a>
            </div>
            <Nav />
          </nav>
        </div>
        <main>
          {/* Above-the-fold: Render immediately for fast LCP */}
          <Experiment />
          
          {/* Below-the-fold: Lazy-load when approaching viewport */}
          <LazySection rootMargin="600px">
            <AboutPage />
          </LazySection>
          
          <LazySection rootMargin="600px">
            <CodePage />
          </LazySection>
          
          <LazySection rootMargin="600px">
            <ProjectsPage />
          </LazySection>
          
          <LazySection rootMargin="600px">
            <DemosPage />
          </LazySection>
          
          <LazySection rootMargin="600px">
            <ReposPage />
          </LazySection>
        </main>
        <Footer />
      </div>
      <div class="drawer-side">
        <label for="main-drawer" class="drawer-overlay">
        </label>
        <DrawerSide />
      </div>
    </div>
  );
};

export default App;
