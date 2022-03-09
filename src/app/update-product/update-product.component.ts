import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {


  product_id: number=0;
  product: Product=new Product();

  constructor(private route: ActivatedRoute,private router: Router,
    private productService: ProductService) { }

  ngOnInit() {
    this.product = new Product();

    this.product_id = this.route.snapshot.params['product_id'];
    
    this.productService.getProduct(this.product_id)
      .subscribe(data => {
        console.log(data)
        this.product = data;
      }, error => console.log(error));
  }

  updateProduct() {
    this.productService.updateProduct(this.product_id, this.product)
      .subscribe(data => {
        console.log(data);
        this.product = new Product();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit() {
    this.updateProduct();    
  }

  gotoList() {
    this.router.navigate(['/aproducts']);
  }
}
