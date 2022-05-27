package com.example.Restaurant.repository;

import com.example.Restaurant.model.Restaurant;
import org.springframework.data.repository.CrudRepository;

import java.util.List;
import java.util.Optional;

public interface RestaurantRepository extends CrudRepository<Restaurant, Long> {
    Optional<Restaurant> findRestaurantsByNameAndAddress(String name, String address);
    List<Restaurant> findRestaurantsByAddressAndPeanutScoreNotNullOrderByPeanutScore(String address);
    List<Restaurant> findRestaurantsByAddressAndDairyScoreNotNullOrderByDairyScore(String address);
    List<Restaurant> findRestaurantsByAddressAndEggScoreNotNullOrderByEggScore(String address);
}
