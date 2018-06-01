import { Component, OnInit, AfterViewInit, EventEmitter, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Location } from '@angular/common';
import { ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl,ValidatorFn,NG_VALIDATORS } from "@angular/forms";
import { Observable, Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { trigger, state, style, animate, transition } from '@angular/core';
import { NewReportModel } from './newreport.model';
import counterGroup from './counterGroup.model';
import { GetreportService } from '../services/http/report/getreport.service';
import { KpiService } from '../services/http/kpi/kpi.service';
import { CommonParsingService } from '../services/common/common.parsing.service';
import { CommonFieldErrorUtilService } from '../services/common/common.field-error.util';
import { CommonGetterSetterService } from '../services/common/common.getterSetter.service';
import { MenuService } from '../services/menu/menu.service';
import { AppConfig } from '../../configurations/app.config';
import { ConfigService } from '../services/config/config.service';
import { DataLoadSpinner } from '../services/dataLoadSpinner.service';
import { LocalStorageService } from 'angular-2-local-storage';
import 'rxjs/add/operator/takeWhile';
import PerfectScrollbar from 'perfect-scrollbar';
import { VirtualScrollComponent } from 'angular2-virtual-scroll';
declare var $: any;
declare var require: any;
const Highstock = require('highcharts/highstock.src');
require('highcharts/modules/exporting.js')(Highstock);
require('highcharts/modules/offline-exporting.js')(Highstock);


function dropdownValueValidator(arr) {
 return (control: AbstractControl): {[key: string]: any} => {
    const invalid =arr.indexOf(control.value)<0;
    return invalid ? {'dropdownValue': {value: control.value}} : null;
 };
}


@Component({
  selector: 'app-report-widget',
  templateUrl: './create-report.component.html',
  styleUrls: ['./create-report.component.css'],
  animations: [
    trigger('collapseAnimation', [
      state('true', style({ overflow: 'hidden', height: '0px', opacity: '0', border: '1px solid #ddd' })),
      state('false', style({ overflow: 'visible', height: '*', opacity: '1' })),
      transition('false => true', animate('400ms')),
      transition('true => false', animate('400ms'))
    ]),
    trigger('headingAnimation', [
      state('false', style({ padding: '3px 10px' })),
      state('true', style({})),
      transition('true <=> false', animate('400ms'))
    ])
  ],

  providers: [FormBuilder, NewReportModel, CommonFieldErrorUtilService],
})


export class CreateReportComponent implements OnInit, AfterViewInit {

  public newReportModel: NewReportModel = new NewReportModel();
  public dashboardId: any;
  public newReportForm: FormGroup;
  public fromDate: Date = new Date();
  public toDate: Date = new Date();
  public counterGroup = counterGroup;
  public controlgroup: any;
  public counterIds: any = [];
  public tableResponse: any = { headers: [], data: [] };
  public SamplingPeriodList: Array<any>;
   public fromDateUpdated: Date;
  public toDateUpdated: Date;
  public counterGroupPopUp = { displayName:"",search:"",counterList: [],kpis:undefined, showMoreItems: false, searchProp: "", properties: [], counterGroupId: undefined, };
  public counterGroupKPIPopUp = { searchProperties: "", properties: [], kpis: undefined, counterGroupId: undefined, showEnable: false, showAllProps: false, typeShown: "", searchKPI: "", showAll: false };
  public deviceTypeModel: any = { deviceTypeModel: undefined };
  public response: any;
  public counterGroupCounters = [];
  public counterGroupMap: Map<any, any> = new Map();
  timerSubscription: Subscription;
  public refreshDataContinuously: boolean = false;
  public refreshInterval: number;
  public menuToggled: boolean;
  public counterGroupsEnabled = { kpi: [], counters: [] };
  public counterLoading: boolean;
  public elements: any;
  public element: any;
  offset = this.configService.getConfiguration().offset;
  offsetHours = this.configService.getConfiguration().offsetHours;
  countersAllowed = this.configService.getConfiguration().countersAllowedGroupBy;
  propertiesAllowed = this.configService.getConfiguration().propertiesAllowedGroupBy;
  public subElement: any;
  public subElementAdded: any = { displayName: "" };
  public counterGroupIds = [];
 @ViewChild(VirtualScrollComponent)
    private virtualScroll: VirtualScrollComponent;
  public searchCG: string;
  public countersInCG: any = [];
  public kpisInCG: any = [];
  public kpiList = [];

  public kpiResponse = [];
  public kpiTableResponse = { headers: [], data: [] };
  public showGraph = false;
  public exportType: any;
  public tabSelected: any;
  public editReportModel: any;
  public editReport: any = false;
  public requestFilterMap: Map<string, any> = new Map();
  public reportDataType: string = "raw";
  public properties: any = [];
  public SelectedPropertiesObjects : Array<any> =[];
  public deviceTypeModelRequest: any;
  public clicked:any =false;
  ReportName:any;
  reportTabSelected:any= "reportConfiguration";
  clickSaved= false;
  showInfoMessage:any;
  propertyfilterValue:any;
  clickSavedProperty=false;
  isDashboardReport=false;
  isLoading :any;
  viewPortItems:any;
  counterListSubscription :any;
  noCountersForCG :boolean = false;
  grouped:any;
  counterListForReport :any=[];
  reportTypeConfigList = [{
    type: "Table", class: "icon-24 table-icon", subtype: [{ name: "Table", image: "./assets/images/icon-table60.png" }
    ]
  }, { type: "Graph", class: "icon-24 graphs-icon", subtype: [{ name: "line", image: "./assets/images/line-chart.png" },{ name: "Spline", image: "./assets/images/spline-graph.png" }, { name: "Bar", image: "./assets/images/vertical-bar.png" }, { name: "Vertical Stacked Bar", image: "./assets/images/vertical-stacked-bar6.png" }, { name: "Horizontal Stacked Bar", image: "./assets/images/horizontal-stacked-bar2.png" }, { name: "Horizontal Bar", image: "./assets/images/horizontal-bar4.png" }] }, { type: "TopN", class: "icon-24 top-icon", subtype: [{ name: "Time Ratio Bar", image: "./assets/images/pie-chart2.png" }] }]
  //constructor(  formBuilder: FormBuilder ,private getreportService : GetreportService ,private reportModel :NewReportModel, private menuService : MenuServiceService,private router : Router ,private localstorageService:LocalStorageService,private route: ActivatedRoute,private location:Location)
  constructor(formBuilder: FormBuilder, private getreportService: GetreportService, private commonParsingService: CommonParsingService, private appConfig: AppConfig, private menuService: MenuService, private commonGetterSetterService: CommonGetterSetterService, private reportModel: NewReportModel, private configService: ConfigService, private _spinner: DataLoadSpinner, private kpiService: KpiService, public commonFieldErrorUtilService: CommonFieldErrorUtilService, private localStorageService: LocalStorageService
    , private router: Router, private route: ActivatedRoute) {
    this.refreshInterval = this.configService.getConfiguration().refreshInterval;
   
    this.newReportForm = formBuilder.group({
      "ReportSource": [],
      "ReportType": {
        "type": "Table",
        "subType": "Table",
      },
      "graphType": "Line",
      "properties": [],
     "granularity":  new FormControl("", [Validators.required,dropdownValueValidator(this.reportModel.granularities)]),
      "filterExpression": "",
       'aggregation': "",
      
      "metric": ["Availability"],
      "filterfield": "",
      "FilterFieldValue": "",
      "fromDate": this.commonParsingService.formatDate(new Date(), this.offset, this.offsetHours),
      "toDate": this.commonParsingService.formatDate(new Date(), this.offset),
      "threshold": "10",
      "duration": "Custom",
      "timestring": new FormControl("", [Validators.required,dropdownValueValidator(this.reportModel.timeStringList)]),
      "timerange": new FormControl("", [Validators.required,dropdownValueValidator(this.reportModel.timeRangeList)]),
      "samplingPeriod": "15 minutes",
      "counterGroups": formBuilder.group({
        displayName: undefined

      }),
      "device": "",
      "counter": formBuilder.group({
        displayName: undefined

      }),
    });

    this.commonFieldErrorUtilService.setForm(this.newReportForm);

  }

  ngOnInit() {
    this.isLoading = false;
    this.newReportModel.aggregationTypes = this.reportModel.aggregationTypes;
    this.newReportModel.timeRangeList = this.reportModel.timeRangeList;
    this.menuService.getToggledValue().subscribe((data) => {
      this.menuToggled = data.value;
      // this._chart.redraw();
    });
    this.editReportModel = this.route.snapshot.data['configuration'];
    console.log(this.editReportModel);
    if (this.editReportModel && this.router.url.match('/editReport')) {
      this.editReport = true;
      if(this.router.url.match('dashReport')){
        this.isDashboardReport=true;
      }
       this._spinner.showProgressMessage("Please wait while data  is being retrieved");
      this.newReportForm.addControl("ReportTitle",(new FormControl(this.editReportModel.configuration.name,[Validators.required])));
      this.newReportForm.controls["ReportType"].setValue({type:this.editReportModel.configuration.type,subType:this.editReportModel.configuration.subType});
      if(this.editReportModel.intervals.toLowerCase().match('last')){
        let sub = this.editReportModel.intervals.split(' ');
        console.log(sub);
        this.newReportForm.controls["timestring"].setValue(sub[0]);
        this.newReportForm.controls["timerange"].setValue(sub[1]+' '+sub[2]);
      }else if(this.editReportModel.intervals.toLowerCase().match('T')){
          let int = this.editReportModel.intervals.split('/');
           this.fromDate = this.commonParsingService.formatDate(int[0]);
            this.toDate = this.commonParsingService.formatDate(int[1]);
         }
      this.newReportForm.controls["granularity"].setValue(this.editReportModel.granularity=='ALL' ?'Raw':this.editReportModel.granularity);
      this.selectDeviceType(this.editReportModel.configuration.deviceType);

    } else if(!this.editReportModel && this.router.url.match('/editReport')){
      if(this.router.url.match('dashReport')){
          this.router.navigate(['/editDashboard/' + this.route.snapshot.params["dashboardId"]]);
      }else{        
        this.router.navigate(['/report/' + this.route.snapshot.params["templateId"] + '/userReport']);
      }
    }
    let request :any = {
      "profile": {
        "profileName": ""
      }
    };
    this.getreportService.getDevices(request).subscribe(data => {
      if (data) {
        this.elements = data;
        // this.devices = data;
      }
    }, (err) => {
      console.log(err);
    });


  }

  backToOrigin(){
    if(this.router.url.match('/editReport') && this.isDashboardReport){
        let dashboardId = this.route.snapshot.params["dashboardId"];
        this.router.navigate(['/editDashboard/' + dashboardId]);
    }else{
      this.router.navigate(['/report/' + this.route.snapshot.params["templateId"] + '/userReport']);
    }
  }


  showCustomScrollbar(id) {
    // $(id).mCustomScrollbar({
    //   theme: "minimal-dark",
    //   advanced: {
    //     autoScrollOnFocus: false,
    //     updateOnContentResize: true
    //   }
    // });
  }

  trackByFunct(index, counter) {
    return counter.counterId;
  }

  gotoReportGeneration(id) {
    this.reportTabSelected = id;
    console.log($('#' + id));
    $('#' + id).click();
  }

  ngAfterViewInit() {
    //$(".help").popover({ trigger: "hover" });
    let date = new Date();
    let fromdate: any = new Date(date.getFullYear(), date.getMonth(), date.getDate() - 1, date.getHours(), date.getMinutes(), date.getSeconds());
    let date1 = new Date();
    let todate: any = new Date(date1.getFullYear(), date1.getMonth(), date1.getDate(), date1.getHours(), date1.getMinutes(), date1.getSeconds());

    // $("#datePicker").on('click', (e, args) => {
    //   $("#datePicker").datetimepicker("show");
    // });
    $('#counterModal').on('shown.bs.modal', function() {
       $("#counterstabanchor").click();
    })
    this.showCustomScrollbar('ul.dropdown-overflow,.scroll-tab-content');
    this.newReportForm.controls["ReportType"].valueChanges
      .subscribe((value: any) => {
        if(value.type == 'Graph'){
        $("#graphInfoMessage").fadeIn();
          setTimeout(()=>{
             $("#graphInfoMessage").fadeOut();
          },4000);
        }

      });


    $("#datePicker").datetimepicker({
      value: fromdate,
      format: 'dd-mm-yy',
      maxDate: 0,
      changeYear: true,
      autoclose: true

    });
    // $("#datePicker").datetimepicker("setDate",this.formatDate(fromdate,'previous'));
    $("#datePicker").on('change', (e, args) => {
      this.newReportForm.controls["fromDate"].setValue($("#datePicker").val());
    });



    $("#todatePicker").datetimepicker({
      format: 'dd-mm-yy', value: todate,
      maxDate: 0,
      changeYear: true,
      autoclose: true
    });

    $("#todatePicker").on('change', (e, args) => {
      this.newReportForm.controls["toDate"].setValue($("#todatePicker").val());
    });





    let parent = this;
    $('.dropdown').on({
      focus: function () {
        $(this).siblings('div.drop-list').removeClass('hide');
        $(this).siblings('span.clear-btn').removeClass('hide');
        $(this).siblings('div.drop-list').addClass('show');
        if ($(this).parents('div.form-group').siblings().children('div.dropdown').length > 0) {
          if ($(this).parents('div.form-group').siblings().children('div.dropdown').find('div.drop-list').hasClass('show')) {
            $(this).parents('div.form-group').siblings().children('div.dropdown').find('div.drop-list').removeClass('show');
            $(this).parents('div.form-group').siblings().children('div.dropdown').find('div.drop-list').addClass('hide');
          }
        }
        parent.showCustomScrollbar('ul.dropdown-overflow');
      }
    }).blur(function () {
      if ($('div.drop-list:hover') && $('div.drop-list:hover').length == 0) {
        $(this).siblings('div.drop-list').removeClass('show');
        $(this).siblings('div.drop-list').addClass('hide');

      }

      if ($('span.clear-btn:hover') && $('span.clear-btn:hover').length > 0) {
        $(this).focus();
      } else {
        $(this).siblings('span.clear-btn').addClass('hide');
      }
    });
   $(".action-menu> li > a.action-menu-tab").click(function () {
      var tablink = $(this).attr('href');
      $(tablink).fadeIn();
      $(this).parents(".action-menu").find('li').removeClass("active");
      $(this).parents(".action-menu").find('li').find('a.action-menu-tab').addClass("active");
      if(!$(this).hasClass("disabled")){
        $(this).parents(".action-menu li").addClass("active");
      }

      return false;
  });

   $(".closeButton").click(function(){
         $(this).parents(".reportMenu").find('li').removeClass("active");
         $(".tabHolder").fadeOut();
      });
    this.newReportForm.controls['timestring'].valueChanges
    .subscribe((form: any) => {
    console.log("value change ");
    if(this.newReportForm.controls['timestring'].value == 'Custom')
    {
    this.newReportForm.controls['timerange'].setValidators(null);
    this.newReportForm.controls['timerange'].updateValueAndValidity();
  }
  else if(this.newReportForm.controls['timestring'].value == 'Last'){
    this.newReportForm.controls['timerange'].setValidators(dropdownValueValidator(this.reportModel.timeRangeList));
    this.newReportForm.controls['timerange'].updateValueAndValidity();
  }
    });

  }

showTabHolder(href){
  $(href).fadeIn();
}

  getObjectOfRequest(element, value) {
    let obj = {
      "type": "selector",
      "field": element,
      "value": value
    }
    return obj;
  }


  clearResponse() {
    this.response = [];
    this.tableResponse = { headers: [], data: [] };
    this.kpiResponse = [];
    this.kpiTableResponse = { headers: [], data: [] };
   
  }


  public createOrUpdateReport(save?) {
    this.clearResponse();
    let counters = [];
    this.fromDateUpdated = new Date(this.newReportForm.controls["fromDate"].value + ' GMT');
    this.toDateUpdated = new Date(this.newReportForm.controls["toDate"].value + ' GMT');
    let errorCount = 0;
    let request: any = this.newReportModel.reportRequest;
    let counterIdArray = [];
    let dimensions = [];
    let counterGroupArray = this.getCounterGroupArray();

    

    if(!this.newReportForm.valid || !this.element){
      Object.keys(this.newReportForm.controls).forEach(field => { // {1}
        const control = this.newReportForm.get(field);            // {2}
        control.markAsTouched({ onlySelf: true });       // {3}
      });
      return false;
    }

    request.jsonString.counterGroupsWithCounterAndProperties = counterGroupArray;
    console.log("counterGroupArray");
    console.log(counterGroupArray);
    let result =[];
    this.counterIds.forEach((item)=>{
     if(result.indexOf(item) < 0) {
         result.push(item);
     }
});
    if (result && result.length > 0) {
      for (let ids of result) {
        let obj = {};
        obj["id"] = ids;
        counterIdArray.push(obj);
      }
      request.jsonString.configuration.metrics = counterIdArray;
      request.jsonString.configuration.kpiMetrics = null;
    }

    

    // else {
    //   for (let ids of this.kpiListChecked) {
    //     let obj = {};
    //     obj["id"] = ids;
    //     counterIdArray.push(obj);
    //   }
    //   request.jsonString.configuration.kpiMetrics = counterIdArray;
    //   request.jsonString.configuration.metrics = null;
    // }

    // if (this.properties && this.properties.length > 0) {
    //   for (let name of this.properties) {
    //     let obj = {};
    //     obj["id"] = name;
    //     obj["name"] = name;

    //     dimensions.push(obj);
    //   }
    // }

        if (this.SelectedPropertiesObjects && this.SelectedPropertiesObjects.length > 0) {
      for (let propObj of this.SelectedPropertiesObjects) {
        let obj = {};
        obj["id"] = propObj.propertyKey.propertyId;
        obj["name"] = propObj.propertyName;
        obj["displayName"] = propObj.propertyName;
        let idPresent= dimensions.find(x => x.id == propObj.propertyKey.propertyId);
        if(!idPresent)
         {  dimensions.push(obj); }
      }
    }

    
    request.jsonString.configuration.dimensions = dimensions;

    request.jsonString.configuration.type = (this.newReportForm.controls["ReportType"].value).type;

    if ((this.newReportForm.controls["ReportType"].value).type == 'Graph' || (this.newReportForm.controls["ReportType"].value).type == 'TopN') {
      if (this.counterIds.length > this.countersAllowed) {
        this._spinner.showErrorMessage("Select only " + this.countersAllowed + " counters/kpis for a graph report");
        return false;
      } 
    }
    request.jsonString.configuration.subType = (this.newReportForm.controls["ReportType"].value).subType;
    request.jsonString.configuration.deviceType = this.element;

    request.jsonString.intervals = this.getTimeStringInterval();

    if (null != this.newReportForm.controls["granularity"].value) {
      let granularity: string = this.newReportForm.controls["granularity"].value;
      request.jsonString.granularity = granularity.toUpperCase();
      if(granularity.toLowerCase() == 'raw')
      {
        request.jsonString.granularity = 'ALL';
      }
    }

    let filterObject: any = {};
    if (null != this.requestFilterMap) {
      this.requestFilterMap.forEach((v, k) => {
       
        if(v!=null && v.length>0){
           let result =[];
           v.forEach((item)=>{
          if(result.indexOf(item) < 0) {
              result.push(item);
          }
        filterObject[k] = result;
        });
        }else{
          filterObject[k]=v;
        }
   
    })

    }

    request.userName = this.localStorageService.get('userName');
    request.jsonString.pagination.pagesize = 10000;
    request.jsonString.filterMap = filterObject;
    request.jsonString.reportDataType = this.reportDataType;

    this.getreportService.setColumnReportRequest(request);

    this.tableResponse = { headers: [], data: [], showSubElementsAnchored: false };
    this.response = [];
    console.log(request);


   if(this.editReport && save){
    request.jsonString.configuration.name = this.newReportForm.get('ReportTitle').value;
    request.userTemplateId = this.route.snapshot.params["templateId"];
    request.isDashboardReport = this.isDashboardReport;
    this.getreportService.updateReport(request).subscribe((data) => {
      this._spinner.showSuccessMessage("Report saved  successfully.")
      let menu: any = this.localStorageService.get('menu');
    
      let reportId = data.userTemplateId;
      if(!this.isDashboardReport)
      {
      this.menuService.setMenu(data);
      this.menuService.setMenuSubject("Menu updated");
      }
      let dashboardId = this.route.snapshot.params["dashboardId"];
      if(!this.isDashboardReport && (dashboardId!=null)){
      this.router.navigate(['/report/' + request.userTemplateId + '/userReport']);
    }else{
      this.router.navigate(['/editDashboard/' + dashboardId]);
          }
    }, (err) => {
      console.log(err);
    });
   }else{
     this.isLoading = true;
    this.getreportService.getSpecificReport(request).subscribe(data => {
    this.isLoading = false;
        this.tableResponse = this.commonParsingService.parseRestTableResponse(data);
        this.counterListForReport= this.commonParsingService.getcounterListForReport(data);
      
      this.response = data;
      this.showGraph = (this.newReportForm.controls["ReportType"].value).type == 'Table' ? false : true;
       $("html, body").animate({ scrollTop: $(document).height() }, 1000);
      this._spinner.hide();
     // this.tableResponse =data;
      this.refreshDataContinuously = this.appConfig.refreshContinuously;

    }, (err) => {
      console.log(err);
       this.isLoading = false;
       this._spinner.showErrorMessage("Error retrieving data");
    });
   }
  }

  showTab(id) {
    $("#" + id).fadeIn();
    $('a.' + id).parents(".reportMenu").find('li').removeClass("active");
    if (!$('a.' + id).hasClass("disabled")) {
      $('a.' + id).parents(".reportMenu li").addClass("active");
    }


  }


onListChange($event){
console.log($event);
}


  public getTimeStringInterval() {
    if (this.newReportForm.controls["timestring"].value == 'Custom') {
      return this.getInterval();
    } else {
      let time = [this.newReportForm.controls["timestring"].value, this.newReportForm.controls["timerange"].value].join(' ');
      return time;
    }
  }

  public getInterval() {
    let interval = "";
    let date: Date = new Date(this.newReportForm.controls["fromDate"].value + ' GMT');
    let date2: Date = new Date(this.newReportForm.controls["toDate"].value + ' GMT');
    interval = date.toISOString() + '/' + date2.toISOString();
    return interval;
  }

  public getFilter() {

    let rules = $('#builder-basic').queryBuilder('getRules');
    if (rules != null && $.isEmptyObject(rules)) {
      rules = null;
    }

    return rules;
  }





  public getConfiguration() {

  }


  generatePreviousUTCDate() {
    let currentDate: Date = new Date();
    var day = currentDate.getUTCDate() - 1;
    var month = currentDate.getUTCMonth() + 1;
    var year = currentDate.getUTCFullYear();
    var hour = currentDate.getUTCHours();
    var minutes = currentDate.getUTCMinutes();
    var seconds = currentDate.getUTCSeconds();
    return new Date(year, month, day, hour, minutes, seconds);
  }




  generatePreviousDate() {
    let currentDate: Date = new Date();
    var day = currentDate.getDate() - 1;
    var month = currentDate.getMonth() + 1;
    var year = currentDate.getFullYear();
    var hour = currentDate.getHours();
    var minutes = currentDate.getMinutes();

    return month + '/' + day + '/' + year + ' ' + '00:00';
  }




  changeValue(val) {
    if (val.isCollapsed == 'true') {
      val.isCollapsed = 'false';

    } else {
      val.isCollapsed = 'true';
    }

  }
  public getValuesList(element, inputElement) {
    let pattern: string = inputElement.val();
    let property = element.queryBuilderModel.__.filter;
    if (pattern == "") {
      pattern = null;
    }

  }





  showDropdown(event) {
    let elem: any = $(event.currentTarget).siblings('div.drop-list');
    let elem1: any = $(event.currentTarget).parents('a').siblings('div.drop-list');
    $(event.currentTarget).siblings('span.clear-btn').removeClass('hide');
    // let elem1: any = $(event.currentTarget).parents('div.form-group').siblings().children('div.dropdown');
    console.log(elem1);
    if (elem && elem.length > 0)
      elem.removeClass('hide').addClass('show');
    if (elem1 && elem1.length > 0)
      elem1.removeClass('hide').addClass('show');
  }

  hideDropdown(event) {
    $(event.currentTarget).siblings('div.drop-list').removeClass('show').addClass('hide');
  }

  hideDropdownClick(event) {
    $(event.currentTarget).parents('div.drop-list').removeClass('show').addClass('hide');
  }



  generateCurrentUTCDate() {
    let currentDate: Date = new Date();
    var day = currentDate.getUTCDate();
    var month = currentDate.getUTCMonth() + 1;
    var year = currentDate.getUTCFullYear();
    var hour = currentDate.getUTCHours();
    var minutes = currentDate.getUTCMinutes();
    var seconds = currentDate.getUTCSeconds();
    return new Date(Date.UTC(year, month, day, hour, minutes, seconds));
  }


  generateCurrentDate() {
    let currentDate: Date = new Date();
    var day = currentDate.getDate();
    var month = currentDate.getMonth() + 1;
    var year = currentDate.getFullYear();
    var hour = currentDate.getHours();
    var minutes = currentDate.getMinutes();
    return month + '/' + day + '/' + year + ' ' + '00' + ':' + '00';
  }






 
  addCounterIds(counter, value, group?, kpi?) {

    if (this.counterIds || this.counterIds.length == 0) {
      this.clearResponse();
    }
    let groupId = group.counterGroupId;
    if (counter.counterKey.counterId && value) {
      this.counterIds.push(counter.counterKey.counterId);

    } else if (counter.counterKey.counterId  && !value) {
      this.counterIds.splice(this.counterIds.indexOf(counter.counterKey.counterId), 1);

    }
    
    //  else if (counter.id && this.counterIds.indexOf(counter.id) < 0 && value) {
    //   this.counterIds.push(counter.id);

    // } else if (counter.id && this.counterIds.indexOf(counter.id) >= 0 && !value) {
    //   this.counterIds.splice(this.counterIds.indexOf(counter.id), 1);

    // }




    if (!kpi) {
      // if (value) {

      //   if (this.counterGroupIds.indexOf(groupId) < 0) {
      //     this.counterGroupIds.push(groupId);
      //   }
      //   let counters = JSON.parse(JSON.stringify(counter));
      //   let groups = JSON.parse(JSON.stringify(group));
      //   if (!groups.counterEnabled) {
      //     groups.counterEnabled = [];
      //   }
      //   let hasGroup = false;
      //   if (this.countersInCG) {
      //     this.countersInCG.forEach((e) => {
      //       if (e.counterGroupId == groupId) {
      //         hasGroup = true;
      //       }
      //     })
      //   }

      //   if (!hasGroup) {
      //     this.countersInCG.push(groups);
      //   }
      //   this.countersInCG.forEach((e, i) => {
      //     if (e.counterGroupId == groupId) {
      //       e.counterEnabled.push(counter);
      //     }
      //   })
      //   if (this.counterGroupsEnabled.kpi.length == 0 && this.counterGroupsEnabled.counters.length == 0) {
      //     this.counterGroupsEnabled.counters.push(groups);
      //     this.tabSelected = "counters";
      //   } else {
      //     let hasGroupIdinCounter = false;
      //     this.counterGroupsEnabled.counters.forEach((elem, i) => {
      //       if (elem.counterGroupId == groupId) {
      //         hasGroupIdinCounter = true;
      //       }
      //     })
      //     let hasGroupIdinKPI = false;

      //     if (!hasGroupIdinCounter) {
      //       this.counterGroupsEnabled.counters.push(groups);
      //     }
      //   }
      // } else {
      //   counter["showEnable"] = false;
      //   let i = 0;
      //   // for (let coutr of this.countersDisplay) {
      //   //   if (coutr.counterId == counter.counterId) {
      //   //     this.countersDisplay.splice(i, 1);
      //   //   }
      //   //   i++;
      //   // }

      //   let index1; let removeGroup = false;;
      //   this.countersInCG.forEach((e, i) => {
      //     if (e.counterGroupId == groupId) {
      //       index1 = i;
      //       let index;
      //       e.counterEnabled.forEach((c, j) => {
      //         if (c.counterId == counter.counterId) {
      //           index = j;
      //         }
      //       });
      //       e.counterEnabled.splice(index, 1);
      //       if (e.counterEnabled.length == 0) {
      //         removeGroup = true;
      //       }
      //     }
      //   })
      //   if (removeGroup) {
      //     this.countersInCG.splice(index1, 1);
      //     // this.counterGroupsEnabled.kpi = this.counterGroupsEnabled.kpi.filter((elem)=>{
      //     //      return elem.counterGroupId!=groupId;
      //     //  });
      //     let cg = {};
      //     if (this.kpisInCG) {
      //       let cg = this.kpisInCG.filter((cg1) => {
      //         return cg1.counterGroupId == groupId
      //       })
      //     }

      //     let kpiEnabledPresent = false;
      //     if (cg["kpiEnabled"]) {
      //       cg["kpiEnabled"].forEach((c, j) => {
      //         kpiEnabledPresent = true;
      //       })
      //     }
      //     if (!kpiEnabledPresent) {
      //       this.counterGroupsEnabled.counters = this.counterGroupsEnabled.counters.filter((elem) => {
      //         return elem.counterGroupId != groupId;
      //       });
      //     }
      //   }

      //   if (this.counterGroupIds.indexOf(groupId) >= 0) {
      //     this.counterGroupIds.splice(this.counterGroupIds.indexOf(groupId), 1);
      //   }
      // }
    } 

  }

  hideDropdownDrop(event) {
    $(event.currentTarget).parents('div.drop-items').addClass("hide").removeClass("show");

  }

  enabledCounterGroup(group, clss?, key?) {

    if ($('a#' + group.counterGroupId + key).hasClass(clss)) {
      return true;
    } else {
      return false;
    }

  }


  clearCounterIds(counterGroup1) {
    this.controlgroup = JSON.parse(JSON.stringify(counterGroup1));
    this.counterIds = [];
    for (let gp of this.counterGroup) {
      for (let counter of gp.counters) {
        counter["showEnable"] = false;
      }
    }
  }




  addAllCounterIds(counterGrp, value, counterKPI?) {
    counterGrp.counterEnabled = [];
    if (counterKPI == 'counters') {
      if (counterGrp.counterList) {
        for (let counters of counterGrp.counterList) {
          counters["showEnable"] = value;
          this.addCounterIds(counters,value, counterGrp, 'counters');
        }
      }
    } else {
      if (counterGrp.kpis) {
        for (let kpi of counterGrp.kpis) {
          kpi["showEnable"] = value;
          this.addCounterIds(kpi,value, counterGrp, 'kpi');
        
        }
      }
    }



  }

  addAllKPIs(counterGrp, value) {
    counterGrp.kpiEnabled = [];
   
      for (let kpi of counterGrp.kpis) {
        kpi["showEnable"] = value;
        this.addCounterIds(kpi, value, counterGrp);
      }
    

  }


  addAllCounterGroups(value) {
    if (value) {
      let request = {
        "counterGroups": [

        ]
      };
      let arr = [];
      for (let groups of this.deviceTypeModel.controlgroup) {

        groups["showEnable"] = true;
        groups["search"] = "";
        if (!groups.counterList || groups.counterList.length <= 0) {
          arr.push({ "counterGroupId": groups.counterGroupId });
        }
        //for(let groups of this.counterGroupsDisplay){
      }
      request.counterGroups = arr;
      if (arr && arr.length <= 0) {
        this.getreportService.getCounterIDs(request).subscribe(data => {
          this.deviceTypeModel.controlgroup = data;
          for (let controlgroup of this.deviceTypeModel.controlgroup) {
            $.extend(controlgroup, { showEnable: true });
          }
        }, (err) => {
          console.log(err);
        });
      }
      // this.addCountersIntoGroup(groups, true);

    } else {
      //this.clearAllData();
      for (let groups of this.deviceTypeModel.controlgroup) {
        groups["showEnable"] = false;
      }
    }
  }



  addJSONParsedModel(device, $event?) {
    this.deviceTypeModel = {};
    this.clearAllData();
    let request = {};
    // if (device == 'all') {
    //   request = {
    //     "allNodeFlag": true,
    // if (device != 'all') {

    //   this.deviceTypeModel = JSON.parse(JSON.stringify(device));
    // }
    // else
    // { this.deviceTypeModel.elementUserLabel = "All Nodes"; }

    request["deviceType"] = this.element;

    this.getreportService.getCounterGroups(request).subscribe(data => {
      if (data) {
        this.deviceTypeModel.controlgroup = JSON.parse(JSON.stringify(data));
      }
       let cgids =[];
       let cgs=[];
      if(this.editReport){
     
      this.editReportModel.counterGroupsWithCounterAndProperties.filter((cgs)=>{
        cgids.push(cgs.counterGroupId);
      })
      cgs = this.editReportModel.counterGroupsWithCounterAndProperties;
      let obj = this.editReportModel.filterMap;
      let propertyValues = this.editReportModel.filterMap;
      for(let keys in propertyValues){
        this.requestFilterMap.set(keys,obj[keys]);
      }
      this.reportDataType = this.editReportModel.reportDataType;
      }
      for (let controlgroup of this.deviceTypeModel.controlgroup) {
        $.extend(controlgroup);
        if(this.editReport && cgids.indexOf(controlgroup.counterGroupId)>=0){
          let cg = cgs.filter((cgInner)=>{
             return cgInner.counterGroupId == controlgroup.counterGroupId
          })
        
          if(cg && cg.length >0){
              controlgroup.counterList=cg[0].counterList;
              controlgroup.properties=cg[0].properties;
              controlgroup.kpis=cg[0].kpis;
          this.addCountersIntoGroup(controlgroup,true,null,true);
          }
        }
      }

      if(this.editReport){
        this.deviceTypeModel.controlgroup.sort((cg1,cg2)=>{
          if(cgids.indexOf(cg1.counterGroupId)>=0){
            return -1;
          }else{
            return 1;
          }
        })
      }
      
      // setTimeout(() => {
      //   this.showCustomScrollbar('virtual-scroll');
      // }, 0)

    }, (err) => {
      console.log(err);
    });
    request["deviceType"] = this.element;
    let request1 = {
      "deviceType": this.element
    };
    // this.getreportService.getCounterGroupsKPI(request1).subscribe((data) => {
    //   if (data) {
    //     this.deviceTypeModel.controlgroupKPI = JSON.parse(JSON.stringify(data));
    //   }

    //   for (let controlgroup of this.deviceTypeModel.controlgroupKPI) {
    //     $.extend(controlgroup, { showEnable: false, showAllProps: false, typeShown: "KPI", disabled: false });
    //   }
    //   //this.counterGroupKPIPopUp = this.deviceTypeModel.controlgroupKPI;
    //   this.showCustomScrollbar('ul.dropdown-overflow');
    // }, (err) => {
    //   console.log(err);
    // })

    // this.controlgroup = "";
    // $('div#counterGroup').children('tags-input').on('click', (e) => {
    //   this.showDropdown(e);
    // })

    if ($event) {
      this.hideParentDropdown($event);
    }
  }

  clearAllData() {
    this.counterIds = [];
    this.counterGroupMap.clear();
    this.counterGroupCounters = [];
    this.subElementAdded = { displayName: "" };
    this.subElement = [];
    this.countersInCG = [];
    this.kpisInCG = [];
    this.response = [];
    this.tableResponse = {};
    this.kpiResponse = [];
    this.kpiTableResponse = { data: [], headers: [] };
    this.kpiList.forEach((elem) => {
      elem.addToReport = false;
    })
    this.counterGroupsEnabled = { kpi: [], counters: [] };
    this.tabSelected = "";
    this.SelectedPropertiesObjects =[];
    this.requestFilterMap.clear();
  
  }

  addCountersIntoGroup(counterGroup, value, $event?,edit?) {
    this.counterLoading = true;
    if(this.counterListSubscription){
      this.counterListSubscription.unsubscribe();
    }
    this.counterGroupPopUp = {
       displayName:"",search:"",
    counterList: [],
    showMoreItems:false,
    searchProp: "",
    properties: [],
    counterGroupId: "",
    kpis:[]
};
  
    let counteridsEdit =[];
    let kpisEdit = [];
    let propertiesEdit =[];
     let propertyIds =[];
    let request = {
      "counterGroups": [

      ]
    };

    let editFilterMap : Map<any, any> = new Map();
    let arr = [];

    arr.push({ "counterGroupId": counterGroup.counterGroupId });

    if(edit){
     
      if(counterGroup.counterList){
     counterGroup.counterList.filter((c)=>{
      counteridsEdit.push(c.counterKey.counterId);
      this.counterIds.push(c.counterKey.counterId);
    })
       counterGroup.counterList = [];
          }
       if(counterGroup.kpis!=null){
          counterGroup.kpis.filter((k)=>{
         kpisEdit.push(k.counterKey.counterId);
          this.counterIds.push(k.counterKey.counterId);
       })
       counterGroup.kpis =[];
       }
     
       if(counterGroup.properties){
       counterGroup.properties.filter((p)=>{
         propertiesEdit.push(p.propertyName);
         this.SelectedPropertiesObjects.push(p);
         propertyIds.push(p.propertyKey.propertyId);
         this.properties.push(p.propertyName);
         editFilterMap.set(p.propertyKey.propertyId,p.selectedValues);
       })
       counterGroup.properties =[];
       }
    }
    
    if (value) {
      request.counterGroups = arr;
      let profiles = this.localStorageService.get("profile")
      request["profile"] = profiles[0];
      request["deviceType"] = this.element;
      if (!counterGroup.counterList || counterGroup.counterList.length <= 0) {
          
       this.counterListSubscription = this.getreportService.getCounterIDs(request).subscribe(data => {
          if (data) {
            for (let cg of data) {
              if (counterGroup.counterGroupId == cg.counterGroupId) {
                counterGroup.counterList = cg.counterList;
                counterGroup.properties = cg.properties;
                counterGroup.kpis = cg.kpis;
            }
            }
            let i = 0;
            if (counterGroup.counterList!=null){
            for (let counter of counterGroup.counterList) {
              if(edit && counteridsEdit.indexOf(counter.counterKey.counterId)>=0){
                 counter = Object.assign(counter, { showEnable: true }, { disabled: false });
              }else{
                counter = Object.assign(counter, { showEnable: false }, { disabled: false });
              }
             
            }
            }
            if(null != counterGroup.kpis)
           { 
             for (let kpi of counterGroup.kpis) {
              if(edit && kpisEdit.indexOf(kpi.counterKey.counterId)>=0){
              kpi = Object.assign(kpi, { showEnable: true }, { disabled: false });
            }else{
              kpi = Object.assign(kpi, { showEnable: false }, { disabled: false });
            }
          }
           }
            for (let property of counterGroup.properties) {
              if(edit && propertiesEdit.indexOf(property.propertyName)>=0){
              $.extend(property, { showEnable: true }, { id: i } , {filterValue : '',filterArray:[]});
              }else{
              $.extend(property, { showEnable: false }, { id: i } , {filterValue : '',filterArray:[],selectedValues:[]});
              }
              
              if (null != property.propertyValues ) {
              //  property.propertyValues=JSON.stringify(property.propertyValues);
                //let valueObj= property.propertyValues;
               let valueObj= JSON.parse(property.propertyValues);
               console.log("JSON.stringify(property.propertyValues);"+valueObj);
            //   console.log("valueObj"+valueObj.values.length)
               property.propertyValues = valueObj;
               
               
               if(null != valueObj && null != valueObj.values && valueObj.values.length >0)
                {
                 // console.log("sanjana"); 
                  for(let val of valueObj.values){
                    if(edit && editFilterMap.get(property.propertyKey.propertyId) && editFilterMap.get(property.propertyKey.propertyId).indexOf(val)>=0){
                      property.filterArray.push({showEnable : true,value : val})
                    }else{
                    property.filterArray.push({showEnable : false,value : val})
                    }
                  }
                property.filterValue=valueObj.values[0];
                if(edit){
                  property.selectedValues = editFilterMap.get(property.propertyKey.propertyId)
                }
                   }
              }              
              i++;
           }
            this.counterLoading = false;
            this.counterGroupPopUp = counterGroup;
            

          }
          
        }
        , (err) => {
          console.log(err);
        });
      } else {
       setTimeout(()=>{
         this.counterLoading = false;
         this.counterGroupPopUp = counterGroup;
         this.virtualScroll.refresh(true);
       },500)
      
      }
    }
  }


  addCountersIntoGroup2(counterGroup, value) {
    let request = {
      "counterGroups": [

      ]
    };
    if (value) {
      request.counterGroups.push({ "counterGroupId": counterGroup.counterGroupId });
      this.getreportService.getCounterIDs(request).subscribe(data => {
        if (data) {
          counterGroup.counterList = data.counterList;
        }
      }, (err) => {
        console.log(err);
      });
    }
  }





  selectedReportType(reportSubType, reportType) {
    this.newReportForm.controls["ReportType"].setValue({
      type: reportType,
      subType: reportSubType.name
    });



  }

  

  setFormControlValues(fieldvalue, type) {
    this.newReportForm.controls[type].setValue(fieldvalue);
  }

  selectDeviceType(device, $event?) {
    //this.nodes = device;
    // this.device =  device;
    this.deviceTypeModel.elementUserLabel = "";
   
    let request = {

      "deviceType": device


    };
    this.element = device;
    this.addJSONParsedModel(device);
    // if (this.element != 'DSR') {
    //   this.getreportService.getNodesFromNodeType(request).subscribe(data => {
    //     this.nodes = data;
    //   }, (err) => {
    //     console.log(err);
    //   });
    //   this.levels = ["Subelement", "Node"];

    // } else {
    //   this.addJSONParsedModel("all");
    //   this.getreportService.getLevelsByDeviceType(request).subscribe((data) => {
    //     this.levels = data;
    //   }, (err) => {
    //     console.log(err);
    //   })
    // }

    this.clearAllData();
    if ($event)
      this.hideParentDropdown($event);

  }


  hideParentDropdown(event) {
    $(event.currentTarget).parents('div.drop-list').removeClass('show').addClass('hide');

  }
  clearArrays(id) {
    $('#' + id).click();
  }


  saveReport() {
    let request = this.getreportService.getColumnReportRequest();
  
    $('.tabHolder').fadeOut();
    request.jsonString.configuration.name = this.ReportName;
    request["userName"] = this.localStorageService.get("userName");
    this.getreportService.saveUserReport(request).subscribe((data) => {
      let menu: any = this.localStorageService.get('menu');
      let reportId = data.userTemplateId;
      this.menuService.setMenu(data);
      this.menuService.setMenuSubject("Menu updated");
      this.router.navigate(['/report/' + reportId + '/userReport']);
    }, (err) => {
      if(err && err._body &&  err._body.match("Maximum")){
        this._spinner.showErrorMessage("Maximum number of saved charts reached. Please remove any one the charts to add more.")
      }
      console.log(err);
    });
    
  }

isEnabled(val){
  if(!$('a#createReport').hasClass('disabled') && !val){
    return {'notification':true};
  }else{
    return {'notification':false};
  }

}

  exportReport(exportType) {
    let request = {};
    request["userName"] = this.localStorageService.get('userName');
    request["jsonString"] = this.getreportService.getColumnReportRequest()["jsonString"];
    request["fileType"] = exportType;
    request["counterGroupsWithCounterAndProperties"] = this.getreportService.getColumnReportRequest()["jsonString"]["counterGroupsWithCounterAndProperties"];
    this.getreportService.exportUserReport(request).subscribe((data) => {
      if (null != data && data != undefined) {
          
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


  checkEnableDisableCounterGroup(group, type) {
    let defaultValue = true;
    let hasGroupId = false;
    let hasGroupIdinCounter = false;

    if ((this.tabSelected == "kpi" && type == "counters") || (this.tabSelected == "counters" && type == "kpi")) {
      return { 'counter-disabled': false };
    }

    this.counterGroupsEnabled[type].forEach((elem, i) => {
      defaultValue = false;
      if (group.counterGroupId == elem.counterGroupId) {
        hasGroupId = true;
      }
    });
    if (defaultValue || hasGroupId) {
      return { 'counter-disabled': false };
    }
    else {
      return { 'counter-disabled': true };
    }

  }

  counterGroupEnabled(elem) {
    if ($(elem) && $(elem).length > 0) {
      return true;
    } else {
      return false;
    }
  }

  setReportDataType(type,value) {
    if(value){
    this.reportDataType = type;
    }else{
    this.reportDataType = 'raw';
    }
  }

  addProperties(propertyName, value, propertyObj ,group?) {

      if (this.properties || this.properties.length == 0) {
        this.clearResponse();
      }

      if (propertyName &&  value) {
        this.properties.push(propertyName);
        this.SelectedPropertiesObjects.push(propertyObj);
        // if (propertyObj.filterValue && propertyObj.filterValue != 'None') {
        //   this.requestFilterMap.set(propertyObj.propertyKey.propertyId, propertyObj.filterValue);
        // }

      } else if (propertyName &&  !value) {
        this.properties.splice(this.properties.indexOf(propertyName), 1);
        let index = 0;
        for (let property of this.SelectedPropertiesObjects) {
          if (property.propertyName == propertyName) {
            break;
          }
          index++;
        }
        this.SelectedPropertiesObjects.splice(index, 1);
        let filetredData = this.SelectedPropertiesObjects.filter((ob)=>{
          return ob.propertyKey.propertyId == propertyObj.propertyKey.propertyId
        });
        if (this.requestFilterMap.get(propertyObj.propertyKey.propertyId) && filetredData && filetredData.length==0) {
          this.requestFilterMap.delete(propertyObj.propertyKey.propertyId);
       }
      }
       if(group.properties){
        group.properties.filter((propertyObj1)=>{
          if(!propertyObj1["showEnable"]){
            if(propertyObj1.filterArray &&  propertyObj1.filterArray.length>0){
           propertyObj1.filterArray.filter((obj1)=>{
                  if(obj1["showEnable"]){
                    if(this.requestFilterMap && this.requestFilterMap.get(propertyObj.propertyKey.propertyId)!=null){
                      this.requestFilterMap.get(propertyObj.propertyKey.propertyId).splice(this.requestFilterMap.get(propertyObj.propertyKey.propertyId).indexOf(obj1.value),1)
                    }
                  }
                  obj1["showEnable"]=false;
          })
          propertyObj1.selectedValues = [];
            }
          }

        })
          
      }

  }

  addProprtyFilter(propertyObj ,valueArrayObj)
  {
    if ((valueArrayObj && valueArrayObj.showEnable)) {
      if(((propertyObj.selectedValues && propertyObj.selectedValues.indexOf(valueArrayObj.value)<0)) || !propertyObj.selectedValues  || propertyObj.selectedValues.length==0 ){
        if(propertyObj.selectedValues == null || !propertyObj.selectedValues){
          propertyObj.selectedValues = []
        }
        propertyObj.selectedValues.push(valueArrayObj.value);
      }
      if(this.requestFilterMap.get(propertyObj.propertyKey.propertyId)!=null && this.requestFilterMap.get(propertyObj.propertyKey.propertyId).length>0){
        let arr = JSON.parse(JSON.stringify(this.requestFilterMap.get(propertyObj.propertyKey.propertyId)));
          arr.push(valueArrayObj.value)
          this.requestFilterMap.set(propertyObj.propertyKey.propertyId,arr);
      }else{
      this.requestFilterMap.set(propertyObj.propertyKey.propertyId,  JSON.parse(JSON.stringify(propertyObj.selectedValues)));
      }
    }else if(valueArrayObj && !valueArrayObj.showEnable){
       if((propertyObj.selectedValues && propertyObj.selectedValues.indexOf(valueArrayObj.value)>=0)){
        propertyObj.selectedValues.splice(propertyObj.selectedValues.indexOf(valueArrayObj.value),1);
      }
      if(this.requestFilterMap.get(propertyObj.propertyKey.propertyId)!=null && this.requestFilterMap.get(propertyObj.propertyKey.propertyId).length>0){
        let arr =JSON.parse(JSON.stringify(this.requestFilterMap.get(propertyObj.propertyKey.propertyId)));
          if(arr.indexOf(valueArrayObj.value)>=0){
            arr.splice(arr.indexOf(valueArrayObj.value),1);
          }
          this.requestFilterMap.set(propertyObj.propertyKey.propertyId,arr);
      }else{
      this.requestFilterMap.set(propertyObj.propertyKey.propertyId,  JSON.parse(JSON.stringify(propertyObj.selectedValues)));
      }
    }

     
    if ((this.requestFilterMap.get(propertyObj.propertyKey.propertyId)==null || this.requestFilterMap.get(propertyObj.propertyKey.propertyId).length==0) && !valueArrayObj.showEnable) {
    this.requestFilterMap.delete(propertyObj.propertyKey.propertyId);
     propertyObj.filterArray.filter((obj)=>{
                obj["showEnable"] = false;
      })
    }
  }


  addAllProperties(group, value) {
    for (let props of group.properties) {
      this.addProperties(props.propertyName, value, props);
      props["showEnable"] = value;
    }

  }
  getCounterGroupArray() {
    let counterGrpArry = [];
    let counterGrp = {};
    let counterArray = [];
    let properties = [];
    let kpiArray = [];
    for (let group of this.deviceTypeModel.controlgroup) {
      counterArray = [];
      kpiArray = [];
      properties=[];
      counterGrp = Object.assign({}, ...group);
      if (group.counterList) {
        group.counterList.forEach((counter) => {
          let ctr = {};
          if (counter.showEnable) {
            for (let key in counter) {
              if (key != 'showEnable' && key != 'disabled' ) {
                ctr[key] = counter[key];
              }
            }
              counterArray.push(ctr);
          }

        })

        counterGrp["counterList"] = counterArray;
      }
      if (group.properties) {
        group.properties.forEach((prop) => {
          let property = {};
          if (prop.showEnable) {
            for (let key in prop) {
              if (key != 'showEnable' && key != 'id'&& key!='filterArray' ) {
                property[key] = prop[key];
              }
            }
            property["propertyValues"] = JSON.stringify(property["propertyValues"]);
             properties.push(property);
            
          }
        });
        

        counterGrp["properties"] = properties;
      }
         if (group.kpis) {
       group.kpis.forEach((kpi) => {
          let kpiObj = {};
          if (kpi.showEnable) {
            for (let key in kpi) {
              if (key != 'showEnable' && key != 'disabled') {
                kpiObj[key] = kpi[key];
              }
            }
             kpiArray.push(kpiObj);
          }
        })
        counterGrp["kpis"] = kpiArray;
      }
    
    delete counterGrp["search"];
    delete counterGrp["searchProp"];
    delete counterGrp["searchKPI"];

    if ((properties.length > 0) || (counterArray && counterArray.length > 0)) {
      counterGrpArry.push(counterGrp);
    }

    }
 
    return counterGrpArry;
  }

  getEnabledCounter(cg, key) {
    if (cg[key]) {
      for (let counters of cg[key]) {
        if (counters["showEnable"]) {
          return true;

        }
      }
    }
    return false;

  }

getEnabledCounterLength(cg, key) {
  let arry=[];
    if (cg[key] && cg[key].length>0) {
      arry = cg[key].filter((data)=>{
        return data.showEnable
      })
    }
    return arry.length
  }

  checkProperty(cg){
    let error =  false;
      cg.properties.filter((prop)=>{
        if(prop["showEnable"]){
          if(prop.filterArray && prop.filterArray.length>0){
        let arr = prop.filterArray.filter((subprop)=>{
             return  subprop["showEnable"]
            })
            if(arr && arr.length==0){
             error = true;
            }
          }
        }
      })

      return error;
  }

  closeModal(id,cg?){
    if(((this.getEnabledCounter(cg,'counterList') || this.getEnabledCounter(cg,'kpis')) && !this.getEnabledCounter(cg,'properties')) || 
    (!this.getEnabledCounter(cg,'counterList') && !this.getEnabledCounter(cg,'kpis')) && this.getEnabledCounter(cg,'properties')) 
   {
     this.clickSaved= true;
      return false;
    }else if(this.checkProperty(cg)){
      this.clickSavedProperty= true;
      return false;
      }else{
    
$('#'+id).modal('hide');
this.clickSaved= false;
this.clickSavedProperty = false;
    }
  }

  getCommaseperatedValues(values){
    let str="";
    values.forEach((val)=>{
      str+=val+',';
    })
    let str1=str.slice(0,-1);
    return str1;
  }

  get granularity() { return this.newReportForm.get('granularity'); }


}