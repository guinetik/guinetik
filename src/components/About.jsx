import { useSite } from "../SiteStore";
const AboutPage = () => {
  const Site = useSite();
  return (
    <section id="section_about" class="bg-neutral-content w-full relative">
      <div class=" flex flex-col min-w-0 break-words w-full shadow-xl -my-4">
        <div class="px-6">
          <div class="flex flex-wrap justify-center">
            <div class="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
              <div class="relative">
                <img
                  alt="Hey!"
                  src="https://lh3.googleusercontent.com/a-/AOh14GjB8VonydeH0WKcPAW3muNC3ICmBnZjYbWQk5wU=s360-p-rw-no"
                  class="shadow-xl rounded-full h-auto align-middle border-1 absolute -m-20 -ml-20 lg:-ml-16"
                  style="max-width: 150px;"
                />
              </div>
            </div>
            <div class="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
              <div class="py-6 px-3  sm:mt-0">
                <button
                  class="invisible bg-pink-500 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                  type="button"
                >
                  EMAIL ME
                </button>
              </div>
            </div>
            <div class="w-full lg:w-4/12 px-4 lg:order-1">
              <div class="flex justify-center py-4 lg:pt-4 pt-8">
                <div class="mr-4 p-3 text-center">
                  <span class="text-xl font-bold block uppercase tracking-wide text-slate-600">
                    22
                  </span>
                  <span class="text-sm text-slate-400">Friends</span>
                </div>
                <div class="mr-4 p-3 text-center">
                  <span class="text-xl font-bold block uppercase tracking-wide text-slate-600">
                    10
                  </span>
                  <span class="text-sm text-slate-400">Photos</span>
                </div>
                <div class="lg:mr-4 p-3 text-center">
                  <span class="text-xl font-bold block uppercase tracking-wide text-slate-600">
                    89
                  </span>
                  <span class="text-sm text-slate-400">Comments</span>
                </div>
              </div>
            </div>
          </div>
          <div class="text-center">
            <a id="about" href="#" class="disabled">
              <h3 class="text-primary-focus font-title p-2 pb-1 text-xl font-extrabold sm:text-5xl lg:text-7xl text-center drop-shadow-md">
                {Site.data().sections.about.header}
              </h3>
            </a>
            <div class="text-secondary-focus">
              {Site.data().sections.about.subheader}
            </div>
            <div class="text-accent-focus text-sm leading-normal mt-0 font-bold uppercase">
              {Site.data().sections.about.aside}
            </div>
            <div class="mt-4">{Site.data().sections.about.content}</div>
          </div>
          <div class="mt-10 py-10 border-t border-neutral">
            <div class="flex flex-wrap justify-center">
              <div class="w-full lg:w-9/12 px-4">
                {Site.data().sections.about.text}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutPage;
