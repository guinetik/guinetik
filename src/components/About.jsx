import { useSite } from "../SiteStore";
import { FiMail } from "solid-icons/fi";
import { FaBrandsLinkedin } from "solid-icons/fa";
import { IoDocumentAttachOutline } from 'solid-icons/io'

// Get CV info based on browser language
function getCVInfo() {
  const browserLang = navigator.language || navigator.languages[0];
  const isPortuguese = browserLang.startsWith('pt');

  const baseUrl = 'https://github.com/guinetik/cv/releases/latest/download';
  const filename = isPortuguese
    ? 'CV_Joao_Guilherme_Portugues.pdf'
    : 'CV_Joao_Guilherme_English.pdf';

  return {
    url: `${baseUrl}/${filename}`,
    filename: filename
  };
}

const AboutPage = () => {
  const Site = useSite();
  const cvInfo = getCVInfo();
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
              <div class="flex flex-wrap gap-2 justify-center sm:justify-start">
                <a
                  class="btn btn-error font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none ease-linear transition-all duration-150 flex items-center"
                  href="mailto:guinetik@gmail.com"
                >
                  <FiMail size={16} class="mr-1" />
                  EMAIL ME
                </a>
                <a
                  href="https://www.linkedin.com/in/guinetik/"
                  target="_blank"
                  class="btn btn-info font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none ease-linear transition-all duration-150 flex items-center"
                >
                  <FaBrandsLinkedin size={16} class="mr-1" /> LINKED-IN
                </a>
                <a
                  href={cvInfo.url}
                  download={cvInfo.filename}
                  class="btn btn-info font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none ease-linear transition-all duration-150 flex items-center"
                >
                  <IoDocumentAttachOutline size={16} class="mr-1" /> DOWNLOAD CV
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
            <div class="py-4 flex justify-center shields">
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
            </div>
          </div>
          <div class="flex flex-wrap justify-center my-10">
            <article class="prose prose-xl sm:prose-sm md:prose-md lg:prose-lg xl:prose-xl 2xl:prose-2xl max-w-none text-neutral font-medium">
              {Site.data().sections.about.content}
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutPage;
