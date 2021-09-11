import config from "./config";

const Head = () => (
  <>
    <meta name="author" content={config.author} />
    <meta name="description" content={config.author} />
    <meta name="description" content={config.description} />
    <meta name="keywords" content={config.keywords} />
    <meta name="og:title" content={config.author} />
    <meta name="summary" content={config.description} />
    <meta name="twitter:creator" content={`@${config.username}`} />
    <meta name="twitter:description" content={config.description} />
    <meta name="twitter:site" content={`@${config.username}`} />
    <meta name="twitter:title" content={config.author} />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </>
);

export default Head;
