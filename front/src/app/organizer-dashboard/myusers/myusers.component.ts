import { Component, OnInit } from '@angular/core';
import { Color } from '@swimlane/ngx-charts';
import { User } from 'src/app/models/user.model';
import { CompanyService } from 'src/app/services/company.service';
import { UserService } from 'src/app/services/user.service';
import {single} from './data';
@Component({
  selector: 'app-myusers',
  templateUrl: './myusers.component.html',
  styleUrls: ['./myusers.component.scss']
})
export class MyusersComponent implements OnInit {

  users: User[];

  isLoading: boolean;
  periods: {
    value: string,
    viewValue: string,
  }[];

  revenue: any;
  fieldsStats: any; 

  single: any[];
  public view: [number, number] = [700, 400];
  public showXAxis = true;
  public showYAxis = true;
  public gradient = false;
  public showLegend = true;
  public showXAxisLabel = true;
  public xAxisLabel: "Years";
  public showYAxisLabel = true;
  public yAxisLabel: "Salary";
  public graphDataChart: any[];
  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  } as unknown as Color;
  filteredColorScheme = { domain: new Array<string>() } as unknown as Color;
  
  constructor(
    private userService: UserService,
    private companyService: CompanyService,
  ) { 
    Object.assign(this, { single })
  }
  ngOnInit(): void {
    this.users = this.userService.getUsersByOrga(1);
    this.isLoading = false;
    this.periods = [
      {value: 'janvier', viewValue: 'Janvier'},
      {value: 'fevrier', viewValue: 'Fevrier'},
      {value: 'mars', viewValue: 'Mars'},
      {value: 'avril', viewValue: 'Avril'},
      {value: 'mai', viewValue: 'Mai'},
    ];

    //Faire un forkJoin (RxJs) quand il y aura un subscrine
    this.fieldsStats = this.companyService.getStatsFieldsReservatedPerPeriod();

    this.revenue = this.companyService.getRevenuePerPeriod();

  }
}
