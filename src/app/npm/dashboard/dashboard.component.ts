import { Component, OnInit } from '@angular/core';
import { CommonParsingService } from '../services/common/common.parsing.service';
import { CommonFieldErrorUtilService } from '../services/common/common.field-error.util';
import { GetreportService } from '../services/http/report/getreport.service';
import { DataLoadSpinner } from '../services/dataLoadSpinner.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalStorageService } from 'angular-2-local-storage';
import { CommonGetterSetterService } from '../services/common/common.getterSetter.service';
import { SubdashboardsService } from '../services/http/subdashboards/subdashboards.service';
import { MenuService } from '../services/menu/menu.service';
declare var require: any;
declare var $: any;
const resp = require("../../../assets/jsonResponse/getSpecficReportResponseNew.json");
const Highstock = require('highcharts/highstock.src');
const Highcharts = require('highcharts/highcharts.src');
require('highcharts/modules/exporting.js')(Highcharts);
require('highcharts/modules/offline-exporting.js')(Highcharts);

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],

})
export class DashboardComponent implements OnInit {
  reports: any;
  dashboardId: any;
  subDashboardId: any;
  dashboardDetails = { displayName: "", };
  menuToggled: any = false;
  breadcrumbs:any;
  constructor(private router: Router, private route: ActivatedRoute, private localStorageService: LocalStorageService, private reportService: GetreportService, private commonParsingService: CommonParsingService, private commonGetterSetterService: CommonGetterSetterService, private subdashboardsService: SubdashboardsService, private menuService: MenuService) { }

  ngOnInit() {
    this.route.url.subscribe(() => {
      if (this.router.url.match('dashboard')) {
        this.reports =[];
        this.breadcrumbs = this.localStorageService.get('breadcrumbs');
       
        this.dashboardId = this.route.snapshot.params["dashboardId"];
        this.subDashboardId = this.route.snapshot.params["subdashboardId"];
        let request = {
          "userName": this.localStorageService.get('userName'),
          "dashboardId": this.route.snapshot.params["dashboardId"],
          "subDashboardId": this.route.snapshot.params["subdashboardId"]
        };
         let menu :any= this.localStorageService.get("menu")    ;
          let dashboards= menu.filter((data)=>{
            return data.id=="1"
          })
          let dashboard1 = dashboards[0].subMenu.filter((dashb)=>{
              return dashb.id == this.route.snapshot.params["dashboardId"]
          })
            this.breadcrumbs.sublinks = [];
            this.breadcrumbs.sublinks.push({displayName:dashboard1[0].displayName,id:this.dashboardId,routing :dashboard1[0].routing});
            
        this.subdashboardsService.getSpecificSubDashboard(request).subscribe((data) => {
          if (data) {
            this.dashboardDetails.displayName = data.name;
          //  let sublinks = this.breadcrumbs.sublinks[0];
          
             this.localStorageService.set('breadcrumbs',this.breadcrumbs);
            this.reports = data["reports"];
             this.breadcrumbs.sublinks.push({displayName:this.dashboardDetails.displayName,id:this.dashboardId,routing :'/dashboard/'+this.route.snapshot.params["dashboardId"]+'/subdashboard/'+this.route.snapshot.params["subdashboardId"]})
            // if (data["reports"]) {
            //   let report = { response: {} };
            //   data["reports"].forEach((reportData) => {
            //     let report = { response: {}, name: "" ,userTemplateId: "" };
            //    // let view = data["view"];
            //    report.userTemplateId=reportData.userTemplateId;
            //    let view = "both";
            //     if (view == "both" || view == "table") {
            //       report["tableResponse"] = this.commonParsingService.parseRestTableResponse(reportData);
            //     }
            //     if (view == "both" || view == "graph") {
            //       report.response["type"] = reportData.reportConfiguration.configuration.subType;
            //       report.response["graph"] = reportData;
            //     }
            //     report["name"] = reportData.reportConfiguration.configuration.name;
            //     this.reports.push(report);
            //   })
            // }
            this.localStorageService.set('SubDashboardReportConfigList' ,data.reports);
          }

        },err=>{
           this.breadcrumbs.sublinks.push({displayName:this.dashboardDetails.displayName,id:this.dashboardId,routing :'/dashboard/'+this.route.snapshot.params["dashboardId"]+'/subdashboard/'+this.route.snapshot.params["subdashboardId"]})
        });
      }
    });

    this.menuService.getToggledValue().subscribe((data) => {
      this.menuToggled = data.value;
      // this._chart.redraw();
    });
  }

  editDashboard() {

  }


  getHtml() {
    let html = $('div.highcharts-container').html();

    console.log($('div.highcharts-container'));
    let html1 = "";
    $('div.highcharts-container').each((i, e) => {
      html1 = html1 + $(e).html();
    });

    let w = window.open();
    $(w.document.body).html(html1);
  }

  getSpecificReport(report)
  { 
    if(null != report)
    {
      this.router.navigate(['/dashboard/' + report.userTemplateId + '/dashboardRep/'+this.dashboardId+'/'+this.subDashboardId]);
    }

  }

  getRequest(report){
     let request = { "userName": this.localStorageService.get('userName'),
                      "userTemplateId" : report.userTemplateId,
                    "isDashboardReport" : true}
                    return request;
  }
}
