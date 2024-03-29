import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { ReservationService } from 'src/app/services/reservation.service';
import { PlanningDialogComponent } from '../planning-dialog/planning-dialog.component';

@Component({
  selector: 'app-planning',
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.scss']
})
export class PlanningComponent implements OnInit, OnDestroy {

  constructor(
    public dialog: MatDialog,
    private reservationService: ReservationService,
  ) { }
  
  reservationSub: Subscription;

  currentDay: Date = new Date();
  currentDayString = this.currentDay.toDateString();
  dayBefore: string = this.currentDay.setDate(this.currentDay.getDate() - 1).toString();
  dayAfter: string = this.currentDay.setDate(this.currentDay.getDate() + 2).toString();
  
  displayedColumns: string[] = ['hour', this.currentDayString, this.dayBefore, this.dayAfter];
  dataSource: any=[];
  
  fields: any;
  ngOnInit(): void {
    this.fields = [
      {value: 'field1', viewValue: 'Terrain 1'},
      {value: 'field2', viewValue: 'Terrain 2'},
      {value: 'field3', viewValue: 'Terrain 3'},
    ];
    const ELEMENT_DATA: {}[] = [
      {hour: 8, dayBefore: '', currentDay: '', dayAfter: ''},
      {hour: 9, dayBefore: '', currentDay: '', dayAfter: ''},
      {hour: 10, dayBefore: '', currentDay: '', dayAfter: ''},
      {hour: 11, dayBefore: '', currentDay: '', dayAfter: ''},
      {hour: 12, dayBefore: '', currentDay: '', dayAfter: ''},
      {hour: 13, dayBefore: '', currentDay: '', dayAfter: ''},
      {hour: 14, dayBefore: '', currentDay: '', dayAfter: ''},
      {hour: 15, dayBefore: '', currentDay: '', dayAfter: ''},
      {hour: 16, dayBefore: '', currentDay: '', dayAfter: ''},
      {hour: 17, dayBefore: '', currentDay: '', dayAfter: ''},
      {hour: 18, dayBefore: '', currentDay: '', dayAfter: ''},
      {hour: 19, dayBefore: '', currentDay: '', dayAfter: ''},
      {hour: 20, dayBefore: '', currentDay: '', dayAfter: ''},
      {hour: 21, dayBefore: '', currentDay: '', dayAfter: ''},
      {hour: 22, dayBefore: '', currentDay: '', dayAfter: ''},
      {hour: 23, dayBefore: '', currentDay: '', dayAfter: ''},
    ];
    this.dataSource = ELEMENT_DATA;

    this.reservationSub = this.reservationService.getReservation('1234314321114').subscribe(
      (reservations) => {
        reservations.forEach((resa: { hour: number; }) => {
          this.dataSource[resa.hour - 8].currentDay = "x";
        });
        
      }
    )
  }

  openCell(){
    const dialogRef = this.dialog.open(PlanningDialogComponent, {
      data: {
      },
      width: '400px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  ngOnDestroy(): void {
    this.reservationSub.unsubscribe();
  }
}
