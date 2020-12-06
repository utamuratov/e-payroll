import { isDate } from 'util';
import { SelectItem } from './select-item.model';

export class Employee {
  /**
   *
   */
  id: number;

  /**
   *
   */
  employeeNumber: string;

  /**
   *
   */
  firstName: string;

  /**
   *
   */
  lastName: string;

  /**
   *
   */
  gender: number;

  /**
   *
   */
  dateOfBirth: string;

  /**
   *
   */
  dateJoined: string;

  /**
   *
   */
  status: number;

  /**
   *
   */
  subFactory: number;

  /**
   *
   */
  division: number;

  /**
   *
   */
  department: number;

  /**
   *
   */
  idType: number;

  /**
   *
   */
  idCard: string;

  /**
   *
   */
  employeeType: number;

  /**
   *
   */
  city: number;

  /**
   *
   */
  familyStatus: number;

  /**
   *
   */
  bank: number;

  /**
   *
   */
  account: number;

  /**
   *
   */
  branch: number;

  /**
   *
   */
  zipCode: string;

  /**
   *
   */
  street: string;

  /**
   *
   */
  phone: string;

  /**
   *
   */
  mobilePhone: string;

  /**
   *
   */
  coupleFirstName: string;

  /**
   *
   */
  coupleIdCard: string;

  /**
   *
   */
  age = 0;

  constructor(
    id: number,
    employeeNumber: string,
    firstName: string,
    lastName: string,
    gender: number,
    dateOfBirth: string,
    dateJoined: string,
    subFactory: number,
    department: number,
    idType: number,
    idCard: string,
    status: number,
    employeeType: number,
    bank: number,
    account: number,
    branch: number,
    division: number
  ) {
    this.id = id;
    this.employeeNumber = employeeNumber;
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.dateOfBirth = dateOfBirth;
    this.dateJoined = dateJoined;
    this.subFactory = subFactory;
    this.department = department;
    this.idType = idType;
    this.idCard = idCard;
    this.status = status;
    this.employeeType = employeeType;
    this.bank = bank;
    this.account = account;
    this.branch = branch;
    this.division = division;
  }
}
