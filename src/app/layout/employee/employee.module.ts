import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './employee.component';
import { AddEditEmployeeComponent } from './add-edit-employee/add-edit-employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeRoutingModule } from './employee.routing';

@NgModule({
  imports: [CommonModule, EmployeeRoutingModule],
  declarations: [
    EmployeeComponent,
    AddEditEmployeeComponent,
    EmployeeListComponent,
  ],
})
export class EmployeeModule {}
