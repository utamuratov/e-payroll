import { Employee } from './employee.model';
import { SelectItem } from './select-item.model';

export const STATUSES = [
  new SelectItem(0, 'Active'),
  new SelectItem(1, 'Inactive'),
];

export const SUBFACTORIES = [
  new SelectItem(1, '1234'),
  new SelectItem(2, '12345'),
  new SelectItem(0, '123456'),
];

export const DIVISIONS = [
  new SelectItem(0, 'Division 1'),
  new SelectItem(1, 'Division 2'),
];

export const DEPARTMENTS = [
  new SelectItem(0, 'Department1'),
  new SelectItem(1, 'Department2'),
];

export const ID_TYPES = [
  new SelectItem(0, 'Id type1'),
  new SelectItem(1, 'Id type2'),
];

export const CITIES = [
  new SelectItem(0, 'City 1'),
  new SelectItem(1, 'City 2'),
];

export const EMPLOYEE_TYPES = [
  new SelectItem(0, 'Employee type 1'),
  new SelectItem(1, 'Employee type 2'),
];

export const FAMILY_STATUS = [
  new SelectItem(0, 'Single'),
  new SelectItem(1, 'Married'),
];

export const BANKS = [new SelectItem(0, 'Bank1'), new SelectItem(1, 'Bank2')];

export const BRANCHES = [
  new SelectItem(0, 'Branch 1'),
  new SelectItem(1, 'Branch 2'),
];

export const ACCOUNTS = [
  new SelectItem(0, 'Account type 1'),
  new SelectItem(1, 'Account type 2'),
];

export class Data {
  public static EMPLOYEES = [
    new Employee(
      1,
      '112233',
      'Test',
      'Yisrael',
      1,
      '01/27/1989',
      '03/20/2010',
      0,
      1,
      0,
      '123 434 545',
      0,
      0,
      1,
      0,
      1,
      1
    ),
    new Employee(
      2,
      '112233',
      'John',
      'Yisrael',
      1,
      '01/27/1989',
      '03/20/2010',
      0,
      1,
      0,
      '123 434 545',
      0,
      0,
      1,
      0,
      1,
      1
    ),
    new Employee(
      3,
      '1123333',
      'Yisrael',
      'Yisrael',
      1,
      '01/27/1989',
      '03/20/2010',
      0,
      0,
      0,
      '123 432 334 545',
      1,
      0,
      1,
      1,
      1,
      0
    ),
  ];
}
