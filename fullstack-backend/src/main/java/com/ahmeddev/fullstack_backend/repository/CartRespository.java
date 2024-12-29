package com.ahmeddev.fullstack_backend.repository;
import com.ahmeddev.fullstack_backend.modal.Cart;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface CartRespository extends JpaRepository<Cart, Integer> {
        List<Cart> findByEmail(String email);

}
