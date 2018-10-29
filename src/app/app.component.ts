import { Component } from '@angular/core';
import { UdpService } from './_ddd';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'app';
  constructor() {

  }
}
