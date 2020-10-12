import { Component, OnInit } from '@angular/core';
import { BehaviorService } from '../behavior.service';

@Component({
  selector: 'app-behavior2',
  templateUrl: './behavior2.component.html',
  styleUrls: ['./behavior2.component.css']
})
export class Behavior2Component implements OnInit {
data2:any;
vall:any;
  constructor(private service:BehaviorService) { }

  ngOnInit() {
    this.service.broadmessage.subscribe(dt=>{ 
      this.data2=dt
    })
  }
  hi(x) { 
      this.service.changeVlue(x)
  }

  people:any=[
    {name:'Sabrish',country:'india'},
    {name:'Tejeswar',country:'usa'},
    {name:'Ram',country:'india'},
    {name:'Sankar',country:'usa'}
  ]
}
