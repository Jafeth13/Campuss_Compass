import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginModule } from './Component/Login/login.module';
import { HttpClientModule } from '@angular/common/http';
import { CourseModule } from './Component/Course/course/course.module';
import { RegistrationComponent } from './Component/Course/registration/registration.component';
import { ManagementAcadenicComponent } from './Component/Course/management-acadenic/management-acadenic.component';
import { FinanceComponent } from './Component/Course/finance/finance.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { InfoRegistrationComponent } from './Component/Course/info-registration/info-registration.component';

import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';








import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import {NgxTypedJsModule} from 'ngx-typed-js';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';




@NgModule({
  declarations: [
    AppComponent,
   
    
   
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LoginModule,
    CourseModule,
    HttpClientModule,
    SweetAlert2Module,
    SweetAlert2Module.forRoot(),
    BrowserModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatCardModule,MatButtonModule,MatProgressBarModule,MatIconModule,MatToolbarModule
    ,MatSidenavModule,MatDividerModule,NgxTypedJsModule,MatListModule,
    CommonModule, MatPaginatorModule,
    MatDatepickerModule,MatNativeDateModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    MatSortModule,
    MatIconModule,
    MatFormFieldModule,SweetAlert2Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
