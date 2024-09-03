package com.vc.vc.user;


import java.util.ArrayList;
import java.util.List;
import java.util.stream.IntStream;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import jakarta.annotation.PostConstruct;

@Service
public class UserService {
    private List<User> USER_LIST = new ArrayList<User>() ;
    
    @Autowired
    private UserRespository userRepo ;

    @PostConstruct
    public void init() {
        USER_LIST = userRepo.findAll();
    }

    public Boolean register(User user){
        userRepo.save(user);
        USER_LIST.add(user);
        return true;
    }

    public User login(User user){

        var userIndex = IntStream.range(0, USER_LIST.size())
                .filter(i -> USER_LIST.get(i).getEmail().equals(user.getEmail()))
                .findAny()
                .orElseThrow(() -> new RuntimeException("User not found"));
        var cUser = USER_LIST.get(userIndex);
        if (!cUser.getPassword().equals(user.getPassword())){
            throw new RuntimeException("Password incorrect");
        }
        
       return cUser;
    } 


    public List<User> findAll(){
        return USER_LIST;
    }

}
