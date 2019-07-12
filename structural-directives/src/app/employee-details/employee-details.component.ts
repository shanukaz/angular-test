import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-details',
  template: `
      <h2>Employee Details</h2>
      <ul *ngFor="let employee of employees">
        <li>{{employee.id}}.{{employee.name}} -- {{employee.age}}</li>
      </ul>
  `,
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
