import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';

import { HomeModule } from './main/home/home.module';
import { HeaderModule } from './main/common/header/header.module';
import { DetailsModule } from './main/details/details.module';
import { FooterModule } from './main/common/footer/footer.module';
import { PaginationModule } from './main/common/pagination/pagination.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    //APP
    HomeModule,
    HeaderModule,
    DetailsModule,
    FooterModule,
    PaginationModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
