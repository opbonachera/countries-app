import { Component, Input } from '@angular/core';

import { Country } from '../../interfaces/country.interface';
@Component({
  selector: 'app-country-datatable',
  templateUrl: './country-datatable.component.html',
  styleUrls: ['./country-datatable.component.css']
})

export class CountryDatatableComponent {
  @Input()
  public countries: Country[] = [];

  @Input()
  public isLoading: boolean = false;
}
