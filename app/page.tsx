import { BlogPosts } from "app/components/posts";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        My Portfolio
      </h1>
      <p className="mb-4">
        Hi, I'm Julien. I'm a Dev+Ops guy currently working as a Staff SRE at Doctolib from Paris and Nantes.
        I'm a casual speaker
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}
