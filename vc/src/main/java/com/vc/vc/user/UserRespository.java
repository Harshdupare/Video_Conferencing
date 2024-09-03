package com.vc.vc.user;


import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRespository extends MongoRepository<User, String>{


}
