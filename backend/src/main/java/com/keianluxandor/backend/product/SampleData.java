package com.keianluxandor.backend.product;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.math.BigDecimal;
import java.util.List;
import java.util.Set;

// Adds a few sample products the first time the backend starts (only if the table is empty).
// Prices and wording are placeholders: change them any time.
@Component
public class SampleData implements CommandLineRunner {

    private final ProductRepository products;

    public SampleData(ProductRepository products) {
        this.products = products;
    }

    @Override
    public void run(String... args) {
        if (products.count() > 0) {
            return;
        }

        products.saveAll(List.of(
            new Product("KL-R-001", "Keian Promise Ring", "Ring", "14K Rose Gold",
                new BigDecimal("890"), "New",
                "A slender band with a single bright diamond, made to mark a quiet promise.",
                "rings", List.of("/ring.webp"), Set.of("fine-jewelry", "gifts", "signature")),

            new Product("KL-B-001", "Riviera Tennis Bracelet", "Bracelet", "14K White Gold",
                new BigDecimal("2450"), null,
                "A continuous line of hand-set diamonds that moves softly with the wrist.",
                "bracelets", List.of("/bracelet.webp"), Set.of("fine-jewelry", "gifts", "signature")),

            new Product("KL-E-001", "Lumière Halo Engagement Ring", "Engagement Ring", "Platinum",
                new BigDecimal("3900"), "Bestseller",
                "A round centre stone framed by a delicate halo, finished by hand in platinum.",
                "engagement-rings", List.of("/ring.webp"), Set.of("rings", "fine-jewelry")),

            new Product("KL-S-001", "Dewdrop Diamond Studs", "Stud Earrings", "14K Yellow Gold",
                new BigDecimal("720"), null,
                "Everyday studs with a soft, rounded setting that catches light from every side.",
                "earrings", List.of("/earring.webp"), Set.of("fine-jewelry", "gifts", "new-arrivals")),

            new Product("KL-N-001", "Celeste Pendant Necklace", "Pendant", "14K Yellow Gold",
                new BigDecimal("980"), "New",
                "A small star-cut pendant on a fine chain, easy to wear alone or layered.",
                "pendants", List.of("/pendant.webp"), Set.of("necklaces", "fine-jewelry", "new-arrivals")),

            new Product("KL-H-001", "Twilight Hoop Earrings", "Hoop Earrings", "Sterling Silver",
                new BigDecimal("240"), null,
                "Light, polished hoops with a gentle twist, sized for day-to-evening wear.",
                "earrings", List.of("/earring.webp"), Set.of("sterling-silver", "gifts"))
        ));
    }
}
