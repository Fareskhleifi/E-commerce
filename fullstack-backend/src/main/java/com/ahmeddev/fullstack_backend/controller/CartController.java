package com.ahmeddev.fullstack_backend.controller;

import com.ahmeddev.fullstack_backend.modal.Cart;
import com.ahmeddev.fullstack_backend.repository.CartRespository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/cart")
@CrossOrigin(origins = "http://localhost:5173")

public class CartController {
    @Autowired
    private CartRespository cartRespository;

    @PostMapping
    public Cart createCart(@RequestBody Cart cart) {
        System.out.println("Received qte: " + cart.getQte());
        return cartRespository.save(cart);
    }


    @GetMapping
    public List<Cart> getAllCartItem() {
        return cartRespository.findAll();
    }
    @GetMapping("/byEmail")
    public List<Cart> getCartItemsByEmail(@RequestParam String email) {return cartRespository.findByEmail(email);
    }

    @GetMapping("/{id}")
    public Optional<Cart> getCartById(@PathVariable int id) {
        return cartRespository.findById(id);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Cart> updateProduit(@RequestBody Cart newCart, @PathVariable int id) {
        return cartRespository.findById(id)
                .map(cart -> {
                    cart.setImg(newCart.getImg());
                    cart.setTitle(newCart.getTitle());
                    cart.setQte(newCart.getQte());
                    cart.setPrice(newCart.getPrice());
                    cart.setEmail(newCart.getEmail());
                    Cart updateCarteItem = cartRespository.save(cart);
                    return ResponseEntity.ok(updateCarteItem);
                })
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public void deleteCartItem(@PathVariable int id) {
        cartRespository.deleteById(id);
    }
}
