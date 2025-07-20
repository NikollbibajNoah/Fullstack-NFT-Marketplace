import { Card, CardHeader, CardBody } from "@heroui/react";
import { ServiceCard } from ".";
import { FilterIcon, TrendingUpIcon, WalletIcon } from "lucide-react";

const services = [
  {
    icon: <FilterIcon />,
    title: "Filter & Discover",
    description:
      "Connect with wallet, discover, buy NFTs, sell your NFTs and earn money",
    step: 1,
  },
  {
    icon: <WalletIcon />,
    title: "Connect Wallet",
    description:
      "Connect with wallet, discover, buy NFTs, sell your NFTs and earn money",
    step: 2,
  },
  {
    icon: <TrendingUpIcon />,
    title: "Start trading",
    description: "Connect with wallet, discover, buy NFTs and earn money",
    step: 3,
  },
];

export const ServiceSection = () => {
  return (
    <section className="p-8">
      <div className="max-w-4xl flex flex-col mx-auto">
        <div className="mb-3 flex justify-center">
          <h2 className="text-2xl font-semibold text-foreground">Our Services</h2>
        </div>
        <div className="mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
