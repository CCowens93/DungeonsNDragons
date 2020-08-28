package com.ccowens.dungeonsanddragons.controller;

import com.ccowens.dungeonsanddragons.model.Wizard;
import com.ccowens.dungeonsanddragons.model.WizardRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.Collection;
import java.util.Optional;

@RestController
@RequestMapping("/api")
public class WizardController {

    private final Logger log = LoggerFactory.getLogger(WizardController.class);
    private WizardRepository wizardRepository;

    public WizardController(WizardRepository wizardRepository) {
        this.wizardRepository = wizardRepository;
    }

    @GetMapping("/wizard")
    Collection<Wizard> wizard() {
        return wizardRepository.findAll();
    }

    @GetMapping("/wizard/{id}")
    ResponseEntity<?> getWizard(@PathVariable Long id) {
        Optional<Wizard> wizard = wizardRepository.findById(id);
        return wizard.map(response -> ResponseEntity.ok().body(response))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PostMapping("/wizard")
    ResponseEntity<Wizard> createWizard(@Valid @RequestBody Wizard wizard) throws URISyntaxException {
        log.info("Request to create wizard: {}", wizard);
        Wizard result = wizardRepository.save(wizard);
        return ResponseEntity.created(new URI("/api/wizard/" + result.getId()))
                .body(result);
    }

    @PutMapping("/wizard/{id}")
    ResponseEntity<Wizard> updateWizard(@Valid @RequestBody Wizard wizard) {
        log.info("Request to update wizard: {}", wizard);
        Wizard result = wizardRepository.save(wizard);
        return ResponseEntity.ok().body(result);
    }

    @DeleteMapping("/wizard/{id}")
    public ResponseEntity<?> deleteWizard(@PathVariable Long id) {
        log.info("Request to delete wizard: {}", id);
        wizardRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }

}
