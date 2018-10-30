import { Component, OnInit } from '@angular/core';
declare var echarts: any;
@Component({
  selector: 'app-pie-result',
  templateUrl: './pie-result.component.html',
  styleUrls: ['./pie-result.component.scss']
})
export class PieResultComponent implements OnInit {
  checked = true;
  public offsetheight:number=document.body.offsetHeight-68-19;

  constructor() { }

  dataSet = [
    {
      number    : '1',
      option   : 'A',
      time    : '1\'32\"',
      averageTime    : '1\'32\"',
    },
    {
      number    : '2',
      option   : 'A、B',
      time    : '1\'32\"',
      averageTime    : '1\'32\"',
    },
    {
      number    : '3',
      option   : 'B',
      time    : '1\'32\"',
      averageTime    : '1\'32\"',
    },
    {
      number    : '4',
      option   : '未作答',
      time    : '1\'32\"',
      averageTime    : '1\'32\"',
    },
    {
      number    : '5',
      option   : '未作答',
      time    : '1\'32\"',
      averageTime    : '1\'32\"',
    },
    {
      number    : '6',
      option   : '未作答',
      time    : '1\'32\"',
      averageTime    : '1\'32\"',
    },
    {
      number    : '7',
      option   : '未作答',
      time    : '1\'32\"',
      averageTime    : '1\'32\"',
    },
    {
      number    : '8',
      option   : '未作答',
      time    : '1\'32\"',
      averageTime    : '1\'32\"',
    },
    {
      number    : '9',
      option   : '未作答',
      time    : '1\'32\"',
      averageTime    : '1\'32\"',
    },
  ];


  ngOnInit() {
  }

}
