import { Component, OnInit } from '@angular/core';
import { NzFormatEmitEvent, NzTreeNode } from 'ng-zorro-antd';

@Component({
  selector: 'app-collapse-tree',
  templateUrl: './collapse-tree.component.html',
  styleUrls: ['./collapse-tree.component.scss']
})
export class CollapseTreeComponent implements OnInit {
  panels = [
    {
      key:1,
      active    : false,
      disabled  : false,
      level:1,
      name      : '第一章有理数',
      childPanel: [
        {
          active: false,
          name  : '1.1正数和负数',
          level:2,
          content:'填幻方，阅读与思考',
          childPanel: [
            {
              active: false,
              name  : '实验与探究',
              content:'填幻方，阅读与思考'
            },
            {
              active: false,
              name  : '有理数的加减'
            }
          ]
        },
        {
          active: false,
          name  : '有理数的加减法',
          content:'填幻方，阅读与思考',
          level:2
        }
      ]
    },
    {
      key:2,
      active  : false,
      disabled: true,
      level:1,
      name    : 'This is panel header 2'
    },
    {
      key:3,
      level:1,
      active  : false,
      disabled: false,
      name    : 'This is panel header 3'
    }
  ];


  constructor() { }

  ngOnInit() {
  }

}
