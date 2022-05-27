package com.example.Restaurant.controller;


import com.example.Restaurant.model.User;
import com.example.Restaurant.repository.UserRepository;
import org.springframework.http.HttpStatus;
import org.springframework.util.ObjectUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.Optional;

@RequestMapping("/users")
@RestController
public class UserController {
    private final UserRepository userRepository;

    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @GetMapping("/{name}")
    public User getUser(@PathVariable String name) {
        validateName(name);

        Optional<User> optionalExistingUser = userRepository.findUserByName(name);
        if (!optionalExistingUser.isPresent()) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }

        User existingUser = optionalExistingUser.get();
        existingUser.setId(null);

        return existingUser;
    }

    private void validateUser(User user) {
        validateName(user.getName());

        Optional<User> existingUser = userRepository.findUserByName(user.getName());
        if (existingUser.isPresent()) {
            throw new ResponseStatusException(HttpStatus.CONFLICT);
        }
    }

    private void validateName(String name) {
        if (ObjectUtils.isEmpty(name)) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST);
        }
    }

    @PutMapping("/{displayName}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void updateUserInfo(@PathVariable String name, @RequestBody User updatedUser) {
        validateName(name);

        Optional<User> optionalExistingUser = userRepository.findUserByName(name);
        if (optionalExistingUser.isEmpty()) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }

        User existingUser = optionalExistingUser.get();

        copyUserInfoFrom(updatedUser, existingUser);
        userRepository.save(existingUser);
    }

    private void copyUserInfoFrom(User updatedUser, User existingUser) {
        if (ObjectUtils.isEmpty(updatedUser.getName())) {
            throw new ResponseStatusException(HttpStatus.UNPROCESSABLE_ENTITY);
        }

        if (!ObjectUtils.isEmpty(updatedUser.getAddress())) {
            existingUser.setAddress(updatedUser.getAddress());
        }

        if (!ObjectUtils.isEmpty(updatedUser.getIsPeanutAllergy())) {
            existingUser.setIsPeanutAllergy(updatedUser.getIsPeanutAllergy());
        }

        if (!ObjectUtils.isEmpty(updatedUser.getIsDairyAllergy())) {
            existingUser.setIsDairyAllergy(updatedUser.getIsDairyAllergy());
        }

        if (!ObjectUtils.isEmpty(updatedUser.getIsEggAllergy())) {
            existingUser.setIsEggAllergy(updatedUser.getIsEggAllergy());
        }
    }
}
