import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepagebodyComponent } from './homepagebody/homepagebody.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { StudentpageComponent } from './studentpage/studentpage.component';
import { TeacherpageComponent } from './teacherpage/teacherpage.component';
import { HeadpageComponent } from './headpage/headpage.component';

const routes: Routes = [{path:"home",component:HomepagebodyComponent},
{path:"login",component:LoginpageComponent},
{path:"student",component:StudentpageComponent},{path:"teacher",component:TeacherpageComponent},{path:"head",component:HeadpageComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }