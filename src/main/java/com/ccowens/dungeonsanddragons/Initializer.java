package com.ccowens.dungeonsanddragons;

import com.ccowens.dungeonsanddragons.model.Event;
import com.ccowens.dungeonsanddragons.model.Wizard;
import com.ccowens.dungeonsanddragons.model.WizardRepository;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.time.Instant;
import java.util.Collections;
import java.util.stream.Stream;

@Component
class Initializer implements CommandLineRunner {

    private final WizardRepository repository;

    public Initializer(WizardRepository repository) {
        this.repository = repository;
    }

    @Override
    public void run(String... strings) {
        Stream.of("Dorothy", "Blanche", "Rose",
                "Sophia").forEach(name ->
                repository.save(new Wizard(name))
        );

        Wizard wizard = repository.findByName("Dorothy");
        Event e = Event.builder().title("Full Stack Reactive")
                .description("Reactive with Spring Boot + React")
                .date(Instant.parse("2018-12-12T18:00:00.000Z"))
                .build();
        wizard.setEvents(Collections.singleton(e));
        repository.save(wizard);

        repository.findAll().forEach(System.out::println);
    }
}
