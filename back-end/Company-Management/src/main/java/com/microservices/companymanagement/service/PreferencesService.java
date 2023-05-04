package com.microservices.companymanagement.service;

import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.microservices.companymanagement.model.Preferences;
import com.microservices.companymanagement.repository.PreferencesRepository;

@Service
public class PreferencesService {
    
    @Autowired
    private PreferencesRepository repository;

    public Preferences addPreferences(Preferences preferences){
        preferences.setId(UUID.randomUUID().toString());
        return repository.save(preferences);
    }

    public List<Preferences> findAllPreferences(){
        return repository.findAll();
    }

    public Preferences getPreferencesByName(String name){
        return repository.findByName(name);
    }


    

    public Preferences updatPreferences(Preferences preferences){
        Preferences exisitingPreferences = repository.findByName(preferences.getName());
        exisitingPreferences.setValue(preferences.getValue());
        exisitingPreferences.setDescription(preferences.getDescription());
        exisitingPreferences.setValueType(preferences.getValueType());
        return repository.save(exisitingPreferences);

    }

    public Preferences deletePreferences(String name){
        Preferences deletedPreferences = repository.findByName(name);
        repository.deleteByName(name);
        return deletedPreferences;
    }

}
