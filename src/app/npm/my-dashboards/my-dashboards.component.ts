import { Component, OnInit,ViewChild } from '@angular/core';
import { SubdashboardsService } from '../services/http/subdashboards/subdashboards.service';
import {DashboardService } from '../services/http/dashboard/dashboard.service';
 import { LocalStorageService} from 'angular-2-local-storage';
import { GetreportService } from '../services/http/report/getreport.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonGetterSetterService } from '../services/common/common.getterSetter.service';
import { MenuService } from '../services/menu/menu.service';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl,FormArray,NgForm } from "@angular/forms";
import { DataLoadSpinner } from '../services/dataLoadSpinner.service';
declare var $:any;
@Component({
  selector: 'app-my-dashboards',
  templateUrl: './my-dashboards.component.html',
  styleUrls: ['./my-dashboards.component.css'],
  providers :[DashboardService]
})
export class MyDashboardsComponent implements OnInit {
  dashboard ={name:undefined,subDashboards:[]};
  reports=[];
  isCreateDashboard =false;
 elementID ="";
 myreports=[];
 dashboardId="";
 allowedProfiles  =[];
 editReportId = "";
 deleteReportId="";
 subDashboardId ="";
 allowedProfilesId =[];
isLoading= true;
 @ViewChild('dashboardForm') dashboardForm: NgForm;
 index=1;
  constructor(private route: ActivatedRoute,private reportService:GetreportService,private router :Router,private commonGetterSetterService:CommonGetterSetterService,private localStorageService:LocalStorageService,private subdashboardsService: SubdashboardsService,private menuService:MenuService,private _spinner:DataLoadSpinner,private dashboardService :DashboardService) { }

  ngOnInit() {
    if(this.router.url.match('createDashboard')){
      this.isCreateDashboard = true;
      this.index=1;
       this.dashboard = { name:"",subDashboards:[{addedId : this.index,name:"",reports:[]}]};
        this.applyProfiles();
    }else{
      this.isCreateDashboard = false;this.index++;
      this.isLoading= true;
        this.dashboardId = this.route.snapshot.params["dashboardId"];
         let request :any = {
            "dashboardId" : this.dashboardId
          };
          this.subdashboardsService.getSubDashboardsForDashboard(request).subscribe(data=>{
            this.isLoading= false;
            this.dashboard = data;
            if(this.commonGetterSetterService.getDashboardEdit()){
              let obj =[] ;
              let dashboard = JSON.parse(JSON.stringify(data));
              obj.push(dashboard);
              this.menuService.setMenu(obj);
              this.menuService.setMenuSubject("Dashboard modified");
              this.commonGetterSetterService.setDashboardEdit(false);
            }
            if(data.subDashboards){
              for(let subd of data.subDashboards){
                 $.extend(subd, { addedId: this.index});
                 this.index++;
                 if(subd.reports){
                 for(let rep of subd.reports){
                   $.extend(rep, { myReport: true});
                 }
                 }
              }
             
            }
            if( data.profiles){
              for(let prof of data.profiles){
              this.allowedProfilesId.push(prof.profileId);
            }
            }
            this.applyProfiles();
            setTimeout(()=>{

            this.createSubDashboardDroppable();
            },0)
          });
       
    }
   
    this.reports = [];
 
  let request = {userName:this.localStorageService.get('userName')};
     this.reportService.getMyReport(request).subscribe((data)=>{
      this.myreports = data;
      setTimeout(()=>{
       $('.existing-reports li').each(function (i, elem) {

        $(elem).draggable({
          revert: 'invalid',
          helper: 'clone',
          cancel: '',
          scroll: false
        })
      });
    },0)
     }, (err) => {
      console.log(err);
      //this.dataLoadSpinner.showErrorMessage("Data cannot be retrieved .Please try after sometime.")
    })
  }


