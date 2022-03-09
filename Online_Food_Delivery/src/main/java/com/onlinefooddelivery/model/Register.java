package com.onlinefooddelivery.model;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name="Reg")
public class Register {
	
	//@GeneratedValue
	@Id
	@Column(name="user_id")
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int user_id;
	@Column(name="f_name")
	private String f_name;
	@Column(name="l_name")
	private String l_name;
	@Column(name="address")
	private String address;
	@Column(name="email_id")
	private String email_id;
	@Column(name="phone_no")
	private Double phone_no;
	@Column(name="password")
	private String password;

	
	
	public Register(int user_id,String f_name, String l_name,String address,String email_id,Double phone_no,String password) {
        super();
        this.f_name = f_name;
        this.l_name = l_name;
        this.address = address;
        this.email_id = email_id;
        this.phone_no = phone_no;
        this.password = password;
        
    }
	
	public int getUser_id() {
		return user_id;
	}
	public void setUser_id(int user_id) {
		this.user_id = user_id;
	}
	public String getF_name() {
		return f_name;
	}
	public void setF_name(String f_name) {
		this.f_name = f_name;
	}
	public String getL_name() {
		return l_name;
	}
	public void setL_name(String l_name) {
		this.l_name = l_name;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
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
	public Double getPhone_no() {
		return phone_no;
	}
	public void setPhone_no(Double phone_no) {
		this.phone_no = phone_no;
	}
	public Register() {
		// TODO Auto-generated constructor stub
	}
}