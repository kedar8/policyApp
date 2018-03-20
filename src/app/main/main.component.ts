import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import {RequestOptions, Headers, Http} from "@angular/http";


import {CommonDataService, AmexioNavBarComponent} from 'amexio-ng-extensions';

import { ViewChild } from '@angular/core';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  topMainData:any;
  sideBarDashBoard:boolean=true;
 
  //@ViewChild(AmexioNavBarComponent) amexioNav;
  
  constructor(private http:Http,private router:Router) { 

    this.getMainNavBar();
   
  };

  ngOnInit() {
  }




  getMainNavBar()
{
 let mainNavdata;
   const headers = new Headers({'Content-Type': 'application/json;charset=UTF-8'});
   const options = new RequestOptions({headers: headers, method: 'get'});
   this.http.get('assets/data/navbarjsons/main.json' , options)
     .subscribe(
       response => {
        mainNavdata=response.json();
   }, 
   err => {
     console.log('Error occured');
   },
    () => {
    this.topMainData=mainNavdata;
   });
 
}

onMainNavClick(data:any)
{
     
 this.router.navigate(["/main/dashboard"]); 
 
}


onNodeClick(data:any)                                                               
{
         
                                    
    this.router.navigate([data.link]);                                      
   
}


}
