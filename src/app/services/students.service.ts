import { Injectable } from '@angular/core';
import { ApicallsService } from './apicalls.service';
import Student from '../models/Student';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class StudentsService extends ApicallsService<Student[]> {
  constructor(protected override http: HttpClient) {
    super(http);
  }

  getStudents() {
    return this.getData('students/list');
  }

  postStudents(student: any) {
    return this.postData('students/add', [student]);
  }
}
