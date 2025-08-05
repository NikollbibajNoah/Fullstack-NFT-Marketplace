use nft_marketplace;

ALTER DATABASE nft_marketplace

-- Allow special characters in table and column names
CHARACTER SET utf8mb4
COLLATE utf8mb4_unicode_ci;

SET character_set_client = utf8mb4;
SET character_set_connection = utf8mb4;
SET character_set_results = utf8mb4;
SET character_set_server = utf8mb4;

-- ***** Tables ***** --

-- NFTS Table --
CREATE TABLE nft (
    id VARCHAR(36) PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    owner VARCHAR(255) NOT NULL,
    collection VARCHAR(255),
    price VARCHAR(50),
    likes INT DEFAULT 0,
    image VARCHAR(255),
    nft_image VARCHAR(255),
    metadata_url VARCHAR(255)
);