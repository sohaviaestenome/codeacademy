package com.example.Restaurant.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@NoArgsConstructor
@Table(name="REVIEW")
public class Review {
    @Id
    @GeneratedValue
    private Long id;

    @Column(name="Name")
    @Getter
    @Setter
    private String name;

    @Column(name="Restaurant_Id")
    @Getter
    private Long restaurant_id;

    @Column(name="Peanut_Score")
    @Getter
    @Setter
    private Integer peanut_score;

    @Column(name="Egg_Score")
    @Getter
    @Setter
    private Integer egg_score;

    @Column(name="Dairy_Score")
    @Getter
    @Setter
    private Integer dairy_score;

    @Column(name="Commentary")
    @Getter
    @Setter
    private String commentary;

    @Column(name="Status")
    @Getter
    @Setter
    private AdminReviewStatus status;
}
