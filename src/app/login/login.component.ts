import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardService } from '../dashboard/dashboard.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _data: DashboardService, private _route: Router) { }
  username: string;
  password: string;

  ngOnInit(): void {
  }

  onLogin() {
    const cred = {
      user_name: this.username,
      user_password: this.password
    }
    this._data.checkUser(cred).subscribe(
      (data: any) => {
        console.log(data);
        if (data.length === 1) {
          localStorage.setItem('user_id', data[0].user_id);
          localStorage.setItem('user_name', data[0].user_name);
          console.log(localStorage.getItem('user_id'));
          this._route.navigate(['/nav/dashboard']);
        } else {
          alert('Wrong Credentials');
        }
      }
    );
  }

}
