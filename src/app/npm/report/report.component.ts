

import { CommonFieldErrorUtilService } from '../services/common/common.field-error.util';
import { GetreportService } from '../services/http/report/getreport.service';
import { DataLoadSpinner } from '../services/dataLoadSpinner.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';
import { CommonParsingService } from '../services/common/common.parsing.service';
import { CommonGetterSetterService } from '../services/common/common.getterSetter.service';
import { DashboardService } from '../services/http/dashboard/dashboard.service';
import { SubdashboardsService } from '../services/http/subdashboards/subdashboards.service';
import { MenuService } from '../services/menu/menu.service';
import { NewReportModel } from '../create-report/newreport.model';
import { NguCarouselService } from '@ngu/carousel';

declare var $: any;
@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css'],
  providers: [DashboardService]
})
export class ReportComponent implements OnInit {
  exportFileTypes: any;
  report: any = { chartResp: [], tableResp: {} };
  reportId = "";
  exportType: string;
  toggleActive: boolean = true;
  isCollapsed: boolean = false;
  resetForm: boolean = false;
  menuToggled: boolean = false;
  isDashboardReport: boolean = false;
  subDashboardReportConfigList :any = [];
  breadcrumbs: any;
  isLoading:any = true;
  public newReportModel: NewReportModel = new NewReportModel();
  filterReport = {
    granularitySelected: "",
    fromDate: "",
    toDate: "",
    timestring: "Custom",
    timerange: ""
  };
  carouselOne: any;
  carouselToken:any;
activeSlideIndex:number = 0;
addCarousel= false;
subIdPrevious ="";
counterListForReport:any=[];
  constructor(private router: Router,private carousel: NguCarouselService , private route: ActivatedRoute,private subdashboardsService : SubdashboardsService, private localStorageService: LocalStorageService, private reportService: GetreportService, private commonParsingService: CommonParsingService, private commonGetterSetterService: CommonGetterSetterService, private dashboardService: DashboardService, private menuService: MenuService,private _spinner: DataLoadSpinner) {
   
  }

