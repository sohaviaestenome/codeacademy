package com.example.Restaurant.model;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@RequiredArgsConstructor
@Table(name="REVIEW")
public class Review {
    @Id
    @GeneratedValue
    private Long id;

    @Column(name="Reviewer")
    @Getter
    @Setter
    private String reviewer;

    @Column(name="Restaurant_Id")
    @Getter
    private Long restaurantId;

    @Column(name="Peanut_Score")
    @Getter
    @Setter
    private Integer peanutScore;

    @Column(name="Egg_Score")
    @Getter
    @Setter
    private Integer eggScore;

    @Column(name="Dairy_Score")
    @Getter
    @Setter
    private Integer dairyScore;

    @Column(name="Commentary")
    @Getter
    @Setter
    private String commentary;

    @Column(name="Status")
    @Getter
    @Setter
    private AdminReviewStatus status;
}
