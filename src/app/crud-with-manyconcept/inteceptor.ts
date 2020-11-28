import { Injectable } from '@angular/core';
import {
    HttpInterceptor,
    HttpRequest,
    HttpResponse,
    HttpHandler,
    HttpEvent,
    HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {

    intercept(request: HttpRequest<any>, next: HttpHandler):Observable<HttpEvent<any>> {
        console.log('request accepted')
        console.log('request url',request.url)
        const req=request.clone({
            setHeaders:{
                token:'Tejj'
            }
        })
      return next.handle(req);     

    }  
}             
