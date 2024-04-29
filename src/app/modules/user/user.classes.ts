import { BaseDto } from "@app/globals/base";

export class UserDto extends BaseDto {
  username: string;
  email: string;
  aboutMe: string;
  birthDate: Date;
  weight: number;
  height: number;
  bodyFat: number;
  role: string;

  constructor() {
    super()
    this.username = '';
    this.email = '';
    this.aboutMe = '';
    this.birthDate = new Date();
    this.weight = 0;
    this.height = 0;
    this.bodyFat = 0;
    this.role = '';
  }
}