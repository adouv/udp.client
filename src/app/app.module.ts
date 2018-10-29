import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { StoreModule } from '@ngrx/store';
import { routing } from './app.routers';

import { UdpService, InterceptorService, HttpService, DatabaseService, ElementService, FsService, UtilsService, WindowsService } from './_ddd';
import { SignInService, GetClassService } from './_service';


import { AppComponent } from './app.component';
/**
 * 工具类
 */
const dddList = [
  UdpService,
  InterceptorService,
  HttpService,
  DatabaseService,
  ElementService,
  FsService,
  UtilsService,
  WindowsService
];
/**
 * api服务类
 */
const serviceList = [
  SignInService,
  GetClassService
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgZorroAntdModule.forRoot(),
    routing
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true },
    { provide: NZ_I18N, useValue: zh_CN },
    ...dddList,
    ...serviceList
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
