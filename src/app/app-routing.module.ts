import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes,RouterModule} from '@angular/router';
import { AuthGuard } from './auth.guard';
import { DonorsComponent } from './donors/donors.component'
import { NewDonorComponent } from './newdonor/newdonor.component';
import {LoginComponent} from './login/login.component';
import {AboutusComponent} from './aboutus/aboutus.component';
import {SignupComponent} from './signup/signup.component';
import { UpdateDonorComponent } from './update-donor/update-donor.component';
import { ProfileDonorComponent } from './profile-donor/profile-donor.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: '/donors',
    pathMatch: 'full'
  },
  
  {
    path: 'donors',
    component: DonorsComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'aboutus',
    component: AboutusComponent
  },
  {path:'add', 
  canActivate: [AuthGuard],
  component: NewDonorComponent,
},
{
  path:'update',
  component:UpdateDonorComponent
},
{
  path:'profile',
  component:ProfileDonorComponent
}
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
