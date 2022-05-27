package com.example.Restaurant.model;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;


import javax.persistence.*;

@Entity
@Table(name="RESTAURANT")
@Getter
@Setter
@RequiredArgsConstructor
public class Restaurant {

    @Id
    @GeneratedValue
    private Long id;

    @Column(name="Name")
    private String name;

    @Column(name="Address")
    private String address;

    @Column(name="Cuisine")
    private String cuisine;

    @Column(name="Overall_Score")
    private String overallScore;

    @Column(name="Egg_Score")
    private String eggScore;

    @Column(name="Peanut_Score")
    private String peanutScore;

    @Column(name="Dairy_Score")
    private String dairyScore;

}
