import { Component, OnInit } from '@angular/core';
import { ICategory } from 'src/app/models/icategory';
import { CategoryAPIService } from 'src/app/services/category-api.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  categoryList: ICategory[]=[];
  selectedCatId:number=0;
  recievedData:any;
  orderDate:Date;
  constructor(private categoryAPI: CategoryAPIService){
    // this.categoryList= [
    //   {ID:1, name:'Mobile'},
    //   {ID:2, name:'Laptop'},
    //   {ID:3, name:'Airpods'}
    // ]
    this.orderDate= new Date();
  }
  ngOnInit(): void {
    this.categoryAPI.getAllCategories().subscribe((categories)=>{
      this.categoryList = categories;
    })
  }
  onAddToCart(cartData:any){
    this.recievedData = cartData;
  }
}
