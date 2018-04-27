import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
// import { UserService, AlertService } from '../../_services';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  model: any = {};
  loading = false;

  constructor(
      private router: Router) { }

  register() {
      /* this.loading = true;
      this.userService.create(this.model)
          .subscribe(
              data => {
                debugger
                  this.alertService.success('Registration successful', true);
                  this.router.navigate(['/signIn']);
              },
              error => {
                  this.alertService.error(error);
                  this.loading = false;
              }); */
  }

  ngOnInit() {
  }

}
