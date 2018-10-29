import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { SharedModule } from './modules/shared/shared.module';
//import { StoreModule } from '@ngrx/store';
import { routing } from './app.routers';

import { UdpService, InterceptorService, HttpService, ElementService, FsService, UtilsService, WindowsService, ClientService } from './_ddd';
import { SignInService, GetClassService } from './_service';


import { AppComponent } from './app.component';
/**
 * 工具类
 */
const dddList = [
  UdpService,
  InterceptorService,
  HttpService,
  ElementService,
  FsService,
  UtilsService,
  WindowsService,
  ClientService
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
    BrowserAnimationsModule,
    SharedModule,
    NgZorroAntdModule.forRoot(),
    routing
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true },
    ...dddList,
    ...serviceList
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
