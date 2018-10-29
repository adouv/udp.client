import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './student-manage.router';
import { StudentListComponent } from './student-list/student-list.component';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [StudentListComponent]
})
export class StudentManageModule { }
