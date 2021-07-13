import { Component, OnInit } from '@angular/core';
import { LoginserviceService } from '../loginservice.service';
@Component({
  selector: 'app-headpage',
  templateUrl: './headpage.component.html',
  styleUrls: ['./headpage.component.css']
})
export class HeadpageComponent implements OnInit {

  constructor(public service:LoginserviceService) { }

  ngOnInit(): void {
    this.service.setvalue(false);
    this.x=localStorage.getItem("studentsmarks");
    this.y=JSON.parse(this.x);
  }
  x:any;
  y:any;
  review:any;
  submit:any=false;
  onsubmit(){
    this.submit=true;
    localStorage.setItem("review",this.review);
  }


}
