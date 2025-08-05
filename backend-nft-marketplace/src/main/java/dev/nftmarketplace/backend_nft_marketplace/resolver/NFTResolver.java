package dev.nftmarketplace.backend_nft_marketplace.resolver;

import dev.nftmarketplace.backend_nft_marketplace.entity.NFT;
import dev.nftmarketplace.backend_nft_marketplace.service.NFTService;
import lombok.AllArgsConstructor;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.MutationMapping;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.stereotype.Controller;

import java.util.List;

@Controller
@AllArgsConstructor
public class NFTResolver {

    private final NFTService nftService;

    @QueryMapping
    public List<NFT> getAllNFTs() {
        return nftService.getAllNFTs();
    }

    @QueryMapping
    public NFT getNFTById(@Argument String id) {
        return nftService.getNFTById(id);
    }

    @MutationMapping
    public NFT createNFT(@Argument String title, @Argument String owner, @Argument String collection, @Argument String price, @Argument Integer likes, @Argument String image, @Argument String nftImage, @Argument String metadataUrl) {
        return nftService.createNFT(title, owner, collection, price, likes, image, nftImage, metadataUrl);
    }

    @MutationMapping
    public NFT updateNFT(@Argument String id, @Argument String title, @Argument String owner, @Argument String collection, @Argument String price, @Argument Integer likes, @Argument String image, @Argument String nftImage, @Argument String metadataUrl) {
        return nftService.updateNFT(id, title, owner, collection, price, likes, image, nftImage, metadataUrl);
    }

    @MutationMapping
    public String deleteNFT(@Argument String id) {
        return nftService.deleteNFT(id);
    }
}
