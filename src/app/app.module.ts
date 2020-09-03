import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';

import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { FilterComponent } from './Components/filter/filter.component';
import { ProductListComponent } from './Components/product-list/product-list.component';
import { ProductComponent } from './Components/product/product.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'; 

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FilterComponent,
    ProductListComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatProgressBarModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
