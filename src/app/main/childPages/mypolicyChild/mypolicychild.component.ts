import { Component ,OnInit} from '@angular/core';


@Component({
  selector: 'mypolicychild',
  templateUrl: './mypolicychild.component.html'
})
export class MypolicychildComponent implements OnInit{

  trackstatus:boolean;
  help:boolean;
  feedback:boolean;

  
    ngOnInit() {}
  
  
    constructor() { 
  this.trackstatus=true;
  this.help=false;
  this.feedback=false;
  
    }
  
  
  nextAdd() {
    this.trackstatus = !this.trackstatus;
   this.help = true;
   
   }
   
   nextPay() {
   
     this.help = !this.help;
     this.feedback = true;
     this.trackstatus = false;
   }
   nextBack()
   {
     this.feedback= !this.feedback;
     this.trackstatus=true;
     this.help=false;
   }
  stepBlockClick(event: any) {

    if (event.label == 'TrackStatus') {
      this.trackstatus = true;
      this.help = false;
      this.feedback = false;

    } else if (event.label == 'Help') {

      this.trackstatus = false;
      this.help = true;
      this.feedback = false;


    } else if (event.label == 'Feedback') {
      this.trackstatus = false;
      this.help = false;
      this.feedback = true;



    }
  }
  
  
       
  
  
  
  
  
  
  }
  