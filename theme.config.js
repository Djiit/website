import config from "./config";
import Footer from "./footer";
import Head from "./head";

export default {
  repository: "https://github.com/Djiit/website",
  docsRepository: "https://github.com/Djiit/website",
  branch: "master",
  path: "/",
  titleSuffix: ` – ${config.author}`,
  nextLinks: true,
  prevLinks: true,
  search: true,
  customSearch: null,
  darkMode: true,
  footer: <Footer />,
  head: <Head />,
};
