import { Component, Input, OnInit } from '@angular/core';
import { Company } from 'src/app/models/company.model';
import { CompanyService } from 'src/app/services/company.service';

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
    private companyService: CompanyService
  ) { }

  ngOnInit(): void {
  }

  reservateField(){
    //Open Dialog
    this.companyService.reservateField(this.userId, "3/03/2022", "14");
  }

  getReviews(){
    //Open Dialog ???
    this.companyService.getReviews(this.company.id);
  }
}
