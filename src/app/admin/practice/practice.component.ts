import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent implements OnInit {
form:any
has:boolean=false
h(){
  this.has=true
}
  constructor() { }
  data='red'
  color='blue'
  completionPercent: '42px'
  ngOnInit() {
    this.form=new FormGroup({
      name: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required,Validators.minLength(5)]),
      Email : new FormControl('',[Validators.required,Validators.email]),
      contact:new FormArray([
        new FormControl('',[Validators.required]),
        new FormControl('',[Validators.required])
      ]),

      Description:new FormControl("",[Validators.required]),
   add:new  FormArray([
     new FormControl('')
   ])  
    })
  }
  setValue(){
    this.form.patchValue({
      name: 'SABRISH ',
      password: 'SABRISH123',
      Email : 'SABRISH@gmail.com',

contact:['dd','kk'],
      Description:'How r u'
    })
  }
  Submit(){
    if(this.form.valid){
// console.log(this.form.get('contact').value)
      console.log(this.form.value)
    }
  }
  add(){
      this.form.get('contact').push(new FormControl('',[Validators.required]));
  }
  remove(i){
    this.form.get('contact').removeAt(i)
  }
}
