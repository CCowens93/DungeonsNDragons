package com.ccowens.dungeonsanddragons.model;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface GroupRepository extends JpaRepository<Wizard, Long> {
    Wizard findByName(String name);
}
