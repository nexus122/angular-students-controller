import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export abstract class ApicallsService<T> {
  private readonly ApiUrl = 'http://localhost:49153/';
  constructor(protected http: HttpClient) {}

  getData(param: string): Observable<T> {
    return this.http.get<T>(`${this.ApiUrl}${param}`);
  }
  postData(params: string, body: T): void {
    this.http.post(`${this.ApiUrl}${params}`, body);
  }
}
