import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsercommonService } from '../usercommon.service';

@Component({
  selector: 'app-prod',
  templateUrl: './prod.component.html',
  styleUrls: ['./prod.component.css']
})
export class ProdComponent implements OnInit {
  subcat_id:any;
  products_data:any
  rattingarr:any;
  constructor(private ac:ActivatedRoute,private service:UsercommonService) {

      this.ac.params.subscribe(dt=>{
        this.subcat_id=dt.subsubid
        this.service.ser_get_product_subsubid({subsubcatid:this.subcat_id}).subscribe((dt:any)=>{
            for(var i=0; i<dt.length;i++){
              var arr=[]
              var half=0
              for(var j=1;j<=dt[i].Rating;j++){
                arr.push(j)
                   }
                j--
                if(dt[i].Rating>j)
                half=1
                dt[i].rattingarr=arr
                dt[i].half=half        
            }
          this.products_data=dt;    
        })
      })       
    
   }     
  ngOnInit() {
  } 

}
   