package com.RKCummins.CryptoTracker.service;

import com.RKCummins.CryptoTracker.entity.User;
import com.RKCummins.CryptoTracker.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.Date;
import java.util.Objects;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;
    @Override
    public User saveUser(User user) {
        DateTimeFormatter dtf = DateTimeFormatter.ofPattern("dd/MM/uuuu");
        LocalDate date = LocalDate.now();
        user.setCreated(dtf.format(date));
        return userRepository.save(user);
    }

    @Override
    public User getUserById(Long id) {
        return userRepository.findById(id).get();
    }

    @Override
    public void deleteUserById(Long id) {
        userRepository.deleteById(id);
    }

    @Override
    public User UpdateUser(Long id, User user) {
        User userFromDB = userRepository.findById(id).get();

        if(Objects.nonNull(user.getName()) &&
        !"".equalsIgnoreCase(user.getName())){
            userFromDB.setName(user.getName());
        }

        if(Objects.nonNull(user.getEmail()) &&
                !"".equalsIgnoreCase(user.getEmail())){
            userFromDB.setEmail(user.getEmail());
        }

        return userRepository.save(userFromDB);
    }
}
