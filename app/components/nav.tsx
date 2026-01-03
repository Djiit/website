import Link from "next/link";
import ArrowIcon from "./arrowIcon";
import { ThemeToggle } from "./theme-toggle";

const navItems: {
  [key: string]: {
    name: string;
    external?: boolean;
  };
} = {
  "/": {
    name: "home",
  },
  "/blog": {
    name: "blog",
  },
  "https://sessionize.com/djiit/": {
    name: "talks",
    external: true,
  },
};

export function Navbar() {
  return (
    <aside className="-ml-[8px] mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <div className="flex flex-row space-x-0 pr-10 items-center">
            {Object.entries(navItems).map(([path, { name, external }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1 items-center gap-1"
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                >
                  {external && <ArrowIcon />}
                  {name}
                </Link>
              );
            })}
            <ThemeToggle />
          </div>
        </nav>
      </div>
    </aside>
  );
}
