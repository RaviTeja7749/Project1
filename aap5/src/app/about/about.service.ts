import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AboutService {
  Exchangedata = new Subject();

  constructor(private _http:HttpClient) { }

  ExchangeDataFunctioninService(data){
   return this.Exchangedata.next(data);
  }

  GetDataofAbout(){
    return this._http.get("http://localhost:3000/aboutObj");
  }
}
