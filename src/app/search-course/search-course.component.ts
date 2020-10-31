import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-search-course',
  templateUrl: './search-course.component.html',
  styleUrls: ['./search-course.component.css']
})
export class SearchCourseComponent implements OnInit {
  showSidebarDivPart = false;

  showTopicToggle = true;
  showLevelToggle = true;
  constructor() {

   }
  
  
  ngOnInit() {     


  }
  showSideBarDiv(){
    this.showSidebarDivPart = !this.showSidebarDivPart;
  }

  TopicListMethod(){
    this.showTopicToggle  = !this.showTopicToggle;
  }

  showLevelMethod(){
    this.showLevelToggle = !this.showLevelToggle ;
  }


  hide:boolean=true;

  svg1:boolean=true;
  svg2:boolean=false;
  pricedivhise(){
      this.hide=false;
      this.svg1=false;
      this.svg2=true;
   }
   pricedivshow(){
    this.hide=true;
    this.svg2=false;
    this.svg1=true;
 }

}
