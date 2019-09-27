import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  constructor(private _http:HttpClient) { }
  GetEducationObj(){
    return this._http.get(" http://localhost:3000/EducationObj");
  }
}
