import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ReservationService } from 'src/app/services/reservation.service';

@Component({
  selector: 'app-reservate-dialog',
  templateUrl: './reservate-dialog.component.html',
  styleUrls: ['./reservate-dialog.component.scss']
})
export class ReservateDialogComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public company: any,
    private reservationService: ReservationService,
  ) {}

  currentDay: Date = new Date();
  currentDayString = this.currentDay.toDateString();
  dayBefore: string = this.currentDay.setDate(this.currentDay.getDate() - 1).toString();
  dayAfter: string = this.currentDay.setDate(this.currentDay.getDate() + 2).toString();
  reservatedHour: string = '';
  reservatedDate: string = this.currentDayString;

  displayedColumns: string[] = ['col1','col2', 'col3', 'col4'];
  dataSource: any=[];

  ngOnInit(): void {
    const ELEMENT_DATA: {}[] = [
      {col1: '8', col2: '9', col3: '10', col4: '11'},
      {col1: '12', col2: '13', col3: '14', col4: '15'},
      {col1: '16', col2: '17', col3: '18', col4: '19'},
      {col1: '20', col2: '21', col3: '22', col4: '23'},
    ];
    this.dataSource = ELEMENT_DATA;
  }

  selectHour(val: string){
    this.reservatedHour = val;
    console.log(val)
  }

  reservate(){
    if(this.reservatedHour){
      this.reservationService.addNewReservation(this.reservatedHour, this.reservatedDate, this.company?.company?._id).subscribe(
        (e) => console.log(e)
      );
    }
  }
}
