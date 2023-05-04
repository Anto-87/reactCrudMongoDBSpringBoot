package com.microservices.companymanagement.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Document(collection = "preferences")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Preferences {
    
    @Id
    private String id;
    private String name;
    private String description;
    private String valueType;
    private String value;

}
