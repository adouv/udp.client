import { AuthRequestDto } from './../../../_dto/account/request/authRequest.Dto';
import { GetClassService } from './../../../_service/auth/get-class.service';
import { SignInService } from './../../../_service/auth/sign-in.service';
import { HttpService } from './../../../_ddd/http.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
@Component({
  selector: 'app-sing-in',
  templateUrl: './sing-in.component.html',
  styleUrls: ['./sing-in.component.scss']
})
export class SingInComponent implements OnInit {

  constructor(
    private router: Router, private http: HttpService, private signinService: SignInService, private getClassesService: GetClassService
  ,private fb: FormBuilder) { }
  validateForm: FormGroup;

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[ i ].markAsDirty();
      this.validateForm.controls[ i ].updateValueAndValidity();
    }
    console.log("执行登录了");
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      userName: [ null, [ Validators.required ] ],
      password: [ null, [ Validators.required ] ],
      remember: [ true ]
    });
  }

  
  loginClick() {
    let model: AuthRequestDto = {
      client_id: '1',
      client_secret: '123',
      scope: 'read',
      grant_type: 'password',
      username: 'lisi',
      password: '111111'
    };
    this.signinService.Execute(model).then(response => {
      console.log("LoginComponent:获取到数据,", response);
      this.getClassesService.Execute({}).then(res => {
        console.log(res);
      }, err => {
        console.log(err);
      });
    }).catch(error => {
      console.log("LoginComponent:捕获到错误,", error);
    });
    this.router.navigate(['login/login-in']);
  }
}
