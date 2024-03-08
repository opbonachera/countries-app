import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProgressSpinnerModule } from 'primeng/progressspinner';

import { HomePageComponent } from './pages/homepage/homepage.component';
import { AboutPage } from './pages/about/about.page.component';
import { SharedSidebar } from './components/sidebar/sidebar.component';
import { AppRouterModule } from '../app-routing.module';
import { ContactPageComponent } from './pages/contact/contact.page.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';

@NgModule({
  declarations: [
    HomePageComponent,
    AboutPage,
    SharedSidebar,
    ContactPageComponent,
    SearchBoxComponent,
    LoadingSpinnerComponent
],
  imports: [
    CommonModule,
    AppRouterModule,
    ProgressSpinnerModule
  ],
  exports:[
    HomePageComponent,
    AboutPage,
    SharedSidebar,
    ContactPageComponent,
    SearchBoxComponent,
    LoadingSpinnerComponent
]
})
export class SharedModule { }
