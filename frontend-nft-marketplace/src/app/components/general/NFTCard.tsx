import { NFT } from "@/lib/types";
import { Card, CardBody, CardFooter, Button } from "@heroui/react";
import { Badge, ClockIcon, HeartIcon, WalletIcon } from "lucide-react";
import React from "react";

export type NFTCardProps = {
  data: NFT;
};

export const NFTCard: React.FC<NFTCardProps> = ({ data }) => {
  return (
    <Card className="w-[300px]" isPressable>
      <CardBody className="p-0 overflow-visible relative">
        {/* <Image
          shadow="sm"
          radius="lg"
          width="100%"
          alt={title}
          className="w-full object-cover h-[240px]"
          src={imageUrl}
        /> */}
        <div className="w-full aspect-square bg-red-500"></div>
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
