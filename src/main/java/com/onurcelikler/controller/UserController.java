package com.onurcelikler.controller;

import com.onurcelikler.exception.ResourceNotFoundException;
import com.onurcelikler.model.User;
import com.onurcelikler.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

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

    // Getting User By Id
@GetMapping("/users/{id}")
    public ResponseEntity<User> getUserById(@PathVariable Long id) {
    User user = userRepo.findById(id).orElseThrow(() -> new ResourceNotFoundException("User not Found with Id: " + id));
    return ResponseEntity.ok(user);
}

    //Updating User
@PutMapping("/users/{id}")
    public ResponseEntity<User> updateUser(Long id,@RequestBody User userDetails){
    User user = userRepo.findById(id).orElseThrow(() -> new ResourceNotFoundException("User not Found with Id: " + id));

    user.setFirstName(userDetails.getFirstName());
    user.setLastName(userDetails.getLastName());
    user.setKgValue(userDetails.getKgValue());
    user.setLengthValue(userDetails.getLengthValue());

    User updatedUser = userRepo.save(user);
            return ResponseEntity.ok(updatedUser);

    }

    // Deleting User
    @DeleteMapping("/users/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteUser(@PathVariable Long id){
        User user = userRepo.findById(id).orElseThrow(() -> new ResourceNotFoundException("User not Found with Id: " + id));

        userRepo.delete((user));
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }

}