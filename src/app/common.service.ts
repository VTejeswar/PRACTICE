import { Injectable } from '@angular/core';
import { Settings } from './settings';
import { HttpClient,  } from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})     
export class CommonService {
  settings=new Settings()
  constructor(private http:HttpClient) { }





  
  trilesend(obj){
    return this.http.post(`${this.settings.server_path}/formdata`,obj);
  }






  serGetCategory(){

    return this.http.get(`${this.settings.server_path}/catpath/getCategory`)
    
    }

    serGetSubCat(){
      return this.http.get(`${this.settings.server_path}/subcatpath/getsubcat`)
    }

    serGetSubSubCat(){
      return this.http.get(`${this.settings.server_path}/subsubcatpath/getSubSubcat`)
    }

    practceAPI(){
      return this.http.get('http://restcountries.eu/rest/v2/all');
    }

    crudPost(obj){
      return this.http.post(`${this.settings.server_path}/formdata`,obj);
    }
    crudGet(){
      return this.http.get(`${this.settings.server_path}/get`);
    }

  
} 

