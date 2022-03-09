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
import com.onlinefooddelivery.model.Product;
import com.onlinefooddelivery.service.ProductService;
// sql to springboot-->mysql eclipse
//
@CrossOrigin(origins="http://localhost:4200")
@RequestMapping("/api/v1")
@RestController
public class ProductController {

	@Autowired
	ProductService proService;

//http://localhost:8080/api/v1/products
	@GetMapping("/products")
	public List<Product> getProduct() {
		List<Product> proList = proService.fetchProduct();

		return proList;

	}

	// http://localhost:8080/api/v1/product/1
	@GetMapping("/product/{id}")
	public ResponseEntity<Product> getProductById(@PathVariable("id") int productId)
			throws ResourceNotFoundException {
		Product product = proService.getProduct(productId);
		return ResponseEntity.ok().body(product);
	}

	// http://localhost:8080/api/v1/saveproduct
	@PostMapping("/saveproduct")
	public Product addProduct(@RequestBody Product pro) {

		Product product = proService.saveProduct(pro);

		// return new ResponseEntity<>("Employee added successsfully", HttpStatus.OK);
		return product;
	}

	
	// http://localhost:8080/api/v1/updateProduct/2
		@PutMapping("/updateproduct/{id}")
		public ResponseEntity<Product> updateProduct(@PathVariable("id") int productId,
				@RequestBody Product productDetails) throws ResourceNotFoundException {
			Product product = proService.getProduct(productId);

			product.setP_name(productDetails.getP_name());
			product.setPrice(productDetails.getPrice());
			product.setAvailable(productDetails.getAvailable());
			final Product updatedProduct = proService.saveProduct(product);
			return ResponseEntity.ok(updatedProduct);
		}

	//http://localhost:8080/api/v1/deleteProduct/1
		@DeleteMapping(value = "/deleteproduct/{id}")
		public ResponseEntity<String> deleteProduct(@PathVariable("id") int proId) {

			proService.deleteProduct(proId);
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
