package com.example.Restaurant.model;



import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name="USER")
@RequiredArgsConstructor
public class User {

    @Id
    @GeneratedValue
    @Getter
    @Setter
    private Long id;

    @Column(name="Name")
    @Getter
    @Setter
    private String name;

    @Column(name="Address")
    @Getter
    @Setter
    private Integer address;

    @Column(name="Peanut_Allergy")
    @Getter
    @Setter
    private Boolean isPeanutAllergy;

    @Column(name="Egg_Allergy")
    @Getter
    @Setter
    private Boolean isEggAllergy;

    @Column(name="Dairy_Allergy")
    @Getter
    @Setter
    private Boolean isDairyAllergy;
}
