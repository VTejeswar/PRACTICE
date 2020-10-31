import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { CommonService } from '../common.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-crud-with-manyconcept',
  templateUrl: './crud-with-manyconcept.component.html',
  styleUrls: ['./crud-with-manyconcept.component.css']
})
export class CrudWithManyconceptComponent implements OnInit {

  crudform:FormGroup;
  getData:any;
  result:any;
  
  constructor(private service:CommonService) {
  var res=document.URL
      alert(res)
      var x=res.split("/")
      alert(x[3].split(","))
    
    this.get()

   }

  ngOnInit(): void {
    this.crudform=new FormGroup({ 
      name:new FormControl("",[Validators.required]),
      gender:new FormControl("",[Validators.required]),
      city:new FormControl("",[Validators.required]),
      Phone:new FormControl("",[Validators.required]),
      State:new FormControl("",[Validators.required])
    })
  }
  save() {    
    if(this.crudform.valid){ 
    console.log(this.crudform.value)
    var obj={
      name:this.crudform.controls.name.value,
      gender:this.crudform.controls.gender.value,
      city:this.crudform.controls.city.value,
      phone:this.crudform.controls.Phone.value,
      state:this.crudform.controls.State.value,
    }    
    this.service.crudPost(obj).subscribe((dt:any)=>{

       this.crudform.reset()
      Swal.fire(dt.result);
      this.get()
    })   
  }else{ 
    Swal.fire('Fill The Form')
  }

  }
    get() { 
        this.service.crudGet().subscribe((dt:any)=>{
          this.getData=dt
        })
    }
}
