import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import Student from 'src/app/models/Student';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
})
export class ContainerComponent implements OnInit {
  constructor(private _students: StudentsService) {}
  students!: Observable<Student[]>;
  ngOnInit(): void {
    this.students = this._students.getStudents();
  }
}
