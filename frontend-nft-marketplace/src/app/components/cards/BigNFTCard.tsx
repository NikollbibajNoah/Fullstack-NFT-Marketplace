import { NFT } from "@/lib/types";
import { Card, Avatar, Input, Button } from "@heroui/react";
import classNames from "classnames";
import {
  FlameIcon,
  ClockIcon,
  HeartIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
} from "lucide-react";
import Image from 'next/image';

export type BigNFTCardProps = {
  nftCard: NFT;
  controls?: boolean;
};

export const BigNFTCard: React.FC<BigNFTCardProps> = ({
  nftCard,
  controls,
}) => {
  return (
    <Card className="w-[896px] flex-shrink-0">
      <section className="flex flex-row gap-3">
        {/* Info - Left side content */}
        <div className="w-[384px]">
          <div className="p-4">
            <h2 className="text-2xl font-semibold">{nftCard.title}</h2>
            <div className="mt-3">
              <div className="flex items-center">
                <div className="flex gap-2">
                  <Avatar name={nftCard.name[0].toUpperCase()} />
                  <div>
                    <h2 className="text-sm">Creator</h2>
                    <h2>{nftCard.name}</h2>
                  </div>
                </div>
                <div className="ml-10 flex items-center">
                  <FlameIcon size={48} />
                  <div>
                    <h2 className="text-lg font-semibold">Collection</h2>
                    <p>{nftCard.collection}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="max-w-xs p-4">
              <p>Current Bid</p>
              <Input value={nftCard.price} />
            </div>
          </div>

          <div>
            <div className="p-4 flex flex-col gap-3">
              <div className="flex gap-2">
                <ClockIcon />
                <p>Auction ending in:</p>
              </div>
              <div>
                <div className="flex gap-4">
                  <div className="text-center">
                    <p className="text-lg font-semibold">{nftCard.time.days}</p>
                    <p>Days</p>
                  </div>
                  <div className="text-center">
                    <p className="text-lg font-semibold">
                      {nftCard.time.hours}
                    </p>
                    <p>Hours</p>
                  </div>
                  <div className="text-center">
                    <p className="text-lg font-semibold">
                      {nftCard.time.minutes}
                    </p>
                    <p>Minutes</p>
                  </div>
                  <div className="text-center">
                    <p className="text-lg font-semibold">
                      {nftCard.time.seconds}
                    </p>
                    <p>Seconds</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Place and View buttons */}
          <div className="p-4 max-w-xs">
            <div className="flex justify-around">
              <Button color="primary">Place</Button>
              <Button color="secondary">View</Button>
            </div>
          </div>
        </div>

        {/* Preview - Right side content */}
        <div className="relative p-6 flex justify-center flex-1">
          <Button
            color="danger"
            className="absolute right-0 top-0 m-3 flex items-center gap-3 rounded-xl p-2"
          >
            <HeartIcon />
            {nftCard.like}
          </Button>
          <div className="w-full aspect-square rounded-xl bg-red-500">
            <Image
              alt={nftCard.title}
              className="w-full h-full object-cover"
              src={nftCard.nftImage || ""}
              width={300}
              height={300}
              priority={false}
            />
          </div>
        </div>
      </section>

      {/* Bottom controls */}
      <section
        className={classNames("flex justify-center my-8", {
          hidden: !controls,
        })}
      >
        <div className="w-[320px] flex justify-around">
          <Button>
            <ArrowLeftIcon />
          </Button>
          <Button>
            <ArrowRightIcon />
          </Button>
        </div>
      </section>
    </Card>
  );
};
