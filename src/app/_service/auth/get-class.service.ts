import { Injectable } from '@angular/core';
import { ApiBaseService } from '../apiBase.service';
import { HttpService } from '../../_ddd/http.service';
import { HttpProxy } from '../../_dto/enum/httpProxy.enum';

@Injectable()
export class GetClassService extends ApiBaseService<any> {

  constructor(private http$: HttpService) {
    super();
  }

  protected Validate(): boolean {
    return true;
  }

  protected ExecuteMethod(): Promise<any> {

    let url: string = HttpProxy.CLASSES_LIST_SERVER + '/organization/organization/teacher/classes';

    return this.http$.promistGet(url, this.Parameter).then(response => {
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

  }
}
