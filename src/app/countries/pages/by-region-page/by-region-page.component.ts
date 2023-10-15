import { Component } from '@angular/core';

import { CountriesService } from '../../services/countriesservices.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styleUrls: ['./by-region-page.component.css']
})

export class ByRegionPageComponent {
  constructor(public countriesService: CountriesService){}

  public countries: Country[] = [];

  searchByRegion( term: string ){
    this.countriesService.searchByRegion(term).subscribe((c)=>this.countries=c)
  }
}
