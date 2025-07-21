export type NFTCard = {
    id: number;
    title: string;
    name: string;
    collection: string; // Later separate type for Collection
    price: string;
    like: number;
    image: string; // URL to the image
    nftImage: string; // URL to the NFT image
    time: {
      days: 2,
      hours: 3,
      minutes: 5,
      seconds: 10,
    },
}