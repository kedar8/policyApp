import{  CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';
import {AmexioWidgetModule} from 'amexio-ng-extensions';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';

import { HttpModule} from '@angular/http';
import { HttpClient,HttpClientModule} from '@angular/common/http';
import { MainComponent } from "./main.component";

import { DashboardComponent} from '../main/dashboard/dashboard.component';
import { MypolicyComponent} from '../main/mypolicy/mypolicy.component';
import { MysearchComponent} from '../main/mysearch/mysearch.component';
import { MyvehicalComponent} from '../main/myvehical/myvehical.component';

import { HelpComponent} from '../main/help/help.component';
import {MypolicychildComponent} from '../main/childPages/mypolicyChild/mypolicychild.component';



const routes:Routes=[
    {
        path:'',component:MainComponent,
        children:[
            {
                path:'dashboard',component:DashboardComponent
            },
            
            {
                path:'myvehical',component:MyvehicalComponent
            },
            {
                path:'mypolicy',component:MypolicyComponent,
               
            },
            {
                path:'mysearch',component:MysearchComponent
            },
            {
                path:'help',component:HelpComponent
            }
        ]    
    }
]
@NgModule({
declarations:[
MainComponent,
DashboardComponent,
MypolicyComponent,
MysearchComponent,
MypolicychildComponent,
MyvehicalComponent,
HelpComponent
],
imports:[
    FormsModule,
    CommonModule,

    HttpModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    AmexioWidgetModule
]
})

export class MainModule {}
