import { Component ,OnInit} from '@angular/core';

import { HttpClient,HttpClientModule } from '@angular/common/http';
import { Http } from '@angular/http';
import { debuglog } from 'util';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit{

  
  constructor( private http:Http){

  }
  

  ngOnInit() {
  }

}
