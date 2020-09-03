package com.ccowens.dungeonsanddragons.model;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;


import javax.persistence.*;
import java.util.Set;

@Data
@NoArgsConstructor
@RequiredArgsConstructor
@Entity
@Table(name="user_wizard")

public class Wizard {
    @Id
    @GeneratedValue
    private Long id;
    @NonNull
    private String name;
    private String classAndLevel;
    private String race;
    private String background;
    private String alignment;
    private String playerName;
    private String experiencePoints;
    private String age;
    private String eyes;
    private String height;
    private String skin;
    private String weight;
    private String hair;
    private String personalityTraits;
    private String ideals;
    private String bonds;
    private String flaws;
    private String featuresAndTraits;
    private String additionalFeaturesAndTraits;
    private String treasure;
    private String characterAppearances;
    private String characterBackstory;
    private String alliesAndOrganizations;
    private String cantrips;
    @ManyToOne(cascade=CascadeType.PERSIST)
    private User user;

    @OneToMany(fetch = FetchType.EAGER, cascade=CascadeType.ALL)
    private Set<Event> events;



}
