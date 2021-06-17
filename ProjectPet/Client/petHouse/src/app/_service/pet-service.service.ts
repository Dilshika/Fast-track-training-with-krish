import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Pet } from '../pet/model/pet.model';

@Injectable({
  providedIn: 'root'
})
export class PetService {

  baseUrl="http://localhost:3000/pet-house";

  httpOptions={
    headers:new HttpHeaders({'content-Type':'application/json'})
  }

  constructor(private http:HttpClient) { }


  getPets():Observable<any>{
    return this.http.get(this.baseUrl).
    pipe(
      catchError((error)=>{
        return throwError(error);
      }) 
    )
  }


  update(id:string,data:Pet):Observable<any>{
      return this.http.put(`${this.baseUrl}/${id}`,data,this.httpOptions).
      pipe(
        catchError(
          (error)=>{
            return throwError(error);
          }
        )
      )
  }

  delete(id:string):Observable<any>{
    return this.http.delete(`${this.baseUrl}/${id}`,this.httpOptions);
  }

  create(data:Pet):Observable<any>{
    return this.http.post(this.baseUrl,data,this.httpOptions).
    pipe(
      catchError(
        (error)=>{
          return throwError(error);
        }
      )
    )
  }


}
