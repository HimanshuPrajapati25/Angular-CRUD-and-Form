import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-practice-form',
  templateUrl: './practice-form.component.html',
  styleUrls: ['./practice-form.component.css'],
})
export class PracticeFormComponent {
  @ViewChild('f') f: NgForm | any;

  defaultGender = 'male';
  defaultCoures = 'Angualr';
  sumitted = false;
  // genders = [
  //   { id: 1, value: 'Male' },
  //   { id: 2, value: 'Female' },
  // ];

  genders = ['male', 'Female'];
  userDetail = {
    name: '',
    email: '',
    about: '',
    course: '',
    gender: '',
  };

  onSubmit() {
    this.sumitted = true;

    this.userDetail.name = this.f.value.userData.name;
    this.userDetail.email = this.f.value.userData.email;

    this.userDetail.about = this.f.value.about;
    this.userDetail.course = this.f.value.course;
    this.userDetail.gender = this.f.value.gender;
  }
  onSetValue() {
    this.f.form.patchValue({
      userData: {
        name: 'Himanshu',
      },
      about: 'I am a Angular developer',
    });
    return false;
  }
}
