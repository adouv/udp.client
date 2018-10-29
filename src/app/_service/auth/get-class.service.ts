import { Injectable } from '@angular/core';
import { ApiBaseService } from '../apiBase.service';
import { AuthRequestDto } from '../../_dto/account/request/authRequest.Dto';

@Injectable()
export class GetClassService extends ApiBaseService<AuthRequestDto> {

  constructor() {
    super();
  }

  protected Validate(): boolean {
    return true;
  }

  protected async ExecuteMethod(): Promise<any> {
    this.ResponseResult = {
      Data: "这是获取班级具体业务逻辑",
      Message: "成功",
      ErrorCode: "",
      IsSuccess: true,
      Status: 200
    };
  }
}
