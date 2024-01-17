import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css'],
})
export class TemplateFormComponent {
  @ViewChild('form') form: NgForm | any;

  dafulatValue = 'Angular';
  defaultGender = 'Male';
  submitted = false;
  genders = [
    { id: 1, value: 'Male' },
    { id: 2, value: 'Female' },
  ];
  user = {
    name: '',
    email: '',
    password: '',
    course: '',
    gender: '',
  };

  onSubmit() {
    this.submitted = true;
    console.log(this.form.value);
    this.user.name = this.form.value.name;
    this.user.email = this.form.value.email;
    this.user.password = this.form.value.password;
    this.user.course = this.form.value.course;
    this.user.gender = this.form.value.gender;
  }
  setValue() {
    // this.form.setValue({
    //   name: 'Himashu',
    //   email: 'lalit@lalit.com',
    //   password: '123456',
    //   course: '',
    //   gender: '',
    // });
    this.form.form.patchValue({
      name: 'Himanshu',
      email: 'lalit@lalit.com',
      password: '123456',
    });
    return false;
  }
}
