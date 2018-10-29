import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { routing } from './student-manage.router';
import { StudentListComponent } from './student-list/student-list.component';
import { TemporaryClassComponent } from './temporary-class/temporary-class.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    routing
  ],
  declarations: [StudentListComponent, TemporaryClassComponent]
})
export class StudentManageModule { }
