import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "@environments/environment";
import { GroupDto, CreateGroupDto } from "./groups.classes";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GroupsService {
  protected basePath: string = `${environment.basePath}`;
  constructor(private http: HttpClient) { }

  /**
   * 
   * @param groupDto 
   * @returns 
   */
  createGroup(groupDto: CreateGroupDto): Observable<GroupDto> {
    const url = `${this.basePath}/groups`;
    return this.http.post<GroupDto>(url, groupDto);
  }

  /**
   * 
   * @param groupDto 
   * @returns 
   */
  getGroups(): Observable<GroupDto[]> {
    const url = `${this.basePath}/groups `;
    return this.http.get<GroupDto[]>(url);
  }
}