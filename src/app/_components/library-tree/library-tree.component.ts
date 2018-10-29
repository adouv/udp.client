import { Component, OnInit,Input, TemplateRef, ViewChild } from '@angular/core';
import {
  NzDropdownContextComponent,
  NzDropdownService,
  NzFormatEmitEvent,
  NzTreeComponent,
  NzTreeNode
} from 'ng-zorro-antd';

import {Subscription} from 'rxjs/Subscription';
@Component({
  selector: 'app-library-tree',
  templateUrl: './library-tree.component.html',
  styleUrls: ['./library-tree.component.scss']
})
export class LibraryTreeComponent implements OnInit {
  @Input()  optionDisable:any;
  @ViewChild('treeCom') treeCom: NzTreeComponent;
  panels = [
    {
      active    : true,
      name      : 'This is panel header 1',
      disabled  : false
    },
    {
      active  : false,
      disabled: false,
      name    : 'This is panel header 2'
    },
    {
      active  : false,
      disabled: true,
      name    : 'This is panel header 3'
    }
  ];
  nodes = [ {
    title   : '0-0',
    key     : '00',
    expanded: true,
    children: [ {
      title   : '0-0-0',
      key     : '000',
      expanded: true,
      children: [
        { title: '0-0-0-0', key: '0000', isLeaf: true },
        { title: '0-0-0-1', key: '0001', isLeaf: true },
        { title: '0-0-0-2', key: '0002', isLeaf: true }
      ]
    }, {
      title   : '0-0-1',
      key     : '001',
      children: [
        { title: '0-0-1-0', key: '0010', isLeaf: true },
        { title: '0-0-1-1', key: '0011', isLeaf: true },
        { title: '0-0-1-2', key: '0012', isLeaf: true }
      ]
    }, {
      title: '0-0-2',
      key  : '002'
    } ]
  }, {
    title   : '0-1',
    key     : '01',
    children: [ {
      title   : '0-1-0',
      key     : '010',
      children: [
        { title: '0-1-0-0', key: '0100', isLeaf: true },
        { title: '0-1-0-1', key: '0101', isLeaf: true },
        { title: '0-1-0-2', key: '0102', isLeaf: true }
      ]
    }, {
      title   : '0-1-1',
      key     : '011',
      children: [
        { title: '0-1-1-0', key: '0110', isLeaf: true },
        { title: '0-1-1-1', key: '0111', isLeaf: true },
        { title: '0-1-1-2', key: '0112', isLeaf: true }
      ]
    } ]
  }, {
    title : '0-2',
    key   : '02',
    isLeaf: true
  } ];

  nzEvent(event: NzFormatEmitEvent): void {
    console.log(event);
  }

  constructor() { }

  ngOnInit() {

  }

}
