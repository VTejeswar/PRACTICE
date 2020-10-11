import { Component, OnInit } from '@angular/core';

import { UsercommonService } from 'src/app/user/usercommon.service';

@Component({
  selector: 'app-todaydeals',
  templateUrl: './todaydeals.component.html',
  styleUrls: ['./todaydeals.component.css']
})
export class TodaydealsComponent implements OnInit {
  data_subsubcategory:any;
  constructor(private service: UsercommonService) {
    this. getSubSubCat();
    console.log('hi')
   }
   getSubSubCat() {
   
   
   
  }
  ngOnInit() {
  }

}
