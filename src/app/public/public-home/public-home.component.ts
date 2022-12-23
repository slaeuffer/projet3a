import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/models/company.model';

@Component({
  selector: 'app-public-home',
  templateUrl: './public-home.component.html',
  styleUrls: ['./public-home.component.scss']
})
export class PublicHomeComponent implements OnInit {

    company: Company;
    constructor() { }
  
  ngOnInit(): void {
    this.company = {
        id: 1,
        name: "Dream Five",
        address: "5 rue du foot, Marseille",
        isDeleted: false,
        rating: 3,
        reviews: [
            {
                id: 1,
                company: this.company,
                date: Date.now(),
                content: "2 terrains fonctionnels..",
                rating: 3,
            },
            {
                id: 2,
                company: this.company,
                date: Date.now(),
                content: "Bof...",
                rating: 2,
            }
        ]
    }
  }

}
