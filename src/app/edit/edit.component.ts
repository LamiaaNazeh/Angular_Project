import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../student.service';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  student: any;
  angForm: FormGroup;
  title = 'Edit Student';
  constructor(private route: ActivatedRoute, private router: Router, private service: StudentService, private fb: FormBuilder) {
    this.createForm();
   }
   createForm() {
    this.angForm = this.fb.group({
      id:['' , Validators.required],
      name: ['', Validators.required ],
      age: ['', Validators.required ]
   });
  }

updateStudent(id,name, age) {
  this.route.params.subscribe(params => {
  this.service.updateStudent(id,name, age,params['id']);
  this.router.navigate(['']);
});
}


ngOnInit() {
  this.route.params.subscribe(params => {
    this.student = this.service.editStudent(params['id']).subscribe(res => {
      this.student = res;
    });
  });
 
}

}
