import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { SkillsComponent } from './skills/skills.component';
import { InterestsComponent } from './interests/interests.component';
import { AwardsComponent } from './awards/awards.component';
import { NavComponent } from './nav/nav.component';
import { AppRoutingModule } from './app.router.module';
// import { HttpClient } from 'selenium-webdriver/http';
// import { AppRoutingModule } from './app.router.module';
import {HttpClientModule} from "@angular/common/http";
import{ FormsModule } from '@angular/forms';
import { AboutService } from './about/about.service';



@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    EducationComponent,
    ExperienceComponent,
    SkillsComponent,
    InterestsComponent,
    AwardsComponent,
    NavComponent
    
    
  ],
  imports: [
    BrowserModule, AppRoutingModule,  HttpClientModule,  FormsModule
  ],
  providers: [AboutService],
  bootstrap: [AppComponent]
})
export class AppModule { }
