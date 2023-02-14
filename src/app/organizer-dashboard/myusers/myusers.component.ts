import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { CompanyService } from 'src/app/services/company.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-myusers',
  templateUrl: './myusers.component.html',
  styleUrls: ['./myusers.component.scss']
})
export class MyusersComponent implements OnInit {

  constructor(
    private userService: UserService,
    private companyService: CompanyService,
  ) { }

  users: User[];

  isLoading: boolean;
  periods: {
    value: string,
    viewValue: string,
  }[];

  revenue: any;
  fieldsStats: any; 

  ngOnInit(): void {
    this.users = this.userService.getUsersByOrga(1);
    this.isLoading = false;
    this.periods = [
      {value: 'janvier', viewValue: 'Janvier'},
      {value: 'fevrier', viewValue: 'Fevrier'},
      {value: 'mars', viewValue: 'Mars'},
    ];

    //Faire un forkJoin (RxJs) quand il y aura un subscrine
    this.fieldsStats = this.companyService.getStatsFieldsReservatedPerPeriod();

    this.revenue = this.companyService.getRevenuePerPeriod();

  }
}
