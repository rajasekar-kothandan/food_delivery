import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Observable<Product[]>=new Observable;
  p_name!: string | null;
  loginStatus!: string |null;

  constructor(private productService: ProductService,private router: Router) {}
  
  ngOnInit(): void {
    this.getProducts();
  }

  getProducts()
  {
    this.loginStatus=this.productService.getLoginStatus();

   this.p_name=sessionStorage.getItem("p_name");
    this.products=this.productService.getProducts();
  
  }
  
  deleteProduct(id: number) {
    this.productService.deleteProduct(id)
      .subscribe(
        data => {
          console.log(data);
          this.getProducts();
        },
        error => console.log(error));
  }

  productDetails(id: number){
    this.router.navigate(['pdetails', id]);
  }
  updateProduct(id: number)
  {
    this.router.navigate(['pupdate', id]);
  }
}
