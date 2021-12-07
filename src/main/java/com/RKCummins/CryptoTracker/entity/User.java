package com.RKCummins.CryptoTracker.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.validation.constraints.Email;
import java.util.Date;
import java.util.UUID;

@Entity
public class User {

    @Id
    @GeneratedValue
    private UUID id;
    private Email email;
    private Date created;

    public User(UUID id, Email email, Date created) {
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

    public void setId(UUID id) {
        this.id = id;
    }

    public void setEmail(Email email) {
        this.email = email;
    }

    public void setCreated(Date created) {
        this.created = created;
    }

    public UUID getId() {
        return id;
    }

    public Email getEmail() {
        return email;
    }

    public Date getCreated() {
        return created;
    }
}
