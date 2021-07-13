import { Component, OnInit } from '@angular/core';
import { Questionpaper } from '../teacherpage/questionpaper';
import { LoginserviceService } from '../loginservice.service';
@Component({
  selector: 'app-studentpage',
  templateUrl: './studentpage.component.html',
  styleUrls: ['./studentpage.component.css']
})
export class StudentpageComponent implements OnInit {
  questions:any;
  scriptobject:any;
  answerobject:any;
  textanswer:any="";
  allanswers:any[]=[];
  all:any=[];
  score:any=0;
  scorevisible:any=false;
  valuelength:any=0;
  displayattempts:any=false;
  headcheck:any=[];







  constructor(public service:LoginserviceService) {

    this.questions=localStorage.getItem("allquestions");
    this.scriptobject=JSON.parse(this.questions);
    console.log(this.scriptobject);
  }


  
  ngOnInit(): void {
    this.service.setvalue(false);
  }





  onSubmitAnswer(){
    //this.textanswer=<HTMLCollectionOf<Element>>document.getElementsByClassName("name");
   
    this.textanswer=document.querySelectorAll(".name");
    
    for(var i=0;i<this.textanswer.length;i++){
      if(this.textanswer[i].value.length<1){
        this.valuelength=0;
        break
      }
      else{
      this.valuelength=1;
      this.answerobject=new Questionpaper(this.scriptobject[i].question,this.textanswer[i].value);
      this.all.push(this.answerobject);
      this.allanswers.push(this.textanswer[i].value);
      }
      
    }
    
    if(this.valuelength==0){
      alert("please fill the answers");
    }
    else{
      this.showresults();
    }

    
  }


  showresults(){
    for(var i=0;i<this.scriptobject.length;i++){
      if(this.allanswers[i]===this.scriptobject[i].answer){
        this.score+=2;
      }
    }
    this.service.setmarks(this.score);
  
      this.headcheck.push(this.service);
      localStorage.setItem("studentsmarks",JSON.stringify(this.headcheck));



    
    this.scorevisible=true;
    this.displayattempts=true;
  }

}
