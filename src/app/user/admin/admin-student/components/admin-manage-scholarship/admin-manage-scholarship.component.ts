import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-admin-manage-scholarship',
  templateUrl: './admin-manage-scholarship.component.html',
  styleUrls: ['./admin-manage-scholarship.component.scss'],

})
export class AdminManageScholarshipComponent implements OnInit {

  userForm: FormGroup;
  constructor(private _fromBuilder: FormBuilder) { }


  /*  userForm = new FormGroup({
     name: new FormControl('vipin', [Validators.required, Validators.minLength(4), Validators.maxLength(10)]),
     email: new FormControl(),
     address: new FormGroup({
       street: new FormControl(),
       city: new FormControl(),
       postalcode: new FormControl(null, [Validators.pattern('^[1-9][0-9]{5}$')])
     })
   }) */

  ngOnInit() {
    this.userForm = this._fromBuilder.group({
      name: ['vipin', [Validators.required, Validators.minLength(4), Validators.maxLength(10)]],
      email: [],
      address: this._fromBuilder.group({
        street: [],
        city: [],
        postalcode: [null, [Validators.pattern('^[1-9][0-9]{5}$')]]
      })
    })
  }

  onSubmit() {
    console.log(this.userForm.value);
  }
}
