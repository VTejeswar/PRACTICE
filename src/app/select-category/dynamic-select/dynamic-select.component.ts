import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FooterComponent } from 'src/app/user/footer/footer.component';

@Component({
  selector: 'app-dynamic-select',
  templateUrl: './dynamic-select.component.html',
  styleUrls: ['./dynamic-select.component.css']
})
export class DynamicSelectComponent implements OnInit {
  product:FormGroup
  constructor() { }
  catData:any[]=[]
  dollardata:any;
  
  dolardata:any;
  shwsubcatselect:boolean=false;
  shwsubsubcatselect:boolean=false;
  arr:any[]=[
    { "catid": "100", "catname": "IT & Software",
      "products": [{ "product_id": "1", "subproduct_name": "Development",

      "sub_products":[{ "sub_product_id": "01", "sub_product_name": "sub_productName1" },
      { "sub_product_id": "02", "sub_product_name": "sub_productName2" },
      { "sub_product_id": "03", "sub_product_name": "sub_productName3" }] },
       { "product_id": "2", "subproduct_name": "Net Working" },
        { "product_id": "3", "subproduct_name": "Research" }]
       },
 
   { "catid": "200", "catname": "Development",
      "products": [{ "product_id": "1", "subproduct_name": "ALL IT & Software",

      "sub_products":[{ "sub_product_id": "01", "sub_product_name": "sub_productName1" },
      { "sub_product_id": "02", "sub_product_name": "sub_productName2" },
      { "sub_product_id": "03", "sub_product_name": "sub_productName3" }] },
       { "product_id": "2", "subproduct_name": "IT Networking" },
        { "product_id": "3", "subproduct_name": "IT Marketing" }]
   },

   { "catid": "300", "catname": "Business",
    "products": [{ "product_id": "1", "subproduct_name": "Land Business",
                    "sub_products":[{ "sub_product_id": "01", "sub_product_name": "sub_productName1" },
                    { "sub_product_id": "02", "sub_product_name": "sub_productName2" },
                    { "sub_product_id": "03", "sub_product_name": "sub_productName3" }] },
     { "product_id": "2", "subproduct_name": "Books Business" },
     { "product_id": "3", "subproduct_name": "Courses Business" }]
   }
  ]
  ngOnInit() {
    this.product=new FormGroup({
      category:new FormControl(),
      subcategory:new FormControl(),
      subsubcat:new FormControl()
     })
  }
  SubCatrgoriesData:any = [];
  funsubmit(event){ 
    console.log(this.product.value)
    this.SubCatrgoriesData = [];
   this.catData=[];
   this.dollardata=event;
   for(var i =0;i<=this.arr.length-1;i++){ 
    //  this.catData.push(this.arr[i]);
     if(this.arr[i].catname==this.dollardata){
        this.shwsubcatselect=true
        for(var j=0;j<=this.arr[i].products.length;j++) {
          this.SubCatrgoriesData.push(this.arr[i].products[j].subproduct_name)
          console.log('SubCatrgoriesData',this.SubCatrgoriesData)
        }
     }
   }
   console.log(this.catData)
  }

subsubcat:any = [];
  subfunsubmit(event){
    this.dolardata=event;
    this.subsubcat=[];
    for(var i=0;i<=this.arr.length;i++){
      if(this.arr[i].catname==this.dollardata){
        
        for(var j=0;j<=this.arr[i].products.length;j++){ 
            if(this.arr[i].products[j].subproduct_name==this.dolardata){ 
              this.shwsubsubcatselect=true
              
              for(var k=0;this.arr[i].products[j].sub_products.length;k++){
                 this.subsubcat.push(this.arr[i].products[j].sub_products[k].sub_product_name)
              }
             
            }
        }
      }
    }
  }

  finalcatsubmit(){
  }
}
