import { BaseDto } from "@app/globals/base";
import { UserDto } from "../user/user.classes";

enum GroupType {
  PRIVATE = 'Private',
  PUBLIC = 'Public'
}

export class GroupDto extends BaseDto {
  name: string;
  description: string;
  type?: GroupType;
  user: UserDto;

  constructor() {
    super()
    this.name = '';
    this.description = '';
    this.user = new UserDto();
  }
}

export class CreateGroupDto {
  title!: string;
  content!: string;
}


