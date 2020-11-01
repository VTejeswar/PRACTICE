import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonService } from 'src/app/common.service';

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

  constructor(private service:CommonService ) {

   }













selectedphoto:File;
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
   ]),
   filessss:new FormControl("",[Validators.required]),  
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

  uploadFile(event){
      const filez=event.target.files[0];
      this.selectedphoto=event.target.files;
      this.form.patchValue({
        filessss:filez.name
      })
      console.log(this.form.value)
  }
  
  Submit(){
    if(this.form.valid){
      var formData: any =new FormData();
            formData.append("files",this.form.get('filessss').value);
    //        console.log('jkhjkghsfjghr',this.form.get('filessss').value);  
   
      formData.append("password",this.form.get('password').value);
    //   formData.append("Email",this.form.get('Email').value);
      formData.append("contact",this.form.get('contact').value);
    //   formData.append("Description",this.form.get('Description').value);
    //   formData.append("add",this.form.get('add').value);
    //      console.log(formData)
  
        var obj={password:this.form.controls.password.value,
                 contact:this.form.controls.contact.value,  
                  image:this.form.controls.filessss.value}
           console.log(obj)
      this.service.trilesend(obj).subscribe(dt=>{
        console.log(dt);
      })
     
    }


  }
  add(){
      this.form.get('contact').push(new FormControl('',[Validators.required]));
  }
  remove(i){
    this.form.get('contact').removeAt(i)
  }
  
}
