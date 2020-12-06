import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { debug } from 'console';
import { Employee } from 'src/app/models/employee.model';
import { SelectItem } from 'src/app/models/select-item.model';
import {
  ACCOUNTS,
  BANKS,
  BRANCHES,
  CITIES,
  Data,
  DEPARTMENTS,
  DIVISIONS,
  EMPLOYEE_TYPES,
  FAMILY_STATUS,
  ID_TYPES,
  STATUSES,
  SUBFACTORIES,
} from 'src/app/models/_data';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-add-edit-employee',
  templateUrl: './add-edit-employee.component.html',
  styleUrls: ['./add-edit-employee.component.scss'],
})
export class AddEditEmployeeComponent implements OnInit {
  /**
   *
   */
  id: number;

  /**
   *
   */
  isNew: boolean;

  /**
   *
   */
  isActiveMainTab = true;

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
  idTypes = ID_TYPES;

  /**
   *
   */
  cities = CITIES;

  /**
   *
   */
  employeeTypes = EMPLOYEE_TYPES;

  /**
   *
   */
  statuses = STATUSES;

  /**
   *
   */
  familyStatuses = FAMILY_STATUS;

  /**
   *
   */
  banks = BANKS;

  /**
   *
   */
  branches = BRANCHES;

  /**
   *
   */
  accounts = ACCOUNTS;

  /**
   *
   */
  employees = Data.EMPLOYEES;

  /**
   *
   */
  form: FormGroup;

  /**
   *
   */
  isFirst = false;

  /**
   *
   */
  isLast = false;

  /**
   *
   */
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private employeeService: EmployeeService,
    private formBulder: FormBuilder
    ) {
    router.events
      .subscribe(val => {
        const isRouterChange = val instanceof NavigationEnd;
        if (isRouterChange) {
          this.id = +this.route.snapshot.params.id;
          this.initData();
          this.isFirst = this.employees[0].id === this.id;
          this.isLast = this.employees[this.employees.length - 1].id === this.id;
        }
      });
    }

  ngOnInit() {
  }

  /**
   *
   */
  initData() {
    this.formInit();
    this.id = +this.route.snapshot.params.id;
    this.isNew = true;
    if (this.id > 0) {
      this.isNew = false;
      this.getById(this.id);
    }
  }

  /**
   *
   */
  formInit() {
    this.form = this.formBulder.group({
      employeeNumber: ['', Validators.required],
      firstName: [, Validators.required],
      lastName: ['', Validators.required],
      gender: [, Validators.required],
      dateOfBirth: ['', Validators.required],
      dateJoined: ['', Validators.required],
      status: [, Validators.required],
      subFactory: [, Validators.required],
      division: [],
      department: [, Validators.required],
      idType: [, Validators.required],
      idCard: ['', Validators.required],
      employeeType: [, Validators.required],
      city: [],
      zipCode: [''],
      street: [''],
      phone: [''],
      mobilePhone: [''],
      familyStatus: [],
      coupleFirstName: {value: '', disabled: true},
      coupleIdCard: {value: '', disabled: true},
      bank: [, Validators.required],
      account: [, Validators.required],
      branch: [, Validators.required],
    });
  }

  /**
   *
   */
  getById(id: number) {
    const employee = this.employeeService.getById(id);
    if (employee) {
      this.setFormFromModel(employee);
      return;
    }
    this.router.navigate(['employee']);
  }

  /**
   *
   */
  setFormFromModel(model: Employee) {
    this.form.patchValue(model);
  }

  /**
   *
   */
  first() {
    const first = this.employees[0];
    if (first) {
      this.router.navigate(['employee', 'edit', first.id]);
    }
  }

  /**
   *
   */
  last() {
    const last = this.employees[this.employees.length - 1];
    if (last) {
      this.router.navigate(['employee', 'edit', last.id]);
    }
  }

  /**
   *
   */
  prev(id: number) {
    const index = this.employees.findIndex(w => w.id === id);
    const employee = this.employees[index - 1];
    if (employee) {
      this.router.navigate(['employee', 'edit', employee.id]);
    }
  }

  /**
   *
   */
  next(id: number) {
    const index = this.employees.findIndex(w => w.id === id);
    const employee = this.employees[index + 1];
    if (employee) {
      this.router.navigate(['employee', 'edit', employee.id]);
    }
  }

  /**
   *
   */
  save() {
    if (!this.form.valid) {
      alert('Invalid');
      return;
    }

    console.log(this.form.value);
    if (this.isNew) {
      this.create(this.form.value);
      return;
    }
    this.update({ id: this.id, ...this.form.value });
  }

  create(model: Employee) {
    if (this.employeeService.create(model)) {
      this.router.navigate(['employee']);
      return;
    }
    alert('Something wrong!');
  }

  update(model: Employee) {
    if (this.employeeService.update(model)) {
      this.router.navigate(['employee']);
      return;
    }
    alert('Something wrong!');
  }

  familyStatusChanged(item: SelectItem) {
    if (item.value === 1)  {
      this.form.controls.coupleFirstName.enable();
      this.form.controls.coupleIdCard.enable();
      return;
    }
    this.form.controls.coupleFirstName.disable();
    this.form.controls.coupleIdCard.disable();
  }
}
