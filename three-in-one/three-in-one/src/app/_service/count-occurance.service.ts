import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CountOccuranceService {

  private API="http://localhost:3020/countOccurance";
  httpOptions={
    headers:new HttpHeaders({'content-Type':'application/json'})
  }

  constructor(private http:HttpClient) { }

  countOccurance(sentence:string):Observable<any>{
    return this.http.post(this.API,{
      sentence
    },this.httpOptions).pipe(
      catchError((error)=>{
        return throwError(error);
      })
    )
  }
}
