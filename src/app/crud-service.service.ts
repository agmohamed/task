import { Employee } from './IEmployee';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { from, Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import{map} from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class CrudServiceService {

  formData:Employee= new Employee();
  
  protected url='http://localhost:5001/api/Employee';
  httpOptions={
    header:new HttpHeaders({
      'content-type':'application/json'
    }),
  };
  constructor(private http: HttpClient) { }

  GetEmployee(){
    return this.http.get(`${this.url}/employee`)
      .pipe(map(res=>res));
  }
  createEmployee(data):Observable<Employee>{
    return this.http.post<Employee>(this.url+'/employee/',JSON.stringify(data),{
      headers: new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8 '),
    })
    .pipe(map(res=>res));
  
  }
  postEmployee(){
   return this.http.post(this.url,this.formData);
  }
}
