import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-reviews-dialog',
  templateUrl: './reviews-dialog.component.html',
  styleUrls: ['./reviews-dialog.component.scss']
})
export class ReviewsDialogComponent implements OnInit {

  comments: object[];
  count: number;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}


  ngOnInit() {
    this.count = 0;
    console.log("data",this.data);
  }


  receiveComment($event: object[]) {
    this.comments = $event;
    this.count = this.comments.length;
  }


  recieveCount($event: object[]) {
    this.comments = $event;
    this.count = this.comments.length;
  }



}
