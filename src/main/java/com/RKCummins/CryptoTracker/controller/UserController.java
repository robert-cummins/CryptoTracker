package com.RKCummins.CryptoTracker.controller;

import com.RKCummins.CryptoTracker.entity.User;
import com.RKCummins.CryptoTracker.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RestController
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/user")
    public User saveUser(@Valid @RequestBody User user){
        return userService.saveUser(user);
    }
}
