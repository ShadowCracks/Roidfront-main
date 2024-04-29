import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "@environments/environment";
import { LoginDto, LoginResponseDto, RegisterDto, ResetPasswordDto, UserDto } from "./auth.types";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  protected basePath: string = `${environment.basePath}`;
  constructor(private http: HttpClient) { }

  /**
   * 
   * @param loginDto 
   * @returns 
   */
  login(loginDto: LoginDto) {
    const url = `${this.basePath}/auth/login`;
    return this.http.post<LoginResponseDto>(url, loginDto);
  }

  /**
   * 
   * @param registerDto 
   * @returns 
   */
  register(registerDto: RegisterDto) {
    const url = `${this.basePath}/auth/register `;
    return this.http.post<LoginResponseDto>(url, registerDto);
  }

  /**
   * 
   * @param resetPasswordDto 
   * @returns 
   */
  resetPassword(resetPasswordDto: ResetPasswordDto, token: string) {
    const url = `${this.basePath}/auth/reset-password/${token} `;
    return this.http.post(url, resetPasswordDto);
  }

  /**
   * 
   * @param email 
   * @returns 
   */
  forgotPassword(email: string) {
    const url = `${this.basePath}/auth/forgot-password `;
    return this.http.post(url, { email });
  }
  
}