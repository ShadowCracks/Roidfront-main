import { BaseDto } from "@app/globals/base";
import { PointsDto } from "@app/globals/global.classes";
import { UserDto } from "../user/user.classes";
import { CommentDto } from "../comments/comment.classes";

class SourceDto extends BaseDto {
  url: string;
  description: string;
  htmlTitle: string;
  htmlInfo: string;
  user: UserDto;
  commentCount: number;
  lastComment: CommentDto;
  lastCommentUser: UserDto;
  points: PointsDto[];
  score: number;
  reviewCount: number;
  lastReview: CommentDto;

  constructor() {
    super();
    this.url = '';
    this.description = '';
    this.htmlTitle = '';
    this.htmlInfo = '';
    this.user = new UserDto();
    this.commentCount = 0;
    this.lastComment = new CommentDto();
    this.lastCommentUser = new UserDto();
    this.points = [];
    this.score = 0;
    this.reviewCount = 0;
    this.lastReview = new CommentDto();
  }
}

export {
  SourceDto,
};
