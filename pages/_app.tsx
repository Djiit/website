import { useEffect } from "react";

import { useRouter } from "next/router";

import { initGA, logPageView } from "../utils/analytics";
import { onKonami } from "../utils/konami";

import "tailwindcss/tailwind.css";
import "nextra-theme-blog/style.css";

import "../styles/index.css";

export default function Nextra({ Component, pageProps }) {
  const { pathname } = useRouter();

  useEffect(() => {
    if (!(window as any).GA_INITIALIZED) {
      initGA();
      (window as any).GA_INITIALIZED = true;
    }
    logPageView(pathname);

    onKonami(() => {
      alert("yeah");
    });
  });

  return <Component {...pageProps} />;
}
