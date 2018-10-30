import { Routes, RouterModule } from '@angular/router';

import { PracticeComponent } from './practice/practice.component';
import { LibraryComponent } from './library/library.component';
import { SubjectiveProblemComponent } from './subjective-problem/subjective-problem.component';
import { NoteTakingComponent } from './note-taking/note-taking.component';
const ClassroomExercisesRouters: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'practice'
    },
    {
        path: 'practice',
        component: PracticeComponent
    },
    {
        path: 'library',
        component: LibraryComponent
    },
    {
        path: 'subjectiveProblem',
        component: SubjectiveProblemComponent
    },
    {
        path: 'noteTaking',
        component: NoteTakingComponent
    }
];

export const routing = RouterModule.forChild(ClassroomExercisesRouters) ;
