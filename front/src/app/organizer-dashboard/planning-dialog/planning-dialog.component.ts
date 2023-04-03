import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ReservationService } from 'src/app/services/reservation.service';

interface Hour {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-planning-dialog',
  templateUrl: './planning-dialog.component.html',
  styleUrls: ['./planning-dialog.component.scss']
})
export class PlanningDialogComponent implements OnInit {

  constructor(
    private reservationService: ReservationService
  ) { }

  reservatedDate: string = "";

  reservationForm = new FormGroup({
    reservatedH: new FormControl('')
  });

  ngOnInit(): void {
  }

  hours: Hour[] = [
    {value: '7', viewValue: '7:00'},
    {value: '8', viewValue: '8:00'},
    {value: '9', viewValue: '9:00'},
    {value: '10', viewValue: '10:00'},
    {value: '11', viewValue: '11:00'},
    {value: '12', viewValue: '12:00'},
    {value: '13', viewValue: '13:00'},
    {value: '14', viewValue: '14:00'},
  ];

  addNewReservation(){
    if(this.reservationForm.value?.reservatedH){
      this.reservationService.addNewReservation(this.reservationForm.value?.reservatedH, this.reservatedDate, "1234314321114").subscribe(
        (e) => console.log(e)
      );
    }
  }

}
