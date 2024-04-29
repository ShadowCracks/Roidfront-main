import { BaseDto } from "@app/globals/base";
import { CommentReferenceType, CommentType } from "./comment.enums";
import { UserDto } from "../user/user.classes";

export interface CommentsQuery {
  _id?: string;
  isRated?: boolean;
  type?: string;
  referenceType?: string;
  referenceId?: string;
  userId?: string;
  limit?: number;
}
export class CommentDto extends BaseDto {
  isRated: boolean;
  comments: string;
  type: string;
  referenceType: Date;
  referenceId: string;
  user: UserDto;

  constructor() {
    super()
    this.isRated = false;
    this.comments = '';
    this.type = '';
    this.referenceType = new Date();
    this.referenceId = '';
    this.user = new UserDto();
  }
}

export class CreateCommentDto {
  comments!: string;
  referenceId!: string;
  type!: CommentType;
  referenceType!: CommentReferenceType;
}


