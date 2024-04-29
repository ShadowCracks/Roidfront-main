import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "@environments/environment";
import { Observable } from "rxjs";
import { SteroidDto} from "./steroids.classes";

@Injectable({
  providedIn: 'root'
})
export class SteroidsService {
  protected basePath: string = `${environment.basePath}`;
  constructor(private http: HttpClient) { }

  getSteroids(): Observable<SteroidDto[]> {
    const url = `${this.basePath}/steroids`
    return this.http.get<SteroidDto[]>(url)
  }
  
  getSteroidById(steroidId: string): Observable<SteroidDto> {
    const url = `${this.basePath}/steroids/${steroidId}`
    return this.http.get<SteroidDto>(url)
  }
}