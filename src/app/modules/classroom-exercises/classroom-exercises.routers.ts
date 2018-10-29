import { Routes, RouterModule } from '@angular/router';

import { PracticeComponent } from './practice/practice.component';

const ClassroomExercisesRouters: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'practice'
    },
    {
        path: 'practice',
        component: PracticeComponent
    }
];

export const routing = RouterModule.forChild(ClassroomExercisesRouters);