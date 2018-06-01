import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from "@angular/forms";
import { CommonFieldErrorUtilService } from '../npm/services/common/common.field-error.util';
import { LoginService } from '../npm/services/http/login/login.service';
import { DataLoadSpinner } from '../npm/services/dataLoadSpinner.service';
import { MenuService } from '../npm/services/menu/menu.service';
import { LocalStorageService} from 'angular-2-local-storage';
declare var $:any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[CommonFieldErrorUtilService]
})
export class LoginComponent implements OnInit {
loginForm: FormGroup;
loginDetails:any={userName:"",password:""};
buttonDisabled =false;
  constructor(private router: Router,public commonFieldErrorUtilService :CommonFieldErrorUtilService,private menuService:MenuService,private loginService :LoginService,private localStorageService:LocalStorageService,private _spinner : DataLoadSpinner) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      'userName': new FormControl(this.loginDetails.userName, [
        Validators.required,
        Validators.minLength(4)]),
      
      'password':new FormControl(this.loginDetails.password,[Validators.required])

    });
    this.commonFieldErrorUtilService.setForm(this.loginForm);
    this.localStorageService.clearAll();
  }

  // signIn() {

  //   if( this.buttonDisabled){
  //     return false;
  //   }
  //   this.buttonDisabled = true;
  //   if(!this.loginForm.valid){
  //     Object.keys(this.loginForm.controls).forEach(field => { // {1}
  //       const control = this.loginForm.get(field);            // {2}
  //       control.markAsTouched({ onlySelf: true });       // {3}
  //     });
  //     this.buttonDisabled=false;
  //     return false;
  //   }


  //   this._spinner.setSpinnerButton($("#signIn").children('i'));
  //   let request =this.loginDetails;
  //   request.userName = this.userName.value;
  //   this.localStorageService.set("menu",undefined);
  //   request.password = this.password.value;
   
  //   // this.loginService.login(request).subscribe((data)=>{
  //    let data=[
  //     {
  //       "profileId": 1,
  //       "profileName": "Admin User",
  //       "communityString": null,
  //       "dataAccess": "ALL",
  //       "accesses": null,
  //       "dashboards": null,
  //       "applicableProfiles": []
  //     },
  //     {
  //       "profileId": 2,
  //       "profileName": "Power User",
  //       "communityString": null,
  //       "dataAccess": "ALL",
  //       "accesses": null,
  //       "dashboards": null,
  //       "applicableProfiles": []
  //     }
  //   ]
  //     if(data){
  //       console.log("data.length"+data.length);
  //     if(data.length ==1){
  //         let request={};
  //         request["userName"] = this.userName.value;
  //         request["profiles"] =[];
  //   request["profiles"].push(data[0]);
  //         this.loginService.afterLogin(request).subscribe((data1)=>{
     
  //      this.menuService.setMenu(data1);
  //      this.menuService.setMenuSubject("Menu added");
  //      if(data1 && data1.profileResponse && data1.profileResponse.dashboards && data1.profileResponse.dashboards.length>0){
  //        let dashboardId= data1.profileResponse.dashboards[0].id;
  //        setTimeout(()=>{
  //        this.router.navigate(['/subdashboards/'+dashboardId]);
  //        },100)
  //      }else{
  //        this.router.navigate(['/report/createReport']);
  //      }
  //        this.localStorageService.set("profile",data);
  //         this.localStorageService.set("applicableProfiles",data1.profileResponse.applicableProfiles); 
  //   },(err)=>{
  //     if(err.status==401 || err.status==403){
  //       this._spinner.showErrorMessage("Incorrect Username or Password");
  //     }else if(err.status == 404){
  //        this._spinner.showErrorMessage("Server unavailable");
  //     }
  //     this.buttonDisabled = false;
  //      this._spinner.removeSpinnerButton();
  //   })  
      
  //     }else{
  //          // this._spinner.show();
  //            this.localStorageService.set("profile",data);
  //     this.router.navigate(['selectProfile']);
  //   }
  //        this.localStorageService.set("userName",this.userName.value);
         
  //     }else{
  //        this._spinner.showErrorMessage("No profiles for the user");
  //     }

  //   // },(err)=>{
  //   //   if(err.status==401 || err.status==403){
  //   //     this._spinner.showErrorMessage("Incorrect Username or Password");
  //   //   }else if(err.status == 404){
  //   //      this._spinner.showErrorMessage("Server unavailable");
  //   //   }
  //   //   this._spinner.removeSpinnerButton();
  //   //   this.buttonDisabled = false;
  //   // })

  // }
  signIn(){

    if( this.buttonDisabled){
      return false;
    }
    this.buttonDisabled = true;
    if(!this.loginForm.valid){
      Object.keys(this.loginForm.controls).forEach(field => { // {1}
        const control = this.loginForm.get(field);            // {2}
        control.markAsTouched({ onlySelf: true });       // {3}
      });
      this.buttonDisabled=false;
      return false;
    }


    this._spinner.setSpinnerButton($("#signIn").children('i'));
    let request =this.loginDetails;
    request.userName = this.userName.value;
    this.localStorageService.set("menu",undefined);
    request.password = this.password.value;
   
    this.loginService.login(request).subscribe((data)=>{
     
      if(data){
      if(data.length ==1){
          let request={};
          request["userName"] = this.userName.value;
          request["profiles"] =[];
    request["profiles"].push(data[0]);
          this.loginService.afterLogin(request).subscribe((data1)=>{
     
       this.menuService.setMenu(data1);
       this.menuService.setMenuSubject("Menu added");
       if(data1 && data1.profileResponse && data1.profileResponse.dashboards && data1.profileResponse.dashboards.length>0){
         let dashboardId= data1.profileResponse.dashboards[0].id;
         setTimeout(()=>{
         this.router.navigate(['/subdashboards/'+dashboardId]);
         },100)
       }else{
         this.router.navigate(['/report/createReport']);
       }
         this.localStorageService.set("profile",data);
          this.localStorageService.set("applicableProfiles",data1.profileResponse.applicableProfiles); 
    },(err)=>{
      if(err.status==401 || err.status==403){
        this._spinner.showErrorMessage("Incorrect Username or Password");
      }else if(err.status == 404){
         this._spinner.showErrorMessage("Server unavailable");
      }
      this.buttonDisabled = false;
       this._spinner.removeSpinnerButton();
    })  
      
      }else{
            this._spinner.show();
             this.localStorageService.set("profile",data);
      this.router.navigate(['selectProfile']);
    }
         this.localStorageService.set("userName",this.userName.value);
         
      }else{
         this._spinner.showErrorMessage("No profiles for the user");
      }

    },(err)=>{
      if(err.status==401 || err.status==403){
        this._spinner.showErrorMessage("Incorrect Username or Password");
      }else if(err.status == 404){
         this._spinner.showErrorMessage("Server unavailable");
      }
      this._spinner.removeSpinnerButton();
      this.buttonDisabled = false;
    })

  }
  get userName() { return this.loginForm.get('userName')}
  get password() { return this.loginForm.get('password') }
}
