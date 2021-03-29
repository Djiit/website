import { HiOutlineMail } from "react-icons/hi";
import { SiTwitter, SiLinkedin, SiGithub, SiKeybase } from "react-icons/si";

import config from "./config";

const YEAR = new Date().getFullYear();

export default () => (
  <small className="mt-24 flex flex-wrap">
    <div className="flex-grow">
      <time>{YEAR}</time> © {config.author}
    </div>
    {/* linkedin, github */}
    <div className="flex place-items-center space-x-1">
      <a href="https://twitter.com/djiit">
        <SiTwitter />
      </a>
      <a href="https://github.com/djiit">
        <SiGithub />
      </a>
      <a href="https://linkedin.com/in/julien.tanay">
        <SiLinkedin />
      </a>
      <a href="https://keybase.io/jtanay">
        <SiKeybase />
      </a>
      <a href="mailto:julien.tanay@gmail.com">
        <HiOutlineMail />
      </a>
      <span>·</span>
      <a href="/feed.xml">RSS</a>
    </div>
  </small>
);
