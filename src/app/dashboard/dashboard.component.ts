import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardService } from './dashboard.service';
import { formdetails } from './formdetails';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userallforms: formdetails[];
  formfields: formdetails;
  user_id: string;
  user_name: string;
  form_id: number = 2;
  constructor(private _dashboard: DashboardService, private _route: Router) { }

  ngOnInit(): void {
    this.user_id = localStorage.getItem('user_id');
    this.user_name = localStorage.getItem('user_name');
    console.log(this.user_id)
    this._dashboard.getallforms(this.user_id).subscribe(
      (data: formdetails[]) => {
        this.userallforms = data;
        console.log(data);
        console.log(this.userallforms);
      }
    );
  }

  openform(item) {
    this._route.navigate(['nav/formdetails', item.form_id]);
  }
  logout() {
    localStorage.clear()
    this._route.navigate(['/']);
  }
}