  ngOnInit() {
    this.menuService.getToggledValue().subscribe((data) => {
      this.menuToggled = data.value;
      // this._chart.redraw();
    });
      
    this.exportFileTypes = ["CSV", "PDF", "XLS"];
     let subds =[];
    this.route.url.subscribe(() => {
      if (this.router.url.match('report') || this.router.url.match('dashboardRep')) {       
        this.isLoading = true;
        if (this.route.snapshot.params && this.route.snapshot.params["reportId"]) {
          this.report ={chartResp:{showGraph:undefined}};
          let request = { "userName": this.localStorageService.get('userName'), };
          let apiService: any;
          request["showSpinner"] = true;
          if (this.route.snapshot.params["type"] && !this.route.snapshot.params["type"].match('userReport')) {
            request["isDashboardReport"] = true;
            this.isDashboardReport = true;
          
          } else {
          request["isDashboardReport"] = false;
            this.isDashboardReport = false;
          }

          

          request["userTemplateId"] = this.route.snapshot.params["reportId"];
          apiService = this.reportService.getUserReport(request);
          this.reportId = this.route.snapshot.params["reportId"];
         let list :any;
         console.log("subDashboardReportConfigList");
         console.log("this.reportId "+this.reportId );
         console.log(this.subDashboardReportConfigList);
          if (this.isDashboardReport) {
            this.breadcrumbs = this.localStorageService.get('breadcrumbs');
            let sublinks = this.breadcrumbs.sublinks.filter((links, index) => {
              return index < 2
            });
            this.breadcrumbs.sublinks = [];
            this.breadcrumbs.sublinks = sublinks;

            if(this.route.snapshot.params["subdashboardId"]){
            
              let subdId =this.route.snapshot.params["subdashboardId"];
              let request ={
            "dashboardId" : this.route.snapshot.params["dashboardId"]
          };     


          let menu :any= this.localStorageService.get("menu")    ;
          let dashboards= menu.filter((data)=>{
            return data.id=="1"
          })
          let dashboard1 = dashboards[0].subMenu.filter((dashb)=>{
              return dashb.id == this.route.snapshot.params["dashboardId"]
          })
          console.log(dashboard1);
              
                subds = dashboard1[0].subMenu.filter((sub)=>{
                 return subdId == sub.subDashboardId
                })
                if(subds && subds.length>0){
                  this.localStorageService.set('SubDashboardReportConfigList' ,subds[0].subMenu);
                  this.breadcrumbs.sublinks[0] = {displayName:dashboard1[0].displayName,id:this.route.snapshot.params["dashboardId"],routing :dashboard1[0].routing}
              this.breadcrumbs.sublinks[1] = {displayName:subds[0].name,id:this.route.snapshot.params["subdashboardId"],routing :subds[0].routing};
            } 
             

          }
     
      let subdId =this.route.snapshot.params["subdashboardId"];
       if(this.subIdPrevious != subdId || !this.subIdPrevious ||this.subDashboardReportConfigList.length==0 ){
      list=  this.localStorageService.get('SubDashboardReportConfigList');
      this.subDashboardReportConfigList = list;
      this.carousel.reset(this.carouselToken);
      if(list.length>7){
      this.carouselOne = {
      grid: {xs: 4, sm:6, md: 6, lg:7, all: 0},
      slide: 1,
      speed: 400,
      point: {
        visible: false
      },
      load: 2,
      touch: true,
      easing :"ease-in"
    }
    this.addCarousel = true;
         }
              }

      this.subIdPrevious =subdId; 
   
         
         if(this.subDashboardReportConfigList  && this.subDashboardReportConfigList.length>0 && this.subDashboardReportConfigList[0].reportConfiguration == null ){
             let request = {
          "userName": this.localStorageService.get('userName'),
          "dashboardId": this.route.snapshot.params["dashboardId"],
          "subDashboardId": this.route.snapshot.params["subdashboardId"]
        }; 
            this.subdashboardsService.getSpecificSubDashboard(request).subscribe((data) => {
              this.subDashboardReportConfigList = data.reports;
              this.localStorageService.set('SubDashboardReportConfigList' , this.subDashboardReportConfigList );
            });
             
         }
           // this.showSlider(this.subDashboardReportConfigList);
          }
    //       // apiService.subscribe((data) => {
    //         let data={
    //           "userTemplateId": "Chh5Oz",
    //           "reportConfiguration": {
    //             "configuration": {
    //               "attributes": null,
    //               "properties": null,
    //               "metrics": [
    //                 {
    //                   "id": "HSS_C_1",
    //                   "aggregationType": "SUM"
    //                 },
    //                 {
    //                   "id": "HSS_C_2",
    //                   "aggregationType": "SUM"
    //                 }
    //               ],
    //               "kpiMetrics": null,
    //               "name": "HSSNTHLR_RAW_1",
    //               "type": "Table",
    //               "subType": "Table",
    //               "deviceType": "HSSNTHLR",
    //               "entity": null,
    //               "dimensions": [
    //                 {
    //                   "name": "ACH_ID",
    //                   "displayName": "ACH_ID",
    //                   "id": "HSS_P_2"
    //                 },
    //                 {
    //                   "name": "TPLCS_ID",
    //                   "displayName": "TPLCS_ID",
    //                   "id": "HSS_P_3"
    //                 },
    //                 {
    //                   "name": null,
    //                   "displayName": "COUNTER_GROUP_ID",
    //                   "id": "COUNTER_GROUP_ID"
    //                 }
    //               ],
    //               "context": null,
    //               "groupByDimensions": null
    //             },
    //             "filter": {
    //               "condition": "AND",
    //               "rules": [
    //                 {
    //                   "condition": "OR",
    //                   "rules": [
    //                     {
    //                       "field": "COUNTER_GROUP_ID",
    //                       "value": "HSS_CG_11",
    //                       "type": "selector"
    //                     }
    //                   ]
    //                 },
    //                 {
    //                   "condition": "OR",
    //                   "rules": [
    //                     {
    //                       "id": "HSS_C_1",
    //                       "value": "-2147483648",
    //                       "type": "bound"
    //                     },
    //                     {
    //                       "id": "HSS_C_2",
    //                       "value": "-2147483648",
    //                       "type": "bound"
    //                     }
    //                   ]
    //                 },
    //                 {
    //                   "condition": "OR",
    //                   "rules": [
    //                     {
    //                       "field": "COUNTER_GROUP_ID",
    //                       "value": "HSS_CG_11",
    //                       "type": "selector"
    //                     }
    //                   ]
    //                 },
    //                 {
    //                   "condition": "OR",
    //                   "rules": [
    //                     {
    //                       "id": "HSS_C_1",
    //                       "value": "-2147483648",
    //                       "type": "bound"
    //                     },
    //                     {
    //                       "id": "HSS_C_2",
    //                       "value": "-2147483648",
    //                       "type": "bound"
    //                     }
    //                   ]
    //                 }
    //               ]
    //             },
    //             "samplingPeriod": null,
    //             "intervals": "Last 1 hour",
    //             "pagination": {
    //               "pagenumber": 1,
    //               "pagesize": 10000,
    //               "pagingSpec": {
    //                 "pagingIdentifiers": null,
    //                 "threshold": 10000
    //               }
    //             },
    //             "granularity": "ALL",
    //             "reportDataType": "raw",
    //             "filterMap": {},
    //             "counterGroupsWithCounterAndProperties": [
    //               {
    //                 "counterGroupId": "HSS_CG_11",
    //                 "counterGroupDetails": null,
    //                 "deviceType": null,
    //                 "neLevel": null,
    //                 "cgSource": null,
    //                 "counterList": [
    //                   {
    //                     "aggregation": null,
    //                     "aggregationList": [
    //                       "SUM"
    //                     ],
    //                     "counterKey": {
    //                       "counterId": "HSS_C_1",
    //                       "counterGroupTrans": null
    //                     },
    //                     "displayName": "RECD_SRILCS",
    //                     "counterUnit": "count",
    //                     "counterDescription": null,
    //                     "counterType": "COUNTER",
    //                     "enabled": null,
    //                     "sourceName": null,
    //                     "formula": null
    //                   },
    //                   {
    //                     "aggregation": null,
    //                     "aggregationList": [
    //                       "SUM"
    //                     ],
    //                     "counterKey": {
    //                       "counterId": "HSS_C_2",
    //                       "counterGroupTrans": null
    //                     },
    //                     "displayName": "UNS_SRILCS",
    //                     "counterUnit": "count",
    //                     "counterDescription": null,
    //                     "counterType": "COUNTER",
    //                     "enabled": null,
    //                     "sourceName": null,
    //                     "formula": null
    //                   }
    //                 ],
    //                 "properties": [
    //                   {
    //                     "propertyKey": {
    //                       "propertyId": "HSS_P_2",
    //                       "counterGroups": {
    //                         "counterGroupId": "HSS_CG_11",
    //                         "counterGroupDetails": null,
    //                         "deviceType": null,
    //                         "neLevel": null,
    //                         "cgSource": null,
    //                         "counterList": null,
    //                         "properties": null,
    //                         "kpis": null,
    //                         "displayName": null
    //                       }
    //                     },
    //                     "propertyName": "ACH_ID",
    //                     "propertyValues": "null",
    //                     "selectedValues": []
    //                   },
    //                   {
    //                     "propertyKey": {
    //                       "propertyId": "HSS_P_3",
    //                       "counterGroups": {
    //                         "counterGroupId": "HSS_CG_11",
    //                         "counterGroupDetails": null,
    //                         "deviceType": null,
    //                         "neLevel": null,
    //                         "cgSource": null,
    //                         "counterList": null,
    //                         "properties": null,
    //                         "kpis": null,
    //                         "displayName": null
    //                       }
    //                     },
    //                     "propertyName": "TPLCS_ID",
    //                     "propertyValues": "null",
    //                     "selectedValues": []
    //                   }
    //                 ],
    //                 "kpis": null,
    //                 "displayName": "NSN_NTHLR_LCS"
    //               }
    //             ]
    //           },
    //           "metrics": [
    //             {
    //               "aggregation": {
    //                 "id": 1,
    //                 "hourSum": 1,
    //                 "hourMin": 0,
    //                 "hourMax": 0,
    //                 "hourAvg": 0,
    //                 "hourFormula": null,
    //                 "daySum": 1,
    //                 "dayMin": 0,
    //                 "dayMax": 0,
    //                 "dayAvg": 0,
    //                 "dayFormula": null,
    //                 "weekSum": 1,
    //                 "weekMin": 0,
    //                 "weekMax": 0,
    //                 "weekAvg": 0,
    //                 "weekFormula": null,
    //                 "monthSum": 1,
    //                 "monthMin": 0,
    //                 "monthMax": 0,
    //                 "monthAvg": 0,
    //                 "monthFormula": null,
    //                 "yearSum": 1,
    //                 "yearMin": 0,
    //                 "yearMax": 0,
    //                 "yearAvg": 0,
    //                 "yearFormula": null
    //               },
    //               "aggregationList": [
    //                 "SUM"
    //               ],
    //               "counterKey": {
    //                 "counterId": "HSS_C_1",
    //                 "counterGroupTrans": {
    //                   "counterGroupId": "HSS_CG_11",
    //                   "counterGroupDetails": null,
    //                   "deviceType": null,
    //                   "neLevel": null,
    //                   "cgSource": null,
    //                   "counterList": null,
    //                   "properties": null,
    //                   "kpis": null,
    //                   "displayName": null
    //                 }
    //               },
    //               "displayName": "RECD_SRILCS",
    //               "counterUnit": "count",
    //               "counterDescription": "Used to count the number of MAP_SEND_ROUTING_INFO_FOR_LCS requests received at HLRi",
    //               "counterType": "COUNTER",
    //               "enabled": 1,
    //               "sourceName": "RECD_SRILCS",
    //               "formula": null
    //             },
    //             {
    //               "aggregation": {
    //                 "id": 1,
    //                 "hourSum": 1,
    //                 "hourMin": 0,
    //                 "hourMax": 0,
    //                 "hourAvg": 0,
    //                 "hourFormula": null,
    //                 "daySum": 1,
    //                 "dayMin": 0,
    //                 "dayMax": 0,
    //                 "dayAvg": 0,
    //                 "dayFormula": null,
    //                 "weekSum": 1,
    //                 "weekMin": 0,
    //                 "weekMax": 0,
    //                 "weekAvg": 0,
    //                 "weekFormula": null,
    //                 "monthSum": 1,
    //                 "monthMin": 0,
    //                 "monthMax": 0,
    //                 "monthAvg": 0,
    //                 "monthFormula": null,
    //                 "yearSum": 1,
    //                 "yearMin": 0,
    //                 "yearMax": 0,
    //                 "yearAvg": 0,
    //                 "yearFormula": null
    //               },
    //               "aggregationList": [
    //                 "SUM"
    //               ],
    //               "counterKey": {
    //                 "counterId": "HSS_C_2",
    //                 "counterGroupTrans": {
    //                   "counterGroupId": "HSS_CG_11",
    //                   "counterGroupDetails": null,
    //                   "deviceType": null,
    //                   "neLevel": null,
    //                   "cgSource": null,
    //                   "counterList": null,
    //                   "properties": null,
    //                   "kpis": null,
    //                   "displayName": null
    //                 }
    //               },
    //               "displayName": "UNS_SRILCS",
    //               "counterUnit": "count",
    //               "counterDescription": "Used to count the number of unsuccessful MAP_SEND_ROUTING_INFO_FOR_LCS responses sent from the HLRi.",
    //               "counterType": "COUNTER",
    //               "enabled": 1,
    //               "sourceName": "UNS_SRILCS",
    //               "formula": null
    //             }
    //           ],
    //           "kpiMetrics": null,
    //           "response": [
    //             {}
    //           ],
    //           "userName": "ajay029",
    //           "reportName": "HSSNTHLR_RAW_1",
    //           "graphData": null,
    //           "header": [
    //             {
    //               "id": "timestamp",
    //               "displayName": "Timestamp",
    //               "value": "text",
    //               "children": null
    //             },
    //             {
    //               "id": "COUNTER_GROUP_ID",
    //               "displayName": "Counter Group",
    //               "value": "text",
    //               "children": null
    //             },
    //             {
    //               "id": "TPLCS_ID",
    //               "displayName": "TPLCS_ID",
    //               "value": "text",
    //               "children": null
    //             },
    //             {
    //               "id": "ACH_ID",
    //               "displayName": "ACH_ID",
    //               "value": "text",
    //               "children": null
    //             },
    //             {
    //               "id": "HSS_C_1__HSS_CG_11",
    //               "displayName": "RECD_SRILCS (count)",
    //               "value": "number",
    //               "children": null
    //             },
    //             {
    //               "id": "HSS_C_2__HSS_CG_11",
    //               "displayName": "UNS_SRILCS (count)",
    //               "value": "number",
    //               "children": null
    //             }
    //           ]
    //         }
    //         this.processReportresponse(data);
  
    //    if (this.isDashboardReport) {
    //       this.breadcrumbs.sublinks.push({ displayName: this.report.name, id: this.reportId, routing: '/report/' + this.reportId + '/dashboardRep' })
    //     } else {
    //     this.breadcrumbs = { mainlink: "My Reports", sublinks: [{ displayName: this.report.name, id: this.reportId, routing: '/report/' + this.reportId + '/dashboardRep' }] }
    //    }
    //   this.isLoading=false;
    //   //this.loadClickableReportItems();
    // this.localStorageService.set('breadcrumbs', this.breadcrumbs);
    //       // }, (err) => {
    //       //   console.log(err);
    //       //    this.isLoading = false;
    //       //   this._spinner.showErrorMessage("Error retrieving data");
    //       //  // this.commonGetterSetterService.setReportConfiguration(null);
    //       // })
    //       //orgianal code
          apiService.subscribe((data) => {
            this.processReportresponse(data);
  
       if (this.isDashboardReport) {
          this.breadcrumbs.sublinks.push({ displayName: this.report.name, id: this.reportId, routing: '/report/' + this.reportId + '/dashboardRep' })
        } else {
        this.breadcrumbs = { mainlink: "My Reports", sublinks: [{ displayName: this.report.name, id: this.reportId, routing: '/report/' + this.reportId + '/dashboardRep' }] }
       }
      this.isLoading=false;
      //this.loadClickableReportItems();
    this.localStorageService.set('breadcrumbs', this.breadcrumbs);
          }, (err) => {
            console.log(err);
             this.isLoading = false;
            this._spinner.showErrorMessage("Error retrieving data");
           // this.commonGetterSetterService.setReportConfiguration(null);
          })
        }
      }
    })

  }

  

