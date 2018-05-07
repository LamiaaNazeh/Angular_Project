import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class StudentService {

  constructor(private http: HttpClient) { }

  addStudent(id,name, age) {
    const uri = 'http://localhost:4000/students/add';
    const obj = {
      id:id,
      name: name,
      age: age
    };

    this.http.post(uri, obj)
        .subscribe(res => console.log('Done'));
  }


  getStudents() {
   // return this.http.get("http://localhost:4000/students");
    
    const uri = 'http://localhost:4000/students';
    return this
            .http
            .get(uri)
            .map(res => {
              return res;
            });
  }

  editStudent(idd) {
    const uri = 'http://localhost:4000/students/edit/' + idd;
    return this
            .http
            .get(uri)
            .map(res => {
              return res;
            });
  }

  updateStudent(id,name, age,idd) {
    const uri = 'http://localhost:4000/students/update/' + idd;

    const obj = {
     id:id,
      name: name,
      age: age
    };
    this
      .http
      .post(uri, obj)
      .subscribe(res => console.log('Done'));
  }
  deleteStudent(id) {
    const uri = 'http://localhost:4000/students/delete/' + id;

        return this
            .http
            .get(uri)
            .map(res => {
              return res;
            });
  }
}