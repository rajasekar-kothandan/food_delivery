package com.onlinefooddelivery.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.onlinefooddelivery.dao.UserRepository;
import com.onlinefooddelivery.model.Register;


@Service
public class UserService {

	@Autowired
	UserRepository userRepository;

	public Register validateUser(Register register) {
		Register u=userRepository.validateUser(register.getUser_id(),register.getPassword());
		
		return u;
	}
	
}