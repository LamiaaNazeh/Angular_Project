import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  students:any;
  constructor(private http: HttpClient, private router: Router,private service: StudentService) { }

  getStudents() {
    this.service.getStudents().subscribe(res => {
      console.log(res);
      this.students = res;

    },
    er=>{console.log(er)}
  );
  }

  deleteStudent(id , index) {
    this.service.deleteStudent(id).subscribe(res => {
      this.students.splice(index,1);
      console.log('Deleted');
      this.router.navigate(['']);
    }
  );

 
  
  }

  ngOnInit() {
    this.getStudents();
  
  }

}
