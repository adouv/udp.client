import { Component, OnInit } from '@angular/core';
declare var echarts: any;
@Component({
  selector: 'app-objective-question',
  templateUrl: './objective-question.component.html',
  styleUrls: ['./objective-question.component.scss']
})
export class ObjectiveQuestionComponent implements OnInit {
  checked = true;
  public offsetheight:number=document.body.offsetHeight-68-19;
  constructor() { }



  dataSet = [
    {
      number    : '1',
      score   : '9',
      time    : '1\'32\"',
      averageTime    : '1\'32\"',
      stuNum:'2018090001',
      name:'王蜀君',
      sex:'男'
    },
    {
      number    : '2',
      score   : '8',
      time    : '1\'32\"',
      averageTime    : '1\'32\"',
      stuNum:'2018090002',
      name:'王蜀君蜀君蜀君',
      sex:'女'
    },
    {
      number    : '3',
      score   : '10',
      time    : '1\'32\"',
      averageTime    : '1\'32\"',
      stuNum:'2018090003',
      name:'苏天天',
      sex:'女'
    },
    {
      number    : '4',
      score   : '9',
      time    : '1\'32\"',
      averageTime    : '1\'32\"',
      stuNum:'2018090004',
      name:'徐海丽',
      sex:'男'
    },
    {
      number    : '5',
      score   : '8',
      time    : '1\'32\"',
      averageTime    : '1\'32\"',
      stuNum:'2018090005',
      name:'魏明月',
      sex:'男'
    },
    {
      number    : '6',
      score   : '8',
      time    : '1\'32\"',
      averageTime    : '1\'32\"',
      stuNum:'2018090006',
      name:'王丽雅',
      sex:'女'
    },
    {
      number    : '7',
      score   : '10',
      time    : '1\'32\"',
      averageTime    : '1\'32\"',
      stuNum:'2018090007',
      name:'郭亚茹',
      sex:'男'
    },
    {
      number    : '8',
      score   : '7',
      time    : '1\'32\"',
      averageTime    : '1\'32\"',
      stuNum:'2018090008',
      name:'姜珊',
      sex:'女'
    },
    {
      number    : '9',
      score   : '8',
      time    : '1\'32\"',
      averageTime    : '1\'32\"',
      stuNum:'2018090009',
      name:'朱雪',
      sex:'女'
    },
  ];


  ngOnInit() {
  }

}
