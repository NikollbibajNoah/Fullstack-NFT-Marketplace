package dev.nftmarketplace.backend_nft_marketplace.resolver;

import dev.nftmarketplace.backend_nft_marketplace.entity.NFT;
import dev.nftmarketplace.backend_nft_marketplace.service.NFTService;
import lombok.AllArgsConstructor;
import org.springframework.graphql.data.method.annotation.MutationMapping;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.stereotype.Controller;

import java.util.List;

@Controller
@AllArgsConstructor
public class NFTResolver {

    private NFTService nftService;

    @QueryMapping
    public List<NFT> getAllNFTs() {
        return nftService.getAllNFTs();
    }

    @QueryMapping
    public NFT getNFTById(String id) {
        return nftService.getNFTById(id);
    }

    @MutationMapping
    public NFT createNFT(String title, String owner, String collection, String price, String image, String nftImage, String metadataUrl) {
        return nftService.createNFT(title, owner, collection, price, image, nftImage, metadataUrl);
    }

    @MutationMapping
    public String deleteNFT(String id) {
        return nftService.deleteNFT(id);
    }
}
