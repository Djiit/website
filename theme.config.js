const config = require("./config");

const YEAR = new Date().getFullYear();

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
  footer: (
    <small style={{ display: "block", marginTop: "8rem" }}>
      <time>{YEAR}</time> © {config.author}.<a href="/feed.xml">RSS</a>
      <style jsx>{`
        a {
          float: right;
        }
        @media screen and (max-width: 480px) {
          article {
            padding-top: 2rem;
            padding-bottom: 4rem;
          }
        }
      `}</style>
    </small>
  ),
  head: (
    <>
      <meta name="author" content={config.author} />
      <meta name="description" content={config.author} />
      <meta name="description" content={config.description} />
      <meta name="keywords" content="Julien, Tanay, developer, devops, blog" />
      <meta name="og:title" content={config.author} />
      <meta name="summary" content={config.description} />
      <meta name="twitter:creator" content="@djiit" />
      <meta name="twitter:description" content={config.description} />
      <meta name="twitter:site" content="@djiit" />
      <meta name="twitter:title" content={config.author} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </>
  ),
};
