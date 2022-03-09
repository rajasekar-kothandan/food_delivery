package com.onlinefooddelivery.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.onlinefooddelivery.model.ALogin;

// java persistant query lang
public interface ALoginRepository extends JpaRepository<ALogin, String>{
	@Query("SELECT a FROM ALogin a WHERE a.email_id =?1 and a.password=?2")
			public ALogin validateALogin(String email_id,String password);

	
}