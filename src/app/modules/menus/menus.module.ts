import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './menus.routers';
import { MenusOneComponent } from './menus-one/menus-one.component';
import { MenusTwoComponent } from './menus-two/menus-two.component';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [MenusOneComponent, MenusTwoComponent]
})
export class MenusModule { }
