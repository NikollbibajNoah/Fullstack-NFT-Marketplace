import Image from "next/image";

import Logo from "../../../../public/Logo-nobackground.png";
import { FooterNavLinks } from "../shared";
import { FooterNavLinkConfig } from "../shared/FooterNavLinks";

const discoverItems: FooterNavLinkConfig[] = [
  { label: "Explore", href: "#" },
  { label: "Trending", href: "#" },
  { label: "New Arrivals", href: "#" },
  { label: "Top Sellers", href: "#" },
];

const helpCenterItems: FooterNavLinkConfig[] = [
  { label: "FAQ", href: "#" },
  { label: "Contact Us", href: "#" },
  { label: "Support", href: "#" },
  { label: "Feedback", href: "#" },
];

export const Footer = () => {
  return (
    <footer className="w-full bg-black border-t flex justify-center">
      <section className="w-[80%] h-full p-6 flex justify-between items-center">
        <section className="my-5">
          {/* Logo */}
          <div className="h-full mx-3 flex items-center gap-2">
            <div className="w-12 h-12 flex justify-center items-center">
              <Image
                src={Logo}
                alt="Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="font-bold text-lg">NFT-Marketplace</h2>
          </div>

          {/* Description */}
          <div className="max-w-md">
            <p className="p-4">
              Welcome to the NFT Marketplace, where you can explore, buy, and
              sell unique digital assets. Discover a wide range of NFTs, from
              art and music to collectibles and virtual real estate. Join our
              vibrant community and start your journey in the world of digital
              ownership today!
            </p>
          </div>
        </section>

        <section className="flex gap-60 my-5">
          <FooterNavLinks title="Discover" items={discoverItems} />
          <FooterNavLinks title="Help Center" items={helpCenterItems} />
        </section>
      </section>
    </footer>
  );
};
