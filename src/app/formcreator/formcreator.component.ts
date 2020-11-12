import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardService } from '../dashboard/dashboard.service';
import { formdetails } from '../dashboard/formdetails';

@Component({
  selector: 'app-formcreator',
  templateUrl: './formcreator.component.html',
  styleUrls: ['./formcreator.component.css']
})
export class FormcreatorComponent implements OnInit {

  constructor(private _service: DashboardService, private _router: Router) { }
  form_name = '';
  formfields = new formdetails();

  ngOnInit(): void {
    this.formfields.fk_user_id = +localStorage.getItem('user_id');
  }

  toggleCheck(event: any) {
    console.log(event);
    let target = event.target || event.srcElement || event.currentTarget;
    let idAttr = target.attributes.id;
    let value = idAttr.nodeValue;
    console.log(value);
    if (this.formfields[value] === 'undefined' || this.formfields[value] === 1) {
      this.formfields[value] = 0;
    } else {
      this.formfields[value] = 1;
    }
    // this.formfields[value] = 'form'
    // console.log(this.formfields.form_name);
    console.log(this.formfields);
  }

  saveForm() {
    console.log(this.formfields.form_name);
    if (this.formfields.form_name != null) {
      this._service.createForm(this.formfields).subscribe(
        (data: any) => {
          console.log(data);
          this._router.navigate(['/nav/dashboard']);
        }
      );
    } else {
      alert('Please Enter Form Name');
    }
  }
}
