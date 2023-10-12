import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageComponent } from './pages/homepage/homepage.component';
import { AboutPage } from './pages/about/about.page.component';
import { SharedSidebar } from './components/sidebar/sidebar.component';
import { AppRouterModule } from '../app-routing.module';
import { ContactPageComponent } from './pages/contact/contact.page.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';

@NgModule({
  declarations: [
    HomePageComponent,
    AboutPage,
    SharedSidebar,
    ContactPageComponent,
    SearchBoxComponent
],
  imports: [
    CommonModule,
    AppRouterModule
  ],
  exports:[
    HomePageComponent,
    AboutPage,
    SharedSidebar,
    ContactPageComponent,
    SearchBoxComponent
]
})
export class SharedModule { }
