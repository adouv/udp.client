import { Injectable } from '@angular/core';
import { ResponseMessageDto } from '../_dto/responseMessageDto';
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
  protected abstract ExecuteMethod(): Promise<any>;
  /**
   * 请求参数验证
   */
  protected abstract Validate(): boolean;
  /**
   * 执行
   * @param model 请求实体
   */
  public async Execute(model?: P): Promise<ResponseMessageDto> {
    try {
      if (model) {
        this.Parameter = model;
      }

      if (this.Validate()) {
        await this.ExecuteMethod();
      } else {
        this.ResponseResult = {
          Message: "验证失败",
          ErrorCode: "000000",
          IsSuccess: false,
          Status: 100
        };
      }
    } catch (error) {

      this.ResponseResult = {
        Message: error + "",
        ErrorCode: "999999",
        IsSuccess: false,
        Status: 100
      };
      console.log(this.ResponseResult);

    }
    return this.ResponseResult;
  }
}
