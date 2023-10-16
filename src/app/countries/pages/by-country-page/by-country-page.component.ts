import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Country } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/countriesservices.service';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styleUrls: ['./by-country-page.component.css']
})

export class ByCountryPageComponent{
  constructor(public countriesService: CountriesService, private router: Router){}

  public countries: Country[] = [];

  searchByCountry( term: string ){
    this.countriesService.searchByCountry(term).subscribe((c)=>this.countries=c)
  }
}
