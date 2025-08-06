use nft_marketplace;

-- ***** Data ***** --

-- Mock data for the NFT table --
INSERT INTO nft (id, title, owner, collection, price, image, nft_image, metadata_url, likes) VALUES
  ('1', 'Bored Ape #1', 'Alice', 'Bored Apes Collection', '10.5 ETH', '/mock/apes/01.jpeg', '/mock/apes/01.jpeg', 'https://metadata.boredapes.com/1', 125),
  ('2', 'Bored Ape #2', 'Bob', 'Bored Apes Collection', '15.2 ETH', '/mock/apes/02.jpeg', '/mock/apes/02.jpeg', 'https://metadata.boredapes.com/2', 89),
  ('3', 'Crypto Punk #3', 'Charlie', 'CryptoPunks', '8.7 ETH', '/mock/apes/01.jpeg', '/mock/apes/01.jpeg', 'https://metadata.cryptopunks.com/3', 234),
  ('4', 'Art Block #4', 'Diana', 'Art Blocks', '5.3 ETH', '/mock/apes/02.jpeg', '/mock/apes/02.jpeg', 'https://metadata.artblocks.com/4', 67),
  ('5', 'Mutant Ape #5', 'Eve', 'Mutant Apes', '12.1 ETH', '/mock/apes/01.jpeg', '/mock/apes/01.jpeg', 'https://metadata.mutantapes.com/5', 156),
  ('6', 'Doodle #6', 'Frank', 'Doodles', '6.8 ETH', '/mock/apes/02.jpeg', '/mock/apes/02.jpeg', 'https://metadata.doodles.com/6', 78);