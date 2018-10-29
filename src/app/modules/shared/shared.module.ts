import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
/** 
 * 全局插件引用
*/
import { FormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { NgxEchartsModule } from 'ngx-echarts';
/** 
 * 全局公用组件引用
*/
import { CollapseTreeComponent } from '../../_components/collapse-tree/collapse-tree.component';
import { EllipticalPageComponent } from '../../_components/elliptical-page/elliptical-page.component';
import { InputSearchComponent } from '../../_components/input-search/input-search.component';
import { LibraryTreeComponent } from '../../_components/library-tree/library-tree.component';
import { LineChartComponent } from '../../_components/line-chart/line-chart.component';
import { MessageComponent } from '../../_components/message/message.component';
import { ModalComponent } from '../../_components/modal/modal.component';
import { PieChartComponent } from '../../_components/pie-chart/pie-chart.component';
import { TipComponent } from '../../_components/tip/tip.component';
import { ToolsComponent } from '../../_components/tools/tools.component';

const componentsList = [
  CollapseTreeComponent,
  EllipticalPageComponent,
  InputSearchComponent,
  LibraryTreeComponent,
  LineChartComponent,
  MessageComponent,
  ModalComponent,
  PieChartComponent,
  TipComponent,
  ToolsComponent
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgxEchartsModule,
    NgZorroAntdModule.forRoot()
  ],
  exports: [
    CommonModule,
    FormsModule,
    NgxEchartsModule,
    NgZorroAntdModule,
    ...componentsList
  ],
  declarations: [
    ...componentsList
  ],
  providers: []
})
export class SharedModule { }
