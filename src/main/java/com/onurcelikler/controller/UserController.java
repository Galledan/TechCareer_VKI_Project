package com.onurcelikler.controller;

import com.onurcelikler.model.User;
import com.onurcelikler.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1")
public class UserController {

    @Autowired
    private UserRepo userRepo;

    // Getting all Users

    @GetMapping("/users")
    public List<User> getAllUsers() {
        return userRepo.findAll();
    }

    // Creating User
    @PostMapping("/users")
    public User createUser(@RequestBody User user){
        return userRepo.save(user);
    }
}
