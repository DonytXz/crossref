import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { ArticlesService } from '../articles.service';
import { environment } from 'environments/environment';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css'],
})
export class ArticlesComponent implements OnInit {
  @Input() page: number = 1;
  @Input() articlesFound: any;

  url = `${environment.apiUrl}`;
  lodding: boolean = true;
  articles: any;
  rows: number = 6;
  constructor(private _articlesService: ArticlesService) {}

  // get all articles
  getAllArticles() {
    this._articlesService
      .getAllArticles(this.rows, this.page * this.rows)
      .subscribe((data) => {
        this.articles = data;
        // this.total = this.articles.message.query["start-index"]
        this.lodding = false;
      });
  }

  ngOnInit(): void {
    this.getAllArticles();
    console.log(this.articlesFound);
  }

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    this.getAllArticles();
    if (this.articlesFound != "") {
      this.articles = this.articlesFound;
    }
  }
}
