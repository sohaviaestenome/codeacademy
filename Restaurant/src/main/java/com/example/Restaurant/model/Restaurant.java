package com.example.Restaurant.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


import javax.persistence.*;

@Entity
@Table(name="RESTAURANT")
@NoArgsConstructor
public class Restaurant {

    @Id
    @GeneratedValue
    private Long id;

    @Column(name="Name")
    @Getter
    @Setter
    private String name;

    @Column(name="Address")
    @Getter
    @Setter
    private String address;

    @Column(name="Cuisine")
    @Getter
    @Setter
    private String cuisine;

}
