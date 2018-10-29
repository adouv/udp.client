import { Component, OnInit } from '@angular/core';
declare var echarts: any;
@Component({
  selector: 'app-line-echarts',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit {
  checked = true;

  constructor() { }

  option = {
    tooltip : {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        crossStyle: {
          color: '#999'
        }
      }
    },
    legend: { // 图例的样式
      data: ['得分学生人数', '得分组平均答题用时'],
      top: 10,
      /*itemWidth: 15,
      itemHeight: 15,*/
      textStyle: {
        color: '#9FA0A0',
        fontSize: 13,
      }
    },
    grid: {  //图的位置
      /*left: '14%',
      right: '4%',*/
      top: '20%'
    },
    xAxis : [  // x轴样式
      {
        type : 'category',
        data : ['6分', '7分', '8分', '9分', '10分','11分','12分','13分'],
        axisLine: { // 线条样式
          lineStyle: {
            color: '#888',
            width: 1,
            fontSize:13
          }
        },
        axisPointer: {
          type: 'shadow'
        }
      }
    ],
    yAxis : [
      {
        type : 'value',
        name:'学生人数',
        interval:10,
        min: 0, // 最小值
        max: 50, //最大值
        axisTick:{show:false},
        // splitLine:{show:false},
        axisLabel: {  //坐标轴上的文字
          formatter: '{value}',
        },
        nameTextStyle:{
          fontSize:15
        },
        axisLine: {
          lineStyle: {
            color: '#9FA0A0',
            width: 1
          }
        }
      },
      {
        type : 'value',
        name:'平均用时',
        interval:3,
        min: 0, // 最小值
        max: 15, //最大值
        axisTick:{show:false},
        splitLine:{show:false},
        axisLabel: {  //坐标轴上的文字
          formatter: '{value} \'',
        },
        nameTextStyle:{
          fontSize:15
        },
        axisLine: {
          lineStyle: {
            color: '#9FA0A0',
            width: 1
          }
        }
      }
    ],
    series : [
      {
        name: '得分学生人数',
        type: 'bar',
        data: [16, 22,20, 25, 18,15,18,15],
        center: ['50%', '50%'],
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(
              0, 0, 0, 1,
              [
                {offset: 0, color: '#febb5c'},
                {offset: 1, color: '#ff7e55'}
              ])
          }
        },
        barWidth:25
      },
      {
        name: '得分组平均答题用时',
        type: 'line',
        data: [5.5, 9.8, 10.6,9.5, 7.8,8.5],
        yAxisIndex:1,
        lineStyle:{
          color:"#1caaec"
        },
        itemStyle:{
          color:"#1caaec"
        }
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
