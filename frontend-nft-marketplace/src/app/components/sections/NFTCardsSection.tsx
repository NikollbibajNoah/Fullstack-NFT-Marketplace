import { NFT } from "@/lib/types/NFTCard";
import { NFTCard } from "../cards/NFTCard";
import { FilterSection } from "./FilterSection";

export type NFTCardsSectionProps = {
  nftData: NFT[];
};

export const NFTCardsSection: React.FC<NFTCardsSectionProps> = ({
  nftData,
}) => {
  return (
    <section className="px-8 py-4 my-3">
      <div>
        <h2 className="text-2xl font-semibold">NFT's</h2>
        <p>Explore our diverse collection of NFTs</p>
      </div>

      <FilterSection />

      <div className="grid place-items-center py-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {nftData.map((nft, index) => (
          <NFTCard key={index} data={nft} />
        ))}
      </div>
    </section>
  );
};
