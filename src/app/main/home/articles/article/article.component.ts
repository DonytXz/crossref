import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
})
export class ArticleComponent implements OnInit {
  @Input() article: any;
  title: any;
  date: any;
  publisher: any;
  lang: any;
  link: any;
  doi: any;

  constructor(private router: Router) {}

  setValues() {
    this.title = this.article?.title?.[0] ? this.article.title[0] : 'N/A';
    this.date = new Date(
      this.article.created['date-time']
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

  handleRedirect(){
    this.router.navigate(['details'], { state: { doi: this.doi } });
  }

  goToLink(url: string) {
    window.open(url, '_blank');
  }

  ngOnInit(): void {
    this.setValues();
  }
}
