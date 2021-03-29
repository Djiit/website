const { promises: fs } = require("fs");
const path = require("path");
const RSS = require("rss");
const matter = require("gray-matter");

const config = require("../config");

// @TODO: for now let's generate with all posts, unsorted
async function generate() {
  const feed = new RSS({
    title: config.author,
    site_url: `https://${config.domain}`,
    feed_url: `https://${config.domain}/feed.xml`,
  });

  const posts = await fs.readdir(path.join(__dirname, "..", "pages", "blog"));

  await Promise.all(
    posts.map(async (name) => {
      if (name.startsWith("index.")) return;

      const content = await fs.readFile(
        path.join(__dirname, "..", "pages", "blog", name)
      );
      const frontmatter = matter(content);

      feed.item({
        title: frontmatter.data.title,
        url: "/blog/" + name.replace(/\.mdx?/, ""),
        date: frontmatter.data.date,
        description: frontmatter.data.description,
        categories: frontmatter.data.tag?.split(", "),
        author: frontmatter.data.author,
      });
    })
  );

  await fs.writeFile("./public/feed.xml", feed.xml({ indent: true }));
}

generate();
