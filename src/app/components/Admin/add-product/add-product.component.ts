import { Component, OnInit } from '@angular/core';
import { ProductsAPIService } from '../../../services/products-api.service';
import { IProduct } from '../../../models/iproduct';
import { Router, ActivatedRoute } from '@angular/router';
import { ICategory } from '../../../models/icategory';
import { CategoryAPIService } from 'src/app/services/category-api.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  dynamicProduct: IProduct = {} as IProduct;
  productReturn: IProduct = {} as IProduct;
  productid: number = 0;
  categoryList: ICategory[] = [];
  productsOfSpecificCat: IProduct[] = [];
  constructor(private prdService: ProductsAPIService,
    private router: Router,
    private categoryAPI: CategoryAPIService,
    private activateRoute: ActivatedRoute) {
  }
  ngOnInit(): void {
    this.productid = Number(this.activateRoute.snapshot.paramMap.get('id'));

    this.categoryAPI.getAllCategories().subscribe((categories) => {
      this.categoryList = categories;
    })

    this.prdService.getAllProducts().subscribe((allProducts) => {
      this.productsOfSpecificCat = allProducts;
      let returnData = this.productsOfSpecificCat.find(p => p.id == this.productid);
      if (returnData !== undefined) {
        this.productReturn = returnData
      }
    })

  }

  // Add product Static
  addStaticProduct() {
    const prd: IProduct = {
      id: 7,
      name: 'Apple Watch SE ',
      quantity: 2,
      price: 8000,
      img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcS0PVWrTr2uQ-3zekFWBEETjvJRfzZ3agES5sQGcHkxu_GmQRLonAieynqDmQ4tl_v5xm7KFGflUA&usqp=CAc",
      categoryID: 1
    }

    const observer = {
      next: (prd: IProduct) => {
        console.log(prd);
        this.router.navigate(['/products'])
      },
      error: (err: string) => {
        console.log(err);
      }
    }
    this.prdService.addNewProduct(prd).subscribe(observer);
  }

  // Dynamic Product
  addNewProduct() {
    this.prdService.addNewProduct(this.dynamicProduct).subscribe({
      next: (newPrd) => {
        console.log(newPrd);
        this.router.navigate(['/products']);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  editProduct(data: IProduct) {
    let idData = Number(this.activateRoute.snapshot.paramMap.get('id'))
    if (this.productReturn.id === idData) {
      console.log("before:", this.productReturn);
      this.productReturn.name = (data.name === undefined) ? this.productReturn.name : data.name;
      this.productReturn.quantity = Number(data.quantity === undefined) ? this.productReturn.quantity : Number(data.quantity);
      this.productReturn.price = Number(data.price === undefined) ? this.productReturn.price : Number(data.price);
      console.log("after:", this.productReturn);
    }

    this.prdService.editProduct(this.productReturn).subscribe({
      next: () => {
        console.log(this.productReturn);
        this.router.navigate(['/order']);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
}
