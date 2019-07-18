import DefaultLayout from "~/layouts/Default.vue";
import VueScrollTo from "vue-scrollto";
import VueFuse from "vue-fuse";
import VueDisqus from "vue-disqus";

import config from "../config.json";

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);

  Vue.use(VueFuse);
  Vue.use(VueDisqus);
  Vue.use(VueScrollTo, {
    duration: 500,
    easing: "ease",
  });

  head.meta.push({
    name: "keywords",
    key: "keywords",
    content: "Julien, Tanay, developer, devops, blog",
  });

  head.meta.push({
    name: "summary",
    key: "summary",
    content: config.description,
  });

  head.meta.push({
    name: "description",
    key: "description",
    content: config.description,
  });

  head.meta.push({
    name: "author",
    key: "author",
    content: config.author,
  });

  head.meta.push({
    name: "twitter:description",
    key: "twitter:description",
    content: config.description,
  });
  head.meta.push({
    name: "twitter:title",
    key: "twitter:title",
    content: config.author,
  });
  head.meta.push({
    name: "twitter:site",
    key: "twitter:site",
    content: "@djiit",
  });
  head.meta.push({
    name: "twitter:creator",
    key: "twitter:creator",
    content: "@djiit",
  });

  head.link.push({
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css?family=Nunito+Sans:400,700",
  });
}
