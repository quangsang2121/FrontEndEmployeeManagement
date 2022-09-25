import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from './employee';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  
  private baseURL= "/api/v1/employees";

  constructor(private httpClient :HttpClient) { }

  getEmployeesList() : Observable<Employee[]>{

    return this.httpClient.get<Employee[]>(`${this.baseURL}`);
  }

  createEmployee(employee : Employee) : Observable<Object>{
    return this.httpClient.post('/api/v1/employees' , employee);
  }

  getEmployeeById(id : number) :Observable<Employee> {
    return this.httpClient.get<Employee>(`${this.baseURL}/${id}`)
  }

  updateEmployee(id: number, employee: Employee): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, employee);
  }
}
