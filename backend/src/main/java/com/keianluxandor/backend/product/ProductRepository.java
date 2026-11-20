package com.keianluxandor.backend.product;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

// Reads and saves products in the database. Spring writes the SQL for us.
public interface ProductRepository extends JpaRepository<Product, Long> {

    // Products whose main category OR one of their tags matches, e.g. "rings" or "gifts".
    @Query("select p from Product p where p.category = :tag or :tag member of p.tags order by p.id")
    List<Product> findByTag(@Param("tag") String tag);
}
