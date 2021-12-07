package com.RKCummins.CryptoTracker.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.Date;
import java.util.UUID;

@Entity
public class User {

    @Id
    @GeneratedValue(strategy =GenerationType.AUTO)
    private Long id;
    private String name;
    private String email;
    private Date created;

    public User(Long id, String name, String email, Date created) {
        this.id = id;
        this.email = email;
        this.created = created;
    }

    public User() {
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", email=" + email +
                ", created=" + created +
                '}';
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setCreated(Date created) {
        this.created = created;
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getEmail() {
        return email;
    }

    public Date getCreated() {
        return created;
    }
}
