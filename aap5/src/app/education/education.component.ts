import { Component, OnInit } from '@angular/core';
import { EducationService } from './education.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  educationobj: Object;

  
  // educationobj={
  //   Detailsabout:"Education",
  //   university:"University of Colorado Boulder",
  //   course:"Bachelor of Science",
  //   Branch:"Computer Science - Web Development Track",
  //   gpa:"GPA: 3.23",
  //   period:"August 2006 - May 2010",
  //   School:{
  //     university:"James Buchanan High School",
  //     course:"Technology Magnet Program",
  //     gpa:"GPA: 3.56",
  //     period:"August 2002 - May 2006",
  //   }
  // }

  constructor(private educationcms:EducationService) { }

  ngOnInit() {
    this.educationcms.GetEducationObj().subscribe(res=>{
      this.educationobj=res[0];
    })
    
  }

}
