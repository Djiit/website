import "tailwindcss/tailwind.css";
import "nextra-theme-blog/style.css";

import "../styles/index.css";

export default function Nextra({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
