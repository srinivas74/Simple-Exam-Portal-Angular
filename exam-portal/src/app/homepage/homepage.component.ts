import { Component, OnInit , Input , Output , EventEmitter} from '@angular/core';
import { LoginserviceService } from '../loginservice.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  logout:any;

  constructor(public service:LoginserviceService) { 

  }

  ngOnInit(): void {

   this.logout=this.service.getvalue();
  
  }

  onLogout(){
    this.service.setvalue(true);
    this.logout=true;
  }
 
  count:number=0;
/*
  @Output() newevent = new EventEmitter<string>();

  addevent($event:any){
    this.count++;
    this.newevent.emit("you are viewing login page"+this.count.toString());
  }*/

}