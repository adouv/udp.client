import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { routing } from './classroom-exercises.routers';
import { PracticeComponent } from './practice/practice.component';
import { LibraryComponent } from './library/library.component';
import { SubjectiveProblemComponent } from './subjective-problem/subjective-problem.component';
import { NoteTakingComponent } from './note-taking/note-taking.component';

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
    NoteTakingComponent
  ]
})
export class ClassroomExercisesModule { }
