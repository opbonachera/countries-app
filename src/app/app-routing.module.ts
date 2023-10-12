import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomePageComponent } from "./shared/pages/homepage/homepage.component";
import { AboutPage } from "./shared/pages/about/about.page.component";
import { ContactPageComponent } from "./shared/pages/contact/contact.page.component";
import { CountriesModule } from "./countries/countries.module";

const routes: Routes = [
    {
        path:'',
        component: HomePageComponent
    },
    {
        path:'about',
        component: AboutPage
    },
    {
        path:'contact',
        component:ContactPageComponent
    },
    {
        path:'countries',
        loadChildren:()=> import('./countries/countries-routing.module').then( m => m.CountriesRoutingModule)
    },
    {
        path:'**',
        component:HomePageComponent
    }
]

@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports:[
        RouterModule
    ]
})

export class AppRouterModule{}