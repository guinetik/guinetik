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
        <div class="flex justify-center mb-9">
          <a href="https://github.com/guinetik" class="text-base-content mr-9">
            <FaBrandsGithub size={16} />
          </a>
          <a href="https://codepen.io/guinetik" class="text-base-content mr-9">
            <FiCodepen size={16} />
          </a>
          <a
            href="https://linkedin.com/guinetik"
            class="mr-9 text-base-content"
          >
            <FaBrandsLinkedin size={16} />
          </a>
          <a href="https://twitter.com/guinetik" class="mr-9 text-base-content">
            <FaBrandsTwitter size={16} />
          </a>
          <a
            href="https://www.reddit.com/user/guinetikk"
            class="mr-9 text-base-content"
          >
            <FaBrandsReddit size={16} />
          </a>
          <a
            href="https://open.spotify.com/user/guinetik"
            class="text-base-content mr-9"
          >
            <BsSpotify size={16} />
          </a>
          <a
            href="https://instagram.com/guinetik"
            class="mr-9 text-base-content"
          >
            <FaBrandsInstagram size={16} />
          </a>
          <a
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
        <a
          class="text-info"
          href="https://github.com/guinetik"
        >
          Guinetik
        </a>
        <br />
        Powered by{" "}
        <a href="https://www.solidjs.com/" target="_blank" class="text-info">
          SolidJS
        </a>, 
        <a href="https://tailwindcss.com/" target="_blank" class="text-info">
          TailwindCSS
        </a>
        &nbsp;&amp;&nbsp;
        <a href="https://daisyui.com/" class="text-info" target="_blank">
          DaisyUI
        </a>
      </div>
    </footer>
  );
};
export default Footer;
