package com.RKCummins.CryptoTracker.service;

import com.RKCummins.CryptoTracker.entity.Transaction;

public interface TransactionService {
    Transaction addTransaction(Long id, Transaction transaction);

    Transaction updateTransaction(Long transactionId, Transaction transaction);

    void deleteTransaction(Long transactionId);
}
