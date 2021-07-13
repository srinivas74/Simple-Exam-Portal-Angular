import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {
  loginvalue:any=true;
  username:any;
  password:any;
  marks:any;
  teacher:any;
  constructor() { }

  getmarks(){
    return this.marks;
  }
  setmarks(marks:any){
    this.marks=marks;
  }
  getteacher(){
    return this.teacher;
  }
  setteacher(teacher:any){
    this.teacher=teacher;
  }



  getusername(){
    return this.username;
  }
  setusername(username:any){
    this.username=username;
  }
  getpassword(){
    return this.password;
  }
  setpassword(password:any){
    this.password=password;
  }
  getvalue(){
    return this.loginvalue;
  }
  setvalue(value:any){
    this.loginvalue=value;
  }
}
