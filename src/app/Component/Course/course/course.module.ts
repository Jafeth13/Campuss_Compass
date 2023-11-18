
import { CommonModule } from '@angular/common';

import { CourseRoutingModule } from './course-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field'
import { SearchCourseComponent } from '../search-course/search-course.component';
import { CreateCourseComponent } from '../create-course/create-course.component';
import { UpdateCourseComponent } from '../update-course/update-course.component';
import { SeeCourseComponent } from '../see-course/see-course.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegistrationComponent } from '../registration/registration.component';
import { ManagementAcadenicComponent } from '../management-acadenic/management-acadenic.component';
import { FinanceComponent } from '../finance/finance.component';
import { InfoRegistrationComponent } from '../info-registration/info-registration.component';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    CreateCourseComponent,
    SearchCourseComponent,
    UpdateCourseComponent,
    SeeCourseComponent,
    RegistrationComponent,
    ManagementAcadenicComponent,
    FinanceComponent,
    InfoRegistrationComponent,
  ],
  imports: [
    CommonModule,
    CourseRoutingModule,
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    MatSortModule,
    MatIconModule,
    MatFormFieldModule,
    ReactiveFormsModule, 
    MatStepperModule,
    
    MatButtonModule,
    

    
    
  ] , exports: [CourseRoutingModule]
})
export class CourseModule { }
