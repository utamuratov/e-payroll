import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEditEmployeeComponent } from './add-edit-employee/add-edit-employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeComponent } from './employee.component';

const routes: Routes = [
  {
    path: '',
    component: EmployeeComponent,
    data: {
      breadcrumb: 'Employee',
    },
    children: [
      {
        path: '',
        component: EmployeeListComponent,
        data: {
          breadcrumb: null,
        },
      },
      {
        path: 'add',
        component: AddEditEmployeeComponent,
      },
      {
        path: 'edit/:id',
        component: AddEditEmployeeComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeeRoutingModule {}
