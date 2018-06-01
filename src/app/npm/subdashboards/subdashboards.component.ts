import { Component, OnInit } from '@angular/core';
import { DataLoadSpinner } from '../services/dataLoadSpinner.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonGetterSetterService } from '../services/common/common.getterSetter.service';
import { SubdashboardsService } from '../services/http/subdashboards/subdashboards.service';
 import { LocalStorageService} from 'angular-2-local-storage';
 declare var $:any;
@Component({
  selector: 'app-subdashboards',
  templateUrl: './subdashboards.component.html',
  styleUrls: ['./subdashboards.component.css']
})

export class SubdashboardsComponent implements OnInit {
  dashboardId:any;
  subDashboards:Array<any>=[];
  subtype:any="line";
  breadcrumbs :any ;
  isLoading :any = true;

  constructor(private router: Router, private route: ActivatedRoute , private subdashboardsService : SubdashboardsService,private localStorageService: LocalStorageService,private commonGetterSetterService : CommonGetterSetterService) { }

//   ngOnInit() {
//     this.isLoading = true;
//     this.route.url.subscribe(() => {
//  if(this.router.url.match('subdashboards') ){

//   this.dashboardId = this.route.snapshot.params["dashboardId"];
//   let menu :any = this.localStorageService.get('menu');
//   let currentDashboard:any;
//   menu.filter((link)=>{
//     if(link.id=='1'){
//       let dash = link.subMenu.filter((dash)=>{
//         if(dash.id == this.dashboardId){
//           currentDashboard = dash;
//         }
//       })
//     }
//    })
//    let name = currentDashboard.displayName ? currentDashboard.displayName : currentDashboard.name;
//    this.breadcrumbs={mainlink:"Dashboard",sublinks:[{displayName:name,id:this.dashboardId,routing :currentDashboard.routing}]}
//    this.localStorageService.set('breadcrumbs',this.breadcrumbs);
//           let request :any = {
//             "dashboardId" : this.dashboardId
//           };
//          // this.subdashboardsService.getSubDashboardsForDashboard(request).subscribe(data=>{
//            let data={
//             "id": "0eNyyc",
//             "name": "DB1",
//             "type": "common",
//             "view": "both",
//             "subDashboards": [
//               {
//                 "name": "DB1",
//                 "subDashboardId": "6nnBRP",
//                 "dashboardId": "0eNyyc",
//                 "reports": [
//                   {
//                     "userTemplateId": "4sfdE35",
//                     "reportConfiguration": {
//                       "configuration": {
//                         "attributes": null,
//                         "properties": null,
//                         "metrics": [
//                           {
//                             "id": "EPC_C_1",
//                             "aggregationType": "SUM"
//                           },
//                           {
//                             "id": "EPC_C_13",
//                             "aggregationType": "SUM"
//                           }
//                         ],
//                         "kpiMetrics": null,
//                         "name": "CG_RAW_Report1",
//                         "type": "Graph",
//                         "subType": "line",
//                         "deviceType": "CG",
//                         "entity": null,
//                         "dimensions": [
//                           {
//                             "name": "CG_NAME",
//                             "displayName": "CG_NAME",
//                             "id": "EPC_P_1"
//                           }
//                         ],
//                         "context": null,
//                         "groupByDimensions": null
//                       },
//                       "filter": {
//                         "condition": "AND",
//                         "rules": [
//                           {
//                             "condition": "OR",
//                             "rules": [
//                               {
//                                 "field": "COUNTER_GROUP_ID",
//                                 "value": "EPC_CG_29",
//                                 "type": "selector"
//                               }
//                             ]
//                           },
//                           {
//                             "condition": "OR",
//                             "rules": [
//                               {
//                                 "id": "EPC_C_1",
//                                 "value": "-2147483648",
//                                 "type": "bound"
//                               },
//                               {
//                                 "id": "EPC_C_13",
//                                 "value": "-2147483648",
//                                 "type": "bound"
//                               }
//                             ]
//                           }
//                         ]
//                       },
//                       "samplingPeriod": null,
//                       "intervals": "Last 6 hours",
//                       "pagination": {
//                         "pagenumber": 1,
//                         "pagesize": 10000,
//                         "pagingSpec": null
//                       },
//                       "granularity": "ALL",
//                       "reportDataType": "raw",
//                       "filterMap": {
//                         "EPC_P_1": [
//                           "PCHCR01"
//                         ]
//                       },
//                       "counterGroupsWithCounterAndProperties": [
//                         {
//                           "counterGroupId": "EPC_CG_29",
//                           "counterGroupDetails": null,
//                           "deviceType": null,
//                           "neLevel": null,
//                           "cgSource": null,
//                           "counterList": [
//                             {
//                               "aggregation": null,
//                               "aggregationList": null,
//                               "counterKey": {
//                                 "counterId": "EPC_C_1",
//                                 "counterGroupTrans": null
//                               },
//                               "displayName": "Received SCDR",
//                               "counterUnit": "number",
//                               "counterDescription": "Pieces of Received SCDR",
//                               "counterType": "Counter",
//                               "enabled": null,
//                               "sourceName": null,
//                               "formula": null
//                             },
//                             {
//                               "aggregation": null,
//                               "aggregationList": null,
//                               "counterKey": {
//                                 "counterId": "EPC_C_13",
//                                 "counterGroupTrans": null
//                               },
//                               "displayName": "Received Partial eGCDR",
//                               "counterUnit": "number",
//                               "counterDescription": "Pieces of Received Partial eGCDR",
//                               "counterType": "Counter",
//                               "enabled": null,
//                               "sourceName": null,
//                               "formula": null
//                             }
//                           ],
//                           "properties": [
//                             {
//                               "propertyKey": {
//                                 "propertyId": "EPC_P_1",
//                                 "counterGroups": {
//                                   "counterGroupId": "EPC_CG_29",
//                                   "counterGroupDetails": null,
//                                   "deviceType": null,
//                                   "neLevel": null,
//                                   "cgSource": null,
//                                   "counterList": null,
//                                   "properties": null,
//                                   "kpis": null,
//                                   "displayName": null
//                                 }
//                               },
//                               "propertyName": "CG_NAME",
//                               "propertyValues": "{\"values\":[\"PCHCR01\",\"PCHKT03\",\"PCHLD02\",\"PCHLT01\",\"PCHMF01\",\"PCHWV02\",\"PCHWV03\"]}",
//                               "selectedValues": [
//                                 "PCHCR01"
//                               ]
//                             }
//                           ],
//                           "kpis": null,
//                           "displayName": "HWI_CG_CDRREC"
//                         }
//                       ]
//                     },
//                     "metrics": null,
//                     "kpiMetrics": null,
//                     "response": null,
//                     "userName": null,
//                     "reportName": "CG_RAW_Report1",
//                     "graphData": null,
//                     "header": null
//                   },
//                   {
//                     "userTemplateId": "At9AipI",
//                     "reportConfiguration": {
//                       "configuration": {
//                         "attributes": null,
//                         "properties": null,
//                         "metrics": [
//                           {
//                             "id": "EPC_C_1",
//                             "aggregationType": "AVG"
//                           },
//                           {
//                             "id": "EPC_C_2",
//                             "aggregationType": "MAX"
//                           },
//                           {
//                             "id": "EPC_C_9",
//                             "aggregationType": "SUM"
//                           }
//                         ],
//                         "kpiMetrics": null,
//                         "name": "Network issue analysis for Location1",
//                         "type": "Table",
//                         "subType": "Table",
//                         "deviceType": "CGP",
//                         "entity": null,
//                         "dimensions": [
//                           {
//                             "name": "NETWORK_NAME",
//                             "displayName": "NETWORK_NAME",
//                             "id": "EPC_P_5"
//                           },
//                           {
//                             "name": "BOARD_LOCATION",
//                             "displayName": "BOARD_LOCATION",
//                             "id": "EPC_P_2"
//                           },
//                           {
//                             "name": "CGP_NAME",
//                             "displayName": "CGP_NAME",
//                             "id": "EPC_P_1"
//                           }
//                         ],
//                         "context": null,
//                         "groupByDimensions": null
//                       },
//                       "filter": {
//                         "condition": "AND",
//                         "rules": [
//                           {
//                             "condition": "OR",
//                             "rules": [
//                               {
//                                 "field": "COUNTER_GROUP_ID",
//                                 "value": "EPC_CG_33",
//                                 "type": "selector"
//                               },
//                               {
//                                 "field": "COUNTER_GROUP_ID",
//                                 "value": "EPC_CG_35",
//                                 "type": "selector"
//                               }
//                             ]
//                           },
//                           {
//                             "condition": "OR",
//                             "rules": [
//                               {
//                                 "id": "EPC_C_1",
//                                 "value": "-2147483648",
//                                 "type": "bound"
//                               },
//                               {
//                                 "id": "EPC_C_2",
//                                 "value": "-2147483648",
//                                 "type": "bound"
//                               },
//                               {
//                                 "id": "EPC_C_9",
//                                 "value": "-2147483648",
//                                 "type": "bound"
//                               }
//                             ]
//                           }
//                         ]
//                       },
//                       "samplingPeriod": null,
//                       "intervals": "2018-04-02T04:25:00.000Z/2018-04-04T13:44:00.000Z",
//                       "pagination": {
//                         "pagenumber": 1,
//                         "pagesize": 10000,
//                         "pagingSpec": null
//                       },
//                       "granularity": "ALL",
//                       "reportDataType": "raw",
//                       "filterMap": {
//                         "EPC_P_1": [
//                           "MME001BKT",
//                           "MME001CRO",
//                           "MME001LDS",
//                           "MME001LTN"
//                         ]
//                       },
//                       "counterGroupsWithCounterAndProperties": [
//                         {
//                           "counterGroupId": "EPC_CG_33",
//                           "counterGroupDetails": null,
//                           "deviceType": null,
//                           "neLevel": null,
//                           "cgSource": null,
//                           "counterList": [
//                             {
//                               "aggregation": null,
//                               "aggregationList": null,
//                               "counterKey": {
//                                 "counterId": "EPC_C_1",
//                                 "counterGroupTrans": null
//                               },
//                               "displayName": "Mean CPU Load",
//                               "counterUnit": "%",
//                               "counterDescription": "Mean CPU Load",
//                               "counterType": "Counter",
//                               "enabled": null,
//                               "sourceName": null,
//                               "formula": null
//                             },
//                             {
//                               "aggregation": null,
//                               "aggregationList": null,
//                               "counterKey": {
//                                 "counterId": "EPC_C_2",
//                                 "counterGroupTrans": null
//                               },
//                               "displayName": "Maximum CPU Load",
//                               "counterUnit": "%",
//                               "counterDescription": "Maximum CPU Load",
//                               "counterType": "Counter",
//                               "enabled": null,
//                               "sourceName": null,
//                               "formula": null
//                             }
//                           ],
//                           "properties": [
//                             {
//                               "propertyKey": {
//                                 "propertyId": "EPC_P_1",
//                                 "counterGroups": {
//                                   "counterGroupId": "EPC_CG_33",
//                                   "counterGroupDetails": null,
//                                   "deviceType": null,
//                                   "neLevel": null,
//                                   "cgSource": null,
//                                   "counterList": null,
//                                   "properties": null,
//                                   "kpis": null,
//                                   "displayName": null
//                                 }
//                               },
//                               "propertyName": "CGP_NAME",
//                               "propertyValues": "{\"values\":[\"MME001BKT\",\"MME001CRO\",\"MME001LDS\",\"MME001LTN\",\"MME001MFD\",\"MME001WVN\",\"MME002CRO\",\"MME002LDS\",\"MME002LTN\",\"MME002WVN\",\"PSHCRO1C\",\"PSHKT03C\",\"PSHLD02C\",\"PSHLT01C\",\"PSHMF01C\",\"PSHWV02C\",\"PSHWV03C\"]}",
//                               "selectedValues": [
//                                 "MME001BKT",
//                                 "MME001CRO",
//                                 "MME001LDS",
//                                 "MME001LTN"
//                               ]
//                             },
//                             {
//                               "propertyKey": {
//                                 "propertyId": "EPC_P_2",
//                                 "counterGroups": {
//                                   "counterGroupId": "EPC_CG_33",
//                                   "counterGroupDetails": null,
//                                   "deviceType": null,
//                                   "neLevel": null,
//                                   "cgSource": null,
//                                   "counterList": null,
//                                   "properties": null,
//                                   "kpis": null,
//                                   "displayName": null
//                                 }
//                               },
//                               "propertyName": "BOARD_LOCATION",
//                               "propertyValues": "null",
//                               "selectedValues": []
//                             },
//                             {
//                               "propertyKey": {
//                                 "propertyId": "EPC_P_5",
//                                 "counterGroups": {
//                                   "counterGroupId": "EPC_CG_33",
//                                   "counterGroupDetails": null,
//                                   "deviceType": null,
//                                   "neLevel": null,
//                                   "cgSource": null,
//                                   "counterList": null,
//                                   "properties": null,
//                                   "kpis": null,
//                                   "displayName": null
//                                 }
//                               },
//                               "propertyName": "NETWORK_NAME",
//                               "propertyValues": "null",
//                               "selectedValues": []
//                             }
//                           ],
//                           "kpis": null,
//                           "displayName": "HWI_CGP_CPU_LOAD"
//                         },
//                         {
//                           "counterGroupId": "EPC_CG_35",
//                           "counterGroupDetails": null,
//                           "deviceType": null,
//                           "neLevel": null,
//                           "cgSource": null,
//                           "counterList": [
//                             {
//                               "aggregation": null,
//                               "aggregationList": null,
//                               "counterKey": {
//                                 "counterId": "EPC_C_1",
//                                 "counterGroupTrans": null
//                               },
//                               "displayName": "Size of Packets Received",
//                               "counterUnit": "kilobytes",
//                               "counterDescription": "Size of Packets Received Through a Port",
//                               "counterType": "Counter",
//                               "enabled": null,
//                               "sourceName": null,
//                               "formula": null
//                             },
//                             {
//                               "aggregation": null,
//                               "aggregationList": null,
//                               "counterKey": {
//                                 "counterId": "EPC_C_9",
//                                 "counterGroupTrans": null
//                               },
//                               "displayName": "Size of Packets Sent",
//                               "counterUnit": "kilobytes",
//                               "counterDescription": "Size of Packets Sent Through a Port",
//                               "counterType": "Counter",
//                               "enabled": null,
//                               "sourceName": null,
//                               "formula": null
//                             }
//                           ],
//                           "properties": [
//                             {
//                               "propertyKey": {
//                                 "propertyId": "EPC_P_1",
//                                 "counterGroups": {
//                                   "counterGroupId": "EPC_CG_35",
//                                   "counterGroupDetails": null,
//                                   "deviceType": null,
//                                   "neLevel": null,
//                                   "cgSource": null,
//                                   "counterList": null,
//                                   "properties": null,
//                                   "kpis": null,
//                                   "displayName": null
//                                 }
//                               },
//                               "propertyName": "CGP_NAME",
//                               "propertyValues": "{\"values\":[\"MME001BKT\",\"MME001CRO\",\"MME001LDS\",\"MME001LTN\",\"MME001MFD\",\"MME001WVN\",\"MME002CRO\",\"MME002LDS\",\"MME002LTN\",\"MME002WVN\",\"PSHCRO1C\",\"PSHKT03C\",\"PSHLD02C\",\"PSHLT01C\",\"PSHMF01C\",\"PSHWV02C\",\"PSHWV03C\"]}",
//                               "selectedValues": [
//                                 "MME001BKT",
//                                 "MME001CRO",
//                                 "MME001LDS"
//                               ]
//                             },
//                             {
//                               "propertyKey": {
//                                 "propertyId": "EPC_P_2",
//                                 "counterGroups": {
//                                   "counterGroupId": "EPC_CG_35",
//                                   "counterGroupDetails": null,
//                                   "deviceType": null,
//                                   "neLevel": null,
//                                   "cgSource": null,
//                                   "counterList": null,
//                                   "properties": null,
//                                   "kpis": null,
//                                   "displayName": null
//                                 }
//                               },
//                               "propertyName": "PORT_NAME",
//                               "propertyValues": "null",
//                               "selectedValues": []
//                             },
//                             {
//                               "propertyKey": {
//                                 "propertyId": "EPC_P_5",
//                                 "counterGroups": {
//                                   "counterGroupId": "EPC_CG_35",
//                                   "counterGroupDetails": null,
//                                   "deviceType": null,
//                                   "neLevel": null,
//                                   "cgSource": null,
//                                   "counterList": null,
//                                   "properties": null,
//                                   "kpis": null,
//                                   "displayName": null
//                                 }
//                               },
//                               "propertyName": "NETWORK_NAME",
//                               "propertyValues": "null",
//                               "selectedValues": []
//                             }
//                           ],
//                           "kpis": null,
//                           "displayName": "HWI_CGP_ETH_TRAFF"
//                         }
//                       ]
//                     },
//                     "metrics": null,
//                     "kpiMetrics": null,
//                     "response": null,
//                     "userName": null,
//                     "reportName": "Network issue analysis for Location1",
//                     "graphData": null,
//                     "header": null
//                   }
//                 ],
//                 "dashboardTemplates": null
//               }
//             ],
//             "profiles": [
//               {
//                 "profileId": 1,
//                 "profileName": "Admin User",
//                 "communityString": "adminuser",
//                 "dataAccess": "ALL",
//                 "accesses": [
//                   {
//                     "accessId": 1,
//                     "accessName": "Dashboard creation",
//                     "displayName": "Dashboard"
//                   },
//                   {
//                     "accessId": 2,
//                     "accessName": "View all Reports",
//                     "displayName": "My Reports"
//                   },
//                   {
//                     "accessId": 3,
//                     "accessName": "Dynamic KPI creation",
//                     "displayName": "Manage KPI"
//                   },
//                   {
//                     "accessId": 5,
//                     "accessName": "Assigning dashboard to specific community",
//                     "displayName": "Admin Settings"
//                   }
//                 ],
//                 "dashboards": null,
//                 "applicableProfiles": null
//               }
//             ],
//             "message": null
//           }
//                this.isLoading = false;
//              if(data && null != data)
//              {
//                for(let d of data.subDashboards ){
//                  $.extend(d,{search:""});
//                }
//                this.subDashboards = data.subDashboards;

//                let subDashboardsData=data.subDashboards;
//                this.localStorageService.set('subDashboardsData',subDashboardsData);
//                this.showCustomScrollbar();
               
//              }
//          // });
//  }
//     });

//   }
ngOnInit() {
    this.isLoading = true;
    this.route.url.subscribe(() => {
 if(this.router.url.match('subdashboards') ){

  this.dashboardId = this.route.snapshot.params["dashboardId"];
  let menu :any = this.localStorageService.get('menu');
  let currentDashboard:any;
  menu.filter((link)=>{
    if(link.id=='1'){
      let dash = link.subMenu.filter((dash)=>{
        if(dash.id == this.dashboardId){
          currentDashboard = dash;
        }
      })
    }
   })
   let name = currentDashboard.displayName ? currentDashboard.displayName : currentDashboard.name;
   this.breadcrumbs={mainlink:"Dashboard",sublinks:[{displayName:name,id:this.dashboardId,routing :currentDashboard.routing}]}
   this.localStorageService.set('breadcrumbs',this.breadcrumbs);
          let request :any = {
            "dashboardId" : this.dashboardId
          };
          this.subdashboardsService.getSubDashboardsForDashboard(request).subscribe(data=>{
               this.isLoading = false;
             if(data && null != data)
             {
               for(let d of data.subDashboards ){
                 $.extend(d,{search:""});
               }
               this.subDashboards = data.subDashboards;

               let subDashboardsData=data.subDashboards;
               this.localStorageService.set('subDashboardsData',subDashboardsData);
               this.showCustomScrollbar();
               
             }
          });
 }
    });

  }
  ngAfterViewInit(){    
   
 
  }


showCustomScrollbar(){
  setTimeout(()=>{
        $("ul.overflow-div[id^=subDashboard]").mCustomScrollbar({
       theme: "dark",
       autoHideScrollbar:true,
       advanced: {
         autoScrollOnFocus: false,
         updateOnContentResize: true
       }
     }); 
  },0) 
}
  getSpecificSubDashboard(subDashboard)
  {
this.router.navigateByUrl('/dashboard/'+subDashboard.dashboardId+'/subdashboard/'+subDashboard.subDashboardId);
  }

