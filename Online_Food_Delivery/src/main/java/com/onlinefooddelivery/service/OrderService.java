package com.onlinefooddelivery.service;
import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.onlinefooddelivery.dao.OrderRepository;
import com.onlinefooddelivery.model.Order;

@Service
public class OrderService {

	@Autowired
	OrderRepository ordRepository;
	
	@Transactional
	public List<Order> fetchOrder() {
		List<Order> ordList=ordRepository.findAll();
		return ordList;
		
	}
	@Transactional
	public Order saveOrder(Order order) {		
		return ordRepository.save(order);		
	}
	@Transactional
	public void updateOrder(Order ord) {
		ordRepository.save(ord);		
	}
	
	@Transactional
	public void deleteOrder(int ordId) {
		//empRepository.delete(emp);	
		System.out.println("service method called");
		ordRepository.deleteById(ordId);	
	}
	@Transactional 
	  public Order getOrder(int id) { 
	  Optional<Order> optional=ordRepository.findById(id);
	  Order ord=optional.get();
	  return ord;
	  }
}
