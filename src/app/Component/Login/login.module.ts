import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import {NgxTypedJsModule} from 'ngx-typed-js';
import { MatListModule } from '@angular/material/list';
import { AddAccountComponent } from './add-account/add-account.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';
import { HomeComponent } from './home/home.component';
import { SweetAlert2Module } from "@sweetalert2/ngx-sweetalert2";
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    LoginComponent,
    MenuComponent,
    AddAccountComponent,
    HomeComponent,
    ProfileComponent,
 
  ],
  imports: [
    BrowserModule,
    CommonModule,
    LoginRoutingModule,
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
  exports: [LoginRoutingModule]
})
export class LoginModule { }
