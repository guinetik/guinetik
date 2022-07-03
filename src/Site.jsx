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
        title: "Githhub Demos",
        id: "demos",
        link: "#demos",
      },
      {
        title: "Githhub Repos",
        id: "repos",
        link: "#repos",
      },
      {
        title: "Featured Projects",
        id: "projects",
        link: "#projects",
      },
    ],
    mobile: [
      {
        title: "🙋‍♂️ About me",
        id: "about",
        link: "#about",
      },
      {
        title: "📈 Code & Me",
        id: "code",
        link: "#code",
      },
      {
        title: "🔭 Githhub Demos",
        id: "demos",
        link: "#demos",
      },
      {
        title: "🗃️ Githhub Repos",
        id: "repos",
        link: "#repos",
      },
      {
        title: "🛠️ Featured Projects",
        id: "projects",
        link: "#projects",
      },
    ],
  },
  themes: [
    {
      name: "😎 Cool",
      id: "guinetik",
    },
    {
      name: "😁 Excited",
      id: "synthwave",
    },
    {
      name: "🥰 In love",
      id: "valentine",
    },
    {
      name: "🤔 Bored",
      id: "cyberpunk",
    },
    {
      name: "😴 Sleepy",
      id: "night",
    },
    {
      name: "😢 Sad",
      id: "winter",
    },
    {
      name: "😤 Angry",
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
      title: "SVG Animated Gradient",
      url: "https://github.com/guinetik/guinetik/raw/master/header.svg",
      type: "img",
      link: "https://codepen.io/guinetik/pen/XjYjzG",
    },
  ],
  sections: {
    about: {
      title: "About me",
      header: "João Guilherme",
      subheader: "Software Architect - Creative Coder",
      aside: "🌎 RECIFE, BRAZIL",
      content: (
        <div class="flex flex-wrap w-full lg:w-9/12 px-4 justify-center">
          <a href="https://wakatime.com/@guinetik" target="_blank">
            <img
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
              class="block w-min"
              alt="StackOverflow"
              src="https://stackoverflow-badge.vercel.app/?userID=1293664"
            />
          </a>
          <span class="basis-full" />
          <img
            class="block w-min"
            src="https://camo.githubusercontent.com/5686768320e1793c1d6c7de68870f92d34bcd3f1e0ff51aaa84a5a9ff54f61d9/68747470733a2f2f696d672e736869656c64732e696f2f7374617469632f76313f6c6162656c3d266d6573736167653d6c616e6775616765733a26636f6c6f723d626c756576696f6c6574267374796c653d666c61742d737175617265"
            alt="languages"
          />
          <img
            class="block w-min"
            src="https://camo.githubusercontent.com/5bfffa61bd64f4b79083b071e59d2b2303c258fc7dbe67d10b549ccd542edc6e/68747470733a2f2f696d672e736869656c64732e696f2f7374617469632f76313f6c6f676f3d6a617661266c6162656c3d266d6573736167653d6a61766126636f6c6f723d333634363544266c6f676f436f6c6f723d414141267374796c653d666c61742d737175617265"
            alt="java"
          />
          <img
            class="block w-min"
            src="https://camo.githubusercontent.com/70cd8310cac0356d8489ae7a4379a997ddfcdd912dba759ff80374d895b1aded/68747470733a2f2f696d672e736869656c64732e696f2f7374617469632f76313f6c6f676f3d6a617661736372697074266c6162656c3d266d6573736167653d6a61766173637269707426636f6c6f723d333634363544266c6f676f436f6c6f723d414141267374796c653d666c61742d737175617265266c696e6b3d"
            alt="javascript"
          />
          <img
            class="block w-min"
            src="https://camo.githubusercontent.com/47c7f1d5d72ef7f82aed99138520afbafeb3b9bc288556c8e9211bfe1b47540c/68747470733a2f2f696d672e736869656c64732e696f2f7374617469632f76313f6c6f676f3d74797065736372697074266c6162656c3d266d6573736167653d7479706573637269707426636f6c6f723d333634363544266c6f676f436f6c6f723d414141267374796c653d666c61742d737175617265266c696e6b3d"
            alt="typescript"
          />
          <img
            class="block w-min"
            src="https://camo.githubusercontent.com/b03df30facba1b0ac329ddcda3f7b082b6078d8294a5dcf1b92ecf20e9881364/68747470733a2f2f696d672e736869656c64732e696f2f7374617469632f76313f6c6f676f3d707974686f6e266c6162656c3d266d6573736167653d707974686f6e26636f6c6f723d333634363544266c6f676f436f6c6f723d414141267374796c653d666c61742d737175617265"
            alt="python"
          />
          <span class="basis-full" />
          <img
            class="block w-min"
            src="https://camo.githubusercontent.com/7e2d24d9ca6fd8dfc25a65dc83594f652a6e8cf54cc602fbdc65d1355d15642c/68747470733a2f2f696d672e736869656c64732e696f2f7374617469632f76313f6c6162656c3d266d6573736167653d6c6962733a26636f6c6f723d696d706f7274616e74267374796c653d666c61742d737175617265"
            alt="libs"
          />
          <img
            class="w-min"
            src="https://camo.githubusercontent.com/9e15272caf7b62479fd729aff7f4343e691975c04c1093a9ccb62f8fc8d78706/68747470733a2f2f696d672e736869656c64732e696f2f7374617469632f76313f6c6f676f3d737072696e67626f6f74266c6162656c3d266d6573736167653d737072696e6726636f6c6f723d333634363544266c6f676f436f6c6f723d414141267374796c653d666c61742d737175617265"
            alt="spring"
          />
          <img
            class="w-min"
            src="https://camo.githubusercontent.com/62f935f83637b793731873fee6eed493cc8483c1b044735bf9aa0f7a22fb670c/68747470733a2f2f696d672e736869656c64732e696f2f7374617469632f76313f6c6f676f3d616e67756c6172266c6162656c3d266d6573736167653d616e67756c617226636f6c6f723d333634363544266c6f676f436f6c6f723d414141267374796c653d666c61742d737175617265"
            alt="angular"
          />
          <img
            class="w-min"
            src="https://camo.githubusercontent.com/8de9f783bb61b938887ded084bf3dcf9ae702cd0b1f991d4a9c7831d2bba4d97/68747470733a2f2f696d672e736869656c64732e696f2f7374617469632f76313f6c6f676f3d7265616374266c6162656c3d266d6573736167653d726561637426636f6c6f723d333634363544266c6f676f436f6c6f723d414141267374796c653d666c61742d737175617265"
            alt="react"
          />
          <img
            class="w-min"
            src="https://camo.githubusercontent.com/9d8badb3ff7e2d990386727e305a3541aba0e56f2e1ed0ca8de3d4b43d98936a/68747470733a2f2f696d672e736869656c64732e696f2f7374617469632f76313f6c6f676f3d70616e646173266c6162656c3d266d6573736167653d70616e64617326636f6c6f723d333634363544266c6f676f436f6c6f723d414141267374796c653d666c61742d737175617265"
            alt="pandas"
          />
          <img
            class="w-min"
            src="https://camo.githubusercontent.com/ce890e93e5ae4936f5519310380ea7128cc79f6984620c2c7273e683da58823c/68747470733a2f2f696d672e736869656c64732e696f2f7374617469632f76313f6c6f676f3d7363696b69746c6561726e266c6162656c3d266d6573736167653d736b6c6561726e26636f6c6f723d333634363544266c6f676f436f6c6f723d414141267374796c653d666c61742d737175617265"
            alt="sklearn"
          />
          <img
            class="w-min"
            src="https://camo.githubusercontent.com/209f9a8c1a2e80f1e803093a28302cfe36a0e563d6723b9883bcb6fa4b169fc7/68747470733a2f2f696d672e736869656c64732e696f2f7374617469632f76313f6c6f676f3d6e6f6465646f746a73266c6162656c3d266d6573736167653d6578707265737326636f6c6f723d333634363544266c6f676f436f6c6f723d414141267374796c653d666c61742d737175617265"
            alt="express"
          />
          <img
            class="w-min"
            src="https://camo.githubusercontent.com/25fc48cc289616f2a09514d47647cc8e4028d1d66a445ca55aa5019a3ab5857b/68747470733a2f2f696d672e736869656c64732e696f2f7374617469632f76313f6c6f676f3d74656e736f72666c6f77266c6162656c3d266d6573736167653d74656e736f72666c6f7726636f6c6f723d333634363544266c6f676f436f6c6f723d414141267374796c653d666c61742d737175617265"
            alt="tensorflow"
          />
          <span class="basis-full" />
          <img
            class="w-min"
            src="https://camo.githubusercontent.com/63115f6f54e1a5c78181f5a2aab55a1779a06371aea50f0f13c3566650a68c61/68747470733a2f2f696d672e736869656c64732e696f2f7374617469632f76313f6c6162656c3d266d6573736167653d746f6f6c733a26636f6c6f723d637269746963616c267374796c653d666c61742d737175617265"
            alt="tools"
          />
          <img
            class="w-min"
            src="https://camo.githubusercontent.com/5e3b86130d79e38ea615130635002cee460d4cc88b3c3b01493d396653ee8208/68747470733a2f2f696d672e736869656c64732e696f2f7374617469632f76313f6c6f676f3d6a6574627261696e73266c6162656c3d266d6573736167653d696e74656c6c696a26636f6c6f723d333634363544266c6f676f436f6c6f723d414141267374796c653d666c61742d737175617265"
            alt="intellij"
          />
          <img
            class="w-min"
            src="https://camo.githubusercontent.com/877ce7a5dfb91e267f1a9dbd9a8d4f4c542059f041b358765b13d1ec160b1dec/68747470733a2f2f696d672e736869656c64732e696f2f7374617469632f76313f6c6f676f3d676974266c6162656c3d266d6573736167653d67697426636f6c6f723d333634363544266c6f676f436f6c6f723d414141267374796c653d666c61742d737175617265"
          />
          <img
            class="w-min"
            src="https://camo.githubusercontent.com/382c9f76de48f1f30e9c779e7694c13b670b72167d999310f0dcc63734493630/68747470733a2f2f696d672e736869656c64732e696f2f7374617469632f76313f6c6f676f3d6a697261266c6162656c3d266d6573736167653d6a69726126636f6c6f723d333634363544266c6f676f436f6c6f723d414141267374796c653d666c61742d737175617265"
            alt="jira"
          />
          <img
            class="w-min"
            src="https://camo.githubusercontent.com/038933d5f9c39d3e67cf677976e328a86ba172245c5e962db9cc8f06c83d4e6b/68747470733a2f2f696d672e736869656c64732e696f2f7374617469632f76313f6c6f676f3d646f636b6572266c6162656c3d266d6573736167653d646f636b657226636f6c6f723d333634363544266c6f676f436f6c6f723d414141267374796c653d666c61742d737175617265"
            alt="docker"
          />
          <img
            class="w-min"
            src="https://camo.githubusercontent.com/c4abb694ad9ebe125038c2e481f7447b444117c95f24026b2d4023f9ae10ed6a/68747470733a2f2f696d672e736869656c64732e696f2f7374617469632f76313f6c6f676f3d6e6f6465646f746a73266c6162656c3d266d6573736167653d6e6f64656a7326636f6c6f723d333634363544266c6f676f436f6c6f723d414141267374796c653d666c61742d737175617265266c696e6b3d"
            alt="nodejs"
          />
          <img
            class="w-min"
            src="https://camo.githubusercontent.com/1192a59f28aa6384bc8d42965920d6efd1d80a2e10b2c92e6098bbf290e639cb/68747470733a2f2f696d672e736869656c64732e696f2f7374617469632f76313f6c6f676f3d6a656e6b696e73266c6162656c3d266d6573736167653d6a656e6b696e7326636f6c6f723d333634363544266c6f676f436f6c6f723d414141267374796c653d666c61742d737175617265"
            alt="jenkins"
          />
          <img
            class="w-min"
            src="https://camo.githubusercontent.com/8e4cf74b770c0796fa630cb74d2e1df78cf5bcb56144c3cad5f8c3d11daf849c/68747470733a2f2f696d672e736869656c64732e696f2f7374617469632f76313f6c6f676f3d6170616368656b61666b61266c6162656c3d266d6573736167653d6b61666b6126636f6c6f723d333634363544266c6f676f436f6c6f723d414141267374796c653d666c61742d737175617265266c696e6b3d"
            alt="apachekafka"
          />
          <img
            class="w-min"
            src="https://camo.githubusercontent.com/844908f199a7e4d0c8ca75c60fabc556f075c1cacd20308e6449edd7f923eb23/68747470733a2f2f696d672e736869656c64732e696f2f7374617469632f76313f6c6f676f3d6f7261636c65266c6162656c3d266d6573736167653d6f7261636c6526636f6c6f723d333634363544266c6f676f436f6c6f723d414141267374796c653d666c61742d737175617265266c696e6b3d"
            alt="oracle"
          />
          <img
            class="w-min"
            src="https://camo.githubusercontent.com/7967d081cd908da3f48111b5b6c410827348477d1e86ad19c316a27de096b99e/68747470733a2f2f696d672e736869656c64732e696f2f7374617469632f76313f6c6f676f3d726564686174266c6162656c3d266d6573736167653d77696c64666c7926636f6c6f723d333634363544266c6f676f436f6c6f723d414141267374796c653d666c61742d737175617265"
            alt="wildfly"
          />
        </div>
      ),
      text: (
        <article class="prose sm:prose-sm md:prose-md lg:prose-lg xl:prose-xl 2xl:prose-2xl max-w-none text-neutral">
          <p>
            🤓 I'm an eclectic coder with an agnostic view in software
            engineering.
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
          title: "Svelte Wiki Search",
          description:
            "Small wiki search app that uses the Wikimedia API to search articles. Features internationalization, dark mode and fetching the top posts of the day.",
          image: "https://i.ibb.co/XDgYqQv/wiki-search.png",
          link: "https://guinetik.github.io/vanguard-js/svelte-wikipedia-app/demo/",
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
          title: "Kepler Exoplanets",
          description:
            "Aid for a search for a habitable planet. Discover and review Kepler's exoplanets. Post your comments about the planet on a descentralized DB using gun.js.",
          image: "https://i.ibb.co/S7MfGhX/exoplanets.png",
          link: "https://guinetik.github.io/kepler-exoplanets-review/demo/",
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
              name: "Gun.js",
              link: "https://gun.js.org/",
            },
          ],
        },
        {
          title: "PyScript L.A.B",
          description: "Experiments running python on the browser.",
          image: "https://i.ibb.co/mzjWFMM/pyscript.png",
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
        "gui-configs",
        "rust-kvstore",
        "rust-box",
        "vanguard-js",
        "blockchain-ts",
        "tempo-cc-backend",
        "python-ds",
        "sails-studies",
        "epihack-appgen",
        "epihack",
        "kepler-exoplanets-review",
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
          title: "Bradesco Mortgage Engine",
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
          image:
            "https://camo.githubusercontent.com/d99da5bb2e24f740490d293283bdc8d7855522f5d2420c8080bfb190f2a52d05/68747470733a2f2f692e706f7374696d672e63632f7378625a737059722f696d6167652e706e67",
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
          image:
            "https://camo.githubusercontent.com/624119eb466143cf6f3357e92e916cee5f221e6be47849265e1b7b215d8fab77/68747470733a2f2f692e706f7374696d672e63632f54334e56793632512f696d6167652e706e67",
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
          description: "Epihack is a hackathon that involves epidemiologists and developers to create new approaches for digital disease detection. The first edition in Brazil was focused on Mass Gatherings tools to minimize risks during this kind of event. Epihack was supported by Skoll Global Threats Fund and organized by Epitrack with partnership of Instedd and Opendream.",
          image: "https://camo.githubusercontent.com/5c3928d57a5c4bf77824bd42b63db1daf6b0373ec85863bfbd754e73e84e1b63/68747470733a2f2f696d672e796f75747562652e636f6d2f76692f537a4c4744324d425633342f302e6a7067",
          link: "https://www.youtube.com/watch?v=SzLGD2MBV34",
          tags: [
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
          description: "A machine that gives away a free magazine if you prove you're a fan of the artist on the cover. Plug your phone into the machine and it will analyse your music library. If the machine finds more than 20 songs by the artist on the cover of Billboard, you get a magazine for free!\nMachine Built with Arduino to control the dispenser gate and Raspberry Pi to read/analyse user's music library.",
          image: "https://camo.githubusercontent.com/101bbffa0681a366dd0ead60510935bd71e7f5e944b2df574e4043357b18c3b4/68747470733a2f2f696d672e796f75747562652e636f6d2f76692f537157576d6450654b75672f302e6a7067",
          link: "https://www.youtube.com/watch?v=SqWWmdPeKug",
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
            }
          ],
        },
        {
          title: "Billboard NFC Magazine (2013)",
          description: "Billboard Brazil is the first magazine that actually plays music. It transmits an interactive playlist with the artists on the cover directly to the consumers smartphones: without any apps, downloads, Bluetooth or QR codes. 100%. Just usign NFC (Near Field Communication) technology stickers behind the cover. Now you are a reader and a listener.",
          image: "https://camo.githubusercontent.com/9b296815aaceecc8d2d96ca6c82a4cd5ea0a8f301763a30a4c4c8764c56db93b/68747470733a2f2f696d672e796f75747562652e636f6d2f76692f4242684e6164634c3442302f302e6a7067",
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
          description: "The first soda dispenser machine that gives free data credits. An arduino machine that allow users to connect their phone to their wifi. Once connected, the user could refil their mobile data credits and navigate the internet for free. Each 'refil' would give you an extra 100MB of data. The app is a fork of the Firefox browser for android with a custom skin and a Proxy Server where all the URLs are redirected to for free navigation.",
          image: "https://camo.githubusercontent.com/a8dcc9c988e60f53633bf925bdd9c3ac13100040b77f201bc8ef1d2054335f8e/68747470733a2f2f76756d626e61696c2e636f6d2f34303531393636332e6a7067",
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
            }
          ],
        },
      ],
    },
  },
};
export default Site;
