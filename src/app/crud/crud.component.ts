import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css'],
})
export class CrudComponent {
  @ViewChild('form') form: NgForm | any;
  loadding = false;
  studentId: any;
  genders = [
    { id: 1, value: 'Male' },
    { id: 2, value: 'Female' },
  ];
  data: any = [];
  defaultGender: any = 'Male';
  dafulatValue = 'Angular';
  datatitle = 'TemplateForm';
  errorMsg: any;
  studentData: any = [];
  editMode = false;
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.fetchData();
  }
  onSubmit(data: any) {
    if (!this.form.valid) {
      console.log('Enter all details');
      this.errorMsg = 'Fulfill all details';
    } else {
      this.http
        .post(`http://localhost:3000/student`, data)
        .subscribe((response) => {
          // console.log(response);
          this.fetchData();
        });
      this.form.reset();

      this.editMode = false;
      // console.log(data);
    }
  }
  fetchData() {
    this.http
      .get(`http://localhost:3000/student`)
      .subscribe((response: any) => {
        // console.log(response);
        this.studentData = response;
      });
  }
  onEdit(id: any) {
    this.studentId = id;
    this.http
      .get(`http://localhost:3000/student/${id}`)
      .subscribe((response: any) => {
        console.log(response);
        this.data = response;
      });
    this.editMode = true;
    console.log('click');
  }
  update(data: any) {
    console.log(this.studentId);
    this.http
      .put(`http://localhost:3000/student/${this.studentId}`, data)
      .subscribe((response: any) => {
        // console.log(response);
      });
    this.fetchData();
    this.editMode = false;
  }
  onDelete(id: any) {
    this.http
      .delete(`http://localhost:3000/student/${id}`)
      .subscribe((response: any) => {
        // console.log(response);
      });
    this.fetchData();
  }
}
