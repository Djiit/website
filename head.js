import config from "./config";

export default () => (
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
);
