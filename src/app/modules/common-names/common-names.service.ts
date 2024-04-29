import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "@environments/environment";
import { Observable } from "rxjs";
import { CommonNameDto } from "./common-names.classes";

@Injectable({
  providedIn: 'root'
})
export class CommonNamesService {
  protected basePath: string = `${environment.basePath}`;
  constructor(private http: HttpClient) { }

  getCommonNames(): Observable<CommonNameDto[]> {
    const url = `${this.basePath}/common-names`
    return this.http.get<CommonNameDto[]>(url);
  }
}