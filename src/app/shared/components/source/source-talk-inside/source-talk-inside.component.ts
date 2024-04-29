import { Component, Inject } from "@angular/core";
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef,
} from "@angular/material/dialog";
import { Router, ActivatedRoute } from "@angular/router";
import { ApiService } from "src/app/shared/services/api.service";

@Component({
  selector: "app-source-talk-inside",
  templateUrl: "./source-talk-inside.component.html",
  styleUrls: ["./source-talk-inside.component.css"],
})
export class SourceTalkInsideComponent {
  private userId: any = "";
  sourceTalkInfo: any = {};
  isCommentBoxVisible: any = false;
  sourceTalkComments: any = [];
  private newCommentUserName: string = "";
  private newCommentText: string = "";
  loading: boolean = false;
  // sourceTalkComments: any = [
  //   {
  //     _id: "6527caa8ae54213afc25f42b",
  //     commentId: "1",
  //     sourceId: "1",
  //     commentText: "Ding dong- a pack has landed",
  //     commentKarma: "8",
  //     commentUserName: "newTheRockSays",
  //     commentUserId: "1",
  //     userProfileImage:
  //       "../../../../../assets/images/pages/author-image-01.png",
  //     parentCommentId: null,
  //     parentReplyId: null,
  //     likesCount: "1",
  //     likesUser: [],
  //     dislikesCount: "0",
  //     dislikesUser: [],
  //     createdAt: "2023-10-12T10:30:00.140Z",
  //     updatedAt: "2023-10-12T10:30:00.140Z",
  //     __v: 0,
  //   },
  //   {
  //     _id: "6527cba8ae54213afc25f42d",
  //     commentId: "2",
  //     sourceId: "1",
  //     commentText: "This promo pack showed up today",
  //     commentKarma: "94",
  //     commentUserName: "Claudezilla",
  //     commentUserId: "2",
  //     userProfileImage:
  //       "../../../../../assets/images/pages/author-image-01.png",
  //     parentCommentId: null,
  //     parentReplyId: null,
  //     likesCount: "1",
  //     likesUser: [],
  //     dislikesCount: "0",
  //     dislikesUser: [],
  //     createdAt: "2023-10-12T10:34:16.357Z",
  //     updatedAt: "2023-10-12T10:34:16.357Z",
  //     __v: 0,
  //   },
  //   {
  //     _id: "6527cc04ae54213afc25f42f",
  //     commentId: "3",
  //     sourceId: "1",
  //     commentText:
  //       "Hey guys no rush or worrying just wanted to know if anyone has had there promos TD yet. If I remember correctly tracking won't work till it reaches destination country. I'm just surprised mine hasn't yet. Probably just me",
  //     commentKarma: "434",
  //     commentUserName: "Pounds23",
  //     commentUserId: "3",
  //     userProfileImage:
  //       "../../../../../assets/images/pages/author-image-01.png",
  //     parentCommentId: null,
  //     parentReplyId: null,
  //     likesCount: "0",
  //     likesUser: [],
  //     dislikesCount: "0",
  //     dislikesUser: [],
  //     createdAt: "2023-10-12T10:35:48.049Z",
  //     updatedAt: "2023-10-12T10:35:48.049Z",
  //     __v: 0,
  //   },
  //   {
  //     _id: "6527cc69ae54213afc25f431",
  //     commentId: "4",
  //     sourceId: "1",
  //     commentText:
  //       "It will literally appear in tracking as soon as it touches down in your country mate, then the next day it will be delivered so it all happens very quick.",
  //     commentKarma: "3000",
  //     commentUserName: "press1",
  //     commentUserId: "4",
  //     userProfileImage:
  //       "../../../../../assets/images/pages/author-image-01.png",
  //     parentCommentId: "3",
  //     parentReplyId: null,
  //     likesCount: "1",
  //     likesUser: [],
  //     dislikesCount: "0",
  //     dislikesUser: [],
  //     createdAt: "2023-10-12T10:37:29.536Z",
  //     updatedAt: "2023-10-12T10:37:29.536Z",
  //     __v: 0,
  //   },
  //   {
  //     _id: "6527ccdfae54213afc25f433",
  //     commentId: "5",
  //     sourceId: "1",
  //     commentText:
  //       "Thanks press I remembered it being something like that I just couldn't remember exactly brother is is soild and on top of shit communication has been top notch with him. I would say one of the better domestic and intl bigger srcs at the moment",
  //     commentKarma: "434",
  //     commentUserName: "Pounds23",
  //     commentUserId: "3",
  //     userProfileImage:
  //       "../../../../../assets/images/pages/author-image-01.png",
  //     parentCommentId: "3",
  //     parentReplyId: "4",
  //     likesCount: "0",
  //     likesUser: [],
  //     dislikesCount: "0",
  //     dislikesUser: [],
  //     createdAt: "2023-10-12T10:39:27.078Z",
  //     updatedAt: "2023-10-12T10:39:27.078Z",
  //     __v: 0,
  //   },
  // ];

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
    private router: Router,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.userId = this.route.snapshot.paramMap.get("id");
    console.log("getServiceTalks ID--->", this.userId);

