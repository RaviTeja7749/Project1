import { Component, OnInit } from '@angular/core';
import { SkillsService } from './skills.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  // detailsabout="Skills";
  skillsobj: any;

  // skillsobj={
  //   details:"Programming Languages & Tools",
  //   heading:"Workflow",
  //   list1:"Mobile-First, Responsive Design",
  //   list2:" Cross Browser Testing & Debugging",
  //   list3:" Cross Functional Teams",
  //   list4:" Agile Development & Scrum"
  // }

  constructor(private skillscms:SkillsService) { }

  ngOnInit() {
    this.skillscms.GetSkillsObj().subscribe(res=>{
      this.skillsobj=res[0];
    })
  }

}
