package com.ahmeddev.fullstack_backend.modal;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;

@Entity
public class Produit {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @JsonProperty("img")
    private String img;

    @JsonProperty("title")
    private String title;

    @JsonProperty("description")  // Utilisez @JsonProperty pour correspondre aux noms JSON
    @Column(name = "description")  // Assurez-vous que le nom de la colonne en base de données est correct
    private String desc;

    @JsonProperty("price")
    private String price;
    @JsonProperty("catégorie")
    private String Catégorie;

    public String getCatégorie() {
        return Catégorie;
    }

    public void setCatégorie(String catégorie) {
        Catégorie = catégorie;
    }

    // Getters et setters
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getImg() {
        return img;
    }

    public void setImg(String img) {
        this.img = img;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDesc() {
        return desc;
    }

    public void setDesc(String desc) {
        this.desc = desc;
    }

    public String getPrice() {
        return price;
    }

    public void setPrice(String price) {
        this.price = price;
    }
}
