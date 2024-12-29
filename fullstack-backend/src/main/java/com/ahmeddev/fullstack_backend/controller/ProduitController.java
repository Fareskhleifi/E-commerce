package com.ahmeddev.fullstack_backend.controller;

import com.ahmeddev.fullstack_backend.modal.Produit;
import com.ahmeddev.fullstack_backend.repository.ProduitRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/produit")
@CrossOrigin(origins = "http://localhost:5173")

public class ProduitController {
    @Autowired
    private ProduitRepository produitRepository;

    @PostMapping
    public Produit createProduit(@RequestBody Produit produit) {
        return produitRepository.save(produit);
    }

    @GetMapping
    public List<Produit> getAllProduit() {
        return produitRepository.findAll();
    }

    @GetMapping("/{id}")
    public Optional<Produit> getProduitById(@PathVariable int id) {
        return produitRepository.findById(id);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Produit> updateProduit(@RequestBody Produit newProduit, @PathVariable int id) {
        return produitRepository.findById(id)
                .map(produit -> {
                    produit.setImg(newProduit.getImg());
                    produit.setTitle(newProduit.getTitle());
                    produit.setDesc(newProduit.getDesc());
                    produit.setPrice(newProduit.getPrice());
                    Produit updatedProduit = produitRepository.save(produit);
                    return ResponseEntity.ok(updatedProduit);
                })
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public void deleteProduit(@PathVariable int id) {
        produitRepository.deleteById(id);
    }
}

