import { FiCodepen } from "solid-icons/fi";
import { BsSpotify } from "solid-icons/bs";
import {
  FaBrandsFacebookF,
  FaBrandsTwitter,
  FaBrandsInstagram,
  FaBrandsLinkedin,
  FaBrandsGithub,
  FaBrandsReddit,
} from "solid-icons/fa";
// create JSX component for footer
const Footer = () => {
  return (
    <footer class="text-center text-white bg-base-300">
      <div class="pt-9 w-full">
        <div class="flex justify-center mb-9 w-full">
          <a
            href="https://github.com/guinetik"
            class="text-base-content mr-9"
            title="Github"
          >
            <FaBrandsGithub size={16} />
          </a>
          <a
            href="https://codepen.io/guinetik"
            class="text-base-content mr-9"
            title="My Codepen"
          >
            <FiCodepen size={16} />
          </a>
          <a
            href="https://linkedin.com/guinetik"
            title="Linked In"
            class="mr-9 text-base-content"
          >
            <FaBrandsLinkedin size={16} />
          </a>
          <a
            href="https://twitter.com/guinetik"
            class="mr-9 text-base-content"
            title="Twitter"
          >
            <FaBrandsTwitter size={16} />
          </a>
          <a
            title="reddit"
            href="https://www.reddit.com/user/guinetikk"
            class="mr-9 text-base-content"
          >
            <FaBrandsReddit size={16} />
          </a>
          <a
            title="Spotify"
            href="https://open.spotify.com/user/guinetik"
            class="text-base-content mr-9"
          >
            <BsSpotify size={16} />
          </a>
          <a
            title="Instagram"
            href="https://instagram.com/guinetik"
            class="mr-9 text-base-content"
          >
            <FaBrandsInstagram size={16} />
          </a>
          <a
            title="Facebook"
            href="https://www.facebook.com/guinetik"
            class="mr-9 text-base-content"
          >
            <FaBrandsFacebookF size={16} />
          </a>
        </div>
      </div>
      <div
        class="text-center text-neutral-content p-4 text-sm"
        style="background-color: rgba(0, 0, 0, 0.2);"
      >
        © 2022
        <a class="text-info" href="https://guinetik.com" title="My Site">
          Guinetik
        </a>
        <br />
        Powered by{" "}
        <a
          href="https://www.solidjs.com/"
          target="_blank"
          class="text-info"
          title="Click to visit Solid JS"
        >
          SolidJS
        </a>
        ,
        <a
          href="https://tailwindcss.com/"
          target="_blank"
          class="text-info"
          title="Click to visit Tailwind CSS"
        >
          TailwindCSS
        </a>
        &nbsp;&amp;&nbsp;
        <a
          href="https://daisyui.com/"
          class="text-info"
          target="_blank"
          title="Click to visit Daisy UI"
        >
          DaisyUI
        </a>
      </div>
    </footer>
  );
};
export default Footer;
