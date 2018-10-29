import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './pages.routers';
import { FourZeroFourComponent } from './four-zero-four/four-zero-four.component';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [FourZeroFourComponent]
})
export class PagesModule { }