  initDataFn(key){
    this.carouselToken = key.token;
  }


 

  getTemplateConfig() {

    this.router.navigate(['report/editReport/' + this.reportId+'/userReport/'+'/null']);
  }
  getInterval(interval) {
    let int = interval.split('/');
    let from = this.commonParsingService.formatDate(int[0]);
    let to = this.commonParsingService.formatDate(int[1]);
    return [from, to].join(' to ')
  }

  exportReport(type) {
    let request = {};
    request["userName"] = this.localStorageService.get('userName');
    request['userTemplateId'] = this.reportId;
    request["fileType"] = type;
    request["isDashboardReport"] = this.isDashboardReport;
    request["counterGroupsWithCounterAndProperties"] = this.report.counterGroupsWithCounterAndProperties;
    this.reportService.exportUserReport(request).subscribe((data) => {
      if (null != data && data != undefined) {
        // var l = document.createElement('a');
        // l.download = 'chart';
        // l.href = data['downloadURL'];
        // if (null != data['downloadURL'] && data['downloadURL'] != undefined) {
        //   window.open(l.href);
        //   document.body.appendChild(l);
        //   document.body.removeChild(l);
    
        var fileName = "";
        var contentType="application/pdf";
        if (data.headers && data.headers._headers && null != data.headers._headers.get('export-reportname')) {
          let headerValue: any[] = data.headers._headers.get('export-reportname');
          if (headerValue && headerValue[0]) {
            fileName = headerValue[0];
          }
        } else {
          fileName = "EENPM_" + (new Date()).getMilliseconds() + "." + request['fileType'];
        }

              // It will open csv both in chrome and IE               
        if (window.navigator && window.navigator.msSaveOrOpenBlob) {
          window.navigator.msSaveOrOpenBlob(data._body, fileName);
        } else {
          var a = document.createElement("a");
          document.body.appendChild(a);
          var fileURL =window.URL.createObjectURL(data._body);
          console.log(fileURL)
          a.href = fileURL;
          a.download = fileName;
          a.click();
        }
      }
    }, (err) => {
      console.log(err);
    })
  }

