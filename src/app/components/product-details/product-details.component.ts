import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/models/iproduct';
import { ProductService } from 'src/app/services/product.service';
import { ProductsAPIService } from '../../services/products-api.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  prd: IProduct | undefined
  productsIDs: number[] = [];
  currentProductID: number = 0;
  currentIndex: number = 0;
  constructor(private activatedRoute: ActivatedRoute,
    private prdService: ProductService,
    private router: Router,
    private location: Location,
    private prdAPI: ProductsAPIService) {

  }
  ngOnInit(): void {
    //#region Day4
    // let prdID= this.activatedRoute.snapshot.paramMap.get('pid');
    // console.log(prdID);
    // let prdID:number= (this.activatedRoute.snapshot.paramMap.get('pid'))? Number(this.activatedRoute.snapshot.paramMap.get('pid')):0 ;
    //let dataOfSpecificProduct= this.prdService.getProductByID(prdID);
    //#endregion

    //   //Day5 
    //  this.currentProductID= (this.activatedRoute.snapshot.paramMap.get('pid'))? Number(this.activatedRoute.snapshot.paramMap.get('pid')):0 ;
    //  let dataOfSpecificProduct= this.prdService.getProductByID(this.currentProductID);
    //   //console.log(dataOfSpecificProduct);

    //   if(dataOfSpecificProduct){
    //     this.prd = dataOfSpecificProduct;
    //   }else{
    //     alert('Product not found')
    //     this.location.back()
    //     //this.router.navigate(['**'])
    //   }

    this.activatedRoute.paramMap.subscribe(paraMap => {
      this.currentProductID = (this.activatedRoute.snapshot.paramMap.get('pid')) ? Number(this.activatedRoute.snapshot.paramMap.get('pid')) : 0;

      
      //  this.prdAPI.getProductByID(this.currentProductID).subscribe((prdByID)=>{
        //     this.prd = prdByID;
        //   })
        
        let dataOfSpecificProduct = this.prdService.getProductByID(this.currentProductID);
      //console.log(dataOfSpecificProduct);

      if (dataOfSpecificProduct) {
        this.prd = dataOfSpecificProduct;
      } else {
        alert('Product not found')
        this.location.back()
      }
    })

    //Day5 
    this.productsIDs = this.prdService.getIDsofAllProductList();
    //console.log(this.productsIDs); Return all IDs [1,2,3,4,5,6]
  }
  previous() {
    this.currentIndex = this.productsIDs.findIndex(item => item == this.currentProductID);
    //console.log(this.currentIndex); return Index that match ID 
    //console.log(this.productsIDs[this.currentIndex]); return value 
    this.router.navigate(['/products', this.productsIDs[--this.currentIndex]])
  }
  next() {
    this.currentIndex = this.productsIDs.findIndex(item => item == this.currentProductID);
    this.router.navigate(['/products', this.productsIDs[++this.currentIndex]])
  }
}
