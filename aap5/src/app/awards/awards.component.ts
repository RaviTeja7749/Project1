import { Component, OnInit } from '@angular/core';
import { AwardsService } from './awards.service';

@Component({
  selector: 'app-awards',
  templateUrl: './awards.component.html',
  styleUrls: ['./awards.component.css']
})
export class AwardsComponent implements OnInit {

  about="Awards &amp; Certifications";
  awardsobj: any;

  // awardsobj={
  //   li1:" Google Analytics Certified Developer",
  //   li2:" Mobile Web Specialist - Google Certification",
  //   li3:" Place - University of Colorado Boulder - Emerging Tech Competition 2009",
  //   li4:"Place - University of Colorado Boulder - Adobe Creative Jam 2008 (UI Design Category)",
  //   li5:"Place - University of Colorado Boulder - Emerging Tech Competition 2008",
  //   li6:" Place - James Buchanan High School - Hackathon 2006",
  //   li7:" Place - James Buchanan High School - Hackathon 2005"
  // }

  constructor(private awardscms: AwardsService) { }

  ngOnInit() {
   this.awardscms.GetAwardsObj().subscribe(res=>{
     this.awardsobj=res[0]
   })
  }

}
