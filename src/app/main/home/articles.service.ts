import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import { environment } from "environments/environment";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  url = `${environment.apiUrl}`;

  constructor(private httpClient: HttpClient) {}

  // get all articles
  getAllArticles(rows:number, offset:number):Observable<Object>{
    return this.httpClient.get(this.url + `/works?rows=${rows}&offset=${offset}`)
  }
  getArticlesByTxt(txt:string):Observable<Object>{
    return this.httpClient.get(this.url + `/works?query=${txt}`)
  }
  getArticlesByDoi(doi:string):Observable<Object>{
    return this.httpClient.get(this.url + `/works/${doi}`)
  }
}
