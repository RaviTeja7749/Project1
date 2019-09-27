import { Component, OnInit } from '@angular/core';
import { AboutService } from './about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  // getabout: Object;
  // aboutobj: Object;
  aboutdetails: Object;


  constructor(private aboutcms:AboutService) { }
  // aboutobj={
  //     "fname":"",
  //     "lname":"",
  //     "house":"",
  //    "street":"",
  //     "zip":"",
  //       "phone":"",
  //       "email":"",
  //       "aboutmsg":""

  
  ngOnInit() {

   this.aboutcms.GetDataofAbout().subscribe(res=>{
     console.log(res)
     this.aboutdetails=res[0]
   })
  }
    
    // this.GetAboutdetails();
    // console.log(this.aboutcms)
  }

  // GetAboutdetails(){
  //   console.log("user added")
  //   this.aboutcms.GetDataofAbout().subscribe(res=>{
  //     this.aboutdetails = res;
  //   })
  // }


