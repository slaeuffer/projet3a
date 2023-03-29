import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-reviews-dialog',
  templateUrl: './reviews-dialog.component.html',
  styleUrls: ['./reviews-dialog.component.scss']
})
export class ReviewsDialogComponent implements OnInit {

  count: number;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
  comments: object[]= [];

  ngOnInit() {
    this.count = 0;
    this.data.reviews.forEach((element: { content: any; date: any; }) => {
      this.comments.push({
        commentTxt: element.content,
        currentDate: element.date
      })
    });
    this.count = this.comments.length;
  }


  receiveComment($event: object[]) {
    console.log($event)
    this.comments= this.comments.concat($event);
    this.count = this.comments.length;
  }


  recieveCount($event: object[]) {
    this.comments= this.comments.concat($event);
    this.count = this.comments.length;
  }



}
