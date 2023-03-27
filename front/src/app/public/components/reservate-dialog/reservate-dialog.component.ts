import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-reservate-dialog',
  templateUrl: './reservate-dialog.component.html',
  styleUrls: ['./reservate-dialog.component.scss']
})
export class ReservateDialogComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public company: any
  ) {}

  currentDay: Date = new Date();
  currentDayString = this.currentDay.toDateString();
  dayBefore: string = this.currentDay.setDate(this.currentDay.getDate() - 1).toString();
  dayAfter: string = this.currentDay.setDate(this.currentDay.getDate() + 2).toString();

  displayedColumns: string[] = ['col1','col2', 'col3', 'col4'];
  dataSource: any=[];

  ngOnInit(): void {
    const ELEMENT_DATA: {}[] = [
      {col1: '8', col2: '9', col3: '10', col4: '11'},
      {col1: '12', col2: '13', col3: '', col4: ''},
      {col1: '10', col2: '', col3: '', col4: ''},
      {col1: '11', col2: '', col3: '', col4: ''},
    ];
    this.dataSource = ELEMENT_DATA;
  }

}
