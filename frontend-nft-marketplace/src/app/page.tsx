import { NFT } from "@/lib/types";
import {
  CategorySection,
  HeroSection,
  NFTCardsSection,
  ServiceSection,
} from "./components/sections";
import { BigNFTSlider } from "./components/ui";

import Ape01 from "../../public/mock/apes/01.jpeg";
import Ape02 from "../../public/mock/apes/02.jpeg";

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

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ServiceSection />
      <BigNFTSlider />
      <CategorySection />

      <NFTCardsSection nftData={sliderData} />
    </div>
  );
}