  ngAfterViewInit() {
    let parent = this;
    console.log($("a.exportReport"));
    $("a.exportReport").click(function () {
      var tablink = $(this).attr('title');
      $("#" + tablink).fadeIn();
      $(this).parents(".reportMenu").find('li').removeClass("active");

      if (!$(this).hasClass("disabled")) {
        $(this).parents(".reportMenu li").addClass("active");
      }

      return false;
    });
    $(".closeButton").click(function () {
      $(this).parents(".reportMenu").find('li').removeClass("active");
      $(".tabHolder").fadeOut();
      this.exportType = "";
    });

    $('.dropdown').focus(function () {
      $(this).siblings('div.drop-list').removeClass('hide');
      $(this).siblings('div.drop-list').addClass('show');
      if ($(this).parents().siblings().length > 0) {
        if ($(this).parents().siblings().find('div.drop-list').hasClass('show')) {
          $(this).parents().siblings().find('div.drop-list').removeClass('show');
          $(this).parents().siblings().find('div.drop-list').addClass('hide');
        }
      }
    }).blur(function () {
      if ($('div.drop-list:hover') && $('div.drop-list:hover').length == 0) {
        $(this).siblings('div.drop-list').removeClass('show');
        $(this).siblings('div.drop-list').addClass('hide');

      }

    });
    console.log($(".action-menu"));
    $(".action-menu> li > a.action-menu-tab").click(function () {
      $(this).parents(".action-menu").find('a.action-menu-tab.active').removeClass("active");
      $('.tabHolder').fadeOut();
      var tablink = $(this).attr('href');
      $(tablink).fadeIn();
      $(this).addClass("active");
      if (!$(this).hasClass("disabled")) {
        $(this).parents(".action-menu li").addClass("active");
      }

      return false;
    });

    $("#datePicker").datetimepicker({
      value: this.filterReport.fromDate,
      format: 'dd-mm-yy',
      maxDate: 0,
      changeYear: true,
      autoclose: true

    });
    // $("#datePicker").datetimepicker("setDate",this.formatDate(fromdate,'previous'));
    $("#datePicker").on('change', (e, args) => {
      this.filterReport.fromDate = $("#datePicker").val();
    });



    $("#todatePicker").datetimepicker({
      format: 'dd-mm-yy', value: this.filterReport.toDate,
      maxDate: 0,
      changeYear: true,
      autoclose: true
    });

    $("#todatePicker").on('change', (e, args) => {
      this.filterReport.toDate = $("#todatePicker").val();
    });
 

  }

