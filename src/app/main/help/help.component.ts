import { Component ,OnInit} from '@angular/core';

import { HttpClient,HttpClientModule } from '@angular/common/http';
import { Http } from '@angular/http';
import { debuglog } from 'util';

@Component({
  selector: 'help',
  templateUrl: './help.component.html'
})
export class HelpComponent implements OnInit{

  
  constructor(){

  }
  

  ngOnInit() {
  }

}
