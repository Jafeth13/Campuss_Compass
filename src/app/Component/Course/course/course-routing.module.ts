import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchCourseComponent } from '../search-course/search-course.component';
import { CreateCourseComponent } from '../create-course/create-course.component';
import { RegistrationComponent } from '../registration/registration.component';
import { ManagementAcadenicComponent } from '../management-acadenic/management-acadenic.component';
import { FinanceComponent } from '../finance/finance.component';
import { InfoRegistrationComponent } from '../info-registration/info-registration.component';

const routes: Routes = [
  {path:'Course',component:SearchCourseComponent},
  {path:'Create_Course',component:CreateCourseComponent},
  {path:'Registration',component:RegistrationComponent},
  {path:'Management',component:ManagementAcadenicComponent},
  {path:'Finance',component:FinanceComponent},
  {path:'infoRegistration/:id_course',component:InfoRegistrationComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseRoutingModule { }
