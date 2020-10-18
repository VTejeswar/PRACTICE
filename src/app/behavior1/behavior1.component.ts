import { Component, OnInit } from '@angular/core';
import { BehaviorService } from '../behavior.service';

@Component({
  selector: 'app-behavior1',
  templateUrl: './behavior1.component.html',
  styleUrls: ['./behavior1.component.css']
})
export class Behavior1Component implements OnInit {
  data:any;
  constructor(private service:BehaviorService) { }

  ngOnInit() {
    this.service.broadmessage.subscribe(dt=>{ 
      this.data=dt;
    })
  }

}
 