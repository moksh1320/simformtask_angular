import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  url = "http://localhost:3000/client/";
  geturl = "http://localhost:3000/form/";
  constructor(private _http: HttpClient) { }
  createuser(user: any) {
    const body = JSON.stringify(user);
    console.log(body);
    const head = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.post(this.url, body, { headers: head });
  }
  getallforms(fk_user_id: any) {
    let body = JSON.stringify('BODY');
    return this._http.post(this.geturl + fk_user_id, body);
  }
  getformdetails(form_id: any) {
    return this._http.get(this.geturl + form_id);
  }
  createForm(form: any) {
    const body = JSON.stringify(form);
    console.log(body);
    const head = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.post(this.geturl, body, { headers: head });
  }
  checkUser(cred: any) {
    const body = JSON.stringify(cred);
    console.log(body);
    const head = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.post(this.url + 'check', body, { headers: head });
  }
}
