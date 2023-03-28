import { Directive, ElementRef, HostListener, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[ProductCard]'
})
export class ProductCardDirective implements OnChanges{
  @Input() BGColor:string="black";
  constructor(private element: ElementRef) {
    // element.nativeElement.style.border= '5px solid black'
    // element.nativeElement.style.boxShadow= '5px 2px 5px 2px black'
  }
  ngOnChanges(): void {
    this.element.nativeElement.style.border= `5px solid ${this.BGColor}`
  }
  @HostListener('mouseover') onMouseOver(){
    this.element.nativeElement.style.border= '5px solid black'
    this.element.nativeElement.style.boxShadow= '10px 5px 12px 5px black'
  }
  @HostListener('mouseout') onMouseOut(){
    this.element.nativeElement.style.border= '5px solid black'
    this.element.nativeElement.style.boxShadow= '5px 2px 5px 2px black'
  }
}
