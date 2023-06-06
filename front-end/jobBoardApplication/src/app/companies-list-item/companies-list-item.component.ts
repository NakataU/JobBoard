import { Component, OnInit } from '@angular/core';
import { Company } from '../company';
import { CompanyService } from '../company.service';

@Component({
  selector: 'app-companies-list-item',
  templateUrl: './companies-list-item.component.html',
  styleUrls: ['./companies-list-item.component.scss']
})
export class CompaniesListItemComponent implements OnInit {
  companies: Company[] = [];

  constructor(private service: CompanyService) {}

  ngOnInit() {
    this.service.findAll().subscribe(data => {
      this.companies = data;
      console.log("here");
  })}
}
