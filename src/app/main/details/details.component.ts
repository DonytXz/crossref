import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticlesService } from '../home/articles.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  doi: any;
  article: any;
  title: any;
  date: any;
  publisher: any;
  lang: any;
  link: any;
  constructor(
    private _articlesService: ArticlesService,
    private router: Router
  ) {
    this.doi = this.router.getCurrentNavigation()?.extras?.state?.['doi'];
  }
  // get articles by doi
  getArticlesByDoi() {
    this._articlesService.getArticlesByDoi(this.doi).subscribe((data) => {
      let articleData: any = data;
      this.article = articleData?.['message'];
      this.setValues();
    });
  }
  setValues() {
    this.title = this.article?.title?.[0] ? this.article.title[0] : 'N/A';
    this.date = new Date(
      this.article.created?.['date-time']
        ? this.article.created['date-time']
        : 'N/A'
    );
    this.publisher = this.article.publisher ? this.article.publisher : 'N/A';
    this.lang = this.article.language ? this.article.language : 'N/A';
    this.link = this.article?.resource?.['primary']?.URL
      ? this.article.resource['primary'].URL
      : 'N/A';
    this.doi = this.article?.DOI ? this.article.DOI : 'N/A';
  }
  ngOnInit(): void {
    this.getArticlesByDoi();
  }
}
