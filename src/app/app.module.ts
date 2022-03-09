import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { AloginComponent } from './alogin/alogin.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AproductListComponent } from './aproduct-list/aproduct-list.component';
import { ContactComponent } from './contact/contact.component';
import { CreateOrderComponent } from './create-order/create-order.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { CreateRegisterComponent } from './create-register/create-register.component';
import { FooterComponent } from './footer/footer.component';
import { GallaryComponent } from './gallary/gallary.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { HproductListComponent } from './hproduct-list/hproduct-list.component';
import { MenuComponent } from './menu/menu.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { OrderListComponent } from './order-list/order-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { RegisterDetailsComponent } from './register-details/register-details.component';
import { RegisterListComponent } from './register-list/register-list.component';
import { LoginComponent } from './ulogin/ulogin.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { UpdateRegisterComponent } from './update-register/update-register.component';
import { RegisterService } from './employee.service';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AloginComponent,
    AproductListComponent,
    ContactComponent,
    CreateOrderComponent,
    CreateProductComponent,
    CreateRegisterComponent,
    FooterComponent,
    GallaryComponent,
    HeaderComponent,
    HomeComponent,
    HproductListComponent,
    MenuComponent,
    OrderDetailsComponent,
    OrderListComponent,
    ProductDetailsComponent,
    ProductListComponent,
    RegisterDetailsComponent,
    RegisterListComponent,
    LoginComponent,
    UpdateProductComponent,
    UpdateRegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    CommonModule
  ],
  providers: [RegisterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
