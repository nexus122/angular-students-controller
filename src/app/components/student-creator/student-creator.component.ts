import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import Student from 'src/app/models/Student';
import { StudentsService } from 'src/app/services/students.service';
@Component({
  selector: 'app-student-creator',
  templateUrl: './student-creator.component.html',
  styleUrls: ['./student-creator.component.scss'],
})
export class StudentCreatorComponent implements OnInit {
  newStudent = new FormGroup({
    name: new FormControl('holi', Validators.required),
    surname: new FormControl('manoli', Validators.required),
  });
  constructor(private _students: StudentsService) {}

  ngOnInit(): void {}

  createStudent() {
    this._students.postStudents(this.newStudent);
  }
}
