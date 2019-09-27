import { Component, OnInit } from '@angular/core';
import { ExperienceService } from './experience.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  experienceobj: Object;

  // experienceobj={
  //   Fresher:"Experience",
  //   Designagion:"Senior Web Developer",
  //   company:"Intelitec Solutions",
  //   msg:"Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.",
  //   period:"September 2019 - Present",
  //   Experience2:{
  //     Designagion:"Web Developer",
  //     company:"Intelitec Solutions",
  //     msg:"Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.",
  //     period:"December 2017 - July 2019",
  //   },
  //   Experience3:{
  //   Designagion:"Junior Web Designer",
  //   company:"Shout! Media Productions",
  //   msg:"Podcasting operational change management inside of workflows to establish a framework. Taking seamless key performance indicators offline to maximise the long tail. Keeping your eye on the ball while performing a deep dive on the start-up mentality to derive convergence on cross-platform integration."
  //   ,period:"July 2016 - November 2017",
  //  },
  //   Experience4:{
  //     Designagion:"Web Design Intern",
  //     company:"Shout! Media Productions",
  //   msg:"Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize customer directed convergence without revolutionary ROI."
  //   ,period:"September 2015 - June 2016",
  // }
  // }

  constructor(private experienceservive : ExperienceService) { }

  ngOnInit() {
    this.experienceservive.GetExperiencedetails().subscribe(res=>{
      this.experienceobj=res[0];
    })
    
  }


}
