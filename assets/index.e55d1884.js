import{t as m,c as y,a as n,b as I,u as P,d as S,o as E,i as s,e as _,s as x,F as $,f as j,g as L,h as R,j as N,k as M,B as D,l as G,m as H,n as O,p as b,r as V}from"./vendor.e8d1db19.js";import{graphql as W}from"https://cdn.skypack.dev/@octokit/graphql";const J=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const t of o.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&i(t)}).observe(document,{childList:!0,subtree:!0});function d(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=d(e);fetch(e.href,o)}};J();const q="modulepreload",F={},U="/",w=function(r,d){return!d||d.length===0?r():Promise.all(d.map(i=>{if(i=`${U}${i}`,i in F)return;F[i]=!0;const e=i.endsWith(".css"),o=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${i}"]${o}`))return;const t=document.createElement("link");if(t.rel=e?"stylesheet":q,e||(t.as="script",t.crossOrigin=""),t.href=i,document.head.appendChild(t),e)return new Promise((a,c)=>{t.addEventListener("load",a),t.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>r())},Q=m('<div class="flex flex-wrap w-full lg:w-9/12 px-4 justify-center"><a href="https://wakatime.com/@guinetik" target="_blank"><img width="80.7" height="20" decoding="async" loading="lazy" class="block w-min" alt="WakaTime" src="https://wakatime.com/badge/user/bd313e2a-0621-4893-8b72-922274e316de.svg"></a><a href="https://stackoverflow.com/users/1293664/guinetik" target="_blank"><img width="168" height="21" decoding="async" loading="lazy" class="block w-min" alt="StackOverflow" src="https://stackoverflow-badge.vercel.app/?userID=1293664"></a><span class="basis-full"></span><img width="71" height="20" decoding="async" loading="lazy" class="block w-min" src="https://camo.githubusercontent.com/5686768320e1793c1d6c7de68870f92d34bcd3f1e0ff51aaa84a5a9ff54f61d9/68747470733a2f2f696d672e736869656c64732e696f2f7374617469632f76313f6c6162656c3d266d6573736167653d6c616e6775616765733a26636f6c6f723d626c756576696f6c6574267374796c653d666c61742d737175617265" alt="languages"><img width="33" height="20" decoding="async" loading="lazy" class="block w-min" src="https://camo.githubusercontent.com/5bfffa61bd64f4b79083b071e59d2b2303c258fc7dbe67d10b549ccd542edc6e/68747470733a2f2f696d672e736869656c64732e696f2f7374617469632f76313f6c6f676f3d6a617661266c6162656c3d266d6573736167653d6a61766126636f6c6f723d333634363544266c6f676f436f6c6f723d414141267374796c653d666c61742d737175617265" alt="java"><img width="81" height="20" decoding="async" loading="lazy" class="block w-min" src="https://camo.githubusercontent.com/70cd8310cac0356d8489ae7a4379a997ddfcdd912dba759ff80374d895b1aded/68747470733a2f2f696d672e736869656c64732e696f2f7374617469632f76313f6c6f676f3d6a617661736372697074266c6162656c3d266d6573736167653d6a61766173637269707426636f6c6f723d333634363544266c6f676f436f6c6f723d414141267374796c653d666c61742d737175617265266c696e6b3d" alt="javascript"><img width="83" height="20" decoding="async" loading="lazy" class="block w-min" src="https://camo.githubusercontent.com/47c7f1d5d72ef7f82aed99138520afbafeb3b9bc288556c8e9211bfe1b47540c/68747470733a2f2f696d672e736869656c64732e696f2f7374617469632f76313f6c6f676f3d74797065736372697074266c6162656c3d266d6573736167653d7479706573637269707426636f6c6f723d333634363544266c6f676f436f6c6f723d414141267374796c653d666c61742d737175617265266c696e6b3d" alt="typescript"><img width="67" height="20" decoding="async" loading="lazy" class="block w-min" src="https://camo.githubusercontent.com/b03df30facba1b0ac329ddcda3f7b082b6078d8294a5dcf1b92ecf20e9881364/68747470733a2f2f696d672e736869656c64732e696f2f7374617469632f76313f6c6f676f3d707974686f6e266c6162656c3d266d6573736167653d707974686f6e26636f6c6f723d333634363544266c6f676f436f6c6f723d414141267374796c653d666c61742d737175617265" alt="python"><span class="basis-full"></span><img decoding="async" loading="lazy" class="block w-min" src="https://camo.githubusercontent.com/7e2d24d9ca6fd8dfc25a65dc83594f652a6e8cf54cc602fbdc65d1355d15642c/68747470733a2f2f696d672e736869656c64732e696f2f7374617469632f76313f6c6162656c3d266d6573736167653d6c6962733a26636f6c6f723d696d706f7274616e74267374796c653d666c61742d737175617265" alt="libs"><img width="33" height="20" decoding="async" loading="lazy" class="w-min" src="https://camo.githubusercontent.com/9e15272caf7b62479fd729aff7f4343e691975c04c1093a9ccb62f8fc8d78706/68747470733a2f2f696d672e736869656c64732e696f2f7374617469632f76313f6c6f676f3d737072696e67626f6f74266c6162656c3d266d6573736167653d737072696e6726636f6c6f723d333634363544266c6f676f436f6c6f723d414141267374796c653d666c61742d737175617265" alt="spring"><img decoding="async" loading="lazy" class="w-min" src="https://camo.githubusercontent.com/62f935f83637b793731873fee6eed493cc8483c1b044735bf9aa0f7a22fb670c/68747470733a2f2f696d672e736869656c64732e696f2f7374617469632f76313f6c6f676f3d616e67756c6172266c6162656c3d266d6573736167653d616e67756c617226636f6c6f723d333634363544266c6f676f436f6c6f723d414141267374796c653d666c61742d737175617265" alt="angular"><img width="69" height="20" decoding="async" loading="lazy" class="w-min" src="https://camo.githubusercontent.com/8de9f783bb61b938887ded084bf3dcf9ae702cd0b1f991d4a9c7831d2bba4d97/68747470733a2f2f696d672e736869656c64732e696f2f7374617469632f76313f6c6f676f3d7265616374266c6162656c3d266d6573736167653d726561637426636f6c6f723d333634363544266c6f676f436f6c6f723d414141267374796c653d666c61742d737175617265" alt="react"><img width="67" height="20" decoding="async" loading="lazy" class="w-min" src="https://camo.githubusercontent.com/9d8badb3ff7e2d990386727e305a3541aba0e56f2e1ed0ca8de3d4b43d98936a/68747470733a2f2f696d672e736869656c64732e696f2f7374617469632f76313f6c6f676f3d70616e646173266c6162656c3d266d6573736167653d70616e64617326636f6c6f723d333634363544266c6f676f436f6c6f723d414141267374796c653d666c61742d737175617265" alt="pandas"><img width="69" height="20" decoding="async" loading="lazy" class="w-min" src="https://camo.githubusercontent.com/ce890e93e5ae4936f5519310380ea7128cc79f6984620c2c7273e683da58823c/68747470733a2f2f696d672e736869656c64732e696f2f7374617469632f76313f6c6f676f3d7363696b69746c6561726e266c6162656c3d266d6573736167653d736b6c6561726e26636f6c6f723d333634363544266c6f676f436f6c6f723d414141267374796c653d666c61742d737175617265" alt="sklearn"><img width="71" height="20" decoding="async" loading="lazy" class="w-min" src="https://camo.githubusercontent.com/209f9a8c1a2e80f1e803093a28302cfe36a0e563d6723b9883bcb6fa4b169fc7/68747470733a2f2f696d672e736869656c64732e696f2f7374617469632f76313f6c6f676f3d6e6f6465646f746a73266c6162656c3d266d6573736167653d6578707265737326636f6c6f723d333634363544266c6f676f436f6c6f723d414141267374796c653d666c61742d737175617265" alt="express"><img width="85" height="20" decoding="async" loading="lazy" class="w-min" src="https://camo.githubusercontent.com/25fc48cc289616f2a09514d47647cc8e4028d1d66a445ca55aa5019a3ab5857b/68747470733a2f2f696d672e736869656c64732e696f2f7374617469632f76313f6c6f676f3d74656e736f72666c6f77266c6162656c3d266d6573736167653d74656e736f72666c6f7726636f6c6f723d333634363544266c6f676f436f6c6f723d414141267374796c653d666c61742d737175617265" alt="tensorflow"><span class="basis-full"></span><img width="41" height="20" decoding="async" loading="lazy" class="w-min" src="https://camo.githubusercontent.com/63115f6f54e1a5c78181f5a2aab55a1779a06371aea50f0f13c3566650a68c61/68747470733a2f2f696d672e736869656c64732e696f2f7374617469632f76313f6c6162656c3d266d6573736167653d746f6f6c733a26636f6c6f723d637269746963616c267374796c653d666c61742d737175617265" alt="tools"><img width="61" height="20" decoding="async" loading="lazy" class="w-min" src="https://camo.githubusercontent.com/5e3b86130d79e38ea615130635002cee460d4cc88b3c3b01493d396653ee8208/68747470733a2f2f696d672e736869656c64732e696f2f7374617469632f76313f6c6f676f3d6a6574627261696e73266c6162656c3d266d6573736167653d696e74656c6c696a26636f6c6f723d333634363544266c6f676f436f6c6f723d414141267374796c653d666c61742d737175617265" alt="intellij"><img width="43" height="20" decoding="async" loading="lazy" class="w-min" src="https://camo.githubusercontent.com/877ce7a5dfb91e267f1a9dbd9a8d4f4c542059f041b358765b13d1ec160b1dec/68747470733a2f2f696d672e736869656c64732e696f2f7374617469632f76313f6c6f676f3d676974266c6162656c3d266d6573736167653d67697426636f6c6f723d333634363544266c6f676f436f6c6f723d414141267374796c653d666c61742d737175617265" alt="git"><img width="47" height="20" decoding="async" loading="lazy" class="w-min" src="https://camo.githubusercontent.com/382c9f76de48f1f30e9c779e7694c13b670b72167d999310f0dcc63734493630/68747470733a2f2f696d672e736869656c64732e696f2f7374617469632f76313f6c6f676f3d6a697261266c6162656c3d266d6573736167653d6a69726126636f6c6f723d333634363544266c6f676f436f6c6f723d414141267374796c653d666c61742d737175617265" alt="jira"><img width="65" height="20" decoding="async" loading="lazy" class="w-min" src="https://camo.githubusercontent.com/038933d5f9c39d3e67cf677976e328a86ba172245c5e962db9cc8f06c83d4e6b/68747470733a2f2f696d672e736869656c64732e696f2f7374617469632f76313f6c6f676f3d646f636b6572266c6162656c3d266d6573736167653d646f636b657226636f6c6f723d333634363544266c6f676f436f6c6f723d414141267374796c653d666c61742d737175617265" alt="docker"><img width="65" height="20" decoding="async" loading="lazy" class="w-min" src="https://camo.githubusercontent.com/c4abb694ad9ebe125038c2e481f7447b444117c95f24026b2d4023f9ae10ed6a/68747470733a2f2f696d672e736869656c64732e696f2f7374617469632f76313f6c6f676f3d6e6f6465646f746a73266c6162656c3d266d6573736167653d6e6f64656a7326636f6c6f723d333634363544266c6f676f436f6c6f723d414141267374796c653d666c61742d737175617265266c696e6b3d" alt="nodejs"><img width="67" height="20" decoding="async" loading="lazy" class="w-min" src="https://camo.githubusercontent.com/1192a59f28aa6384bc8d42965920d6efd1d80a2e10b2c92e6098bbf290e639cb/68747470733a2f2f696d672e736869656c64732e696f2f7374617469632f76313f6c6f676f3d6a656e6b696e73266c6162656c3d266d6573736167653d6a656e6b696e7326636f6c6f723d333634363544266c6f676f436f6c6f723d414141267374796c653d666c61742d737175617265" alt="jenkins"><img width="59" height="20" decoding="async" loading="lazy" class="w-min" src="https://camo.githubusercontent.com/8e4cf74b770c0796fa630cb74d2e1df78cf5bcb56144c3cad5f8c3d11daf849c/68747470733a2f2f696d672e736869656c64732e696f2f7374617469632f76313f6c6f676f3d6170616368656b61666b61266c6162656c3d266d6573736167653d6b61666b6126636f6c6f723d333634363544266c6f676f436f6c6f723d414141267374796c653d666c61742d737175617265266c696e6b3d" alt="apachekafka"><img width="61" height="20" decoding="async" loading="lazy" class="w-min" src="https://camo.githubusercontent.com/844908f199a7e4d0c8ca75c60fabc556f075c1cacd20308e6449edd7f923eb23/68747470733a2f2f696d672e736869656c64732e696f2f7374617469632f76313f6c6f676f3d6f7261636c65266c6162656c3d266d6573736167653d6f7261636c6526636f6c6f723d333634363544266c6f676f436f6c6f723d414141267374796c653d666c61742d737175617265266c696e6b3d" alt="oracle"><img width="63" height="20" decoding="async" loading="lazy" class="w-min" src="https://camo.githubusercontent.com/7967d081cd908da3f48111b5b6c410827348477d1e86ad19c316a27de096b99e/68747470733a2f2f696d672e736869656c64732e696f2f7374617469632f76313f6c6f676f3d726564686174266c6162656c3d266d6573736167653d77696c64666c7926636f6c6f723d333634363544266c6f676f436f6c6f723d414141267374796c653d666c61742d737175617265" alt="wildfly"></div>'),X=m(`<article class="prose prose-xl sm:prose-sm md:prose-md lg:prose-lg xl:prose-xl 2xl:prose-2xl max-w-none text-neutral font-medium"><p>\u{1F64B}\u200D\u2642\uFE0F My name is Jo\xE3o Guilherme Ribeiro. I'm an eclectic coder with an agnostic view in software engineering.\u{1F913}</p><p>\u{1F4BC} I have over 10 years of experience coding for advertising, banking, public health and HR spaces.</p><p>\u{1F3EC} I've worked at <a href="https://cappen.com" rel="nofollow">Cappen</a>, <a href="https://ogilvy.com.br" rel="nofollow">Ogilvy</a>, <a href="https://accenture.com" rel="nofollow">Accenture</a>, <a href="https://vanhack.com" rel="nofollow">VanHack</a>, <a href="https://crossover.com" rel="nofollow">Crossover</a> and <a href="https://epitrack.com.br" rel="nofollow">Epitrack</a>.</p><p>\u{1F9D1}\u200D\u{1F4BB} I'm currently working at <strong><a href="https://foursys.com.br" rel="nofollow">Foursys</a></strong>.</p><p>\u2699\uFE0F I do mostly software architecture focused on application development for the web.</p><p>\u{1F331} Learning <strong>Data Science</strong> and <em>Rust</em>.</p><p>\u{1F4AC} Let's talk about <code>java</code>, <code>nodejs</code>, <code>frontend</code>, <code>data science</code> &amp; <code>devops</code>.</p><p>\u{1F4EB} Hit me up on: <a href="mailto:guinetik@gmail.com">guinetik@gmail.com</a></p><p>\u{1F579}\uFE0F I'm into tech, games, infotainment and geek culture.</p></article>`);let u={title:"Guinetik",description:"meta stuff",theme:"guinetik",menu:{main:[{title:"About me",id:"about",link:"#about"},{title:"Code & Me",id:"code",link:"#code"},{title:"Featured Projects",id:"projects",link:"#projects"},{title:"Githhub Repos",id:"repos",link:"#repos"},{title:"Githhub Demos",id:"demos",link:"#demos"}],mobile:[{title:"\u{1F64B}\u200D\u2642\uFE0F About me",id:"about",link:"#about"},{title:"\u{1F6E0}\uFE0F Featured Projects",id:"projects",link:"#projects"},{title:"\u{1F52D} Githhub Demos",id:"demos",link:"#demos"},{title:"\u{1F4C8} Code & Me",id:"code",link:"#code"},{title:"\u{1F5C3}\uFE0F Githhub Repos",id:"repos",link:"#repos"}]},themes:[{name:"\u{1F60E} Cool",id:"guinetik"},{name:"\u{1F984} Synthwave",id:"synthwave"},{name:"\u{1F970} Cute",id:"valentine"},{name:"\u{1F3B8}\u2007Cyberpunk",id:"cyberpunk"},{name:"\u{1F383} Halloween",id:"halloween"}],statsTheme:{guinetik:"nord",synthwave:"radical",valentine:"buefy",cyberpunk:"merko",night:"nord",winter:"default ",halloween:"darcula"},contribsTheme:{guinetik:"nord",synthwave:"redical",valentine:"default",cyberpunk:"chartreuse-dark",night:"nord",winter:"minimal",halloween:"gruvbox"},statsBg:{guinetik:"2e3440",synthwave:"141321",valentine:"FFFFFF",cyberpunk:"0a0f0b",night:"FFFFFF",winter:"FFFFFF",halloween:"242424"},experiments:[{title:"SVG Animated Gradient",url:"https://github.com/guinetik/guinetik/raw/master/header.svg",type:"img",link:"https://codepen.io/guinetik/pen/XjYjzG"}],sections:{about:{title:"About me",header:"Hello world! This is Guinetik",subheader:"I am a Software Architect and Creative Coder",aside:"\u{1F30E} RECIFE, BRAZIL",content:Q.cloneNode(!0),text:X.cloneNode(!0)},demos:{cards:[{title:"Svelte Wikipedia Search",description:"Small wikipedia search app that uses the Wikimedia API to search articles. Features internationalization, dark mode and fetching the top posts of the day.",image:"https://i.ibb.co/XDgYqQv/wiki-search.png",link:"https://js.guinetik.com/svelte-wikipedia-app/wiki/",tags:[{name:"Svelte",link:"https://svelte.dev/"},{name:"Tailwind CSS",link:"https://tailwindcss.com/"}]},{title:"Exoplanets Review",description:"Aid for a search for a habitable planet. Discover and review exoplanets confirmed by the TESS probe. Post your comments and reviews about the planet.",image:"https://i.ibb.co/S7MfGhX/exoplanets.png",link:"https://exoplanets.guinetik.com/",tags:[{name:"ReactJs",link:"https://reactjs.org/"},{name:"Tailwind CSS",link:"https://tailwindcss.com/"},{name:"firebase",link:"https://firebase.google.com/"}]},{title:"PyScript L.A.B",description:"Experiments running python on the browser.",image:"https://i.ibb.co/mzjWFMM/pyscript.png",link:"https://guinetik.github.io/python-ds",tags:[{name:"Python",link:"https://www.python.org/"},{name:"Tailwind CSS",link:"https://tailwindcss.com/"},{name:"Svelte",link:"https://svelte.dev/"}]}]},repos:{cards:["gui-configs","rust-kvstore","rust-box","vanguard-js","blockchain-ts","tempo-cc-backend","python-ds","sails-studies","epihack-appgen","epihack","kepler-exoplanets-review","ige-studies","projectw","TrollMyFace","ChatServer","CameraPuzzle","Pineapple","hello-beacons"]},projects:{cards:[{title:"Bradesco Mortgage Engine",description:"As a Softwre Architect for Foursys, I currently serve in the Bradesco Mortgate Engine where clients could simulate, contract and update their mortgage contracts. The engine is powered by Spring Boot microsservices that integrate with the Bank's core systems, an intermediary Backend-For-Frontend layer built on NodejS/Express and an Angular frontend.",image:"https://i.ibb.co/cgkkF1q/crim.png",link:"https://banco.bradesco/html/classic/produtos-servicos/emprestimo-e-financiamento/imoveis/index.shtm",tags:[{name:"Angular",link:"https://angular.io/"},{name:"Express.JS",link:"https://expressjs.com/pt-br/"},{name:"Spring Boot",link:"https://spring.io/projects/spring-boot"}]},{title:"M\xE3os Conecta App (2021)",description:"Visual Recognition search app for Artesan Brasil. This PWA built with Angular, connected to a JHipster backend allows the users to visually search for artworks from the Artesan Marketplace. Computer vision services powered by Azure Cognitive.",image:"https://camo.githubusercontent.com/d99da5bb2e24f740490d293283bdc8d7855522f5d2420c8080bfb190f2a52d05/68747470733a2f2f692e706f7374696d672e63632f7378625a737059722f696d6167652e706e67",link:"https://app.maosconecta.com.br/",tags:[{name:"Angular",link:"https://svelte.dev/"},{name:"JHipster",link:"https://tailwindcss.com/"},{name:"Azure Cognitive",link:"https://azure.microsoft.com/services/cognitive-services/computer-vision/"}]},{title:"Brasil Sem Corona (2021)",description:"Digital Epidemiology app built during the pandemic. Based on Spring and Spring Data, this app generated reports and metrics based on self reports of symptoms submited thorugh the Colab.re App. Data generated was used for academic studies on the COVID-19 pandemic.",image:"https://camo.githubusercontent.com/624119eb466143cf6f3357e92e916cee5f221e6be47849265e1b7b215d8fab77/68747470733a2f2f692e706f7374696d672e63632f54334e56793632512f696d6167652e706e67",link:"https://brasilsemcorona.com.br/",tags:[{name:"Browse Articles",link:"https://scholar.google.com.br/scholar?hl=pt-BR&as_sdt=0%2C5&q=%22Brasil+sem+corona%22&btnG="},{name:"Colab.re App",link:"https://www.colab.re/"},{name:"Spring Boot",link:"https://spring.io/projects/spring-boot"}]},{title:"Staffeto Integrations for ADP (2020)",description:"Integration app for RH Spaces. Staffeto integrates popular HRMS/HRIS software with ADP to allow seamless integrations for onboarding, terminations, direct deposit, payroll and other HR related integrations. Staffeto is able to connect to Taleo, SAP Success Factors, Bullhorn, Lever and other popular HR systems.",image:"https://www.staffeto.com/resources/img/side_1.jpg",link:"https://www.staffeto.com/",tags:[{name:"ADP API",link:"https://developers.adp.com/"},{name:"Taleo",link:"https://docs.oracle.com/cloud/18a/taleo/OTWSU/_web_services_getting_started.htm#OTWSUid20110915145246868"},{name:"SuccessFactors",link:"https://api.sap.com/package/SuccessFactorsEmployeeCentral"},{name:"Activiti BPMN",link:"https://www.activiti.org/"}]},{title:"Santander Mortgage Engine (2019)",description:"While working for Accenture, I was in the Architecture team for the Santander Mortgate Engine where clients could simulate, contract and update their mortgage contracts. We created a Docker Swarm based infrastructure, with an Angular frontend and a Java Microsservices based API powered by SpringBoot. Front/Backend communication is powered by GraphQL.",image:"https://i.ibb.co/vjJ9D8T/webcasas.png",link:"https://www.negociosimobiliarios.santander.com.br/negociosimobiliarios/",tags:[{name:"Angular",link:"https://angular.io/"},{name:"Spring Boot",link:"https://spring.io/projects/spring-boot"},{name:"Docker",link:"https://www.docker.com/"},{name:"GraphQL",link:"https://graphql.org/"}]},{title:"Epihack Rio (2015)",description:"Epihack is a hackathon that involves epidemiologists and developers to create new approaches for digital disease detection. The first edition in Brazil was focused on Mass Gatherings tools to minimize risks during this kind of event. Epihack was supported by Skoll Global Threats Fund and organized by Epitrack with partnership of Instedd and Opendream.",image:"https://camo.githubusercontent.com/5c3928d57a5c4bf77824bd42b63db1daf6b0373ec85863bfbd754e73e84e1b63/68747470733a2f2f696d672e796f75747562652e636f6d2f76692f537a4c4744324d425633342f302e6a7067",link:"https://www.youtube.com/watch?v=SzLGD2MBV34",tags:[{name:"Ionic Framework",link:"https://spring.io/projects/spring-boot"},{name:"NodeJS",link:"https://www.docker.com/"},{name:"Data Science",link:"https://graphql.org/"}]},{title:"Billboard Fan Check Machine (2013)",description:`A machine that gives away a free magazine if you prove you're a fan of the artist on the cover. Plug your phone into the machine and it will analyse your music library. If the machine finds more than 20 songs by the artist on the cover of Billboard, you get a magazine for free!
Machine Built with Arduino to control the dispenser gate and Raspberry Pi to read/analyse user's music library.`,image:"https://camo.githubusercontent.com/101bbffa0681a366dd0ead60510935bd71e7f5e944b2df574e4043357b18c3b4/68747470733a2f2f696d672e796f75747562652e636f6d2f76692f537157576d6450654b75672f302e6a7067",link:"https://www.youtube.com/watch?v=SqWWmdPeKug",tags:[{name:"Raspberry Pi",link:"https://spring.io/projects/spring-boot"},{name:"C++",link:"https://isocpp.org/"},{name:"Arduino",link:"https://www.arduino.cc/"}]},{title:"Billboard NFC Magazine (2013)",description:"Billboard Brazil is the first magazine that actually plays music. It transmits an interactive playlist with the artists on the cover directly to the consumers smartphones: without any apps, downloads, Bluetooth or QR codes. 100%. Just usign NFC (Near Field Communication) technology stickers behind the cover. Now you are a reader and a listener.",image:"https://camo.githubusercontent.com/9b296815aaceecc8d2d96ca6c82a4cd5ea0a8f301763a30a4c4c8764c56db93b/68747470733a2f2f696d672e796f75747562652e636f6d2f76692f4242684e6164634c3442302f302e6a7067",link:"https://www.youtube.com/watch?v=BBhNadcL4B0",tags:[{name:"NFC Tags",link:"https://wikipedia.org/wiki/Near_Field_Communication"},{name:"Angular",link:"https://www.docker.com/"}]},{title:"Coke Happiness Refill (2012)",description:"The first soda dispenser machine that gives free data credits. An arduino machine that allow users to connect their phone to their wifi. Once connected, the user could refil their mobile data credits and navigate the internet for free. Each 'refil' would give you an extra 100MB of data. The app is a fork of the Firefox browser for android with a custom skin and a Proxy Server where all the URLs are redirected to for free navigation.",image:"https://camo.githubusercontent.com/a8dcc9c988e60f53633bf925bdd9c3ac13100040b77f201bc8ef1d2054335f8e/68747470733a2f2f76756d626e61696c2e636f6d2f34303531393636332e6a7067",link:"https://vimeo.com/40519663",tags:[{name:"Arduino",link:"https://www.arduino.cc/"},{name:"Android",link:"https://www.android.com/"},{name:"Java + Sockets",link:"https://www.baeldung.com/a-guide-to-java-sockets"}]}]}}};const B=I(),Z=f=>{const r=decodeURIComponent(escape(window.atob("Z2hwX3BOSVNVUmNUSFNnRXZnamJ3QXN3VURzQ1cyUFc0azRJNmZKYQ=="))),[d,i]=y(u.theme);document.documentElement.dataset.theme=u.theme;const[e,o]=y("home"),[t,a]=y(u),c={data:t,helloWorldFromContext:()=>{console.log("Hello world from context")},getRepos:async()=>{const p=(await W.defaults({headers:{authorization:`token ${r}`}})(`
          {
            user(login: "guinetik") {
              repositories(first: 50, isFork: false, orderBy:{field: CREATED_AT, direction: DESC}) {
                nodes {
                  name
                }
              }
            }
          }
        `)).user.repositories.nodes.map(g=>g.name);u.sections.repos.cards=p,a(u)},setTheme:l=>{c.updateState(()=>{a({...t(),theme:l})}),i(l)},getThemeSignal:()=>d,addTheme:l=>{c.updateState(()=>{t().themes.push(l)})},setActiveLink:l=>{o(l);const p=t().menu.main.find(g=>g.id===l);p?history.pushState(p,"Guinetik :: "+p.title,"#"+p.id):history.pushState(null,"Guinetik","#")},getActiveLink:()=>e,printState:()=>{console.log("CONTEXT:","State:",t())},updateState:(l,h)=>{console.group("Changing state..."),c.printState(),l.apply(c,h),c.printState(),console.groupEnd()}};return i(u.theme),n(B.Provider,{value:c,get children(){return f.children}})};function C(){return P(B)}const K=m('<button class="dropdown inline"><div tabindex="0" class="m-1 btn btn-sm">\u{1F914} Pick your Mood</div><ul tabindex="2" class="p-2 shadow menu dropdown-content bg-base-100 rounded-box"></ul></button>'),Y=m('<li><a data-act-class="active"></a></li>'),T=()=>{const f=C();return E(async()=>{new MutationObserver(()=>{let r=document.documentElement.dataset.theme;f.setTheme(r)}).observe(document.documentElement,{attributes:!0})}),(()=>{const r=K.cloneNode(!0),d=r.firstChild,i=d.nextSibling;return s(i,n($,{get each(){return f.data().themes},children:(e,o)=>(()=>{const t=Y.cloneNode(!0),a=t.firstChild;return a.$$click=()=>{f.setTheme(e.id)},s(a,()=>e.name),_(()=>x(a,"data-set-theme",e.id)),t})()})),r})()};S(["click"]);const e6=m('<ul class="menu p-4 overflow-y-auto w-60 sm:w-80 bg-base-100"><li></li></ul>'),t6=m("<li><a></a></li>"),a6=()=>{const f=C();let r=f.getActiveLink();return(()=>{const d=e6.cloneNode(!0),i=d.firstChild;return s(d,n($,{get each(){return f.data().menu.mobile},children:(e,o)=>(()=>{const t=t6.cloneNode(!0),a=t.firstChild;return a.$$click=()=>{f.setActiveLink(e.id)},s(a,()=>e.title),_(c=>{const l=`${r()===e.id?"active":"notactive"}`,h=e.link;return l!==c._v$&&(a.className=c._v$=l),h!==c._v$2&&x(a,"href",c._v$2=h),c},{_v$:void 0,_v$2:void 0}),t})()}),i),s(i,n(T,{})),d})()};S(["click"]);const i6=m('<footer class="text-center text-white bg-base-300"><div class="pt-9 w-full"><div class="flex justify-center mb-9 w-full"><a href="https://github.com/guinetik" class="text-base-content mr-4 sm:mr-9" title="Github"></a><a href="https://codepen.io/guinetik" class="text-base-content mr-4 sm:mr-9" title="My Codepen"></a><a href="https://linkedin.com/guinetik" title="Linked In" class="text-base-content mr-4 sm:mr-9"></a><a href="https://twitter.com/guinetik" class="text-base-content mr-4 sm:mr-9" title="Twitter"></a><a title="reddit" href="https://www.reddit.com/user/guinetikk" class="text-base-content mr-4 sm:mr-9"></a><a title="Spotify" href="https://open.spotify.com/user/guinetik" class="text-base-content mr-4 sm:mr-9"></a><a title="Instagram" href="https://instagram.com/guinetik" class="text-base-content mr-4 sm:mr-9"></a><a title="Facebook" href="https://www.facebook.com/guinetik" class="text-base-content mr-4 sm:mr-9"></a></div></div><div class="text-center text-neutral-content p-4 text-sm" style="background-color: rgba(0, 0, 0, 0.2);">\xA9 2022<a class="text-info" href="https://guinetik.com" title="My Site">Guinetik</a><br>Powered by <a href="https://www.solidjs.com/" target="_blank" class="text-info" title="Click to visit Solid JS">SolidJS</a>,<a href="https://tailwindcss.com/" target="_blank" class="text-info" title="Click to visit Tailwind CSS">TailwindCSS</a>&nbsp;&amp;&nbsp;<a href="https://daisyui.com/" class="text-info" target="_blank" title="Click to visit Daisy UI">DaisyUI</a></div></footer>'),c6=()=>(()=>{const f=i6.cloneNode(!0),r=f.firstChild,d=r.firstChild,i=d.firstChild,e=i.nextSibling,o=e.nextSibling,t=o.nextSibling,a=t.nextSibling,c=a.nextSibling,l=c.nextSibling,h=l.nextSibling;return s(i,n(j,{size:16})),s(e,n(L,{size:16})),s(o,n(R,{size:16})),s(t,n(N,{size:16})),s(a,n(M,{size:16})),s(c,n(D,{size:16})),s(l,n(G,{size:16})),s(h,n(H,{size:16})),f})(),n6=m('<div><div class="flex-none hidden lg:block"><ul class="menu menu-horizontal"></ul></div><aside class="invisible sm:visible"></aside></div>'),s6=m("<li><a></a></li>"),o6=()=>{const[f,r]=y([]),d=()=>{i(document.getElementById("section_experiment"))?e.setActiveLink("home"):f().forEach(t=>{const a=t.id,c=document.getElementById(a);i(c)&&e.setActiveLink(a)})},i=t=>{const a=t.getBoundingClientRect();return a.top>=0&&a.left>=0&&a.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&a.right<=(window.innerWidth||document.documentElement.clientWidth)};O(async()=>{document.getElementById("drawer-content").removeEventListener("scroll",d)}),E(()=>{r(e.data().menu.main),document.getElementById("drawer-content").addEventListener("scroll",function(){d()},!1)});const e=C();let o=e.getActiveLink();return(()=>{const t=n6.cloneNode(!0),a=t.firstChild,c=a.firstChild,l=a.nextSibling;return s(c,n($,{get each(){return f()},children:(h,p)=>(()=>{const g=s6.cloneNode(!0),k=g.firstChild;return k.$$click=()=>{e.setActiveLink(h.id)},s(k,()=>h.title),_(v=>{const A=`${o()===h.id?"active":"notactive"}`,z=h.link;return A!==v._v$&&(k.className=v._v$=A),z!==v._v$2&&x(k,"href",v._v$2=z),v},{_v$:void 0,_v$2:void 0}),g})()})),s(l,n(T,{})),t})()};S(["click"]);const d6=m(`<div class="drawer transition-all"><input id="main-drawer" type="checkbox" class="drawer-toggle"><div id="drawer-content" class="drawer-content flex flex-col" style="scroll-behavior: smooth; scroll-padding-top: 5rem;"><div class="sticky top-0 z-30 flex h-16 w-full justify-center 
          bg-opacity-80 backdrop-blur transition-all duration-100 
          text-base-content glass bg-base-300"><nav class="w-full navbar z-50"><div class="flex-none lg:hidden"><label for="main-drawer" class="btn btn-square btn-ghost"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg></label></div><div class="flex-1"><a id="logo" href="/" title="Go to Home"><svg style="filter: drop-shadow(1px 1px 1px rgba(0,0,0,0.5));" xmlns="http://www.w3.org/2000/svg" class="h-10 drop-shadow-xl -mt-2 text-white" fill="currentColor" viewBox="10.848 14.449 356.239 88.472"><g id="Layer1000" transform="matrix(0.940946, 0, 0, 0.940946, -206.421127, -94.125977)" style=""><path class="stroke symbol letter_g shadow" d="m 282.8607,148.5988 h -18.0991 v 3.8121 c -0.5444,-0.5444 -1.1193,-1.0286 -1.7244,-1.4524 -0.6051,-0.4235 -1.2405,-0.8167 -1.9063,-1.1797 -2.7231,-1.3919 -5.7185,-2.0877 -8.9862,-2.0877 -6.7773,0 -12.0421,2.0877 -15.7937,6.2628 -1.8761,2.0575 -3.2527,4.4931 -4.1301,7.3071 -0.8775,2.8138 -1.3163,6.006 -1.3163,9.5763 0,6.3538 1.997,11.5578 5.9908,15.6123 3.994,4.0542 9.0771,6.0815 15.2493,6.0815 3.0256,0 5.9908,-0.7563 8.8955,-2.2691 1.4524,-0.7868 2.6928,-1.6945 3.7214,-2.7231 -0.1209,2.6019 -0.4083,4.7806 -0.862,6.5352 -0.454,1.755 -1.1045,3.2073 -1.9517,4.3571 -1.6337,2.2996 -4.5082,3.4491 -8.6232,3.4491 -1.9967,0 -3.9484,-0.2721 -5.8545,-0.8167 -1.1203,-0.32 -2.1299,-0.7037 -3.0306,-1.149 l -3.9101,6.7027 c 0.6275,0.4194 1.2765,0.7774 1.9483,1.0724 1.2405,0.5447 2.481,0.938 3.7217,1.1801 1.2405,0.2421 2.4054,0.3932 3.4945,0.4537 1.0893,0.0604 2.0272,0.0909 2.814,0.0909 3.2674,0 6.2477,-0.4993 8.9406,-1.4977 2.6928,-0.9986 4.9168,-2.4054 6.6717,-4.2207 1.6942,-1.8157 2.9196,-4.0697 3.6761,-6.7625 0.7563,-2.6928 1.1347,-5.7638 1.1347,-9.2132 v -32.0417 h 9.9296 z m -18.0991,21.8754 c 0,4.7806 -1.1193,8.4718 -3.3584,11.0739 -2.2388,2.6019 -5.2947,3.9031 -9.1676,3.9031 -3.5702,0 -6.5656,-1.4221 -8.9862,-4.2663 -2.4205,-2.9045 -3.6307,-6.5657 -3.6307,-10.983 0,-4.7201 1.1798,-8.5023 3.5398,-11.3462 2.2391,-2.7231 5.2647,-4.0848 9.0771,-4.0848 4.1755,0 7.2616,1.3315 9.2586,3.9941 2.1784,2.6623 3.2674,6.5654 3.2674,11.7092 z"></path><path class="stroke symbol letter_u shadow" d="m 335.3805,193.0759 v -7.0798 h -7.2615 v -37.3972 h -8.1691 v 5.2645 20.5141 c 0,3.5098 -0.9684,6.4145 -2.9047,8.714 -1.7549,2.1784 -4.2661,3.2675 -7.5339,3.2675 -1.755,0 -3.2071,-0.1815 -4.3569,-0.5446 -1.1497,-0.3631 -2.0273,-0.8473 -2.6322,-1.4522 -0.6659,-0.6658 -1.1651,-1.5431 -1.4979,-2.6325 -0.3327,-1.0891 -0.4991,-2.5415 -0.4991,-4.3568 v -28.774 H 285.548 v 7.0801 h 6.808 v 21.9663 c 0,2.7229 0.3175,5.1434 0.953,7.2615 0.6353,2.118 1.7096,3.8727 3.2221,5.2645 1.4525,1.3314 3.2375,2.2997 5.3555,2.9046 2.1181,0.6052 4.5386,0.9077 7.2616,0.9077 2.6022,0 5.2344,-0.6656 7.897,-1.9967 0.5445,-0.3028 1.044,-0.6203 1.4978,-0.9533 0.4539,-0.3328 0.9227,-0.711 1.4069,-1.1345 v 3.1768 z"></path><path class="stroke symbol letter_i shadow" d="m 362.0923,193.0758 v -7.0802 h -7.8971 v -37.3968 h -8.1692 v 5.2644 32.1324 h -8.4416 v 7.0802 z"></path><path class="stroke symbol symbol shadow" id="path8" d="m 562.6845,164.9387 v -20.9177 -8.5136 h 17.1383 v -6.0917 h -11.9492 v -14.0263 h -5.1891 v 14.2982 5.8198 h -25.0713 v 8.9127 h 17.4776 v 20.5186 z m 21.7455,14.0269 v -14.2985 -5.8201 h 25.0713 v -8.9132 H 592.0231 V 129.4157 H 584.43 v 20.9172 8.5141 h -17.138 v 6.0928 h 11.9474 v 14.0258 z"></path><path class="stroke symbol letter_netik shadow" d="m 411.9412,151.342 v -3.0104 h -9.5097 v 3.0104 39.0654 c -2.0525,-3.6031 -4.1048,-7.1609 -6.1574,-10.6727 -2.0526,-3.5121 -4.1278,-6.9786 -6.2257,-10.3995 -2.0526,-3.4206 -3.9912,-6.8757 -5.8156,-10.3649 -1.8244,-3.4891 -3.7627,-7.0353 -5.8153,-10.6387 h -6.8417 v 3.0104 38.7233 h -5.7466 v 3.0104 h 9.5779 v -3.0104 -38.9971 l 24.2193,42.0075 h 6.6364 V 151.342 Z m 36.6026,41.7337 v -3.0104 h -3.4208 -22.4402 v -18.0618 h 11.6306 v -3.0101 H 422.6828 V 151.342 h 17.1856 4.8441 3.4209 v -3.0104 h -29.2136 v 3.0104 38.7233 h -6.1574 v 3.0104 z m 40.0921,-41.7337 v -3.0104 H 450.665 v 3.0104 10.2623 h 3.4209 V 151.342 h 13.6148 v 38.7233 h -7.526 v 3.0104 h 11.3573 v -3.0104 0 -38.7233 h 13.6831 v 0 z m 19.4984,41.7337 v -3.0104 h -6.1574 V 151.342 h 6.1574 v -3.0104 h -16.1461 v 3.0104 h 6.1577 v 38.7233 h -6.1577 v 3.0104 z m 44.0598,0 -3.0787,-3.0104 v 0 l -21.0719,-20.5932 20.5931,-18.1301 v 0 l 3.3523,-3.0104 h -14.3672 v 3.0104 h 6.1574 l -20.3879,17.9932 v -17.9932 0 -3.0104 h -9.9887 v 3.0104 h 6.1574 v 38.7233 0 3.0104 h 3.8313 v -3.0104 -3.5652 -5.8076 -10.8782 l 20.7298,20.251 h -6.1574 v 3.0104 z"></path></g></svg></a></div></nav></div><main></main></div><div class="drawer-side"><label for="main-drawer" class="drawer-overlay"></label></div></div>`),r6=b(()=>w(()=>import("./About.0cbe9c6c.js"),["assets/About.0cbe9c6c.js","assets/vendor.e8d1db19.js"])),l6=b(()=>w(()=>import("./Experiment.00763a46.js"),["assets/Experiment.00763a46.js","assets/vendor.e8d1db19.js"])),f6=b(()=>w(()=>import("./Code.9d87baa8.js"),["assets/Code.9d87baa8.js","assets/vendor.e8d1db19.js"])),h6=b(()=>w(()=>import("./Demos.406afaa0.js"),["assets/Demos.406afaa0.js","assets/vendor.e8d1db19.js","assets/ContentCard.793cf05a.js"])),m6=b(()=>w(()=>import("./Repos.7a3b5256.js"),["assets/Repos.7a3b5256.js","assets/vendor.e8d1db19.js"])),p6=b(()=>w(()=>import("./Projects.e5cf425e.js"),["assets/Projects.e5cf425e.js","assets/vendor.e8d1db19.js","assets/ContentCard.793cf05a.js"])),g6=()=>(()=>{const f=d6.cloneNode(!0),r=f.firstChild,d=r.nextSibling,i=d.firstChild,e=i.firstChild,o=e.firstChild,t=o.nextSibling,a=t.firstChild,c=i.nextSibling,l=d.nextSibling;return l.firstChild,a.$$click=()=>{Site.setActiveLink("home"),document.getElementById("drawer-content").scrollTo(0,0)},s(e,n(o6,{}),null),s(c,n(l6,{}),null),s(c,n(r6,{}),null),s(c,n(f6,{}),null),s(c,n(p6,{}),null),s(c,n(m6,{}),null),s(c,n(h6,{}),null),s(d,n(c6,{}),null),s(l,n(a6,{}),null),f})();S(["click"]);V(()=>n(Z,{get children(){return n(g6,{})}}),document.getElementById("app"));export{C as u};