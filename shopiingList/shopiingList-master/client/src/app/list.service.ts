import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { pipe, Observable, throwError } from 'rxjs';
import { Iuser } from './shopping-list/user';
import { catchError, map , filter, mergeMap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ListService {

  Items:string[] = ['sasung', 'apple'];

 addItemToCart(item){
   this.Items.push(item);
   console.log(this.Items);
 } 

 getItems(): string[]{
   return this.Items;
 }
//http-req-get
getUsers(): Observable<Iuser[]>{
  return this.http.get<Iuser[]>('http://jsonplaceholder.typicode.com/users')
                  pipe(map((data:any) => data.json()),
                  catchError(this.errorHandler))
                
}

//http-post-req
 errorHandler(error: HttpErrorResponse){
    return throwError(error.message || 'server Error')
 }

  constructor(private http: HttpClient) { }
}
