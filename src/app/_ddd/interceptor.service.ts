import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';

/**
 * http拦截器
 * http状态码：http://tool.oschina.net/commons?type=5
 */
@Injectable()
export class InterceptorService implements HttpInterceptor {

  constructor(private router: Router) { }
  /**
   * 
   * @param {HttpRequest<any>} req
   * @param {HttpHandler} next
   * @returns {Observable<HttpEvent<any>>}
   */
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let LW: string = localStorage.getItem('LWToken');

    if (LW) {
      req = req.clone(
        {
          headers: req.headers.set('TOKEN', LW)
        }
      );
    }

    // console.log("Cloned Request");
    // console.log(req);

    return next.handle(req)
      .retry(3)
      .map((resp: HttpEvent<any>) => {
        if (resp instanceof HttpResponse) {
          console.log('Response is ::');
          console.log(resp.body);
        }
        return resp;
      })
      .catch((err: HttpResponse<any>) => {

        this.errorHandle(err);
        //return Observable.of(err);
        return ErrorObservable.create(err);
      });
    // return next.handle(req).pipe(mergeMap((event: any) => {
    //   if (event instanceof HttpResponse && event.status != 200) {
    //     console.log('---error1---');
    //     console.log(event);
    //     console.log('---error1---');
    //     return ErrorObservable.create(event);
    //   }
    //   return event;
    // }), catchError((error: HttpResponse<any>) => {
    //   console.log('---error2---');
    //   console.log(event);
    //   console.log('---error2---');
    //   return this.responseHandle(error);
    // }));
  }
  /**
   * 
   * @param {HttpResponse<any>} response
   * @returns {ErrorObservable}
   */
  errorHandle(response: HttpResponse<any>): void {
    switch (response.status) {
      case 200:
        console.log('业务错误');
        break;
      case 400:
        console.log('token失效');
        break;
      case 401:
        console.log('token失效了');
        //this.redirectLogin();
        break;
      case 404:
        console.log('请求失败，请求所希望得到的资源未被在服务器上发现。没有信息能够告诉用户这个状况到底是暂时的还是永久的。假如服务器知道情况的话，应当使用410状态码来告知旧资源因为某些内部的配置机制问题，已经永久的不可用，而且没有任何可以跳转的地址。404这个状态码被广泛应用于当服务器不想揭示到底为何请求被拒绝或者没有其他适合的响应可用的情况下。');
        break;
      case 403:
        console.log('业务错误');
        break;
      case 500:
        break;
      default:
        break;
    }
    //return ErrorObservable.create(response);
  }
  /**
   * token失效跳出登录页面
   */
  redirectLogin(): void {
    console.log("重新进入登录页面");
    //此处清除用户存储的localStorage
    this.router.navigateByUrl("/login");
  }
}
