import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/shared/services/api.service';
import { CommonService } from 'src/app/shared/services/common.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {

  emailAddress = '';
  password = '';

  constructor(private apiService: ApiService, private router: Router, private toastr: ToastrService, private commonService: CommonService){}

  ngOnInit() {

  }

  login(){

    let requestBody = {
      "email": this.emailAddress,
      "password": this.password
      }
    this.apiService.postUserLogin(requestBody).subscribe((res:any)=>{
      console.log('requestBody--->',res);
      if(res.length == 0){
        this.toastr.error('Email not found, Register');
      }
      if(res[0].password === this.password){
        this.toastr.success('User Login Successful');
        localStorage.setItem('userDetails',JSON.stringify(res[0]));
        console.log('All Good !!')
        this.commonService.isLoggedIn.next(true);
        this.router.navigateByUrl('/source-talk');
      }else{
        this.toastr.error('User Credentials not correct');
        console.log('User Credentials not correct')
      }
      
    },
    (error)=>{
      console.log('registration error--->',error);
      this.toastr.error('Please ! Try Again');
      console.log('User Credentials not correct')
    });

  }

}
