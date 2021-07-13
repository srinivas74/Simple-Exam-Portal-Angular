import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { LoginserviceService } from '../loginservice.service';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

//import  * as data from '../../assets/json/data.json';
@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css'],
  

})
export class LoginpageComponent implements OnInit {
 // products: any = (data as any).default;

  constructor(private router:Router ,public service:LoginserviceService , private http:HttpClient) {

   }
  
  ngOnInit(): void {
    this.service.setvalue(true);
    localStorage.setItem("crenditals",JSON.stringify([{user:'student',pass:'student',role:"student"},
    {user:'teacher',pass:'teacher',role:"teacher"},
    {user:'head',pass:'head',role:"head"}]));
    
    
  }
  
  Check:any=localStorage.getItem("crenditals");
  Values:any=JSON.parse(this.Check);
  username:any="";
  password:any="";
  statusforinput:boolean=true;
  

  statusforlogincredentials:any;
  outputdecorator:any;
  flag:any=false;
  role:any="";
  data:any;
  check(){
   
    for(let i in this.Values){
 
      if((this.Values[i].user===this.username) && (this.Values[i].pass===this.password)){
        
        if(this.Values[i].role==="student"){
          
          this.flag=true;
          this.role="student";
          this.service.setusername(this.username);
          this.service.setpassword(this.password);
          
          
        }
        else if(this.Values[i].role==="teacher"){
          this.flag=true;
          this.role="teacher";
        
          
        }
        else if(this.Values[i].role==="head"){
          this.flag=true;
          this.role="head";
        }
        else{
          this.statusforlogincredentials="Username or password is  incorrect";
        }
      }
      else{
        this.statusforlogincredentials="Username or password is  incorrect";
      }


     
    }

    if(this.flag==true){
      if(this.role=="student"){
        
        this.http.get('https://http-requestdemo-default-rtdb.firebaseio.com/posts.json').subscribe(responseData =>{console.log(JSON.parse(JSON.stringify(responseData)))});
        this.service.setvalue(false);

        this.router.navigate(['/student']);
      }
      else if(this.role=="teacher"){
        this.data=JSON.stringify([{user:'student',pass:'student',role:"student"},
        {user:'teacher',pass:'teacher',role:"teacher"},
        {user:'head',pass:'head',role:"head"}]);
        this.http.post('https://http-requestdemo-default-rtdb.firebaseio.com/posts.json',this.data).subscribe(responseData =>{console.log("HTTP request sent")});
        this.service.setvalue(false);
        this.service.setteacher(this.username);
        this.router.navigate(['/teacher']);
      }
      else if(this.role=="head"){
        this.service.setvalue(false);
        this.router.navigate(['/head']);
      }
    }
    else{

      this.service.setvalue(true);
    }
    
  }
 /*
  show(event:any){
    this.outputdecorator=event;
  }
*/
}
