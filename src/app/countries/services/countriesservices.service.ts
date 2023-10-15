import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, of, catchError, map } from 'rxjs';

import { Country } from '../interfaces/country';
import { mapToCanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private API_URL:string = 'https://restcountries.com/v3.1/'
  constructor( private httpClient: HttpClient) {}

  searchCapital( term:string ): Observable<Country[]>{
    return this.httpClient.get<Country[]>(`${this.API_URL}/capital/${term}`)
    .pipe(
      catchError( error => of([]))
    )
  }

  searchByRegion( term:string ): Observable<Country[]>{
    return this.httpClient.get<Country[]>(`${this.API_URL}/region/${term}`)
    .pipe(
      catchError( error => of([]))
    )
  }

  searchByCountry( term:string ): Observable<Country[]>{
    return this.httpClient.get<Country[]>(`${this.API_URL}/name/${term}`)
    .pipe(
      catchError( error => of([]))
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
