import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "@environments/environment";
import { ArticleDto, CreateArticleDto } from "./articles.classes";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  protected basePath: string = `${environment.basePath}`;
  constructor(private http: HttpClient) { }

  /**
   * 
   * @param articleDto 
   * @returns 
   */
  createArticle(articleDto: CreateArticleDto): Observable<ArticleDto> {
    const url = `${this.basePath}/articles`;
    return this.http.post<ArticleDto>(url, articleDto);
  }

  /**
   * 
   * @param articleDto 
   * @returns 
   */
  getArticles(): Observable<ArticleDto[]> {
    const url = `${this.basePath}/articles `;
    return this.http.get<ArticleDto[]>(url);
  }
}