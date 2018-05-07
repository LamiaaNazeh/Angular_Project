import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  title = 'Add Student'
  angForm: FormGroup;
  constructor(private studentservice: StudentService,private router: Router, private fb: FormBuilder) {
    this.createForm();
   }
  createForm() {
    this.angForm = this.fb.group({
      id:['' , Validators.required],
      name: ['', Validators.required ],
      age: ['', Validators.required ]
   });
  }
  addStudent(id,name, age) {
      this.studentservice.addStudent(id,name,age);
      this.router.navigate(['']);
      }
  

  ngOnInit() {
  }

}
