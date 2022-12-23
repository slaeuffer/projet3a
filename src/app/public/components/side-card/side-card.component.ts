import { Component, Input, OnInit } from '@angular/core';
import { Company } from 'src/app/models/company.model';

@Component({
  selector: 'app-side-card',
  templateUrl: './side-card.component.html',
  styleUrls: ['./side-card.component.scss']
})
export class SideCardComponent implements OnInit {

  @Input()
  public company: Company;

  constructor() { }

  ngOnInit(): void {
  }

}