  setModalValues(type, event) {
    this.exportType = type;
    this.hideDropdownClick(event);
  }

  hideDropdownClick(event) {
    $(event.currentTarget).parents('div.drop-list').removeClass('show').addClass('hide');
  }

  cleardata(value) {
    if (value == "true") {
      this.exportType = "";
    }
    console.log(value);

  }

  showPageAction() {
    $('div.fixed-action').toggle('slide', { "direction": "right" });
    this.isCollapsed = !this.isCollapsed;
  }

  ngOnChanges(changes: SimpleChanges) {
    this.resetForm = !this.resetForm;
  }


  getUserReport() {

  }

  getSpecificReport(report) {
    this.router.navigate(['/dashboard/' + report.userTemplateId + '/dashboardRep'+'/'+this.route.snapshot.params["dashboardId"] + '/'+this.route.snapshot.params["subdashboardId"]]);
  }

  gotoSubDashboard() {
    this.router.navigate([this.breadcrumbs.sublinks[1].routing]);
  }

  getfilterConfig() {
    this.filterReport.granularitySelected = this.report.granularity;
    if (this.report.intervals.match(' to ')) {
      let int = this.report.intervals.split(' to ');
      this.filterReport.fromDate = this.commonParsingService.formatDate(int[0]);
      this.filterReport.toDate = this.commonParsingService.formatDate(int[1]);
      this.filterReport.timestring = "Custom";
    }
    else {
      let time: Array<any> = this.report.intervals.split(' ');
      this.filterReport.timestring = time[0];
      this.filterReport.timerange = [time[1], time[2]].join(' ').trim();

    }
  }

