package com.RKCummins.CryptoTracker.service;

import com.RKCummins.CryptoTracker.entity.User;

import java.util.Optional;

public interface UserService {
    User saveUser(User user);

    User getUserById(Long id);

    void deleteUserById(Long id);

    User UpdateUser(Long id, User user);
}
