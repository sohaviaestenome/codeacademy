package com.example.Restaurant.repository;

import com.example.Restaurant.model.Restaurant;
import org.springframework.data.repository.CrudRepository;

import java.util.List;
import java.util.Optional;

public interface RestaurantRepository extends CrudRepository<Restaurant, Long> {
    Optional<Restaurant> findRestaurantsByNameAndAddress(String name, String address);
    List<Restaurant> findRestaurantsByAddressAndPeanut_ScoreNotNullOrderByPeanut_Score(String address);
    List<Restaurant> findRestaurantsByAddressAndDairy_ScoreNotNullOrderByDairy_Score(String address);
    List<Restaurant> findRestaurantsByAddressAndEgg_ScoreNotNullOrderByEgg_Score(String address);
}
