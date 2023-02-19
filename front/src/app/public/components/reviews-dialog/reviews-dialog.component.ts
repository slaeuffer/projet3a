import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reviews-dialog',
  templateUrl: './reviews-dialog.component.html',
  styleUrls: ['./reviews-dialog.component.scss']
})
export class ReviewsDialogComponent implements OnInit {

  comments: object[];
  count: number;
  constructor() { }


  ngOnInit() {
    this.count = 0;
  }


  receiveComment($event: object[]) {
    this.comments = $event;
    this.count = this.comments.length;
    console.log(this.comments.length);
  }


  recieveCount($event: object[]) {
    this.comments = $event;
    this.count = this.comments.length;
  }



}
