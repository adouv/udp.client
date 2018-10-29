import { Component, OnInit } from '@angular/core';
declare var echarts: any;
@Component({
  selector: 'app-pie-echarts',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {
  checked = true;

  constructor() { }

  option = {
    tooltip : {
      trigger: 'item',
      formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
      /*orient: 'vertical',
      left: 'left',
      x:'center',
      y:'center',*/
      itemHeight:20, //旁边色块的高度
      itemWidth:40,//旁边色块的宽度
      textStyle:{  ////旁边色块的文字样式
        fontSize:13
      },
      data: ['A','B','C','未作答']
    },
    series : [
      {
        name: '访问来源',
        type: 'pie',
        radius: ['42%', '70%'],
        center: ['50%', '50%'],
        avoidLabelOverlap: false,
        data:[
          {value:30, name:'A'},
          {value:25, name:'B'},
          {value:13, name:'C'},
          {value:32, name:'未作答'},
        ],
        label:{
          normal:{
            show:true,
            position:'inside'
          },
          textStyle:{
            fontSize:14
          }
        },
        itemStyle: {
          normal:{
            label:{
              show:false, //隐藏标示文字
              formatter:"{d}"
            },
            labelLine: {
              show:false
            }
          },
          emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        },
        color:['#f96946','#a4ce53','#e05164','#128de6'] // 每个区域的颜色
      }
    ]
  };

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
