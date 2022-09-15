import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Grocery } from '../model/grocery';

@Injectable({
  providedIn: 'root'
})
export class GroceryService {
  constructor(private myhttp: HttpClient) { }
  groceryUrl:string="https://localhost:44312/api/groceryitems";
  listGrocery:Grocery[]=[];
  groceryData:Grocery=new Grocery();
  saveGrocery()
  {
    return this.myhttp.post(this.groceryUrl,this.groceryData);
  }
  updateGrocery()
  {
    return this.myhttp.put(`${this.groceryUrl}/${this.groceryData.groceryId}`,this.groceryData);
  }
  getGrocery():Observable<Grocery[]>
  {
    return this.myhttp.get<Grocery[]>(this.groceryUrl);
  }
  deleteGrocery(groceryId:number)
  {
    return this.myhttp.delete(`${this.groceryUrl}/${groceryId}`);
  }
}