  getSpecificReport(report,subDashboard)
  {  
    let subDashboards:any= this.localStorageService.get('subDashboardsData');
    subDashboards.forEach(subdash => {
      if(subdash.subDashboardId == subDashboard.subDashboardId)
      {
             this.localStorageService.set('SubDashboardReportConfigList' ,subdash.reports);
      }
    });
    
   console.log(this.localStorageService.get('SubDashboardReportConfigList'));
  let menu :any = this.localStorageService.get('menu');
  let currentDashboard:any;
  menu.filter((link)=>{
    if(link.id=='1'){
      let dash = link.subMenu.filter((dash)=>{
        if(dash.id == this.dashboardId){
          currentDashboard = dash;
        }
      })
    }
   })
     this.breadcrumbs={mainlink:"Dashboard",sublinks:[{displayName:currentDashboard.displayName,id:this.dashboardId,routing :currentDashboard.routing},{displayName:subDashboard.name,id:this.dashboardId,routing :'/dashboard/'+subDashboard["dashboardId"]+'/subdashboard/'+subDashboard["subDashboardId"]}]}
   this.localStorageService.set('breadcrumbs',this.breadcrumbs);
     this.router.navigate(['/dashboard/' + report.userTemplateId + '/dashboardRep' + '/'+ this.route.snapshot.params["dashboardId"]+'/'+subDashboard.subDashboardId]);
  }
}
