import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subjective-problem',
  templateUrl: './subjective-problem.component.html',
  styleUrls: ['./subjective-problem.component.scss']
})
export class SubjectiveProblemComponent implements OnInit {
  date = null; // new Date();
  dateRange = []; // [ new Date(), addDays(new Date(), 3) ];
  isEnglish = false;
  user: { username: string };
  // 模拟数据
//   dataSet = [
//     {
//       key: 1,
//       name: "王蜀君...",
//       image:"na",
//       status: 0,
//     },
//     {
//       key: 2,
//       name: "王蜀君...",
//       image:"nv",
//       status: 1,
//     },
//     {
//       key: 3,
//       name: "王丽亚",
//       image:"na",
//       status: 1,
//     },
//     {
//       key: 4,
//       name: "姜珊",
//       image:"na",
//       status: 0,
//     },
//     {
//       key: 1,
//       name: "王蜀君...",
//       image:"na",
//       status: 0,
//     },
//     {
//       key: 2,
//       name: "王蜀君...",
//       image:"nv",
//       status: 1,
//     },
//     {
//       key: 3,
//       name: "王丽亚",
//       image:"na",
//       status: 1,
//     },
//     {
//       key: 4,
//       name: "姜珊",
//       image:"na",
//       status: 0,
//     },
//     {
//       key: 1,
//       name: "王蜀君...",
//       image:"na",
//       status: 0,
//     },
//     {
//       key: 2,
//       name: "王蜀君...",
//       image:"nv",
//       status: 1,
//     },
//     {
//       key: 3,
//       name: "王丽亚",
//       image:"na",
//       status: 1,
//     },
//     {
//       key: 4,
//       name: "姜珊",
//       image:"na",
//       status: 0,
//     },
//     {
//       key: 1,
//       name: "王蜀君...",
//       image:"na",
//       status: 0,
//     },
//     {
//       key: 2,
//       name: "王蜀君...",
//       image:"nv",
//       status: 1,
//     },
//     {
//       key: 3,
//       name: "王丽亚",
//       image:"na",
//       status: 1,
//     },
//     {
//       key: 4,
//       name: "姜珊",
//       image:"na",
//       status: 0,
//     },
//     {
//       key: 1,
//       name: "王蜀君...",
//       image:"na",
//       status: 0,
//     },
//     {
//       key: 2,
//       name: "王蜀君...",
//       image:"nv",
//       status: 1,
//     },
//     {
//       key: 3,
//       name: "王丽亚",
//       image:"na",
//       status: 1,
//     },
//     {
//       key: 4,
//       name: "姜珊",
//       image:"na",
//       status: 0,
//     },
//     {
//       key: 1,
//       name: "王蜀君...",
//       image:"na",
//       status: 0,
//     },
//     {
//       key: 2,
//       name: "王蜀君...",
//       image:"nv",
//       status: 1,
//     },
//     {
//       key: 3,
//       name: "王丽亚",
//       image:"na",
//       status: 1,
//     },
//     {
//       key: 4,
//       name: "姜珊",
//       image:"na",
//       status: 0,
//     },
//     {
//       key: 1,
//       name: "王蜀君...",
//       image:"na",
//       status: 0,
//     },
//     {
//       key: 2,
//       name: "王蜀君...",
//       image:"nv",
//       status: 1,
//     },
//     {
//       key: 3,
//       name: "王丽亚",
//       image:"na",
//       status: 1,
//     },
//     {
//       key: 4,
//       name: "姜珊",
//       image:"na",
//       status: 0,
//     },
//     {
//       key: 1,
//       name: "王蜀君...",
//       image:"na",
//       status: 0,
//     },
//     {
//       key: 2,
//       name: "王蜀君...",
//       image:"nv",
//       status: 1,
//     },
//     {
//       key: 3,
//       name: "王丽亚",
//       image:"na",
//       status: 1,
//     },
//     {
//       key: 4,
//       name: "姜珊",
//       image:"na",
//       status: 0,
//     },
//     {
//       key: 1,
//       name: "王蜀君...",
//       image:"na",
//       status: 0,
//     },
//     {
//       key: 2,
//       name: "王蜀君...",
//       image:"nv",
//       status: 1,
//     },
//     {
//       key: 3,
//       name: "王丽亚",
//       image:"na",
//       status: 1,
//     },
//     {
//       key: 4,
//       name: "姜珊",
//       image:"na",
//       status: 0,
//     }
  // ];
  constructor() { }

  ngOnInit() {
    this.user = { username: 'Semlinker' };
  }

  onChange(result: Date): void {
    console.log('onChange: ', result);
  }
}
