import { Component, OnInit, Input } from '@angular/core';
/**
 * 缺省页组件
 */
@Component({
  selector: 'app-elliptical-page',
  templateUrl: './elliptical-page.component.html',
  styleUrls: ['./elliptical-page.component.scss']
})
export class EllipticalPageComponent implements OnInit {
  _imgName: string;
	@Input() set imgName(value: string) {
		this._imgName = value;
	}

	_title: string;
	@Input() set title(value: string) {
		this._title = value;
	}
  constructor() { }

  ngOnInit() {
  }

}
