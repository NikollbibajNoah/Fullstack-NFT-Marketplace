import { Link } from "@heroui/react";

export type FooterNavLinkConfig = {
  label: string;
  href: string;
  isBlock?: boolean;
  color?: "foreground" | "primary" | "secondary" | "danger";
};

export type FooterNavLinksProps = {
  title: string;
  items: FooterNavLinkConfig[];
};

export const FooterNavLinks: React.FC<FooterNavLinksProps> = ({
  title,
  items,
}) => {
  return (
    <article>
      <h2 className="font-semibold mb-2">{title}</h2>
      <ul className="list-none">
        {items.map((link: FooterNavLinkConfig, i: number) => (
          <li>
            <Link
              key={i}
              isBlock={link.isBlock ? link.isBlock : true}
              color={link.color ? link.color : "foreground"}
              href={link.href}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </article>
  );
};
