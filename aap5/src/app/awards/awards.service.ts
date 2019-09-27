import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AwardsService {

  constructor(private _http:HttpClient) { }

  GetAwardsObj(){
    return this._http.get(" http://localhost:3000/AwardsObj");
  }
}
