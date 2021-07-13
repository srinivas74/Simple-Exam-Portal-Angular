import { Component, OnInit } from '@angular/core';
import {Questionpaper} from './questionpaper';
import { LoginserviceService } from '../loginservice.service';
@Component({
  selector: 'app-teacherpage',
  templateUrl: './teacherpage.component.html',
  styleUrls: ['./teacherpage.component.css']
})
export class TeacherpageComponent implements OnInit {
  
  constructor(public service:LoginserviceService) {
    
   }

  ngOnInit(): void {
    this.service.setvalue(false);
    localStorage.removeItem("allquestions");
    this.review=localStorage.getItem("review");
 
    if(this.review!=null){
      this.checkreview=true;
    }

    
  }
  checkreview:any=false;
  question:any="";
  answer:any="";
  questioninstance:any;
  x:any;
  y:any;
  ques:any=[];
  questions:any;
  scriptobject:any;
  displayquestions:any=false;
  submitquestions:any=false;
  submitted:any;
  review:any;

  onClear(){
    localStorage.removeItem("allquestions");
    this.displayquestions=false;
  }
  onDisplay(){
    this.displayquestions=true;
    this.submitted=true;
    

  }
  onSubmitPaper(){
    if(this.scriptobject.length<5 || this.scriptobject.length>5){
      alert("Please make 5 questions");
      this.submitquestions=false;
      this.submitted=true;
    }
    else{
    this.submitquestions=true;
    this.submitted=false;
    }
  }

  addquestion(){
    /*for(let i in this.allquestions){
      this.allquestions[0].push(this.question,this.answer);
    }*/

    if(localStorage.getItem("allquestions")==null){
      this.questioninstance=new Questionpaper(this.question,this.answer);
      this.ques.push(this.questioninstance);
      localStorage.setItem("allquestions",JSON.stringify(this.ques));
    }
    else{
      this.x=localStorage.getItem("allquestions");
      this.y=JSON.parse(this.x);
      this.questioninstance=new Questionpaper(this.question,this.answer);
      this.y.push(this.questioninstance);
      localStorage.setItem("allquestions",JSON.stringify(this.y));
      
    }
    this.question="";
    this.answer="";
    this.questions=localStorage.getItem("allquestions");
    this.scriptobject=JSON.parse(this.questions);
  
  }

  onDelete(question:any){

    console.log(this.scriptobject);

    for(var i=0;i<this.scriptobject.length;i++){

      if(this.scriptobject[i].question===question){
        this.scriptobject.splice(i,1);
        localStorage.setItem("allquestions",JSON.stringify(this.scriptobject));
        break;
      }
      
      
    }
   
    

  }



}
