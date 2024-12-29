package com.ahmeddev.fullstack_backend.repository;

import com.ahmeddev.fullstack_backend.modal.Client;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ClientRepository extends JpaRepository<Client , Integer> {
    Optional<Client> findByEmail(String email);

}
