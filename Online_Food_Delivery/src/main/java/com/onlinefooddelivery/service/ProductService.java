package com.onlinefooddelivery.service;
import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.onlinefooddelivery.dao.ProductRepository;
import com.onlinefooddelivery.model.Product;

@Service
public class ProductService {

	@Autowired
	ProductRepository proRepository;
	
	@Transactional
	public List<Product> fetchProduct() {
		List<Product> proList=proRepository.findAll();
		return proList;
		
	}
	@Transactional
	public Product saveProduct(Product product) {		
		return proRepository.save(product);		
	}
	@Transactional
	public void updateProduct(Product pro) {
		proRepository.save(pro);		
	}
	
	@Transactional
	public void deleteProduct(int proId) {
		//empRepository.delete(emp);	
		System.out.println("service method called");
		proRepository.deleteById(proId);	
	}
	@Transactional 
	  public Product getProduct(int id) { 
	  Optional<Product> optional=proRepository.findById(id);
	  Product pro=optional.get();
	  return pro;
	  }
}
