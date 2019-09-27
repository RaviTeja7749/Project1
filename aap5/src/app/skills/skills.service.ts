import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  constructor(private _http:HttpClient) { }

  GetSkillsObj(){
    return this._http.get("http://localhost:3000/SkillsObj");
  }
}
