import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HeaderModule } from '../common/header/header.module';
import { HeroComponent } from './hero/hero.component';
import { ArticlesComponent } from './articles/articles.component';
import { ArticleComponent } from './articles/article/article.component';

import { ArticlesModule } from './articles/articles.module';
import { PaginationModule } from '../common/pagination/pagination.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent,
    HeroComponent,
  ],
  imports: [
    CommonModule,
    HeaderModule,
    ArticlesModule,
    PaginationModule,
    FormsModule
  ]
})
export class HomeModule { }
