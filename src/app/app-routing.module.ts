import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProductsComponent } from './components/products/products.component';
import { OrderComponent } from './components/order/order.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CreditCardComponent } from './components/credit-card/credit-card.component';
import { NIDComponent } from './components/nid/nid.component';
import { HomeComponent } from './components/home/home.component';
import { AddProductComponent } from './components/Admin/add-product/add-product.component';
import { UserRegisterComponent } from './components/user-register/user-register.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { UserAuthGuard } from './guards/user-auth.guard';

const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent, title: 'Home Page' },
      { path: 'products', component: ProductsComponent, title: 'Products Page' },
      { path: 'products/:pid', component: ProductDetailsComponent, title: 'Product Details Page' },
      { path: 'order', component: OrderComponent, title: 'Order Page', canActivate: [UserAuthGuard] },
      { path: 'contactus', component: ContactusComponent, title: 'Contact-us Page' },
      { path: 'aboutus', component: AboutUsComponent, title: 'About-us Page' },
      { path: 'creditcard', component: CreditCardComponent, title: 'Credit Card Page' },
      { path: 'nid', component: NIDComponent, title: 'NID Page' },
      {
        path: 'user',
        loadChildren: () => import('src/app/user/user.module').then(m => m.UserModule)
      }
    ]
  },
  { path: 'add', component: AddProductComponent, title: 'Admin Page' },
  { path: 'edit/:id', component: AddProductComponent, title: 'Edit Product' },
  { path: 'register', component: UserRegisterComponent, title: 'Registration Page' },
  { path: 'login', component: UserLoginComponent, title: 'Login Page' },
  { path: 'logout', component: UserLoginComponent, title: 'Logout Page' },
  { path: '**', component: NotFoundComponent, title: 'Not Found Page' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