  applyProfiles(){
     let profile :any = this.localStorageService.get("applicableProfiles");
     let ownprofile :any= this.localStorageService.get("profile");
     this.allowedProfiles = profile;
     if(this.allowedProfiles){
      for(let prof of this.allowedProfiles){
       prof["showEnable"] = false;
       prof["disabled"] = false;
       if(this.allowedProfilesId && this.allowedProfilesId.indexOf(prof.profileId)>=0){
        prof["showEnable"] = true;
       }
     }
    }
    if(ownprofile){
      ownprofile[0]["disabled"] = true;
       ownprofile[0]["showEnable"] = true;
       if(profile){        
          this.allowedProfiles = [...profile,...ownprofile];
       }else{
          this.allowedProfiles = [...ownprofile];
       }
    }
    
  }

  ngAfterViewInit(){
    
   
    console.log($('.report-type').find('li'));
    //  $('.existing-reports').each(function (i, elem) {

    //     $(elem).draggable({
    //       revert: 'invalid',
    //       helper: 'clone',
    //       cancel: '',
    //       scroll: false
    //     })
    //   });
    this.createSubDashboardDroppable();
      
  }

  createSubDashboardDroppable(){
     let parent =this;
      $('.selected').droppable({
      classes: {
        "ui-droppable": "highlight"
      },

      drop: function (event, ui) {
         var $element = ui.draggable.clone();
        this.elementID = $($element).attr("id");
        let x, y;
        // You can clone drop item to move inside formula.
        let report = parent["myreports"].filter((rep)=>{
          return this.elementID ==rep.userTemplateId
        })
        report[0]["myReport"] = false;
        parent["dashboard"]["subDashboards"].filter((subd)=>{
          if(subd.reports && subd.addedId == event.target.id){
            let rep =[];
            if(subd.reports && subd.reports.length>0){
              rep =subd.reports.filter((repor)=>{
                return repor.userTemplateId == report[0].userTemplateId
              })
            }

            if(rep && rep.length==0){
            subd.reports.push(report[0]);
            }else{
              parent._spinner.showErrorMessage("Chart/Table already added.");
            }

          }else{
            if(!subd.reports && subd.addedId == event.target.id){
              subd.reports=[];
            subd.reports.push(report[0]);
            }
          }
        })
        
       
        parent["reports"].push(report[0]);
// console.log(event.target.id);
//         var $element = ui.draggable.clone();
        
//         $($element).find('a').append('<span class="icon delete" style="width:82px;" >Remove</span>')
//         console.log($(this).find("ul.type-list"));
//         $(this).find("ul.type-list").append($element);
//         $($element).find('span').on('click',(element)=>{
//          let id = $(element.currentTarget).parents('li.my-reports').attr("id");
//          if($(element.currentTarget).hasClass('delete')){
//           parent.removeReport(id);
//          }else if($(element.currentTarget).hasClass('edit')){
//           parent.editReport(id);
//          }
//         })
      }});
  }

    removeReport(id,subdId){
      if(this.dashboard["subDashboards"] && this.dashboard["subDashboards"].length>0){
      this.dashboard["subDashboards"].filter((subd)=>{
        if(subd.subDashboardId == subdId){
          if(subd.reports && subd.reports.length >0){
            subd.reports = subd.reports.filter((report)=>{
              return report.userTemplateId!=id
            })
          }
        }
      })
      }
      
    }

    editReport(id){
    let request ={isDashboardReport : true,userTemplateId:id,userName:this.localStorageService.get("userName")};
    this.reportService.getUserReport(request).subscribe((data)=>{
      let reportConfigMap = this.commonGetterSetterService.getReportConfiguration();
      if (reportConfigMap == null) {
        reportConfigMap = new Map<string, any>();
      }
      if ((reportConfigMap != null)) {
        reportConfigMap.set(id, data.reportConfiguration);
        this.commonGetterSetterService.setReportConfiguration(reportConfigMap);
      }
      console.log(id+" editted");
      this.commonGetterSetterService.setDashboardEdit(true);
      this.router.navigate(['report/editReport/' + id+'/dashReport'+'/'+this.dashboard["id"]]);
    },(err)=>{
            // this._spinner.showErrorMessage("Dashboards not added");
    
    })
      
    }




