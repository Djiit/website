import "./global.css";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Navbar } from "./components/nav";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Footer from "./components/footer";
import { baseUrl } from "./sitemap";
// import { onKonami } from "./konami";
import { KonamiWrapper } from "./KonamiWrapper";
import { ThemeProvider } from "./components/theme-provider";
import { ThemeScript } from "./components/theme-script";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Julien Tanay",
    template: "%s | Julien Tanay",
  },
  description:
    "Dev+Ops Staff SRE from Paris and Nantes. Speaker, former manager, and open-source contributor. Writing about DevOps, Python, Docker, and modern infrastructure.",
  keywords: [
    "Staff",
    "SRE",
    "DevOps",
    "Infrastructure",
    "Docker",
    "Cloud",
    "Open Source",
  ],
  authors: [
    {
      name: "Julien Tanay",
      url: baseUrl,
    },
  ],
  creator: "Julien Tanay",
  openGraph: {
    title: "Julien Tanay",
    description:
      "Dev+Ops Staff SRE from Paris and Nantes. Sharing insights on infrastructure, DevOps, and modern development practices.",
    url: baseUrl,
    siteName: "Julien Tanay",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Julien Tanay",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Julien Tanay",
    description:
      "Dev+Ops Staff SRE from Paris and Nantes. Sharing insights on infrastructure, DevOps, and modern development practices.",
    images: ["/twitter-image"],
    creator: "@djiit",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const cx = (...classes) => classes.filter(Boolean).join(" ");

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cx(
        "min-h-screen flex flex-col text-black bg-white dark:text-white dark:bg-black",
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <head>
        <ThemeScript />
      </head>
      <body className="antialiased flex flex-col flex-1 max-w-xl mx-4 mt-8 lg:mx-auto">
        <ThemeProvider>
          <KonamiWrapper />
          <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
            <Navbar />
            {children}
            <Footer />
            <Analytics />
            <SpeedInsights />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
