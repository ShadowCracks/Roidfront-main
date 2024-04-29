import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "@environments/environment";
import { SourceDto } from "./sources.classes";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SourcesService {
  protected basePath: string = `${environment.basePath}`;
  constructor(private http: HttpClient) { }

  getSources(): Observable<SourceDto[]> {
    const url = `${this.basePath}/sources`
    return this.http.get<SourceDto[]>(url);
  }

  getSourceById(sourceId: string): Observable<SourceDto> {
    const url = `${this.basePath}/sources/${sourceId}`
    return this.http.get<SourceDto>(url);
  }
  
}