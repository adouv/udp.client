import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './store.routers';
import { ListComponent } from './list/list.component';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [ListComponent]
})
export class StoreModule { }
