import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})
export class LibraryComponent implements OnInit {
  keyword;
  tabIndex = 0;
  searchType = 0;
  constructor() { }

  ngOnInit() {
  }
  changeType(event): void {
    this.keyword = '';
  }
  tabChange(event): void {
    this.tabIndex = event.index;
  }
  // input搜索
  searchQuestionList(evt) {
    this.keyword = evt.trim();
    if (this.searchType === 1) {
    }
		/*if (this.keyword !== '' || this.keyword !== undefined) {
			this.keyword = this.keyword && this.keyword.trim();
			this.checkedExerciseIds = [];
			if (this.searchType === 1 && this.keyword) {
				this.getExerciseIds(0, '');
			} else {
				this.getExerciseIds(0);
			}
		}*/
  }

  changeKeyword() {
    if (this.keyword.length > 40) {
      this.keyword = this.keyword.substr(0, 40);
    }
  }
}
