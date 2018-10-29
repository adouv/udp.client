import { Injectable } from '@angular/core';
import { ResponseMessageDto } from '../_dto/responseMessageDto';
import { Observable } from 'rxjs/Observable';
/**
 * api统一处理类
 * 抽象类
 */

@Injectable()
export abstract class ApiBaseService<P> {

  constructor() { }
  /**
   *请求实体
   */
  public Parameter?: P;
  /**
   * 返回响应实体
   */
  public ResponseResult?: ResponseMessageDto;
  /**
   * 具体业务逻辑
   */
  protected abstract ExecuteMethod(): void;
  /**
   * 请求参数验证
   */
  protected abstract Validate(): boolean;
  /**
   * 执行
   * @param model 请求实体
   */
  public Execute(model?: P): Observable<ResponseMessageDto> {
    try {
      if (model) {
        this.Parameter = model;
      }

      if (this.Validate()) {
        return Observable.create(observable => {
          this.ExecuteMethod();
          observable.next(this.ResponseResult);
        });
      } else {
        return Observable.create(observable => {
          throw new Error('验证失败');
        });
      }
    } catch (error) {
      return Observable.create(observable => {
        throw new Error(error);
      });
    }
  }
}
