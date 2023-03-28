import { Component } from '@angular/core';

@Component({
  selector: 'app-nid',
  templateUrl: './nid.component.html',
  styleUrls: ['./nid.component.scss']
})
export class NIDComponent {
  NID:any;
  constructor() {

  }
  getBirthDate(nid:any) {
    this.NID= nid;
  }
}
