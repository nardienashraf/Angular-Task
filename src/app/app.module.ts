import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductsComponent } from './components/products/products.component';
import { FooterComponent } from './components/footer/footer.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrderComponent } from './components/order/order.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductCardDirective } from './directives/product-card.directive';
import { CreditCardComponent } from './components/credit-card/credit-card.component';
import { NIDComponent } from './components/nid/nid.component';
import { NationalIDPipe } from './pipes/national-id.pipe';
import { CreditCardPipe } from './pipes/credit-card.pipe';
import {HttpClientModule} from '@angular/common/http';
import { AddProductComponent } from './components/Admin/add-product/add-product.component';
import { UserRegisterComponent } from './components/user-register/user-register.component';
import { HomeComponent } from './components/home/home.component';
import { UserLoginComponent } from './components/user-login/user-login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsComponent,
    FooterComponent,
    SideMenuComponent,
    OrderComponent,
    MainLayoutComponent,
    NotFoundComponent,
    ContactusComponent,
    AboutUsComponent,
    ProductDetailsComponent,
    ProductCardDirective,
    CreditCardComponent,
    NIDComponent,
    NationalIDPipe,
    CreditCardPipe,
    AddProductComponent,
    UserRegisterComponent,
    HomeComponent,
    UserLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
