package com.RKCummins.CryptoTracker.service;

import com.RKCummins.CryptoTracker.entity.User;
import com.RKCummins.CryptoTracker.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;
    @Override
    public User saveUser(User user) {
        Date date = new Date();
        user.setCreated(date);
        return userRepository.save(user);
    }
}
