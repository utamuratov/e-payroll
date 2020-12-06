import { Injectable } from '@angular/core';
import { Sort } from '../layout/employee/employee-list/sort.model';
import { Employee } from '../models/employee.model';
import { Data } from '../models/_data';
import { Search } from '../shared/filter/search.model';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  /**
   *
   */
  getAll(search: Search, sort: Sort): Array<Employee> {
    let data = Data.EMPLOYEES;
    if (search.searchText?.length > 0) {
      data = data.filter(
        (w) =>
          w.employeeNumber.includes(search.searchText) ||
          w.firstName.includes(search.searchText)
      );
    }

    if (search.status != null && search.status >= 0) {
      data = data.filter((w) => w.status === search.status);
    }

    data = data.sort(
      (a, b) =>
        (sort.employeeNumber
          ? ('' + a.employeeNumber).localeCompare(b.employeeNumber)
          : ('' + b.employeeNumber).localeCompare(a.employeeNumber)) ||
        (sort.employeeFirstName
          ? ('' + a.firstName).localeCompare(b.firstName)
          : ('' + b.firstName).localeCompare(a.firstName))
    );

    return data.map((w) => ({
      ...w,
      age: new Date().getFullYear() - new Date(w.dateOfBirth).getFullYear(),
    }));
  }

  /**
   *
   */
  getById(id: number): Employee {
    return Data.EMPLOYEES.find((w) => w.id === id);
  }

  create(model: Employee): boolean {
    model.id = Data.EMPLOYEES.reduce((a, b) => (a > b.id ? a : b.id), 0) + 1;
    Data.EMPLOYEES.push(model);
    return true;
  }

  update(model: Employee): boolean {
    Data.EMPLOYEES = Data.EMPLOYEES.filter((w) => w.id !== model.id);
    Data.EMPLOYEES.push(model);
    return true;
  }

  /**
   *
   */
  constructor() {}
}
