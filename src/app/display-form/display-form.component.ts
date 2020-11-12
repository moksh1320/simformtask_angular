import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DashboardService } from '../dashboard/dashboard.service';
import { formdetails } from '../dashboard/formdetails';

@Component({
  selector: 'app-display-form',
  templateUrl: './display-form.component.html',
  styleUrls: ['./display-form.component.css']
})
export class DisplayFormComponent implements OnInit {

  constructor(private _actroute: ActivatedRoute, private _data: DashboardService) { }
  formfields: formdetails;
  form_id: number;

  ngOnInit(): void {
    this.form_id = this._actroute.snapshot.params['form_id'];
    this._data.getformdetails(this.form_id).subscribe(
      (data: formdetails[]) => {
        this.formfields = data[0];
        console.log(this.formfields);
      });
  }

}
