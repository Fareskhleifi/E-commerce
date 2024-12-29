package com.ahmeddev.fullstack_backend.controller;

import com.ahmeddev.fullstack_backend.modal.Client;
import com.ahmeddev.fullstack_backend.repository.ClientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.Optional;

@RestController
public class ClientController {

    @Autowired
    private ClientRepository clientRepository;

    private static final String UPLOAD_DIR = "uploads/";

    @PostMapping("/client")
    public ResponseEntity<Client> createClient(
            @RequestParam(value = "file", required = false) MultipartFile file,
            @RequestParam("username") String username,
            @RequestParam("email") String email,
            @RequestParam("password") String password,
            @RequestParam("firstName") String firstName,
            @RequestParam("lastName") String lastName,
            @RequestParam("streetAddress") String streetAddress,
            @RequestParam("city") String city,
            @RequestParam("state") String state,
            @RequestParam("postalCode") String postalCode,
            @RequestParam("notification") String notification) throws IOException {

        Client client = new Client();
        client.setUserName(username);
        client.setEmail(email);
        client.setPassword(password);
        client.setFirstName(firstName);
        client.setLastName(lastName);
        client.setStretAdress(streetAddress);
        client.setCity(city);
        client.setState(state);
        client.setPostalCode(postalCode);
        client.setNotification(notification);

        if (file != null && !file.isEmpty()) {
            String fileName = file.getOriginalFilename();
            Path path = Paths.get(UPLOAD_DIR + fileName);
            Files.createDirectories(path.getParent());
            Files.write(path, file.getBytes());
            client.setImage(fileName); // Set image only if file is provided
        }

        // Save the client to the database
        Client savedClient = clientRepository.save(client);
        return ResponseEntity.ok(savedClient);
    }

    @GetMapping("/client/{id}")
    public ResponseEntity<Client> getClientById(@PathVariable int id) {
        return clientRepository.findById(id)
                .map(client -> ResponseEntity.ok(client))
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PutMapping("/client/{id}")
    public ResponseEntity<Client> updateClient(@RequestBody Client newClient, @PathVariable int id) {
        return clientRepository.findById(id)
                .map(client -> {
                    client.setCity(newClient.getCity());
                    client.setEmail(newClient.getEmail());
                    client.setFirstName(newClient.getFirstName());
                    client.setLastName(newClient.getLastName());
                    client.setPassword(newClient.getPassword());
                    client.setImage(newClient.getImage());
                    client.setNotification(newClient.getNotification());
                    client.setState(newClient.getState());
                    client.setPostalCode(newClient.getPostalCode());
                    client.setStretAdress(newClient.getStretAdress());
                    client.setUserName(newClient.getUserName());
                    Client updatedClient = clientRepository.save(client);
                    return ResponseEntity.ok(updatedClient);
                })
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @DeleteMapping("/client/{id}")
    public ResponseEntity<Void> deleteClient(@PathVariable int id) {
        if (clientRepository.existsById(id)) {
            clientRepository.deleteById(id);
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}


