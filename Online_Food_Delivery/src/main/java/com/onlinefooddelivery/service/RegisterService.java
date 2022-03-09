package com.onlinefooddelivery.service;
//http-controller-service-repository-mysql

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.onlinefooddelivery.dao.RegisterRepository;
import com.onlinefooddelivery.model.Register;

@Service
public class RegisterService {

	@Autowired
	RegisterRepository regRepository;
	
	@Transactional
	public List<Register> fetchRegister() {
		List<Register> regList=regRepository.findAll();
		return regList;
		
	}
	@Transactional
	public Register saveRegister(Register register) {		
		return regRepository.save(register);		
	}
	@Transactional
	public void updateRegister(Register reg) {
		regRepository.save(reg);		
	}
	
	@Transactional
	public void deleteRegister(int regId) {
		//empRepository.delete(emp);	
		System.out.println("service method called");
		regRepository.deleteById(regId);	
	}
	@Transactional 
	  public Register getRegister(int id) { 
	  Optional<Register> optional=regRepository.findById(id);
	  Register reg=optional.get();
	  return reg;
	  }
}

