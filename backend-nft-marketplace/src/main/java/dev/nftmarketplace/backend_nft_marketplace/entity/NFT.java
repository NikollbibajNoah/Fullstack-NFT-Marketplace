package dev.nftmarketplace.backend_nft_marketplace.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.*;
import org.hibernate.annotations.GenericGenerator;

@Getter
@Setter
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class NFT {

    @Id
    @GeneratedValue(generator = "uuid")
    @GenericGenerator(name = "uuid", strategy = "uuid2")
    private String id;

    private String title;
    private String owner;
    private String collection; // Later separate type for Collection
    private String price;
    private int like;
    private String image; // URL to the image
    private String nftImage; // URL to the NFT image
    private String metadataUrl;
//    private Time time;
}