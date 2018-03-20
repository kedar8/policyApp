import { Component, OnInit } from '@angular/core';

import {RequestOptions, Headers, Http} from "@angular/http";

import {CommonDataService, AmexioNavBarComponent} from 'amexio-ng-extensions';

import { ViewChild } from '@angular/core';


import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  topHomeData:any;
  homeMenuData:any;

  //@ViewChild(AmexioNavBarComponent) amexioNav;
  constructor(private http:Http,private router:Router) { 
  //  here we return the data from TS file to HTML file
 this.getHomeNavBar();
   
  
  }
  ngOnInit() {
  }

// this is the on home nav bar get data from Json file
  getHomeNavBar()
{
 let homenavdata;
   const headers = new Headers({'Content-Type': 'application/json;charset=UTF-8'});
   const options = new RequestOptions({headers: headers, method: 'get'});
   this.http.get('assets/data/navbarjsons/navBar.json' , options)
     .subscribe(
       response => {
        homenavdata=response.json();
   }, 
   err => {
     console.log('Error occured');
   },
    () => {
    this.topHomeData=homenavdata;
   });

}
//  this is the home nav bar click routes to login page
  onHomeMenuClick(data:any)
  {
    
      this.router.navigate(["/login"]);
    
  }
}
