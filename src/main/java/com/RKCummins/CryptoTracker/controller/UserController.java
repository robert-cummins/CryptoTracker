package com.RKCummins.CryptoTracker.controller;

import com.RKCummins.CryptoTracker.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

    @Autowired
    private User user;
    
}
