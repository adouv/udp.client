
import { Component, OnInit } from '@angular/core';
import { SignInService, GetClassService } from '../../../_service';
import { AuthRequestDto } from '../../../_dto/account/request/authRequest.Dto';

@Component({
  selector: 'app-menus-one',
  templateUrl: './menus-one.component.html',
  styleUrls: ['./menus-one.component.scss']
})
export class MenusOneComponent implements OnInit {
  showMenus: Boolean = false; // 是否显示菜单状态
  isLogin: Boolean = true; // 获取登录状态

  constructor(private signInService: SignInService, private getClassService: GetClassService) {
  }

  ngOnInit(): void {
    let model: AuthRequestDto = {
      client_id: '1',
      client_secret: '123',
      scope: 'read',
      grant_type: 'password',
      username: 'lisi',
      password: '111111'
    };
    this.signInService.Execute(model).then(response => {
      console.log(response);
      this.getClassService.Execute({}).then(res => {
        console.log(res);
      }, err => {
        console.log(err);
      });
    }).catch(error => {
      console.log(error);
    });
  }
  showHideMenu(): void {
    this.showMenus = this.showMenus ? false : true;
  }
  checkLogin() {
    if (this.isLogin === true) {
      alert("是否确认下课？"); // 此处调通用弹框
    } else {
      // 跳转登录页 登录成功后更改状态
    }
    this.isLogin = this.isLogin ? false : true;
  }
}
