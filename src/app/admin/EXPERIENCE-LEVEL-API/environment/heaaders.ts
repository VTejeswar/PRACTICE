import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpBackend } from '@angular/common/http';
import { catchError, retry } from "rxjs/operators";
import { throwError, Observable, of, pipe } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BaseHttpClientService {
    private externalHttpClient: HttpClient;
    constructor(private _httpClient: HttpClient,handler: HttpBackend) {
        this.externalHttpClient = new HttpClient(handler);
      }


      getData<T>(url: string) {
        url = url;
    
        return this._httpClient.get<T>(url, this.prepareHeader(null))
        .pipe(
        catchError(this.handleError<T>(url))
        );
      }
    
      /** To process post request */
      postData<T>(url: string, data) {
        url =  url;
        return this._httpClient.post<T>(url, JSON.stringify(data), this.prepareHeader(null))
        .pipe(
        catchError(this.handleError(url, [])));
      }


      postFormData<T>(url: string, formdata) {
        url =  url;
        return this._httpClient.post<T>(url, formdata)
        .pipe(
        catchError(this.handleError(url, [])));
      }
    
    
      /** To process put request */
      putData<T>(url: string, data) {
        url = url;
        return this._httpClient.put<T>(url, JSON.stringify(data), this.prepareHeader(null))
        .pipe(catchError((err: any) => {
        return throwError(err);
        }));
      }



      private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
          // TODO: send the error to remote logging infrastructure
          console.error(error); // log to console instead
    
          // TODO: better job of transforming error for user consumption
          //this.log(`${operation} failed: ${error.message}`);
    
          // Let the app keep running by returning an empty result.
          return of(result as T);
        };
      }
    
      private prepareHeaderFormData(headers: HttpHeaders | null): object {
        headers = headers || new HttpHeaders();
        headers = headers.set('Content-Type', 'multipart/form-data');
        headers = headers.set('Accept', 'multipart/form-data');
        return {
          headers: headers
        }
      }

      
    
      private prepareHeader(headers: HttpHeaders | null): object {
        headers = headers || new HttpHeaders();
        headers = headers.set('Content-Type', 'application/json');
        headers = headers.set('Accept', 'application/json');
        headers = headers.set('Access-Control-Allow-Origin', '*');
        return {
          headers: headers
        }
      }
}