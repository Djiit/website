import Link from "next/link";
import Image from "next/image";

export default function Page() {
  return (
    <section>
      <div className="mb-8 flex items-center gap-6">
        <Image
          src="/avatar.jpeg"
          alt="Julien Tanay"
          width={120}
          height={120}
          className="rounded-full"
          priority
        />
        <div>
          <h1 className="text-2xl font-semibold tracking-tighter">
            Hello, I'm Julien
          </h1>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            DevEx Engineer
          </p>
        </div>
      </div>
      <p className="mb-4">
        I'm a Dev+Ops guy currently working as a Staff SRE at Doctolib from
        Paris and Nantes. I'm a casual speaker, former manager and everyday
        project hacker.
      </p>
      Checkout some of my latest <Link href="https://sessionize.com/djiit/" className="underline">talks</Link>.
    </section>
  );
}
