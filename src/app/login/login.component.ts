import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

import {RequestOptions, Headers, Http} from "@angular/http";
import {CommonDataService, AmexioNavBarComponent} from 'amexio-ng-extensions';

import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginObject :LoginModel;
  loginNavData:any;

  //@ViewChild(AmexioNavBarComponent) amexioNav;


  constructor(private router:Router,private http:Http)  { 
    this.loginObject=new LoginModel(); 
    //  here we return the data from TS file to HTML file
    this.getLoginNavBar();
    
  }



  // onLoginNavClick(data:any)
  // {
    
    
  //   this.router.navigate(["/main/dashboard"]);
   
  // }



  

  ngOnInit() {
  }

// this is the on home nav bar get data from Json file

// onLoginNavLinkClick(data:any)
// {
  
// this.router.navigate(["/home"])

// }


  getLoginNavBar()
{
 let loginNav;
   const headers = new Headers({'Content-Type': 'application/json;charset=UTF-8'});
   const options = new RequestOptions({headers: headers, method: 'get'});
   this.http.get('assets/data/navbarjsons/loginMenu.json' , options)
     .subscribe(
       response => {
        loginNav=response.json();
   }, 
   err => {
     console.log('Error occured');
   },
    () => {
    this.loginNavData=loginNav;
   });
  
}

// two way binding - using ngModel concept 



  onCountryClick(countryData:any){

    {
      
     if(countryData && countryData.countryCode)
     {
      this.loginObject.countryCode=countryData.countryCode;

     }
     
     }
}

onProceedClick(data:any)
{

  if(this.loginObject.countryCode && this.loginObject.mobileNo)
  {
   
    
    this.router.navigate(["/main/dashboard"]);
  }
}

}

// class fro the two way binding c- we create class for the get string value from html to ts for binding purpose
export class LoginModel{

  countryCode:String;
  mobileNo:string;
}