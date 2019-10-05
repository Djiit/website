const fs = require("fs");
const path = require("path");
const pick = require("lodash.pick");

module.exports = function(api, options) {
  api.loadSource(store => {
    const projects = require("./src/assets/projects.json");

    const contentType = store.addContentType({
      typeName: "Project",
    });

    for (const project of projects) {
      contentType.addNode({
        name: project.name,
        image: project.image,
        link: project.link,
        role: project.role,
        client: project.client || "",
        tags: project.tags,
        description: project.description,
      });
    }
  });

  api.beforeBuild(({ config, store }) => {
    const { collection } = store.getContentType("Post");

    const posts = collection.data.map(post => {
      return pick(post, ["title", "path", "summary"]);
    });

    const output = {
      dir: "./static",
      name: "search.json",
      ...options.output,
    };

    const outputPath = path.resolve(process.cwd(), output.dir);
    const outputPathExists = fs.existsSync(outputPath);
    const fileName = output.name.endsWith(".json")
      ? output.name
      : `${output.name}.json`;

    if (outputPathExists) {
      fs.writeFileSync(
        path.resolve(process.cwd(), output.dir, fileName),
        JSON.stringify(posts)
      );
    } else {
      fs.mkdirSync(outputPath);
      fs.writeFileSync(
        path.resolve(process.cwd(), output.dir, fileName),
        JSON.stringify(posts)
      );
    }
  });
};
