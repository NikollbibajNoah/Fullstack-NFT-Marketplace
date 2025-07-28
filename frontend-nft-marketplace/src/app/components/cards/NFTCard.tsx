import { NFT } from "@/lib/types";
import { Card, CardBody, CardFooter, Button } from "@heroui/react";
import { ClockIcon, HeartIcon, WalletIcon } from "lucide-react";
import Image from "next/image";

import React from "react";

export type NFTCardProps = {
  data: NFT;
};

export const NFTCard: React.FC<NFTCardProps> = ({ data }) => {
  return (
    <Card className="w-[300px]" isPressable>
      <CardBody className="p-0 overflow-visible relative">
        <div className="w-full aspect-square bg-red-500">
          <Image
            alt={data.title}
            className="w-full h-full object-cover"
            src={data.nftImage || ""} // Ensure the image path is correct
            width={300}
            height={300}
            priority={false}
          />
        </div>
        <div className="flex p-2 items-center absolute top-0 left-0 w-full">
          <div className="flex items-center gap-2">
            <ClockIcon />
            <p>
              {data.time.days}d {data.time.hours}h {data.time.minutes}m{" "}
              {data.time.seconds}s
            </p>
          </div>
          <div className="ml-auto">
            <Button isIconOnly radius="full" variant="light">
              <HeartIcon />
            </Button>
          </div>
        </div>
      </CardBody>
      <CardFooter className="flex-col items-start">
        <div className="flex justify-between w-full items-center">
          <h4 className="font-bold text-large">{data.title}</h4>
        </div>
        <div className="flex justify-between w-full items-center mt-2">
          <div className="flex items-center gap-3">
            <WalletIcon />
            <p className="text-small">{data.price}</p>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};
