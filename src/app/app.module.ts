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
import { SearchCourseComponent } from './search-course/search-course.component';
import { RegisterComponent } from './user/register/register.component';
import { CrudWithManyconceptComponent } from './crud-with-manyconcept/crud-with-manyconcept.component';
import { HttpConfigInterceptor } from './crud-with-manyconcept/inteceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgImageSliderModule } from 'ng-image-slider/lib/ng-image-slider.module';
import { RestAPIComponent } from './admin/EXPERIENCE-LEVEL-API/rest-api/rest-api.component';


@NgModule({
  declarations: [
    AppComponent,
    LogoutComponent,
    Behavior1Component,
    Behavior2Component,
    // DynamicSelectComponent,  
    // FilterpipeSearcComponent,
    // SearPipePipe,  
    // SearchCourseComponent,
    // SearchCourseComponent,
    RegisterComponent,
    RestAPIComponent
    // CrudWithManyconceptComponent    
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
  providers: [
    {
      provide : HTTP_INTERCEPTORS,
      useClass : HttpConfigInterceptor,  
      multi : true

    }
   
  ],    
  bootstrap: [RestAPIComponent]
})
export class AppModule { }
