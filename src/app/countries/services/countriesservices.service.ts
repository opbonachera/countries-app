import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

import { Observable, of, catchError, map, delay, tap } from 'rxjs';

import { Country } from '../interfaces/country.interface';
import { CacheStore } from '../interfaces/cache-store.interface';

@Injectable({
  providedIn: 'root'
})

export class CountriesService{

  private API_URL:string = 'https://restcountries.com/v3.1'

  constructor( private httpClient: HttpClient) {
    console.log("Countries service")
  }

  public cacheStore: CacheStore = {
    byCapital: {term: '',countries:[]},
    byRegion:  {region:'',countries:[]},
    byCountries:    {term:'',countries:[]}
  }

  private getCountriesRequest = ( url: string ): Observable<Country[]> =>{

    return this.httpClient.get<Country[]>(url)
    .pipe(
      catchError(()=> of([])),
    )
  }

  searchCapital( term:string ): Observable<Country[]>{
    const url = `${this.API_URL}/capital/${term}`
    return this.getCountriesRequest(url).pipe(
      tap( c => this.cacheStore.byCapital = {term: term, countries: c} )
    )
  }

  searchByRegion( term:string ): Observable<Country[]>{
     const url = `${this.API_URL}/region/${term}`;
     return this.getCountriesRequest(url);
  }

  searchByCountry( term:string ): Observable<Country[]>{
    const url = `${this.API_URL}/name/${term}`
    return this.getCountriesRequest(url).pipe(
      tap( c => this.cacheStore.byCountries = {term: term, countries: c} )
    )
  }

  searchByAlphaCode( code:string ): Observable<Country | null>{
    return this.httpClient.get<Country[]>(`${this.API_URL}/alpha/${code}`)
    // Makes the http request
    .pipe(
      // Maps on the api result. As we need a single country, if the length of the array returned is greater than 0, we onyl want the first
      // element of the array. If not, we return null, because no countries have been found. 
      map(c=> c.length > 0 ? c[0] : null),
      catchError(()=>of(null))
    )
  }


}
