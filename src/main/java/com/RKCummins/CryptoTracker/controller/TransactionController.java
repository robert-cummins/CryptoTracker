package com.RKCummins.CryptoTracker.controller;

import com.RKCummins.CryptoTracker.entity.Transaction;
import org.springframework.web.bind.annotation.CrossOrigin;
import com.RKCummins.CryptoTracker.service.TransactionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class TransactionController {

    @Autowired
    private TransactionService transactionService;



    @PostMapping("/user/{id}/transaction")
    public Transaction addTransaction(@PathVariable("id") Long id, @Valid @RequestBody Transaction transaction){
        return transactionService.addTransaction(id, transaction);
    }

    @PutMapping("/transaction/{transactionId}")
    public Transaction updateTransaction (@PathVariable("transactionId") Long transactionId, @RequestBody Transaction transaction){
        return transactionService.updateTransaction(transactionId, transaction);
    }

    @DeleteMapping("/transaction/{transactionId}")
    public String deleteTransaction(@PathVariable("transactionId") Long transactionId){
        transactionService.deleteTransaction(transactionId);
        return "Transaction successfully deleted";
    }


}
