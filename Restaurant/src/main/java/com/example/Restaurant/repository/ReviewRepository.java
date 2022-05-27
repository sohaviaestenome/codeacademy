package com.example.Restaurant.repository;

import com.example.Restaurant.model.AdminReviewStatus;
import com.example.Restaurant.model.Review;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface ReviewRepository extends CrudRepository<Review,Long> {
    List<Review> findReviewsByRestaurantIdAndStatus(Long restaurantId, AdminReviewStatus status);
    List<Review> findReviewByStatus(AdminReviewStatus status);
}
