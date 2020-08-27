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
@Table(name="user_group")

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
    @ManyToOne(cascade=CascadeType.PERSIST)
    private User user;

    @OneToMany(fetch = FetchType.EAGER, cascade=CascadeType.ALL)
    private Set<Event> events;
}
