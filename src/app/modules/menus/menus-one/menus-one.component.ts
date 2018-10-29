
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { SignInService, GetClassService } from '../../../_service';
@Component({
  selector: 'app-menus-one',
  templateUrl: './menus-one.component.html',
  styleUrls: ['./menus-one.component.scss']
})
export class MenusOneComponent implements OnInit {

  constructor(private signInService: SignInService, private getClassService: GetClassService) {
    signInService.Execute().subscribe(next => {
      console.log(next);
      getClassService.Execute().subscribe(next1 => {
        console.log(next1);
      }, error1 => {
        console.log(error1);
      });
    }, error => {
      console.log(error);
    });


    
    getClassService.Execute().subscribe(next1 => {
      console.log(next1);
    }, error1 => {
      console.log(error1);
    });
  }

  ngOnInit() {
  }
}
