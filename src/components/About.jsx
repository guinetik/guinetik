import { useSite } from "../SiteStore";
import { FiMail } from "solid-icons/fi";
import { FaBrandsLinkedin } from "solid-icons/fa";
//
const AboutPage = () => {
  const Site = useSite();
  return (
    <section id="section_about" class="bg-slate-100 w-full relative">
      <div class=" flex flex-col min-w-0 break-words w-full shadow-xl -my-4">
        <div class="px-6">
          <div class="flex flex-wrap justify-center">
            <div class="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
              <div class="relative">
                <img
                  width="150"
                  height="150"
                  decoding="async"
                  loading="lazy"
                  alt="Hey!"
                  src="https://i.imgur.com/IC4Fu0K.png"
                  class="shadow-xl rounded-full h-auto align-middle border-2 absolute -m-20 -ml-20 lg:-ml-16 border-neutral-content"
                  style="max-width: 150px;"
                />
              </div>
            </div>
            <div class="w-full lg:w-4/12 px-0 sm:px-4 lg:order-3 lg:text-right lg:self-center mt-20 sm:mt-0">
              <div class="py-6 px-4 sm:mt-0">
                <a
                  class="btn btn-error font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                  href="mailto:guinetik@gmail.com"
                >
                  <FiMail size={16} class="mr-1" />
                  EMAIL ME
                </a>
                <a
                  href="https://www.linkedin.com/in/guinetik/"
                  target="_blank"
                  class="float-none sm:float-right btn btn-info font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none ml-2 mb-1 ease-linear transition-all duration-150"
                >
                  <FaBrandsLinkedin size={16} class="mr-1" /> LINKED-IN
                </a>
              </div>
            </div>
            <div class="w-full lg:w-4/12 px-4 lg:order-1">
              <div class="flex justify-center py-4 lg:pt-4 sm:pt-8 pt-0 -ml-8 sm">
                <div class="mr-4 p-3 text-center">
                  <span class="text-xl font-bold block uppercase tracking-wide text-secondary">
                    {Site.data().sections.demos.cards.length}
                  </span>
                  <span class="text-sm text-accent-focus font-bold">Demos</span>
                </div>
                <div class="mr-4 p-3 text-center">
                  <span class="text-xl font-bold block uppercase tracking-wide text-secondary">
                    {Site.data().sections.repos.cards.length}
                  </span>
                  <span class="text-sm text-accent-focus font-bold">Repositories</span>
                </div>
                <div class="lg:mr-4 p-3 text-center">
                  <span class="text-xl font-bold block uppercase tracking-wide text-secondary">
                    {Site.data().sections.projects.cards.length}
                  </span>
                  <span class="text-sm text-accent-focus font-bold">Projects</span>
                </div>
              </div>
            </div>
          </div>
          <div class="text-center">
            <a id="about" href="#" class="py-1">
              <h3 class="text-primary-focus text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-10xl font-extrabold text-center drop-shadow-md">
                {Site.data().sections.about.header}
              </h3>
            </a>
            <div class="text-secondary-focus font-bold text-xl md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl mt-4">
              {Site.data().sections.about.subheader}
            </div>
            <div class="text-accent-focus font-bold uppercase text-lg md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl mt-4">
              {Site.data().sections.about.aside}
            </div>
            <div class="py-4 flex justify-center">
              {Site.data().sections.about.content}
            </div>
          </div>
          <div class="flex flex-wrap justify-center my-10">
            {Site.data().sections.about.text}
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutPage;
