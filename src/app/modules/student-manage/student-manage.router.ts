import { Routes, RouterModule } from '@angular/router';

import { StudentListComponent } from './student-list/student-list.component';
import { TemporaryClassComponent } from './temporary-class/temporary-class.component';

const StudentManageRouters: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'studentList'
    },
    {
        path: 'studentList',
        component: StudentListComponent
    },
    {
        path: 'temporaryClass',
        component: TemporaryClassComponent
    }
];

export const routing = RouterModule.forChild(StudentManageRouters);