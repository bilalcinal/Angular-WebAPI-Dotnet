import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit
{
   employees : Employee[] = [
    {
      id: 'c78787cucyhuc-0298-441c-afb5-1023914284912u4g70',
      name:'bilal cinal',
      email:'hbilalcinal@gmail.com',
      phone:  512954905,
      salary: 150000,
      department: 'software'
     }
   ];

   constructor(){}
  ngOnInit(): void {
    
  }
}
