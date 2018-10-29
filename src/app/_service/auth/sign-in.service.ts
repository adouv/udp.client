import { Injectable } from '@angular/core';
import { ApiBaseService } from '../apiBase.service';
import { AuthRequestDto } from '../../_dto/account/request/authRequest.Dto';
/**
 * token验证服务
 *
 * @export
 * @class SignInService
 * @extends {ApiBaseService<AuthRequestDto>}
 */
@Injectable()
export class SignInService extends ApiBaseService<AuthRequestDto> {

  constructor() {
    super();
  }
  /**
   *字段验证及其他验证
   *
   * @protected
   * @returns {boolean}
   * @memberof SignInService
   */
  protected Validate(): boolean {
    return true;
  }
  /**
   * 具体业务逻辑
   *
   * @protected
   * @memberof SignInService
   */
  protected ExecuteMethod(): void {

    this.ResponseResult = {
      Data: "这是具体业务逻辑处理",
      Message: "成功",
      ErrorCode: "",
      IsSuccess: true,
      Status: 200
    };
    
    //throw new Error("报错了");
  }
}
