import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LargestNumberService {

  private API="http://localhost:3010/largestNumber";
  httpOptions={ headers:new HttpHeaders({'content-TYpe':'application/json'})}

  constructor(private http:HttpClient) { }

  sendValue(dataArray:number[],value:number):Observable<any>{
    return this.http.post(this.API,{
      dataArray,
      value
    },this.httpOptions).pipe(
      catchError((error)=>{
        return throwError(error);
      }) 
    );
  }
}
