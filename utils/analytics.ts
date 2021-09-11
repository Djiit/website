import ReactGA from "react-ga";

export const initGA = () => {
  ReactGA.initialize(process.env.NEXT_PUBLIC_GA_TRACKING_ID, {
    debug: process.env.NODE_ENV === "development",
  });
  ReactGA.set({ anonymizeIp: true });
};

export const logPageView = (page) => {
  ReactGA.set({ page });
  ReactGA.pageview(page);
};
