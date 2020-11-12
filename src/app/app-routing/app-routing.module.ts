import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthgardService } from '../authgard.service';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { SignupLoginComponent } from '../dashboard/signup-login/signup-login.component';
import { DisplayFormComponent } from '../display-form/display-form.component';
import { FormcreatorComponent } from '../formcreator/formcreator.component';
import { LoginComponent } from '../login/login.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: SignupLoginComponent },
  {
    path: 'nav', canActivate: [AuthgardService], children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'formcreator', component: FormcreatorComponent },
      { path: 'formdetails/:form_id', component: DisplayFormComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
