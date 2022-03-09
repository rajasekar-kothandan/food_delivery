package com.onlinefooddelivery.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.onlinefooddelivery.dao.ALoginRepository;
import com.onlinefooddelivery.model.ALogin;



@Service
public class ALoginService {

	@Autowired
	ALoginRepository ALoginRepository;

	public ALogin validateALogin(ALogin alogin) {
		ALogin a=ALoginRepository.validateALogin(alogin.getEmail_id(),alogin.getPassword());
		
		return a;
	}
	
}