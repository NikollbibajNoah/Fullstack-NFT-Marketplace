package dev.nftmarketplace.backend_nft_marketplace.service;

import dev.nftmarketplace.backend_nft_marketplace.entity.NFT;
import dev.nftmarketplace.backend_nft_marketplace.repository.NFTRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class NFTService {

    private NFTRepository nftRepository;

    public List<NFT> getAllNFTs() {
        return nftRepository.findAll();
    }

    public NFT getNFTById(String id) {
        return nftRepository.findById(id).orElseThrow(() -> new RuntimeException("NFT not found"));
    }

    public NFT createNFT(String title, String owner, String collection, String price, Integer likes, String image, String nftImage, String metadataUrl) {

        NFT nft = NFT.builder()
                .title(title)
                .owner(owner)
                .collection(collection)
                .price(price)
                .likes(likes)
                .image(image)
                .nftImage(nftImage)
                .metadataUrl(metadataUrl)
                .likes(0) // Default like count
                .build();

        return nftRepository.save(nft);
    }

    public NFT updateNFT(String id, String title, String owner, String collection, String price, Integer likes, String image, String nftImage, String metadataUrl) {
        NFT nft = getNFTById(id);

        nft.setTitle(title);
        nft.setOwner(owner);
        nft.setCollection(collection);
        nft.setPrice(price);
        nft.setLikes(likes);
        nft.setImage(image);
        nft.setNftImage(nftImage);
        nft.setMetadataUrl(metadataUrl);

        return nftRepository.save(nft);
    }

    public String deleteNFT(String id) {
        nftRepository.deleteById(id);
        return "NFT deleted successfully";
    }
}