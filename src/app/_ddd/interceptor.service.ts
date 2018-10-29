import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { mergeMap, catchError, map, windowTime } from 'rxjs/operators';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
/**
 * http拦截器
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
    return next.handle(req).pipe(mergeMap((event: any) => {
      if (event instanceof HttpResponse) {
        console.log('---error1---');
        console.log(event);
        console.log('---error1---');
        return ErrorObservable.create(event);
      }
      return Observable.create(observable => {
        observable.next(event);
      });
    }), catchError((error: HttpResponse<any>) => {
      console.log('---error2---');
      console.log(event);
      console.log('---error2---');
      return this.responseHandle(error);
    }));
  }
  /**
   * 
   * @param {HttpResponse<any>} response
   * @returns {ErrorObservable}
   */
  responseHandle(response: HttpResponse<any>): ErrorObservable {
    switch (response.status) {
      case 200:
        console.log('业务错误');
        break;
      case 401:
        console.log('token失效了');
        this.redirectLogin();
        break;
      case 404:
        break;
      case 403:
        console.log('业务错误');
        break;
      case 500:
        break;
      default:
        break;
    }
    return ErrorObservable.create(response);
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
