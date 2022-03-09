package com.onlinefooddelivery.model;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name="orderm")
public class Order {
	@Id
	//@GeneratedValue
	@Column(name="order_id")
 	@GeneratedValue(strategy = GenerationType.AUTO)
	private int order_id;
	@Column(name="track_no")
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int track_no;
	@Column(name="address")
	private String address;
	@Column(name="quantity")
	private String quantity;
	@Column(name="upi_id")
	private String upi_id;

	
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "user_id")
	private Register user;
	
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "product_id")
	private Product product;
	
	public Order(int order_id,int track_no, String address,String quantity,String upi_id,Product product,Register user) {
        super();
        this.track_no = track_no;
        this.address = address;
        this.quantity = quantity;
        this.product=product;
        this.upi_id= upi_id;
        this.user=user;
    }

	public int getOrder_id() {
		return order_id;
	}

	public void setOrder_id(int order_id) {
		this.order_id = order_id;
	}

	public int getTrack_no() {
		return track_no;
	}

	public void setTrack_no(int track_no) {
		this.track_no = track_no;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getQuantity() {
		return quantity;
	}

	public void setQuantity(String quantity) {
		this.quantity = quantity;
	}

	public String getUpi_id() {
		return upi_id;
	}

	public void setUpi_id(String upi_id) {
		this.upi_id = upi_id;
	}

	public Register getUser() {
		return user;
	}

	public void setUser(Register user) {
		this.user = user;
	}

	public Product getProduct() {
		return product;
	}

	public void setProduct(Product product) {
		this.product = product;
	}

	public Order() {
		// TODO Auto-generated constructor stub
	}
	
}