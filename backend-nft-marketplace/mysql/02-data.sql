use nft_marketplace;

-- ***** Data ***** --

-- Mock data for the NFT table --
INSERT INTO nft (id, title, owner, collection, price, image, nft_image, metadata_url, `like`) VALUES
  ('1', 'CryptoPunk #1', 'Alice', 'CryptoPunks', '10 ETH', 'image1.png', 'nftimage1.png', 'https://meta1', 5),
  ('2', 'Bored Ape #2', 'Bob', 'Bored Apes', '15 ETH', 'image2.png', 'nftimage2.png', 'https://meta2', 8),
  ('3', 'ArtBlock #3', 'Charlie', 'ArtBlocks', '5 ETH', 'image3.png', 'nftimage3.png', 'https://meta3', 2);