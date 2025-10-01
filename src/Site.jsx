/**
 * General site store.
 * It will hold all content and be called from all components.
 * It will be incorporated into a solid-js' store.
 * TODO - make it persist with Firebase
 */
let Site = {
  title: "Guinetik",
  description: "meta stuff",
  theme: "guinetik",
  menu: {
    main: [
      {
        title: "About me",
        id: "about",
        link: "#about",
      },
      {
        title: "Code & Me",
        id: "code",
        link: "#code",
      },
      {
        title: "Featured Projects",
        id: "projects",
        link: "#projects",
      },
      {
        title: "Githhub Demos",
        id: "demos",
        link: "#demos",
      },
      {
        title: "Githhub Repos",
        id: "repos",
        link: "#repos",
      },
    ],
    mobile: [
      {
        title: "🙋‍♂️ About me",
        id: "about",
        link: "#about",
      },
      {
        title: "🛠️ Featured Projects",
        id: "projects",
        link: "#projects",
      },
      {
        title: "🔭 Githhub Demos",
        id: "demos",
        link: "#demos",
      },
      {
        title: "📈 Code & Me",
        id: "code",
        link: "#code",
      },
      {
        title: "🗃️ Githhub Repos",
        id: "repos",
        link: "#repos",
      },
    ],
  },
  themes: [
    {
      name: "😎 Cool",
      id: "guinetik",
    },
    {
      name: "🦄 Synthwave",
      id: "synthwave",
    },
    {
      name: "🥰 Cute",
      id: "valentine",
    },
    {
      name: "🎸 Cyberpunk",
      id: "cyberpunk",
    },
    {
      name: "🎃 Halloween",
      id: "halloween",
    },
  ],
  statsTheme: {
    guinetik: "nord",
    synthwave: "radical",
    valentine: "buefy",
    cyberpunk: "merko",
    night: "nord",
    winter: "default ",
    halloween: "darcula",
  },
  contribsTheme: {
    guinetik: "nord",
    synthwave: "redical",
    valentine: "default",
    cyberpunk: "chartreuse-dark",
    night: "nord",
    winter: "minimal",
    halloween: "gruvbox",
  },
  statsBg: {
    guinetik: "2e3440",
    synthwave: "141321",
    valentine: "FFFFFF",
    cyberpunk: "0a0f0b",
    night: "FFFFFF",
    winter: "FFFFFF",
    halloween: "242424",
  },
  experiments: [
    {
      title: "Asteroid Mining Game",
      url: "https://codepen.io/guinetik/full/jEOdKXR",
      type: "codepen",
      link: "https://codepen.io/guinetik/pen/jEOdKXR",
    },
    {
      title: "Dino Game",
      url: "https://codepen.io/guinetik/full/yyLZKKa",
      type: "codepen",
      link: "https://codepen.io/guinetik/pen/yyLZKKa",
    },
    {
      title: "WebGL Lava Lamp",
      url: "https://codepen.io/guinetik/full/wBvNryx",
      type: "codepen",
      link: "https://codepen.io/guinetik/pen/wBvNryx",
    },
    {
      title: "Particle Flow Simulation",
      url: "https://codepen.io/guinetik/full/qEBgPRb",
      type: "codepen",
      link: "https://codepen.io/guinetik/pen/qEBgPRb",
    },
    {
      title: "Solar System",
      url: "https://codepen.io/guinetik/full/YPzBQRB",
      type: "codepen",
      link: "https://codepen.io/guinetik/pen/YPzBQRB",
    },
    {
      title: "Graph Network Communities Simulation",
      url: "https://codepen.io/guinetik/full/qEBgjJK",
      type: "codepen",
      link: "https://codepen.io/guinetik/pen/qEBgjJK",
    },
    {
      title: "Matrix Rain",
      url: "https://codepen.io/guinetik/full/JojxJvL",
      type: "codepen",
      link: "https://codepen.io/guinetik/pen/JojxJvL",
    },
    {
      title: "Cymatics Simulation",
      url: "https://codepen.io/guinetik/full/OPJdgMd",
      type: "codepen",
      link: "https://codepen.io/guinetik/pen/OPJdgMd",
    },
    {
      title: "Macrodata Refinment",
      url: "https://codepen.io/guinetik/full/mydvwXv",
      type: "codepen",
      link: "https://codepen.io/guinetik/pen/mydvwXv",
    },
    {
      title: "Graph Network Simulation",
      url: "https://codepen.io/guinetik/full/mydvwEz",
      type: "codepen",
      link: "https://codepen.io/guinetik/pen/mydvwEz",
    },
    {
      title: "Game Of Life",
      url: "https://codepen.io/guinetik/full/MYWLoby",
      type: "codepen",
      link: "https://codepen.io/guinetik/pen/MYWLoby",
    },
    {
      title: "SVG Animated Gradient",
      url: "https://github.com/guinetik/guinetik/raw/master/header.svg",
      type: "img",
      link: "https://codepen.io/guinetik/full/XJWOgmN",
    },
  ],
  sections: {
    about: {
      title: "About me",
      header: "Hello world! This is Guinetik",
      subheader: "I am a Software Architect and Creative Coder",
      aside: "🌎 FORTALEZA, BRAZIL",
      content: (
        <div class="flex flex-wrap w-full lg:w-9/12 px-4 justify-center">
          <a href="https://wakatime.com/@guinetik" target="_blank">
            <img
              width="80.7"
              height="20"
              decoding="async"
              loading="lazy"
              class="block w-min"
              alt="WakaTime"
              src="https://wakatime.com/badge/user/bd313e2a-0621-4893-8b72-922274e316de.svg"
            />
          </a>
          <a
            href="https://stackoverflow.com/users/1293664/guinetik"
            target="_blank"
          >
            <img
              width="168"
              height="21"
              decoding="async"
              loading="lazy"
              class="block w-min"
              alt="StackOverflow"
              src="https://stackoverflow-badge.vercel.app/?userID=1293664"
            />
          </a>
          <span class="basis-full" />
          <img
            width="71"
            height="20"
            decoding="async"
            loading="lazy"
            class="block w-min"
            src="https://img.shields.io/static/v1?label=&message=languages:&color=blueviolet&style=flat-square"
            alt="languages"
          />
          <img
            width="33"
            height="20"
            decoding="async"
            loading="lazy"
            class="block w-min"
            src="https://img.shields.io/static/v1?logo=java&label=&message=java&color=36465D&logoColor=AAA&style=flat-square"
            alt="java"
          />
          <img
            width="81"
            height="20"
            decoding="async"
            loading="lazy"
            class="block w-min"
            src="https://img.shields.io/static/v1?logo=javascript&label=&message=javascript&color=36465D&logoColor=AAA&style=flat-square"
            alt="javascript"
          />
          <img
            width="83"
            height="20"
            decoding="async"
            loading="lazy"
            class="block w-min"
            src="https://img.shields.io/static/v1?logo=typescript&label=&message=typescript&color=36465D&logoColor=AAA&style=flat-square"
            alt="typescript"
          />
          <img
            width="67"
            height="20"
            decoding="async"
            loading="lazy"
            class="block w-min"
            src="https://img.shields.io/static/v1?logo=python&label=&message=python&color=36465D&logoColor=AAA&style=flat-square"
            alt="python"
          />
          <img
            width="67"
            height="20"
            decoding="async"
            loading="lazy"
            class="block w-min"
            src="https://img.shields.io/static/v1?logo=rust&label=&message=rust&color=36465D&logoColor=AAA&style=flat-square"
            alt="rust"
          />
          <span class="basis-full" />
          <img
            decoding="async"
            loading="lazy"
            class="block w-min"
            src="https://img.shields.io/static/v1?label=&message=libs:&color=important&style=flat-square"
            alt="libs"
          />
          <img
            width="33"
            height="20"
            decoding="async"
            loading="lazy"
            class="w-min"
            src="https://img.shields.io/static/v1?logo=springboot&label=&message=spring&color=36465D&logoColor=AAA&style=flat-square"
            alt="spring"
          />
          <img
            decoding="async"
            loading="lazy"
            class="w-min"
            src="https://img.shields.io/static/v1?logo=angular&label=&message=angular&color=36465D&logoColor=AAA&style=flat-square"
            alt="angular"
          />
          <img
            width="69"
            height="20"
            decoding="async"
            loading="lazy"
            class="w-min"
            src="https://img.shields.io/static/v1?logo=react&label=&message=react&color=36465D&logoColor=AAA&style=flat-square"
            alt="react"
          />
          <img
            width="67"
            height="20"
            decoding="async"
            loading="lazy"
            class="w-min"
            src="https://img.shields.io/static/v1?logo=svelte&label=&message=svelte&color=36465D&logoColor=AAA&style=flat-square"
            alt="svelte"
          />
          <img
            width="67"
            height="20"
            decoding="async"
            loading="lazy"
            class="w-min"
            src="https://img.shields.io/static/v1?logo=solid&label=&message=solidjs&color=36465D&logoColor=AAA&style=flat-square"
            alt="solidjs"
          />
          <img
            width="71"
            height="20"
            decoding="async"
            loading="lazy"
            class="w-min"
            src="https://img.shields.io/static/v1?logo=nodedotjs&label=&message=express&color=36465D&logoColor=AAA&style=flat-square"
            alt="express"
          />
          <img
            width="71"
            height="20"
            decoding="async"
            loading="lazy"
            class="w-min"
            src="https://img.shields.io/static/v1?logo=next.js&label=&message=nextjs&color=36465D&logoColor=AAA&style=flat-square"
            alt="nextjs"
          />
          <img
            width="67"
            height="20"
            decoding="async"
            loading="lazy"
            class="w-min"
            src="https://img.shields.io/static/v1?logo=pandas&label=&message=pandas&color=36465D&logoColor=AAA&style=flat-square"
            alt="pandas"
          />
          <img
            width="69"
            height="20"
            decoding="async"
            loading="lazy"
            class="w-min"
            src="https://img.shields.io/static/v1?logo=scikitlearn&label=&message=sklearn&color=36465D&logoColor=AAA&style=flat-square"
            alt="sklearn"
          />
          <img
            width="85"
            height="20"
            decoding="async"
            loading="lazy"
            class="w-min"
            src="https://img.shields.io/static/v1?logo=tensorflow&label=&message=tensorflow&color=36465D&logoColor=AAA&style=flat-square"
            alt="tensorflow"
          />
          <span class="basis-full" />
          <img
            width="41"
            height="20"
            decoding="async"
            loading="lazy"
            class="w-min"
            src="https://img.shields.io/static/v1?label=&message=tools:&color=critical&style=flat-square"
            alt="tools"
          />
          <img
            width="61"
            height="20"
            decoding="async"
            loading="lazy"
            class="w-min"
            src="https://img.shields.io/static/v1?logo=jetbrains&label=&message=intellij&color=36465D&logoColor=AAA&style=flat-square"
            alt="intellij"
          />
          <img
            width="43"
            height="20"
            decoding="async"
            loading="lazy"
            class="w-min"
            src="https://img.shields.io/static/v1?logo=git&label=&message=git&color=36465D&logoColor=AAA&style=flat-square"
            alt="git"
          />
          <img
            width="47"
            height="20"
            decoding="async"
            loading="lazy"
            class="w-min"
            src="https://img.shields.io/static/v1?logo=jira&label=&message=jira&color=36465D&logoColor=AAA&style=flat-square"
            alt="jira"
          />
          <img
            width="65"
            height="20"
            decoding="async"
            loading="lazy"
            class="w-min"
            src="https://img.shields.io/static/v1?logo=docker&label=&message=docker&color=36465D&logoColor=AAA&style=flat-square"
            alt="docker"
          />
          <img
            width="65"
            height="20"
            decoding="async"
            loading="lazy"
            class="w-min"
            src="https://img.shields.io/static/v1?logo=nodedotjs&label=&message=nodejs&color=36465D&logoColor=AAA&style=flat-square&link"
            alt="nodejs"
          />
          <img
            width="67"
            height="20"
            decoding="async"
            loading="lazy"
            class="w-min"
            src="https://img.shields.io/static/v1?logo=amazonwebservices&label=&message=aws&color=36465D&logoColor=AAA&style=flat-square"
            alt="aws"
          />
          <img
            width="67"
            height="20"
            decoding="async"
            loading="lazy"
            class="w-min"
            src="https://img.shields.io/static/v1?logo=jenkins&label=&message=jenkins&color=36465D&logoColor=AAA&style=flat-square"
            alt="jenkins"
          />
          <img
            width="59"
            height="20"
            decoding="async"
            loading="lazy"
            class="w-min"
            src="https://img.shields.io/static/v1?logo=apachekafka&label=&message=kafka&color=36465D&logoColor=AAA&style=flat-square&link"
            alt="apachekafka"
          />
          <img
            width="63"
            height="20"
            decoding="async"
            loading="lazy"
            class="w-min"
            src="https://img.shields.io/static/v1?logo=redhat&label=&message=wildfly&color=36465D&logoColor=AAA&style=flat-square"
            alt="wildfly"
          />
        </div>
      ),
      text: (
        <article class="prose prose-xl sm:prose-sm md:prose-md lg:prose-lg xl:prose-xl 2xl:prose-2xl max-w-none text-neutral font-medium">
          <p>
            🙋‍♂️ My name is João Guilherme Ribeiro. I'm an eclectic coder with an
            agnostic view in software engineering.🤓
          </p>
          <p>
            💼 I have over 10 years of experience coding for advertising,
            banking, public health and HR spaces.
          </p>
          <p>
            🏬 I've worked at{" "}
            <a href="https://cappen.com" rel="nofollow">
              Cappen
            </a>
            ,{" "}
            <a href="https://ogilvy.com.br" rel="nofollow">
              Ogilvy
            </a>
            ,{" "}
            <a href="https://accenture.com" rel="nofollow">
              Accenture
            </a>
            ,{" "}
            <a href="https://vanhack.com" rel="nofollow">
              VanHack
            </a>
            ,{" "}
            <a href="https://crossover.com" rel="nofollow">
              Crossover
            </a>{" "}
            and{" "}
            <a href="https://epitrack.com.br" rel="nofollow">
              Epitrack
            </a>
            .
          </p>
          <p>
            🧑‍💻 I'm currently working at{" "}
            <strong>
              <a href="https://foursys.com.br" rel="nofollow">
                Foursys
              </a>
            </strong>
            .
          </p>
          <p>
            ⚙️ I do mostly software architecture focused on application
            development for the web.
          </p>
          <p>
            🌱 Learning <strong>Data Science</strong> and <em>Rust</em>.
          </p>
          <p>
            💬 Let's talk about <code>java</code>, <code>nodejs</code>,{" "}
            <code>frontend</code>, <code>data science</code> &amp;{" "}
            <code>devops</code>.
          </p>
          <p>
            📫 Hit me up on:{" "}
            <a href="mailto:guinetik@gmail.com">guinetik@gmail.com</a>
          </p>
          <p>🕹️ I'm into tech, games, infotainment and geek culture.</p>
        </article>
      ),
    },
    demos: {
      cards: [
        {
          title: "Svelte Wikipedia Search",
          description:
            "Small wikipedia search app that uses the Wikimedia API to search articles. Features internationalization, dark mode and fetching the top posts of the day.",
          image: "https://i.ibb.co/XDgYqQv/wiki-search.png",
          link: "https://js.guinetik.com/svelte-wikipedia-app/wiki/",
          tags: [
            {
              name: "Svelte",
              link: "https://svelte.dev/",
            },
            {
              name: "Tailwind CSS",
              link: "https://tailwindcss.com/",
            },
          ],
        },
        {
          title: "Exoplanets Review",
          description:
            "Aid for a search for a habitable planet. Discover and review exoplanets confirmed by the TESS probe. Post your comments and reviews about the planet.",
          image: "https://i.ibb.co/S7MfGhX/exoplanets.png",
          link: "https://exoplanets.guinetik.com/",
          tags: [
            {
              name: "ReactJs",
              link: "https://reactjs.org/",
            },
            {
              name: "Tailwind CSS",
              link: "https://tailwindcss.com/",
            },
            {
              name: "firebase",
              link: "https://firebase.google.com/",
            },
          ],
        },
        {
          title: "PyScript L.A.B",
          description: "Experiments running python on the browser.",
          image: "https://i.ibb.co/YLtPLqz/pyscript.png",
          link: "https://guinetik.github.io/python-ds",
          tags: [
            {
              name: "Python",
              link: "https://www.python.org/",
            },
            {
              name: "Tailwind CSS",
              link: "https://tailwindcss.com/",
            },
            {
              name: "Svelte",
              link: "https://svelte.dev/",
            },
          ],
        },
      ],
    },
    repos: {
      cards: [
        "colab-network-ec",
        "kepler-exoplanets-review",
        "gui-configs",
        "rust-kvstore",
        "rust-box",
        "vanguard-js",
        "blockchain-ts",
        "tempo-cc-backend",
        "python-ds",
        "epihack",
        "epihack-appgen",
        "sails-studies",
        "ige-studies",
        "projectw",
        "TrollMyFace",
        "ChatServer",
        "CameraPuzzle",
        "Pineapple",
        "hello-beacons",
      ],
    },
    projects: {
      cards: [
        {
          title: "Bradesco Mortgage Engine (2017-2025)",
          description:
            "As a Softwre Architect for Foursys, I currently serve in the Bradesco Mortgate Engine where clients could simulate, contract and update their mortgage contracts. The engine is powered by Spring Boot microsservices that integrate with the Bank's core systems, an intermediary Backend-For-Frontend layer built on NodejS/Express and an Angular frontend.",
          image: "https://i.ibb.co/cgkkF1q/crim.png",
          link: "https://banco.bradesco/html/classic/produtos-servicos/emprestimo-e-financiamento/imoveis/index.shtm",
          tags: [
            {
              name: "Angular",
              link: "https://angular.io/",
            },
            {
              name: "Express.JS",
              link: "https://expressjs.com/pt-br/",
            },
            {
              name: "Spring Boot",
              link: "https://spring.io/projects/spring-boot",
            },
          ],
        },
        {
          title: "Mãos Conecta App (2021)",
          description:
            "Visual Recognition search app for Artesan Brasil. This PWA built with Angular, connected to a JHipster backend allows the users to visually search for artworks from the Artesan Marketplace. Computer vision services powered by Azure Cognitive.",
          image: "/static/maos-conecta.png",
          link: "https://app.maosconecta.com.br/",
          tags: [
            {
              name: "Angular",
              link: "https://svelte.dev/",
            },
            {
              name: "JHipster",
              link: "https://tailwindcss.com/",
            },
            {
              name: "Azure Cognitive",
              link: "https://azure.microsoft.com/services/cognitive-services/computer-vision/",
            },
          ],
        },
        {
          title: "Brasil Sem Corona (2021)",
          description:
            "Digital Epidemiology app built during the pandemic. Based on Spring and Spring Data, this app generated reports and metrics based on self reports of symptoms submited thorugh the Colab.re App. Data generated was used for academic studies on the COVID-19 pandemic.",
          image: "/static/brasil-sem-corona.png",
          link: "https://brasilsemcorona.com.br/",
          tags: [
            {
              name: "Browse Articles",
              link: "https://scholar.google.com.br/scholar?hl=pt-BR&as_sdt=0%2C5&q=%22Brasil+sem+corona%22&btnG=",
            },
            {
              name: "Colab.re App",
              link: "https://www.colab.re/",
            },
            {
              name: "Spring Boot",
              link: "https://spring.io/projects/spring-boot",
            },
          ],
        },
        {
          title: "Staffeto Integrations for ADP (2020)",
          description:
            "Integration app for RH Spaces. Staffeto integrates popular HRMS/HRIS software with ADP to allow seamless integrations for onboarding, terminations, direct deposit, payroll and other HR related integrations. Staffeto is able to connect to Taleo, SAP Success Factors, Bullhorn, Lever and other popular HR systems.",
          image: "https://www.staffeto.com/resources/img/side_1.jpg",
          link: "https://www.staffeto.com/",
          tags: [
            {
              name: "ADP API",
              link: "https://developers.adp.com/",
            },
            {
              name: "Taleo",
              link: "https://docs.oracle.com/cloud/18a/taleo/OTWSU/_web_services_getting_started.htm#OTWSUid20110915145246868",
            },
            {
              name: "SuccessFactors",
              link: "https://api.sap.com/package/SuccessFactorsEmployeeCentral",
            },
            {
              name: "Activiti BPMN",
              link: "https://www.activiti.org/",
            },
          ],
        },
        {
          title: "Santander Mortgage Engine (2019)",
          description:
            "While working for Accenture, I was in the Architecture team for the Santander Mortgate Engine where clients could simulate, contract and update their mortgage contracts. We created a Docker Swarm based infrastructure, with an Angular frontend and a Java Microsservices based API powered by SpringBoot. Front/Backend communication is powered by GraphQL.",
          image: "https://i.ibb.co/vjJ9D8T/webcasas.png",
          link: "https://www.negociosimobiliarios.santander.com.br/negociosimobiliarios/",
          tags: [
            {
              name: "Angular",
              link: "https://angular.io/",
            },
            {
              name: "Spring Boot",
              link: "https://spring.io/projects/spring-boot",
            },
            {
              name: "Docker",
              link: "https://www.docker.com/",
            },
            {
              name: "GraphQL",
              link: "https://graphql.org/",
            },
          ],
        },
        {
          title: "Epihack Rio (2015)",
          description:
            "Epihack is a hackathon that involves epidemiologists and developers to create new approaches for digital disease detection. The first edition in Brazil was focused on Mass Gatherings tools to minimize risks during this kind of event. Epihack was supported by Skoll Global Threats Fund and organized by Epitrack with partnership of Instedd and Opendream.",
          image: "/static/epihack.png",
          link: "https://www.youtube.com/watch?v=SzLGD2MBV34",
          tags: [
            {
              name: "Official Site",
              link: "https://endingpandemics.org/projects/epihack/epihack-rio/",
            },
            {
              name: "Ionic Framework",
              link: "https://spring.io/projects/spring-boot",
            },
            {
              name: "NodeJS",
              link: "https://www.docker.com/",
            },
            {
              name: "Data Science",
              link: "https://graphql.org/",
            },
          ],
        },
        {
          title: "Billboard Fan Check Machine (2013)",
          description:
            "A machine that gives away a free magazine if you prove you're a fan of the artist on the cover. Plug your phone into the machine and it will analyse your music library. If the machine finds more than 20 songs by the artist on the cover of Billboard, you get a magazine for free!\nMachine Built with Arduino to control the dispenser gate and Raspberry Pi to read/analyse user's music library.",
          image: "/static/billboard-fan-check-machine.jpg",
          link: "https://vimeo.com/68697167",
          tags: [
            {
              name: "Raspberry Pi",
              link: "https://spring.io/projects/spring-boot",
            },
            {
              name: "C++",
              link: "https://isocpp.org/",
            },
            {
              name: "Arduino",
              link: "https://www.arduino.cc/",
            },
          ],
        },
        {
          title: "Billboard NFC Magazine (2013)",
          description:
            "Billboard Brazil is the first magazine that actually plays music. It transmits an interactive playlist with the artists on the cover directly to the consumers smartphones: without any apps, downloads, Bluetooth or QR codes. 100%. Just usign NFC (Near Field Communication) technology stickers behind the cover. Now you are a reader and a listener.",
          image: "/static/billboard-magazine.jpg",
          link: "https://www.youtube.com/watch?v=BBhNadcL4B0",
          tags: [
            {
              name: "NFC Tags",
              link: "https://wikipedia.org/wiki/Near_Field_Communication",
            },
            {
              name: "Angular",
              link: "https://www.docker.com/",
            },
          ],
        },
        {
          title: "Coke Happiness Refill (2012)",
          description:
            "The first soda dispenser machine that gives free data credits. An arduino machine that allow users to connect their phone to their wifi. Once connected, the user could refil their mobile data credits and navigate the internet for free. Each 'refil' would give you an extra 100MB of data. The app is a fork of the Firefox browser for android with a custom skin and a Proxy Server where all the URLs are redirected to for free navigation.",
          image: "/static/happiness-refill.jpg",
          link: "https://vimeo.com/40519663",
          tags: [
            {
              name: "Arduino",
              link: "https://www.arduino.cc/",
            },
            {
              name: "Android",
              link: "https://www.android.com/",
            },
            {
              name: "Java + Sockets",
              link: "https://www.baeldung.com/a-guide-to-java-sockets",
            },
          ],
        },
      ],
    },
  },
};
export default Site;
