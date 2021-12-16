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
  fullname="";
  city="";
  salary=0;
 
  constructor() { }

  ngOnInit(): void {
    fetch(this.url)
    .then(Response => Response.json()
    .then(result=> {
      console.log(result);
      this.employees=result;
    }));
  }

  addButton(){
    //alert("ige");
    fetch(this.url, {
      method: 'post',
      body:JSON.stringify({
        fullname: this.fullname,
        city: this.city,
        salary: this.salary,
      }),
      
      headers:{
        "Content-Type":"application/json"
      }

    })
    .then(Response => Response.json())
      .then(result =>{
        console.log(result);
      });
  }

}
