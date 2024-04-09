import {Component} from '@angular/core';
import {UntypedFormBuilder, UntypedFormGroup, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import {login} from '../../store/auth/auth.actions';


@Component({
  templateUrl: './login-3.component.html'
})

export class Login3Component {
  loginForm: UntypedFormGroup;
  constructor(private fb: UntypedFormBuilder, private store: Store) {
  }

  submitForm(): void {

    // tslint:disable-next-line:forin
    for (const i in this.loginForm.controls) {
      this.loginForm.controls[i].markAsDirty();
      this.loginForm.controls[i].updateValueAndValidity();
    }

    if (this.loginForm.valid) {
      console.log('Valid!', this.loginForm.value);
      this.store.dispatch(login({username: this.loginForm.value.userName, password: this.loginForm.value.password}));
    }
  }


  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]]
    });
  }
}
