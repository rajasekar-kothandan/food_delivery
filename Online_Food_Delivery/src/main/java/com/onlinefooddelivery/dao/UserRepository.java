package com.onlinefooddelivery.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.onlinefooddelivery.model.Register;


public interface UserRepository extends JpaRepository<Register, String>{
	@Query("SELECT u FROM Register u WHERE u.user_id =?1 and u.password=?2")
			public Register validateUser(int user_id,String password);	
}