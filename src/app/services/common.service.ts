import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  url = environment.api;

  constructor(private http: HttpClient) {}

  public getNews(query: any, limit = 9, skip = 0): Observable<any> {
    return this.http.get<any>(
      `${
        this.url
      }/query?fields={"title": 1, "description": 1, "image": 1, "keyword": 1, "publishDate": 1, "slug": 1}&limit=${limit}&skip=${
        limit * skip
      }&query={"tags": {"$elemMatch": {"id": "${query}"}}}`
    );
    //query?fields={"title": 1, "description": 1, "image": 1, "keyword": 1, "publishDate": 1, "slug": 1}&limit=1&skip=0&query={"tags": {"$elemMatch": {"id": "bsc"}}}
    // query?fields={"tags": 1}&limit=20&skip=0&query={"tags": {"$elemMatch": {"id": "latest"}}}
  }
  public getContent(slug: any): Observable<any> {
    return this.http.get<any>(
      `${this.url}/query?query={"slug": "${slug}"}&fields={"title": 1, "description": 1, "image": 1, "keyword": 1, "publishDate": 1, "slug": 1, "body": 1}`
    );
  }
}