  hasReportInSubdashboard(subdash,report){
   let rportFiltered =  subdash.reports.filter((rep)=>{
      return rep.userTemplateId == report.userTemplateId
    })
    if(rportFiltered && rportFiltered.length>0){
      return true;
    }else{
      return false;
    }
  }

  removeId(){
    console.log("hgdhdfgh");
  }


save(){
  if(!this.dashboardForm.valid){
  Object.keys(this.dashboardForm.controls).forEach(field => { // {1}
        const control = this.dashboardForm.controls[field];            // {2}
        control.markAsTouched({ onlySelf: true });       // {3}
      });
  }else{
    if(this.isCreateDashboard){
     $("#profilesPopup").modal({show: true});
    }else{
     this.createDashboard();
    }   

  }



}


showModalDelete(id,subDashboardId){
  $("#deleteReportPopup").modal("show");
  this.deleteReportId = id;
  this.subDashboardId = subDashboardId;
}

showModal(id){
  $("#editReportPopup").modal("show");
  this.editReportId = id;
}


createDashboard(){
 let  request = this.dashboard ;
 let profiles =[];
 if(this.allowedProfiles){
 profiles = this.allowedProfiles.filter((prof)=>{
   return prof["showEnable"] &&  !prof["disabled"]
 }) 
 }
 let ownprofile :any= this.localStorageService.get("profile");
 if(profiles &&  profiles.length>0){
 request["profiles"] =[ ...profiles,...ownprofile];
 }else{
   request["profiles"] =[...ownprofile];
 }
 let apiService :any;
 if(this.isCreateDashboard){
  apiService = this.subdashboardsService.createDashboard(request);
 }else{
  apiService = this.dashboardService.editDashboard(request);
 }

  apiService.subscribe((data)=>{

    let obj =[] ;
    let addDashboard = true;
    let dashboard = JSON.parse(JSON.stringify(data));
    if(dashboard &&  dashboard.message){
      this._spinner.showErrorMessage(dashboard.message , 4);
      if(ownprofile && ownprofile[0] && ownprofile[0].profileName && dashboard.message.match(ownprofile[0].profileName)){
        addDashboard = false;
      }
    }

    if(addDashboard){
        obj.push(dashboard);
    this.menuService.setMenu(obj);
    if(this.isCreateDashboard){
    this.menuService.setMenuSubject("Dashboard added");
    this._spinner.showSuccessMessage("Dashboard added successfully");
  }else{
    setTimeout(()=>{
    this.menuService.setMenuSubject("Dashboard modified");
    this._spinner.showSuccessMessage("Dashboard updated successfully");
    })
    }
    }
  
    this.router.navigate(['/manageDashboard']);
    
},(err)=>{
          
          if(err && err._body &&  err._body.match("Maximum") ){
           if(err._body.match("Dashboard can not be created "))
           {
            this._spinner.showErrorMessage(" Dashboard can not be created .Maximum Limit has been reached for all profiles",3);
           }
           else
            { this._spinner.showErrorMessage("Maximum number of saved charts reached. Please remove any one the charts to add more.",3)}
      }else{
         this._spinner.showErrorMessage("Dashboard not added . Please try again after sometime.");
      }
    
    })
}
  addAnotherSubDashboard(){
    this.index++;
    let name ;
    let subds= [];   
    subds = JSON.parse(JSON.stringify(this.dashboard["subDashboards"]));
    this.dashboard["subDashboards"] = [];
    this.dashboard["subDashboards"] = [{"addedId" :this.index,"name":name,"reports":[]} ,...subds];
     setTimeout(()=>{
      this.createSubDashboardDroppable();
    },0);
  }

  removeSubDashboard(subd){
    this.dashboard["subDashboards"] = this.dashboard["subDashboards"].filter((subd1)=>{
      return subd1.addedId!=subd.addedId
    })
  }

}
