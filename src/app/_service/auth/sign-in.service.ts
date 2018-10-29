import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { ApiBaseService } from '../apiBase.service';
import { AuthRequestDto } from '../../_dto/account/request/authRequest.Dto';
import { HttpService } from '../../_ddd/http.service';
import { HttpProxy } from '../../_dto/enum/httpProxy.enum';
/**
 * token验证服务
 *
 * @export
 * @class SignInService
 * @extends {ApiBaseService<AuthRequestDto>}
 */
@Injectable()
export class SignInService extends ApiBaseService<AuthRequestDto> {

  constructor(private http$: HttpService) {
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
  protected ExecuteMethod(): Promise<any> {
    let url: string = HttpProxy.AUTHZ + '/oauth/token';

    let options: any = {
      headers: new HttpHeaders(
        {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      )
    };

    return this.http$.promistPost(url, this.Parameter, options).then(response => {
      localStorage.removeItem('LWToken');
      localStorage.setItem('LWToken', response.access_token);
      this.ResponseResult = {
        Data: response,
        Message: "成功",
        ErrorCode: "",
        IsSuccess: true,
        Status: 200
      };
    }).catch(error => {
      throw new Error(error);
    });


    //throw new Error("报错了");
  }
}
