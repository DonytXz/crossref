import { Component, OnInit, SimpleChanges } from '@angular/core';
import { ArticlesService } from './articles.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  page: number = 1;
  query: string = '';
  articlesFound:any = "";
  constructor(private _articlesService: ArticlesService) {}

  emiterPage(response: any) {
    this.page = response;
  }

  // get articles by text
  getArticlesByTxt() {
    this._articlesService.getArticlesByTxt(this.query).subscribe((data) => {
      this.articlesFound = data;
    });
  }
  handleSearch() {
    this.getArticlesByTxt();
  }
  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
  }
}
