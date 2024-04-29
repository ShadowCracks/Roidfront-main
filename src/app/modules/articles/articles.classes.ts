import { BaseDto } from "@app/globals/base";
import { UserDto } from "../user/user.classes";


export class ArticleDto extends BaseDto {
  title: string;
  content: string;
  user: UserDto;

  constructor() {
    super()
    this.title = '';
    this.content = '';
    this.user = new UserDto();
  }
}

export class CreateArticleDto {
  title!: string;
  content!: string;
}


