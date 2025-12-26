import {
  SiX,
  SiBluesky,
  SiMastodon,
  SiGithub,
  SiLinkedin,
  SiSessionize,
} from "react-icons/si";

export default function Footer() {
  const socials = [
    {
      href: "https://x.com/Djiit",
      icon: SiX,
      label: "X",
    },
    {
      href: "https://bsky.app/profile/djiit.dev",
      icon: SiBluesky,
      label: "Bluesky",
    },
    {
      href: "https://mastodon.social/@Djiit",
      icon: SiMastodon,
      label: "Mastodon",
    },
    {
      href: "https://github.com/Djiit",
      icon: SiGithub,
      label: "GitHub",
    },
    {
      href: "https://www.linkedin.com/in/julientanay/",
      icon: SiLinkedin,
      label: "LinkedIn",
    },
    {
      href: "https://sessionize.com/djiit",
      icon: SiSessionize,
      label: "Sessionize",
    },
  ];
  return (
    <footer className="mt-auto my-8">
      <div className="flex items-center justify-between">
        <p className="text-neutral-600 dark:text-neutral-300">
          © {new Date().getFullYear()} Julien Tanay
        </p>

        <div className="flex items-center space-x-4">
          {socials.map(({ href, icon: Icon, label }) => (
            <a
              key={href}
              href={href}
              aria-label={label}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-600 transition-all hover:text-neutral-800 dark:text-neutral-300 dark:hover:text-neutral-100"
            >
              <Icon size={20} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
