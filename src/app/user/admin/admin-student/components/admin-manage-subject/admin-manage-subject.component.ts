import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-admin-manage-subject',
  templateUrl: './admin-manage-subject.component.html',
  styleUrls: ['./admin-manage-subject.component.scss']
})
export class AdminManageSubjectComponent implements OnInit {

  constructor() { }

  userForm = new FormGroup({
    name: new FormControl('vipin', [Validators.required, Validators.minLength(4), Validators.maxLength(10)])
    /* email: new FormControl(),
    address: new FormGroup({
      street: new FormControl(),
      city: new FormControl(),
      postalcode: new FormControl(null, [Validators.pattern('^[1-9][0-9]{4}$')])
    }) */
  })

  ngOnInit() {
  }
  
  onSubmit() {
    console.log(this.userForm.value);
  }

}
