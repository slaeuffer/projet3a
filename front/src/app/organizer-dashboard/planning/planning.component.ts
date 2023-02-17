import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-planning',
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.scss']
})
export class PlanningComponent implements OnInit {

  constructor() { }
  
  fields: any;
  ngOnInit(): void {
    this.fields = [
      {value: 'field1', viewValue: 'Terrain 1'},
      {value: 'field2', viewValue: 'Terrain 2'},
      {value: 'field3', viewValue: 'Terrain 3'},
    ];
  }

}
