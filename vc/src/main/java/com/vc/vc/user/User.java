package com.vc.vc.user;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
@Document("VC_User")
public class User{
    
    @Id
    private String id;

    private String Username;
    private String Email;
    private String Password;

 
}