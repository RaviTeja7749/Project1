import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  constructor(private _http:HttpClient) { }

  GetExperiencedetails(){
    return this._http.get("http://localhost:3000/ExperienceObj");
  }
}
