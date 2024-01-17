import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
})
export class ReactiveFormComponent {
  myReactiveForm: FormGroup | any;
  myProjectForm: FormGroup | any;
  sumitted = false;
  genders = ['male', 'Female'];
  projectName = ['lalit', 'nandu'];
  notAllowseName = ['lalit', 'mahesh'];
  userDetail = {
    name: '',
    email: '',
    about: '',
    course: '',
    gender: '',
    skills: '',
  };

  ngOnInit(): void {
    this.myReactiveForm = new FormGroup({
      userData: new FormGroup({
        name: new FormControl('', [
          Validators.required,
          this.naName.bind(this),
        ]),
        email: new FormControl(
          '',
          [Validators.required, Validators.email],
          this.naEmail.bind(this)
        ),
      }),
      about: new FormControl(null),
      course: new FormControl('Angualr'),
      gender: new FormControl('male'),
      skills: new FormArray([new FormControl(null)]),
    });
  }

  //--------------------------------------------//

  onSubmit() {
    this.sumitted = true;
    console.log(this.myReactiveForm.value.userData.name);
    console.log(this.myReactiveForm.value.userData.email);
    this.userDetail.name = this.myReactiveForm.value.userData.name;
    this.userDetail.email = this.myReactiveForm.value.userData.email;
    this.userDetail.about = this.myReactiveForm.value.about;
    this.userDetail.course = this.myReactiveForm.value.course;
    this.userDetail.gender = this.myReactiveForm.value.gender;
    this.userDetail.skills = this.myReactiveForm.value.skills;
    // this.myReactiveForm.reset();
  }

  // Add new skills
  onAddskill() {
    (<FormArray>this.myReactiveForm.get('skills')).push(new FormControl(null));
    return false;
  }

  // Already have email and name in the data
  naName(control: FormControl | any) {
    console.log(control);
    if (this.notAllowseName.indexOf(control.value) !== -1) {
      return { nameIsNotAllow: true };
    }
    return null;
  }

  naEmail(controls: FormControl | any): Promise<any> | Observable<any> | any {
    const myResponse = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (controls.value === 'd@d') {
          resolve({ emailNotAllowed: true });
        } else {
          resolve(null);
        }
      }, 1200);
    });
    return myResponse;
  }
}
