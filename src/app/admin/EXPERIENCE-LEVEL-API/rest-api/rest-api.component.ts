import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormControl, FormGroup } from '@angular/forms';
import { RestAPIService } from '../rest-api.service';

@Component({
  selector: 'app-rest-api',
  templateUrl: './rest-api.component.html',
  styleUrls: ['./rest-api.component.css']
})
export class RestAPIComponent implements OnInit {
  formsdata:FormGroup;
  data:any;
  constructor(private service:RestAPIService) { 
    this.countryGetting() 
  }

  ngOnInit() {
    this.formsdata=new FormGroup({
      name:new FormControl("",[Validators.required]),
      file:new FormControl("",[Validators.required])
    })
      this.countryGetting()
  }
  uploadFile(event){
    const filez=event.target.files[0];
    // this.selectedphoto=event.target.files;
    this.formsdata.patchValue({
      file:filez.name
    })
    console.log(this.formsdata.value)
}

submit(){
    console.log(this.formsdata.value);
    var obj={name:this.formsdata.controls.name.value,img:this.formsdata.controls.file.value}
    this.service.formdataPosting(obj).subscribe((dt:any)=>{
      console.log(dt)
    })
  }

countryGetting(){
  this.service.countrydataGetting().subscribe((dt:any)=>{
    this.data=dt;
  }
)}


arr=[
  {id:1},
  {id:2},
  {id:3},
  {id:4}
]
z=[];
overs(x){
  this.z=x.id
}
}
