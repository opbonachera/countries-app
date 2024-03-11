import { Component, OnInit } from '@angular/core';

import { CountriesService } from '../../services/countriesservices.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styleUrls: ['./by-capital-page.component.css']
})

export class ByCapitalPageComponent implements OnInit{
  constructor(private countriesService: CountriesService){}
  
  public isLoading:    boolean = false;
  public countries:    Country[] = [];
  public initialValue: string = "";
  public results: boolean = false;

  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byCapital.countries;
    this.initialValue = this.countriesService.cacheStore.byCapital.countries[0].capital[0];
  }

  searchByCapital( term:string ):void{

    this.isLoading = true;

    setTimeout(()=>{
      this.countriesService.searchCapital(term).subscribe((c)=>{ 
        this.countries = c 
        this.isLoading = false;
        if(c.length === 0) this.results = false;
      })
    },1000)

    
  }
}
