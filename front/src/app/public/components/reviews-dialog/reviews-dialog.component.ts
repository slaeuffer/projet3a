import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reviews-dialog',
  templateUrl: './reviews-dialog.component.html',
  styleUrls: ['./reviews-dialog.component.scss']
})
export class ReviewsDialogComponent implements OnInit {

  comments: string;
  count: number;
  constructor() { }


  ngOnInit() {
    this.count = 0;
  }


  receiveComment($event: string) {
    this.comments = $event;
    this.count = this.comments.length;
    console.log(this.comments.length);
  }


  recieveCount($event: string) {
    this.comments = $event;
    this.count = this.comments.length;
  }



}
