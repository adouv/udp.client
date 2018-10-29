import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.scss']
})
export class PracticeComponent implements OnInit {
  date = null; // new Date();
  dateRange = []; // [ new Date(), addDays(new Date(), 3) ];
  isEnglish = false;
  // 模拟数据
  dataSet = [
    {
      key: '1',
      name: '课堂练习包上课练习包',
      addTime: '2018/01/08 14:11',
      status: '未使用',
      counts: 0,
      type: 1
    },
    {
      key: '2',
      name: '课堂练习包上课',
      addTime: '2018/01/08 14:11',
      status: '未使用',
      counts: 0,
      type: 2
    },
    {
      key: '3',
      name: '课堂练习包上课课堂练习包上课课堂练习包上课',
      addTime: '2018/01/08 14:11',
      status: '未使用',
      counts: 0,
      type: 3
    },
    {
      key: '4',
      name: 'John Brown',
      addTime: '2018/01/08 14:11',
      status: '未使用',
      counts: 0,
      type: 1
    },
    {
      key: '5',
      name: 'John Brown',
      addTime: '2018/01/08 14:11',
      status: '未使用',
      counts: 0,
      type: 3
    },
    {
      key: '1',
      name: '课堂练习包上课练习包',
      addTime: '2018/01/08 14:11',
      status: '未使用',
      counts: 0,
      type: 1
    },
    {
      key: '2',
      name: '课堂练习包上课',
      addTime: '2018/01/08 14:11',
      status: '未使用',
      counts: 0,
      type: 2
    },
    {
      key: '3',
      name: '课堂练习包上课课堂练习包上课课堂练习包上课',
      addTime: '2018/01/08 14:11',
      status: '未使用',
      counts: 0,
      type: 3
    },
    {
      key: '4',
      name: 'John Brown',
      addTime: '2018/01/08 14:11',
      status: '未使用',
      counts: 0,
      type: 1
    },
    {
      key: '5',
      name: 'John Brown',
      addTime: '2018/01/08 14:11',
      status: '未使用',
      counts: 0,
      type: 3
    }
  ];
  constructor() { }

  ngOnInit() {
  }
  onChange(result: Date): void {
    console.log('onChange: ', result);
  }
}
