import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent {

  userName = '';
  emailAddress = '';
  password = '';
  confirmPassword = '';
  aboutYourself = '';
  dob = '';
  weight = '';
  height = '';
  bodyFat = '';

  constructor(private apiService: ApiService, private router: Router, private toastr: ToastrService){}

  ngOnInit() {

  }
  
  registerUser(){

    if(this.password !== this.confirmPassword){
      this.toastr.warning('Password Dont Match');
      console.log('Password Dont Match')
      return false;
    }

    if(
      !this.userName ||
      !this.emailAddress ||
      !this.password ||
      !this.confirmPassword ||
      !this.aboutYourself ||
      !this.dob ||
      !this.weight ||
      !this.height 
  ){
      // return response.status(400).send({message:'Send all required fields'});
      // this.toastr.error('Your login or password are incorrect');
      this.toastr.warning('Please fill the required fields');
      console.log('Please fill the required fields')
      return false;
  }

  console.log('this.userName',this.userName);
  console.log('this.emailAddress',this.emailAddress);
  console.log('this.password',this.password);
  console.log('this.confirmPassword',this.confirmPassword);
  console.log('this.aboutYourself',this.aboutYourself);
  console.log('this.dob',this.dob);
  console.log('this.weight',this.weight);
  console.log('this.height ',this.height );
  console.log('this.bodyFat',this.bodyFat);

  // this.toastr.success('All Good !!');
  // console.log('All Good !!')
  let requestBody = {
    "email": this.emailAddress,
    "userName": this.userName,
    "password": this.password,
    "publicGroupObject": {"global":true},
    "aboutYourself": this.aboutYourself,
    "dob": this.dob,
    "weight": this.weight,
    "height": this.height ,
    "bodyFat": this.bodyFat
    }
  this.apiService.postUserRegistration(requestBody).subscribe((res:any)=>{
    console.log('requestBody--->',res);
    this.toastr.success('User Registeration Successful');
    console.log('All Good !!')
    this.router.navigateByUrl('/sign-in#login');
    // this.router.navigateByUrl('/source-talk');
  },
  (error)=>{
    console.log('registration error--->',error);
    this.toastr.error('Please ! Try Again');
  });

  return true;


  }

}
