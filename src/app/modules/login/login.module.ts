import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { routing } from './login.routers';
import { SingInComponent } from './sing-in/sing-in.component';
import { SingInClassComponent } from './sing-in-class/sing-in-class.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    routing
  ],
  declarations: [SingInComponent, SingInClassComponent]
})
export class LoginModule { }
