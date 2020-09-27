import { Component, OnInit } from '@angular/core';

import { EmitterService } from '../emitter.service';
// import $ from 'jquery'
declare var $:any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private emits:EmitterService) { 
    emits.myevent.subscribe((dt:any)=>{   

      $('#modals1').modal('show')
 
  })


 
  }

  ngOnInit() {
  }

}
// $('#myModal1').modal('show')
// $('#modals1').modal('show')