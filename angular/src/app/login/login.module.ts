import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { RegisterComponent } from './components/register/register.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SharedModule } from '../shared/shared.module';
import { AuthService } from '../shared/services/auth.service';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    SignInComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    SharedModule
  ],
  providers: [AuthService]
})
export class LoginModule { }
