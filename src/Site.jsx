/**
 * General site store. 
 * It will hold all content and be called from all components.
 * It will be incorporated into a solid-js' store.
 * TODO - make it persist with Firebase
 */
let Site = {
  title: "Guinetik",
  description: "meta stuff",
  theme: "default",
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
        title: "Featured Projects",
        id: "projects",
        link: "#projects",
      },
    ],
    mobile: [
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
        title: "Featured Projects",
        id: "projects",
        link: "#projects",
      },
    ],
  },
  themes: [
    {
      name: "😎 Cool",
      id: "default",
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
  statsTheme:{
    "default": "nord",
    "synthwave": "tokyonight",
    "valentine": "buefy",
    "cyberpunk": "merko",
    "night": "city_lights",
    "winter": "blueberry",
    "halloween": "darcula",
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
        <div>
          <div class="mt-4">
            <img
              class="inline"
              alt="WakaTime"
              src="https://wakatime.com/badge/user/bd313e2a-0621-4893-8b72-922274e316de.svg"
            />
            <img
              class="inline"
              alt="StackOverflow"
              src="https://stackoverflow-badge.vercel.app/?userID=1293664"
            />
          </div>
          <div class="languages">
            <img
              class="inline"
              src="https://camo.githubusercontent.com/5686768320e1793c1d6c7de68870f92d34bcd3f1e0ff51aaa84a5a9ff54f61d9/68747470733a2f2f696d672e736869656c64732e696f2f7374617469632f76313f6c6162656c3d266d6573736167653d6c616e6775616765733a26636f6c6f723d626c756576696f6c6574267374796c653d666c61742d737175617265"
              alt="languages"
            />
            <img
              class="inline"
              src="https://camo.githubusercontent.com/5bfffa61bd64f4b79083b071e59d2b2303c258fc7dbe67d10b549ccd542edc6e/68747470733a2f2f696d672e736869656c64732e696f2f7374617469632f76313f6c6f676f3d6a617661266c6162656c3d266d6573736167653d6a61766126636f6c6f723d333634363544266c6f676f436f6c6f723d414141267374796c653d666c61742d737175617265"
              alt="java"
            />
            <img
              class="inline"
              src="https://camo.githubusercontent.com/70cd8310cac0356d8489ae7a4379a997ddfcdd912dba759ff80374d895b1aded/68747470733a2f2f696d672e736869656c64732e696f2f7374617469632f76313f6c6f676f3d6a617661736372697074266c6162656c3d266d6573736167653d6a61766173637269707426636f6c6f723d333634363544266c6f676f436f6c6f723d414141267374796c653d666c61742d737175617265266c696e6b3d"
              alt="javascript"
            />
            <img
              class="inline"
              src="https://camo.githubusercontent.com/47c7f1d5d72ef7f82aed99138520afbafeb3b9bc288556c8e9211bfe1b47540c/68747470733a2f2f696d672e736869656c64732e696f2f7374617469632f76313f6c6f676f3d74797065736372697074266c6162656c3d266d6573736167653d7479706573637269707426636f6c6f723d333634363544266c6f676f436f6c6f723d414141267374796c653d666c61742d737175617265266c696e6b3d"
              alt="typescript"
            />
            <img
              class="inline"
              src="https://camo.githubusercontent.com/b03df30facba1b0ac329ddcda3f7b082b6078d8294a5dcf1b92ecf20e9881364/68747470733a2f2f696d672e736869656c64732e696f2f7374617469632f76313f6c6f676f3d707974686f6e266c6162656c3d266d6573736167653d707974686f6e26636f6c6f723d333634363544266c6f676f436f6c6f723d414141267374796c653d666c61742d737175617265"
              alt="python"
            />
          </div>
          <div class="libs">
            <img
              class="inline"
              src="https://camo.githubusercontent.com/7e2d24d9ca6fd8dfc25a65dc83594f652a6e8cf54cc602fbdc65d1355d15642c/68747470733a2f2f696d672e736869656c64732e696f2f7374617469632f76313f6c6162656c3d266d6573736167653d6c6962733a26636f6c6f723d696d706f7274616e74267374796c653d666c61742d737175617265"
              alt="libs"
            />
            <img
              class="inline"
              src="https://camo.githubusercontent.com/9e15272caf7b62479fd729aff7f4343e691975c04c1093a9ccb62f8fc8d78706/68747470733a2f2f696d672e736869656c64732e696f2f7374617469632f76313f6c6f676f3d737072696e67626f6f74266c6162656c3d266d6573736167653d737072696e6726636f6c6f723d333634363544266c6f676f436f6c6f723d414141267374796c653d666c61742d737175617265"
              alt="spring"
            />
            <img
              class="inline"
              src="https://camo.githubusercontent.com/62f935f83637b793731873fee6eed493cc8483c1b044735bf9aa0f7a22fb670c/68747470733a2f2f696d672e736869656c64732e696f2f7374617469632f76313f6c6f676f3d616e67756c6172266c6162656c3d266d6573736167653d616e67756c617226636f6c6f723d333634363544266c6f676f436f6c6f723d414141267374796c653d666c61742d737175617265"
              alt="angular"
            />
            <img
              class="inline"
              src="https://camo.githubusercontent.com/8de9f783bb61b938887ded084bf3dcf9ae702cd0b1f991d4a9c7831d2bba4d97/68747470733a2f2f696d672e736869656c64732e696f2f7374617469632f76313f6c6f676f3d7265616374266c6162656c3d266d6573736167653d726561637426636f6c6f723d333634363544266c6f676f436f6c6f723d414141267374796c653d666c61742d737175617265"
              alt="react"
            />
            <img
              class="inline"
              src="https://camo.githubusercontent.com/9d8badb3ff7e2d990386727e305a3541aba0e56f2e1ed0ca8de3d4b43d98936a/68747470733a2f2f696d672e736869656c64732e696f2f7374617469632f76313f6c6f676f3d70616e646173266c6162656c3d266d6573736167653d70616e64617326636f6c6f723d333634363544266c6f676f436f6c6f723d414141267374796c653d666c61742d737175617265"
              alt="pandas"
            />
            <img
              class="inline"
              src="https://camo.githubusercontent.com/ce890e93e5ae4936f5519310380ea7128cc79f6984620c2c7273e683da58823c/68747470733a2f2f696d672e736869656c64732e696f2f7374617469632f76313f6c6f676f3d7363696b69746c6561726e266c6162656c3d266d6573736167653d736b6c6561726e26636f6c6f723d333634363544266c6f676f436f6c6f723d414141267374796c653d666c61742d737175617265"
              alt="sklearn"
            />
            <img
              class="inline"
              src="https://camo.githubusercontent.com/209f9a8c1a2e80f1e803093a28302cfe36a0e563d6723b9883bcb6fa4b169fc7/68747470733a2f2f696d672e736869656c64732e696f2f7374617469632f76313f6c6f676f3d6e6f6465646f746a73266c6162656c3d266d6573736167653d6578707265737326636f6c6f723d333634363544266c6f676f436f6c6f723d414141267374796c653d666c61742d737175617265"
              alt="express"
            />
            <img
              class="inline"
              src="https://camo.githubusercontent.com/25fc48cc289616f2a09514d47647cc8e4028d1d66a445ca55aa5019a3ab5857b/68747470733a2f2f696d672e736869656c64732e696f2f7374617469632f76313f6c6f676f3d74656e736f72666c6f77266c6162656c3d266d6573736167653d74656e736f72666c6f7726636f6c6f723d333634363544266c6f676f436f6c6f723d414141267374796c653d666c61742d737175617265"
              alt="tensorflow"
            />
          </div>
          <div class="tools">
            <img
              class="inline"
              src="https://camo.githubusercontent.com/63115f6f54e1a5c78181f5a2aab55a1779a06371aea50f0f13c3566650a68c61/68747470733a2f2f696d672e736869656c64732e696f2f7374617469632f76313f6c6162656c3d266d6573736167653d746f6f6c733a26636f6c6f723d637269746963616c267374796c653d666c61742d737175617265"
              alt="tools"
            />
            <img
              src="https://camo.githubusercontent.com/5e3b86130d79e38ea615130635002cee460d4cc88b3c3b01493d396653ee8208/68747470733a2f2f696d672e736869656c64732e696f2f7374617469632f76313f6c6f676f3d6a6574627261696e73266c6162656c3d266d6573736167653d696e74656c6c696a26636f6c6f723d333634363544266c6f676f436f6c6f723d414141267374796c653d666c61742d737175617265"
              alt="intellij"
              class="inline"
            />
            <img
              src="https://camo.githubusercontent.com/877ce7a5dfb91e267f1a9dbd9a8d4f4c542059f041b358765b13d1ec160b1dec/68747470733a2f2f696d672e736869656c64732e696f2f7374617469632f76313f6c6f676f3d676974266c6162656c3d266d6573736167653d67697426636f6c6f723d333634363544266c6f676f436f6c6f723d414141267374796c653d666c61742d737175617265"
              alt="git"
              class="inline"
            />
            <img
              src="https://camo.githubusercontent.com/382c9f76de48f1f30e9c779e7694c13b670b72167d999310f0dcc63734493630/68747470733a2f2f696d672e736869656c64732e696f2f7374617469632f76313f6c6f676f3d6a697261266c6162656c3d266d6573736167653d6a69726126636f6c6f723d333634363544266c6f676f436f6c6f723d414141267374796c653d666c61742d737175617265"
              alt="jira"
              class="inline"
            />
            <img
              src="https://camo.githubusercontent.com/038933d5f9c39d3e67cf677976e328a86ba172245c5e962db9cc8f06c83d4e6b/68747470733a2f2f696d672e736869656c64732e696f2f7374617469632f76313f6c6f676f3d646f636b6572266c6162656c3d266d6573736167653d646f636b657226636f6c6f723d333634363544266c6f676f436f6c6f723d414141267374796c653d666c61742d737175617265"
              alt="docker"
              class="inline"
            />
            <img
              src="https://camo.githubusercontent.com/c4abb694ad9ebe125038c2e481f7447b444117c95f24026b2d4023f9ae10ed6a/68747470733a2f2f696d672e736869656c64732e696f2f7374617469632f76313f6c6f676f3d6e6f6465646f746a73266c6162656c3d266d6573736167653d6e6f64656a7326636f6c6f723d333634363544266c6f676f436f6c6f723d414141267374796c653d666c61742d737175617265266c696e6b3d"
              alt="nodejs"
              class="inline"
            />
            <img
              src="https://camo.githubusercontent.com/1192a59f28aa6384bc8d42965920d6efd1d80a2e10b2c92e6098bbf290e639cb/68747470733a2f2f696d672e736869656c64732e696f2f7374617469632f76313f6c6f676f3d6a656e6b696e73266c6162656c3d266d6573736167653d6a656e6b696e7326636f6c6f723d333634363544266c6f676f436f6c6f723d414141267374796c653d666c61742d737175617265"
              alt="jenkins"
              class="inline"
            />
            <img
              src="https://camo.githubusercontent.com/8e4cf74b770c0796fa630cb74d2e1df78cf5bcb56144c3cad5f8c3d11daf849c/68747470733a2f2f696d672e736869656c64732e696f2f7374617469632f76313f6c6f676f3d6170616368656b61666b61266c6162656c3d266d6573736167653d6b61666b6126636f6c6f723d333634363544266c6f676f436f6c6f723d414141267374796c653d666c61742d737175617265266c696e6b3d"
              alt="apachekafka"
              class="inline"
            />
            <img
              src="https://camo.githubusercontent.com/844908f199a7e4d0c8ca75c60fabc556f075c1cacd20308e6449edd7f923eb23/68747470733a2f2f696d672e736869656c64732e696f2f7374617469632f76313f6c6f676f3d6f7261636c65266c6162656c3d266d6573736167653d6f7261636c6526636f6c6f723d333634363544266c6f676f436f6c6f723d414141267374796c653d666c61742d737175617265266c696e6b3d"
              alt="oracle"
              class="inline"
            />
            <img
              src="https://camo.githubusercontent.com/7967d081cd908da3f48111b5b6c410827348477d1e86ad19c316a27de096b99e/68747470733a2f2f696d672e736869656c64732e696f2f7374617469632f76313f6c6f676f3d726564686174266c6162656c3d266d6573736167653d77696c64666c7926636f6c6f723d333634363544266c6f676f436f6c6f723d414141267374796c653d666c61742d737175617265"
              alt="wildfly"
              class="inline"
            />
          </div>
        </div>
      ),
      text: (
        <p class="text-neutral mb-4 text-lg leading-relaxed">
          🤓 I'm an eclectic coder with an agnostic view in software
          engineering.
          <br />
          💼 I have over 10 years of experience coding for advertising, banking,
          public health and HR spaces.
          <br />
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
          <br />
          🧑‍💻 I'm currently working at{" "}
          <strong>
            <a href="https://foursys.com.br" rel="nofollow">
              Foursys
            </a>
          </strong>
          .
          <br />
          ⚙️ I do mostly software architecture focused on application
          development for the web
          <br />
          🌱 Learning <strong>Data Science</strong> and <em>Rust</em>
          <br />
          💬 Let's talk about <code>java</code>, <code>nodejs</code>,{" "}
          <code>frontend</code>, <code>data science</code> &amp;{" "}
          <code>devops</code>
          <br />
          🕹️ I'm into tech, games, infotainment and geek culture
        </p>
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
        "vanguard-js",
        "tempo-cc-backend",
        "python-ds",
        "sails-studies",
        "epihack-appgen",
      ],
    },
    projects: {
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
  },
};
export default Site;
