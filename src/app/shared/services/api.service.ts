import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
@Injectable({
  providedIn: "root",
})
export class ApiService {
  apiUrl: string = "http://localhost:3000/api";
  constructor(private http: HttpClient) {}

  getForumTopics() {
    return this.http.get(`${this.apiUrl}/forum/topic/`);
  }

  getForums() {
    return this.http.get(`${this.apiUrl}/forum/`);
  }

  getNewsList() {
    return this.http.get(`${this.apiUrl}/news/`);
  }

  getNews(newsId: any) {
    return this.http.get(`${this.apiUrl}/news/${newsId}`);
  }

  getGroups() {
    return this.http.get(`${this.apiUrl}/group/`);
  }

  getGroup(groupId: any) {
    return this.http.get(`${this.apiUrl}/group/${groupId}`);
  }

  getSteroidCycles() {
    return this.http.get(`${this.apiUrl}/steroids/cycle`);
  }

  getSteroidTalks() {
    return this.http.get(`${this.apiUrl}/steroids/talk`);
  }

  getSteroidTalk(talkId: any) {
    return this.http.get(`${this.apiUrl}/steroids/talk/${talkId}`);
  }

  getSteroidsReviewComments() {
    return this.http.get(`${this.apiUrl}/steroids/review_comment`);
  }

  getSteroidsReviews() {
    return this.http.get(`${this.apiUrl}/steroids/review`);
  }

  getSteroidReview(reviewId: any) {
    return this.http.get(`${this.apiUrl}/steroids/review/${reviewId}`);
  }

  getSourceTalks(limitVar: any, skipVar: any) {
    return this.http.get(
      `${this.apiUrl}/sourcetalk?limit=${limitVar}&skip=${skipVar}`
    );
  }

  getSourceTalkLastRecord() {
    return this.http.get(`${this.apiUrl}/sourcetalk-lastrecord`);
  }

  getSourceInfo(sourceId: any) {
    return this.http.get(`${this.apiUrl}/sourcetalkinfo/${sourceId}`);
  }

  getSourceComments(sourceId: any) {
    return this.http.get(`${this.apiUrl}/sourcetalkcomments/${sourceId}`);
  }

  postUserRegistration(requestBody: any) {
    return this.http.post(`${this.apiUrl}/users`, requestBody);
  }

  updateSourceComments(requestBody: any) {
    return this.http.put(`${this.apiUrl}/sourcetalkcomments`, requestBody);
  }

  // ===== Source Review - Start ===== //
  getSourceReviews(limitVar: any, skipVar: any) {
    return this.http.get(
      `${this.apiUrl}/sourcereview?limit=${limitVar}&skip=${skipVar}`
    );
  }
  getSourceReview(reviewId: any) {
    return this.http.get(`${this.apiUrl}/source/review/${reviewId}`);
  }
  // ===== Source Review - End ===== //

  postSourceComments(requestBody: any) {
    return this.http.post(`${this.apiUrl}/sourcetalkcomments`, requestBody);
  }
  postUserLogin(requestBody: any) {
    return this.http.post(`${this.apiUrl}/users/login`, requestBody);
  }
  postSourceTalk(requestBody: any) {
    return this.http.post(`${this.apiUrl}/sourcetalk`, requestBody);
  }
  postSourceTalkInfo(requestBody: any) {
    return this.http.post(`${this.apiUrl}/sourcetalkinfo`, requestBody);
  }
}
