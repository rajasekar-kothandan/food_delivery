package com.onlinefooddelivery.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.onlinefooddelivery.exception.ResourceNotFoundException;
import com.onlinefooddelivery.model.Register;
import com.onlinefooddelivery.service.RegisterService;
// sql to springboot-->mysql eclipse
//
@CrossOrigin(origins="http://localhost:4200")
@RequestMapping("/api/v1")
@RestController
public class RegisterController {

	@Autowired
	RegisterService regService;

//http://localhost:8080/api/v1/getAllRegisters
	@GetMapping("/registers")
	public List<Register> getRegister() {
		List<Register> regList = regService.fetchRegister();

		return regList;

	}

	// http://localhost:8080/api/v1/getRegister/1
	@GetMapping("/register/{id}")
	public ResponseEntity<Register> getRegisterById(@PathVariable("id") int registerId)
			throws ResourceNotFoundException {
		Register register = regService.getRegister(registerId);
		return ResponseEntity.ok().body(register);
	}

	// http://localhost:8080/api/v1/saveregister
	@PostMapping("/saveregister")
	public Register addRegister(@RequestBody Register reg) {

		Register register = regService.saveRegister(reg);

		// return new ResponseEntity<>("Employee added successsfully", HttpStatus.OK);
		return register;
	}

	
	// http://localhost:8080/api/v1/updateRegister/2
		@PutMapping("/updateregister/{id}")
		public ResponseEntity<Register> updateRegister(@PathVariable("id") int registerId,
				@RequestBody Register registerDetails) throws ResourceNotFoundException {
			Register register = regService.getRegister(registerId);

			register.setEmail_id(registerDetails.getEmail_id());
			register.setPassword(registerDetails.getPassword());
			register.setAddress(registerDetails.getAddress());
			final Register updatedRegister = regService.saveRegister(register);
			return ResponseEntity.ok(updatedRegister);
		}

	//http://localhost:8080/api/v1/deleteRegister/1
		@DeleteMapping(value = "/deleteregister/{id}")
		public ResponseEntity<String> deleteRegister(@PathVariable("id") int regId) {

			regService.deleteRegister(regId);
			return (ResponseEntity<String>) new ResponseEntity<>("Register deleted successsfully", HttpStatus.OK);
		}
		/*
		 * @DeleteMapping("/deleteEmployee/{id}") public Map<String, Boolean>
		 * deleteEmployee(@PathVariable("id") int employeeId) throws
		 * ResourceNotFoundException { // Employee employee =
		 * empService.getEmployee(employeeId);
		 * System.out.println("delete method called");
		 * empService.deleteEmployee(employeeId); Map<String, Boolean> response = new
		 * HashMap<>(); response.put("deleted", Boolean.TRUE); return response; }
		 */
	}
