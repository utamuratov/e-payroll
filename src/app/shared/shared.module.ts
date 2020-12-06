import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { RouterModule } from '@angular/router';
import { FilterComponent } from './filter/filter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  imports: [CommonModule, RouterModule, NgSelectModule, FormsModule, ReactiveFormsModule],
  declarations: [BreadcrumbComponent, FilterComponent],
  exports: [BreadcrumbComponent, FilterComponent, NgSelectModule, FormsModule, ReactiveFormsModule],
})
export class SharedModule {}
