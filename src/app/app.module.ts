import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LogoutComponent } from './logout/logout.component';
import {AgGridModule} from 'ag-grid-angular';
import { Behavior1Component } from './behavior1/behavior1.component';
import { Behavior2Component } from './behavior2/behavior2.component';
import { DynamicSelectComponent } from './select-category/dynamic-select/dynamic-select.component';

import { FilterpipeSearcComponent } from './filterpipe-searc/filterpipe-searc.component';
import { SearPipePipe } from './sear-pipe.pipe';



@NgModule({
  declarations: [
    AppComponent,
    LogoutComponent,
    Behavior1Component,
    Behavior2Component,
    DynamicSelectComponent,
  
    FilterpipeSearcComponent,
  
    SearPipePipe    
  ], 
  imports: [ 
    BrowserModule,
    AppRoutingModule,   
    HttpClientModule,    
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AgGridModule
  ],
  providers: [],
  bootstrap: [FilterpipeSearcComponent]
})
export class AppModule { }
