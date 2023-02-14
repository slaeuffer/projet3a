import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Company } from '../models/company.model';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  private configUrl = environment.apiUrl;

  constructor(
    private http: HttpClient
  ) { }

  getCompanyById(companyId: number){
    const route = `${this.configUrl}company/${companyId}`;
    // return this.http.get<Company>(route);
  }

  getAllCompanies(){
    const company = {
      id: 1,
      name: "Dream Five",
      address: "5 rue du foot, Marseille",
      isDeleted: false,
      rating: 3,
      reviews: []
    };
    return [{
      id: 1,
      name: "Dream Five",
      address: "5 rue du foot, Marseille",
      isDeleted: false,
      rating: 3,
      reviews: [
          {
              id: 1,
              company: company,
              date: Date.now(),
              content: "2 terrains fonctionnels..",
              rating: 3,
          },
          {
              id: 2,
              company: company,
              date: Date.now(),
              content: "Bof...",
              rating: 2,
          }
      ]
    },{
      id: 2,
      name: "Dream Five",
      address: "5 rue du foot, Marseille",
      isDeleted: false,
      rating: 3,
      reviews: [
          {
              id: 1,
              company: company,
              date: Date.now(),
              content: "2 terrains fonctionnels..",
              rating: 3,
          },
          {
              id: 2,
              company: company,
              date: Date.now(),
              content: "Bof...",
              rating: 2,
          }
      ]
    }];
  }

  getRevenuePerPeriod(){
    return {
      nb: 400,
      fees: 150,
      prepaiment: 250,
    }
  }
  
  getStatsFieldsReservatedPerPeriod(){
    return {
      nb: 17
    }
  }
  reservateField(userId: number, date: string, hour: string){

  }

  getReviews(companyId: number){

  }
}
