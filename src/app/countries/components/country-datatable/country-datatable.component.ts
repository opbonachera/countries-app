import { Component, Input } from '@angular/core';

import { Country } from '../../interfaces/country';
@Component({
  selector: 'app-country-datatable',
  templateUrl: './country-datatable.component.html',
  styleUrls: ['./country-datatable.component.css']
})

export class CountryDatatableComponent {
  @Input()
  public countries: Country[] = [];
}
