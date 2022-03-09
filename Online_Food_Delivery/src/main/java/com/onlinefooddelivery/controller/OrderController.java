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
import com.onlinefooddelivery.model.Order;
import com.onlinefooddelivery.service.OrderService;

@CrossOrigin(origins="http://localhost:4200")
@RequestMapping("/api/v1")
@RestController
public class OrderController {

	@Autowired
	OrderService ordService;

//http://localhost:8080/api/v1/orders
	@GetMapping("/orders")
	public List<Order> getOrder() {
		List<Order> ordList = ordService.fetchOrder();

		return ordList;

	}

	// http://localhost:8080/api/v1/order/1
	@GetMapping("/order/{Id}")
	public ResponseEntity<Order> getOrderById(@PathVariable("Id") int orderId)
			throws ResourceNotFoundException {
		Order order = ordService.getOrder(orderId);
		return ResponseEntity.ok().body(order);
	}

	// http://localhost:8080/api/v1/saveorder
	@PostMapping("/saveorder")
	public Order addOrder(@RequestBody Order ord) {

		Order order = ordService.saveOrder(ord);

		// return new ResponseEntity<>("Employee added successsfully", HttpStatus.OK);
		return order;
	}

	
	// http://localhost:8080/api/v1/updateorder/2
		@PutMapping("/updateorder/{id}")
		public ResponseEntity<Order> updateOrder(@PathVariable("id") int orderId,
				@RequestBody Order orderDetails) throws ResourceNotFoundException {
			Order order = ordService.getOrder(orderId);

			order.setAddress(orderDetails.getAddress());
			
			final Order updatedOrder = ordService.saveOrder(order);
			return ResponseEntity.ok(updatedOrder);
		}

	//http://localhost:8080/api/v1/deleteorder/1
		@DeleteMapping(value = "/deleteorder/{id}")
		public ResponseEntity<String> deleteOrder(@PathVariable("id") int ordId) {

			ordService.deleteOrder(ordId);
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
