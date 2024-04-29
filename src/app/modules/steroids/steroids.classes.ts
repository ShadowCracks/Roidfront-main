import { BaseDto } from "@app/globals/base";
import { CommonNameDto } from "../common-names/common-names.classes";
import { ManufacturerDto } from "../manufacturers/manufacturer.classes";
import { PointsDto } from "@app/globals/global.classes";
import { UserDto } from "../user/user.classes";
import { CommentDto } from "../comments/comment.classes";

export class SteroidDto extends BaseDto {
  name: string;
  user: UserDto;
  commentCount: number;
  lastComment: CommentDto;
  lastCommentUser: UserDto;
  commonName: CommonNameDto;
  manufacturer: ManufacturerDto;
  points: PointsDto[];
  score: number;
  reviewCount: number;
  lastReview: CommentDto;

  constructor() {
    super();
    this.name = '';
    this.user = new UserDto();
    this.commentCount = 0;
    this.lastComment = new CommentDto();
    this.lastCommentUser = new UserDto();
    this.commonName = new CommonNameDto();
    this.manufacturer = new ManufacturerDto();
    this.points = [];
    this.score = 0;
    this.lastReview = new CommentDto();
    this.reviewCount = 0;
  }
}

export class CreateSteroidDto {
  name!: string;
  commonNameId!: string;
  manufacturerId!: string;
}
