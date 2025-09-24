
import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';
import { Employee } from './employee.model';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html'
})
export class EmployeeComponent implements OnInit {
  employees: Employee[] = [];
  newEmployee: Employee = { id: 0, name: '', position: '' };

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe(data => {
      this.employees = data;
    });
  }

  addEmployee(): void {
    if (this.newEmployee.name && this.newEmployee.position) {
      this.newEmployee.id = Date.now();
      this.employees.push({ ...this.newEmployee });
      this.newEmployee = { id: 0, name: '', position: '' };
    }
  }

  deleteEmployee(id: number): void {
    this.employees = this.employees.filter(emp => emp.id !== id);
  }
}
