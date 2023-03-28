import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { IProduct } from 'src/app/models/iproduct';
import { DiscountOffers } from 'src/app/models/discount-offers';
import { Store } from 'src/app/models/store';
import { ICategory } from 'src/app/models/icategory';
import { ProductService } from 'src/app/services/product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductsAPIService } from 'src/app/services/products-api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})

export class ProductsComponent implements OnChanges, OnInit {
  productsOfSpecificCat: IProduct[] = [];
  orderTotalPrice: number = 0;
  orderListDetails: any[] = [];
  addNewProduct: any[] = [];
  number: any;
  name: any;
  price: any;
  quantity: any;
  productAdded: any = [];

  @Input() categoryIdRecievedFromParent: number = 0;
  @Output() AddToCartEvent: EventEmitter<any>;

  constructor(private prdService: ProductService,
    private router: Router,
    private prdAPI: ProductsAPIService,
    private activateRoute: ActivatedRoute) {
    this.AddToCartEvent = new EventEmitter<any>();
  }

  ngOnInit(): void {

    this.prdAPI.getAllProducts().subscribe((allProducts) => {
      this.productsOfSpecificCat = allProducts;
    })
  }

  //Day6
  ngOnChanges(): void {
    //this.productsOfSpecificCat= this.prdService.getProductsByCategoryID(this.categoryIdRecievedFromParent);

    //Day 6
    if (this.categoryIdRecievedFromParent == 0) {
      this.prdAPI.getAllProducts().subscribe((allProducts) => {
        this.productsOfSpecificCat = allProducts;
      })
    } else {
      this.prdAPI.getProductsByCatID(this.categoryIdRecievedFromParent).subscribe((prdOfCategory) => {
        this.productsOfSpecificCat = prdOfCategory;
      })
    }
  }

  //Button AddToCart => call this function
  addToCart(index: number, count: any) {
    this.orderListDetails.push({
      number: index,
      name: this.prdService.productList[index].name,
      img: this.prdService.productList[index].img,
      price: this.prdService.productList[index].price,
      count: count,
      TotalPrice: this.prdService.productList[index].price * count
    })
    //Execute event
    this.AddToCartEvent.emit(this.orderListDetails);
  }

  //Product details
  showDetails(prdID: number) {
    this.router.navigate(['products', prdID])
  }
  //Add new product
  getDataOfNewProduct(number: any, name: string, price: any, quantity: any) {
    this.number = number;
    this.name = name;
    this.price = price;
    this.quantity = quantity
    this.productAdded = this.prdService.addNewProduct(this.number, this.name, this.price, this.quantity)
  }

  //Day7
  editProduct(index: number, prdID: number) {
    this.router.navigate(['/edit', prdID])
  }

  deleteProduct(id: number) {
    const productToBeDeleted = this.productsOfSpecificCat.find(prd => prd.id == id);
    // console.log(this.productsOfSpecificCat);
    // console.log(productToBeDeleted);
    if (productToBeDeleted !== undefined) {
      this.prdAPI.deleteProduct(productToBeDeleted).subscribe();
    }
    window.location.reload();
  }
}
