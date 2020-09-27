import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsercommonComponent } from './usercommon/usercommon.component';
import {Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { BannerComponent } from './banner/banner.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import {MatIconModule} from "@angular/material/icon";
import { ProdComponent } from './prod/prod.component'
import { HttpClientModule } from '@angular/common/http';
import { ProdinfoComponent } from './prodinfo/prodinfo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddtocartComponent } from './addtocart/addtocart.component';
import { NoproductsComponent } from './noproducts/noproducts.component';
import { RegisterComponent } from './register/register.component';
const route:Routes=[
  {path:"",component:UsercommonComponent,children:[
    {path:"",component:BodyComponent},
    {path:"prod",component:ProdComponent},
    {path:"prodinfo",component:ProdinfoComponent },
    {path:'cart',component:AddtocartComponent},
    {path:'noproducts',component:NoproductsComponent}
  ]}        
]

@NgModule({
  declarations: [UsercommonComponent, HeaderComponent, MenuComponent, BannerComponent, BodyComponent, FooterComponent, ProdComponent, ProdinfoComponent, AddtocartComponent, NoproductsComponent, RegisterComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    MatIconModule,
    ReactiveFormsModule,
    RouterModule.forChild(route )
  ]
})
export class UserModule { }
