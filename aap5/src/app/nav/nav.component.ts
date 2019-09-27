import { Component, OnInit } from '@angular/core';
import { AboutService } from '../about/about.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private service : AboutService) { }

  ngOnInit() {
    this.GetAboutdetails()
  }

 

  GetAboutdetails(){
    this.service.ExchangeDataFunctioninService(this.service.GetDataofAbout());
  }


}
