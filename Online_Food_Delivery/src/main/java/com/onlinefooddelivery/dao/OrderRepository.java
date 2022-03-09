package com.onlinefooddelivery.dao;

import java.util.Collection;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.onlinefooddelivery.model.Order;


@Repository
public interface OrderRepository extends JpaRepository< Order,Integer>  {

//	@Query("SELECT e FROM Employee e WHERE e.status =?1") JPQL
//	Collection<Employee> findAllActiveEmployees();
	
}
