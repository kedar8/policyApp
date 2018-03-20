import { Component ,OnInit} from '@angular/core';

import { HttpClient,HttpClientModule } from '@angular/common/http';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

@Component({
  selector: 'mypolicy',
  templateUrl: './mypolicy.component.html'
})
export class MypolicyComponent implements OnInit{

  showMaxWindow:boolean;
  trackstatus:boolean;
  help:boolean;
  feedback:boolean;

  policyData:any;

  constructor( private http:Http,private router:Router){
    this.trackstatus=true;
    this.help=false;
    this.feedback=false;
    this.getCardData();
  
  }


  ngOnInit() {
  }

  getRowData1(data:any)
  {
  
    this.showMaxWindow=!this.showMaxWindow;
    this.getCardData();

  }
  getRowData2(data:any)
  {
    this.showMaxWindow=!this.showMaxWindow;
    this.getCardData();
   
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
  getCardData() {
    
    let data: any;
    this.http.get('assets/data/fetchingdata/policychild1.json')
    .subscribe(response => {
    data = response.json();
    },
    (err) => {},
    () => {
     
    this.policyData = data.PolicyDetails;
    });
    }


}

