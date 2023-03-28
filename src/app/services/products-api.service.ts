import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../models/iproduct';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ProductsAPIService {
  private httpOptions={};
  constructor(private httpClient: HttpClient) {

    this.httpOptions= {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }

  }

  //Get All Products
  getAllProducts(): Observable<IProduct[]>{
    return this.httpClient.get<IProduct[]>(`${environment.APIURL}/products`);
  }

  //Get Products of Specific Category
  getProductsByCatID(catID:number):Observable<IProduct[]>{
    return this.httpClient.get<IProduct[]>(`${environment.APIURL}/products?categoryID=${catID}`);
  }

  //Get Product By ID
  getProductByID(prdID:number):Observable<IProduct>{
    return this.httpClient.get<IProduct>(`${environment.APIURL}/products/${prdID}`)
  }

  //add new product
  addNewProduct(newPrd:IProduct):Observable<IProduct>{
    return this.httpClient.post<IProduct>(`${environment.APIURL}/products`,JSON.stringify(newPrd), this.httpOptions); 
  }

  //Delete product
  deleteProduct(prd:IProduct):Observable<IProduct>{
    // console.log(prd);
    // console.log(prd.id); 
    return this.httpClient.delete<IProduct>(`${environment.APIURL}/products/${prd.id}`); 
  }

  editProduct(product: IProduct):Observable<IProduct>{
    console.log(product);
    return this.httpClient.patch<IProduct>(`${environment.APIURL}/products/${product.id}`,product);
  }
}
