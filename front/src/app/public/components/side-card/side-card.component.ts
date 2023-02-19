import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Company } from 'src/app/models/company.model';
import { CompanyService } from 'src/app/services/company.service';
import { ReviewsDialogComponent } from '../reviews-dialog/reviews-dialog.component';

@Component({
  selector: 'app-side-card',
  templateUrl: './side-card.component.html',
  styleUrls: ['./side-card.component.scss']
})
export class SideCardComponent implements OnInit {

  @Input()
  public company: Company;

  userId = 3;

  constructor(
    private companyService: CompanyService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  reservateField(){
    //Open Dialog
    this.companyService.reservateField(this.userId, "3/03/2022", "14");
  }
    
  openDialog(): void {
    const dialogRef = this.dialog.open(ReviewsDialogComponent, {
      data: {},
      width: '700px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });

    this.companyService.getReviews(this.company.id);
  }
  
  
}
