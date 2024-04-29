import { UserDto } from "../user/user.classes";

interface LoginDto {
  usernameOrEmail: string;
  password: string;
}

interface ResetPasswordDto {
  newPassword: string;
  confirmPassword: string;
}

interface RegisterDto {
  username: string;
  password: string;
  confirmPassword: string;
  email: string;
  aboutMe: string;
  birthDate: Date;
  weight: number;
  height: number;
  bodyFat: number;
}

interface TokenDto {
  expiresIn: number;
  accessToken: string;
}

interface LoginResponseDto {
  user: UserDto;
  token: TokenDto;
}



export {
  LoginDto,
  RegisterDto,
  UserDto,
  LoginResponseDto,
  ResetPasswordDto
}