import { Routes, RouterModule } from '@angular/router';

import { StudentListComponent } from './student-list/student-list.component';

const StudentManageRouters: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'studentList'
    },
    {
        path: 'studentList',
        component: StudentListComponent
    }
];

export const routing = RouterModule.forChild(StudentManageRouters);