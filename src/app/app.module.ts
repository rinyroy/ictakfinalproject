import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { DonorsComponent } from './donors/donors.component';
import { NewDonorComponent } from './newdonor/newdonor.component';
import {DonorService} from './donorservice.service';
import { LoginComponent } from './login/login.component';
import {AuthService} from './auth.service';
import {AuthGuard} from './auth.guard';
import { TokenInterceptorService } from './token-interceptor.service';
import { UpdateDonorComponent } from './update-donor/update-donor.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileDonorComponent } from './profile-donor/profile-donor.component';


@NgModule({
  declarations: [
    AppComponent,
    DonorsComponent,
    NewDonorComponent,
    LoginComponent,
    UpdateDonorComponent,
    AboutusComponent,
    SignupComponent,
    DonorsComponent,
    ProfileDonorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [AuthService,AuthGuard,DonorService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
