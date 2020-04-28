import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AchievementsComponent } from './achievements/achievements.component';
import { BlogComponent } from './blog/blog.component';
import { ProjectComponent } from './project/project.component';
import { TeamComponent } from './team/team.component';
import {ExploreComponent} from './explore/explore.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'achievements',component:AchievementsComponent},
  {path:'blog',component:BlogComponent},
  {path:'path',component:ProjectComponent},
  {path:'team',component:TeamComponent},
  {path:'project',component:ProjectComponent},
  {path:'explore',component:ExploreComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
