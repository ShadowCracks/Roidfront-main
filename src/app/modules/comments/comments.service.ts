import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "@environments/environment";
import { CommentDto, CommentsQuery, CreateCommentDto } from "./comment.classes";
import { Observable } from "rxjs";
import { queryString } from "@app/globals/helpers";

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  protected basePath: string = `${environment.basePath}`;
  constructor(private http: HttpClient) { }

  /**
   * 
   * @param commentDto 
   * @returns 
   */
  createComment(commentDto: CreateCommentDto): Observable<CommentDto> {
    const url = `${this.basePath}/comments`;
    return this.http.post<CommentDto>(url, commentDto);
  }

  /**
   * 
   * @param commentDto 
   * @returns 
   */
  getComments(commentQuery: CommentsQuery): Observable<CommentDto[]> {
    const qs = queryString(commentQuery);
    const url = `${this.basePath}/comments?${qs}`;
    return this.http.get<CommentDto[]>(url);
  }
}