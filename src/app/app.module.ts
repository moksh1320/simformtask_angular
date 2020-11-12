import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SignupLoginComponent } from './dashboard/signup-login/signup-login.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormcreatorComponent } from './formcreator/formcreator.component';
import { LoginComponent } from './login/login.component';
import { DisplayFormComponent } from './display-form/display-form.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SignupLoginComponent,
    FormcreatorComponent,
    LoginComponent,
    DisplayFormComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
