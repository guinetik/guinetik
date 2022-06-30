const ProjectsPage = () => {
  return (
    <section id="section_projects" class="bg-neutral-content pt-2 pb-16">
      <div class="container mx-auto mt-2">
        <a id="projects" href="#" class="disabled">
          <h1 class="text-primary-focus font-title p-8 text-4xl font-extrabold sm:text-5xl lg:text-7xl text-center drop-shadow-lg">
            Featured Projects
          </h1>
        </a>

        <div class="gallery p-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3 font-sans">
          <div class="card shadow-xl bg-white">
            <figure class="rounded sm:h-96 md:h-60 lg:h-48 xl:h-72 2xl:h-96 w-full">
              <img
                class="object-cover object-center h-full w-full"
                src="https://i.ibb.co/XDgYqQv/wiki-search.png"
                alt="Svelte Wikipedia Search"
              />
            </figure>
            <div class="justify-end card-body bg-neutral">
              <h2 class="card-title text-primary prose lg:prose-xl">
                Svelte Wiki Search
              </h2>
              <p class="text-sm text-neutral-content prose-sm">
                Small wiki search app that uses the Wikimedia API to search
                articles. Features internationalization, dark mode and fetching
                the top posts of the day
              </p>
            </div>
            <div class="card-actions flex justify-between p-4 gap-1 content-center">
              <a
                class="btn btn-sm btn-outline sm:btn-md btn-secondary gap-2 md:btn-sm lg:btn-sm xl:btn-sm 2xl:btn-md"
                href="https://app.maosconecta.com.br/"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
                Visit
              </a>
              <div class="tech_stack flex flex-wrap self-center gap-1">
                <span class="badge badge-accent badge-sm hover:bg-accent-focus shadow-xl">
                  <a href="https://svelte.dev/" target="_blank">
                    svelte
                  </a>
                </span>
                <span class="badge badge-accent badge-sm hover:bg-accent-focus shadow-xl">
                  <a href="https://tailwindcss.com/" target="_blank">
                    tailwindcss
                  </a>
                </span>
              </div>
            </div>
          </div>
          <div class="card shadow-xl bg-white">
            <figure class="drop-shadow-xl rounded sm:h-96 md:h-60 lg:h-48 xl:h-72 2xl:h-96 w-full">
              <img
                class="object-cover object-left h-full w-full"
                src="https://i.ibb.co/S7MfGhX/exoplanets.png"
                alt="Svelte Wikipedia Search"
              />
            </figure>
            <div class="justify-end card-body bg-neutral">
              <h2 class="text-primary card-title prose lg:prose-xl">
                Kepler Exoplanets
              </h2>
              <p class="text-sm text-neutral-content prose-sm">
                Aid for a search for a habitable planet. Discover and review
                Kepler's exoplanets. Post your comments about the planet on a
                descentralized DB using gun.js.
              </p>
            </div>
            <div class="card-actions flex justify-between p-4 gap-1 content-center">
              <a
                class="btn btn-secondary gap-2 btn-sm btn-outline sm:btn-md md:btn-sm lg:btn-sm xl:btn-sm 2xl:btn-md"
                href="https://app.maosconecta.com.br/"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
                Visit
              </a>
              <div class="tech_stack flex flex-wrap self-center gap-1">
                <span class="badge badge-accent badge-sm drop-shadow-md">
                  <a
                    href="https://azure.microsoft.com/pt-br/services/cognitive-services/computer-vision/"
                    target="_blank"
                  >
                    reactjs
                  </a>
                </span>
                <span class="badge badge-accent badge-sm drop-shadow-md">
                  tailwindcss
                </span>
                <span class="badge badge-accent badge-sm drop-shadow-md">
                  gunjs
                </span>
              </div>
            </div>
          </div>
          <div class="card shadow-xl bg-white">
            <figure class="rounded sm:h-96 md:h-60 lg:h-48 xl:h-72 2xl:h-96 w-full">
              <img
                class="object-cover h-full w-full"
                src="https://i.ibb.co/mzjWFMM/pyscript.png"
                alt="Svelte Wikipedia Search"
              />
            </figure>
            <div class="justify-end card-body bg-neutral">
              <h2 class="card-title prose lg:prose-xl text-primary">
                PyScript L.A.B
              </h2>
              <p class="text-sm text-neutral-content prose-sm">
                Experiments running python on the browser.
              </p>
            </div>
            <div class="card-actions flex justify-between p-4 gap-1 content-center">
              <a
                class="btn btn-sm btn-outline sm:btn-md btn-secondary gap-2 md:btn-sm lg:btn-sm xl:btn-sm 2xl:btn-md"
                href="https://app.maosconecta.com.br/"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
                Visit
              </a>
              <div class="tech_stack flex flex-wrap self-center gap-1">
                <span class="badge badge-primary badge-sm drop-shadow-md">
                  <a
                    href="https://azure.microsoft.com/pt-br/services/cognitive-services/computer-vision/"
                    target="_blank"
                  >
                    svelte
                  </a>
                </span>
                <span class="badge badge-primary badge-sm drop-shadow-md">
                  tailwindcss
                </span>
                <span class="badge badge-primary badge-sm drop-shadow-md">
                  python
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ProjectsPage;