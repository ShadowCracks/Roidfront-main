import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "@environments/environment";
import { Observable } from "rxjs";
import { ManufacturerDto } from "./manufacturer.classes";

@Injectable({
  providedIn: 'root'
})
export class ManufacturersService {
  protected basePath: string = `${environment.basePath}`;
  constructor(private http: HttpClient) { }

  getManufacturers(): Observable<ManufacturerDto[]> {
    const url = `${this.basePath}/manufacturers`
    return this.http.get<ManufacturerDto[]>(url);
  }
}