  getReportAccordingToFilter() {
    let request: any = {
      "userName": this.localStorageService.get('userName'),
      "isDashboardReport": this.isDashboardReport,
      "userTemplateId": this.reportId,
      "jsonString": {

        "granularity": this.filterReport.granularitySelected == 'Raw' ? 'ALL' : this.filterReport.granularitySelected,
        "intervals": this.getTimeStringInterval()
      }
    }
    this.reportService.getReportAccordingToFilter(request).subscribe(data => {
      this.processReportresponse(data);
    });
  }

  public getTimeStringInterval() {
    if (this.filterReport.timestring == 'Custom') {
      return this.getIntervalForfilterReport(this.filterReport.fromDate, this.filterReport.toDate);
    } else {
      let time = [this.filterReport.timestring, this.filterReport.timerange].join(' ');
      return time;
    }
  }

  public getIntervalForfilterReport(fromDate, toDate) {
    let interval = "";
    let date: Date = new Date(fromDate + ' GMT');
    let date2: Date = new Date(toDate + ' GMT');
    interval = date.toISOString() + '/' + date2.toISOString();
    return interval;
  }

  processReportresponse(data: any) {
    let dashBoardViewBoth;
    //  if(data ){
    //  if(data.reports){
    //   dashBoardViewBoth = data.view =='both' ? true:false;
    //   if(data.reports && data.reports.length>0){
    //     data = JSON.parse(JSON.stringify(data.reports[0]));
    //   }
    // }else{
    //    this.report.chartResp.showGraph = false;
    //  }
    //  }
    if (data.reportConfiguration) {
      if (data.reportConfiguration.configuration.type == "both" || data.reportConfiguration.configuration.type.toLowerCase() == "graph" || dashBoardViewBoth) {
        this.report.chartResp = data;
        this.report.chartResp.showGraph = true;
      
      }
      this.counterListForReport=this.commonParsingService.getcounterListForReport(data);
      this.report.tableResp = this.commonParsingService.parseRestTableResponse(data);
      this.report.type = data.reportConfiguration.configuration.type;
      this.report.chartType = data.reportConfiguration.configuration.subType;
      this.report.name = data.reportName;
      this.report.intervals = data.reportConfiguration.intervals.match('/') ? this.getInterval(data.reportConfiguration.intervals) : data.reportConfiguration.intervals;
      this.report.deviceType = data.reportConfiguration.configuration.deviceType;
      this.report.granularity = data.reportConfiguration.granularity == 'ALL' ? 'Raw' : data.reportConfiguration.granularity;

      this.report.level = data.reportConfiguration.level;
      this.report.counterGroupsWithCounterAndProperties = data.reportConfiguration.counterGroupsWithCounterAndProperties;
      let reportConfigMap = this.commonGetterSetterService.getReportConfiguration();
      if (reportConfigMap == null) {
        reportConfigMap = new Map<string, any>();
      }
      if ((reportConfigMap != null)) {
        reportConfigMap.set(this.reportId, data.reportConfiguration);
        this.commonGetterSetterService.setReportConfiguration(reportConfigMap);
      }
    }

  }
  
   
}

