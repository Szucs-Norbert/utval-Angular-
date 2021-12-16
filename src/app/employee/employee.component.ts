import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employees: Employee[]= [];  //üres tömbként inicializáltuk 
  url= 'http://localhost:3000/employees';
 
  constructor() { }

  ngOnInit(): void {
  }

}
