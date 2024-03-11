import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { TableModule } from 'primeng/table';

import { ByCapitalPageComponent } from './pages/by-capital-page/by-capital-page.component';
import { ByCountryPageComponent } from './pages/by-country-page/by-country-page.component';
import { ByRegionPageComponent } from './pages/by-region-page/by-region-page.component';
import { CountryPageComponent } from './pages/country-page/country-page.component';
import { CountriesRoutingModule } from "./countries-routing.module";
import { SharedModule } from "../shared/shared.module";
import { CountryDatatableComponent } from './components/country-datatable/country-datatable.component';

@NgModule({
    declarations: [
        ByCapitalPageComponent,
        ByCountryPageComponent,
        ByRegionPageComponent,
        CountryPageComponent,
        CountryDatatableComponent,
        
  ],
    imports:  [
        CommonModule,
        CountriesRoutingModule,
        SharedModule,
        TableModule
    ]
})
export class CountriesModule{}