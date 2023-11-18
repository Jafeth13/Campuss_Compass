import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component'
import { MenuComponent } from './menu/menu.component';
import { AddAccountComponent } from './add-account/add-account.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'menu',component:MenuComponent},
  {path:'account_add',component:AddAccountComponent},
  {path:'home',component:HomeComponent},
  {path:'profile',component:ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
