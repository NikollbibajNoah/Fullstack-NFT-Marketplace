package dev.nftmarketplace.backend_nft_marketplace.repository;

import dev.nftmarketplace.backend_nft_marketplace.entity.NFT;
import org.springframework.data.jpa.repository.JpaRepository;

public interface NFTRepository extends JpaRepository<NFT, String> {
}
