import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sing-in-class',
  templateUrl: './sing-in-class.component.html',
  styleUrls: ['./sing-in-class.component.scss']
})
export class SingInClassComponent implements OnInit {
  listOfOption: any[] = [];
  singleValue = 'a10';
  constructor() { }

  ngOnInit() {
    const children = [];
    for (let i = 10; i < 36; i++) {
      children.push({ label: i.toString(36) + i, value: i.toString(36) + i });
    }
    this.listOfOption = children;
  }

}
