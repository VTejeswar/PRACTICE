import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-filterpipe-searc',
  templateUrl: './filterpipe-searc.component.html',
  styleUrls: ['./filterpipe-searc.component.css']
})
export class FilterpipeSearcComponent implements OnInit {
data:any;
searching:any;
  constructor(private service:CommonService) {
    this.get()
   }

  ngOnInit() {
  }
get() {
  this.service.practceAPI().subscribe(dt=>{
      this.data=dt
   } )  
}
}
  