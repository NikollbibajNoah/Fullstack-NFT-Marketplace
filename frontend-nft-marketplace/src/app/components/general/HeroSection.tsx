"use client";

import { useEffect, useState } from "react";

import { Card, Button } from "@heroui/react";
import { Icon, ShoppingBasketIcon, UploadIcon } from "lucide-react";
import Image from "next/image";

import Herobanner01 from "../../../../public/hero/hero-01.png";
import Herobanner02 from "../../../../public/hero/hero-02.png";
import Herobanner03 from "../../../../public/hero/hero-03.png";

export const HeroSection = () => {
  const [bannerImage, setBannerImage] = useState<string>("");

  const randomizeBannerImage = () => {
    const rand = Math.round(Math.random() * 3);

    switch (rand) {
      case 0:
        setBannerImage(Herobanner01.src);
        break;
      case 1:
        setBannerImage(Herobanner02.src);
        break;
      case 2:
        setBannerImage(Herobanner03.src);
        break;
      default:
        setBannerImage(Herobanner01.src);
    }
  };

  useEffect(() => {
    randomizeBannerImage();
  }, []);

  return (
    <Card className="w-full h-[512px] grid md:grid-cols-2 gap-8 p-20 bg-background/80 backdrop-blur-md">
      {/* {bannerImage && (
        <Image
          src={bannerImage}
          alt="NFT Artwork"
          width={800}
          height={600}
          className="absolute top-0 left-0 rounded-large object-cover w-full h-full shadow-lg"
        />
      )} */}
      <div className="backdrop-blur-md absolute w-full h-full"></div>
      <div className="flex flex-col justify-center z-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          Discover, Collect, and Sell Extraordinary NFTs
        </h1>
        <p className="text-lg mb-6 text-foreground-600">
          Explore the world's leading NFT marketplace. Buy, sell, and trade
          unique digital assets on our secure blockchain platform.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            color="primary"
            size="lg"
            endContent={<ShoppingBasketIcon />}
            className="w-full sm:w-auto"
          >
            Start Shopping
          </Button>
          <Button
            variant="bordered"
            color="secondary"
            size="lg"
            endContent={<UploadIcon />}
            className="w-full sm:w-auto"
          >
            Create NFT
          </Button>
        </div>
      </div>
      {/* <div className="flex items-center justify-center max-w-lg z-10">
        <Image
          src={HeroImage}
          alt="NFT Artwork"
          className="rounded-large object-cover w-full h-full shadow-lg"
        />
      </div> */}
    </Card>
  );
};
