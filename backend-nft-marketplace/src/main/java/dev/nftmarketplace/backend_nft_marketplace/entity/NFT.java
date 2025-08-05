package dev.nftmarketplace.backend_nft_marketplace.entity;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.GenericGenerator;

@Getter
@Setter
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Table(name = "nft")
public class NFT {

    @Id
    @GeneratedValue(generator = "uuid")
    @GenericGenerator(name = "uuid", strategy = "uuid2")
    @Column(name = "id")
    private String id;

    @Column(name = "title", nullable = false)
    private String title;

    @Column(name = "owner", nullable = false)
    private String owner;

    @Column(name = "collection")
    private String collection; // Later separate type for Collection

    @Column(name = "price")
    private String price;

    @Column(name = "likes")
    private Integer likes;

    @Column(name = "image")
    private String image; // URL to the image

    @Column(name = "nft_image")
    private String nftImage; // URL to the NFT image

    @Column(name = "metadataUrl")
    private String metadataUrl;
    
//    private Time time;
}