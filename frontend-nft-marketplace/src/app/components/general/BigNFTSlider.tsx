import { NFTCard } from "@/lib/types";
import { BigNFTCard } from "./BigNFTCard";

const sliderData: NFTCard[] = [
  {
    id: 1,
    title: "Hello NFT",
    name: "Noah Nikollbibaj",
    collection: "Collection 1",
    price: "0000006426 ETH",
    like: 212,
    image: "",
    nftImage: "",
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
    nftImage: "",
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
    nftImage: "",
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
    <section>
      {sliderData.map((nftCard) => (
        <BigNFTCard key={nftCard.id} nftCard={nftCard} />
      ))}
    </section>
  );
};
