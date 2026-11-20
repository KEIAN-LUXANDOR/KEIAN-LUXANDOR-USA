package com.keianluxandor.backend.product;

import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

// The addresses the website calls (see src/api/products.js in keian-luxandor).
@RestController
@RequestMapping("/api/products")
public class ProductController {

    private final ProductRepository products;

    public ProductController(ProductRepository products) {
        this.products = products;
    }

    // GET /api/products            → every product
    // GET /api/products?tag=rings  → only products in "rings"
    @GetMapping
    public List<Product> list(@RequestParam(required = false) String tag) {
        if (tag == null || tag.isBlank()) {
            return products.findAll(Sort.by("id"));
        }
        return products.findByTag(tag.trim().toLowerCase());
    }

    // GET /api/products/1 → one product (or "404 Not Found" if that id doesn't exist)
    @GetMapping("/{id}")
    public Product one(@PathVariable Long id) {
        return products.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Product not found"));
    }
}
