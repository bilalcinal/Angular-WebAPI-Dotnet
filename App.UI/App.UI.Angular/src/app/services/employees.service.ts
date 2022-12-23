import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) {}

  getAllEmployees(): Observable<Employee[]>
  {
     return this.http.get<Employee[]>(this.baseApiUrl + '/api/employees')
  }
  addEmployee(addEmployeeRequest: Employee) : Observable<Employee>
  {
    // addEmployeeRequest.id ='0000000-0000-0000-0000-000000000000';
    const dataWillBeSent: Partial<Employee> = {
      email: addEmployeeRequest.email,
      department: addEmployeeRequest.department,
      name: addEmployeeRequest.name,
      phone: addEmployeeRequest.phone,
      salary: addEmployeeRequest.salary
    }
    return this.http.post<Employee>(this.baseApiUrl + '/api/employees', dataWillBeSent);
  }

  getEmployee(id : string) : Observable<Employee>
  {
     return this.http.get<Employee>(this.baseApiUrl + ' /api/employees/' + id );
  }
}
