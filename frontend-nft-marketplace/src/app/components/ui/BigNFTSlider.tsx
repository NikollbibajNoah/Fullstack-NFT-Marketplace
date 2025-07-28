import { NFT } from "@/lib/types";
import { BigNFTCard } from "../cards/BigNFTCard";

import Ape01 from "../../../../public/mock/apes/01.jpeg";
import Ape02 from "../../../../public/mock/apes/02.jpeg";

const sliderData: NFT[] = [
  {
    id: 1,
    title: "Hello NFT",
    name: "Noah Nikollbibaj",
    collection: "Collection 1",
    price: "0000006426 ETH",
    like: 212,
    image: "",
    nftImage: Ape01.src,
    time: {
      days: 2,
      hours: 3,
      minutes: 5,
      seconds: 10,
    },
  },
  {
    id: 2,
    title: "Gold NFT",
    name: "John Doe",
    collection: "Collection 1",
    price: "000046912 ETH",
    like: 3224,
    image: "",
    nftImage: Ape02.src,
    time: {
      days: 1,
      hours: 6,
      minutes: 54,
      seconds: 33,
    },
  },
  {
    id: 3,
    title: "Home NFT",
    name: "Frank Brown",
    collection: "Collection 2",
    price: "00091912 ETH",
    like: 312,
    image: "",
    nftImage: Ape01.src,
    time: {
      days: 1,
      hours: 6,
      minutes: 54,
      seconds: 33,
    },
  },
];

export const BigNFTSlider = () => {
  return (
    <section className="w-full flex flex-col justify-center px-8 py-4 my-3">
      <div>
        <h2 className="text-2xl font-semibold">Todays NFT's</h2>
        <p>Check out the latest and most popular NFTs of the day!</p>
      </div>

      <div className="w-full mx-auto flex items-center overflow-x-auto gap-4 py-4">
        {sliderData.map((nftCard: NFT) => (
          <BigNFTCard key={nftCard.id} nftCard={nftCard} controls={false} />
        ))}
      </div>
    </section>
  );
};
