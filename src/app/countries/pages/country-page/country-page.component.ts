import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { tap, switchMap } from 'rxjs';

import { CountriesService } from '../../services/countriesservices.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styleUrls: ['./country-page.component.css']
})

export class CountryPageComponent implements OnInit{

  constructor(
              private activatedRoute: ActivatedRoute,
              private countriesService: CountriesService,
              private router: Router,
              ){}

  public country?: Country;
  public loading: boolean = true;

  ngOnInit(): void {
        this.activatedRoute.params
        .pipe(switchMap(({ id }) => this.countriesService.searchByAlphaCode(id)))
        .subscribe((country)=>{
          if(!country) return this.router.navigateByUrl('');
          this.loading = false
          return this.country = country;
        })
      } 

}
