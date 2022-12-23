import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/models/company.model';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-public-home',
  templateUrl: './public-home.component.html',
  styleUrls: ['./public-home.component.scss']
})
export class PublicHomeComponent implements OnInit {

    companies: Company[];
    constructor(
        private companyService: CompanyService
    ) { }
  
  ngOnInit(): void {
    this.companies = this.companyService.getAllCompanies() 
  }

}
