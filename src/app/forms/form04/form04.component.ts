import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form04',
  templateUrl: './form04.component.html',
  styleUrls: ['./form04.component.scss']
})
export class Form04Component implements OnInit {

  formGroup : FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.buildForm();
  }
  private buildForm(){
    const dateLength = 10;
    const today = new Date().toISOString().substring(0, dateLength);
    const name = 'JOHN DOE';
    const minPassLength = 4;
    this.formGroup = this.fb.group({
      registeredOn: today,
      name: ['', Validators.required],
      email: ['', [
        Validators.required, Validators.email
      ]],
      password: ['', [
        Validators.required,
        Validators.minLength(minPassLength),
        this.validatePassword
      ]]
    });
  }
  private validatePassword(control: AbstractControl) {
    const password = control.value;
    let error = null;
    if (!password.includes('$')) {
      error = { ...error, 'needs a dollar symbol':'dollar' };
    }
    if (!parseFloat(password[0])) {
      error = { ...error, 'must start with a number':'number' };
    }
    return error;
  }
  public register() {
    const user = this.formGroup.value;
    console.log(user);
  }
  public getError(controlName: string): string[] {
    let error =  [];
    const control = this.formGroup.get(controlName);
    if (control.touched && control.errors != null) {
     // error = JSON.stringify(control.errors);
      error = [...Object.keys(control.errors)];
    }
    return error;
  }
}
