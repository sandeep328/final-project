import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FooditemsService {

  getCat() {

 throw new Error('Method not implemented.');
    
}
    
    
    
    
 constructor(private http:HttpClient) { }
    
    
    
    
    getProducts(): Observable<any>{
    
     return this.http.get("http://localhost:4500/product")
    
}
    
  getdetails1(id:number):Observable<any>{
    
  return this.http.get("http://localhost:4500/product/"+id)
    
 }
    
}
  

