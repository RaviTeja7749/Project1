import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InterestsService {

  constructor(private _http:HttpClient) { }
  GetInterestObj(){
    return this._http.get("  http://localhost:3000/InterestsObj");
  }
}
