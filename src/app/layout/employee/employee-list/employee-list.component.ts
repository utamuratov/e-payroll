import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';
import { DEPARTMENTS, DIVISIONS, STATUSES, SUBFACTORIES } from 'src/app/models/_data';
import { EmployeeService } from 'src/app/services/employee.service';
import { Search } from 'src/app/shared/filter/search.model';
import { Sort } from './sort.model';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss'],
})
export class EmployeeListComponent implements OnInit {
  /**
   *
   */
  employees: Array<Employee>;

  /**
   *
   */
  subFactories = SUBFACTORIES;

  /**
   *
   */
  divisions = DIVISIONS;

  /**
   *
   */
  departments = DEPARTMENTS;

  /**
   *
   */
  statuses = STATUSES;

  /**
   *
   */
  search: Search = new Search();

  /**
   *
   */
  sort: Sort = new Sort();

  /**
   *
   */
  constructor(private employeeService: EmployeeService) {}

  /**
   *
   */
  ngOnInit() {
    this.loadEmployees();
  }

  /**
   *
   */
  loadEmployees() {
    this.employees = this.employeeService.getAll(this.search, this.sort);
  }

  /**
   *
   */
  searchChanged(e: Search) {
    this.search = e;
    this.loadEmployees();
  }
}
