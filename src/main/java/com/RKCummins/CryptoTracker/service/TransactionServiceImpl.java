package com.RKCummins.CryptoTracker.service;

import com.RKCummins.CryptoTracker.entity.Transaction;
import com.RKCummins.CryptoTracker.repository.TransactionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.Date;
import java.util.Objects;



@Service
public class TransactionServiceImpl implements TransactionService {

    @Autowired
    private TransactionRepository transactionRepository;

    @Override
    public Transaction addTransaction(Long id, Transaction transaction) {
        transaction.setUserId(id);
        DateTimeFormatter dtf = DateTimeFormatter.ofPattern("dd/MM/uuuu");
        LocalDate date = LocalDate.now();
        transaction.setCreated(dtf.format(date));
        return transactionRepository.save(transaction);
    }

    @Override
    public Transaction updateTransaction(Long transactionId, Transaction transaction) {
        Transaction transactionFromDB = transactionRepository.findById(transactionId).get();

        System.out.println(transactionFromDB.toString());

        if(Objects.nonNull(transaction.getCrypto()) &&
                !"".equalsIgnoreCase(transaction.getCrypto())){
            transactionFromDB.setCrypto(transaction.getCrypto());
        }

        if(Objects.nonNull(transaction.getPrice())){
            transactionFromDB.setPrice(transaction.getPrice());
        }

        if(Objects.nonNull(transaction.getAmount())){
            transactionFromDB.setAmount(transaction.getAmount());
        }

        return transactionRepository.save(transactionFromDB);
    }

    @Override
    public void deleteTransaction(Long transactionId) {
        transactionRepository.deleteById(transactionId);
    }
}
