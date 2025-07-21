import { NFTCard } from "@/lib/types";
import { Card, Avatar, Input, Button } from "@heroui/react";
import {
  FlameIcon,
  ClockIcon,
  HeartIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
} from "lucide-react";

export type NFTCardProps = {
  nftCard: NFTCard;
};

export const BigNFTCard: React.FC<NFTCardProps> = ({ nftCard }) => {
  return (
    <Card className="w-[896px]">
      <div className="flex flex-row gap-3">
        <div className="max-w-md">
          <div className="p-4">
            <h2 className="text-2xl font-semibold">{nftCard.title}</h2>
            <div className="mt-3">
              <div className="flex items-center">
                <div className="flex gap-2">
                  <Avatar name="Noah" />
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

          <div className="p-4 max-w-xs">
            <div className="flex justify-around">
              <Button color="primary">Place</Button>
              <Button color="secondary">View</Button>
            </div>
          </div>
        </div>
        <div className="relative p-6 flex justify-center flex-1">
          <div className="bg-gray-500 absolute right-0 top-0 m-3 flex items-center gap-3 rounded-xl p-2">
            <HeartIcon />
            {nftCard.like}
          </div>
          <div className="w-full aspect-square rounded-xl bg-red-500"></div>
        </div>
      </div>

      <div className="flex justify-center my-8">
        <div className="w-[320px] flex justify-around">
          <Button>
            <ArrowLeftIcon />
          </Button>
          <Button>
            <ArrowRightIcon />
          </Button>
        </div>
      </div>
    </Card>
  );
};
