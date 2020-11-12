import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-signup-login',
  templateUrl: './signup-login.component.html',
  styleUrls: ['./signup-login.component.css']
})
export class SignupLoginComponent implements OnInit {
  name: string
  pass: string

  constructor(private _signupdata: DashboardService, private _route: Router) { }

  ngOnInit(): void {

  }
  submit() {
    console.log(this.name);
    const user = {
      user_name: this.name,
      user_password: this.pass
    };
    this._signupdata.createuser(user).subscribe(
      (data) => {
        console.log(data);
        alert('Registration Complete, please Login');
        this._route.navigate(['/']);
      })
  }

}
