import { BlogPosts } from "app/components/posts";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Hello, I'm Julien
      </h1>
      <p className="mb-4">
        I'm a Dev+Ops guy currently working as a Staff SRE at Doctolib from
        Paris and Nantes. I'm a casual speaker, former manager and everyday
        project hacker.
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}
