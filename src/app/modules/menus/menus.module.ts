import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { routing } from './menus.routers';
import { MenusOneComponent } from './menus-one/menus-one.component';
import { MenusTwoComponent } from './menus-two/menus-two.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    routing
  ],
  declarations: [MenusOneComponent, MenusTwoComponent]
})
export class MenusModule { }
