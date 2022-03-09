package com.onlinefooddelivery.dao;

import java.util.Collection;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.onlinefooddelivery.model.Register;

@Repository
public interface RegisterRepository extends JpaRepository<Register ,Integer>  {

//	@Query("SELECT e FROM Employee e WHERE e.status =?1") JPQL
//	Collection<Employee> findAllActiveEmployees();
	
}
