import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { HomepagebodyComponent } from './homepagebody/homepagebody.component';
import { StudentpageComponent } from './studentpage/studentpage.component';
import { TeacherpageComponent } from './teacherpage/teacherpage.component';
import { HeadpageComponent } from './headpage/headpage.component';
import { LoginserviceService } from './loginservice.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LoginpageComponent,
    HomepagebodyComponent,
    StudentpageComponent,
    TeacherpageComponent,
    HeadpageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [LoginserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
