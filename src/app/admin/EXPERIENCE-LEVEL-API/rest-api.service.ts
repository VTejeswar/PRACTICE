import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { enviments } from './environment/envirn';
import { BaseHttpClientService } from './environment/heaaders';

@Injectable({
  providedIn: 'root'
})
export class RestAPIService {
  
  constructor(private basehttp :BaseHttpClientService,private http :HttpClient) { }
  host:any=enviments.backendApi
  formdataPosting(data){
      return this.basehttp.postData(this.host + '/posting',data)
  }


  countrydataGetting(){
    return this.basehttp.getData('http://restcountries.eu/rest/v2/all')
  }
//   formdataPosting(data){
//     return this.http.post(this.host + '/posting',data)
// }
}
