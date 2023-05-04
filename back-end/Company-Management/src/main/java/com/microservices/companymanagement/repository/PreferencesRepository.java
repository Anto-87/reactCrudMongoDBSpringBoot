package com.microservices.companymanagement.repository;
import java.util.List;
import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.microservices.companymanagement.model.Preferences;

public interface PreferencesRepository extends MongoRepository<Preferences,String>  {
    
    Preferences findByName(String name);
    String deleteByName(String name);
}
