import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from "@angular/forms";
import { CommonFieldErrorUtilService } from '../services/common/common.field-error.util';
import { LoginService } from '../services/http/login/login.service';
import { DataLoadSpinner } from '../services/dataLoadSpinner.service';
import { MenuService } from '../services/menu/menu.service';
import { LocalStorageService} from 'angular-2-local-storage';
import { DashboardService } from '../services/http/dashboard/dashboard.service';
import { SubdashboardsService } from '../services/http/subdashboards/subdashboards.service';
declare var $ :any;
@Component({
  selector: 'app-manage-dashboards',
  templateUrl: './manage-dashboards.component.html',
  styleUrls: ['./manage-dashboards.component.css'],
  providers : [DashboardService]
})
export class ManageDashboardsComponent implements OnInit {
  dashboards =[];
  deleteDashboardOb ={};
  removeSubDasboard ={};
  removeDashboard={};
  isLoading:any;
  constructor(private router: Router,private menuService:MenuService,private subdashboardsService: SubdashboardsService,private loginService :LoginService,private localStorageService:LocalStorageService,private _spinner : DataLoadSpinner,private dashboardService:DashboardService) { }

  ngOnInit() {
    this.isLoading = true;
    let request ={};
    request["userName"] = this.localStorageService.get("userName");
    request["profiles"] =[];
    request["profiles"]= this.localStorageService.get("profile") ;
    this._spinner.showProgressMessage("Please wait while data is being retrieved")
    this.loginService.afterLogin(request).subscribe((data)=>{
       if(data && data.profileResponse && data.profileResponse.dashboards){
       this.dashboards = data.profileResponse.dashboards;
      }
       this.isLoading = false;
    },(err)=>{
             this._spinner.showErrorMessage("Dashboards not added");
             this.isLoading = false;
    })
  }

  saveDashboardObj(dashboard){
    this.deleteDashboardOb = dashboard; 
  }

  deleteDashboard(){
    let request ={"id":this.deleteDashboardOb["id"]};
    this._spinner.showProgressMessage("Please wait while the dashboard is being deleted");
     this.dashboardService.deleteDashboard(request).subscribe((data)=>{
    this.menuService.setMenu({dashboardId : this.deleteDashboardOb["id"] });
    this.dashboards = this.dashboards.filter((dash)=>{
      return dash.id!=this.deleteDashboardOb["id"]
    })
    this.menuService.setMenuSubject("Dashboard deleted");
    this._spinner.showSuccessMessage("Dashboard deleted successfully");
    this.deleteDashboardOb = {}
     },(err)=>{
             this._spinner.showErrorMessage("Service not available. Please try again later.");
    
    })
  }

  showModal(){
    $("#removeReportPopup").modal("show");

  }

  removeSubdashboard(){
    let dashboardOb :any = this.removeDashboard;
    let subd :any= this.removeSubDasboard;
    if(dashboardOb["subDashboards"] && dashboardOb["subDashboards"].length ==1){
      this._spinner.showErrorMessage("Atleast one report is required.")
      return false;
    }
    dashboardOb.subDashboards = dashboardOb.subDashboards.filter((subda)=>{
      return subda.subDashboardId != subd.subDashboardId
    })
      let request :any = {
            "dashboardId" : dashboardOb.id
          };

    this.subdashboardsService.getSubDashboardsForDashboard(request).subscribe(data=>{
      
      let dashboard = JSON.parse(JSON.stringify(data));
     dashboard.subDashboards = dashboard.subDashboards.filter((subda)=>{
      return subda.subDashboardId != subd.subDashboardId
    })
    let request1 =JSON.parse(JSON.stringify(dashboard));
    this._spinner.showProgressMessage("Please wait while  report is being deleted");
     this.dashboardService.editDashboard(request1).subscribe((data)=>{
    let obj =[] ;
    let dashboard = JSON.parse(JSON.stringify(data));
    obj.push(dashboard);
    this.menuService.setMenu(obj);
    this.menuService.setMenuSubject("Dashboard modified");
    this._spinner.showSuccessMessage("Dashboard updated successfully");
   this.dashboards.forEach((dash)=>{
      if(dash.id == data.id){
        dash = dashboard;
      }
    })
     },(err)=>{
       dashboardOb.subDashboards.push(subd);
             this._spinner.showErrorMessage("Service not available. Please try again later.");
    
    })
    });
    
    this.removeDashboard ={};
    this.removeSubDasboard={};

  }

}
