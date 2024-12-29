package com.ahmeddev.fullstack_backend.repository;

import com.ahmeddev.fullstack_backend.modal.Produit;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProduitRepository extends JpaRepository<Produit, Integer> {
    // Custom query methods can be added here if needed
}
