package com.onlinefooddelivery.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="alogin")
public class ALogin {
	@Id
	@GeneratedValue
	@Column(name="email_id")
	private String email_id;
	@Column(name="password")
	private String password;
	
	public ALogin(String email_id,String password) {
        super();
        this.email_id = email_id;
        this.password = password;
        
    }
	
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	
	public String getEmail_id() {
		return email_id;
	}

	public void setEmail_id(String email_id) {
		this.email_id = email_id;
	}

	public ALogin() {
		// TODO Auto-generated constructor stub
	}
	
}