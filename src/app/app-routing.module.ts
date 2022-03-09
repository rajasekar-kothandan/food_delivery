import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateRegisterComponent } from './create-register/create-register.component';
import { RegisterDetailsComponent } from './register-details/register-details.component';
import { RegisterListComponent } from './register-list/register-list.component';
import { LoginComponent } from './ulogin/ulogin.component';
import { UpdateRegisterComponent } from './update-register/update-register.component';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { ContactComponent } from './contact/contact.component';
import { GallaryComponent } from './gallary/gallary.component';
import { MenuComponent } from './menu/menu.component';
import { CreateOrderComponent } from './create-order/create-order.component';
import { AloginComponent } from './alogin/alogin.component';
import { AproductListComponent } from './aproduct-list/aproduct-list.component';
import { HproductListComponent } from './hproduct-list/hproduct-list.component';
import { AdminComponent } from './admin/admin.component';


const routes: Routes = [
  {path:"contact",component: ContactComponent},
  {path:"gallary",component: GallaryComponent},
  {path:"menu",component:MenuComponent},
  {path:"",component: HomeComponent},
  { path: 'registers', component: RegisterListComponent },
  { path: 'add', component: CreateRegisterComponent },
  { path: 'update/:user_id', component: UpdateRegisterComponent },
  { path: 'details/:user_id', component: RegisterDetailsComponent },
  { path: 'products', component: ProductListComponent },
  { path: 'padd', component: CreateProductComponent },
  { path: 'pupdate/:product_id', component: UpdateProductComponent },
  { path: 'pdetails/:product_id', component: ProductDetailsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'orders', component: OrderListComponent },
  { path: 'mdetails/:order_id', component: OrderDetailsComponent },
  { path: 'oadd', component: CreateOrderComponent },
  { path: 'alogin', component: AloginComponent },
  { path: 'aproducts', component: AproductListComponent },
  { path: 'hproducts', component: HproductListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
