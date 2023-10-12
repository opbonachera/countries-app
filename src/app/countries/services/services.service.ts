import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs' 
import { Country } from '../interfaces/country';
@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private API_URL:string = 'https://restcountries.com/v3.1/'
  constructor( private httpClient: HttpClient) {}

  searchCapital( term:string ): Observable<Country[]>{
    return this.httpClient.get<Country[]>(`${this.API_URL}/capital/${term}`);
  }

  
}
