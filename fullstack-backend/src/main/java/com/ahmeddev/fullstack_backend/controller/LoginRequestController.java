package com.ahmeddev.fullstack_backend.controller;

import com.ahmeddev.fullstack_backend.modal.Client;
import com.ahmeddev.fullstack_backend.modal.LoginRequest;
import com.ahmeddev.fullstack_backend.repository.ClientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/auth")

public class LoginRequestController {

    @Autowired
    private ClientRepository clientRepository;
    @CrossOrigin(origins = "http://localhost:5173")

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest loginRequest) {
        if (loginRequest.getEmail() == null || loginRequest.getPassword() == null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Email and password must not be null");
        }

        Optional<Client> clientOptional = clientRepository.findByEmail(loginRequest.getEmail());
        if (clientOptional.isPresent()) {
            Client client = clientOptional.get();
            if (client.getPassword().equals(loginRequest.getPassword())) {
                // Retourner toutes les informations du client
                return ResponseEntity.ok(client);
            } else {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid password");
            }
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("User not found");
        }
    }
}
