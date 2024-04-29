import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-add-source',
  templateUrl: './add-source.component.html',
  styleUrls: ['./add-source.component.css']
})
export class AddSourceComponent {

  sourceName = '';
  estimatedDelivery = '';
  minimumOrder = '';
  paymentOption = '';
  pleaseNote = '';
  supplierIntroduction = '';
  sourceId:number = 0;

  constructor(private apiService: ApiService, private router: Router, private toastr: ToastrService){}

  ngOnInit() {

  }

  addSource(){
    this.apiService.getSourceTalkLastRecord().subscribe((res:any)=>{
      console.log('getSourceTalkLastRecord--->',res);
      console.log('All Good !!');
      this.sourceId = Number(res[0].sourceId);
      this.addSourceToDb();
      // this.addSourceDetails();
      // this.router.navigateByUrl('/source-talk');
    },
    (error)=>{
      console.log('getSourceTalkLastRecord error--->',error);
      this.toastr.error('Please ! Try Again');
    });
  }

  addSourceToDb(){
    if(
      !this.sourceName ||
      !this.estimatedDelivery ||
      !this.minimumOrder ||
      !this.paymentOption ||
      !this.pleaseNote ||
      !this.supplierIntroduction
  ){
      // return response.status(400).send({message:'Send all required fields'});
      // this.toastr.error('Your login or password are incorrect');
      this.toastr.warning('Please fill the required fields');
      console.log('Please fill the required fields')
      return false;
  }

  console.log('this.sourceName',this.sourceName);
  console.log('this.estimatedDelivery',this.estimatedDelivery);
  console.log('this.minimumOrder',this.minimumOrder);
  console.log('this.paymentOption',this.paymentOption);
  console.log('this.pleaseNote',this.pleaseNote);
  console.log('this.supplierIntroduction',this.supplierIntroduction);

  // this.toastr.success('All Good !!');
  // console.log('All Good !!')
  let requestBody = {
    "sourceId": this.sourceId,
    "sourceName": this.sourceName,
    "sourceAddedBy": 'Admin',
    "sourceAddedTime": Date.now(),
    "numOfComments": 0,
    "lastCommentUserId": '0',
    "lastCommentUserName": '0',
    "lastCommentTimestamp": '0'
    }
  this.apiService.postSourceTalk(requestBody).subscribe((res:any)=>{
    console.log('requestBody--->',res);
    console.log('All Good !!');
    this.addSourceDetails();
    // this.router.navigateByUrl('/source-talk');
  },
  (error)=>{
    console.log('registration error--->',error);
    this.toastr.error('Please ! Try Again');
  });

  return true;
  }

  addSourceDetails(){
    let requestBody = {
      "sourceId": this.sourceId,
      "sourceName": this.sourceName,
      "sourceAddedBy": 'Admin',
      "sourceAddedTime": Date.now(),
      "numOfViews": 0,
      "isOwnerVerified": 'true',
      "isOwnerSubscribed": 'true',
      "estimatedDelivery": this.estimatedDelivery ,
      "minimumOrder": this.minimumOrder,
      "paymentMethods": this.paymentOption ,
      "pleaseNote": this.pleaseNote ,
      "supplierIntroduction": this.supplierIntroduction
      }
    this.apiService.postSourceTalkInfo(requestBody).subscribe((res:any)=>{
      console.log('requestBody--->',res);
      this.toastr.success('Source Added !!!');
      console.log('All Good !!')
      // this.router.navigateByUrl('/source-talk');
    },
    (error)=>{
      console.log('registration error--->',error);
      this.toastr.error('Please ! Try Again');
    });
  }

}
