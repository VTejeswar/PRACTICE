import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BehaviorService {
    broad=new BehaviorSubject<any>('SABRISH');
    broadmessage=this.broad.asObservable();
  constructor() { }
  changeVlue(newdata:any) { 
     this.broad.next(newdata)
  }
}