    this.apiService.getSourceInfo(this.userId).subscribe(
      (res: any) => {
        console.log("getServiceTalksInfo--->", res);
        this.sourceTalkInfo = res[0];
        // this.sourceTalkArray = res;
      },
      (error) => {
        console.log("getServiceTalks Errors--->", error);
      }
    );

    this.apiService.getSourceComments(this.userId).subscribe(
      (res: any) => {
        console.log("getServiceTalksComments--->", res);
        if (res?.length) {
          this.sourceTalkComments = res.sort((a: any, b: any) => {
            return Number(b.commentKarma) - Number(a.commentKarma);
          });
        }

        // this.sourceTalkArray = res;
      },
      (error) => {
        console.log("getServiceTalks Errors--->", error);
      }
    );
  }

  toggleCommentBox() {
    this.isCommentBoxVisible = !this.isCommentBoxVisible;
  }

  openPromoteModal(
    enterAnimationDuration: string,
    exitAnimationDuration: string,
    sourceTalkComment: any
  ): void {
    this.dialog.open(PromoteModal, {
      width: "300px",
      enterAnimationDuration,
      exitAnimationDuration,
      data: {
        sourceTalkComment,
      },
    });
  }

  createRange() {
    return new Array(
      this.sourceTalkComments.length / 10 < 1
        ? 1
        : (this.sourceTalkComments.length / 10).toFixed(0)
    )
      .fill(0)
      .map((n, index) => index + 1);
  }

  onChangeName(e: any) {
    this.newCommentUserName = e.target.value;
  }

  onChangeText(e: any) {
    this.newCommentText = e.target.value;
  }

  onSubmitComment() {
    this.loading = true;
    this.apiService
      .postSourceComments({
        commentId: this.sourceTalkComments.length + 1,
        sourceId: this.sourceTalkInfo.sourceId,
        commentText: this.newCommentText,
        commentKarma: "0",
        commentUserName: this.newCommentUserName,
        commentUserId: this.userId,
        userProfileImage: "../../../../../assets/images/pages/user.png",
        likesCount: "0",
        likesUser: [],
        dislikesCount: "0",
        dislikesUser: [],
      })
      .subscribe((res: any) => {
        this.loading = false;
        window.location.reload();
        console.log("postSourceComments--->", res);
      });
  }

  goToBack() {
    this.router.navigateByUrl(`/source-talk`);
  }
}

interface ModalData {
  sourceTalkComment: any;
}

@Component({
  selector: "app-promote-modal",
  templateUrl: "promote-modal.component.html",
  styleUrls: ["./promote-modal.component.css"],
})
export class PromoteModal {
  private sourceTalkComment: any = {};
  promoteValue: any = 1;
  isShowOptions: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<PromoteModal>,
    private apiService: ApiService,
    @Inject(MAT_DIALOG_DATA) public data: ModalData
  ) {}

  ngOnInit() {
    this.sourceTalkComment = this.data.sourceTalkComment;
  }

  onChange(e: any) {
    this.promoteValue = e.target.value;
  }

  onPromote() {
    this.apiService
      .updateSourceComments({
        ...this.sourceTalkComment,
        commentKarma:
          Number(this.sourceTalkComment.commentKarma) +
          Number(this.promoteValue),
      })
      .subscribe((res: any) => {
        console.log("updateSourceComments--->", res);
      });
    this.dialogRef.close();
    window.location.reload();
  }

  onShowOptions(prop: boolean) {
    this.isShowOptions = prop;
  }
}
