import { Component } from '@angular/core';
import { CountriesService } from '../../services/countriesservices.service';
import { Country } from '../../interfaces/country';
@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styleUrls: ['./by-capital-page.component.css']
})
export class ByCapitalPageComponent {
  constructor(private countriesService: CountriesService){}
  
  public countries: Country[] = [];

  searchByCapital( term:string ):void{
    this.countriesService.searchCapital(term).subscribe((c)=>{ this.countries = c })
  }
}
