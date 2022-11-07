import { HiOutlineMail } from "react-icons/hi";
import {
  SiTwitter,
  SiLinkedin,
  SiGithub,
  SiKeybase,
  SiMastodon,
} from "react-icons/si";

import config from "./config";

const YEAR = new Date().getFullYear();

const Footer = () => (
  <small className="mt-24 flex flex-wrap">
    <div className="flex-grow">
      <time>{YEAR}</time> © {config.author}
    </div>
    <div className="flex place-items-center space-x-1">
      <a rel="me" href="https://mastodon.social/@djiit">
        <SiMastodon />
      </a>
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

export default Footer;
