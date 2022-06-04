import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticlesComponent } from './articles.component';
import { ArticleComponent } from './article/article.component';

import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

@NgModule({
  declarations: [ArticlesComponent, ArticleComponent],
  imports: [CommonModule, HttpClientModule, RouterModule],
  exports: [ArticlesComponent, ArticleComponent],
})
export class ArticlesModule {}
