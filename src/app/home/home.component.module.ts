import{  CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';

import {AmexioWidgetModule} from 'amexio-ng-extensions';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';


import { HomeComponent } from "./home.component";

const routes:Routes=[
    {
        path:'',component:HomeComponent
    },
   
    
]
@NgModule({
declarations:[
HomeComponent,

],
imports:[
FormsModule,
CommonModule,
RouterModule.forChild(routes),
AmexioWidgetModule

],
providers:[

],

})

export class HomeModule {}
