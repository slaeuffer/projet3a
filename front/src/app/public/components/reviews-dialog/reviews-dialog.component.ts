import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CompanyService } from 'src/app/services/company.service';
@Component({
  selector: 'app-reviews-dialog',
  templateUrl: './reviews-dialog.component.html',
  styleUrls: ['./reviews-dialog.component.scss']
})
export class ReviewsDialogComponent implements OnInit {

  count: number;
  constructor(
    @Inject(MAT_DIALOG_DATA) public company: any,
    private companyService: CompanyService,
  ) {}
  comments: object[]= [];

  ngOnInit() {
    this.count = 0;
    this.companyService.getReviews(this.company.id).subscribe(
      (e) => {
        this.comments = e;
      }
    )
    this.count = this.comments.length;
  }

  receiveComment($event: object[]) {
    this.comments= this.comments.concat($event);
    this.count = this.comments.length;
  }

  recieveCount($event: object[]) {
    this.comments= this.comments.concat($event);
    this.count = this.comments.length;
  }

}
