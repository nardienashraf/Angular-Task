import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICategory } from '../models/icategory';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryAPIService {

  constructor(private httpClient: HttpClient) { 

  }

  //Get all Categories
  getAllCategories(): Observable<ICategory[]>{
    return this.httpClient.get<ICategory[]>(`${environment.APIURL}/categories`);
  }

}
