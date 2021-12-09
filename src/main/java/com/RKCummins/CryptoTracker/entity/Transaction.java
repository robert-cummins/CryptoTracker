package com.RKCummins.CryptoTracker.entity;


import javax.persistence.*;
import java.math.BigDecimal;

@Entity
public class Transaction {

    @Id
    @GeneratedValue(strategy =GenerationType.AUTO)
    private Long id;
    private String crypto;
    private BigDecimal price;
    @Column(precision=19, scale=6)
    private BigDecimal amount;
    @Column(name="user_id")
    private Long userId;

    public Transaction(Long id, String crypto, BigDecimal price, BigDecimal amount, Long userId) {
        this.id = id;
        this.crypto = crypto;
        this.price = price;
        this.amount = amount;
        this.userId = userId;
    }

    public Transaction() {
    }

    @Override
    public String toString() {
        return "Transaction{" +
                "id=" + id +
                ", crypto='" + crypto + '\'' +
                ", price=" + price +
                ", amount=" + amount +
                ", userId=" + userId +
                '}';
    }

    public Long getUserId() {
        return userId;
    }

    public Long getId() {
        return id;
    }

    public String getCrypto() {
        return crypto;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public BigDecimal getAmount() {
        return amount;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setCrypto(String crypto) {
        this.crypto = crypto;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }

    public void setAmount(BigDecimal amount) {
        this.amount = amount;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }
}
