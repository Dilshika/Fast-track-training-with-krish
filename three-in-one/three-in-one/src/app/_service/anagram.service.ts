import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AnagramService {
private ANAGRAM_API="http://localhost:3000/anagram";

httpOptions={
  headers:new HttpHeaders({'content-Type':'application/json'})
}
  constructor(private http:HttpClient) { }

  sendWords(firstWord:string,secondWord:string):Observable<any>{
    return this.http.post(this.ANAGRAM_API,{
      firstWord,
      secondWord
    },this.httpOptions).pipe(
      catchError((error)=>{
        return throwError(error);
      }) 
    );
  }


}
