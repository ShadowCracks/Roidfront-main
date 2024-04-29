import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "@environments/environment";
import { Observable } from "rxjs";
import { UserDto } from "./user.classes";

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  protected basePath: string = `${environment.basePath}`;
  constructor(private http: HttpClient) { }

  getUserData(): Observable<UserDto> {
    const url = `${this.basePath}/users/me`;
    return this.http.get<UserDto>(url)
  }
  
}