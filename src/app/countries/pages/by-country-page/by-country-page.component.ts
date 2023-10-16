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

  public isLoading:    boolean = false;
  public countries: Country[] = [];
  public initialValue: string = '';

  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byCountries.countries;
    this.initialValue = this.countriesService.cacheStore.byCountries.countries[0].name.common;
  }

  searchByCountry( term: string ):void{
    this.isLoading = true;

    this.countriesService
    .searchByCountry(term)
    .subscribe((c)=>{
      this.countries = c;
      this.isLoading = false;
    })
  }
}
