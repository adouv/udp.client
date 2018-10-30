import { Routes, RouterModule } from '@angular/router';

import { PracticeComponent } from './practice/practice.component';
import { LibraryComponent } from './library/library.component';
import { SubjectiveProblemComponent } from './subjective-problem/subjective-problem.component';
import { LineResultComponent } from './answer-result/line-result/line-result.component';
import { PieChartComponent } from '../../_components/pie-chart/pie-chart.component';
import { PieResultComponent } from './answer-result/pie-result/pie-result.component';
import { ObjectiveQuestionComponent } from './answer-result/objective-question/objective-question.component';
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
        path: 'subjective-problem',
        component: SubjectiveProblemComponent
    },
    {
        path: 'line-result',
        component: LineResultComponent
    },
    {
        path: 'pie-result',
        component: PieResultComponent
    },
    {
        path: 'objective-question',
        component: ObjectiveQuestionComponent
    },
    {
        path: 'noteTaking',
        component: NoteTakingComponent
    }
    
];

export const routing = RouterModule.forChild(ClassroomExercisesRouters) ;
