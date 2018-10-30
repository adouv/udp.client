import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { routing } from './classroom-exercises.routers';
import { PracticeComponent } from './practice/practice.component';
import { LibraryComponent } from './library/library.component';
import { SubjectiveProblemComponent } from './subjective-problem/subjective-problem.component';
import { LineResultComponent } from './answer-result/line-result/line-result.component';
import { PieResultComponent } from './answer-result/pie-result/pie-result.component';
import { ObjectiveQuestionComponent } from './answer-result/objective-question/objective-question.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    routing
  ],
  declarations: [
    PracticeComponent,
    LibraryComponent,
    SubjectiveProblemComponent,
    LineResultComponent,
    PieResultComponent,
    ObjectiveQuestionComponent,
  ]
})
export class ClassroomExercisesModule { }
