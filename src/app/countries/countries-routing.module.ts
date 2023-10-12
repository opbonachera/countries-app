import { NgModule } from '@angular/core'

import { RouterModule, Routes } from '@angular/router'
import { ByCapitalPageComponent } from './pages/by-capital-page/by-capital-page.component'
import { ByRegionPageComponent } from './pages/by-region-page/by-region-page.component'
import { ByCountryPageComponent } from './pages/by-country-page/by-country-page.component'
import { CountryPageComponent } from './pages/country-page/country-page.component'


const routes: Routes = [
    {
        path:'capital',
        component: ByCapitalPageComponent
    },
    {
        path:'country',
        component: ByCountryPageComponent
    },
    {
        path:'region',
        component: ByRegionPageComponent
    },
    {
        path:':id',
        component: CountryPageComponent
    },
    {
        path:'**',
        component: ByCapitalPageComponent
    },
]

@NgModule({
    imports:[
        RouterModule.forChild( routes )
    ],
    exports:[
        RouterModule
    ]
})

export class CountriesRoutingModule{

}