package com.keianluxandor.backend.product;

import jakarta.persistence.CollectionTable;
import jakarta.persistence.Column;
import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OrderColumn;
import jakarta.persistence.Table;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Set;

// One piece of jewellery. Each field becomes a column in the "products" table.
@Entity
@Table(name = "products")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true)
    private String sku;

    @Column(nullable = false)
    private String name;

    private String type;      // e.g. "Ring", "Bracelet"
    private String metal;     // e.g. "14K Rose Gold"

    @Column(nullable = false, precision = 12, scale = 2)
    private BigDecimal price;

    private String badge;     // e.g. "New", or empty
    private Integer rating = 5;
    private Integer reviews = 0;

    @Column(length = 2000)
    private String description;

    private String category;  // main collection, e.g. "rings"

    // Picture paths, in display order (first one is the main photo).
    @ElementCollection(fetch = FetchType.EAGER)
    @CollectionTable(name = "product_images", joinColumns = @JoinColumn(name = "product_id"))
    @OrderColumn(name = "position")
    @Column(name = "url")
    private List<String> images = new ArrayList<>();

    // Extra collections this piece appears in, e.g. "gifts", "new-arrivals".
    @ElementCollection(fetch = FetchType.EAGER)
    @CollectionTable(name = "product_tags", joinColumns = @JoinColumn(name = "product_id"))
    @Column(name = "tag")
    private Set<String> tags = new LinkedHashSet<>();

    protected Product() {
        // needed by the database library
    }

    public Product(String sku, String name, String type, String metal, BigDecimal price,
                   String badge, String description, String category,
                   List<String> images, Set<String> tags) {
        this.sku = sku;
        this.name = name;
        this.type = type;
        this.metal = metal;
        this.price = price;
        this.badge = badge;
        this.description = description;
        this.category = category;
        this.images = new ArrayList<>(images);
        this.tags = new LinkedHashSet<>(tags);
    }

    public Long getId() { return id; }
    public String getSku() { return sku; }
    public String getName() { return name; }
    public String getType() { return type; }
    public String getMetal() { return metal; }
    public BigDecimal getPrice() { return price; }
    public String getBadge() { return badge; }
    public Integer getRating() { return rating; }
    public Integer getReviews() { return reviews; }
    public String getDescription() { return description; }
    public String getCategory() { return category; }
    public List<String> getImages() { return images; }
    public Set<String> getTags() { return tags; }
}
