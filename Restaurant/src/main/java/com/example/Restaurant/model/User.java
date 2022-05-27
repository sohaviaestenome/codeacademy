package com.example.Restaurant.model;



import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name="USER")
@NoArgsConstructor
public class User {

    @Id
    @GeneratedValue
    private Long id;

    @Column(name="Name")
    @Getter
    @Setter
    private String name;

    @Column(name="Zip_Code")
    @Getter
    @Setter
    private Integer zip_code;

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
