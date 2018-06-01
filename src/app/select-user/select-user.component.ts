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
  selector: 'app-select-user',
  templateUrl: './select-user.component.html',
  styleUrls: ['./select-user.component.css']
})
export class SelectUserComponent implements OnInit {

profiles:any=[];
selectedProfile ="";
loading= false;
  constructor(private router: Router,private menuService:MenuService,private loginService :LoginService,private localStorageService:LocalStorageService,private _spinner : DataLoadSpinner) { }

  ngOnInit() {
    let request = { "userName" : this.localStorageService.get("userName")}

      this.profiles = this.localStorageService.get("profile");
 
  }

  // signIn() {
  //   let request = {};
  //    if(this.loading){
  //     return false;
  //   }
  //   this.loading = true;
  //   this._spinner.setSpinnerButton($("#signIn").children('i'));
  //    request["userName"] = this.localStorageService.get("userName");
  //      request["profiles"] =[];
  //      let profile = this.profiles.filter((prof)=>{
  //       return prof.profileId == this.selectedProfile
  //      })
  //   request["profiles"].push({"profileId" : this.selectedProfile })
  //   //  this.loginService.afterLogin(request).subscribe((data)=>{
  //     let data={
  //       "reports": [
  //         {
  //           "userTemplateId": "Chh5Oz",
  //           "reportConfiguration": null,
  //           "metrics": null,
  //           "kpiMetrics": null,
  //           "response": null,
  //           "userName": "ajay029",
  //           "reportName": "HSSNTHLR_RAW_1",
  //           "graphData": null,
  //           "header": null
  //         },
  //         {
  //           "userTemplateId": "NE7Gu2",
  //           "reportConfiguration": null,
  //           "metrics": null,
  //           "kpiMetrics": null,
  //           "response": null,
  //           "userName": "ajay029",
  //           "reportName": "PCRF_Voice_RAW_1",
  //           "graphData": null,
  //           "header": null
  //         },
  //         {
  //           "userTemplateId": "nGney1",
  //           "reportConfiguration": null,
  //           "metrics": null,
  //           "kpiMetrics": null,
  //           "response": null,
  //           "userName": "ajay029",
  //           "reportName": "SGSN_Hourly_1",
  //           "graphData": null,
  //           "header": null
  //         },
  //         {
  //           "userTemplateId": "8ItIlg",
  //           "reportConfiguration": null,
  //           "metrics": null,
  //           "kpiMetrics": null,
  //           "response": null,
  //           "userName": "ajay029",
  //           "reportName": "CG_Hourly_1",
  //           "graphData": null,
  //           "header": null
  //         },
  //         {
  //           "userTemplateId": "JzAK7F",
  //           "reportConfiguration": null,
  //           "metrics": null,
  //           "kpiMetrics": null,
  //           "response": null,
  //           "userName": "ajay029",
  //           "reportName": "MME_RAW_1",
  //           "graphData": null,
  //           "header": null
  //         },
  //         {
  //           "userTemplateId": "9VZjLt",
  //           "reportConfiguration": null,
  //           "metrics": null,
  //           "kpiMetrics": null,
  //           "response": null,
  //           "userName": "ajay029",
  //           "reportName": "MME Report-info test",
  //           "graphData": null,
  //           "header": null
  //         },
  //         {
  //           "userTemplateId": "i0FVeu",
  //           "reportConfiguration": null,
  //           "metrics": null,
  //           "kpiMetrics": null,
  //           "response": null,
  //           "userName": "ajay029",
  //           "reportName": "SMLC ID-114",
  //           "graphData": null,
  //           "header": null
  //         }
  //       ],
  //       "dashboards": null,
  //       "profileResponse": {
  //         "profileId": 1,
  //         "profileName": "Admin User",
  //         "communityString": "adminuser",
  //         "dataAccess": "ALL",
  //         "accesses": [
  //           {
  //             "accessId": 1,
  //             "accessName": "Dashboard creation",
  //             "displayName": "Dashboard"
  //           },
  //           {
  //             "accessId": 2,
  //             "accessName": "View all Reports",
  //             "displayName": "My Reports"
  //           },
  //           {
  //             "accessId": 3,
  //             "accessName": "Dynamic KPI creation",
  //             "displayName": "Manage KPI"
  //           },
  //           {
  //             "accessId": 5,
  //             "accessName": "Assigning dashboard to specific community",
  //             "displayName": "Admin Settings"
  //           }
  //         ],
  //         "applicableProfiles": [
  //           {
  //             "profileId": 3,
  //             "profileName": "Power User",
  //             "communityString": "emobileuseremobile",
  //             "dataAccess": "Emobile",
  //             "accesses": [
  //               {
  //                 "accessId": 1,
  //                 "accessName": "Dashboard creation",
  //                 "displayName": "Dashboard"
  //               },
  //               {
  //                 "accessId": 2,
  //                 "accessName": "View all Reports",
  //                 "displayName": "My Reports"
  //               },
  //               {
  //                 "accessId": 3,
  //                 "accessName": "Dynamic KPI creation",
  //                 "displayName": "Manage KPI"
  //               },
  //               {
  //                 "accessId": 5,
  //                 "accessName": "Assigning dashboard to specific community",
  //                 "displayName": "Admin Settings"
  //               }
  //             ],
  //             "dashboards": [
  //               {
  //                 "dashboardId": "C2zBxL",
  //                 "name": "MME Dashboard",
  //                 "type": "common",
  //                 "view": "both",
  //                 "subDashboards": [
  //                   {
  //                     "subDashboardId": "hNsO2b",
  //                     "name": "CPU View",
  //                     "dashboardTemplates": [
  //                       {
  //                         "dashboardtemplateId": "D07jiR2",
  //                         "reportName": "Pawan",
  //                         "reportDetail": "eyJjb25maWd1cmF0aW9uIjp7ImF0dHJpYnV0ZXMiOm51bGwsInByb3BlcnRpZXMiOm51bGwsIm1ldHJpY3MiOlt7ImlkIjoiRVBDX0NfMSIsImFnZ3JlZ2F0aW9uVHlwZSI6IkFWRyJ9LHsiaWQiOiJFUENfQ18yIiwiYWdncmVnYXRpb25UeXBlIjoiTUFYIn1dLCJrcGlNZXRyaWNzIjpudWxsLCJuYW1lIjoiUGF3YW4iLCJ0eXBlIjoiVGFibGUiLCJzdWJUeXBlIjoiVGFibGUiLCJkZXZpY2VUeXBlIjoiQ0dQIiwiZW50aXR5IjpudWxsLCJkaW1lbnNpb25zIjpbeyJuYW1lIjoiQ0dQX05BTUUiLCJkaXNwbGF5TmFtZSI6IkNHUF9OQU1FIiwiaWQiOiJFUENfUF8xIn0seyJuYW1lIjoiTkVUV09SS19OQU1FIiwiZGlzcGxheU5hbWUiOiJORVRXT1JLX05BTUUiLCJpZCI6IkVQQ19QXzUifV0sImNvbnRleHQiOm51bGwsImdyb3VwQnlEaW1lbnNpb25zIjpudWxsfSwiZmlsdGVyIjp7ImNvbmRpdGlvbiI6IkFORCIsInJ1bGVzIjpbeyJjb25kaXRpb24iOiJPUiIsInJ1bGVzIjpbeyJmaWVsZCI6IkNPVU5URVJfR1JPVVBfSUQiLCJ2YWx1ZSI6IkVQQ19DR18zMyIsInR5cGUiOiJzZWxlY3RvciJ9LHsiZmllbGQiOiJDT1VOVEVSX0dST1VQX0lEIiwidmFsdWUiOiJFUENfQ0dfMzYiLCJ0eXBlIjoic2VsZWN0b3IifV19LHsiY29uZGl0aW9uIjoiT1IiLCJydWxlcyI6W3siaWQiOiJFUENfQ18xIiwidmFsdWUiOiItMjE0NzQ4MzY0OCIsInR5cGUiOiJib3VuZCJ9LHsiaWQiOiJFUENfQ18yIiwidmFsdWUiOiItMjE0NzQ4MzY0OCIsInR5cGUiOiJib3VuZCJ9XX1dfSwic2FtcGxpbmdQZXJpb2QiOm51bGwsImludGVydmFscyI6Ikxhc3QgMSBkYXkiLCJwYWdpbmF0aW9uIjp7InBhZ2VudW1iZXIiOjEsInBhZ2VzaXplIjoxMDAwMCwicGFnaW5nU3BlYyI6bnVsbH0sImdyYW51bGFyaXR5IjoiQUxMIiwicmVwb3J0RGF0YVR5cGUiOiJyYXciLCJmaWx0ZXJNYXAiOnsiRVBDX1BfMSI6WyJNTUUwMDFCS1QiLCJNTUUwMDFDUk8iXX0sImNvdW50ZXJHcm91cHNXaXRoQ291bnRlckFuZFByb3BlcnRpZXMiOlt7ImNvdW50ZXJHcm91cElkIjoiRVBDX0NHXzMzIiwiY291bnRlckdyb3VwRGV0YWlscyI6bnVsbCwiZGV2aWNlVHlwZSI6bnVsbCwibmVMZXZlbCI6bnVsbCwiY2dTb3VyY2UiOm51bGwsImNvdW50ZXJMaXN0IjpbeyJhZ2dyZWdhdGlvbiI6bnVsbCwiYWdncmVnYXRpb25MaXN0IjpudWxsLCJjb3VudGVyS2V5Ijp7ImNvdW50ZXJJZCI6IkVQQ19DXzEiLCJjb3VudGVyR3JvdXBUcmFucyI6bnVsbH0sImRpc3BsYXlOYW1lIjoiTWVhbiBDUFUgTG9hZCIsImNvdW50ZXJVbml0IjoiJSIsImNvdW50ZXJEZXNjcmlwdGlvbiI6Ik1lYW4gQ1BVIExvYWQiLCJjb3VudGVyVHlwZSI6IkNvdW50ZXIiLCJlbmFibGVkIjpudWxsLCJzb3VyY2VOYW1lIjpudWxsLCJmb3JtdWxhIjpudWxsfSx7ImFnZ3JlZ2F0aW9uIjpudWxsLCJhZ2dyZWdhdGlvbkxpc3QiOm51bGwsImNvdW50ZXJLZXkiOnsiY291bnRlcklkIjoiRVBDX0NfMiIsImNvdW50ZXJHcm91cFRyYW5zIjpudWxsfSwiZGlzcGxheU5hbWUiOiJNYXhpbXVtIENQVSBMb2FkIiwiY291bnRlclVuaXQiOiIlIiwiY291bnRlckRlc2NyaXB0aW9uIjoiTWF4aW11bSBDUFUgTG9hZCIsImNvdW50ZXJUeXBlIjoiQ291bnRlciIsImVuYWJsZWQiOm51bGwsInNvdXJjZU5hbWUiOm51bGwsImZvcm11bGEiOm51bGx9XSwicHJvcGVydGllcyI6W3sicHJvcGVydHlLZXkiOnsicHJvcGVydHlJZCI6IkVQQ19QXzEiLCJjb3VudGVyR3JvdXBzIjp7ImNvdW50ZXJHcm91cElkIjoiRVBDX0NHXzMzIiwiY291bnRlckdyb3VwRGV0YWlscyI6bnVsbCwiZGV2aWNlVHlwZSI6bnVsbCwibmVMZXZlbCI6bnVsbCwiY2dTb3VyY2UiOm51bGwsImNvdW50ZXJMaXN0IjpudWxsLCJwcm9wZXJ0aWVzIjpudWxsLCJrcGlzIjpudWxsLCJkaXNwbGF5TmFtZSI6bnVsbH19LCJwcm9wZXJ0eU5hbWUiOiJDR1BfTkFNRSIsInByb3BlcnR5VmFsdWVzIjoie1widmFsdWVzXCI6W1wiTU1FMDAxQktUXCIsXCJNTUUwMDFDUk9cIixcIk1NRTAwMUxEU1wiLFwiTU1FMDAxTFROXCIsXCJNTUUwMDFNRkRcIixcIk1NRTAwMVdWTlwiLFwiTU1FMDAyQ1JPXCIsXCJNTUUwMDJMRFNcIixcIk1NRTAwMkxUTlwiLFwiTU1FMDAyV1ZOXCIsXCJQU0hDUk8xQ1wiLFwiUFNIS1QwM0NcIixcIlBTSExEMDJDXCIsXCJQU0hMVDAxQ1wiLFwiUFNITUYwMUNcIixcIlBTSFdWMDJDXCIsXCJQU0hXVjAzQ1wiXX0iLCJzZWxlY3RlZFZhbHVlcyI6WyJNTUUwMDFCS1QiLCJNTUUwMDFDUk8iXX0seyJwcm9wZXJ0eUtleSI6eyJwcm9wZXJ0eUlkIjoiRVBDX1BfNSIsImNvdW50ZXJHcm91cHMiOnsiY291bnRlckdyb3VwSWQiOiJFUENfQ0dfMzMiLCJjb3VudGVyR3JvdXBEZXRhaWxzIjpudWxsLCJkZXZpY2VUeXBlIjpudWxsLCJuZUxldmVsIjpudWxsLCJjZ1NvdXJjZSI6bnVsbCwiY291bnRlckxpc3QiOm51bGwsInByb3BlcnRpZXMiOm51bGwsImtwaXMiOm51bGwsImRpc3BsYXlOYW1lIjpudWxsfX0sInByb3BlcnR5TmFtZSI6Ik5FVFdPUktfTkFNRSIsInByb3BlcnR5VmFsdWVzIjoibnVsbCIsInNlbGVjdGVkVmFsdWVzIjpbXX1dLCJrcGlzIjpudWxsLCJkaXNwbGF5TmFtZSI6IkhXSV9DR1BfQ1BVX0xPQUQifSx7ImNvdW50ZXJHcm91cElkIjoiRVBDX0NHXzM2IiwiY291bnRlckdyb3VwRGV0YWlscyI6bnVsbCwiZGV2aWNlVHlwZSI6bnVsbCwibmVMZXZlbCI6bnVsbCwiY2dTb3VyY2UiOm51bGwsImNvdW50ZXJMaXN0IjpbeyJhZ2dyZWdhdGlvbiI6bnVsbCwiYWdncmVnYXRpb25MaXN0IjpudWxsLCJjb3VudGVyS2V5Ijp7ImNvdW50ZXJJZCI6IkVQQ19DXzIiLCJjb3VudGVyR3JvdXBUcmFucyI6bnVsbH0sImRpc3BsYXlOYW1lIjoiVXNlZCBNZW1vcnkgU2l6ZSIsImNvdW50ZXJVbml0IjoiTUIiLCJjb3VudGVyRGVzY3JpcHRpb24iOiJVc2VkIE1lbW9yeSBTaXplIiwiY291bnRlclR5cGUiOiJDb3VudGVyIiwiZW5hYmxlZCI6bnVsbCwic291cmNlTmFtZSI6bnVsbCwiZm9ybXVsYSI6bnVsbH1dLCJwcm9wZXJ0aWVzIjpbeyJwcm9wZXJ0eUtleSI6eyJwcm9wZXJ0eUlkIjoiRVBDX1BfMSIsImNvdW50ZXJHcm91cHMiOnsiY291bnRlckdyb3VwSWQiOiJFUENfQ0dfMzYiLCJjb3VudGVyR3JvdXBEZXRhaWxzIjpudWxsLCJkZXZpY2VUeXBlIjpudWxsLCJuZUxldmVsIjpudWxsLCJjZ1NvdXJjZSI6bnVsbCwiY291bnRlckxpc3QiOm51bGwsInByb3BlcnRpZXMiOm51bGwsImtwaXMiOm51bGwsImRpc3BsYXlOYW1lIjpudWxsfX0sInByb3BlcnR5TmFtZSI6IkNHUF9OQU1FIiwicHJvcGVydHlWYWx1ZXMiOiJ7XCJ2YWx1ZXNcIjpbXCJNTUUwMDFCS1RcIixcIk1NRTAwMUNST1wiLFwiTU1FMDAxTERTXCIsXCJNTUUwMDFMVE5cIixcIk1NRTAwMU1GRFwiLFwiTU1FMDAxV1ZOXCIsXCJNTUUwMDJDUk9cIixcIk1NRTAwMkxEU1wiLFwiTU1FMDAyTFROXCIsXCJNTUUwMDJXVk5cIixcIlBTSENSTzFDXCIsXCJQU0hLVDAzQ1wiLFwiUFNITEQwMkNcIixcIlBTSExUMDFDXCIsXCJQU0hNRjAxQ1wiLFwiUFNIV1YwMkNcIixcIlBTSFdWMDNDXCJdfSIsInNlbGVjdGVkVmFsdWVzIjpbIk1NRTAwMUJLVCIsIk1NRTAwMUNSTyJdfSx7InByb3BlcnR5S2V5Ijp7InByb3BlcnR5SWQiOiJFUENfUF81IiwiY291bnRlckdyb3VwcyI6eyJjb3VudGVyR3JvdXBJZCI6IkVQQ19DR18zNiIsImNvdW50ZXJHcm91cERldGFpbHMiOm51bGwsImRldmljZVR5cGUiOm51bGwsIm5lTGV2ZWwiOm51bGwsImNnU291cmNlIjpudWxsLCJjb3VudGVyTGlzdCI6bnVsbCwicHJvcGVydGllcyI6bnVsbCwia3BpcyI6bnVsbCwiZGlzcGxheU5hbWUiOm51bGx9fSwicHJvcGVydHlOYW1lIjoiTkVUV09SS19OQU1FIiwicHJvcGVydHlWYWx1ZXMiOiJudWxsIiwic2VsZWN0ZWRWYWx1ZXMiOltdfV0sImtwaXMiOm51bGwsImRpc3BsYXlOYW1lIjoiSFdJX0NHUF9NRU0ifV19"
  //                       },
  //                       {
  //                         "dashboardtemplateId": "H2HwaWv",
  //                         "reportName": "Aval",
  //                         "reportDetail": "eyJjb25maWd1cmF0aW9uIjp7ImF0dHJpYnV0ZXMiOm51bGwsInByb3BlcnRpZXMiOm51bGwsIm1ldHJpY3MiOlt7ImlkIjoiRVBDX0NfMSIsImFnZ3JlZ2F0aW9uVHlwZSI6IkFWRyJ9XSwia3BpTWV0cmljcyI6bnVsbCwibmFtZSI6IkF2YWwiLCJ0eXBlIjoiR3JhcGgiLCJzdWJUeXBlIjoiQmFyIiwiZGV2aWNlVHlwZSI6IkNHUCIsImVudGl0eSI6bnVsbCwiZGltZW5zaW9ucyI6W3sibmFtZSI6IkNHUF9OQU1FIiwiZGlzcGxheU5hbWUiOiJDR1BfTkFNRSIsImlkIjoiRVBDX1BfMSJ9LHsibmFtZSI6Ik5FVFdPUktfTkFNRSIsImRpc3BsYXlOYW1lIjoiTkVUV09SS19OQU1FIiwiaWQiOiJFUENfUF81In0seyJuYW1lIjoiQk9BUkRfTE9DQVRJT04iLCJkaXNwbGF5TmFtZSI6IkJPQVJEX0xPQ0FUSU9OIiwiaWQiOiJFUENfUF8yIn1dLCJjb250ZXh0IjpudWxsLCJncm91cEJ5RGltZW5zaW9ucyI6bnVsbH0sImZpbHRlciI6eyJjb25kaXRpb24iOiJBTkQiLCJydWxlcyI6W3siY29uZGl0aW9uIjoiT1IiLCJydWxlcyI6W3siZmllbGQiOiJDT1VOVEVSX0dST1VQX0lEIiwidmFsdWUiOiJFUENfQ0dfMzMiLCJ0eXBlIjoic2VsZWN0b3IifV19LHsiY29uZGl0aW9uIjoiT1IiLCJydWxlcyI6W3siaWQiOiJFUENfQ18xIiwidmFsdWUiOiItMjE0NzQ4MzY0OCIsInR5cGUiOiJib3VuZCJ9XX1dfSwic2FtcGxpbmdQZXJpb2QiOm51bGwsImludGVydmFscyI6Ikxhc3QgMSB3ZWVrIiwicGFnaW5hdGlvbiI6eyJwYWdlbnVtYmVyIjoxLCJwYWdlc2l6ZSI6MTAwMDAsInBhZ2luZ1NwZWMiOm51bGx9LCJncmFudWxhcml0eSI6IkFMTCIsInJlcG9ydERhdGFUeXBlIjoicmF3IiwiZmlsdGVyTWFwIjp7IkVQQ19QXzEiOlsiTU1FMDAxQktUIl19LCJjb3VudGVyR3JvdXBzV2l0aENvdW50ZXJBbmRQcm9wZXJ0aWVzIjpbeyJjb3VudGVyR3JvdXBJZCI6IkVQQ19DR18zMyIsImNvdW50ZXJHcm91cERldGFpbHMiOm51bGwsImRldmljZVR5cGUiOm51bGwsIm5lTGV2ZWwiOm51bGwsImNnU291cmNlIjpudWxsLCJjb3VudGVyTGlzdCI6W3siYWdncmVnYXRpb24iOm51bGwsImFnZ3JlZ2F0aW9uTGlzdCI6bnVsbCwiY291bnRlcktleSI6eyJjb3VudGVySWQiOiJFUENfQ18xIiwiY291bnRlckdyb3VwVHJhbnMiOm51bGx9LCJkaXNwbGF5TmFtZSI6Ik1lYW4gQ1BVIExvYWQiLCJjb3VudGVyVW5pdCI6IiUiLCJjb3VudGVyRGVzY3JpcHRpb24iOiJNZWFuIENQVSBMb2FkIiwiY291bnRlclR5cGUiOiJDb3VudGVyIiwiZW5hYmxlZCI6bnVsbCwic291cmNlTmFtZSI6bnVsbCwiZm9ybXVsYSI6bnVsbH1dLCJwcm9wZXJ0aWVzIjpbeyJwcm9wZXJ0eUtleSI6eyJwcm9wZXJ0eUlkIjoiRVBDX1BfMSIsImNvdW50ZXJHcm91cHMiOnsiY291bnRlckdyb3VwSWQiOiJFUENfQ0dfMzMiLCJjb3VudGVyR3JvdXBEZXRhaWxzIjpudWxsLCJkZXZpY2VUeXBlIjpudWxsLCJuZUxldmVsIjpudWxsLCJjZ1NvdXJjZSI6bnVsbCwiY291bnRlckxpc3QiOm51bGwsInByb3BlcnRpZXMiOm51bGwsImtwaXMiOm51bGwsImRpc3BsYXlOYW1lIjpudWxsfX0sInByb3BlcnR5TmFtZSI6IkNHUF9OQU1FIiwicHJvcGVydHlWYWx1ZXMiOiJ7XCJ2YWx1ZXNcIjpbXCJNTUUwMDFCS1RcIixcIk1NRTAwMUNST1wiLFwiTU1FMDAxTERTXCIsXCJNTUUwMDFMVE5cIixcIk1NRTAwMU1GRFwiLFwiTU1FMDAxV1ZOXCIsXCJNTUUwMDJDUk9cIixcIk1NRTAwMkxEU1wiLFwiTU1FMDAyTFROXCIsXCJNTUUwMDJXVk5cIixcIlBTSENSTzFDXCIsXCJQU0hLVDAzQ1wiLFwiUFNITEQwMkNcIixcIlBTSExUMDFDXCIsXCJQU0hNRjAxQ1wiLFwiUFNIV1YwMkNcIixcIlBTSFdWMDNDXCJdfSIsInNlbGVjdGVkVmFsdWVzIjpbIk1NRTAwMUJLVCJdfSx7InByb3BlcnR5S2V5Ijp7InByb3BlcnR5SWQiOiJFUENfUF8yIiwiY291bnRlckdyb3VwcyI6eyJjb3VudGVyR3JvdXBJZCI6IkVQQ19DR18zMyIsImNvdW50ZXJHcm91cERldGFpbHMiOm51bGwsImRldmljZVR5cGUiOm51bGwsIm5lTGV2ZWwiOm51bGwsImNnU291cmNlIjpudWxsLCJjb3VudGVyTGlzdCI6bnVsbCwicHJvcGVydGllcyI6bnVsbCwia3BpcyI6bnVsbCwiZGlzcGxheU5hbWUiOm51bGx9fSwicHJvcGVydHlOYW1lIjoiQk9BUkRfTE9DQVRJT04iLCJwcm9wZXJ0eVZhbHVlcyI6Im51bGwiLCJzZWxlY3RlZFZhbHVlcyI6W119LHsicHJvcGVydHlLZXkiOnsicHJvcGVydHlJZCI6IkVQQ19QXzUiLCJjb3VudGVyR3JvdXBzIjp7ImNvdW50ZXJHcm91cElkIjoiRVBDX0NHXzMzIiwiY291bnRlckdyb3VwRGV0YWlscyI6bnVsbCwiZGV2aWNlVHlwZSI6bnVsbCwibmVMZXZlbCI6bnVsbCwiY2dTb3VyY2UiOm51bGwsImNvdW50ZXJMaXN0IjpudWxsLCJwcm9wZXJ0aWVzIjpudWxsLCJrcGlzIjpudWxsLCJkaXNwbGF5TmFtZSI6bnVsbH19LCJwcm9wZXJ0eU5hbWUiOiJORVRXT1JLX05BTUUiLCJwcm9wZXJ0eVZhbHVlcyI6Im51bGwiLCJzZWxlY3RlZFZhbHVlcyI6W119XSwia3BpcyI6bnVsbCwiZGlzcGxheU5hbWUiOiJIV0lfQ0dQX0NQVV9MT0FEIn1dfQ=="
  //                       },
  //                       {
  //                         "dashboardtemplateId": "Q2AdOzc",
  //                         "reportName": "Network issue analysis for Location1",
  //                         "reportDetail": "eyJjb25maWd1cmF0aW9uIjp7ImF0dHJpYnV0ZXMiOm51bGwsInByb3BlcnRpZXMiOm51bGwsIm1ldHJpY3MiOlt7ImlkIjoiRVBDX0NfMSIsImFnZ3JlZ2F0aW9uVHlwZSI6IkFWRyJ9LHsiaWQiOiJFUENfQ18yIiwiYWdncmVnYXRpb25UeXBlIjoiTUFYIn0seyJpZCI6IkVQQ19DXzkiLCJhZ2dyZWdhdGlvblR5cGUiOiJTVU0ifV0sImtwaU1ldHJpY3MiOm51bGwsIm5hbWUiOiJOZXR3b3JrIGlzc3VlIGFuYWx5c2lzIGZvciBMb2NhdGlvbjEiLCJ0eXBlIjoiVGFibGUiLCJzdWJUeXBlIjoiVGFibGUiLCJkZXZpY2VUeXBlIjoiQ0dQIiwiZW50aXR5IjpudWxsLCJkaW1lbnNpb25zIjpbeyJuYW1lIjoiTkVUV09SS19OQU1FIiwiZGlzcGxheU5hbWUiOiJORVRXT1JLX05BTUUiLCJpZCI6IkVQQ19QXzUifSx7Im5hbWUiOiJCT0FSRF9MT0NBVElPTiIsImRpc3BsYXlOYW1lIjoiQk9BUkRfTE9DQVRJT04iLCJpZCI6IkVQQ19QXzIifSx7Im5hbWUiOiJDR1BfTkFNRSIsImRpc3BsYXlOYW1lIjoiQ0dQX05BTUUiLCJpZCI6IkVQQ19QXzEifV0sImNvbnRleHQiOm51bGwsImdyb3VwQnlEaW1lbnNpb25zIjpudWxsfSwiZmlsdGVyIjp7ImNvbmRpdGlvbiI6IkFORCIsInJ1bGVzIjpbeyJjb25kaXRpb24iOiJPUiIsInJ1bGVzIjpbeyJmaWVsZCI6IkNPVU5URVJfR1JPVVBfSUQiLCJ2YWx1ZSI6IkVQQ19DR18zMyIsInR5cGUiOiJzZWxlY3RvciJ9LHsiZmllbGQiOiJDT1VOVEVSX0dST1VQX0lEIiwidmFsdWUiOiJFUENfQ0dfMzUiLCJ0eXBlIjoic2VsZWN0b3IifV19LHsiY29uZGl0aW9uIjoiT1IiLCJydWxlcyI6W3siaWQiOiJFUENfQ18xIiwidmFsdWUiOiItMjE0NzQ4MzY0OCIsInR5cGUiOiJib3VuZCJ9LHsiaWQiOiJFUENfQ18yIiwidmFsdWUiOiItMjE0NzQ4MzY0OCIsInR5cGUiOiJib3VuZCJ9LHsiaWQiOiJFUENfQ185IiwidmFsdWUiOiItMjE0NzQ4MzY0OCIsInR5cGUiOiJib3VuZCJ9XX1dfSwic2FtcGxpbmdQZXJpb2QiOm51bGwsImludGVydmFscyI6IjIwMTgtMDQtMDJUMDQ6MjU6MDAuMDAwWi8yMDE4LTA0LTA0VDEzOjQ0OjAwLjAwMFoiLCJwYWdpbmF0aW9uIjp7InBhZ2VudW1iZXIiOjEsInBhZ2VzaXplIjoxMDAwMCwicGFnaW5nU3BlYyI6bnVsbH0sImdyYW51bGFyaXR5IjoiQUxMIiwicmVwb3J0RGF0YVR5cGUiOiJyYXciLCJmaWx0ZXJNYXAiOnsiRVBDX1BfMSI6WyJNTUUwMDFCS1QiLCJNTUUwMDFDUk8iLCJNTUUwMDFMRFMiLCJNTUUwMDFMVE4iXX0sImNvdW50ZXJHcm91cHNXaXRoQ291bnRlckFuZFByb3BlcnRpZXMiOlt7ImNvdW50ZXJHcm91cElkIjoiRVBDX0NHXzMzIiwiY291bnRlckdyb3VwRGV0YWlscyI6bnVsbCwiZGV2aWNlVHlwZSI6bnVsbCwibmVMZXZlbCI6bnVsbCwiY2dTb3VyY2UiOm51bGwsImNvdW50ZXJMaXN0IjpbeyJhZ2dyZWdhdGlvbiI6bnVsbCwiYWdncmVnYXRpb25MaXN0IjpudWxsLCJjb3VudGVyS2V5Ijp7ImNvdW50ZXJJZCI6IkVQQ19DXzEiLCJjb3VudGVyR3JvdXBUcmFucyI6bnVsbH0sImRpc3BsYXlOYW1lIjoiTWVhbiBDUFUgTG9hZCIsImNvdW50ZXJVbml0IjoiJSIsImNvdW50ZXJEZXNjcmlwdGlvbiI6Ik1lYW4gQ1BVIExvYWQiLCJjb3VudGVyVHlwZSI6IkNvdW50ZXIiLCJlbmFibGVkIjpudWxsLCJzb3VyY2VOYW1lIjpudWxsLCJmb3JtdWxhIjpudWxsfSx7ImFnZ3JlZ2F0aW9uIjpudWxsLCJhZ2dyZWdhdGlvbkxpc3QiOm51bGwsImNvdW50ZXJLZXkiOnsiY291bnRlcklkIjoiRVBDX0NfMiIsImNvdW50ZXJHcm91cFRyYW5zIjpudWxsfSwiZGlzcGxheU5hbWUiOiJNYXhpbXVtIENQVSBMb2FkIiwiY291bnRlclVuaXQiOiIlIiwiY291bnRlckRlc2NyaXB0aW9uIjoiTWF4aW11bSBDUFUgTG9hZCIsImNvdW50ZXJUeXBlIjoiQ291bnRlciIsImVuYWJsZWQiOm51bGwsInNvdXJjZU5hbWUiOm51bGwsImZvcm11bGEiOm51bGx9XSwicHJvcGVydGllcyI6W3sicHJvcGVydHlLZXkiOnsicHJvcGVydHlJZCI6IkVQQ19QXzEiLCJjb3VudGVyR3JvdXBzIjp7ImNvdW50ZXJHcm91cElkIjoiRVBDX0NHXzMzIiwiY291bnRlckdyb3VwRGV0YWlscyI6bnVsbCwiZGV2aWNlVHlwZSI6bnVsbCwibmVMZXZlbCI6bnVsbCwiY2dTb3VyY2UiOm51bGwsImNvdW50ZXJMaXN0IjpudWxsLCJwcm9wZXJ0aWVzIjpudWxsLCJrcGlzIjpudWxsLCJkaXNwbGF5TmFtZSI6bnVsbH19LCJwcm9wZXJ0eU5hbWUiOiJDR1BfTkFNRSIsInByb3BlcnR5VmFsdWVzIjoie1widmFsdWVzXCI6W1wiTU1FMDAxQktUXCIsXCJNTUUwMDFDUk9cIixcIk1NRTAwMUxEU1wiLFwiTU1FMDAxTFROXCIsXCJNTUUwMDFNRkRcIixcIk1NRTAwMVdWTlwiLFwiTU1FMDAyQ1JPXCIsXCJNTUUwMDJMRFNcIixcIk1NRTAwMkxUTlwiLFwiTU1FMDAyV1ZOXCIsXCJQU0hDUk8xQ1wiLFwiUFNIS1QwM0NcIixcIlBTSExEMDJDXCIsXCJQU0hMVDAxQ1wiLFwiUFNITUYwMUNcIixcIlBTSFdWMDJDXCIsXCJQU0hXVjAzQ1wiXX0iLCJzZWxlY3RlZFZhbHVlcyI6WyJNTUUwMDFCS1QiLCJNTUUwMDFDUk8iLCJNTUUwMDFMRFMiLCJNTUUwMDFMVE4iXX0seyJwcm9wZXJ0eUtleSI6eyJwcm9wZXJ0eUlkIjoiRVBDX1BfMiIsImNvdW50ZXJHcm91cHMiOnsiY291bnRlckdyb3VwSWQiOiJFUENfQ0dfMzMiLCJjb3VudGVyR3JvdXBEZXRhaWxzIjpudWxsLCJkZXZpY2VUeXBlIjpudWxsLCJuZUxldmVsIjpudWxsLCJjZ1NvdXJjZSI6bnVsbCwiY291bnRlckxpc3QiOm51bGwsInByb3BlcnRpZXMiOm51bGwsImtwaXMiOm51bGwsImRpc3BsYXlOYW1lIjpudWxsfX0sInByb3BlcnR5TmFtZSI6IkJPQVJEX0xPQ0FUSU9OIiwicHJvcGVydHlWYWx1ZXMiOiJudWxsIiwic2VsZWN0ZWRWYWx1ZXMiOltdfSx7InByb3BlcnR5S2V5Ijp7InByb3BlcnR5SWQiOiJFUENfUF81IiwiY291bnRlckdyb3VwcyI6eyJjb3VudGVyR3JvdXBJZCI6IkVQQ19DR18zMyIsImNvdW50ZXJHcm91cERldGFpbHMiOm51bGwsImRldmljZVR5cGUiOm51bGwsIm5lTGV2ZWwiOm51bGwsImNnU291cmNlIjpudWxsLCJjb3VudGVyTGlzdCI6bnVsbCwicHJvcGVydGllcyI6bnVsbCwia3BpcyI6bnVsbCwiZGlzcGxheU5hbWUiOm51bGx9fSwicHJvcGVydHlOYW1lIjoiTkVUV09SS19OQU1FIiwicHJvcGVydHlWYWx1ZXMiOiJudWxsIiwic2VsZWN0ZWRWYWx1ZXMiOltdfV0sImtwaXMiOm51bGwsImRpc3BsYXlOYW1lIjoiSFdJX0NHUF9DUFVfTE9BRCJ9LHsiY291bnRlckdyb3VwSWQiOiJFUENfQ0dfMzUiLCJjb3VudGVyR3JvdXBEZXRhaWxzIjpudWxsLCJkZXZpY2VUeXBlIjpudWxsLCJuZUxldmVsIjpudWxsLCJjZ1NvdXJjZSI6bnVsbCwiY291bnRlckxpc3QiOlt7ImFnZ3JlZ2F0aW9uIjpudWxsLCJhZ2dyZWdhdGlvbkxpc3QiOm51bGwsImNvdW50ZXJLZXkiOnsiY291bnRlcklkIjoiRVBDX0NfMSIsImNvdW50ZXJHcm91cFRyYW5zIjpudWxsfSwiZGlzcGxheU5hbWUiOiJTaXplIG9mIFBhY2tldHMgUmVjZWl2ZWQiLCJjb3VudGVyVW5pdCI6ImtpbG9ieXRlcyIsImNvdW50ZXJEZXNjcmlwdGlvbiI6IlNpemUgb2YgUGFja2V0cyBSZWNlaXZlZCBUaHJvdWdoIGEgUG9ydCIsImNvdW50ZXJUeXBlIjoiQ291bnRlciIsImVuYWJsZWQiOm51bGwsInNvdXJjZU5hbWUiOm51bGwsImZvcm11bGEiOm51bGx9LHsiYWdncmVnYXRpb24iOm51bGwsImFnZ3JlZ2F0aW9uTGlzdCI6bnVsbCwiY291bnRlcktleSI6eyJjb3VudGVySWQiOiJFUENfQ185IiwiY291bnRlckdyb3VwVHJhbnMiOm51bGx9LCJkaXNwbGF5TmFtZSI6IlNpemUgb2YgUGFja2V0cyBTZW50IiwiY291bnRlclVuaXQiOiJraWxvYnl0ZXMiLCJjb3VudGVyRGVzY3JpcHRpb24iOiJTaXplIG9mIFBhY2tldHMgU2VudCBUaHJvdWdoIGEgUG9ydCIsImNvdW50ZXJUeXBlIjoiQ291bnRlciIsImVuYWJsZWQiOm51bGwsInNvdXJjZU5hbWUiOm51bGwsImZvcm11bGEiOm51bGx9XSwicHJvcGVydGllcyI6W3sicHJvcGVydHlLZXkiOnsicHJvcGVydHlJZCI6IkVQQ19QXzEiLCJjb3VudGVyR3JvdXBzIjp7ImNvdW50ZXJHcm91cElkIjoiRVBDX0NHXzM1IiwiY291bnRlckdyb3VwRGV0YWlscyI6bnVsbCwiZGV2aWNlVHlwZSI6bnVsbCwibmVMZXZlbCI6bnVsbCwiY2dTb3VyY2UiOm51bGwsImNvdW50ZXJMaXN0IjpudWxsLCJwcm9wZXJ0aWVzIjpudWxsLCJrcGlzIjpudWxsLCJkaXNwbGF5TmFtZSI6bnVsbH19LCJwcm9wZXJ0eU5hbWUiOiJDR1BfTkFNRSIsInByb3BlcnR5VmFsdWVzIjoie1widmFsdWVzXCI6W1wiTU1FMDAxQktUXCIsXCJNTUUwMDFDUk9cIixcIk1NRTAwMUxEU1wiLFwiTU1FMDAxTFROXCIsXCJNTUUwMDFNRkRcIixcIk1NRTAwMVdWTlwiLFwiTU1FMDAyQ1JPXCIsXCJNTUUwMDJMRFNcIixcIk1NRTAwMkxUTlwiLFwiTU1FMDAyV1ZOXCIsXCJQU0hDUk8xQ1wiLFwiUFNIS1QwM0NcIixcIlBTSExEMDJDXCIsXCJQU0hMVDAxQ1wiLFwiUFNITUYwMUNcIixcIlBTSFdWMDJDXCIsXCJQU0hXVjAzQ1wiXX0iLCJzZWxlY3RlZFZhbHVlcyI6WyJNTUUwMDFCS1QiLCJNTUUwMDFDUk8iLCJNTUUwMDFMRFMiXX0seyJwcm9wZXJ0eUtleSI6eyJwcm9wZXJ0eUlkIjoiRVBDX1BfMiIsImNvdW50ZXJHcm91cHMiOnsiY291bnRlckdyb3VwSWQiOiJFUENfQ0dfMzUiLCJjb3VudGVyR3JvdXBEZXRhaWxzIjpudWxsLCJkZXZpY2VUeXBlIjpudWxsLCJuZUxldmVsIjpudWxsLCJjZ1NvdXJjZSI6bnVsbCwiY291bnRlckxpc3QiOm51bGwsInByb3BlcnRpZXMiOm51bGwsImtwaXMiOm51bGwsImRpc3BsYXlOYW1lIjpudWxsfX0sInByb3BlcnR5TmFtZSI6IlBPUlRfTkFNRSIsInByb3BlcnR5VmFsdWVzIjoibnVsbCIsInNlbGVjdGVkVmFsdWVzIjpbXX0seyJwcm9wZXJ0eUtleSI6eyJwcm9wZXJ0eUlkIjoiRVBDX1BfNSIsImNvdW50ZXJHcm91cHMiOnsiY291bnRlckdyb3VwSWQiOiJFUENfQ0dfMzUiLCJjb3VudGVyR3JvdXBEZXRhaWxzIjpudWxsLCJkZXZpY2VUeXBlIjpudWxsLCJuZUxldmVsIjpudWxsLCJjZ1NvdXJjZSI6bnVsbCwiY291bnRlckxpc3QiOm51bGwsInByb3BlcnRpZXMiOm51bGwsImtwaXMiOm51bGwsImRpc3BsYXlOYW1lIjpudWxsfX0sInByb3BlcnR5TmFtZSI6Ik5FVFdPUktfTkFNRSIsInByb3BlcnR5VmFsdWVzIjoibnVsbCIsInNlbGVjdGVkVmFsdWVzIjpbXX1dLCJrcGlzIjpudWxsLCJkaXNwbGF5TmFtZSI6IkhXSV9DR1BfRVRIX1RSQUZGIn1dfQ=="
  //                       }
  //                     ]
  //                   },
  //                   {
  //                     "subDashboardId": "PyAcpB",
  //                     "name": "Traffic",
  //                     "dashboardTemplates": [
  //                       {
  //                         "dashboardtemplateId": "qbCbw4L",
  //                         "reportName": "Aval",
  //                         "reportDetail": "eyJjb25maWd1cmF0aW9uIjp7ImF0dHJpYnV0ZXMiOm51bGwsInByb3BlcnRpZXMiOm51bGwsIm1ldHJpY3MiOlt7ImlkIjoiRVBDX0NfMSIsImFnZ3JlZ2F0aW9uVHlwZSI6IkFWRyJ9XSwia3BpTWV0cmljcyI6bnVsbCwibmFtZSI6IkF2YWwiLCJ0eXBlIjoiR3JhcGgiLCJzdWJUeXBlIjoiQmFyIiwiZGV2aWNlVHlwZSI6IkNHUCIsImVudGl0eSI6bnVsbCwiZGltZW5zaW9ucyI6W3sibmFtZSI6IkNHUF9OQU1FIiwiZGlzcGxheU5hbWUiOiJDR1BfTkFNRSIsImlkIjoiRVBDX1BfMSJ9LHsibmFtZSI6Ik5FVFdPUktfTkFNRSIsImRpc3BsYXlOYW1lIjoiTkVUV09SS19OQU1FIiwiaWQiOiJFUENfUF81In0seyJuYW1lIjoiQk9BUkRfTE9DQVRJT04iLCJkaXNwbGF5TmFtZSI6IkJPQVJEX0xPQ0FUSU9OIiwiaWQiOiJFUENfUF8yIn1dLCJjb250ZXh0IjpudWxsLCJncm91cEJ5RGltZW5zaW9ucyI6bnVsbH0sImZpbHRlciI6eyJjb25kaXRpb24iOiJBTkQiLCJydWxlcyI6W3siY29uZGl0aW9uIjoiT1IiLCJydWxlcyI6W3siZmllbGQiOiJDT1VOVEVSX0dST1VQX0lEIiwidmFsdWUiOiJFUENfQ0dfMzMiLCJ0eXBlIjoic2VsZWN0b3IifV19LHsiY29uZGl0aW9uIjoiT1IiLCJydWxlcyI6W3siaWQiOiJFUENfQ18xIiwidmFsdWUiOiItMjE0NzQ4MzY0OCIsInR5cGUiOiJib3VuZCJ9XX1dfSwic2FtcGxpbmdQZXJpb2QiOm51bGwsImludGVydmFscyI6Ikxhc3QgMSB3ZWVrIiwicGFnaW5hdGlvbiI6eyJwYWdlbnVtYmVyIjoxLCJwYWdlc2l6ZSI6MTAwMDAsInBhZ2luZ1NwZWMiOm51bGx9LCJncmFudWxhcml0eSI6IkFMTCIsInJlcG9ydERhdGFUeXBlIjoicmF3IiwiZmlsdGVyTWFwIjp7IkVQQ19QXzEiOlsiTU1FMDAxQktUIl19LCJjb3VudGVyR3JvdXBzV2l0aENvdW50ZXJBbmRQcm9wZXJ0aWVzIjpbeyJjb3VudGVyR3JvdXBJZCI6IkVQQ19DR18zMyIsImNvdW50ZXJHcm91cERldGFpbHMiOm51bGwsImRldmljZVR5cGUiOm51bGwsIm5lTGV2ZWwiOm51bGwsImNnU291cmNlIjpudWxsLCJjb3VudGVyTGlzdCI6W3siYWdncmVnYXRpb24iOm51bGwsImFnZ3JlZ2F0aW9uTGlzdCI6bnVsbCwiY291bnRlcktleSI6eyJjb3VudGVySWQiOiJFUENfQ18xIiwiY291bnRlckdyb3VwVHJhbnMiOm51bGx9LCJkaXNwbGF5TmFtZSI6Ik1lYW4gQ1BVIExvYWQiLCJjb3VudGVyVW5pdCI6IiUiLCJjb3VudGVyRGVzY3JpcHRpb24iOiJNZWFuIENQVSBMb2FkIiwiY291bnRlclR5cGUiOiJDb3VudGVyIiwiZW5hYmxlZCI6bnVsbCwic291cmNlTmFtZSI6bnVsbCwiZm9ybXVsYSI6bnVsbH1dLCJwcm9wZXJ0aWVzIjpbeyJwcm9wZXJ0eUtleSI6eyJwcm9wZXJ0eUlkIjoiRVBDX1BfMSIsImNvdW50ZXJHcm91cHMiOnsiY291bnRlckdyb3VwSWQiOiJFUENfQ0dfMzMiLCJjb3VudGVyR3JvdXBEZXRhaWxzIjpudWxsLCJkZXZpY2VUeXBlIjpudWxsLCJuZUxldmVsIjpudWxsLCJjZ1NvdXJjZSI6bnVsbCwiY291bnRlckxpc3QiOm51bGwsInByb3BlcnRpZXMiOm51bGwsImtwaXMiOm51bGwsImRpc3BsYXlOYW1lIjpudWxsfX0sInByb3BlcnR5TmFtZSI6IkNHUF9OQU1FIiwicHJvcGVydHlWYWx1ZXMiOiJ7XCJ2YWx1ZXNcIjpbXCJNTUUwMDFCS1RcIixcIk1NRTAwMUNST1wiLFwiTU1FMDAxTERTXCIsXCJNTUUwMDFMVE5cIixcIk1NRTAwMU1GRFwiLFwiTU1FMDAxV1ZOXCIsXCJNTUUwMDJDUk9cIixcIk1NRTAwMkxEU1wiLFwiTU1FMDAyTFROXCIsXCJNTUUwMDJXVk5cIixcIlBTSENSTzFDXCIsXCJQU0hLVDAzQ1wiLFwiUFNITEQwMkNcIixcIlBTSExUMDFDXCIsXCJQU0hNRjAxQ1wiLFwiUFNIV1YwMkNcIixcIlBTSFdWMDNDXCJdfSIsInNlbGVjdGVkVmFsdWVzIjpbIk1NRTAwMUJLVCJdfSx7InByb3BlcnR5S2V5Ijp7InByb3BlcnR5SWQiOiJFUENfUF8yIiwiY291bnRlckdyb3VwcyI6eyJjb3VudGVyR3JvdXBJZCI6IkVQQ19DR18zMyIsImNvdW50ZXJHcm91cERldGFpbHMiOm51bGwsImRldmljZVR5cGUiOm51bGwsIm5lTGV2ZWwiOm51bGwsImNnU291cmNlIjpudWxsLCJjb3VudGVyTGlzdCI6bnVsbCwicHJvcGVydGllcyI6bnVsbCwia3BpcyI6bnVsbCwiZGlzcGxheU5hbWUiOm51bGx9fSwicHJvcGVydHlOYW1lIjoiQk9BUkRfTE9DQVRJT04iLCJwcm9wZXJ0eVZhbHVlcyI6Im51bGwiLCJzZWxlY3RlZFZhbHVlcyI6W119LHsicHJvcGVydHlLZXkiOnsicHJvcGVydHlJZCI6IkVQQ19QXzUiLCJjb3VudGVyR3JvdXBzIjp7ImNvdW50ZXJHcm91cElkIjoiRVBDX0NHXzMzIiwiY291bnRlckdyb3VwRGV0YWlscyI6bnVsbCwiZGV2aWNlVHlwZSI6bnVsbCwibmVMZXZlbCI6bnVsbCwiY2dTb3VyY2UiOm51bGwsImNvdW50ZXJMaXN0IjpudWxsLCJwcm9wZXJ0aWVzIjpudWxsLCJrcGlzIjpudWxsLCJkaXNwbGF5TmFtZSI6bnVsbH19LCJwcm9wZXJ0eU5hbWUiOiJORVRXT1JLX05BTUUiLCJwcm9wZXJ0eVZhbHVlcyI6Im51bGwiLCJzZWxlY3RlZFZhbHVlcyI6W119XSwia3BpcyI6bnVsbCwiZGlzcGxheU5hbWUiOiJIV0lfQ0dQX0NQVV9MT0FEIn1dfQ=="
  //                       },
  //                       {
  //                         "dashboardtemplateId": "tbSzGIC",
  //                         "reportName": "Pawan",
  //                         "reportDetail": "eyJjb25maWd1cmF0aW9uIjp7ImF0dHJpYnV0ZXMiOm51bGwsInByb3BlcnRpZXMiOm51bGwsIm1ldHJpY3MiOlt7ImlkIjoiRVBDX0NfMSIsImFnZ3JlZ2F0aW9uVHlwZSI6IkFWRyJ9LHsiaWQiOiJFUENfQ18yIiwiYWdncmVnYXRpb25UeXBlIjoiTUFYIn1dLCJrcGlNZXRyaWNzIjpudWxsLCJuYW1lIjoiUGF3YW4iLCJ0eXBlIjoiVGFibGUiLCJzdWJUeXBlIjoiVGFibGUiLCJkZXZpY2VUeXBlIjoiQ0dQIiwiZW50aXR5IjpudWxsLCJkaW1lbnNpb25zIjpbeyJuYW1lIjoiQ0dQX05BTUUiLCJkaXNwbGF5TmFtZSI6IkNHUF9OQU1FIiwiaWQiOiJFUENfUF8xIn0seyJuYW1lIjoiTkVUV09SS19OQU1FIiwiZGlzcGxheU5hbWUiOiJORVRXT1JLX05BTUUiLCJpZCI6IkVQQ19QXzUifV0sImNvbnRleHQiOm51bGwsImdyb3VwQnlEaW1lbnNpb25zIjpudWxsfSwiZmlsdGVyIjp7ImNvbmRpdGlvbiI6IkFORCIsInJ1bGVzIjpbeyJjb25kaXRpb24iOiJPUiIsInJ1bGVzIjpbeyJmaWVsZCI6IkNPVU5URVJfR1JPVVBfSUQiLCJ2YWx1ZSI6IkVQQ19DR18zMyIsInR5cGUiOiJzZWxlY3RvciJ9LHsiZmllbGQiOiJDT1VOVEVSX0dST1VQX0lEIiwidmFsdWUiOiJFUENfQ0dfMzYiLCJ0eXBlIjoic2VsZWN0b3IifV19LHsiY29uZGl0aW9uIjoiT1IiLCJydWxlcyI6W3siaWQiOiJFUENfQ18xIiwidmFsdWUiOiItMjE0NzQ4MzY0OCIsInR5cGUiOiJib3VuZCJ9LHsiaWQiOiJFUENfQ18yIiwidmFsdWUiOiItMjE0NzQ4MzY0OCIsInR5cGUiOiJib3VuZCJ9XX1dfSwic2FtcGxpbmdQZXJpb2QiOm51bGwsImludGVydmFscyI6Ikxhc3QgMSBkYXkiLCJwYWdpbmF0aW9uIjp7InBhZ2VudW1iZXIiOjEsInBhZ2VzaXplIjoxMDAwMCwicGFnaW5nU3BlYyI6bnVsbH0sImdyYW51bGFyaXR5IjoiQUxMIiwicmVwb3J0RGF0YVR5cGUiOiJyYXciLCJmaWx0ZXJNYXAiOnsiRVBDX1BfMSI6WyJNTUUwMDFCS1QiLCJNTUUwMDFDUk8iXX0sImNvdW50ZXJHcm91cHNXaXRoQ291bnRlckFuZFByb3BlcnRpZXMiOlt7ImNvdW50ZXJHcm91cElkIjoiRVBDX0NHXzMzIiwiY291bnRlckdyb3VwRGV0YWlscyI6bnVsbCwiZGV2aWNlVHlwZSI6bnVsbCwibmVMZXZlbCI6bnVsbCwiY2dTb3VyY2UiOm51bGwsImNvdW50ZXJMaXN0IjpbeyJhZ2dyZWdhdGlvbiI6bnVsbCwiYWdncmVnYXRpb25MaXN0IjpudWxsLCJjb3VudGVyS2V5Ijp7ImNvdW50ZXJJZCI6IkVQQ19DXzEiLCJjb3VudGVyR3JvdXBUcmFucyI6bnVsbH0sImRpc3BsYXlOYW1lIjoiTWVhbiBDUFUgTG9hZCIsImNvdW50ZXJVbml0IjoiJSIsImNvdW50ZXJEZXNjcmlwdGlvbiI6Ik1lYW4gQ1BVIExvYWQiLCJjb3VudGVyVHlwZSI6IkNvdW50ZXIiLCJlbmFibGVkIjpudWxsLCJzb3VyY2VOYW1lIjpudWxsLCJmb3JtdWxhIjpudWxsfSx7ImFnZ3JlZ2F0aW9uIjpudWxsLCJhZ2dyZWdhdGlvbkxpc3QiOm51bGwsImNvdW50ZXJLZXkiOnsiY291bnRlcklkIjoiRVBDX0NfMiIsImNvdW50ZXJHcm91cFRyYW5zIjpudWxsfSwiZGlzcGxheU5hbWUiOiJNYXhpbXVtIENQVSBMb2FkIiwiY291bnRlclVuaXQiOiIlIiwiY291bnRlckRlc2NyaXB0aW9uIjoiTWF4aW11bSBDUFUgTG9hZCIsImNvdW50ZXJUeXBlIjoiQ291bnRlciIsImVuYWJsZWQiOm51bGwsInNvdXJjZU5hbWUiOm51bGwsImZvcm11bGEiOm51bGx9XSwicHJvcGVydGllcyI6W3sicHJvcGVydHlLZXkiOnsicHJvcGVydHlJZCI6IkVQQ19QXzEiLCJjb3VudGVyR3JvdXBzIjp7ImNvdW50ZXJHcm91cElkIjoiRVBDX0NHXzMzIiwiY291bnRlckdyb3VwRGV0YWlscyI6bnVsbCwiZGV2aWNlVHlwZSI6bnVsbCwibmVMZXZlbCI6bnVsbCwiY2dTb3VyY2UiOm51bGwsImNvdW50ZXJMaXN0IjpudWxsLCJwcm9wZXJ0aWVzIjpudWxsLCJrcGlzIjpudWxsLCJkaXNwbGF5TmFtZSI6bnVsbH19LCJwcm9wZXJ0eU5hbWUiOiJDR1BfTkFNRSIsInByb3BlcnR5VmFsdWVzIjoie1widmFsdWVzXCI6W1wiTU1FMDAxQktUXCIsXCJNTUUwMDFDUk9cIixcIk1NRTAwMUxEU1wiLFwiTU1FMDAxTFROXCIsXCJNTUUwMDFNRkRcIixcIk1NRTAwMVdWTlwiLFwiTU1FMDAyQ1JPXCIsXCJNTUUwMDJMRFNcIixcIk1NRTAwMkxUTlwiLFwiTU1FMDAyV1ZOXCIsXCJQU0hDUk8xQ1wiLFwiUFNIS1QwM0NcIixcIlBTSExEMDJDXCIsXCJQU0hMVDAxQ1wiLFwiUFNITUYwMUNcIixcIlBTSFdWMDJDXCIsXCJQU0hXVjAzQ1wiXX0iLCJzZWxlY3RlZFZhbHVlcyI6WyJNTUUwMDFCS1QiLCJNTUUwMDFDUk8iXX0seyJwcm9wZXJ0eUtleSI6eyJwcm9wZXJ0eUlkIjoiRVBDX1BfNSIsImNvdW50ZXJHcm91cHMiOnsiY291bnRlckdyb3VwSWQiOiJFUENfQ0dfMzMiLCJjb3VudGVyR3JvdXBEZXRhaWxzIjpudWxsLCJkZXZpY2VUeXBlIjpudWxsLCJuZUxldmVsIjpudWxsLCJjZ1NvdXJjZSI6bnVsbCwiY291bnRlckxpc3QiOm51bGwsInByb3BlcnRpZXMiOm51bGwsImtwaXMiOm51bGwsImRpc3BsYXlOYW1lIjpudWxsfX0sInByb3BlcnR5TmFtZSI6Ik5FVFdPUktfTkFNRSIsInByb3BlcnR5VmFsdWVzIjoibnVsbCIsInNlbGVjdGVkVmFsdWVzIjpbXX1dLCJrcGlzIjpudWxsLCJkaXNwbGF5TmFtZSI6IkhXSV9DR1BfQ1BVX0xPQUQifSx7ImNvdW50ZXJHcm91cElkIjoiRVBDX0NHXzM2IiwiY291bnRlckdyb3VwRGV0YWlscyI6bnVsbCwiZGV2aWNlVHlwZSI6bnVsbCwibmVMZXZlbCI6bnVsbCwiY2dTb3VyY2UiOm51bGwsImNvdW50ZXJMaXN0IjpbeyJhZ2dyZWdhdGlvbiI6bnVsbCwiYWdncmVnYXRpb25MaXN0IjpudWxsLCJjb3VudGVyS2V5Ijp7ImNvdW50ZXJJZCI6IkVQQ19DXzIiLCJjb3VudGVyR3JvdXBUcmFucyI6bnVsbH0sImRpc3BsYXlOYW1lIjoiVXNlZCBNZW1vcnkgU2l6ZSIsImNvdW50ZXJVbml0IjoiTUIiLCJjb3VudGVyRGVzY3JpcHRpb24iOiJVc2VkIE1lbW9yeSBTaXplIiwiY291bnRlclR5cGUiOiJDb3VudGVyIiwiZW5hYmxlZCI6bnVsbCwic291cmNlTmFtZSI6bnVsbCwiZm9ybXVsYSI6bnVsbH1dLCJwcm9wZXJ0aWVzIjpbeyJwcm9wZXJ0eUtleSI6eyJwcm9wZXJ0eUlkIjoiRVBDX1BfMSIsImNvdW50ZXJHcm91cHMiOnsiY291bnRlckdyb3VwSWQiOiJFUENfQ0dfMzYiLCJjb3VudGVyR3JvdXBEZXRhaWxzIjpudWxsLCJkZXZpY2VUeXBlIjpudWxsLCJuZUxldmVsIjpudWxsLCJjZ1NvdXJjZSI6bnVsbCwiY291bnRlckxpc3QiOm51bGwsInByb3BlcnRpZXMiOm51bGwsImtwaXMiOm51bGwsImRpc3BsYXlOYW1lIjpudWxsfX0sInByb3BlcnR5TmFtZSI6IkNHUF9OQU1FIiwicHJvcGVydHlWYWx1ZXMiOiJ7XCJ2YWx1ZXNcIjpbXCJNTUUwMDFCS1RcIixcIk1NRTAwMUNST1wiLFwiTU1FMDAxTERTXCIsXCJNTUUwMDFMVE5cIixcIk1NRTAwMU1GRFwiLFwiTU1FMDAxV1ZOXCIsXCJNTUUwMDJDUk9cIixcIk1NRTAwMkxEU1wiLFwiTU1FMDAyTFROXCIsXCJNTUUwMDJXVk5cIixcIlBTSENSTzFDXCIsXCJQU0hLVDAzQ1wiLFwiUFNITEQwMkNcIixcIlBTSExUMDFDXCIsXCJQU0hNRjAxQ1wiLFwiUFNIV1YwMkNcIixcIlBTSFdWMDNDXCJdfSIsInNlbGVjdGVkVmFsdWVzIjpbIk1NRTAwMUJLVCIsIk1NRTAwMUNSTyJdfSx7InByb3BlcnR5S2V5Ijp7InByb3BlcnR5SWQiOiJFUENfUF81IiwiY291bnRlckdyb3VwcyI6eyJjb3VudGVyR3JvdXBJZCI6IkVQQ19DR18zNiIsImNvdW50ZXJHcm91cERldGFpbHMiOm51bGwsImRldmljZVR5cGUiOm51bGwsIm5lTGV2ZWwiOm51bGwsImNnU291cmNlIjpudWxsLCJjb3VudGVyTGlzdCI6bnVsbCwicHJvcGVydGllcyI6bnVsbCwia3BpcyI6bnVsbCwiZGlzcGxheU5hbWUiOm51bGx9fSwicHJvcGVydHlOYW1lIjoiTkVUV09SS19OQU1FIiwicHJvcGVydHlWYWx1ZXMiOiJudWxsIiwic2VsZWN0ZWRWYWx1ZXMiOltdfV0sImtwaXMiOm51bGwsImRpc3BsYXlOYW1lIjoiSFdJX0NHUF9NRU0ifV19"
  //                       }
  //                     ]
  //                   }
  //                 ]
  //               },
  //               {
  //                 "dashboardId": "Yw0fEA",
  //                 "name": "Test Dash for MME",
  //                 "type": "common",
  //                 "view": "both",
  //                 "subDashboards": [
  //                   {
  //                     "subDashboardId": "7L8KaM",
  //                     "name": "MME R",
  //                     "dashboardTemplates": [
  //                       {
  //                         "dashboardtemplateId": "aCkPPgU",
  //                         "reportName": "MME-lineChart",
  //                         "reportDetail": "eyJjb25maWd1cmF0aW9uIjp7ImF0dHJpYnV0ZXMiOm51bGwsInByb3BlcnRpZXMiOm51bGwsIm1ldHJpY3MiOlt7ImlkIjoiRVBDX0NfMSJ9LHsiaWQiOiJFUENfQ18yIn1dLCJrcGlNZXRyaWNzIjpudWxsLCJuYW1lIjoiTU1FLWxpbmVDaGFydCIsInR5cGUiOiJHcmFwaCIsInN1YlR5cGUiOiJWZXJ0aWNhbCBTdGFja2VkIEJhciIsImRldmljZVR5cGUiOiJNTUUiLCJlbnRpdHkiOm51bGwsImRpbWVuc2lvbnMiOlt7Im5hbWUiOiJNTUVfTkFNRSIsImRpc3BsYXlOYW1lIjoiTU1FX05BTUUiLCJpZCI6IkVQQ19QXzEifSx7Im5hbWUiOiJORVRXT1JLX05BTUUiLCJkaXNwbGF5TmFtZSI6Ik5FVFdPUktfTkFNRSIsImlkIjoiRVBDX1BfNSJ9LHsibmFtZSI6Ik5FVFdPUktfTkFNRSIsImRpc3BsYXlOYW1lIjoiTkVUV09SS19OQU1FIiwiaWQiOiJFUENfUF8zIn1dLCJjb250ZXh0IjpudWxsLCJncm91cEJ5RGltZW5zaW9ucyI6bnVsbH0sImZpbHRlciI6bnVsbCwic2FtcGxpbmdQZXJpb2QiOm51bGwsImludGVydmFscyI6Ikxhc3QgNiBob3VycyIsInBhZ2luYXRpb24iOnsicGFnZW51bWJlciI6MSwicGFnZXNpemUiOjEwMDAwLCJwYWdpbmdTcGVjIjpudWxsfSwiZ3JhbnVsYXJpdHkiOiJBTEwiLCJyZXBvcnREYXRhVHlwZSI6InJhdyIsImZpbHRlck1hcCI6eyJFUENfUF8xIjpbIk1NRTAwMUNSTyJdfSwiY291bnRlckdyb3Vwc1dpdGhDb3VudGVyQW5kUHJvcGVydGllcyI6W3siY291bnRlckdyb3VwSWQiOiJFUENfQ0dfMTEiLCJjb3VudGVyR3JvdXBEZXRhaWxzIjpudWxsLCJkZXZpY2VUeXBlIjpudWxsLCJuZUxldmVsIjpudWxsLCJjZ1NvdXJjZSI6bnVsbCwiY291bnRlckxpc3QiOlt7ImFnZ3JlZ2F0aW9uIjpudWxsLCJhZ2dyZWdhdGlvbkxpc3QiOm51bGwsImNvdW50ZXJLZXkiOnsiY291bnRlcklkIjoiRVBDX0NfMSIsImNvdW50ZXJHcm91cFRyYW5zIjpudWxsfSwiZGlzcGxheU5hbWUiOiJBVVRIIFJlcSIsImNvdW50ZXJVbml0IjoidGltZXMiLCJjb3VudGVyRGVzY3JpcHRpb24iOiJBdXRoZW50aWNhdGlvbiByZXF1ZXN0IFRpbWVzIiwiY291bnRlclR5cGUiOiJDb3VudGVyIiwiZW5hYmxlZCI6bnVsbCwic291cmNlTmFtZSI6bnVsbCwiZm9ybXVsYSI6bnVsbH1dLCJwcm9wZXJ0aWVzIjpbeyJwcm9wZXJ0eUtleSI6eyJwcm9wZXJ0eUlkIjoiRVBDX1BfMSIsImNvdW50ZXJHcm91cHMiOnsiY291bnRlckdyb3VwSWQiOiJFUENfQ0dfMTEiLCJjb3VudGVyR3JvdXBEZXRhaWxzIjpudWxsLCJkZXZpY2VUeXBlIjpudWxsLCJuZUxldmVsIjpudWxsLCJjZ1NvdXJjZSI6bnVsbCwiY291bnRlckxpc3QiOm51bGwsInByb3BlcnRpZXMiOm51bGwsImtwaXMiOm51bGwsImRpc3BsYXlOYW1lIjpudWxsfX0sInByb3BlcnR5TmFtZSI6Ik1NRV9OQU1FIiwicHJvcGVydHlWYWx1ZXMiOiJ7XCJ2YWx1ZXNcIjpbXCJNTUUwMDFDUk9cIixcIk1NRTAwMUxEU1wiLFwiTU1FMDAxTFROXCIsXCJNTUUwMDFNRkRcIixcIk1NRTAwMVdWTlwiLFwiTU1FMDAyQktUXCIsXCJNTUUwMDJDUk9cIixcIk1NRTAwMkxEU1wiLFwiTU1FMDAyTFROXCIsXCJNTUUwMDJNRkRcIixcIk1NRTAwMldWTlwiLFwiTU1FMDAxRU5GXCIsXCJNTUUwMDFQUlNcIixcIk1NRTAwMUJLVFwiXX0iLCJzZWxlY3RlZFZhbHVlcyI6WyJNTUUwMDFDUk8iXX0seyJwcm9wZXJ0eUtleSI6eyJwcm9wZXJ0eUlkIjoiRVBDX1BfMyIsImNvdW50ZXJHcm91cHMiOnsiY291bnRlckdyb3VwSWQiOiJFUENfQ0dfMTEiLCJjb3VudGVyR3JvdXBEZXRhaWxzIjpudWxsLCJkZXZpY2VUeXBlIjpudWxsLCJuZUxldmVsIjpudWxsLCJjZ1NvdXJjZSI6bnVsbCwiY291bnRlckxpc3QiOm51bGwsInByb3BlcnRpZXMiOm51bGwsImtwaXMiOm51bGwsImRpc3BsYXlOYW1lIjpudWxsfX0sInByb3BlcnR5TmFtZSI6Ik5FVFdPUktfTkFNRSIsInByb3BlcnR5VmFsdWVzIjoibnVsbCIsInNlbGVjdGVkVmFsdWVzIjpudWxsfV0sImtwaXMiOm51bGwsImRpc3BsYXlOYW1lIjoiSFdJX01NRV9TMU1PRFNFQyJ9XX0="
  //                       },
  //                       {
  //                         "dashboardtemplateId": "ExeDTHm",
  //                         "reportName": "Test-MME-Sai",
  //                         "reportDetail": "eyJjb25maWd1cmF0aW9uIjp7ImF0dHJpYnV0ZXMiOm51bGwsInByb3BlcnRpZXMiOm51bGwsIm1ldHJpY3MiOlt7ImlkIjoiRVBDX0NfMSIsImFnZ3JlZ2F0aW9uVHlwZSI6Ik1BWCJ9LHsiaWQiOiJFUENfQ18yIiwiYWdncmVnYXRpb25UeXBlIjoiQVZHIn1dLCJrcGlNZXRyaWNzIjpudWxsLCJuYW1lIjoiVGVzdC1NTUUtU2FpIiwidHlwZSI6IlRhYmxlIiwic3ViVHlwZSI6IlRhYmxlIiwiZGV2aWNlVHlwZSI6Ik1NRSIsImVudGl0eSI6bnVsbCwiZGltZW5zaW9ucyI6W3sibmFtZSI6Ik1NRV9OQU1FIiwiZGlzcGxheU5hbWUiOiJNTUVfTkFNRSIsImlkIjoiRVBDX1BfMSJ9LHsibmFtZSI6Ik5FVFdPUktfTkFNRSIsImRpc3BsYXlOYW1lIjoiTkVUV09SS19OQU1FIiwiaWQiOiJFUENfUF81In1dLCJjb250ZXh0IjpudWxsLCJncm91cEJ5RGltZW5zaW9ucyI6bnVsbH0sImZpbHRlciI6eyJjb25kaXRpb24iOiJBTkQiLCJydWxlcyI6W3siY29uZGl0aW9uIjoiT1IiLCJydWxlcyI6W3siZmllbGQiOiJDT1VOVEVSX0dST1VQX0lEIiwidmFsdWUiOiJFUENfQ0dfMSIsInR5cGUiOiJzZWxlY3RvciJ9XX0seyJjb25kaXRpb24iOiJPUiIsInJ1bGVzIjpbeyJpZCI6IkVQQ19DXzEiLCJ2YWx1ZSI6Ii0yMTQ3NDgzNjQ4IiwidHlwZSI6ImJvdW5kIn0seyJpZCI6IkVQQ19DXzIiLCJ2YWx1ZSI6Ii0yMTQ3NDgzNjQ4IiwidHlwZSI6ImJvdW5kIn1dfV19LCJzYW1wbGluZ1BlcmlvZCI6bnVsbCwiaW50ZXJ2YWxzIjoiTGFzdCA2IGhvdXJzIiwicGFnaW5hdGlvbiI6eyJwYWdlbnVtYmVyIjoxLCJwYWdlc2l6ZSI6MTAwMDAsInBhZ2luZ1NwZWMiOm51bGx9LCJncmFudWxhcml0eSI6IkFMTCIsInJlcG9ydERhdGFUeXBlIjoicmF3IiwiZmlsdGVyTWFwIjp7IkVQQ19QXzEiOlsiTU1FMDAxV1ZOIl19LCJjb3VudGVyR3JvdXBzV2l0aENvdW50ZXJBbmRQcm9wZXJ0aWVzIjpbeyJjb3VudGVyR3JvdXBJZCI6IkVQQ19DR18xIiwiY291bnRlckdyb3VwRGV0YWlscyI6bnVsbCwiZGV2aWNlVHlwZSI6bnVsbCwibmVMZXZlbCI6bnVsbCwiY2dTb3VyY2UiOm51bGwsImNvdW50ZXJMaXN0IjpbeyJhZ2dyZWdhdGlvbiI6bnVsbCwiYWdncmVnYXRpb25MaXN0IjpudWxsLCJjb3VudGVyS2V5Ijp7ImNvdW50ZXJJZCI6IkVQQ19DXzEiLCJjb3VudGVyR3JvdXBUcmFucyI6bnVsbH0sImRpc3BsYXlOYW1lIjoiQ29yZSBtYXhpbXVtIENQVSIsImNvdW50ZXJVbml0IjoiJSIsImNvdW50ZXJEZXNjcmlwdGlvbiI6IkNvcmUgbWF4aW11bSBDUFUgb2NjdXBhdGlvbiByYXRpbyIsImNvdW50ZXJUeXBlIjoiQ291bnRlciIsImVuYWJsZWQiOm51bGwsInNvdXJjZU5hbWUiOm51bGwsImZvcm11bGEiOm51bGx9LHsiYWdncmVnYXRpb24iOm51bGwsImFnZ3JlZ2F0aW9uTGlzdCI6bnVsbCwiY291bnRlcktleSI6eyJjb3VudGVySWQiOiJFUENfQ18yIiwiY291bnRlckdyb3VwVHJhbnMiOm51bGx9LCJkaXNwbGF5TmFtZSI6IkNvcmUgQXZnIENQVSBvY2N1cGF0aW9uIHJhdGlvIiwiY291bnRlclVuaXQiOiIlIiwiY291bnRlckRlc2NyaXB0aW9uIjoiQ29yZSBhdmVyYWdlIENQVSBvY2N1cGF0aW9uIHJhdGlvIiwiY291bnRlclR5cGUiOiJDb3VudGVyIiwiZW5hYmxlZCI6bnVsbCwic291cmNlTmFtZSI6bnVsbCwiZm9ybXVsYSI6bnVsbH1dLCJwcm9wZXJ0aWVzIjpbeyJwcm9wZXJ0eUtleSI6eyJwcm9wZXJ0eUlkIjoiRVBDX1BfMSIsImNvdW50ZXJHcm91cHMiOnsiY291bnRlckdyb3VwSWQiOiJFUENfQ0dfMSIsImNvdW50ZXJHcm91cERldGFpbHMiOm51bGwsImRldmljZVR5cGUiOm51bGwsIm5lTGV2ZWwiOm51bGwsImNnU291cmNlIjpudWxsLCJjb3VudGVyTGlzdCI6bnVsbCwicHJvcGVydGllcyI6bnVsbCwia3BpcyI6bnVsbCwiZGlzcGxheU5hbWUiOm51bGx9fSwicHJvcGVydHlOYW1lIjoiTU1FX05BTUUiLCJwcm9wZXJ0eVZhbHVlcyI6IntcInZhbHVlc1wiOltcIk1NRTAwMUNST1wiLFwiTU1FMDAxTERTXCIsXCJNTUUwMDFMVE5cIixcIk1NRTAwMU1GRFwiLFwiTU1FMDAxV1ZOXCIsXCJNTUUwMDJCS1RcIixcIk1NRTAwMkNST1wiLFwiTU1FMDAyTERTXCIsXCJNTUUwMDJMVE5cIixcIk1NRTAwMk1GRFwiLFwiTU1FMDAyV1ZOXCIsXCJNTUUwMDFFTkZcIixcIk1NRTAwMVBSU1wiLFwiTU1FMDAxQktUXCJdfSIsInNlbGVjdGVkVmFsdWVzIjpbIk1NRTAwMVdWTiJdfSx7InByb3BlcnR5S2V5Ijp7InByb3BlcnR5SWQiOiJFUENfUF81IiwiY291bnRlckdyb3VwcyI6eyJjb3VudGVyR3JvdXBJZCI6IkVQQ19DR18xIiwiY291bnRlckdyb3VwRGV0YWlscyI6bnVsbCwiZGV2aWNlVHlwZSI6bnVsbCwibmVMZXZlbCI6bnVsbCwiY2dTb3VyY2UiOm51bGwsImNvdW50ZXJMaXN0IjpudWxsLCJwcm9wZXJ0aWVzIjpudWxsLCJrcGlzIjpudWxsLCJkaXNwbGF5TmFtZSI6bnVsbH19LCJwcm9wZXJ0eU5hbWUiOiJORVRXT1JLX05BTUUiLCJwcm9wZXJ0eVZhbHVlcyI6Im51bGwiLCJzZWxlY3RlZFZhbHVlcyI6W119XSwia3BpcyI6bnVsbCwiZGlzcGxheU5hbWUiOiJIV0lfTU1FX0NPUkVDUFVSRVNDIn1dfQ=="
  //                       }
  //                     ]
  //                   }
  //                 ]
  //               }
  //             ],
  //             "applicableProfiles": []
  //           },
  //           {
  //             "profileId": 2,
  //             "profileName": "Power User",
  //             "communityString": "poweruserall",
  //             "dataAccess": "ALL",
  //             "accesses": [
  //               {
  //                 "accessId": 1,
  //                 "accessName": "Dashboard creation",
  //                 "displayName": "Dashboard"
  //               },
  //               {
  //                 "accessId": 2,
  //                 "accessName": "View all Reports",
  //                 "displayName": "My Reports"
  //               },
  //               {
  //                 "accessId": 3,
  //                 "accessName": "Dynamic KPI creation",
  //                 "displayName": "Manage KPI"
  //               },
  //               {
  //                 "accessId": 5,
  //                 "accessName": "Assigning dashboard to specific community",
  //                 "displayName": "Admin Settings"
  //               }
  //             ],
  //             "dashboards": [
  //               {
  //                 "dashboardId": "C2zBxL",
  //                 "name": "MME Dashboard",
  //                 "type": "common",
  //                 "view": "both",
  //                 "subDashboards": [
  //                   {
  //                     "subDashboardId": "hNsO2b",
  //                     "name": "CPU View",
  //                     "dashboardTemplates": [
  //                       {
  //                         "dashboardtemplateId": "D07jiR2",
  //                         "reportName": "Pawan",
  //                         "reportDetail": "eyJjb25maWd1cmF0aW9uIjp7ImF0dHJpYnV0ZXMiOm51bGwsInByb3BlcnRpZXMiOm51bGwsIm1ldHJpY3MiOlt7ImlkIjoiRVBDX0NfMSIsImFnZ3JlZ2F0aW9uVHlwZSI6IkFWRyJ9LHsiaWQiOiJFUENfQ18yIiwiYWdncmVnYXRpb25UeXBlIjoiTUFYIn1dLCJrcGlNZXRyaWNzIjpudWxsLCJuYW1lIjoiUGF3YW4iLCJ0eXBlIjoiVGFibGUiLCJzdWJUeXBlIjoiVGFibGUiLCJkZXZpY2VUeXBlIjoiQ0dQIiwiZW50aXR5IjpudWxsLCJkaW1lbnNpb25zIjpbeyJuYW1lIjoiQ0dQX05BTUUiLCJkaXNwbGF5TmFtZSI6IkNHUF9OQU1FIiwiaWQiOiJFUENfUF8xIn0seyJuYW1lIjoiTkVUV09SS19OQU1FIiwiZGlzcGxheU5hbWUiOiJORVRXT1JLX05BTUUiLCJpZCI6IkVQQ19QXzUifV0sImNvbnRleHQiOm51bGwsImdyb3VwQnlEaW1lbnNpb25zIjpudWxsfSwiZmlsdGVyIjp7ImNvbmRpdGlvbiI6IkFORCIsInJ1bGVzIjpbeyJjb25kaXRpb24iOiJPUiIsInJ1bGVzIjpbeyJmaWVsZCI6IkNPVU5URVJfR1JPVVBfSUQiLCJ2YWx1ZSI6IkVQQ19DR18zMyIsInR5cGUiOiJzZWxlY3RvciJ9LHsiZmllbGQiOiJDT1VOVEVSX0dST1VQX0lEIiwidmFsdWUiOiJFUENfQ0dfMzYiLCJ0eXBlIjoic2VsZWN0b3IifV19LHsiY29uZGl0aW9uIjoiT1IiLCJydWxlcyI6W3siaWQiOiJFUENfQ18xIiwidmFsdWUiOiItMjE0NzQ4MzY0OCIsInR5cGUiOiJib3VuZCJ9LHsiaWQiOiJFUENfQ18yIiwidmFsdWUiOiItMjE0NzQ4MzY0OCIsInR5cGUiOiJib3VuZCJ9XX1dfSwic2FtcGxpbmdQZXJpb2QiOm51bGwsImludGVydmFscyI6Ikxhc3QgMSBkYXkiLCJwYWdpbmF0aW9uIjp7InBhZ2VudW1iZXIiOjEsInBhZ2VzaXplIjoxMDAwMCwicGFnaW5nU3BlYyI6bnVsbH0sImdyYW51bGFyaXR5IjoiQUxMIiwicmVwb3J0RGF0YVR5cGUiOiJyYXciLCJmaWx0ZXJNYXAiOnsiRVBDX1BfMSI6WyJNTUUwMDFCS1QiLCJNTUUwMDFDUk8iXX0sImNvdW50ZXJHcm91cHNXaXRoQ291bnRlckFuZFByb3BlcnRpZXMiOlt7ImNvdW50ZXJHcm91cElkIjoiRVBDX0NHXzMzIiwiY291bnRlckdyb3VwRGV0YWlscyI6bnVsbCwiZGV2aWNlVHlwZSI6bnVsbCwibmVMZXZlbCI6bnVsbCwiY2dTb3VyY2UiOm51bGwsImNvdW50ZXJMaXN0IjpbeyJhZ2dyZWdhdGlvbiI6bnVsbCwiYWdncmVnYXRpb25MaXN0IjpudWxsLCJjb3VudGVyS2V5Ijp7ImNvdW50ZXJJZCI6IkVQQ19DXzEiLCJjb3VudGVyR3JvdXBUcmFucyI6bnVsbH0sImRpc3BsYXlOYW1lIjoiTWVhbiBDUFUgTG9hZCIsImNvdW50ZXJVbml0IjoiJSIsImNvdW50ZXJEZXNjcmlwdGlvbiI6Ik1lYW4gQ1BVIExvYWQiLCJjb3VudGVyVHlwZSI6IkNvdW50ZXIiLCJlbmFibGVkIjpudWxsLCJzb3VyY2VOYW1lIjpudWxsLCJmb3JtdWxhIjpudWxsfSx7ImFnZ3JlZ2F0aW9uIjpudWxsLCJhZ2dyZWdhdGlvbkxpc3QiOm51bGwsImNvdW50ZXJLZXkiOnsiY291bnRlcklkIjoiRVBDX0NfMiIsImNvdW50ZXJHcm91cFRyYW5zIjpudWxsfSwiZGlzcGxheU5hbWUiOiJNYXhpbXVtIENQVSBMb2FkIiwiY291bnRlclVuaXQiOiIlIiwiY291bnRlckRlc2NyaXB0aW9uIjoiTWF4aW11bSBDUFUgTG9hZCIsImNvdW50ZXJUeXBlIjoiQ291bnRlciIsImVuYWJsZWQiOm51bGwsInNvdXJjZU5hbWUiOm51bGwsImZvcm11bGEiOm51bGx9XSwicHJvcGVydGllcyI6W3sicHJvcGVydHlLZXkiOnsicHJvcGVydHlJZCI6IkVQQ19QXzEiLCJjb3VudGVyR3JvdXBzIjp7ImNvdW50ZXJHcm91cElkIjoiRVBDX0NHXzMzIiwiY291bnRlckdyb3VwRGV0YWlscyI6bnVsbCwiZGV2aWNlVHlwZSI6bnVsbCwibmVMZXZlbCI6bnVsbCwiY2dTb3VyY2UiOm51bGwsImNvdW50ZXJMaXN0IjpudWxsLCJwcm9wZXJ0aWVzIjpudWxsLCJrcGlzIjpudWxsLCJkaXNwbGF5TmFtZSI6bnVsbH19LCJwcm9wZXJ0eU5hbWUiOiJDR1BfTkFNRSIsInByb3BlcnR5VmFsdWVzIjoie1widmFsdWVzXCI6W1wiTU1FMDAxQktUXCIsXCJNTUUwMDFDUk9cIixcIk1NRTAwMUxEU1wiLFwiTU1FMDAxTFROXCIsXCJNTUUwMDFNRkRcIixcIk1NRTAwMVdWTlwiLFwiTU1FMDAyQ1JPXCIsXCJNTUUwMDJMRFNcIixcIk1NRTAwMkxUTlwiLFwiTU1FMDAyV1ZOXCIsXCJQU0hDUk8xQ1wiLFwiUFNIS1QwM0NcIixcIlBTSExEMDJDXCIsXCJQU0hMVDAxQ1wiLFwiUFNITUYwMUNcIixcIlBTSFdWMDJDXCIsXCJQU0hXVjAzQ1wiXX0iLCJzZWxlY3RlZFZhbHVlcyI6WyJNTUUwMDFCS1QiLCJNTUUwMDFDUk8iXX0seyJwcm9wZXJ0eUtleSI6eyJwcm9wZXJ0eUlkIjoiRVBDX1BfNSIsImNvdW50ZXJHcm91cHMiOnsiY291bnRlckdyb3VwSWQiOiJFUENfQ0dfMzMiLCJjb3VudGVyR3JvdXBEZXRhaWxzIjpudWxsLCJkZXZpY2VUeXBlIjpudWxsLCJuZUxldmVsIjpudWxsLCJjZ1NvdXJjZSI6bnVsbCwiY291bnRlckxpc3QiOm51bGwsInByb3BlcnRpZXMiOm51bGwsImtwaXMiOm51bGwsImRpc3BsYXlOYW1lIjpudWxsfX0sInByb3BlcnR5TmFtZSI6Ik5FVFdPUktfTkFNRSIsInByb3BlcnR5VmFsdWVzIjoibnVsbCIsInNlbGVjdGVkVmFsdWVzIjpbXX1dLCJrcGlzIjpudWxsLCJkaXNwbGF5TmFtZSI6IkhXSV9DR1BfQ1BVX0xPQUQifSx7ImNvdW50ZXJHcm91cElkIjoiRVBDX0NHXzM2IiwiY291bnRlckdyb3VwRGV0YWlscyI6bnVsbCwiZGV2aWNlVHlwZSI6bnVsbCwibmVMZXZlbCI6bnVsbCwiY2dTb3VyY2UiOm51bGwsImNvdW50ZXJMaXN0IjpbeyJhZ2dyZWdhdGlvbiI6bnVsbCwiYWdncmVnYXRpb25MaXN0IjpudWxsLCJjb3VudGVyS2V5Ijp7ImNvdW50ZXJJZCI6IkVQQ19DXzIiLCJjb3VudGVyR3JvdXBUcmFucyI6bnVsbH0sImRpc3BsYXlOYW1lIjoiVXNlZCBNZW1vcnkgU2l6ZSIsImNvdW50ZXJVbml0IjoiTUIiLCJjb3VudGVyRGVzY3JpcHRpb24iOiJVc2VkIE1lbW9yeSBTaXplIiwiY291bnRlclR5cGUiOiJDb3VudGVyIiwiZW5hYmxlZCI6bnVsbCwic291cmNlTmFtZSI6bnVsbCwiZm9ybXVsYSI6bnVsbH1dLCJwcm9wZXJ0aWVzIjpbeyJwcm9wZXJ0eUtleSI6eyJwcm9wZXJ0eUlkIjoiRVBDX1BfMSIsImNvdW50ZXJHcm91cHMiOnsiY291bnRlckdyb3VwSWQiOiJFUENfQ0dfMzYiLCJjb3VudGVyR3JvdXBEZXRhaWxzIjpudWxsLCJkZXZpY2VUeXBlIjpudWxsLCJuZUxldmVsIjpudWxsLCJjZ1NvdXJjZSI6bnVsbCwiY291bnRlckxpc3QiOm51bGwsInByb3BlcnRpZXMiOm51bGwsImtwaXMiOm51bGwsImRpc3BsYXlOYW1lIjpudWxsfX0sInByb3BlcnR5TmFtZSI6IkNHUF9OQU1FIiwicHJvcGVydHlWYWx1ZXMiOiJ7XCJ2YWx1ZXNcIjpbXCJNTUUwMDFCS1RcIixcIk1NRTAwMUNST1wiLFwiTU1FMDAxTERTXCIsXCJNTUUwMDFMVE5cIixcIk1NRTAwMU1GRFwiLFwiTU1FMDAxV1ZOXCIsXCJNTUUwMDJDUk9cIixcIk1NRTAwMkxEU1wiLFwiTU1FMDAyTFROXCIsXCJNTUUwMDJXVk5cIixcIlBTSENSTzFDXCIsXCJQU0hLVDAzQ1wiLFwiUFNITEQwMkNcIixcIlBTSExUMDFDXCIsXCJQU0hNRjAxQ1wiLFwiUFNIV1YwMkNcIixcIlBTSFdWMDNDXCJdfSIsInNlbGVjdGVkVmFsdWVzIjpbIk1NRTAwMUJLVCIsIk1NRTAwMUNSTyJdfSx7InByb3BlcnR5S2V5Ijp7InByb3BlcnR5SWQiOiJFUENfUF81IiwiY291bnRlckdyb3VwcyI6eyJjb3VudGVyR3JvdXBJZCI6IkVQQ19DR18zNiIsImNvdW50ZXJHcm91cERldGFpbHMiOm51bGwsImRldmljZVR5cGUiOm51bGwsIm5lTGV2ZWwiOm51bGwsImNnU291cmNlIjpudWxsLCJjb3VudGVyTGlzdCI6bnVsbCwicHJvcGVydGllcyI6bnVsbCwia3BpcyI6bnVsbCwiZGlzcGxheU5hbWUiOm51bGx9fSwicHJvcGVydHlOYW1lIjoiTkVUV09SS19OQU1FIiwicHJvcGVydHlWYWx1ZXMiOiJudWxsIiwic2VsZWN0ZWRWYWx1ZXMiOltdfV0sImtwaXMiOm51bGwsImRpc3BsYXlOYW1lIjoiSFdJX0NHUF9NRU0ifV19"
  //                       },
  //                       {
  //                         "dashboardtemplateId": "H2HwaWv",
  //                         "reportName": "Aval",
  //                         "reportDetail": "eyJjb25maWd1cmF0aW9uIjp7ImF0dHJpYnV0ZXMiOm51bGwsInByb3BlcnRpZXMiOm51bGwsIm1ldHJpY3MiOlt7ImlkIjoiRVBDX0NfMSIsImFnZ3JlZ2F0aW9uVHlwZSI6IkFWRyJ9XSwia3BpTWV0cmljcyI6bnVsbCwibmFtZSI6IkF2YWwiLCJ0eXBlIjoiR3JhcGgiLCJzdWJUeXBlIjoiQmFyIiwiZGV2aWNlVHlwZSI6IkNHUCIsImVudGl0eSI6bnVsbCwiZGltZW5zaW9ucyI6W3sibmFtZSI6IkNHUF9OQU1FIiwiZGlzcGxheU5hbWUiOiJDR1BfTkFNRSIsImlkIjoiRVBDX1BfMSJ9LHsibmFtZSI6Ik5FVFdPUktfTkFNRSIsImRpc3BsYXlOYW1lIjoiTkVUV09SS19OQU1FIiwiaWQiOiJFUENfUF81In0seyJuYW1lIjoiQk9BUkRfTE9DQVRJT04iLCJkaXNwbGF5TmFtZSI6IkJPQVJEX0xPQ0FUSU9OIiwiaWQiOiJFUENfUF8yIn1dLCJjb250ZXh0IjpudWxsLCJncm91cEJ5RGltZW5zaW9ucyI6bnVsbH0sImZpbHRlciI6eyJjb25kaXRpb24iOiJBTkQiLCJydWxlcyI6W3siY29uZGl0aW9uIjoiT1IiLCJydWxlcyI6W3siZmllbGQiOiJDT1VOVEVSX0dST1VQX0lEIiwidmFsdWUiOiJFUENfQ0dfMzMiLCJ0eXBlIjoic2VsZWN0b3IifV19LHsiY29uZGl0aW9uIjoiT1IiLCJydWxlcyI6W3siaWQiOiJFUENfQ18xIiwidmFsdWUiOiItMjE0NzQ4MzY0OCIsInR5cGUiOiJib3VuZCJ9XX1dfSwic2FtcGxpbmdQZXJpb2QiOm51bGwsImludGVydmFscyI6Ikxhc3QgMSB3ZWVrIiwicGFnaW5hdGlvbiI6eyJwYWdlbnVtYmVyIjoxLCJwYWdlc2l6ZSI6MTAwMDAsInBhZ2luZ1NwZWMiOm51bGx9LCJncmFudWxhcml0eSI6IkFMTCIsInJlcG9ydERhdGFUeXBlIjoicmF3IiwiZmlsdGVyTWFwIjp7IkVQQ19QXzEiOlsiTU1FMDAxQktUIl19LCJjb3VudGVyR3JvdXBzV2l0aENvdW50ZXJBbmRQcm9wZXJ0aWVzIjpbeyJjb3VudGVyR3JvdXBJZCI6IkVQQ19DR18zMyIsImNvdW50ZXJHcm91cERldGFpbHMiOm51bGwsImRldmljZVR5cGUiOm51bGwsIm5lTGV2ZWwiOm51bGwsImNnU291cmNlIjpudWxsLCJjb3VudGVyTGlzdCI6W3siYWdncmVnYXRpb24iOm51bGwsImFnZ3JlZ2F0aW9uTGlzdCI6bnVsbCwiY291bnRlcktleSI6eyJjb3VudGVySWQiOiJFUENfQ18xIiwiY291bnRlckdyb3VwVHJhbnMiOm51bGx9LCJkaXNwbGF5TmFtZSI6Ik1lYW4gQ1BVIExvYWQiLCJjb3VudGVyVW5pdCI6IiUiLCJjb3VudGVyRGVzY3JpcHRpb24iOiJNZWFuIENQVSBMb2FkIiwiY291bnRlclR5cGUiOiJDb3VudGVyIiwiZW5hYmxlZCI6bnVsbCwic291cmNlTmFtZSI6bnVsbCwiZm9ybXVsYSI6bnVsbH1dLCJwcm9wZXJ0aWVzIjpbeyJwcm9wZXJ0eUtleSI6eyJwcm9wZXJ0eUlkIjoiRVBDX1BfMSIsImNvdW50ZXJHcm91cHMiOnsiY291bnRlckdyb3VwSWQiOiJFUENfQ0dfMzMiLCJjb3VudGVyR3JvdXBEZXRhaWxzIjpudWxsLCJkZXZpY2VUeXBlIjpudWxsLCJuZUxldmVsIjpudWxsLCJjZ1NvdXJjZSI6bnVsbCwiY291bnRlckxpc3QiOm51bGwsInByb3BlcnRpZXMiOm51bGwsImtwaXMiOm51bGwsImRpc3BsYXlOYW1lIjpudWxsfX0sInByb3BlcnR5TmFtZSI6IkNHUF9OQU1FIiwicHJvcGVydHlWYWx1ZXMiOiJ7XCJ2YWx1ZXNcIjpbXCJNTUUwMDFCS1RcIixcIk1NRTAwMUNST1wiLFwiTU1FMDAxTERTXCIsXCJNTUUwMDFMVE5cIixcIk1NRTAwMU1GRFwiLFwiTU1FMDAxV1ZOXCIsXCJNTUUwMDJDUk9cIixcIk1NRTAwMkxEU1wiLFwiTU1FMDAyTFROXCIsXCJNTUUwMDJXVk5cIixcIlBTSENSTzFDXCIsXCJQU0hLVDAzQ1wiLFwiUFNITEQwMkNcIixcIlBTSExUMDFDXCIsXCJQU0hNRjAxQ1wiLFwiUFNIV1YwMkNcIixcIlBTSFdWMDNDXCJdfSIsInNlbGVjdGVkVmFsdWVzIjpbIk1NRTAwMUJLVCJdfSx7InByb3BlcnR5S2V5Ijp7InByb3BlcnR5SWQiOiJFUENfUF8yIiwiY291bnRlckdyb3VwcyI6eyJjb3VudGVyR3JvdXBJZCI6IkVQQ19DR18zMyIsImNvdW50ZXJHcm91cERldGFpbHMiOm51bGwsImRldmljZVR5cGUiOm51bGwsIm5lTGV2ZWwiOm51bGwsImNnU291cmNlIjpudWxsLCJjb3VudGVyTGlzdCI6bnVsbCwicHJvcGVydGllcyI6bnVsbCwia3BpcyI6bnVsbCwiZGlzcGxheU5hbWUiOm51bGx9fSwicHJvcGVydHlOYW1lIjoiQk9BUkRfTE9DQVRJT04iLCJwcm9wZXJ0eVZhbHVlcyI6Im51bGwiLCJzZWxlY3RlZFZhbHVlcyI6W119LHsicHJvcGVydHlLZXkiOnsicHJvcGVydHlJZCI6IkVQQ19QXzUiLCJjb3VudGVyR3JvdXBzIjp7ImNvdW50ZXJHcm91cElkIjoiRVBDX0NHXzMzIiwiY291bnRlckdyb3VwRGV0YWlscyI6bnVsbCwiZGV2aWNlVHlwZSI6bnVsbCwibmVMZXZlbCI6bnVsbCwiY2dTb3VyY2UiOm51bGwsImNvdW50ZXJMaXN0IjpudWxsLCJwcm9wZXJ0aWVzIjpudWxsLCJrcGlzIjpudWxsLCJkaXNwbGF5TmFtZSI6bnVsbH19LCJwcm9wZXJ0eU5hbWUiOiJORVRXT1JLX05BTUUiLCJwcm9wZXJ0eVZhbHVlcyI6Im51bGwiLCJzZWxlY3RlZFZhbHVlcyI6W119XSwia3BpcyI6bnVsbCwiZGlzcGxheU5hbWUiOiJIV0lfQ0dQX0NQVV9MT0FEIn1dfQ=="
  //                       },
  //                       {
  //                         "dashboardtemplateId": "Q2AdOzc",
  //                         "reportName": "Network issue analysis for Location1",
  //                         "reportDetail": "eyJjb25maWd1cmF0aW9uIjp7ImF0dHJpYnV0ZXMiOm51bGwsInByb3BlcnRpZXMiOm51bGwsIm1ldHJpY3MiOlt7ImlkIjoiRVBDX0NfMSIsImFnZ3JlZ2F0aW9uVHlwZSI6IkFWRyJ9LHsiaWQiOiJFUENfQ18yIiwiYWdncmVnYXRpb25UeXBlIjoiTUFYIn0seyJpZCI6IkVQQ19DXzkiLCJhZ2dyZWdhdGlvblR5cGUiOiJTVU0ifV0sImtwaU1ldHJpY3MiOm51bGwsIm5hbWUiOiJOZXR3b3JrIGlzc3VlIGFuYWx5c2lzIGZvciBMb2NhdGlvbjEiLCJ0eXBlIjoiVGFibGUiLCJzdWJUeXBlIjoiVGFibGUiLCJkZXZpY2VUeXBlIjoiQ0dQIiwiZW50aXR5IjpudWxsLCJkaW1lbnNpb25zIjpbeyJuYW1lIjoiTkVUV09SS19OQU1FIiwiZGlzcGxheU5hbWUiOiJORVRXT1JLX05BTUUiLCJpZCI6IkVQQ19QXzUifSx7Im5hbWUiOiJCT0FSRF9MT0NBVElPTiIsImRpc3BsYXlOYW1lIjoiQk9BUkRfTE9DQVRJT04iLCJpZCI6IkVQQ19QXzIifSx7Im5hbWUiOiJDR1BfTkFNRSIsImRpc3BsYXlOYW1lIjoiQ0dQX05BTUUiLCJpZCI6IkVQQ19QXzEifV0sImNvbnRleHQiOm51bGwsImdyb3VwQnlEaW1lbnNpb25zIjpudWxsfSwiZmlsdGVyIjp7ImNvbmRpdGlvbiI6IkFORCIsInJ1bGVzIjpbeyJjb25kaXRpb24iOiJPUiIsInJ1bGVzIjpbeyJmaWVsZCI6IkNPVU5URVJfR1JPVVBfSUQiLCJ2YWx1ZSI6IkVQQ19DR18zMyIsInR5cGUiOiJzZWxlY3RvciJ9LHsiZmllbGQiOiJDT1VOVEVSX0dST1VQX0lEIiwidmFsdWUiOiJFUENfQ0dfMzUiLCJ0eXBlIjoic2VsZWN0b3IifV19LHsiY29uZGl0aW9uIjoiT1IiLCJydWxlcyI6W3siaWQiOiJFUENfQ18xIiwidmFsdWUiOiItMjE0NzQ4MzY0OCIsInR5cGUiOiJib3VuZCJ9LHsiaWQiOiJFUENfQ18yIiwidmFsdWUiOiItMjE0NzQ4MzY0OCIsInR5cGUiOiJib3VuZCJ9LHsiaWQiOiJFUENfQ185IiwidmFsdWUiOiItMjE0NzQ4MzY0OCIsInR5cGUiOiJib3VuZCJ9XX1dfSwic2FtcGxpbmdQZXJpb2QiOm51bGwsImludGVydmFscyI6IjIwMTgtMDQtMDJUMDQ6MjU6MDAuMDAwWi8yMDE4LTA0LTA0VDEzOjQ0OjAwLjAwMFoiLCJwYWdpbmF0aW9uIjp7InBhZ2VudW1iZXIiOjEsInBhZ2VzaXplIjoxMDAwMCwicGFnaW5nU3BlYyI6bnVsbH0sImdyYW51bGFyaXR5IjoiQUxMIiwicmVwb3J0RGF0YVR5cGUiOiJyYXciLCJmaWx0ZXJNYXAiOnsiRVBDX1BfMSI6WyJNTUUwMDFCS1QiLCJNTUUwMDFDUk8iLCJNTUUwMDFMRFMiLCJNTUUwMDFMVE4iXX0sImNvdW50ZXJHcm91cHNXaXRoQ291bnRlckFuZFByb3BlcnRpZXMiOlt7ImNvdW50ZXJHcm91cElkIjoiRVBDX0NHXzMzIiwiY291bnRlckdyb3VwRGV0YWlscyI6bnVsbCwiZGV2aWNlVHlwZSI6bnVsbCwibmVMZXZlbCI6bnVsbCwiY2dTb3VyY2UiOm51bGwsImNvdW50ZXJMaXN0IjpbeyJhZ2dyZWdhdGlvbiI6bnVsbCwiYWdncmVnYXRpb25MaXN0IjpudWxsLCJjb3VudGVyS2V5Ijp7ImNvdW50ZXJJZCI6IkVQQ19DXzEiLCJjb3VudGVyR3JvdXBUcmFucyI6bnVsbH0sImRpc3BsYXlOYW1lIjoiTWVhbiBDUFUgTG9hZCIsImNvdW50ZXJVbml0IjoiJSIsImNvdW50ZXJEZXNjcmlwdGlvbiI6Ik1lYW4gQ1BVIExvYWQiLCJjb3VudGVyVHlwZSI6IkNvdW50ZXIiLCJlbmFibGVkIjpudWxsLCJzb3VyY2VOYW1lIjpudWxsLCJmb3JtdWxhIjpudWxsfSx7ImFnZ3JlZ2F0aW9uIjpudWxsLCJhZ2dyZWdhdGlvbkxpc3QiOm51bGwsImNvdW50ZXJLZXkiOnsiY291bnRlcklkIjoiRVBDX0NfMiIsImNvdW50ZXJHcm91cFRyYW5zIjpudWxsfSwiZGlzcGxheU5hbWUiOiJNYXhpbXVtIENQVSBMb2FkIiwiY291bnRlclVuaXQiOiIlIiwiY291bnRlckRlc2NyaXB0aW9uIjoiTWF4aW11bSBDUFUgTG9hZCIsImNvdW50ZXJUeXBlIjoiQ291bnRlciIsImVuYWJsZWQiOm51bGwsInNvdXJjZU5hbWUiOm51bGwsImZvcm11bGEiOm51bGx9XSwicHJvcGVydGllcyI6W3sicHJvcGVydHlLZXkiOnsicHJvcGVydHlJZCI6IkVQQ19QXzEiLCJjb3VudGVyR3JvdXBzIjp7ImNvdW50ZXJHcm91cElkIjoiRVBDX0NHXzMzIiwiY291bnRlckdyb3VwRGV0YWlscyI6bnVsbCwiZGV2aWNlVHlwZSI6bnVsbCwibmVMZXZlbCI6bnVsbCwiY2dTb3VyY2UiOm51bGwsImNvdW50ZXJMaXN0IjpudWxsLCJwcm9wZXJ0aWVzIjpudWxsLCJrcGlzIjpudWxsLCJkaXNwbGF5TmFtZSI6bnVsbH19LCJwcm9wZXJ0eU5hbWUiOiJDR1BfTkFNRSIsInByb3BlcnR5VmFsdWVzIjoie1widmFsdWVzXCI6W1wiTU1FMDAxQktUXCIsXCJNTUUwMDFDUk9cIixcIk1NRTAwMUxEU1wiLFwiTU1FMDAxTFROXCIsXCJNTUUwMDFNRkRcIixcIk1NRTAwMVdWTlwiLFwiTU1FMDAyQ1JPXCIsXCJNTUUwMDJMRFNcIixcIk1NRTAwMkxUTlwiLFwiTU1FMDAyV1ZOXCIsXCJQU0hDUk8xQ1wiLFwiUFNIS1QwM0NcIixcIlBTSExEMDJDXCIsXCJQU0hMVDAxQ1wiLFwiUFNITUYwMUNcIixcIlBTSFdWMDJDXCIsXCJQU0hXVjAzQ1wiXX0iLCJzZWxlY3RlZFZhbHVlcyI6WyJNTUUwMDFCS1QiLCJNTUUwMDFDUk8iLCJNTUUwMDFMRFMiLCJNTUUwMDFMVE4iXX0seyJwcm9wZXJ0eUtleSI6eyJwcm9wZXJ0eUlkIjoiRVBDX1BfMiIsImNvdW50ZXJHcm91cHMiOnsiY291bnRlckdyb3VwSWQiOiJFUENfQ0dfMzMiLCJjb3VudGVyR3JvdXBEZXRhaWxzIjpudWxsLCJkZXZpY2VUeXBlIjpudWxsLCJuZUxldmVsIjpudWxsLCJjZ1NvdXJjZSI6bnVsbCwiY291bnRlckxpc3QiOm51bGwsInByb3BlcnRpZXMiOm51bGwsImtwaXMiOm51bGwsImRpc3BsYXlOYW1lIjpudWxsfX0sInByb3BlcnR5TmFtZSI6IkJPQVJEX0xPQ0FUSU9OIiwicHJvcGVydHlWYWx1ZXMiOiJudWxsIiwic2VsZWN0ZWRWYWx1ZXMiOltdfSx7InByb3BlcnR5S2V5Ijp7InByb3BlcnR5SWQiOiJFUENfUF81IiwiY291bnRlckdyb3VwcyI6eyJjb3VudGVyR3JvdXBJZCI6IkVQQ19DR18zMyIsImNvdW50ZXJHcm91cERldGFpbHMiOm51bGwsImRldmljZVR5cGUiOm51bGwsIm5lTGV2ZWwiOm51bGwsImNnU291cmNlIjpudWxsLCJjb3VudGVyTGlzdCI6bnVsbCwicHJvcGVydGllcyI6bnVsbCwia3BpcyI6bnVsbCwiZGlzcGxheU5hbWUiOm51bGx9fSwicHJvcGVydHlOYW1lIjoiTkVUV09SS19OQU1FIiwicHJvcGVydHlWYWx1ZXMiOiJudWxsIiwic2VsZWN0ZWRWYWx1ZXMiOltdfV0sImtwaXMiOm51bGwsImRpc3BsYXlOYW1lIjoiSFdJX0NHUF9DUFVfTE9BRCJ9LHsiY291bnRlckdyb3VwSWQiOiJFUENfQ0dfMzUiLCJjb3VudGVyR3JvdXBEZXRhaWxzIjpudWxsLCJkZXZpY2VUeXBlIjpudWxsLCJuZUxldmVsIjpudWxsLCJjZ1NvdXJjZSI6bnVsbCwiY291bnRlckxpc3QiOlt7ImFnZ3JlZ2F0aW9uIjpudWxsLCJhZ2dyZWdhdGlvbkxpc3QiOm51bGwsImNvdW50ZXJLZXkiOnsiY291bnRlcklkIjoiRVBDX0NfMSIsImNvdW50ZXJHcm91cFRyYW5zIjpudWxsfSwiZGlzcGxheU5hbWUiOiJTaXplIG9mIFBhY2tldHMgUmVjZWl2ZWQiLCJjb3VudGVyVW5pdCI6ImtpbG9ieXRlcyIsImNvdW50ZXJEZXNjcmlwdGlvbiI6IlNpemUgb2YgUGFja2V0cyBSZWNlaXZlZCBUaHJvdWdoIGEgUG9ydCIsImNvdW50ZXJUeXBlIjoiQ291bnRlciIsImVuYWJsZWQiOm51bGwsInNvdXJjZU5hbWUiOm51bGwsImZvcm11bGEiOm51bGx9LHsiYWdncmVnYXRpb24iOm51bGwsImFnZ3JlZ2F0aW9uTGlzdCI6bnVsbCwiY291bnRlcktleSI6eyJjb3VudGVySWQiOiJFUENfQ185IiwiY291bnRlckdyb3VwVHJhbnMiOm51bGx9LCJkaXNwbGF5TmFtZSI6IlNpemUgb2YgUGFja2V0cyBTZW50IiwiY291bnRlclVuaXQiOiJraWxvYnl0ZXMiLCJjb3VudGVyRGVzY3JpcHRpb24iOiJTaXplIG9mIFBhY2tldHMgU2VudCBUaHJvdWdoIGEgUG9ydCIsImNvdW50ZXJUeXBlIjoiQ291bnRlciIsImVuYWJsZWQiOm51bGwsInNvdXJjZU5hbWUiOm51bGwsImZvcm11bGEiOm51bGx9XSwicHJvcGVydGllcyI6W3sicHJvcGVydHlLZXkiOnsicHJvcGVydHlJZCI6IkVQQ19QXzEiLCJjb3VudGVyR3JvdXBzIjp7ImNvdW50ZXJHcm91cElkIjoiRVBDX0NHXzM1IiwiY291bnRlckdyb3VwRGV0YWlscyI6bnVsbCwiZGV2aWNlVHlwZSI6bnVsbCwibmVMZXZlbCI6bnVsbCwiY2dTb3VyY2UiOm51bGwsImNvdW50ZXJMaXN0IjpudWxsLCJwcm9wZXJ0aWVzIjpudWxsLCJrcGlzIjpudWxsLCJkaXNwbGF5TmFtZSI6bnVsbH19LCJwcm9wZXJ0eU5hbWUiOiJDR1BfTkFNRSIsInByb3BlcnR5VmFsdWVzIjoie1widmFsdWVzXCI6W1wiTU1FMDAxQktUXCIsXCJNTUUwMDFDUk9cIixcIk1NRTAwMUxEU1wiLFwiTU1FMDAxTFROXCIsXCJNTUUwMDFNRkRcIixcIk1NRTAwMVdWTlwiLFwiTU1FMDAyQ1JPXCIsXCJNTUUwMDJMRFNcIixcIk1NRTAwMkxUTlwiLFwiTU1FMDAyV1ZOXCIsXCJQU0hDUk8xQ1wiLFwiUFNIS1QwM0NcIixcIlBTSExEMDJDXCIsXCJQU0hMVDAxQ1wiLFwiUFNITUYwMUNcIixcIlBTSFdWMDJDXCIsXCJQU0hXVjAzQ1wiXX0iLCJzZWxlY3RlZFZhbHVlcyI6WyJNTUUwMDFCS1QiLCJNTUUwMDFDUk8iLCJNTUUwMDFMRFMiXX0seyJwcm9wZXJ0eUtleSI6eyJwcm9wZXJ0eUlkIjoiRVBDX1BfMiIsImNvdW50ZXJHcm91cHMiOnsiY291bnRlckdyb3VwSWQiOiJFUENfQ0dfMzUiLCJjb3VudGVyR3JvdXBEZXRhaWxzIjpudWxsLCJkZXZpY2VUeXBlIjpudWxsLCJuZUxldmVsIjpudWxsLCJjZ1NvdXJjZSI6bnVsbCwiY291bnRlckxpc3QiOm51bGwsInByb3BlcnRpZXMiOm51bGwsImtwaXMiOm51bGwsImRpc3BsYXlOYW1lIjpudWxsfX0sInByb3BlcnR5TmFtZSI6IlBPUlRfTkFNRSIsInByb3BlcnR5VmFsdWVzIjoibnVsbCIsInNlbGVjdGVkVmFsdWVzIjpbXX0seyJwcm9wZXJ0eUtleSI6eyJwcm9wZXJ0eUlkIjoiRVBDX1BfNSIsImNvdW50ZXJHcm91cHMiOnsiY291bnRlckdyb3VwSWQiOiJFUENfQ0dfMzUiLCJjb3VudGVyR3JvdXBEZXRhaWxzIjpudWxsLCJkZXZpY2VUeXBlIjpudWxsLCJuZUxldmVsIjpudWxsLCJjZ1NvdXJjZSI6bnVsbCwiY291bnRlckxpc3QiOm51bGwsInByb3BlcnRpZXMiOm51bGwsImtwaXMiOm51bGwsImRpc3BsYXlOYW1lIjpudWxsfX0sInByb3BlcnR5TmFtZSI6Ik5FVFdPUktfTkFNRSIsInByb3BlcnR5VmFsdWVzIjoibnVsbCIsInNlbGVjdGVkVmFsdWVzIjpbXX1dLCJrcGlzIjpudWxsLCJkaXNwbGF5TmFtZSI6IkhXSV9DR1BfRVRIX1RSQUZGIn1dfQ=="
  //                       }
  //                     ]
  //                   },
  //                   {
  //                     "subDashboardId": "PyAcpB",
  //                     "name": "Traffic",
  //                     "dashboardTemplates": [
  //                       {
  //                         "dashboardtemplateId": "qbCbw4L",
  //                         "reportName": "Aval",
  //                         "reportDetail": "eyJjb25maWd1cmF0aW9uIjp7ImF0dHJpYnV0ZXMiOm51bGwsInByb3BlcnRpZXMiOm51bGwsIm1ldHJpY3MiOlt7ImlkIjoiRVBDX0NfMSIsImFnZ3JlZ2F0aW9uVHlwZSI6IkFWRyJ9XSwia3BpTWV0cmljcyI6bnVsbCwibmFtZSI6IkF2YWwiLCJ0eXBlIjoiR3JhcGgiLCJzdWJUeXBlIjoiQmFyIiwiZGV2aWNlVHlwZSI6IkNHUCIsImVudGl0eSI6bnVsbCwiZGltZW5zaW9ucyI6W3sibmFtZSI6IkNHUF9OQU1FIiwiZGlzcGxheU5hbWUiOiJDR1BfTkFNRSIsImlkIjoiRVBDX1BfMSJ9LHsibmFtZSI6Ik5FVFdPUktfTkFNRSIsImRpc3BsYXlOYW1lIjoiTkVUV09SS19OQU1FIiwiaWQiOiJFUENfUF81In0seyJuYW1lIjoiQk9BUkRfTE9DQVRJT04iLCJkaXNwbGF5TmFtZSI6IkJPQVJEX0xPQ0FUSU9OIiwiaWQiOiJFUENfUF8yIn1dLCJjb250ZXh0IjpudWxsLCJncm91cEJ5RGltZW5zaW9ucyI6bnVsbH0sImZpbHRlciI6eyJjb25kaXRpb24iOiJBTkQiLCJydWxlcyI6W3siY29uZGl0aW9uIjoiT1IiLCJydWxlcyI6W3siZmllbGQiOiJDT1VOVEVSX0dST1VQX0lEIiwidmFsdWUiOiJFUENfQ0dfMzMiLCJ0eXBlIjoic2VsZWN0b3IifV19LHsiY29uZGl0aW9uIjoiT1IiLCJydWxlcyI6W3siaWQiOiJFUENfQ18xIiwidmFsdWUiOiItMjE0NzQ4MzY0OCIsInR5cGUiOiJib3VuZCJ9XX1dfSwic2FtcGxpbmdQZXJpb2QiOm51bGwsImludGVydmFscyI6Ikxhc3QgMSB3ZWVrIiwicGFnaW5hdGlvbiI6eyJwYWdlbnVtYmVyIjoxLCJwYWdlc2l6ZSI6MTAwMDAsInBhZ2luZ1NwZWMiOm51bGx9LCJncmFudWxhcml0eSI6IkFMTCIsInJlcG9ydERhdGFUeXBlIjoicmF3IiwiZmlsdGVyTWFwIjp7IkVQQ19QXzEiOlsiTU1FMDAxQktUIl19LCJjb3VudGVyR3JvdXBzV2l0aENvdW50ZXJBbmRQcm9wZXJ0aWVzIjpbeyJjb3VudGVyR3JvdXBJZCI6IkVQQ19DR18zMyIsImNvdW50ZXJHcm91cERldGFpbHMiOm51bGwsImRldmljZVR5cGUiOm51bGwsIm5lTGV2ZWwiOm51bGwsImNnU291cmNlIjpudWxsLCJjb3VudGVyTGlzdCI6W3siYWdncmVnYXRpb24iOm51bGwsImFnZ3JlZ2F0aW9uTGlzdCI6bnVsbCwiY291bnRlcktleSI6eyJjb3VudGVySWQiOiJFUENfQ18xIiwiY291bnRlckdyb3VwVHJhbnMiOm51bGx9LCJkaXNwbGF5TmFtZSI6Ik1lYW4gQ1BVIExvYWQiLCJjb3VudGVyVW5pdCI6IiUiLCJjb3VudGVyRGVzY3JpcHRpb24iOiJNZWFuIENQVSBMb2FkIiwiY291bnRlclR5cGUiOiJDb3VudGVyIiwiZW5hYmxlZCI6bnVsbCwic291cmNlTmFtZSI6bnVsbCwiZm9ybXVsYSI6bnVsbH1dLCJwcm9wZXJ0aWVzIjpbeyJwcm9wZXJ0eUtleSI6eyJwcm9wZXJ0eUlkIjoiRVBDX1BfMSIsImNvdW50ZXJHcm91cHMiOnsiY291bnRlckdyb3VwSWQiOiJFUENfQ0dfMzMiLCJjb3VudGVyR3JvdXBEZXRhaWxzIjpudWxsLCJkZXZpY2VUeXBlIjpudWxsLCJuZUxldmVsIjpudWxsLCJjZ1NvdXJjZSI6bnVsbCwiY291bnRlckxpc3QiOm51bGwsInByb3BlcnRpZXMiOm51bGwsImtwaXMiOm51bGwsImRpc3BsYXlOYW1lIjpudWxsfX0sInByb3BlcnR5TmFtZSI6IkNHUF9OQU1FIiwicHJvcGVydHlWYWx1ZXMiOiJ7XCJ2YWx1ZXNcIjpbXCJNTUUwMDFCS1RcIixcIk1NRTAwMUNST1wiLFwiTU1FMDAxTERTXCIsXCJNTUUwMDFMVE5cIixcIk1NRTAwMU1GRFwiLFwiTU1FMDAxV1ZOXCIsXCJNTUUwMDJDUk9cIixcIk1NRTAwMkxEU1wiLFwiTU1FMDAyTFROXCIsXCJNTUUwMDJXVk5cIixcIlBTSENSTzFDXCIsXCJQU0hLVDAzQ1wiLFwiUFNITEQwMkNcIixcIlBTSExUMDFDXCIsXCJQU0hNRjAxQ1wiLFwiUFNIV1YwMkNcIixcIlBTSFdWMDNDXCJdfSIsInNlbGVjdGVkVmFsdWVzIjpbIk1NRTAwMUJLVCJdfSx7InByb3BlcnR5S2V5Ijp7InByb3BlcnR5SWQiOiJFUENfUF8yIiwiY291bnRlckdyb3VwcyI6eyJjb3VudGVyR3JvdXBJZCI6IkVQQ19DR18zMyIsImNvdW50ZXJHcm91cERldGFpbHMiOm51bGwsImRldmljZVR5cGUiOm51bGwsIm5lTGV2ZWwiOm51bGwsImNnU291cmNlIjpudWxsLCJjb3VudGVyTGlzdCI6bnVsbCwicHJvcGVydGllcyI6bnVsbCwia3BpcyI6bnVsbCwiZGlzcGxheU5hbWUiOm51bGx9fSwicHJvcGVydHlOYW1lIjoiQk9BUkRfTE9DQVRJT04iLCJwcm9wZXJ0eVZhbHVlcyI6Im51bGwiLCJzZWxlY3RlZFZhbHVlcyI6W119LHsicHJvcGVydHlLZXkiOnsicHJvcGVydHlJZCI6IkVQQ19QXzUiLCJjb3VudGVyR3JvdXBzIjp7ImNvdW50ZXJHcm91cElkIjoiRVBDX0NHXzMzIiwiY291bnRlckdyb3VwRGV0YWlscyI6bnVsbCwiZGV2aWNlVHlwZSI6bnVsbCwibmVMZXZlbCI6bnVsbCwiY2dTb3VyY2UiOm51bGwsImNvdW50ZXJMaXN0IjpudWxsLCJwcm9wZXJ0aWVzIjpudWxsLCJrcGlzIjpudWxsLCJkaXNwbGF5TmFtZSI6bnVsbH19LCJwcm9wZXJ0eU5hbWUiOiJORVRXT1JLX05BTUUiLCJwcm9wZXJ0eVZhbHVlcyI6Im51bGwiLCJzZWxlY3RlZFZhbHVlcyI6W119XSwia3BpcyI6bnVsbCwiZGlzcGxheU5hbWUiOiJIV0lfQ0dQX0NQVV9MT0FEIn1dfQ=="
  //                       },
  //                       {
  //                         "dashboardtemplateId": "tbSzGIC",
  //                         "reportName": "Pawan",
  //                         "reportDetail": "eyJjb25maWd1cmF0aW9uIjp7ImF0dHJpYnV0ZXMiOm51bGwsInByb3BlcnRpZXMiOm51bGwsIm1ldHJpY3MiOlt7ImlkIjoiRVBDX0NfMSIsImFnZ3JlZ2F0aW9uVHlwZSI6IkFWRyJ9LHsiaWQiOiJFUENfQ18yIiwiYWdncmVnYXRpb25UeXBlIjoiTUFYIn1dLCJrcGlNZXRyaWNzIjpudWxsLCJuYW1lIjoiUGF3YW4iLCJ0eXBlIjoiVGFibGUiLCJzdWJUeXBlIjoiVGFibGUiLCJkZXZpY2VUeXBlIjoiQ0dQIiwiZW50aXR5IjpudWxsLCJkaW1lbnNpb25zIjpbeyJuYW1lIjoiQ0dQX05BTUUiLCJkaXNwbGF5TmFtZSI6IkNHUF9OQU1FIiwiaWQiOiJFUENfUF8xIn0seyJuYW1lIjoiTkVUV09SS19OQU1FIiwiZGlzcGxheU5hbWUiOiJORVRXT1JLX05BTUUiLCJpZCI6IkVQQ19QXzUifV0sImNvbnRleHQiOm51bGwsImdyb3VwQnlEaW1lbnNpb25zIjpudWxsfSwiZmlsdGVyIjp7ImNvbmRpdGlvbiI6IkFORCIsInJ1bGVzIjpbeyJjb25kaXRpb24iOiJPUiIsInJ1bGVzIjpbeyJmaWVsZCI6IkNPVU5URVJfR1JPVVBfSUQiLCJ2YWx1ZSI6IkVQQ19DR18zMyIsInR5cGUiOiJzZWxlY3RvciJ9LHsiZmllbGQiOiJDT1VOVEVSX0dST1VQX0lEIiwidmFsdWUiOiJFUENfQ0dfMzYiLCJ0eXBlIjoic2VsZWN0b3IifV19LHsiY29uZGl0aW9uIjoiT1IiLCJydWxlcyI6W3siaWQiOiJFUENfQ18xIiwidmFsdWUiOiItMjE0NzQ4MzY0OCIsInR5cGUiOiJib3VuZCJ9LHsiaWQiOiJFUENfQ18yIiwidmFsdWUiOiItMjE0NzQ4MzY0OCIsInR5cGUiOiJib3VuZCJ9XX1dfSwic2FtcGxpbmdQZXJpb2QiOm51bGwsImludGVydmFscyI6Ikxhc3QgMSBkYXkiLCJwYWdpbmF0aW9uIjp7InBhZ2VudW1iZXIiOjEsInBhZ2VzaXplIjoxMDAwMCwicGFnaW5nU3BlYyI6bnVsbH0sImdyYW51bGFyaXR5IjoiQUxMIiwicmVwb3J0RGF0YVR5cGUiOiJyYXciLCJmaWx0ZXJNYXAiOnsiRVBDX1BfMSI6WyJNTUUwMDFCS1QiLCJNTUUwMDFDUk8iXX0sImNvdW50ZXJHcm91cHNXaXRoQ291bnRlckFuZFByb3BlcnRpZXMiOlt7ImNvdW50ZXJHcm91cElkIjoiRVBDX0NHXzMzIiwiY291bnRlckdyb3VwRGV0YWlscyI6bnVsbCwiZGV2aWNlVHlwZSI6bnVsbCwibmVMZXZlbCI6bnVsbCwiY2dTb3VyY2UiOm51bGwsImNvdW50ZXJMaXN0IjpbeyJhZ2dyZWdhdGlvbiI6bnVsbCwiYWdncmVnYXRpb25MaXN0IjpudWxsLCJjb3VudGVyS2V5Ijp7ImNvdW50ZXJJZCI6IkVQQ19DXzEiLCJjb3VudGVyR3JvdXBUcmFucyI6bnVsbH0sImRpc3BsYXlOYW1lIjoiTWVhbiBDUFUgTG9hZCIsImNvdW50ZXJVbml0IjoiJSIsImNvdW50ZXJEZXNjcmlwdGlvbiI6Ik1lYW4gQ1BVIExvYWQiLCJjb3VudGVyVHlwZSI6IkNvdW50ZXIiLCJlbmFibGVkIjpudWxsLCJzb3VyY2VOYW1lIjpudWxsLCJmb3JtdWxhIjpudWxsfSx7ImFnZ3JlZ2F0aW9uIjpudWxsLCJhZ2dyZWdhdGlvbkxpc3QiOm51bGwsImNvdW50ZXJLZXkiOnsiY291bnRlcklkIjoiRVBDX0NfMiIsImNvdW50ZXJHcm91cFRyYW5zIjpudWxsfSwiZGlzcGxheU5hbWUiOiJNYXhpbXVtIENQVSBMb2FkIiwiY291bnRlclVuaXQiOiIlIiwiY291bnRlckRlc2NyaXB0aW9uIjoiTWF4aW11bSBDUFUgTG9hZCIsImNvdW50ZXJUeXBlIjoiQ291bnRlciIsImVuYWJsZWQiOm51bGwsInNvdXJjZU5hbWUiOm51bGwsImZvcm11bGEiOm51bGx9XSwicHJvcGVydGllcyI6W3sicHJvcGVydHlLZXkiOnsicHJvcGVydHlJZCI6IkVQQ19QXzEiLCJjb3VudGVyR3JvdXBzIjp7ImNvdW50ZXJHcm91cElkIjoiRVBDX0NHXzMzIiwiY291bnRlckdyb3VwRGV0YWlscyI6bnVsbCwiZGV2aWNlVHlwZSI6bnVsbCwibmVMZXZlbCI6bnVsbCwiY2dTb3VyY2UiOm51bGwsImNvdW50ZXJMaXN0IjpudWxsLCJwcm9wZXJ0aWVzIjpudWxsLCJrcGlzIjpudWxsLCJkaXNwbGF5TmFtZSI6bnVsbH19LCJwcm9wZXJ0eU5hbWUiOiJDR1BfTkFNRSIsInByb3BlcnR5VmFsdWVzIjoie1widmFsdWVzXCI6W1wiTU1FMDAxQktUXCIsXCJNTUUwMDFDUk9cIixcIk1NRTAwMUxEU1wiLFwiTU1FMDAxTFROXCIsXCJNTUUwMDFNRkRcIixcIk1NRTAwMVdWTlwiLFwiTU1FMDAyQ1JPXCIsXCJNTUUwMDJMRFNcIixcIk1NRTAwMkxUTlwiLFwiTU1FMDAyV1ZOXCIsXCJQU0hDUk8xQ1wiLFwiUFNIS1QwM0NcIixcIlBTSExEMDJDXCIsXCJQU0hMVDAxQ1wiLFwiUFNITUYwMUNcIixcIlBTSFdWMDJDXCIsXCJQU0hXVjAzQ1wiXX0iLCJzZWxlY3RlZFZhbHVlcyI6WyJNTUUwMDFCS1QiLCJNTUUwMDFDUk8iXX0seyJwcm9wZXJ0eUtleSI6eyJwcm9wZXJ0eUlkIjoiRVBDX1BfNSIsImNvdW50ZXJHcm91cHMiOnsiY291bnRlckdyb3VwSWQiOiJFUENfQ0dfMzMiLCJjb3VudGVyR3JvdXBEZXRhaWxzIjpudWxsLCJkZXZpY2VUeXBlIjpudWxsLCJuZUxldmVsIjpudWxsLCJjZ1NvdXJjZSI6bnVsbCwiY291bnRlckxpc3QiOm51bGwsInByb3BlcnRpZXMiOm51bGwsImtwaXMiOm51bGwsImRpc3BsYXlOYW1lIjpudWxsfX0sInByb3BlcnR5TmFtZSI6Ik5FVFdPUktfTkFNRSIsInByb3BlcnR5VmFsdWVzIjoibnVsbCIsInNlbGVjdGVkVmFsdWVzIjpbXX1dLCJrcGlzIjpudWxsLCJkaXNwbGF5TmFtZSI6IkhXSV9DR1BfQ1BVX0xPQUQifSx7ImNvdW50ZXJHcm91cElkIjoiRVBDX0NHXzM2IiwiY291bnRlckdyb3VwRGV0YWlscyI6bnVsbCwiZGV2aWNlVHlwZSI6bnVsbCwibmVMZXZlbCI6bnVsbCwiY2dTb3VyY2UiOm51bGwsImNvdW50ZXJMaXN0IjpbeyJhZ2dyZWdhdGlvbiI6bnVsbCwiYWdncmVnYXRpb25MaXN0IjpudWxsLCJjb3VudGVyS2V5Ijp7ImNvdW50ZXJJZCI6IkVQQ19DXzIiLCJjb3VudGVyR3JvdXBUcmFucyI6bnVsbH0sImRpc3BsYXlOYW1lIjoiVXNlZCBNZW1vcnkgU2l6ZSIsImNvdW50ZXJVbml0IjoiTUIiLCJjb3VudGVyRGVzY3JpcHRpb24iOiJVc2VkIE1lbW9yeSBTaXplIiwiY291bnRlclR5cGUiOiJDb3VudGVyIiwiZW5hYmxlZCI6bnVsbCwic291cmNlTmFtZSI6bnVsbCwiZm9ybXVsYSI6bnVsbH1dLCJwcm9wZXJ0aWVzIjpbeyJwcm9wZXJ0eUtleSI6eyJwcm9wZXJ0eUlkIjoiRVBDX1BfMSIsImNvdW50ZXJHcm91cHMiOnsiY291bnRlckdyb3VwSWQiOiJFUENfQ0dfMzYiLCJjb3VudGVyR3JvdXBEZXRhaWxzIjpudWxsLCJkZXZpY2VUeXBlIjpudWxsLCJuZUxldmVsIjpudWxsLCJjZ1NvdXJjZSI6bnVsbCwiY291bnRlckxpc3QiOm51bGwsInByb3BlcnRpZXMiOm51bGwsImtwaXMiOm51bGwsImRpc3BsYXlOYW1lIjpudWxsfX0sInByb3BlcnR5TmFtZSI6IkNHUF9OQU1FIiwicHJvcGVydHlWYWx1ZXMiOiJ7XCJ2YWx1ZXNcIjpbXCJNTUUwMDFCS1RcIixcIk1NRTAwMUNST1wiLFwiTU1FMDAxTERTXCIsXCJNTUUwMDFMVE5cIixcIk1NRTAwMU1GRFwiLFwiTU1FMDAxV1ZOXCIsXCJNTUUwMDJDUk9cIixcIk1NRTAwMkxEU1wiLFwiTU1FMDAyTFROXCIsXCJNTUUwMDJXVk5cIixcIlBTSENSTzFDXCIsXCJQU0hLVDAzQ1wiLFwiUFNITEQwMkNcIixcIlBTSExUMDFDXCIsXCJQU0hNRjAxQ1wiLFwiUFNIV1YwMkNcIixcIlBTSFdWMDNDXCJdfSIsInNlbGVjdGVkVmFsdWVzIjpbIk1NRTAwMUJLVCIsIk1NRTAwMUNSTyJdfSx7InByb3BlcnR5S2V5Ijp7InByb3BlcnR5SWQiOiJFUENfUF81IiwiY291bnRlckdyb3VwcyI6eyJjb3VudGVyR3JvdXBJZCI6IkVQQ19DR18zNiIsImNvdW50ZXJHcm91cERldGFpbHMiOm51bGwsImRldmljZVR5cGUiOm51bGwsIm5lTGV2ZWwiOm51bGwsImNnU291cmNlIjpudWxsLCJjb3VudGVyTGlzdCI6bnVsbCwicHJvcGVydGllcyI6bnVsbCwia3BpcyI6bnVsbCwiZGlzcGxheU5hbWUiOm51bGx9fSwicHJvcGVydHlOYW1lIjoiTkVUV09SS19OQU1FIiwicHJvcGVydHlWYWx1ZXMiOiJudWxsIiwic2VsZWN0ZWRWYWx1ZXMiOltdfV0sImtwaXMiOm51bGwsImRpc3BsYXlOYW1lIjoiSFdJX0NHUF9NRU0ifV19"
  //                       }
  //                     ]
  //                   }
  //                 ]
  //               },
  //               {
  //                 "dashboardId": "Yw0fEA",
  //                 "name": "Test Dash for MME",
  //                 "type": "common",
  //                 "view": "both",
  //                 "subDashboards": [
  //                   {
  //                     "subDashboardId": "7L8KaM",
  //                     "name": "MME R",
  //                     "dashboardTemplates": [
  //                       {
  //                         "dashboardtemplateId": "aCkPPgU",
  //                         "reportName": "MME-lineChart",
  //                         "reportDetail": "eyJjb25maWd1cmF0aW9uIjp7ImF0dHJpYnV0ZXMiOm51bGwsInByb3BlcnRpZXMiOm51bGwsIm1ldHJpY3MiOlt7ImlkIjoiRVBDX0NfMSJ9LHsiaWQiOiJFUENfQ18yIn1dLCJrcGlNZXRyaWNzIjpudWxsLCJuYW1lIjoiTU1FLWxpbmVDaGFydCIsInR5cGUiOiJHcmFwaCIsInN1YlR5cGUiOiJWZXJ0aWNhbCBTdGFja2VkIEJhciIsImRldmljZVR5cGUiOiJNTUUiLCJlbnRpdHkiOm51bGwsImRpbWVuc2lvbnMiOlt7Im5hbWUiOiJNTUVfTkFNRSIsImRpc3BsYXlOYW1lIjoiTU1FX05BTUUiLCJpZCI6IkVQQ19QXzEifSx7Im5hbWUiOiJORVRXT1JLX05BTUUiLCJkaXNwbGF5TmFtZSI6Ik5FVFdPUktfTkFNRSIsImlkIjoiRVBDX1BfNSJ9LHsibmFtZSI6Ik5FVFdPUktfTkFNRSIsImRpc3BsYXlOYW1lIjoiTkVUV09SS19OQU1FIiwiaWQiOiJFUENfUF8zIn1dLCJjb250ZXh0IjpudWxsLCJncm91cEJ5RGltZW5zaW9ucyI6bnVsbH0sImZpbHRlciI6bnVsbCwic2FtcGxpbmdQZXJpb2QiOm51bGwsImludGVydmFscyI6Ikxhc3QgNiBob3VycyIsInBhZ2luYXRpb24iOnsicGFnZW51bWJlciI6MSwicGFnZXNpemUiOjEwMDAwLCJwYWdpbmdTcGVjIjpudWxsfSwiZ3JhbnVsYXJpdHkiOiJBTEwiLCJyZXBvcnREYXRhVHlwZSI6InJhdyIsImZpbHRlck1hcCI6eyJFUENfUF8xIjpbIk1NRTAwMUNSTyJdfSwiY291bnRlckdyb3Vwc1dpdGhDb3VudGVyQW5kUHJvcGVydGllcyI6W3siY291bnRlckdyb3VwSWQiOiJFUENfQ0dfMTEiLCJjb3VudGVyR3JvdXBEZXRhaWxzIjpudWxsLCJkZXZpY2VUeXBlIjpudWxsLCJuZUxldmVsIjpudWxsLCJjZ1NvdXJjZSI6bnVsbCwiY291bnRlckxpc3QiOlt7ImFnZ3JlZ2F0aW9uIjpudWxsLCJhZ2dyZWdhdGlvbkxpc3QiOm51bGwsImNvdW50ZXJLZXkiOnsiY291bnRlcklkIjoiRVBDX0NfMSIsImNvdW50ZXJHcm91cFRyYW5zIjpudWxsfSwiZGlzcGxheU5hbWUiOiJBVVRIIFJlcSIsImNvdW50ZXJVbml0IjoidGltZXMiLCJjb3VudGVyRGVzY3JpcHRpb24iOiJBdXRoZW50aWNhdGlvbiByZXF1ZXN0IFRpbWVzIiwiY291bnRlclR5cGUiOiJDb3VudGVyIiwiZW5hYmxlZCI6bnVsbCwic291cmNlTmFtZSI6bnVsbCwiZm9ybXVsYSI6bnVsbH1dLCJwcm9wZXJ0aWVzIjpbeyJwcm9wZXJ0eUtleSI6eyJwcm9wZXJ0eUlkIjoiRVBDX1BfMSIsImNvdW50ZXJHcm91cHMiOnsiY291bnRlckdyb3VwSWQiOiJFUENfQ0dfMTEiLCJjb3VudGVyR3JvdXBEZXRhaWxzIjpudWxsLCJkZXZpY2VUeXBlIjpudWxsLCJuZUxldmVsIjpudWxsLCJjZ1NvdXJjZSI6bnVsbCwiY291bnRlckxpc3QiOm51bGwsInByb3BlcnRpZXMiOm51bGwsImtwaXMiOm51bGwsImRpc3BsYXlOYW1lIjpudWxsfX0sInByb3BlcnR5TmFtZSI6Ik1NRV9OQU1FIiwicHJvcGVydHlWYWx1ZXMiOiJ7XCJ2YWx1ZXNcIjpbXCJNTUUwMDFDUk9cIixcIk1NRTAwMUxEU1wiLFwiTU1FMDAxTFROXCIsXCJNTUUwMDFNRkRcIixcIk1NRTAwMVdWTlwiLFwiTU1FMDAyQktUXCIsXCJNTUUwMDJDUk9cIixcIk1NRTAwMkxEU1wiLFwiTU1FMDAyTFROXCIsXCJNTUUwMDJNRkRcIixcIk1NRTAwMldWTlwiLFwiTU1FMDAxRU5GXCIsXCJNTUUwMDFQUlNcIixcIk1NRTAwMUJLVFwiXX0iLCJzZWxlY3RlZFZhbHVlcyI6WyJNTUUwMDFDUk8iXX0seyJwcm9wZXJ0eUtleSI6eyJwcm9wZXJ0eUlkIjoiRVBDX1BfMyIsImNvdW50ZXJHcm91cHMiOnsiY291bnRlckdyb3VwSWQiOiJFUENfQ0dfMTEiLCJjb3VudGVyR3JvdXBEZXRhaWxzIjpudWxsLCJkZXZpY2VUeXBlIjpudWxsLCJuZUxldmVsIjpudWxsLCJjZ1NvdXJjZSI6bnVsbCwiY291bnRlckxpc3QiOm51bGwsInByb3BlcnRpZXMiOm51bGwsImtwaXMiOm51bGwsImRpc3BsYXlOYW1lIjpudWxsfX0sInByb3BlcnR5TmFtZSI6Ik5FVFdPUktfTkFNRSIsInByb3BlcnR5VmFsdWVzIjoibnVsbCIsInNlbGVjdGVkVmFsdWVzIjpudWxsfV0sImtwaXMiOm51bGwsImRpc3BsYXlOYW1lIjoiSFdJX01NRV9TMU1PRFNFQyJ9XX0="
  //                       },
  //                       {
  //                         "dashboardtemplateId": "ExeDTHm",
  //                         "reportName": "Test-MME-Sai",
  //                         "reportDetail": "eyJjb25maWd1cmF0aW9uIjp7ImF0dHJpYnV0ZXMiOm51bGwsInByb3BlcnRpZXMiOm51bGwsIm1ldHJpY3MiOlt7ImlkIjoiRVBDX0NfMSIsImFnZ3JlZ2F0aW9uVHlwZSI6Ik1BWCJ9LHsiaWQiOiJFUENfQ18yIiwiYWdncmVnYXRpb25UeXBlIjoiQVZHIn1dLCJrcGlNZXRyaWNzIjpudWxsLCJuYW1lIjoiVGVzdC1NTUUtU2FpIiwidHlwZSI6IlRhYmxlIiwic3ViVHlwZSI6IlRhYmxlIiwiZGV2aWNlVHlwZSI6Ik1NRSIsImVudGl0eSI6bnVsbCwiZGltZW5zaW9ucyI6W3sibmFtZSI6Ik1NRV9OQU1FIiwiZGlzcGxheU5hbWUiOiJNTUVfTkFNRSIsImlkIjoiRVBDX1BfMSJ9LHsibmFtZSI6Ik5FVFdPUktfTkFNRSIsImRpc3BsYXlOYW1lIjoiTkVUV09SS19OQU1FIiwiaWQiOiJFUENfUF81In1dLCJjb250ZXh0IjpudWxsLCJncm91cEJ5RGltZW5zaW9ucyI6bnVsbH0sImZpbHRlciI6eyJjb25kaXRpb24iOiJBTkQiLCJydWxlcyI6W3siY29uZGl0aW9uIjoiT1IiLCJydWxlcyI6W3siZmllbGQiOiJDT1VOVEVSX0dST1VQX0lEIiwidmFsdWUiOiJFUENfQ0dfMSIsInR5cGUiOiJzZWxlY3RvciJ9XX0seyJjb25kaXRpb24iOiJPUiIsInJ1bGVzIjpbeyJpZCI6IkVQQ19DXzEiLCJ2YWx1ZSI6Ii0yMTQ3NDgzNjQ4IiwidHlwZSI6ImJvdW5kIn0seyJpZCI6IkVQQ19DXzIiLCJ2YWx1ZSI6Ii0yMTQ3NDgzNjQ4IiwidHlwZSI6ImJvdW5kIn1dfV19LCJzYW1wbGluZ1BlcmlvZCI6bnVsbCwiaW50ZXJ2YWxzIjoiTGFzdCA2IGhvdXJzIiwicGFnaW5hdGlvbiI6eyJwYWdlbnVtYmVyIjoxLCJwYWdlc2l6ZSI6MTAwMDAsInBhZ2luZ1NwZWMiOm51bGx9LCJncmFudWxhcml0eSI6IkFMTCIsInJlcG9ydERhdGFUeXBlIjoicmF3IiwiZmlsdGVyTWFwIjp7IkVQQ19QXzEiOlsiTU1FMDAxV1ZOIl19LCJjb3VudGVyR3JvdXBzV2l0aENvdW50ZXJBbmRQcm9wZXJ0aWVzIjpbeyJjb3VudGVyR3JvdXBJZCI6IkVQQ19DR18xIiwiY291bnRlckdyb3VwRGV0YWlscyI6bnVsbCwiZGV2aWNlVHlwZSI6bnVsbCwibmVMZXZlbCI6bnVsbCwiY2dTb3VyY2UiOm51bGwsImNvdW50ZXJMaXN0IjpbeyJhZ2dyZWdhdGlvbiI6bnVsbCwiYWdncmVnYXRpb25MaXN0IjpudWxsLCJjb3VudGVyS2V5Ijp7ImNvdW50ZXJJZCI6IkVQQ19DXzEiLCJjb3VudGVyR3JvdXBUcmFucyI6bnVsbH0sImRpc3BsYXlOYW1lIjoiQ29yZSBtYXhpbXVtIENQVSIsImNvdW50ZXJVbml0IjoiJSIsImNvdW50ZXJEZXNjcmlwdGlvbiI6IkNvcmUgbWF4aW11bSBDUFUgb2NjdXBhdGlvbiByYXRpbyIsImNvdW50ZXJUeXBlIjoiQ291bnRlciIsImVuYWJsZWQiOm51bGwsInNvdXJjZU5hbWUiOm51bGwsImZvcm11bGEiOm51bGx9LHsiYWdncmVnYXRpb24iOm51bGwsImFnZ3JlZ2F0aW9uTGlzdCI6bnVsbCwiY291bnRlcktleSI6eyJjb3VudGVySWQiOiJFUENfQ18yIiwiY291bnRlckdyb3VwVHJhbnMiOm51bGx9LCJkaXNwbGF5TmFtZSI6IkNvcmUgQXZnIENQVSBvY2N1cGF0aW9uIHJhdGlvIiwiY291bnRlclVuaXQiOiIlIiwiY291bnRlckRlc2NyaXB0aW9uIjoiQ29yZSBhdmVyYWdlIENQVSBvY2N1cGF0aW9uIHJhdGlvIiwiY291bnRlclR5cGUiOiJDb3VudGVyIiwiZW5hYmxlZCI6bnVsbCwic291cmNlTmFtZSI6bnVsbCwiZm9ybXVsYSI6bnVsbH1dLCJwcm9wZXJ0aWVzIjpbeyJwcm9wZXJ0eUtleSI6eyJwcm9wZXJ0eUlkIjoiRVBDX1BfMSIsImNvdW50ZXJHcm91cHMiOnsiY291bnRlckdyb3VwSWQiOiJFUENfQ0dfMSIsImNvdW50ZXJHcm91cERldGFpbHMiOm51bGwsImRldmljZVR5cGUiOm51bGwsIm5lTGV2ZWwiOm51bGwsImNnU291cmNlIjpudWxsLCJjb3VudGVyTGlzdCI6bnVsbCwicHJvcGVydGllcyI6bnVsbCwia3BpcyI6bnVsbCwiZGlzcGxheU5hbWUiOm51bGx9fSwicHJvcGVydHlOYW1lIjoiTU1FX05BTUUiLCJwcm9wZXJ0eVZhbHVlcyI6IntcInZhbHVlc1wiOltcIk1NRTAwMUNST1wiLFwiTU1FMDAxTERTXCIsXCJNTUUwMDFMVE5cIixcIk1NRTAwMU1GRFwiLFwiTU1FMDAxV1ZOXCIsXCJNTUUwMDJCS1RcIixcIk1NRTAwMkNST1wiLFwiTU1FMDAyTERTXCIsXCJNTUUwMDJMVE5cIixcIk1NRTAwMk1GRFwiLFwiTU1FMDAyV1ZOXCIsXCJNTUUwMDFFTkZcIixcIk1NRTAwMVBSU1wiLFwiTU1FMDAxQktUXCJdfSIsInNlbGVjdGVkVmFsdWVzIjpbIk1NRTAwMVdWTiJdfSx7InByb3BlcnR5S2V5Ijp7InByb3BlcnR5SWQiOiJFUENfUF81IiwiY291bnRlckdyb3VwcyI6eyJjb3VudGVyR3JvdXBJZCI6IkVQQ19DR18xIiwiY291bnRlckdyb3VwRGV0YWlscyI6bnVsbCwiZGV2aWNlVHlwZSI6bnVsbCwibmVMZXZlbCI6bnVsbCwiY2dTb3VyY2UiOm51bGwsImNvdW50ZXJMaXN0IjpudWxsLCJwcm9wZXJ0aWVzIjpudWxsLCJrcGlzIjpudWxsLCJkaXNwbGF5TmFtZSI6bnVsbH19LCJwcm9wZXJ0eU5hbWUiOiJORVRXT1JLX05BTUUiLCJwcm9wZXJ0eVZhbHVlcyI6Im51bGwiLCJzZWxlY3RlZFZhbHVlcyI6W119XSwia3BpcyI6bnVsbCwiZGlzcGxheU5hbWUiOiJIV0lfTU1FX0NPUkVDUFVSRVNDIn1dfQ=="
  //                       }
  //                     ]
  //                   }
  //                 ]
  //               }
  //             ],
  //             "applicableProfiles": []
  //           },
  //           {
  //             "profileId": 5,
  //             "profileName": "Standard User",
  //             "communityString": "standarduserall",
  //             "dataAccess": "ALL",
  //             "accesses": [
  //               {
  //                 "accessId": 1,
  //                 "accessName": "Dashboard creation",
  //                 "displayName": "Dashboard"
  //               },
  //               {
  //                 "accessId": 2,
  //                 "accessName": "View all Reports",
  //                 "displayName": "My Reports"
  //               }
  //             ],
  //             "dashboards": [
  //               {
  //                 "dashboardId": "C2zBxL",
  //                 "name": "MME Dashboard",
  //                 "type": "common",
  //                 "view": "both",
  //                 "subDashboards": [
  //                   {
  //                     "subDashboardId": "hNsO2b",
  //                     "name": "CPU View",
  //                     "dashboardTemplates": [
  //                       {
  //                         "dashboardtemplateId": "D07jiR2",
  //                         "reportName": "Pawan",
  //                         "reportDetail": "eyJjb25maWd1cmF0aW9uIjp7ImF0dHJpYnV0ZXMiOm51bGwsInByb3BlcnRpZXMiOm51bGwsIm1ldHJpY3MiOlt7ImlkIjoiRVBDX0NfMSIsImFnZ3JlZ2F0aW9uVHlwZSI6IkFWRyJ9LHsiaWQiOiJFUENfQ18yIiwiYWdncmVnYXRpb25UeXBlIjoiTUFYIn1dLCJrcGlNZXRyaWNzIjpudWxsLCJuYW1lIjoiUGF3YW4iLCJ0eXBlIjoiVGFibGUiLCJzdWJUeXBlIjoiVGFibGUiLCJkZXZpY2VUeXBlIjoiQ0dQIiwiZW50aXR5IjpudWxsLCJkaW1lbnNpb25zIjpbeyJuYW1lIjoiQ0dQX05BTUUiLCJkaXNwbGF5TmFtZSI6IkNHUF9OQU1FIiwiaWQiOiJFUENfUF8xIn0seyJuYW1lIjoiTkVUV09SS19OQU1FIiwiZGlzcGxheU5hbWUiOiJORVRXT1JLX05BTUUiLCJpZCI6IkVQQ19QXzUifV0sImNvbnRleHQiOm51bGwsImdyb3VwQnlEaW1lbnNpb25zIjpudWxsfSwiZmlsdGVyIjp7ImNvbmRpdGlvbiI6IkFORCIsInJ1bGVzIjpbeyJjb25kaXRpb24iOiJPUiIsInJ1bGVzIjpbeyJmaWVsZCI6IkNPVU5URVJfR1JPVVBfSUQiLCJ2YWx1ZSI6IkVQQ19DR18zMyIsInR5cGUiOiJzZWxlY3RvciJ9LHsiZmllbGQiOiJDT1VOVEVSX0dST1VQX0lEIiwidmFsdWUiOiJFUENfQ0dfMzYiLCJ0eXBlIjoic2VsZWN0b3IifV19LHsiY29uZGl0aW9uIjoiT1IiLCJydWxlcyI6W3siaWQiOiJFUENfQ18xIiwidmFsdWUiOiItMjE0NzQ4MzY0OCIsInR5cGUiOiJib3VuZCJ9LHsiaWQiOiJFUENfQ18yIiwidmFsdWUiOiItMjE0NzQ4MzY0OCIsInR5cGUiOiJib3VuZCJ9XX1dfSwic2FtcGxpbmdQZXJpb2QiOm51bGwsImludGVydmFscyI6Ikxhc3QgMSBkYXkiLCJwYWdpbmF0aW9uIjp7InBhZ2VudW1iZXIiOjEsInBhZ2VzaXplIjoxMDAwMCwicGFnaW5nU3BlYyI6bnVsbH0sImdyYW51bGFyaXR5IjoiQUxMIiwicmVwb3J0RGF0YVR5cGUiOiJyYXciLCJmaWx0ZXJNYXAiOnsiRVBDX1BfMSI6WyJNTUUwMDFCS1QiLCJNTUUwMDFDUk8iXX0sImNvdW50ZXJHcm91cHNXaXRoQ291bnRlckFuZFByb3BlcnRpZXMiOlt7ImNvdW50ZXJHcm91cElkIjoiRVBDX0NHXzMzIiwiY291bnRlckdyb3VwRGV0YWlscyI6bnVsbCwiZGV2aWNlVHlwZSI6bnVsbCwibmVMZXZlbCI6bnVsbCwiY2dTb3VyY2UiOm51bGwsImNvdW50ZXJMaXN0IjpbeyJhZ2dyZWdhdGlvbiI6bnVsbCwiYWdncmVnYXRpb25MaXN0IjpudWxsLCJjb3VudGVyS2V5Ijp7ImNvdW50ZXJJZCI6IkVQQ19DXzEiLCJjb3VudGVyR3JvdXBUcmFucyI6bnVsbH0sImRpc3BsYXlOYW1lIjoiTWVhbiBDUFUgTG9hZCIsImNvdW50ZXJVbml0IjoiJSIsImNvdW50ZXJEZXNjcmlwdGlvbiI6Ik1lYW4gQ1BVIExvYWQiLCJjb3VudGVyVHlwZSI6IkNvdW50ZXIiLCJlbmFibGVkIjpudWxsLCJzb3VyY2VOYW1lIjpudWxsLCJmb3JtdWxhIjpudWxsfSx7ImFnZ3JlZ2F0aW9uIjpudWxsLCJhZ2dyZWdhdGlvbkxpc3QiOm51bGwsImNvdW50ZXJLZXkiOnsiY291bnRlcklkIjoiRVBDX0NfMiIsImNvdW50ZXJHcm91cFRyYW5zIjpudWxsfSwiZGlzcGxheU5hbWUiOiJNYXhpbXVtIENQVSBMb2FkIiwiY291bnRlclVuaXQiOiIlIiwiY291bnRlckRlc2NyaXB0aW9uIjoiTWF4aW11bSBDUFUgTG9hZCIsImNvdW50ZXJUeXBlIjoiQ291bnRlciIsImVuYWJsZWQiOm51bGwsInNvdXJjZU5hbWUiOm51bGwsImZvcm11bGEiOm51bGx9XSwicHJvcGVydGllcyI6W3sicHJvcGVydHlLZXkiOnsicHJvcGVydHlJZCI6IkVQQ19QXzEiLCJjb3VudGVyR3JvdXBzIjp7ImNvdW50ZXJHcm91cElkIjoiRVBDX0NHXzMzIiwiY291bnRlckdyb3VwRGV0YWlscyI6bnVsbCwiZGV2aWNlVHlwZSI6bnVsbCwibmVMZXZlbCI6bnVsbCwiY2dTb3VyY2UiOm51bGwsImNvdW50ZXJMaXN0IjpudWxsLCJwcm9wZXJ0aWVzIjpudWxsLCJrcGlzIjpudWxsLCJkaXNwbGF5TmFtZSI6bnVsbH19LCJwcm9wZXJ0eU5hbWUiOiJDR1BfTkFNRSIsInByb3BlcnR5VmFsdWVzIjoie1widmFsdWVzXCI6W1wiTU1FMDAxQktUXCIsXCJNTUUwMDFDUk9cIixcIk1NRTAwMUxEU1wiLFwiTU1FMDAxTFROXCIsXCJNTUUwMDFNRkRcIixcIk1NRTAwMVdWTlwiLFwiTU1FMDAyQ1JPXCIsXCJNTUUwMDJMRFNcIixcIk1NRTAwMkxUTlwiLFwiTU1FMDAyV1ZOXCIsXCJQU0hDUk8xQ1wiLFwiUFNIS1QwM0NcIixcIlBTSExEMDJDXCIsXCJQU0hMVDAxQ1wiLFwiUFNITUYwMUNcIixcIlBTSFdWMDJDXCIsXCJQU0hXVjAzQ1wiXX0iLCJzZWxlY3RlZFZhbHVlcyI6WyJNTUUwMDFCS1QiLCJNTUUwMDFDUk8iXX0seyJwcm9wZXJ0eUtleSI6eyJwcm9wZXJ0eUlkIjoiRVBDX1BfNSIsImNvdW50ZXJHcm91cHMiOnsiY291bnRlckdyb3VwSWQiOiJFUENfQ0dfMzMiLCJjb3VudGVyR3JvdXBEZXRhaWxzIjpudWxsLCJkZXZpY2VUeXBlIjpudWxsLCJuZUxldmVsIjpudWxsLCJjZ1NvdXJjZSI6bnVsbCwiY291bnRlckxpc3QiOm51bGwsInByb3BlcnRpZXMiOm51bGwsImtwaXMiOm51bGwsImRpc3BsYXlOYW1lIjpudWxsfX0sInByb3BlcnR5TmFtZSI6Ik5FVFdPUktfTkFNRSIsInByb3BlcnR5VmFsdWVzIjoibnVsbCIsInNlbGVjdGVkVmFsdWVzIjpbXX1dLCJrcGlzIjpudWxsLCJkaXNwbGF5TmFtZSI6IkhXSV9DR1BfQ1BVX0xPQUQifSx7ImNvdW50ZXJHcm91cElkIjoiRVBDX0NHXzM2IiwiY291bnRlckdyb3VwRGV0YWlscyI6bnVsbCwiZGV2aWNlVHlwZSI6bnVsbCwibmVMZXZlbCI6bnVsbCwiY2dTb3VyY2UiOm51bGwsImNvdW50ZXJMaXN0IjpbeyJhZ2dyZWdhdGlvbiI6bnVsbCwiYWdncmVnYXRpb25MaXN0IjpudWxsLCJjb3VudGVyS2V5Ijp7ImNvdW50ZXJJZCI6IkVQQ19DXzIiLCJjb3VudGVyR3JvdXBUcmFucyI6bnVsbH0sImRpc3BsYXlOYW1lIjoiVXNlZCBNZW1vcnkgU2l6ZSIsImNvdW50ZXJVbml0IjoiTUIiLCJjb3VudGVyRGVzY3JpcHRpb24iOiJVc2VkIE1lbW9yeSBTaXplIiwiY291bnRlclR5cGUiOiJDb3VudGVyIiwiZW5hYmxlZCI6bnVsbCwic291cmNlTmFtZSI6bnVsbCwiZm9ybXVsYSI6bnVsbH1dLCJwcm9wZXJ0aWVzIjpbeyJwcm9wZXJ0eUtleSI6eyJwcm9wZXJ0eUlkIjoiRVBDX1BfMSIsImNvdW50ZXJHcm91cHMiOnsiY291bnRlckdyb3VwSWQiOiJFUENfQ0dfMzYiLCJjb3VudGVyR3JvdXBEZXRhaWxzIjpudWxsLCJkZXZpY2VUeXBlIjpudWxsLCJuZUxldmVsIjpudWxsLCJjZ1NvdXJjZSI6bnVsbCwiY291bnRlckxpc3QiOm51bGwsInByb3BlcnRpZXMiOm51bGwsImtwaXMiOm51bGwsImRpc3BsYXlOYW1lIjpudWxsfX0sInByb3BlcnR5TmFtZSI6IkNHUF9OQU1FIiwicHJvcGVydHlWYWx1ZXMiOiJ7XCJ2YWx1ZXNcIjpbXCJNTUUwMDFCS1RcIixcIk1NRTAwMUNST1wiLFwiTU1FMDAxTERTXCIsXCJNTUUwMDFMVE5cIixcIk1NRTAwMU1GRFwiLFwiTU1FMDAxV1ZOXCIsXCJNTUUwMDJDUk9cIixcIk1NRTAwMkxEU1wiLFwiTU1FMDAyTFROXCIsXCJNTUUwMDJXVk5cIixcIlBTSENSTzFDXCIsXCJQU0hLVDAzQ1wiLFwiUFNITEQwMkNcIixcIlBTSExUMDFDXCIsXCJQU0hNRjAxQ1wiLFwiUFNIV1YwMkNcIixcIlBTSFdWMDNDXCJdfSIsInNlbGVjdGVkVmFsdWVzIjpbIk1NRTAwMUJLVCIsIk1NRTAwMUNSTyJdfSx7InByb3BlcnR5S2V5Ijp7InByb3BlcnR5SWQiOiJFUENfUF81IiwiY291bnRlckdyb3VwcyI6eyJjb3VudGVyR3JvdXBJZCI6IkVQQ19DR18zNiIsImNvdW50ZXJHcm91cERldGFpbHMiOm51bGwsImRldmljZVR5cGUiOm51bGwsIm5lTGV2ZWwiOm51bGwsImNnU291cmNlIjpudWxsLCJjb3VudGVyTGlzdCI6bnVsbCwicHJvcGVydGllcyI6bnVsbCwia3BpcyI6bnVsbCwiZGlzcGxheU5hbWUiOm51bGx9fSwicHJvcGVydHlOYW1lIjoiTkVUV09SS19OQU1FIiwicHJvcGVydHlWYWx1ZXMiOiJudWxsIiwic2VsZWN0ZWRWYWx1ZXMiOltdfV0sImtwaXMiOm51bGwsImRpc3BsYXlOYW1lIjoiSFdJX0NHUF9NRU0ifV19"
  //                       },
  //                       {
  //                         "dashboardtemplateId": "H2HwaWv",
  //                         "reportName": "Aval",
  //                         "reportDetail": "eyJjb25maWd1cmF0aW9uIjp7ImF0dHJpYnV0ZXMiOm51bGwsInByb3BlcnRpZXMiOm51bGwsIm1ldHJpY3MiOlt7ImlkIjoiRVBDX0NfMSIsImFnZ3JlZ2F0aW9uVHlwZSI6IkFWRyJ9XSwia3BpTWV0cmljcyI6bnVsbCwibmFtZSI6IkF2YWwiLCJ0eXBlIjoiR3JhcGgiLCJzdWJUeXBlIjoiQmFyIiwiZGV2aWNlVHlwZSI6IkNHUCIsImVudGl0eSI6bnVsbCwiZGltZW5zaW9ucyI6W3sibmFtZSI6IkNHUF9OQU1FIiwiZGlzcGxheU5hbWUiOiJDR1BfTkFNRSIsImlkIjoiRVBDX1BfMSJ9LHsibmFtZSI6Ik5FVFdPUktfTkFNRSIsImRpc3BsYXlOYW1lIjoiTkVUV09SS19OQU1FIiwiaWQiOiJFUENfUF81In0seyJuYW1lIjoiQk9BUkRfTE9DQVRJT04iLCJkaXNwbGF5TmFtZSI6IkJPQVJEX0xPQ0FUSU9OIiwiaWQiOiJFUENfUF8yIn1dLCJjb250ZXh0IjpudWxsLCJncm91cEJ5RGltZW5zaW9ucyI6bnVsbH0sImZpbHRlciI6eyJjb25kaXRpb24iOiJBTkQiLCJydWxlcyI6W3siY29uZGl0aW9uIjoiT1IiLCJydWxlcyI6W3siZmllbGQiOiJDT1VOVEVSX0dST1VQX0lEIiwidmFsdWUiOiJFUENfQ0dfMzMiLCJ0eXBlIjoic2VsZWN0b3IifV19LHsiY29uZGl0aW9uIjoiT1IiLCJydWxlcyI6W3siaWQiOiJFUENfQ18xIiwidmFsdWUiOiItMjE0NzQ4MzY0OCIsInR5cGUiOiJib3VuZCJ9XX1dfSwic2FtcGxpbmdQZXJpb2QiOm51bGwsImludGVydmFscyI6Ikxhc3QgMSB3ZWVrIiwicGFnaW5hdGlvbiI6eyJwYWdlbnVtYmVyIjoxLCJwYWdlc2l6ZSI6MTAwMDAsInBhZ2luZ1NwZWMiOm51bGx9LCJncmFudWxhcml0eSI6IkFMTCIsInJlcG9ydERhdGFUeXBlIjoicmF3IiwiZmlsdGVyTWFwIjp7IkVQQ19QXzEiOlsiTU1FMDAxQktUIl19LCJjb3VudGVyR3JvdXBzV2l0aENvdW50ZXJBbmRQcm9wZXJ0aWVzIjpbeyJjb3VudGVyR3JvdXBJZCI6IkVQQ19DR18zMyIsImNvdW50ZXJHcm91cERldGFpbHMiOm51bGwsImRldmljZVR5cGUiOm51bGwsIm5lTGV2ZWwiOm51bGwsImNnU291cmNlIjpudWxsLCJjb3VudGVyTGlzdCI6W3siYWdncmVnYXRpb24iOm51bGwsImFnZ3JlZ2F0aW9uTGlzdCI6bnVsbCwiY291bnRlcktleSI6eyJjb3VudGVySWQiOiJFUENfQ18xIiwiY291bnRlckdyb3VwVHJhbnMiOm51bGx9LCJkaXNwbGF5TmFtZSI6Ik1lYW4gQ1BVIExvYWQiLCJjb3VudGVyVW5pdCI6IiUiLCJjb3VudGVyRGVzY3JpcHRpb24iOiJNZWFuIENQVSBMb2FkIiwiY291bnRlclR5cGUiOiJDb3VudGVyIiwiZW5hYmxlZCI6bnVsbCwic291cmNlTmFtZSI6bnVsbCwiZm9ybXVsYSI6bnVsbH1dLCJwcm9wZXJ0aWVzIjpbeyJwcm9wZXJ0eUtleSI6eyJwcm9wZXJ0eUlkIjoiRVBDX1BfMSIsImNvdW50ZXJHcm91cHMiOnsiY291bnRlckdyb3VwSWQiOiJFUENfQ0dfMzMiLCJjb3VudGVyR3JvdXBEZXRhaWxzIjpudWxsLCJkZXZpY2VUeXBlIjpudWxsLCJuZUxldmVsIjpudWxsLCJjZ1NvdXJjZSI6bnVsbCwiY291bnRlckxpc3QiOm51bGwsInByb3BlcnRpZXMiOm51bGwsImtwaXMiOm51bGwsImRpc3BsYXlOYW1lIjpudWxsfX0sInByb3BlcnR5TmFtZSI6IkNHUF9OQU1FIiwicHJvcGVydHlWYWx1ZXMiOiJ7XCJ2YWx1ZXNcIjpbXCJNTUUwMDFCS1RcIixcIk1NRTAwMUNST1wiLFwiTU1FMDAxTERTXCIsXCJNTUUwMDFMVE5cIixcIk1NRTAwMU1GRFwiLFwiTU1FMDAxV1ZOXCIsXCJNTUUwMDJDUk9cIixcIk1NRTAwMkxEU1wiLFwiTU1FMDAyTFROXCIsXCJNTUUwMDJXVk5cIixcIlBTSENSTzFDXCIsXCJQU0hLVDAzQ1wiLFwiUFNITEQwMkNcIixcIlBTSExUMDFDXCIsXCJQU0hNRjAxQ1wiLFwiUFNIV1YwMkNcIixcIlBTSFdWMDNDXCJdfSIsInNlbGVjdGVkVmFsdWVzIjpbIk1NRTAwMUJLVCJdfSx7InByb3BlcnR5S2V5Ijp7InByb3BlcnR5SWQiOiJFUENfUF8yIiwiY291bnRlckdyb3VwcyI6eyJjb3VudGVyR3JvdXBJZCI6IkVQQ19DR18zMyIsImNvdW50ZXJHcm91cERldGFpbHMiOm51bGwsImRldmljZVR5cGUiOm51bGwsIm5lTGV2ZWwiOm51bGwsImNnU291cmNlIjpudWxsLCJjb3VudGVyTGlzdCI6bnVsbCwicHJvcGVydGllcyI6bnVsbCwia3BpcyI6bnVsbCwiZGlzcGxheU5hbWUiOm51bGx9fSwicHJvcGVydHlOYW1lIjoiQk9BUkRfTE9DQVRJT04iLCJwcm9wZXJ0eVZhbHVlcyI6Im51bGwiLCJzZWxlY3RlZFZhbHVlcyI6W119LHsicHJvcGVydHlLZXkiOnsicHJvcGVydHlJZCI6IkVQQ19QXzUiLCJjb3VudGVyR3JvdXBzIjp7ImNvdW50ZXJHcm91cElkIjoiRVBDX0NHXzMzIiwiY291bnRlckdyb3VwRGV0YWlscyI6bnVsbCwiZGV2aWNlVHlwZSI6bnVsbCwibmVMZXZlbCI6bnVsbCwiY2dTb3VyY2UiOm51bGwsImNvdW50ZXJMaXN0IjpudWxsLCJwcm9wZXJ0aWVzIjpudWxsLCJrcGlzIjpudWxsLCJkaXNwbGF5TmFtZSI6bnVsbH19LCJwcm9wZXJ0eU5hbWUiOiJORVRXT1JLX05BTUUiLCJwcm9wZXJ0eVZhbHVlcyI6Im51bGwiLCJzZWxlY3RlZFZhbHVlcyI6W119XSwia3BpcyI6bnVsbCwiZGlzcGxheU5hbWUiOiJIV0lfQ0dQX0NQVV9MT0FEIn1dfQ=="
  //                       },
  //                       {
  //                         "dashboardtemplateId": "Q2AdOzc",
  //                         "reportName": "Network issue analysis for Location1",
  //                         "reportDetail": "eyJjb25maWd1cmF0aW9uIjp7ImF0dHJpYnV0ZXMiOm51bGwsInByb3BlcnRpZXMiOm51bGwsIm1ldHJpY3MiOlt7ImlkIjoiRVBDX0NfMSIsImFnZ3JlZ2F0aW9uVHlwZSI6IkFWRyJ9LHsiaWQiOiJFUENfQ18yIiwiYWdncmVnYXRpb25UeXBlIjoiTUFYIn0seyJpZCI6IkVQQ19DXzkiLCJhZ2dyZWdhdGlvblR5cGUiOiJTVU0ifV0sImtwaU1ldHJpY3MiOm51bGwsIm5hbWUiOiJOZXR3b3JrIGlzc3VlIGFuYWx5c2lzIGZvciBMb2NhdGlvbjEiLCJ0eXBlIjoiVGFibGUiLCJzdWJUeXBlIjoiVGFibGUiLCJkZXZpY2VUeXBlIjoiQ0dQIiwiZW50aXR5IjpudWxsLCJkaW1lbnNpb25zIjpbeyJuYW1lIjoiTkVUV09SS19OQU1FIiwiZGlzcGxheU5hbWUiOiJORVRXT1JLX05BTUUiLCJpZCI6IkVQQ19QXzUifSx7Im5hbWUiOiJCT0FSRF9MT0NBVElPTiIsImRpc3BsYXlOYW1lIjoiQk9BUkRfTE9DQVRJT04iLCJpZCI6IkVQQ19QXzIifSx7Im5hbWUiOiJDR1BfTkFNRSIsImRpc3BsYXlOYW1lIjoiQ0dQX05BTUUiLCJpZCI6IkVQQ19QXzEifV0sImNvbnRleHQiOm51bGwsImdyb3VwQnlEaW1lbnNpb25zIjpudWxsfSwiZmlsdGVyIjp7ImNvbmRpdGlvbiI6IkFORCIsInJ1bGVzIjpbeyJjb25kaXRpb24iOiJPUiIsInJ1bGVzIjpbeyJmaWVsZCI6IkNPVU5URVJfR1JPVVBfSUQiLCJ2YWx1ZSI6IkVQQ19DR18zMyIsInR5cGUiOiJzZWxlY3RvciJ9LHsiZmllbGQiOiJDT1VOVEVSX0dST1VQX0lEIiwidmFsdWUiOiJFUENfQ0dfMzUiLCJ0eXBlIjoic2VsZWN0b3IifV19LHsiY29uZGl0aW9uIjoiT1IiLCJydWxlcyI6W3siaWQiOiJFUENfQ18xIiwidmFsdWUiOiItMjE0NzQ4MzY0OCIsInR5cGUiOiJib3VuZCJ9LHsiaWQiOiJFUENfQ18yIiwidmFsdWUiOiItMjE0NzQ4MzY0OCIsInR5cGUiOiJib3VuZCJ9LHsiaWQiOiJFUENfQ185IiwidmFsdWUiOiItMjE0NzQ4MzY0OCIsInR5cGUiOiJib3VuZCJ9XX1dfSwic2FtcGxpbmdQZXJpb2QiOm51bGwsImludGVydmFscyI6IjIwMTgtMDQtMDJUMDQ6MjU6MDAuMDAwWi8yMDE4LTA0LTA0VDEzOjQ0OjAwLjAwMFoiLCJwYWdpbmF0aW9uIjp7InBhZ2VudW1iZXIiOjEsInBhZ2VzaXplIjoxMDAwMCwicGFnaW5nU3BlYyI6bnVsbH0sImdyYW51bGFyaXR5IjoiQUxMIiwicmVwb3J0RGF0YVR5cGUiOiJyYXciLCJmaWx0ZXJNYXAiOnsiRVBDX1BfMSI6WyJNTUUwMDFCS1QiLCJNTUUwMDFDUk8iLCJNTUUwMDFMRFMiLCJNTUUwMDFMVE4iXX0sImNvdW50ZXJHcm91cHNXaXRoQ291bnRlckFuZFByb3BlcnRpZXMiOlt7ImNvdW50ZXJHcm91cElkIjoiRVBDX0NHXzMzIiwiY291bnRlckdyb3VwRGV0YWlscyI6bnVsbCwiZGV2aWNlVHlwZSI6bnVsbCwibmVMZXZlbCI6bnVsbCwiY2dTb3VyY2UiOm51bGwsImNvdW50ZXJMaXN0IjpbeyJhZ2dyZWdhdGlvbiI6bnVsbCwiYWdncmVnYXRpb25MaXN0IjpudWxsLCJjb3VudGVyS2V5Ijp7ImNvdW50ZXJJZCI6IkVQQ19DXzEiLCJjb3VudGVyR3JvdXBUcmFucyI6bnVsbH0sImRpc3BsYXlOYW1lIjoiTWVhbiBDUFUgTG9hZCIsImNvdW50ZXJVbml0IjoiJSIsImNvdW50ZXJEZXNjcmlwdGlvbiI6Ik1lYW4gQ1BVIExvYWQiLCJjb3VudGVyVHlwZSI6IkNvdW50ZXIiLCJlbmFibGVkIjpudWxsLCJzb3VyY2VOYW1lIjpudWxsLCJmb3JtdWxhIjpudWxsfSx7ImFnZ3JlZ2F0aW9uIjpudWxsLCJhZ2dyZWdhdGlvbkxpc3QiOm51bGwsImNvdW50ZXJLZXkiOnsiY291bnRlcklkIjoiRVBDX0NfMiIsImNvdW50ZXJHcm91cFRyYW5zIjpudWxsfSwiZGlzcGxheU5hbWUiOiJNYXhpbXVtIENQVSBMb2FkIiwiY291bnRlclVuaXQiOiIlIiwiY291bnRlckRlc2NyaXB0aW9uIjoiTWF4aW11bSBDUFUgTG9hZCIsImNvdW50ZXJUeXBlIjoiQ291bnRlciIsImVuYWJsZWQiOm51bGwsInNvdXJjZU5hbWUiOm51bGwsImZvcm11bGEiOm51bGx9XSwicHJvcGVydGllcyI6W3sicHJvcGVydHlLZXkiOnsicHJvcGVydHlJZCI6IkVQQ19QXzEiLCJjb3VudGVyR3JvdXBzIjp7ImNvdW50ZXJHcm91cElkIjoiRVBDX0NHXzMzIiwiY291bnRlckdyb3VwRGV0YWlscyI6bnVsbCwiZGV2aWNlVHlwZSI6bnVsbCwibmVMZXZlbCI6bnVsbCwiY2dTb3VyY2UiOm51bGwsImNvdW50ZXJMaXN0IjpudWxsLCJwcm9wZXJ0aWVzIjpudWxsLCJrcGlzIjpudWxsLCJkaXNwbGF5TmFtZSI6bnVsbH19LCJwcm9wZXJ0eU5hbWUiOiJDR1BfTkFNRSIsInByb3BlcnR5VmFsdWVzIjoie1widmFsdWVzXCI6W1wiTU1FMDAxQktUXCIsXCJNTUUwMDFDUk9cIixcIk1NRTAwMUxEU1wiLFwiTU1FMDAxTFROXCIsXCJNTUUwMDFNRkRcIixcIk1NRTAwMVdWTlwiLFwiTU1FMDAyQ1JPXCIsXCJNTUUwMDJMRFNcIixcIk1NRTAwMkxUTlwiLFwiTU1FMDAyV1ZOXCIsXCJQU0hDUk8xQ1wiLFwiUFNIS1QwM0NcIixcIlBTSExEMDJDXCIsXCJQU0hMVDAxQ1wiLFwiUFNITUYwMUNcIixcIlBTSFdWMDJDXCIsXCJQU0hXVjAzQ1wiXX0iLCJzZWxlY3RlZFZhbHVlcyI6WyJNTUUwMDFCS1QiLCJNTUUwMDFDUk8iLCJNTUUwMDFMRFMiLCJNTUUwMDFMVE4iXX0seyJwcm9wZXJ0eUtleSI6eyJwcm9wZXJ0eUlkIjoiRVBDX1BfMiIsImNvdW50ZXJHcm91cHMiOnsiY291bnRlckdyb3VwSWQiOiJFUENfQ0dfMzMiLCJjb3VudGVyR3JvdXBEZXRhaWxzIjpudWxsLCJkZXZpY2VUeXBlIjpudWxsLCJuZUxldmVsIjpudWxsLCJjZ1NvdXJjZSI6bnVsbCwiY291bnRlckxpc3QiOm51bGwsInByb3BlcnRpZXMiOm51bGwsImtwaXMiOm51bGwsImRpc3BsYXlOYW1lIjpudWxsfX0sInByb3BlcnR5TmFtZSI6IkJPQVJEX0xPQ0FUSU9OIiwicHJvcGVydHlWYWx1ZXMiOiJudWxsIiwic2VsZWN0ZWRWYWx1ZXMiOltdfSx7InByb3BlcnR5S2V5Ijp7InByb3BlcnR5SWQiOiJFUENfUF81IiwiY291bnRlckdyb3VwcyI6eyJjb3VudGVyR3JvdXBJZCI6IkVQQ19DR18zMyIsImNvdW50ZXJHcm91cERldGFpbHMiOm51bGwsImRldmljZVR5cGUiOm51bGwsIm5lTGV2ZWwiOm51bGwsImNnU291cmNlIjpudWxsLCJjb3VudGVyTGlzdCI6bnVsbCwicHJvcGVydGllcyI6bnVsbCwia3BpcyI6bnVsbCwiZGlzcGxheU5hbWUiOm51bGx9fSwicHJvcGVydHlOYW1lIjoiTkVUV09SS19OQU1FIiwicHJvcGVydHlWYWx1ZXMiOiJudWxsIiwic2VsZWN0ZWRWYWx1ZXMiOltdfV0sImtwaXMiOm51bGwsImRpc3BsYXlOYW1lIjoiSFdJX0NHUF9DUFVfTE9BRCJ9LHsiY291bnRlckdyb3VwSWQiOiJFUENfQ0dfMzUiLCJjb3VudGVyR3JvdXBEZXRhaWxzIjpudWxsLCJkZXZpY2VUeXBlIjpudWxsLCJuZUxldmVsIjpudWxsLCJjZ1NvdXJjZSI6bnVsbCwiY291bnRlckxpc3QiOlt7ImFnZ3JlZ2F0aW9uIjpudWxsLCJhZ2dyZWdhdGlvbkxpc3QiOm51bGwsImNvdW50ZXJLZXkiOnsiY291bnRlcklkIjoiRVBDX0NfMSIsImNvdW50ZXJHcm91cFRyYW5zIjpudWxsfSwiZGlzcGxheU5hbWUiOiJTaXplIG9mIFBhY2tldHMgUmVjZWl2ZWQiLCJjb3VudGVyVW5pdCI6ImtpbG9ieXRlcyIsImNvdW50ZXJEZXNjcmlwdGlvbiI6IlNpemUgb2YgUGFja2V0cyBSZWNlaXZlZCBUaHJvdWdoIGEgUG9ydCIsImNvdW50ZXJUeXBlIjoiQ291bnRlciIsImVuYWJsZWQiOm51bGwsInNvdXJjZU5hbWUiOm51bGwsImZvcm11bGEiOm51bGx9LHsiYWdncmVnYXRpb24iOm51bGwsImFnZ3JlZ2F0aW9uTGlzdCI6bnVsbCwiY291bnRlcktleSI6eyJjb3VudGVySWQiOiJFUENfQ185IiwiY291bnRlckdyb3VwVHJhbnMiOm51bGx9LCJkaXNwbGF5TmFtZSI6IlNpemUgb2YgUGFja2V0cyBTZW50IiwiY291bnRlclVuaXQiOiJraWxvYnl0ZXMiLCJjb3VudGVyRGVzY3JpcHRpb24iOiJTaXplIG9mIFBhY2tldHMgU2VudCBUaHJvdWdoIGEgUG9ydCIsImNvdW50ZXJUeXBlIjoiQ291bnRlciIsImVuYWJsZWQiOm51bGwsInNvdXJjZU5hbWUiOm51bGwsImZvcm11bGEiOm51bGx9XSwicHJvcGVydGllcyI6W3sicHJvcGVydHlLZXkiOnsicHJvcGVydHlJZCI6IkVQQ19QXzEiLCJjb3VudGVyR3JvdXBzIjp7ImNvdW50ZXJHcm91cElkIjoiRVBDX0NHXzM1IiwiY291bnRlckdyb3VwRGV0YWlscyI6bnVsbCwiZGV2aWNlVHlwZSI6bnVsbCwibmVMZXZlbCI6bnVsbCwiY2dTb3VyY2UiOm51bGwsImNvdW50ZXJMaXN0IjpudWxsLCJwcm9wZXJ0aWVzIjpudWxsLCJrcGlzIjpudWxsLCJkaXNwbGF5TmFtZSI6bnVsbH19LCJwcm9wZXJ0eU5hbWUiOiJDR1BfTkFNRSIsInByb3BlcnR5VmFsdWVzIjoie1widmFsdWVzXCI6W1wiTU1FMDAxQktUXCIsXCJNTUUwMDFDUk9cIixcIk1NRTAwMUxEU1wiLFwiTU1FMDAxTFROXCIsXCJNTUUwMDFNRkRcIixcIk1NRTAwMVdWTlwiLFwiTU1FMDAyQ1JPXCIsXCJNTUUwMDJMRFNcIixcIk1NRTAwMkxUTlwiLFwiTU1FMDAyV1ZOXCIsXCJQU0hDUk8xQ1wiLFwiUFNIS1QwM0NcIixcIlBTSExEMDJDXCIsXCJQU0hMVDAxQ1wiLFwiUFNITUYwMUNcIixcIlBTSFdWMDJDXCIsXCJQU0hXVjAzQ1wiXX0iLCJzZWxlY3RlZFZhbHVlcyI6WyJNTUUwMDFCS1QiLCJNTUUwMDFDUk8iLCJNTUUwMDFMRFMiXX0seyJwcm9wZXJ0eUtleSI6eyJwcm9wZXJ0eUlkIjoiRVBDX1BfMiIsImNvdW50ZXJHcm91cHMiOnsiY291bnRlckdyb3VwSWQiOiJFUENfQ0dfMzUiLCJjb3VudGVyR3JvdXBEZXRhaWxzIjpudWxsLCJkZXZpY2VUeXBlIjpudWxsLCJuZUxldmVsIjpudWxsLCJjZ1NvdXJjZSI6bnVsbCwiY291bnRlckxpc3QiOm51bGwsInByb3BlcnRpZXMiOm51bGwsImtwaXMiOm51bGwsImRpc3BsYXlOYW1lIjpudWxsfX0sInByb3BlcnR5TmFtZSI6IlBPUlRfTkFNRSIsInByb3BlcnR5VmFsdWVzIjoibnVsbCIsInNlbGVjdGVkVmFsdWVzIjpbXX0seyJwcm9wZXJ0eUtleSI6eyJwcm9wZXJ0eUlkIjoiRVBDX1BfNSIsImNvdW50ZXJHcm91cHMiOnsiY291bnRlckdyb3VwSWQiOiJFUENfQ0dfMzUiLCJjb3VudGVyR3JvdXBEZXRhaWxzIjpudWxsLCJkZXZpY2VUeXBlIjpudWxsLCJuZUxldmVsIjpudWxsLCJjZ1NvdXJjZSI6bnVsbCwiY291bnRlckxpc3QiOm51bGwsInByb3BlcnRpZXMiOm51bGwsImtwaXMiOm51bGwsImRpc3BsYXlOYW1lIjpudWxsfX0sInByb3BlcnR5TmFtZSI6Ik5FVFdPUktfTkFNRSIsInByb3BlcnR5VmFsdWVzIjoibnVsbCIsInNlbGVjdGVkVmFsdWVzIjpbXX1dLCJrcGlzIjpudWxsLCJkaXNwbGF5TmFtZSI6IkhXSV9DR1BfRVRIX1RSQUZGIn1dfQ=="
  //                       }
  //                     ]
  //                   },
  //                   {
  //                     "subDashboardId": "PyAcpB",
  //                     "name": "Traffic",
  //                     "dashboardTemplates": [
  //                       {
  //                         "dashboardtemplateId": "qbCbw4L",
  //                         "reportName": "Aval",
  //                         "reportDetail": "eyJjb25maWd1cmF0aW9uIjp7ImF0dHJpYnV0ZXMiOm51bGwsInByb3BlcnRpZXMiOm51bGwsIm1ldHJpY3MiOlt7ImlkIjoiRVBDX0NfMSIsImFnZ3JlZ2F0aW9uVHlwZSI6IkFWRyJ9XSwia3BpTWV0cmljcyI6bnVsbCwibmFtZSI6IkF2YWwiLCJ0eXBlIjoiR3JhcGgiLCJzdWJUeXBlIjoiQmFyIiwiZGV2aWNlVHlwZSI6IkNHUCIsImVudGl0eSI6bnVsbCwiZGltZW5zaW9ucyI6W3sibmFtZSI6IkNHUF9OQU1FIiwiZGlzcGxheU5hbWUiOiJDR1BfTkFNRSIsImlkIjoiRVBDX1BfMSJ9LHsibmFtZSI6Ik5FVFdPUktfTkFNRSIsImRpc3BsYXlOYW1lIjoiTkVUV09SS19OQU1FIiwiaWQiOiJFUENfUF81In0seyJuYW1lIjoiQk9BUkRfTE9DQVRJT04iLCJkaXNwbGF5TmFtZSI6IkJPQVJEX0xPQ0FUSU9OIiwiaWQiOiJFUENfUF8yIn1dLCJjb250ZXh0IjpudWxsLCJncm91cEJ5RGltZW5zaW9ucyI6bnVsbH0sImZpbHRlciI6eyJjb25kaXRpb24iOiJBTkQiLCJydWxlcyI6W3siY29uZGl0aW9uIjoiT1IiLCJydWxlcyI6W3siZmllbGQiOiJDT1VOVEVSX0dST1VQX0lEIiwidmFsdWUiOiJFUENfQ0dfMzMiLCJ0eXBlIjoic2VsZWN0b3IifV19LHsiY29uZGl0aW9uIjoiT1IiLCJydWxlcyI6W3siaWQiOiJFUENfQ18xIiwidmFsdWUiOiItMjE0NzQ4MzY0OCIsInR5cGUiOiJib3VuZCJ9XX1dfSwic2FtcGxpbmdQZXJpb2QiOm51bGwsImludGVydmFscyI6Ikxhc3QgMSB3ZWVrIiwicGFnaW5hdGlvbiI6eyJwYWdlbnVtYmVyIjoxLCJwYWdlc2l6ZSI6MTAwMDAsInBhZ2luZ1NwZWMiOm51bGx9LCJncmFudWxhcml0eSI6IkFMTCIsInJlcG9ydERhdGFUeXBlIjoicmF3IiwiZmlsdGVyTWFwIjp7IkVQQ19QXzEiOlsiTU1FMDAxQktUIl19LCJjb3VudGVyR3JvdXBzV2l0aENvdW50ZXJBbmRQcm9wZXJ0aWVzIjpbeyJjb3VudGVyR3JvdXBJZCI6IkVQQ19DR18zMyIsImNvdW50ZXJHcm91cERldGFpbHMiOm51bGwsImRldmljZVR5cGUiOm51bGwsIm5lTGV2ZWwiOm51bGwsImNnU291cmNlIjpudWxsLCJjb3VudGVyTGlzdCI6W3siYWdncmVnYXRpb24iOm51bGwsImFnZ3JlZ2F0aW9uTGlzdCI6bnVsbCwiY291bnRlcktleSI6eyJjb3VudGVySWQiOiJFUENfQ18xIiwiY291bnRlckdyb3VwVHJhbnMiOm51bGx9LCJkaXNwbGF5TmFtZSI6Ik1lYW4gQ1BVIExvYWQiLCJjb3VudGVyVW5pdCI6IiUiLCJjb3VudGVyRGVzY3JpcHRpb24iOiJNZWFuIENQVSBMb2FkIiwiY291bnRlclR5cGUiOiJDb3VudGVyIiwiZW5hYmxlZCI6bnVsbCwic291cmNlTmFtZSI6bnVsbCwiZm9ybXVsYSI6bnVsbH1dLCJwcm9wZXJ0aWVzIjpbeyJwcm9wZXJ0eUtleSI6eyJwcm9wZXJ0eUlkIjoiRVBDX1BfMSIsImNvdW50ZXJHcm91cHMiOnsiY291bnRlckdyb3VwSWQiOiJFUENfQ0dfMzMiLCJjb3VudGVyR3JvdXBEZXRhaWxzIjpudWxsLCJkZXZpY2VUeXBlIjpudWxsLCJuZUxldmVsIjpudWxsLCJjZ1NvdXJjZSI6bnVsbCwiY291bnRlckxpc3QiOm51bGwsInByb3BlcnRpZXMiOm51bGwsImtwaXMiOm51bGwsImRpc3BsYXlOYW1lIjpudWxsfX0sInByb3BlcnR5TmFtZSI6IkNHUF9OQU1FIiwicHJvcGVydHlWYWx1ZXMiOiJ7XCJ2YWx1ZXNcIjpbXCJNTUUwMDFCS1RcIixcIk1NRTAwMUNST1wiLFwiTU1FMDAxTERTXCIsXCJNTUUwMDFMVE5cIixcIk1NRTAwMU1GRFwiLFwiTU1FMDAxV1ZOXCIsXCJNTUUwMDJDUk9cIixcIk1NRTAwMkxEU1wiLFwiTU1FMDAyTFROXCIsXCJNTUUwMDJXVk5cIixcIlBTSENSTzFDXCIsXCJQU0hLVDAzQ1wiLFwiUFNITEQwMkNcIixcIlBTSExUMDFDXCIsXCJQU0hNRjAxQ1wiLFwiUFNIV1YwMkNcIixcIlBTSFdWMDNDXCJdfSIsInNlbGVjdGVkVmFsdWVzIjpbIk1NRTAwMUJLVCJdfSx7InByb3BlcnR5S2V5Ijp7InByb3BlcnR5SWQiOiJFUENfUF8yIiwiY291bnRlckdyb3VwcyI6eyJjb3VudGVyR3JvdXBJZCI6IkVQQ19DR18zMyIsImNvdW50ZXJHcm91cERldGFpbHMiOm51bGwsImRldmljZVR5cGUiOm51bGwsIm5lTGV2ZWwiOm51bGwsImNnU291cmNlIjpudWxsLCJjb3VudGVyTGlzdCI6bnVsbCwicHJvcGVydGllcyI6bnVsbCwia3BpcyI6bnVsbCwiZGlzcGxheU5hbWUiOm51bGx9fSwicHJvcGVydHlOYW1lIjoiQk9BUkRfTE9DQVRJT04iLCJwcm9wZXJ0eVZhbHVlcyI6Im51bGwiLCJzZWxlY3RlZFZhbHVlcyI6W119LHsicHJvcGVydHlLZXkiOnsicHJvcGVydHlJZCI6IkVQQ19QXzUiLCJjb3VudGVyR3JvdXBzIjp7ImNvdW50ZXJHcm91cElkIjoiRVBDX0NHXzMzIiwiY291bnRlckdyb3VwRGV0YWlscyI6bnVsbCwiZGV2aWNlVHlwZSI6bnVsbCwibmVMZXZlbCI6bnVsbCwiY2dTb3VyY2UiOm51bGwsImNvdW50ZXJMaXN0IjpudWxsLCJwcm9wZXJ0aWVzIjpudWxsLCJrcGlzIjpudWxsLCJkaXNwbGF5TmFtZSI6bnVsbH19LCJwcm9wZXJ0eU5hbWUiOiJORVRXT1JLX05BTUUiLCJwcm9wZXJ0eVZhbHVlcyI6Im51bGwiLCJzZWxlY3RlZFZhbHVlcyI6W119XSwia3BpcyI6bnVsbCwiZGlzcGxheU5hbWUiOiJIV0lfQ0dQX0NQVV9MT0FEIn1dfQ=="
  //                       },
  //                       {
  //                         "dashboardtemplateId": "tbSzGIC",
  //                         "reportName": "Pawan",
  //                         "reportDetail": "eyJjb25maWd1cmF0aW9uIjp7ImF0dHJpYnV0ZXMiOm51bGwsInByb3BlcnRpZXMiOm51bGwsIm1ldHJpY3MiOlt7ImlkIjoiRVBDX0NfMSIsImFnZ3JlZ2F0aW9uVHlwZSI6IkFWRyJ9LHsiaWQiOiJFUENfQ18yIiwiYWdncmVnYXRpb25UeXBlIjoiTUFYIn1dLCJrcGlNZXRyaWNzIjpudWxsLCJuYW1lIjoiUGF3YW4iLCJ0eXBlIjoiVGFibGUiLCJzdWJUeXBlIjoiVGFibGUiLCJkZXZpY2VUeXBlIjoiQ0dQIiwiZW50aXR5IjpudWxsLCJkaW1lbnNpb25zIjpbeyJuYW1lIjoiQ0dQX05BTUUiLCJkaXNwbGF5TmFtZSI6IkNHUF9OQU1FIiwiaWQiOiJFUENfUF8xIn0seyJuYW1lIjoiTkVUV09SS19OQU1FIiwiZGlzcGxheU5hbWUiOiJORVRXT1JLX05BTUUiLCJpZCI6IkVQQ19QXzUifV0sImNvbnRleHQiOm51bGwsImdyb3VwQnlEaW1lbnNpb25zIjpudWxsfSwiZmlsdGVyIjp7ImNvbmRpdGlvbiI6IkFORCIsInJ1bGVzIjpbeyJjb25kaXRpb24iOiJPUiIsInJ1bGVzIjpbeyJmaWVsZCI6IkNPVU5URVJfR1JPVVBfSUQiLCJ2YWx1ZSI6IkVQQ19DR18zMyIsInR5cGUiOiJzZWxlY3RvciJ9LHsiZmllbGQiOiJDT1VOVEVSX0dST1VQX0lEIiwidmFsdWUiOiJFUENfQ0dfMzYiLCJ0eXBlIjoic2VsZWN0b3IifV19LHsiY29uZGl0aW9uIjoiT1IiLCJydWxlcyI6W3siaWQiOiJFUENfQ18xIiwidmFsdWUiOiItMjE0NzQ4MzY0OCIsInR5cGUiOiJib3VuZCJ9LHsiaWQiOiJFUENfQ18yIiwidmFsdWUiOiItMjE0NzQ4MzY0OCIsInR5cGUiOiJib3VuZCJ9XX1dfSwic2FtcGxpbmdQZXJpb2QiOm51bGwsImludGVydmFscyI6Ikxhc3QgMSBkYXkiLCJwYWdpbmF0aW9uIjp7InBhZ2VudW1iZXIiOjEsInBhZ2VzaXplIjoxMDAwMCwicGFnaW5nU3BlYyI6bnVsbH0sImdyYW51bGFyaXR5IjoiQUxMIiwicmVwb3J0RGF0YVR5cGUiOiJyYXciLCJmaWx0ZXJNYXAiOnsiRVBDX1BfMSI6WyJNTUUwMDFCS1QiLCJNTUUwMDFDUk8iXX0sImNvdW50ZXJHcm91cHNXaXRoQ291bnRlckFuZFByb3BlcnRpZXMiOlt7ImNvdW50ZXJHcm91cElkIjoiRVBDX0NHXzMzIiwiY291bnRlckdyb3VwRGV0YWlscyI6bnVsbCwiZGV2aWNlVHlwZSI6bnVsbCwibmVMZXZlbCI6bnVsbCwiY2dTb3VyY2UiOm51bGwsImNvdW50ZXJMaXN0IjpbeyJhZ2dyZWdhdGlvbiI6bnVsbCwiYWdncmVnYXRpb25MaXN0IjpudWxsLCJjb3VudGVyS2V5Ijp7ImNvdW50ZXJJZCI6IkVQQ19DXzEiLCJjb3VudGVyR3JvdXBUcmFucyI6bnVsbH0sImRpc3BsYXlOYW1lIjoiTWVhbiBDUFUgTG9hZCIsImNvdW50ZXJVbml0IjoiJSIsImNvdW50ZXJEZXNjcmlwdGlvbiI6Ik1lYW4gQ1BVIExvYWQiLCJjb3VudGVyVHlwZSI6IkNvdW50ZXIiLCJlbmFibGVkIjpudWxsLCJzb3VyY2VOYW1lIjpudWxsLCJmb3JtdWxhIjpudWxsfSx7ImFnZ3JlZ2F0aW9uIjpudWxsLCJhZ2dyZWdhdGlvbkxpc3QiOm51bGwsImNvdW50ZXJLZXkiOnsiY291bnRlcklkIjoiRVBDX0NfMiIsImNvdW50ZXJHcm91cFRyYW5zIjpudWxsfSwiZGlzcGxheU5hbWUiOiJNYXhpbXVtIENQVSBMb2FkIiwiY291bnRlclVuaXQiOiIlIiwiY291bnRlckRlc2NyaXB0aW9uIjoiTWF4aW11bSBDUFUgTG9hZCIsImNvdW50ZXJUeXBlIjoiQ291bnRlciIsImVuYWJsZWQiOm51bGwsInNvdXJjZU5hbWUiOm51bGwsImZvcm11bGEiOm51bGx9XSwicHJvcGVydGllcyI6W3sicHJvcGVydHlLZXkiOnsicHJvcGVydHlJZCI6IkVQQ19QXzEiLCJjb3VudGVyR3JvdXBzIjp7ImNvdW50ZXJHcm91cElkIjoiRVBDX0NHXzMzIiwiY291bnRlckdyb3VwRGV0YWlscyI6bnVsbCwiZGV2aWNlVHlwZSI6bnVsbCwibmVMZXZlbCI6bnVsbCwiY2dTb3VyY2UiOm51bGwsImNvdW50ZXJMaXN0IjpudWxsLCJwcm9wZXJ0aWVzIjpudWxsLCJrcGlzIjpudWxsLCJkaXNwbGF5TmFtZSI6bnVsbH19LCJwcm9wZXJ0eU5hbWUiOiJDR1BfTkFNRSIsInByb3BlcnR5VmFsdWVzIjoie1widmFsdWVzXCI6W1wiTU1FMDAxQktUXCIsXCJNTUUwMDFDUk9cIixcIk1NRTAwMUxEU1wiLFwiTU1FMDAxTFROXCIsXCJNTUUwMDFNRkRcIixcIk1NRTAwMVdWTlwiLFwiTU1FMDAyQ1JPXCIsXCJNTUUwMDJMRFNcIixcIk1NRTAwMkxUTlwiLFwiTU1FMDAyV1ZOXCIsXCJQU0hDUk8xQ1wiLFwiUFNIS1QwM0NcIixcIlBTSExEMDJDXCIsXCJQU0hMVDAxQ1wiLFwiUFNITUYwMUNcIixcIlBTSFdWMDJDXCIsXCJQU0hXVjAzQ1wiXX0iLCJzZWxlY3RlZFZhbHVlcyI6WyJNTUUwMDFCS1QiLCJNTUUwMDFDUk8iXX0seyJwcm9wZXJ0eUtleSI6eyJwcm9wZXJ0eUlkIjoiRVBDX1BfNSIsImNvdW50ZXJHcm91cHMiOnsiY291bnRlckdyb3VwSWQiOiJFUENfQ0dfMzMiLCJjb3VudGVyR3JvdXBEZXRhaWxzIjpudWxsLCJkZXZpY2VUeXBlIjpudWxsLCJuZUxldmVsIjpudWxsLCJjZ1NvdXJjZSI6bnVsbCwiY291bnRlckxpc3QiOm51bGwsInByb3BlcnRpZXMiOm51bGwsImtwaXMiOm51bGwsImRpc3BsYXlOYW1lIjpudWxsfX0sInByb3BlcnR5TmFtZSI6Ik5FVFdPUktfTkFNRSIsInByb3BlcnR5VmFsdWVzIjoibnVsbCIsInNlbGVjdGVkVmFsdWVzIjpbXX1dLCJrcGlzIjpudWxsLCJkaXNwbGF5TmFtZSI6IkhXSV9DR1BfQ1BVX0xPQUQifSx7ImNvdW50ZXJHcm91cElkIjoiRVBDX0NHXzM2IiwiY291bnRlckdyb3VwRGV0YWlscyI6bnVsbCwiZGV2aWNlVHlwZSI6bnVsbCwibmVMZXZlbCI6bnVsbCwiY2dTb3VyY2UiOm51bGwsImNvdW50ZXJMaXN0IjpbeyJhZ2dyZWdhdGlvbiI6bnVsbCwiYWdncmVnYXRpb25MaXN0IjpudWxsLCJjb3VudGVyS2V5Ijp7ImNvdW50ZXJJZCI6IkVQQ19DXzIiLCJjb3VudGVyR3JvdXBUcmFucyI6bnVsbH0sImRpc3BsYXlOYW1lIjoiVXNlZCBNZW1vcnkgU2l6ZSIsImNvdW50ZXJVbml0IjoiTUIiLCJjb3VudGVyRGVzY3JpcHRpb24iOiJVc2VkIE1lbW9yeSBTaXplIiwiY291bnRlclR5cGUiOiJDb3VudGVyIiwiZW5hYmxlZCI6bnVsbCwic291cmNlTmFtZSI6bnVsbCwiZm9ybXVsYSI6bnVsbH1dLCJwcm9wZXJ0aWVzIjpbeyJwcm9wZXJ0eUtleSI6eyJwcm9wZXJ0eUlkIjoiRVBDX1BfMSIsImNvdW50ZXJHcm91cHMiOnsiY291bnRlckdyb3VwSWQiOiJFUENfQ0dfMzYiLCJjb3VudGVyR3JvdXBEZXRhaWxzIjpudWxsLCJkZXZpY2VUeXBlIjpudWxsLCJuZUxldmVsIjpudWxsLCJjZ1NvdXJjZSI6bnVsbCwiY291bnRlckxpc3QiOm51bGwsInByb3BlcnRpZXMiOm51bGwsImtwaXMiOm51bGwsImRpc3BsYXlOYW1lIjpudWxsfX0sInByb3BlcnR5TmFtZSI6IkNHUF9OQU1FIiwicHJvcGVydHlWYWx1ZXMiOiJ7XCJ2YWx1ZXNcIjpbXCJNTUUwMDFCS1RcIixcIk1NRTAwMUNST1wiLFwiTU1FMDAxTERTXCIsXCJNTUUwMDFMVE5cIixcIk1NRTAwMU1GRFwiLFwiTU1FMDAxV1ZOXCIsXCJNTUUwMDJDUk9cIixcIk1NRTAwMkxEU1wiLFwiTU1FMDAyTFROXCIsXCJNTUUwMDJXVk5cIixcIlBTSENSTzFDXCIsXCJQU0hLVDAzQ1wiLFwiUFNITEQwMkNcIixcIlBTSExUMDFDXCIsXCJQU0hNRjAxQ1wiLFwiUFNIV1YwMkNcIixcIlBTSFdWMDNDXCJdfSIsInNlbGVjdGVkVmFsdWVzIjpbIk1NRTAwMUJLVCIsIk1NRTAwMUNSTyJdfSx7InByb3BlcnR5S2V5Ijp7InByb3BlcnR5SWQiOiJFUENfUF81IiwiY291bnRlckdyb3VwcyI6eyJjb3VudGVyR3JvdXBJZCI6IkVQQ19DR18zNiIsImNvdW50ZXJHcm91cERldGFpbHMiOm51bGwsImRldmljZVR5cGUiOm51bGwsIm5lTGV2ZWwiOm51bGwsImNnU291cmNlIjpudWxsLCJjb3VudGVyTGlzdCI6bnVsbCwicHJvcGVydGllcyI6bnVsbCwia3BpcyI6bnVsbCwiZGlzcGxheU5hbWUiOm51bGx9fSwicHJvcGVydHlOYW1lIjoiTkVUV09SS19OQU1FIiwicHJvcGVydHlWYWx1ZXMiOiJudWxsIiwic2VsZWN0ZWRWYWx1ZXMiOltdfV0sImtwaXMiOm51bGwsImRpc3BsYXlOYW1lIjoiSFdJX0NHUF9NRU0ifV19"
  //                       }
  //                     ]
  //                   }
  //                 ]
  //               }
  //             ],
  //             "applicableProfiles": []
  //           },
  //           {
  //             "profileId": 4,
  //             "profileName": "Power User",
  //             "communityString": "emobileuseree",
  //             "dataAccess": "EE",
  //             "accesses": [
  //               {
  //                 "accessId": 1,
  //                 "accessName": "Dashboard creation",
  //                 "displayName": "Dashboard"
  //               },
  //               {
  //                 "accessId": 1,
  //                 "accessName": "Dashboard creation",
  //                 "displayName": "Dashboard"
  //               },
  //               {
  //                 "accessId": 1,
  //                 "accessName": "Dashboard creation",
  //                 "displayName": "Dashboard"
  //               },
  //               {
  //                 "accessId": 2,
  //                 "accessName": "View all Reports",
  //                 "displayName": "My Reports"
  //               },
  //               {
  //                 "accessId": 2,
  //                 "accessName": "View all Reports",
  //                 "displayName": "My Reports"
  //               },
  //               {
  //                 "accessId": 2,
  //                 "accessName": "View all Reports",
  //                 "displayName": "My Reports"
  //               },
  //               {
  //                 "accessId": 3,
  //                 "accessName": "Dynamic KPI creation",
  //                 "displayName": "Manage KPI"
  //               },
  //               {
  //                 "accessId": 3,
  //                 "accessName": "Dynamic KPI creation",
  //                 "displayName": "Manage KPI"
  //               },
  //               {
  //                 "accessId": 3,
  //                 "accessName": "Dynamic KPI creation",
  //                 "displayName": "Manage KPI"
  //               },
  //               {
  //                 "accessId": 5,
  //                 "accessName": "Assigning dashboard to specific community",
  //                 "displayName": "Admin Settings"
  //               },
  //               {
  //                 "accessId": 5,
  //                 "accessName": "Assigning dashboard to specific community",
  //                 "displayName": "Admin Settings"
  //               },
  //               {
  //                 "accessId": 5,
  //                 "accessName": "Assigning dashboard to specific community",
  //                 "displayName": "Admin Settings"
  //               }
  //             ],
  //             "dashboards": [
  //               {
  //                 "dashboardId": "C2zBxL",
  //                 "name": "MME Dashboard",
  //                 "type": "common",
  //                 "view": "both",
  //                 "subDashboards": [
  //                   {
  //                     "subDashboardId": "hNsO2b",
  //                     "name": "CPU View",
  //                     "dashboardTemplates": [
  //                       {
  //                         "dashboardtemplateId": "D07jiR2",
  //                         "reportName": "Pawan",
  //                         "reportDetail": "eyJjb25maWd1cmF0aW9uIjp7ImF0dHJpYnV0ZXMiOm51bGwsInByb3BlcnRpZXMiOm51bGwsIm1ldHJpY3MiOlt7ImlkIjoiRVBDX0NfMSIsImFnZ3JlZ2F0aW9uVHlwZSI6IkFWRyJ9LHsiaWQiOiJFUENfQ18yIiwiYWdncmVnYXRpb25UeXBlIjoiTUFYIn1dLCJrcGlNZXRyaWNzIjpudWxsLCJuYW1lIjoiUGF3YW4iLCJ0eXBlIjoiVGFibGUiLCJzdWJUeXBlIjoiVGFibGUiLCJkZXZpY2VUeXBlIjoiQ0dQIiwiZW50aXR5IjpudWxsLCJkaW1lbnNpb25zIjpbeyJuYW1lIjoiQ0dQX05BTUUiLCJkaXNwbGF5TmFtZSI6IkNHUF9OQU1FIiwiaWQiOiJFUENfUF8xIn0seyJuYW1lIjoiTkVUV09SS19OQU1FIiwiZGlzcGxheU5hbWUiOiJORVRXT1JLX05BTUUiLCJpZCI6IkVQQ19QXzUifV0sImNvbnRleHQiOm51bGwsImdyb3VwQnlEaW1lbnNpb25zIjpudWxsfSwiZmlsdGVyIjp7ImNvbmRpdGlvbiI6IkFORCIsInJ1bGVzIjpbeyJjb25kaXRpb24iOiJPUiIsInJ1bGVzIjpbeyJmaWVsZCI6IkNPVU5URVJfR1JPVVBfSUQiLCJ2YWx1ZSI6IkVQQ19DR18zMyIsInR5cGUiOiJzZWxlY3RvciJ9LHsiZmllbGQiOiJDT1VOVEVSX0dST1VQX0lEIiwidmFsdWUiOiJFUENfQ0dfMzYiLCJ0eXBlIjoic2VsZWN0b3IifV19LHsiY29uZGl0aW9uIjoiT1IiLCJydWxlcyI6W3siaWQiOiJFUENfQ18xIiwidmFsdWUiOiItMjE0NzQ4MzY0OCIsInR5cGUiOiJib3VuZCJ9LHsiaWQiOiJFUENfQ18yIiwidmFsdWUiOiItMjE0NzQ4MzY0OCIsInR5cGUiOiJib3VuZCJ9XX1dfSwic2FtcGxpbmdQZXJpb2QiOm51bGwsImludGVydmFscyI6Ikxhc3QgMSBkYXkiLCJwYWdpbmF0aW9uIjp7InBhZ2VudW1iZXIiOjEsInBhZ2VzaXplIjoxMDAwMCwicGFnaW5nU3BlYyI6bnVsbH0sImdyYW51bGFyaXR5IjoiQUxMIiwicmVwb3J0RGF0YVR5cGUiOiJyYXciLCJmaWx0ZXJNYXAiOnsiRVBDX1BfMSI6WyJNTUUwMDFCS1QiLCJNTUUwMDFDUk8iXX0sImNvdW50ZXJHcm91cHNXaXRoQ291bnRlckFuZFByb3BlcnRpZXMiOlt7ImNvdW50ZXJHcm91cElkIjoiRVBDX0NHXzMzIiwiY291bnRlckdyb3VwRGV0YWlscyI6bnVsbCwiZGV2aWNlVHlwZSI6bnVsbCwibmVMZXZlbCI6bnVsbCwiY2dTb3VyY2UiOm51bGwsImNvdW50ZXJMaXN0IjpbeyJhZ2dyZWdhdGlvbiI6bnVsbCwiYWdncmVnYXRpb25MaXN0IjpudWxsLCJjb3VudGVyS2V5Ijp7ImNvdW50ZXJJZCI6IkVQQ19DXzEiLCJjb3VudGVyR3JvdXBUcmFucyI6bnVsbH0sImRpc3BsYXlOYW1lIjoiTWVhbiBDUFUgTG9hZCIsImNvdW50ZXJVbml0IjoiJSIsImNvdW50ZXJEZXNjcmlwdGlvbiI6Ik1lYW4gQ1BVIExvYWQiLCJjb3VudGVyVHlwZSI6IkNvdW50ZXIiLCJlbmFibGVkIjpudWxsLCJzb3VyY2VOYW1lIjpudWxsLCJmb3JtdWxhIjpudWxsfSx7ImFnZ3JlZ2F0aW9uIjpudWxsLCJhZ2dyZWdhdGlvbkxpc3QiOm51bGwsImNvdW50ZXJLZXkiOnsiY291bnRlcklkIjoiRVBDX0NfMiIsImNvdW50ZXJHcm91cFRyYW5zIjpudWxsfSwiZGlzcGxheU5hbWUiOiJNYXhpbXVtIENQVSBMb2FkIiwiY291bnRlclVuaXQiOiIlIiwiY291bnRlckRlc2NyaXB0aW9uIjoiTWF4aW11bSBDUFUgTG9hZCIsImNvdW50ZXJUeXBlIjoiQ291bnRlciIsImVuYWJsZWQiOm51bGwsInNvdXJjZU5hbWUiOm51bGwsImZvcm11bGEiOm51bGx9XSwicHJvcGVydGllcyI6W3sicHJvcGVydHlLZXkiOnsicHJvcGVydHlJZCI6IkVQQ19QXzEiLCJjb3VudGVyR3JvdXBzIjp7ImNvdW50ZXJHcm91cElkIjoiRVBDX0NHXzMzIiwiY291bnRlckdyb3VwRGV0YWlscyI6bnVsbCwiZGV2aWNlVHlwZSI6bnVsbCwibmVMZXZlbCI6bnVsbCwiY2dTb3VyY2UiOm51bGwsImNvdW50ZXJMaXN0IjpudWxsLCJwcm9wZXJ0aWVzIjpudWxsLCJrcGlzIjpudWxsLCJkaXNwbGF5TmFtZSI6bnVsbH19LCJwcm9wZXJ0eU5hbWUiOiJDR1BfTkFNRSIsInByb3BlcnR5VmFsdWVzIjoie1widmFsdWVzXCI6W1wiTU1FMDAxQktUXCIsXCJNTUUwMDFDUk9cIixcIk1NRTAwMUxEU1wiLFwiTU1FMDAxTFROXCIsXCJNTUUwMDFNRkRcIixcIk1NRTAwMVdWTlwiLFwiTU1FMDAyQ1JPXCIsXCJNTUUwMDJMRFNcIixcIk1NRTAwMkxUTlwiLFwiTU1FMDAyV1ZOXCIsXCJQU0hDUk8xQ1wiLFwiUFNIS1QwM0NcIixcIlBTSExEMDJDXCIsXCJQU0hMVDAxQ1wiLFwiUFNITUYwMUNcIixcIlBTSFdWMDJDXCIsXCJQU0hXVjAzQ1wiXX0iLCJzZWxlY3RlZFZhbHVlcyI6WyJNTUUwMDFCS1QiLCJNTUUwMDFDUk8iXX0seyJwcm9wZXJ0eUtleSI6eyJwcm9wZXJ0eUlkIjoiRVBDX1BfNSIsImNvdW50ZXJHcm91cHMiOnsiY291bnRlckdyb3VwSWQiOiJFUENfQ0dfMzMiLCJjb3VudGVyR3JvdXBEZXRhaWxzIjpudWxsLCJkZXZpY2VUeXBlIjpudWxsLCJuZUxldmVsIjpudWxsLCJjZ1NvdXJjZSI6bnVsbCwiY291bnRlckxpc3QiOm51bGwsInByb3BlcnRpZXMiOm51bGwsImtwaXMiOm51bGwsImRpc3BsYXlOYW1lIjpudWxsfX0sInByb3BlcnR5TmFtZSI6Ik5FVFdPUktfTkFNRSIsInByb3BlcnR5VmFsdWVzIjoibnVsbCIsInNlbGVjdGVkVmFsdWVzIjpbXX1dLCJrcGlzIjpudWxsLCJkaXNwbGF5TmFtZSI6IkhXSV9DR1BfQ1BVX0xPQUQifSx7ImNvdW50ZXJHcm91cElkIjoiRVBDX0NHXzM2IiwiY291bnRlckdyb3VwRGV0YWlscyI6bnVsbCwiZGV2aWNlVHlwZSI6bnVsbCwibmVMZXZlbCI6bnVsbCwiY2dTb3VyY2UiOm51bGwsImNvdW50ZXJMaXN0IjpbeyJhZ2dyZWdhdGlvbiI6bnVsbCwiYWdncmVnYXRpb25MaXN0IjpudWxsLCJjb3VudGVyS2V5Ijp7ImNvdW50ZXJJZCI6IkVQQ19DXzIiLCJjb3VudGVyR3JvdXBUcmFucyI6bnVsbH0sImRpc3BsYXlOYW1lIjoiVXNlZCBNZW1vcnkgU2l6ZSIsImNvdW50ZXJVbml0IjoiTUIiLCJjb3VudGVyRGVzY3JpcHRpb24iOiJVc2VkIE1lbW9yeSBTaXplIiwiY291bnRlclR5cGUiOiJDb3VudGVyIiwiZW5hYmxlZCI6bnVsbCwic291cmNlTmFtZSI6bnVsbCwiZm9ybXVsYSI6bnVsbH1dLCJwcm9wZXJ0aWVzIjpbeyJwcm9wZXJ0eUtleSI6eyJwcm9wZXJ0eUlkIjoiRVBDX1BfMSIsImNvdW50ZXJHcm91cHMiOnsiY291bnRlckdyb3VwSWQiOiJFUENfQ0dfMzYiLCJjb3VudGVyR3JvdXBEZXRhaWxzIjpudWxsLCJkZXZpY2VUeXBlIjpudWxsLCJuZUxldmVsIjpudWxsLCJjZ1NvdXJjZSI6bnVsbCwiY291bnRlckxpc3QiOm51bGwsInByb3BlcnRpZXMiOm51bGwsImtwaXMiOm51bGwsImRpc3BsYXlOYW1lIjpudWxsfX0sInByb3BlcnR5TmFtZSI6IkNHUF9OQU1FIiwicHJvcGVydHlWYWx1ZXMiOiJ7XCJ2YWx1ZXNcIjpbXCJNTUUwMDFCS1RcIixcIk1NRTAwMUNST1wiLFwiTU1FMDAxTERTXCIsXCJNTUUwMDFMVE5cIixcIk1NRTAwMU1GRFwiLFwiTU1FMDAxV1ZOXCIsXCJNTUUwMDJDUk9cIixcIk1NRTAwMkxEU1wiLFwiTU1FMDAyTFROXCIsXCJNTUUwMDJXVk5cIixcIlBTSENSTzFDXCIsXCJQU0hLVDAzQ1wiLFwiUFNITEQwMkNcIixcIlBTSExUMDFDXCIsXCJQU0hNRjAxQ1wiLFwiUFNIV1YwMkNcIixcIlBTSFdWMDNDXCJdfSIsInNlbGVjdGVkVmFsdWVzIjpbIk1NRTAwMUJLVCIsIk1NRTAwMUNSTyJdfSx7InByb3BlcnR5S2V5Ijp7InByb3BlcnR5SWQiOiJFUENfUF81IiwiY291bnRlckdyb3VwcyI6eyJjb3VudGVyR3JvdXBJZCI6IkVQQ19DR18zNiIsImNvdW50ZXJHcm91cERldGFpbHMiOm51bGwsImRldmljZVR5cGUiOm51bGwsIm5lTGV2ZWwiOm51bGwsImNnU291cmNlIjpudWxsLCJjb3VudGVyTGlzdCI6bnVsbCwicHJvcGVydGllcyI6bnVsbCwia3BpcyI6bnVsbCwiZGlzcGxheU5hbWUiOm51bGx9fSwicHJvcGVydHlOYW1lIjoiTkVUV09SS19OQU1FIiwicHJvcGVydHlWYWx1ZXMiOiJudWxsIiwic2VsZWN0ZWRWYWx1ZXMiOltdfV0sImtwaXMiOm51bGwsImRpc3BsYXlOYW1lIjoiSFdJX0NHUF9NRU0ifV19"
  //                       },
  //                       {
  //                         "dashboardtemplateId": "H2HwaWv",
  //                         "reportName": "Aval",
  //                         "reportDetail": "eyJjb25maWd1cmF0aW9uIjp7ImF0dHJpYnV0ZXMiOm51bGwsInByb3BlcnRpZXMiOm51bGwsIm1ldHJpY3MiOlt7ImlkIjoiRVBDX0NfMSIsImFnZ3JlZ2F0aW9uVHlwZSI6IkFWRyJ9XSwia3BpTWV0cmljcyI6bnVsbCwibmFtZSI6IkF2YWwiLCJ0eXBlIjoiR3JhcGgiLCJzdWJUeXBlIjoiQmFyIiwiZGV2aWNlVHlwZSI6IkNHUCIsImVudGl0eSI6bnVsbCwiZGltZW5zaW9ucyI6W3sibmFtZSI6IkNHUF9OQU1FIiwiZGlzcGxheU5hbWUiOiJDR1BfTkFNRSIsImlkIjoiRVBDX1BfMSJ9LHsibmFtZSI6Ik5FVFdPUktfTkFNRSIsImRpc3BsYXlOYW1lIjoiTkVUV09SS19OQU1FIiwiaWQiOiJFUENfUF81In0seyJuYW1lIjoiQk9BUkRfTE9DQVRJT04iLCJkaXNwbGF5TmFtZSI6IkJPQVJEX0xPQ0FUSU9OIiwiaWQiOiJFUENfUF8yIn1dLCJjb250ZXh0IjpudWxsLCJncm91cEJ5RGltZW5zaW9ucyI6bnVsbH0sImZpbHRlciI6eyJjb25kaXRpb24iOiJBTkQiLCJydWxlcyI6W3siY29uZGl0aW9uIjoiT1IiLCJydWxlcyI6W3siZmllbGQiOiJDT1VOVEVSX0dST1VQX0lEIiwidmFsdWUiOiJFUENfQ0dfMzMiLCJ0eXBlIjoic2VsZWN0b3IifV19LHsiY29uZGl0aW9uIjoiT1IiLCJydWxlcyI6W3siaWQiOiJFUENfQ18xIiwidmFsdWUiOiItMjE0NzQ4MzY0OCIsInR5cGUiOiJib3VuZCJ9XX1dfSwic2FtcGxpbmdQZXJpb2QiOm51bGwsImludGVydmFscyI6Ikxhc3QgMSB3ZWVrIiwicGFnaW5hdGlvbiI6eyJwYWdlbnVtYmVyIjoxLCJwYWdlc2l6ZSI6MTAwMDAsInBhZ2luZ1NwZWMiOm51bGx9LCJncmFudWxhcml0eSI6IkFMTCIsInJlcG9ydERhdGFUeXBlIjoicmF3IiwiZmlsdGVyTWFwIjp7IkVQQ19QXzEiOlsiTU1FMDAxQktUIl19LCJjb3VudGVyR3JvdXBzV2l0aENvdW50ZXJBbmRQcm9wZXJ0aWVzIjpbeyJjb3VudGVyR3JvdXBJZCI6IkVQQ19DR18zMyIsImNvdW50ZXJHcm91cERldGFpbHMiOm51bGwsImRldmljZVR5cGUiOm51bGwsIm5lTGV2ZWwiOm51bGwsImNnU291cmNlIjpudWxsLCJjb3VudGVyTGlzdCI6W3siYWdncmVnYXRpb24iOm51bGwsImFnZ3JlZ2F0aW9uTGlzdCI6bnVsbCwiY291bnRlcktleSI6eyJjb3VudGVySWQiOiJFUENfQ18xIiwiY291bnRlckdyb3VwVHJhbnMiOm51bGx9LCJkaXNwbGF5TmFtZSI6Ik1lYW4gQ1BVIExvYWQiLCJjb3VudGVyVW5pdCI6IiUiLCJjb3VudGVyRGVzY3JpcHRpb24iOiJNZWFuIENQVSBMb2FkIiwiY291bnRlclR5cGUiOiJDb3VudGVyIiwiZW5hYmxlZCI6bnVsbCwic291cmNlTmFtZSI6bnVsbCwiZm9ybXVsYSI6bnVsbH1dLCJwcm9wZXJ0aWVzIjpbeyJwcm9wZXJ0eUtleSI6eyJwcm9wZXJ0eUlkIjoiRVBDX1BfMSIsImNvdW50ZXJHcm91cHMiOnsiY291bnRlckdyb3VwSWQiOiJFUENfQ0dfMzMiLCJjb3VudGVyR3JvdXBEZXRhaWxzIjpudWxsLCJkZXZpY2VUeXBlIjpudWxsLCJuZUxldmVsIjpudWxsLCJjZ1NvdXJjZSI6bnVsbCwiY291bnRlckxpc3QiOm51bGwsInByb3BlcnRpZXMiOm51bGwsImtwaXMiOm51bGwsImRpc3BsYXlOYW1lIjpudWxsfX0sInByb3BlcnR5TmFtZSI6IkNHUF9OQU1FIiwicHJvcGVydHlWYWx1ZXMiOiJ7XCJ2YWx1ZXNcIjpbXCJNTUUwMDFCS1RcIixcIk1NRTAwMUNST1wiLFwiTU1FMDAxTERTXCIsXCJNTUUwMDFMVE5cIixcIk1NRTAwMU1GRFwiLFwiTU1FMDAxV1ZOXCIsXCJNTUUwMDJDUk9cIixcIk1NRTAwMkxEU1wiLFwiTU1FMDAyTFROXCIsXCJNTUUwMDJXVk5cIixcIlBTSENSTzFDXCIsXCJQU0hLVDAzQ1wiLFwiUFNITEQwMkNcIixcIlBTSExUMDFDXCIsXCJQU0hNRjAxQ1wiLFwiUFNIV1YwMkNcIixcIlBTSFdWMDNDXCJdfSIsInNlbGVjdGVkVmFsdWVzIjpbIk1NRTAwMUJLVCJdfSx7InByb3BlcnR5S2V5Ijp7InByb3BlcnR5SWQiOiJFUENfUF8yIiwiY291bnRlckdyb3VwcyI6eyJjb3VudGVyR3JvdXBJZCI6IkVQQ19DR18zMyIsImNvdW50ZXJHcm91cERldGFpbHMiOm51bGwsImRldmljZVR5cGUiOm51bGwsIm5lTGV2ZWwiOm51bGwsImNnU291cmNlIjpudWxsLCJjb3VudGVyTGlzdCI6bnVsbCwicHJvcGVydGllcyI6bnVsbCwia3BpcyI6bnVsbCwiZGlzcGxheU5hbWUiOm51bGx9fSwicHJvcGVydHlOYW1lIjoiQk9BUkRfTE9DQVRJT04iLCJwcm9wZXJ0eVZhbHVlcyI6Im51bGwiLCJzZWxlY3RlZFZhbHVlcyI6W119LHsicHJvcGVydHlLZXkiOnsicHJvcGVydHlJZCI6IkVQQ19QXzUiLCJjb3VudGVyR3JvdXBzIjp7ImNvdW50ZXJHcm91cElkIjoiRVBDX0NHXzMzIiwiY291bnRlckdyb3VwRGV0YWlscyI6bnVsbCwiZGV2aWNlVHlwZSI6bnVsbCwibmVMZXZlbCI6bnVsbCwiY2dTb3VyY2UiOm51bGwsImNvdW50ZXJMaXN0IjpudWxsLCJwcm9wZXJ0aWVzIjpudWxsLCJrcGlzIjpudWxsLCJkaXNwbGF5TmFtZSI6bnVsbH19LCJwcm9wZXJ0eU5hbWUiOiJORVRXT1JLX05BTUUiLCJwcm9wZXJ0eVZhbHVlcyI6Im51bGwiLCJzZWxlY3RlZFZhbHVlcyI6W119XSwia3BpcyI6bnVsbCwiZGlzcGxheU5hbWUiOiJIV0lfQ0dQX0NQVV9MT0FEIn1dfQ=="
  //                       },
  //                       {
  //                         "dashboardtemplateId": "Q2AdOzc",
  //                         "reportName": "Network issue analysis for Location1",
  //                         "reportDetail": "eyJjb25maWd1cmF0aW9uIjp7ImF0dHJpYnV0ZXMiOm51bGwsInByb3BlcnRpZXMiOm51bGwsIm1ldHJpY3MiOlt7ImlkIjoiRVBDX0NfMSIsImFnZ3JlZ2F0aW9uVHlwZSI6IkFWRyJ9LHsiaWQiOiJFUENfQ18yIiwiYWdncmVnYXRpb25UeXBlIjoiTUFYIn0seyJpZCI6IkVQQ19DXzkiLCJhZ2dyZWdhdGlvblR5cGUiOiJTVU0ifV0sImtwaU1ldHJpY3MiOm51bGwsIm5hbWUiOiJOZXR3b3JrIGlzc3VlIGFuYWx5c2lzIGZvciBMb2NhdGlvbjEiLCJ0eXBlIjoiVGFibGUiLCJzdWJUeXBlIjoiVGFibGUiLCJkZXZpY2VUeXBlIjoiQ0dQIiwiZW50aXR5IjpudWxsLCJkaW1lbnNpb25zIjpbeyJuYW1lIjoiTkVUV09SS19OQU1FIiwiZGlzcGxheU5hbWUiOiJORVRXT1JLX05BTUUiLCJpZCI6IkVQQ19QXzUifSx7Im5hbWUiOiJCT0FSRF9MT0NBVElPTiIsImRpc3BsYXlOYW1lIjoiQk9BUkRfTE9DQVRJT04iLCJpZCI6IkVQQ19QXzIifSx7Im5hbWUiOiJDR1BfTkFNRSIsImRpc3BsYXlOYW1lIjoiQ0dQX05BTUUiLCJpZCI6IkVQQ19QXzEifV0sImNvbnRleHQiOm51bGwsImdyb3VwQnlEaW1lbnNpb25zIjpudWxsfSwiZmlsdGVyIjp7ImNvbmRpdGlvbiI6IkFORCIsInJ1bGVzIjpbeyJjb25kaXRpb24iOiJPUiIsInJ1bGVzIjpbeyJmaWVsZCI6IkNPVU5URVJfR1JPVVBfSUQiLCJ2YWx1ZSI6IkVQQ19DR18zMyIsInR5cGUiOiJzZWxlY3RvciJ9LHsiZmllbGQiOiJDT1VOVEVSX0dST1VQX0lEIiwidmFsdWUiOiJFUENfQ0dfMzUiLCJ0eXBlIjoic2VsZWN0b3IifV19LHsiY29uZGl0aW9uIjoiT1IiLCJydWxlcyI6W3siaWQiOiJFUENfQ18xIiwidmFsdWUiOiItMjE0NzQ4MzY0OCIsInR5cGUiOiJib3VuZCJ9LHsiaWQiOiJFUENfQ18yIiwidmFsdWUiOiItMjE0NzQ4MzY0OCIsInR5cGUiOiJib3VuZCJ9LHsiaWQiOiJFUENfQ185IiwidmFsdWUiOiItMjE0NzQ4MzY0OCIsInR5cGUiOiJib3VuZCJ9XX1dfSwic2FtcGxpbmdQZXJpb2QiOm51bGwsImludGVydmFscyI6IjIwMTgtMDQtMDJUMDQ6MjU6MDAuMDAwWi8yMDE4LTA0LTA0VDEzOjQ0OjAwLjAwMFoiLCJwYWdpbmF0aW9uIjp7InBhZ2VudW1iZXIiOjEsInBhZ2VzaXplIjoxMDAwMCwicGFnaW5nU3BlYyI6bnVsbH0sImdyYW51bGFyaXR5IjoiQUxMIiwicmVwb3J0RGF0YVR5cGUiOiJyYXciLCJmaWx0ZXJNYXAiOnsiRVBDX1BfMSI6WyJNTUUwMDFCS1QiLCJNTUUwMDFDUk8iLCJNTUUwMDFMRFMiLCJNTUUwMDFMVE4iXX0sImNvdW50ZXJHcm91cHNXaXRoQ291bnRlckFuZFByb3BlcnRpZXMiOlt7ImNvdW50ZXJHcm91cElkIjoiRVBDX0NHXzMzIiwiY291bnRlckdyb3VwRGV0YWlscyI6bnVsbCwiZGV2aWNlVHlwZSI6bnVsbCwibmVMZXZlbCI6bnVsbCwiY2dTb3VyY2UiOm51bGwsImNvdW50ZXJMaXN0IjpbeyJhZ2dyZWdhdGlvbiI6bnVsbCwiYWdncmVnYXRpb25MaXN0IjpudWxsLCJjb3VudGVyS2V5Ijp7ImNvdW50ZXJJZCI6IkVQQ19DXzEiLCJjb3VudGVyR3JvdXBUcmFucyI6bnVsbH0sImRpc3BsYXlOYW1lIjoiTWVhbiBDUFUgTG9hZCIsImNvdW50ZXJVbml0IjoiJSIsImNvdW50ZXJEZXNjcmlwdGlvbiI6Ik1lYW4gQ1BVIExvYWQiLCJjb3VudGVyVHlwZSI6IkNvdW50ZXIiLCJlbmFibGVkIjpudWxsLCJzb3VyY2VOYW1lIjpudWxsLCJmb3JtdWxhIjpudWxsfSx7ImFnZ3JlZ2F0aW9uIjpudWxsLCJhZ2dyZWdhdGlvbkxpc3QiOm51bGwsImNvdW50ZXJLZXkiOnsiY291bnRlcklkIjoiRVBDX0NfMiIsImNvdW50ZXJHcm91cFRyYW5zIjpudWxsfSwiZGlzcGxheU5hbWUiOiJNYXhpbXVtIENQVSBMb2FkIiwiY291bnRlclVuaXQiOiIlIiwiY291bnRlckRlc2NyaXB0aW9uIjoiTWF4aW11bSBDUFUgTG9hZCIsImNvdW50ZXJUeXBlIjoiQ291bnRlciIsImVuYWJsZWQiOm51bGwsInNvdXJjZU5hbWUiOm51bGwsImZvcm11bGEiOm51bGx9XSwicHJvcGVydGllcyI6W3sicHJvcGVydHlLZXkiOnsicHJvcGVydHlJZCI6IkVQQ19QXzEiLCJjb3VudGVyR3JvdXBzIjp7ImNvdW50ZXJHcm91cElkIjoiRVBDX0NHXzMzIiwiY291bnRlckdyb3VwRGV0YWlscyI6bnVsbCwiZGV2aWNlVHlwZSI6bnVsbCwibmVMZXZlbCI6bnVsbCwiY2dTb3VyY2UiOm51bGwsImNvdW50ZXJMaXN0IjpudWxsLCJwcm9wZXJ0aWVzIjpudWxsLCJrcGlzIjpudWxsLCJkaXNwbGF5TmFtZSI6bnVsbH19LCJwcm9wZXJ0eU5hbWUiOiJDR1BfTkFNRSIsInByb3BlcnR5VmFsdWVzIjoie1widmFsdWVzXCI6W1wiTU1FMDAxQktUXCIsXCJNTUUwMDFDUk9cIixcIk1NRTAwMUxEU1wiLFwiTU1FMDAxTFROXCIsXCJNTUUwMDFNRkRcIixcIk1NRTAwMVdWTlwiLFwiTU1FMDAyQ1JPXCIsXCJNTUUwMDJMRFNcIixcIk1NRTAwMkxUTlwiLFwiTU1FMDAyV1ZOXCIsXCJQU0hDUk8xQ1wiLFwiUFNIS1QwM0NcIixcIlBTSExEMDJDXCIsXCJQU0hMVDAxQ1wiLFwiUFNITUYwMUNcIixcIlBTSFdWMDJDXCIsXCJQU0hXVjAzQ1wiXX0iLCJzZWxlY3RlZFZhbHVlcyI6WyJNTUUwMDFCS1QiLCJNTUUwMDFDUk8iLCJNTUUwMDFMRFMiLCJNTUUwMDFMVE4iXX0seyJwcm9wZXJ0eUtleSI6eyJwcm9wZXJ0eUlkIjoiRVBDX1BfMiIsImNvdW50ZXJHcm91cHMiOnsiY291bnRlckdyb3VwSWQiOiJFUENfQ0dfMzMiLCJjb3VudGVyR3JvdXBEZXRhaWxzIjpudWxsLCJkZXZpY2VUeXBlIjpudWxsLCJuZUxldmVsIjpudWxsLCJjZ1NvdXJjZSI6bnVsbCwiY291bnRlckxpc3QiOm51bGwsInByb3BlcnRpZXMiOm51bGwsImtwaXMiOm51bGwsImRpc3BsYXlOYW1lIjpudWxsfX0sInByb3BlcnR5TmFtZSI6IkJPQVJEX0xPQ0FUSU9OIiwicHJvcGVydHlWYWx1ZXMiOiJudWxsIiwic2VsZWN0ZWRWYWx1ZXMiOltdfSx7InByb3BlcnR5S2V5Ijp7InByb3BlcnR5SWQiOiJFUENfUF81IiwiY291bnRlckdyb3VwcyI6eyJjb3VudGVyR3JvdXBJZCI6IkVQQ19DR18zMyIsImNvdW50ZXJHcm91cERldGFpbHMiOm51bGwsImRldmljZVR5cGUiOm51bGwsIm5lTGV2ZWwiOm51bGwsImNnU291cmNlIjpudWxsLCJjb3VudGVyTGlzdCI6bnVsbCwicHJvcGVydGllcyI6bnVsbCwia3BpcyI6bnVsbCwiZGlzcGxheU5hbWUiOm51bGx9fSwicHJvcGVydHlOYW1lIjoiTkVUV09SS19OQU1FIiwicHJvcGVydHlWYWx1ZXMiOiJudWxsIiwic2VsZWN0ZWRWYWx1ZXMiOltdfV0sImtwaXMiOm51bGwsImRpc3BsYXlOYW1lIjoiSFdJX0NHUF9DUFVfTE9BRCJ9LHsiY291bnRlckdyb3VwSWQiOiJFUENfQ0dfMzUiLCJjb3VudGVyR3JvdXBEZXRhaWxzIjpudWxsLCJkZXZpY2VUeXBlIjpudWxsLCJuZUxldmVsIjpudWxsLCJjZ1NvdXJjZSI6bnVsbCwiY291bnRlckxpc3QiOlt7ImFnZ3JlZ2F0aW9uIjpudWxsLCJhZ2dyZWdhdGlvbkxpc3QiOm51bGwsImNvdW50ZXJLZXkiOnsiY291bnRlcklkIjoiRVBDX0NfMSIsImNvdW50ZXJHcm91cFRyYW5zIjpudWxsfSwiZGlzcGxheU5hbWUiOiJTaXplIG9mIFBhY2tldHMgUmVjZWl2ZWQiLCJjb3VudGVyVW5pdCI6ImtpbG9ieXRlcyIsImNvdW50ZXJEZXNjcmlwdGlvbiI6IlNpemUgb2YgUGFja2V0cyBSZWNlaXZlZCBUaHJvdWdoIGEgUG9ydCIsImNvdW50ZXJUeXBlIjoiQ291bnRlciIsImVuYWJsZWQiOm51bGwsInNvdXJjZU5hbWUiOm51bGwsImZvcm11bGEiOm51bGx9LHsiYWdncmVnYXRpb24iOm51bGwsImFnZ3JlZ2F0aW9uTGlzdCI6bnVsbCwiY291bnRlcktleSI6eyJjb3VudGVySWQiOiJFUENfQ185IiwiY291bnRlckdyb3VwVHJhbnMiOm51bGx9LCJkaXNwbGF5TmFtZSI6IlNpemUgb2YgUGFja2V0cyBTZW50IiwiY291bnRlclVuaXQiOiJraWxvYnl0ZXMiLCJjb3VudGVyRGVzY3JpcHRpb24iOiJTaXplIG9mIFBhY2tldHMgU2VudCBUaHJvdWdoIGEgUG9ydCIsImNvdW50ZXJUeXBlIjoiQ291bnRlciIsImVuYWJsZWQiOm51bGwsInNvdXJjZU5hbWUiOm51bGwsImZvcm11bGEiOm51bGx9XSwicHJvcGVydGllcyI6W3sicHJvcGVydHlLZXkiOnsicHJvcGVydHlJZCI6IkVQQ19QXzEiLCJjb3VudGVyR3JvdXBzIjp7ImNvdW50ZXJHcm91cElkIjoiRVBDX0NHXzM1IiwiY291bnRlckdyb3VwRGV0YWlscyI6bnVsbCwiZGV2aWNlVHlwZSI6bnVsbCwibmVMZXZlbCI6bnVsbCwiY2dTb3VyY2UiOm51bGwsImNvdW50ZXJMaXN0IjpudWxsLCJwcm9wZXJ0aWVzIjpudWxsLCJrcGlzIjpudWxsLCJkaXNwbGF5TmFtZSI6bnVsbH19LCJwcm9wZXJ0eU5hbWUiOiJDR1BfTkFNRSIsInByb3BlcnR5VmFsdWVzIjoie1widmFsdWVzXCI6W1wiTU1FMDAxQktUXCIsXCJNTUUwMDFDUk9cIixcIk1NRTAwMUxEU1wiLFwiTU1FMDAxTFROXCIsXCJNTUUwMDFNRkRcIixcIk1NRTAwMVdWTlwiLFwiTU1FMDAyQ1JPXCIsXCJNTUUwMDJMRFNcIixcIk1NRTAwMkxUTlwiLFwiTU1FMDAyV1ZOXCIsXCJQU0hDUk8xQ1wiLFwiUFNIS1QwM0NcIixcIlBTSExEMDJDXCIsXCJQU0hMVDAxQ1wiLFwiUFNITUYwMUNcIixcIlBTSFdWMDJDXCIsXCJQU0hXVjAzQ1wiXX0iLCJzZWxlY3RlZFZhbHVlcyI6WyJNTUUwMDFCS1QiLCJNTUUwMDFDUk8iLCJNTUUwMDFMRFMiXX0seyJwcm9wZXJ0eUtleSI6eyJwcm9wZXJ0eUlkIjoiRVBDX1BfMiIsImNvdW50ZXJHcm91cHMiOnsiY291bnRlckdyb3VwSWQiOiJFUENfQ0dfMzUiLCJjb3VudGVyR3JvdXBEZXRhaWxzIjpudWxsLCJkZXZpY2VUeXBlIjpudWxsLCJuZUxldmVsIjpudWxsLCJjZ1NvdXJjZSI6bnVsbCwiY291bnRlckxpc3QiOm51bGwsInByb3BlcnRpZXMiOm51bGwsImtwaXMiOm51bGwsImRpc3BsYXlOYW1lIjpudWxsfX0sInByb3BlcnR5TmFtZSI6IlBPUlRfTkFNRSIsInByb3BlcnR5VmFsdWVzIjoibnVsbCIsInNlbGVjdGVkVmFsdWVzIjpbXX0seyJwcm9wZXJ0eUtleSI6eyJwcm9wZXJ0eUlkIjoiRVBDX1BfNSIsImNvdW50ZXJHcm91cHMiOnsiY291bnRlckdyb3VwSWQiOiJFUENfQ0dfMzUiLCJjb3VudGVyR3JvdXBEZXRhaWxzIjpudWxsLCJkZXZpY2VUeXBlIjpudWxsLCJuZUxldmVsIjpudWxsLCJjZ1NvdXJjZSI6bnVsbCwiY291bnRlckxpc3QiOm51bGwsInByb3BlcnRpZXMiOm51bGwsImtwaXMiOm51bGwsImRpc3BsYXlOYW1lIjpudWxsfX0sInByb3BlcnR5TmFtZSI6Ik5FVFdPUktfTkFNRSIsInByb3BlcnR5VmFsdWVzIjoibnVsbCIsInNlbGVjdGVkVmFsdWVzIjpbXX1dLCJrcGlzIjpudWxsLCJkaXNwbGF5TmFtZSI6IkhXSV9DR1BfRVRIX1RSQUZGIn1dfQ=="
  //                       }
  //                     ]
  //                   },
  //                   {
  //                     "subDashboardId": "PyAcpB",
  //                     "name": "Traffic",
  //                     "dashboardTemplates": [
  //                       {
  //                         "dashboardtemplateId": "qbCbw4L",
  //                         "reportName": "Aval",
  //                         "reportDetail": "eyJjb25maWd1cmF0aW9uIjp7ImF0dHJpYnV0ZXMiOm51bGwsInByb3BlcnRpZXMiOm51bGwsIm1ldHJpY3MiOlt7ImlkIjoiRVBDX0NfMSIsImFnZ3JlZ2F0aW9uVHlwZSI6IkFWRyJ9XSwia3BpTWV0cmljcyI6bnVsbCwibmFtZSI6IkF2YWwiLCJ0eXBlIjoiR3JhcGgiLCJzdWJUeXBlIjoiQmFyIiwiZGV2aWNlVHlwZSI6IkNHUCIsImVudGl0eSI6bnVsbCwiZGltZW5zaW9ucyI6W3sibmFtZSI6IkNHUF9OQU1FIiwiZGlzcGxheU5hbWUiOiJDR1BfTkFNRSIsImlkIjoiRVBDX1BfMSJ9LHsibmFtZSI6Ik5FVFdPUktfTkFNRSIsImRpc3BsYXlOYW1lIjoiTkVUV09SS19OQU1FIiwiaWQiOiJFUENfUF81In0seyJuYW1lIjoiQk9BUkRfTE9DQVRJT04iLCJkaXNwbGF5TmFtZSI6IkJPQVJEX0xPQ0FUSU9OIiwiaWQiOiJFUENfUF8yIn1dLCJjb250ZXh0IjpudWxsLCJncm91cEJ5RGltZW5zaW9ucyI6bnVsbH0sImZpbHRlciI6eyJjb25kaXRpb24iOiJBTkQiLCJydWxlcyI6W3siY29uZGl0aW9uIjoiT1IiLCJydWxlcyI6W3siZmllbGQiOiJDT1VOVEVSX0dST1VQX0lEIiwidmFsdWUiOiJFUENfQ0dfMzMiLCJ0eXBlIjoic2VsZWN0b3IifV19LHsiY29uZGl0aW9uIjoiT1IiLCJydWxlcyI6W3siaWQiOiJFUENfQ18xIiwidmFsdWUiOiItMjE0NzQ4MzY0OCIsInR5cGUiOiJib3VuZCJ9XX1dfSwic2FtcGxpbmdQZXJpb2QiOm51bGwsImludGVydmFscyI6Ikxhc3QgMSB3ZWVrIiwicGFnaW5hdGlvbiI6eyJwYWdlbnVtYmVyIjoxLCJwYWdlc2l6ZSI6MTAwMDAsInBhZ2luZ1NwZWMiOm51bGx9LCJncmFudWxhcml0eSI6IkFMTCIsInJlcG9ydERhdGFUeXBlIjoicmF3IiwiZmlsdGVyTWFwIjp7IkVQQ19QXzEiOlsiTU1FMDAxQktUIl19LCJjb3VudGVyR3JvdXBzV2l0aENvdW50ZXJBbmRQcm9wZXJ0aWVzIjpbeyJjb3VudGVyR3JvdXBJZCI6IkVQQ19DR18zMyIsImNvdW50ZXJHcm91cERldGFpbHMiOm51bGwsImRldmljZVR5cGUiOm51bGwsIm5lTGV2ZWwiOm51bGwsImNnU291cmNlIjpudWxsLCJjb3VudGVyTGlzdCI6W3siYWdncmVnYXRpb24iOm51bGwsImFnZ3JlZ2F0aW9uTGlzdCI6bnVsbCwiY291bnRlcktleSI6eyJjb3VudGVySWQiOiJFUENfQ18xIiwiY291bnRlckdyb3VwVHJhbnMiOm51bGx9LCJkaXNwbGF5TmFtZSI6Ik1lYW4gQ1BVIExvYWQiLCJjb3VudGVyVW5pdCI6IiUiLCJjb3VudGVyRGVzY3JpcHRpb24iOiJNZWFuIENQVSBMb2FkIiwiY291bnRlclR5cGUiOiJDb3VudGVyIiwiZW5hYmxlZCI6bnVsbCwic291cmNlTmFtZSI6bnVsbCwiZm9ybXVsYSI6bnVsbH1dLCJwcm9wZXJ0aWVzIjpbeyJwcm9wZXJ0eUtleSI6eyJwcm9wZXJ0eUlkIjoiRVBDX1BfMSIsImNvdW50ZXJHcm91cHMiOnsiY291bnRlckdyb3VwSWQiOiJFUENfQ0dfMzMiLCJjb3VudGVyR3JvdXBEZXRhaWxzIjpudWxsLCJkZXZpY2VUeXBlIjpudWxsLCJuZUxldmVsIjpudWxsLCJjZ1NvdXJjZSI6bnVsbCwiY291bnRlckxpc3QiOm51bGwsInByb3BlcnRpZXMiOm51bGwsImtwaXMiOm51bGwsImRpc3BsYXlOYW1lIjpudWxsfX0sInByb3BlcnR5TmFtZSI6IkNHUF9OQU1FIiwicHJvcGVydHlWYWx1ZXMiOiJ7XCJ2YWx1ZXNcIjpbXCJNTUUwMDFCS1RcIixcIk1NRTAwMUNST1wiLFwiTU1FMDAxTERTXCIsXCJNTUUwMDFMVE5cIixcIk1NRTAwMU1GRFwiLFwiTU1FMDAxV1ZOXCIsXCJNTUUwMDJDUk9cIixcIk1NRTAwMkxEU1wiLFwiTU1FMDAyTFROXCIsXCJNTUUwMDJXVk5cIixcIlBTSENSTzFDXCIsXCJQU0hLVDAzQ1wiLFwiUFNITEQwMkNcIixcIlBTSExUMDFDXCIsXCJQU0hNRjAxQ1wiLFwiUFNIV1YwMkNcIixcIlBTSFdWMDNDXCJdfSIsInNlbGVjdGVkVmFsdWVzIjpbIk1NRTAwMUJLVCJdfSx7InByb3BlcnR5S2V5Ijp7InByb3BlcnR5SWQiOiJFUENfUF8yIiwiY291bnRlckdyb3VwcyI6eyJjb3VudGVyR3JvdXBJZCI6IkVQQ19DR18zMyIsImNvdW50ZXJHcm91cERldGFpbHMiOm51bGwsImRldmljZVR5cGUiOm51bGwsIm5lTGV2ZWwiOm51bGwsImNnU291cmNlIjpudWxsLCJjb3VudGVyTGlzdCI6bnVsbCwicHJvcGVydGllcyI6bnVsbCwia3BpcyI6bnVsbCwiZGlzcGxheU5hbWUiOm51bGx9fSwicHJvcGVydHlOYW1lIjoiQk9BUkRfTE9DQVRJT04iLCJwcm9wZXJ0eVZhbHVlcyI6Im51bGwiLCJzZWxlY3RlZFZhbHVlcyI6W119LHsicHJvcGVydHlLZXkiOnsicHJvcGVydHlJZCI6IkVQQ19QXzUiLCJjb3VudGVyR3JvdXBzIjp7ImNvdW50ZXJHcm91cElkIjoiRVBDX0NHXzMzIiwiY291bnRlckdyb3VwRGV0YWlscyI6bnVsbCwiZGV2aWNlVHlwZSI6bnVsbCwibmVMZXZlbCI6bnVsbCwiY2dTb3VyY2UiOm51bGwsImNvdW50ZXJMaXN0IjpudWxsLCJwcm9wZXJ0aWVzIjpudWxsLCJrcGlzIjpudWxsLCJkaXNwbGF5TmFtZSI6bnVsbH19LCJwcm9wZXJ0eU5hbWUiOiJORVRXT1JLX05BTUUiLCJwcm9wZXJ0eVZhbHVlcyI6Im51bGwiLCJzZWxlY3RlZFZhbHVlcyI6W119XSwia3BpcyI6bnVsbCwiZGlzcGxheU5hbWUiOiJIV0lfQ0dQX0NQVV9MT0FEIn1dfQ=="
  //                       },
  //                       {
  //                         "dashboardtemplateId": "tbSzGIC",
  //                         "reportName": "Pawan",
  //                         "reportDetail": "eyJjb25maWd1cmF0aW9uIjp7ImF0dHJpYnV0ZXMiOm51bGwsInByb3BlcnRpZXMiOm51bGwsIm1ldHJpY3MiOlt7ImlkIjoiRVBDX0NfMSIsImFnZ3JlZ2F0aW9uVHlwZSI6IkFWRyJ9LHsiaWQiOiJFUENfQ18yIiwiYWdncmVnYXRpb25UeXBlIjoiTUFYIn1dLCJrcGlNZXRyaWNzIjpudWxsLCJuYW1lIjoiUGF3YW4iLCJ0eXBlIjoiVGFibGUiLCJzdWJUeXBlIjoiVGFibGUiLCJkZXZpY2VUeXBlIjoiQ0dQIiwiZW50aXR5IjpudWxsLCJkaW1lbnNpb25zIjpbeyJuYW1lIjoiQ0dQX05BTUUiLCJkaXNwbGF5TmFtZSI6IkNHUF9OQU1FIiwiaWQiOiJFUENfUF8xIn0seyJuYW1lIjoiTkVUV09SS19OQU1FIiwiZGlzcGxheU5hbWUiOiJORVRXT1JLX05BTUUiLCJpZCI6IkVQQ19QXzUifV0sImNvbnRleHQiOm51bGwsImdyb3VwQnlEaW1lbnNpb25zIjpudWxsfSwiZmlsdGVyIjp7ImNvbmRpdGlvbiI6IkFORCIsInJ1bGVzIjpbeyJjb25kaXRpb24iOiJPUiIsInJ1bGVzIjpbeyJmaWVsZCI6IkNPVU5URVJfR1JPVVBfSUQiLCJ2YWx1ZSI6IkVQQ19DR18zMyIsInR5cGUiOiJzZWxlY3RvciJ9LHsiZmllbGQiOiJDT1VOVEVSX0dST1VQX0lEIiwidmFsdWUiOiJFUENfQ0dfMzYiLCJ0eXBlIjoic2VsZWN0b3IifV19LHsiY29uZGl0aW9uIjoiT1IiLCJydWxlcyI6W3siaWQiOiJFUENfQ18xIiwidmFsdWUiOiItMjE0NzQ4MzY0OCIsInR5cGUiOiJib3VuZCJ9LHsiaWQiOiJFUENfQ18yIiwidmFsdWUiOiItMjE0NzQ4MzY0OCIsInR5cGUiOiJib3VuZCJ9XX1dfSwic2FtcGxpbmdQZXJpb2QiOm51bGwsImludGVydmFscyI6Ikxhc3QgMSBkYXkiLCJwYWdpbmF0aW9uIjp7InBhZ2VudW1iZXIiOjEsInBhZ2VzaXplIjoxMDAwMCwicGFnaW5nU3BlYyI6bnVsbH0sImdyYW51bGFyaXR5IjoiQUxMIiwicmVwb3J0RGF0YVR5cGUiOiJyYXciLCJmaWx0ZXJNYXAiOnsiRVBDX1BfMSI6WyJNTUUwMDFCS1QiLCJNTUUwMDFDUk8iXX0sImNvdW50ZXJHcm91cHNXaXRoQ291bnRlckFuZFByb3BlcnRpZXMiOlt7ImNvdW50ZXJHcm91cElkIjoiRVBDX0NHXzMzIiwiY291bnRlckdyb3VwRGV0YWlscyI6bnVsbCwiZGV2aWNlVHlwZSI6bnVsbCwibmVMZXZlbCI6bnVsbCwiY2dTb3VyY2UiOm51bGwsImNvdW50ZXJMaXN0IjpbeyJhZ2dyZWdhdGlvbiI6bnVsbCwiYWdncmVnYXRpb25MaXN0IjpudWxsLCJjb3VudGVyS2V5Ijp7ImNvdW50ZXJJZCI6IkVQQ19DXzEiLCJjb3VudGVyR3JvdXBUcmFucyI6bnVsbH0sImRpc3BsYXlOYW1lIjoiTWVhbiBDUFUgTG9hZCIsImNvdW50ZXJVbml0IjoiJSIsImNvdW50ZXJEZXNjcmlwdGlvbiI6Ik1lYW4gQ1BVIExvYWQiLCJjb3VudGVyVHlwZSI6IkNvdW50ZXIiLCJlbmFibGVkIjpudWxsLCJzb3VyY2VOYW1lIjpudWxsLCJmb3JtdWxhIjpudWxsfSx7ImFnZ3JlZ2F0aW9uIjpudWxsLCJhZ2dyZWdhdGlvbkxpc3QiOm51bGwsImNvdW50ZXJLZXkiOnsiY291bnRlcklkIjoiRVBDX0NfMiIsImNvdW50ZXJHcm91cFRyYW5zIjpudWxsfSwiZGlzcGxheU5hbWUiOiJNYXhpbXVtIENQVSBMb2FkIiwiY291bnRlclVuaXQiOiIlIiwiY291bnRlckRlc2NyaXB0aW9uIjoiTWF4aW11bSBDUFUgTG9hZCIsImNvdW50ZXJUeXBlIjoiQ291bnRlciIsImVuYWJsZWQiOm51bGwsInNvdXJjZU5hbWUiOm51bGwsImZvcm11bGEiOm51bGx9XSwicHJvcGVydGllcyI6W3sicHJvcGVydHlLZXkiOnsicHJvcGVydHlJZCI6IkVQQ19QXzEiLCJjb3VudGVyR3JvdXBzIjp7ImNvdW50ZXJHcm91cElkIjoiRVBDX0NHXzMzIiwiY291bnRlckdyb3VwRGV0YWlscyI6bnVsbCwiZGV2aWNlVHlwZSI6bnVsbCwibmVMZXZlbCI6bnVsbCwiY2dTb3VyY2UiOm51bGwsImNvdW50ZXJMaXN0IjpudWxsLCJwcm9wZXJ0aWVzIjpudWxsLCJrcGlzIjpudWxsLCJkaXNwbGF5TmFtZSI6bnVsbH19LCJwcm9wZXJ0eU5hbWUiOiJDR1BfTkFNRSIsInByb3BlcnR5VmFsdWVzIjoie1widmFsdWVzXCI6W1wiTU1FMDAxQktUXCIsXCJNTUUwMDFDUk9cIixcIk1NRTAwMUxEU1wiLFwiTU1FMDAxTFROXCIsXCJNTUUwMDFNRkRcIixcIk1NRTAwMVdWTlwiLFwiTU1FMDAyQ1JPXCIsXCJNTUUwMDJMRFNcIixcIk1NRTAwMkxUTlwiLFwiTU1FMDAyV1ZOXCIsXCJQU0hDUk8xQ1wiLFwiUFNIS1QwM0NcIixcIlBTSExEMDJDXCIsXCJQU0hMVDAxQ1wiLFwiUFNITUYwMUNcIixcIlBTSFdWMDJDXCIsXCJQU0hXVjAzQ1wiXX0iLCJzZWxlY3RlZFZhbHVlcyI6WyJNTUUwMDFCS1QiLCJNTUUwMDFDUk8iXX0seyJwcm9wZXJ0eUtleSI6eyJwcm9wZXJ0eUlkIjoiRVBDX1BfNSIsImNvdW50ZXJHcm91cHMiOnsiY291bnRlckdyb3VwSWQiOiJFUENfQ0dfMzMiLCJjb3VudGVyR3JvdXBEZXRhaWxzIjpudWxsLCJkZXZpY2VUeXBlIjpudWxsLCJuZUxldmVsIjpudWxsLCJjZ1NvdXJjZSI6bnVsbCwiY291bnRlckxpc3QiOm51bGwsInByb3BlcnRpZXMiOm51bGwsImtwaXMiOm51bGwsImRpc3BsYXlOYW1lIjpudWxsfX0sInByb3BlcnR5TmFtZSI6Ik5FVFdPUktfTkFNRSIsInByb3BlcnR5VmFsdWVzIjoibnVsbCIsInNlbGVjdGVkVmFsdWVzIjpbXX1dLCJrcGlzIjpudWxsLCJkaXNwbGF5TmFtZSI6IkhXSV9DR1BfQ1BVX0xPQUQifSx7ImNvdW50ZXJHcm91cElkIjoiRVBDX0NHXzM2IiwiY291bnRlckdyb3VwRGV0YWlscyI6bnVsbCwiZGV2aWNlVHlwZSI6bnVsbCwibmVMZXZlbCI6bnVsbCwiY2dTb3VyY2UiOm51bGwsImNvdW50ZXJMaXN0IjpbeyJhZ2dyZWdhdGlvbiI6bnVsbCwiYWdncmVnYXRpb25MaXN0IjpudWxsLCJjb3VudGVyS2V5Ijp7ImNvdW50ZXJJZCI6IkVQQ19DXzIiLCJjb3VudGVyR3JvdXBUcmFucyI6bnVsbH0sImRpc3BsYXlOYW1lIjoiVXNlZCBNZW1vcnkgU2l6ZSIsImNvdW50ZXJVbml0IjoiTUIiLCJjb3VudGVyRGVzY3JpcHRpb24iOiJVc2VkIE1lbW9yeSBTaXplIiwiY291bnRlclR5cGUiOiJDb3VudGVyIiwiZW5hYmxlZCI6bnVsbCwic291cmNlTmFtZSI6bnVsbCwiZm9ybXVsYSI6bnVsbH1dLCJwcm9wZXJ0aWVzIjpbeyJwcm9wZXJ0eUtleSI6eyJwcm9wZXJ0eUlkIjoiRVBDX1BfMSIsImNvdW50ZXJHcm91cHMiOnsiY291bnRlckdyb3VwSWQiOiJFUENfQ0dfMzYiLCJjb3VudGVyR3JvdXBEZXRhaWxzIjpudWxsLCJkZXZpY2VUeXBlIjpudWxsLCJuZUxldmVsIjpudWxsLCJjZ1NvdXJjZSI6bnVsbCwiY291bnRlckxpc3QiOm51bGwsInByb3BlcnRpZXMiOm51bGwsImtwaXMiOm51bGwsImRpc3BsYXlOYW1lIjpudWxsfX0sInByb3BlcnR5TmFtZSI6IkNHUF9OQU1FIiwicHJvcGVydHlWYWx1ZXMiOiJ7XCJ2YWx1ZXNcIjpbXCJNTUUwMDFCS1RcIixcIk1NRTAwMUNST1wiLFwiTU1FMDAxTERTXCIsXCJNTUUwMDFMVE5cIixcIk1NRTAwMU1GRFwiLFwiTU1FMDAxV1ZOXCIsXCJNTUUwMDJDUk9cIixcIk1NRTAwMkxEU1wiLFwiTU1FMDAyTFROXCIsXCJNTUUwMDJXVk5cIixcIlBTSENSTzFDXCIsXCJQU0hLVDAzQ1wiLFwiUFNITEQwMkNcIixcIlBTSExUMDFDXCIsXCJQU0hNRjAxQ1wiLFwiUFNIV1YwMkNcIixcIlBTSFdWMDNDXCJdfSIsInNlbGVjdGVkVmFsdWVzIjpbIk1NRTAwMUJLVCIsIk1NRTAwMUNSTyJdfSx7InByb3BlcnR5S2V5Ijp7InByb3BlcnR5SWQiOiJFUENfUF81IiwiY291bnRlckdyb3VwcyI6eyJjb3VudGVyR3JvdXBJZCI6IkVQQ19DR18zNiIsImNvdW50ZXJHcm91cERldGFpbHMiOm51bGwsImRldmljZVR5cGUiOm51bGwsIm5lTGV2ZWwiOm51bGwsImNnU291cmNlIjpudWxsLCJjb3VudGVyTGlzdCI6bnVsbCwicHJvcGVydGllcyI6bnVsbCwia3BpcyI6bnVsbCwiZGlzcGxheU5hbWUiOm51bGx9fSwicHJvcGVydHlOYW1lIjoiTkVUV09SS19OQU1FIiwicHJvcGVydHlWYWx1ZXMiOiJudWxsIiwic2VsZWN0ZWRWYWx1ZXMiOltdfV0sImtwaXMiOm51bGwsImRpc3BsYXlOYW1lIjoiSFdJX0NHUF9NRU0ifV19"
  //                       }
  //                     ]
  //                   }
  //                 ]
  //               },
  //               {
  //                 "dashboardId": "Yw0fEA",
  //                 "name": "Test Dash for MME",
  //                 "type": "common",
  //                 "view": "both",
  //                 "subDashboards": [
  //                   {
  //                     "subDashboardId": "7L8KaM",
  //                     "name": "MME R",
  //                     "dashboardTemplates": [
  //                       {
  //                         "dashboardtemplateId": "aCkPPgU",
  //                         "reportName": "MME-lineChart",
  //                         "reportDetail": "eyJjb25maWd1cmF0aW9uIjp7ImF0dHJpYnV0ZXMiOm51bGwsInByb3BlcnRpZXMiOm51bGwsIm1ldHJpY3MiOlt7ImlkIjoiRVBDX0NfMSJ9LHsiaWQiOiJFUENfQ18yIn1dLCJrcGlNZXRyaWNzIjpudWxsLCJuYW1lIjoiTU1FLWxpbmVDaGFydCIsInR5cGUiOiJHcmFwaCIsInN1YlR5cGUiOiJWZXJ0aWNhbCBTdGFja2VkIEJhciIsImRldmljZVR5cGUiOiJNTUUiLCJlbnRpdHkiOm51bGwsImRpbWVuc2lvbnMiOlt7Im5hbWUiOiJNTUVfTkFNRSIsImRpc3BsYXlOYW1lIjoiTU1FX05BTUUiLCJpZCI6IkVQQ19QXzEifSx7Im5hbWUiOiJORVRXT1JLX05BTUUiLCJkaXNwbGF5TmFtZSI6Ik5FVFdPUktfTkFNRSIsImlkIjoiRVBDX1BfNSJ9LHsibmFtZSI6Ik5FVFdPUktfTkFNRSIsImRpc3BsYXlOYW1lIjoiTkVUV09SS19OQU1FIiwiaWQiOiJFUENfUF8zIn1dLCJjb250ZXh0IjpudWxsLCJncm91cEJ5RGltZW5zaW9ucyI6bnVsbH0sImZpbHRlciI6bnVsbCwic2FtcGxpbmdQZXJpb2QiOm51bGwsImludGVydmFscyI6Ikxhc3QgNiBob3VycyIsInBhZ2luYXRpb24iOnsicGFnZW51bWJlciI6MSwicGFnZXNpemUiOjEwMDAwLCJwYWdpbmdTcGVjIjpudWxsfSwiZ3JhbnVsYXJpdHkiOiJBTEwiLCJyZXBvcnREYXRhVHlwZSI6InJhdyIsImZpbHRlck1hcCI6eyJFUENfUF8xIjpbIk1NRTAwMUNSTyJdfSwiY291bnRlckdyb3Vwc1dpdGhDb3VudGVyQW5kUHJvcGVydGllcyI6W3siY291bnRlckdyb3VwSWQiOiJFUENfQ0dfMTEiLCJjb3VudGVyR3JvdXBEZXRhaWxzIjpudWxsLCJkZXZpY2VUeXBlIjpudWxsLCJuZUxldmVsIjpudWxsLCJjZ1NvdXJjZSI6bnVsbCwiY291bnRlckxpc3QiOlt7ImFnZ3JlZ2F0aW9uIjpudWxsLCJhZ2dyZWdhdGlvbkxpc3QiOm51bGwsImNvdW50ZXJLZXkiOnsiY291bnRlcklkIjoiRVBDX0NfMSIsImNvdW50ZXJHcm91cFRyYW5zIjpudWxsfSwiZGlzcGxheU5hbWUiOiJBVVRIIFJlcSIsImNvdW50ZXJVbml0IjoidGltZXMiLCJjb3VudGVyRGVzY3JpcHRpb24iOiJBdXRoZW50aWNhdGlvbiByZXF1ZXN0IFRpbWVzIiwiY291bnRlclR5cGUiOiJDb3VudGVyIiwiZW5hYmxlZCI6bnVsbCwic291cmNlTmFtZSI6bnVsbCwiZm9ybXVsYSI6bnVsbH1dLCJwcm9wZXJ0aWVzIjpbeyJwcm9wZXJ0eUtleSI6eyJwcm9wZXJ0eUlkIjoiRVBDX1BfMSIsImNvdW50ZXJHcm91cHMiOnsiY291bnRlckdyb3VwSWQiOiJFUENfQ0dfMTEiLCJjb3VudGVyR3JvdXBEZXRhaWxzIjpudWxsLCJkZXZpY2VUeXBlIjpudWxsLCJuZUxldmVsIjpudWxsLCJjZ1NvdXJjZSI6bnVsbCwiY291bnRlckxpc3QiOm51bGwsInByb3BlcnRpZXMiOm51bGwsImtwaXMiOm51bGwsImRpc3BsYXlOYW1lIjpudWxsfX0sInByb3BlcnR5TmFtZSI6Ik1NRV9OQU1FIiwicHJvcGVydHlWYWx1ZXMiOiJ7XCJ2YWx1ZXNcIjpbXCJNTUUwMDFDUk9cIixcIk1NRTAwMUxEU1wiLFwiTU1FMDAxTFROXCIsXCJNTUUwMDFNRkRcIixcIk1NRTAwMVdWTlwiLFwiTU1FMDAyQktUXCIsXCJNTUUwMDJDUk9cIixcIk1NRTAwMkxEU1wiLFwiTU1FMDAyTFROXCIsXCJNTUUwMDJNRkRcIixcIk1NRTAwMldWTlwiLFwiTU1FMDAxRU5GXCIsXCJNTUUwMDFQUlNcIixcIk1NRTAwMUJLVFwiXX0iLCJzZWxlY3RlZFZhbHVlcyI6WyJNTUUwMDFDUk8iXX0seyJwcm9wZXJ0eUtleSI6eyJwcm9wZXJ0eUlkIjoiRVBDX1BfMyIsImNvdW50ZXJHcm91cHMiOnsiY291bnRlckdyb3VwSWQiOiJFUENfQ0dfMTEiLCJjb3VudGVyR3JvdXBEZXRhaWxzIjpudWxsLCJkZXZpY2VUeXBlIjpudWxsLCJuZUxldmVsIjpudWxsLCJjZ1NvdXJjZSI6bnVsbCwiY291bnRlckxpc3QiOm51bGwsInByb3BlcnRpZXMiOm51bGwsImtwaXMiOm51bGwsImRpc3BsYXlOYW1lIjpudWxsfX0sInByb3BlcnR5TmFtZSI6Ik5FVFdPUktfTkFNRSIsInByb3BlcnR5VmFsdWVzIjoibnVsbCIsInNlbGVjdGVkVmFsdWVzIjpudWxsfV0sImtwaXMiOm51bGwsImRpc3BsYXlOYW1lIjoiSFdJX01NRV9TMU1PRFNFQyJ9XX0="
  //                       },
  //                       {
  //                         "dashboardtemplateId": "ExeDTHm",
  //                         "reportName": "Test-MME-Sai",
  //                         "reportDetail": "eyJjb25maWd1cmF0aW9uIjp7ImF0dHJpYnV0ZXMiOm51bGwsInByb3BlcnRpZXMiOm51bGwsIm1ldHJpY3MiOlt7ImlkIjoiRVBDX0NfMSIsImFnZ3JlZ2F0aW9uVHlwZSI6Ik1BWCJ9LHsiaWQiOiJFUENfQ18yIiwiYWdncmVnYXRpb25UeXBlIjoiQVZHIn1dLCJrcGlNZXRyaWNzIjpudWxsLCJuYW1lIjoiVGVzdC1NTUUtU2FpIiwidHlwZSI6IlRhYmxlIiwic3ViVHlwZSI6IlRhYmxlIiwiZGV2aWNlVHlwZSI6Ik1NRSIsImVudGl0eSI6bnVsbCwiZGltZW5zaW9ucyI6W3sibmFtZSI6Ik1NRV9OQU1FIiwiZGlzcGxheU5hbWUiOiJNTUVfTkFNRSIsImlkIjoiRVBDX1BfMSJ9LHsibmFtZSI6Ik5FVFdPUktfTkFNRSIsImRpc3BsYXlOYW1lIjoiTkVUV09SS19OQU1FIiwiaWQiOiJFUENfUF81In1dLCJjb250ZXh0IjpudWxsLCJncm91cEJ5RGltZW5zaW9ucyI6bnVsbH0sImZpbHRlciI6eyJjb25kaXRpb24iOiJBTkQiLCJydWxlcyI6W3siY29uZGl0aW9uIjoiT1IiLCJydWxlcyI6W3siZmllbGQiOiJDT1VOVEVSX0dST1VQX0lEIiwidmFsdWUiOiJFUENfQ0dfMSIsInR5cGUiOiJzZWxlY3RvciJ9XX0seyJjb25kaXRpb24iOiJPUiIsInJ1bGVzIjpbeyJpZCI6IkVQQ19DXzEiLCJ2YWx1ZSI6Ii0yMTQ3NDgzNjQ4IiwidHlwZSI6ImJvdW5kIn0seyJpZCI6IkVQQ19DXzIiLCJ2YWx1ZSI6Ii0yMTQ3NDgzNjQ4IiwidHlwZSI6ImJvdW5kIn1dfV19LCJzYW1wbGluZ1BlcmlvZCI6bnVsbCwiaW50ZXJ2YWxzIjoiTGFzdCA2IGhvdXJzIiwicGFnaW5hdGlvbiI6eyJwYWdlbnVtYmVyIjoxLCJwYWdlc2l6ZSI6MTAwMDAsInBhZ2luZ1NwZWMiOm51bGx9LCJncmFudWxhcml0eSI6IkFMTCIsInJlcG9ydERhdGFUeXBlIjoicmF3IiwiZmlsdGVyTWFwIjp7IkVQQ19QXzEiOlsiTU1FMDAxV1ZOIl19LCJjb3VudGVyR3JvdXBzV2l0aENvdW50ZXJBbmRQcm9wZXJ0aWVzIjpbeyJjb3VudGVyR3JvdXBJZCI6IkVQQ19DR18xIiwiY291bnRlckdyb3VwRGV0YWlscyI6bnVsbCwiZGV2aWNlVHlwZSI6bnVsbCwibmVMZXZlbCI6bnVsbCwiY2dTb3VyY2UiOm51bGwsImNvdW50ZXJMaXN0IjpbeyJhZ2dyZWdhdGlvbiI6bnVsbCwiYWdncmVnYXRpb25MaXN0IjpudWxsLCJjb3VudGVyS2V5Ijp7ImNvdW50ZXJJZCI6IkVQQ19DXzEiLCJjb3VudGVyR3JvdXBUcmFucyI6bnVsbH0sImRpc3BsYXlOYW1lIjoiQ29yZSBtYXhpbXVtIENQVSIsImNvdW50ZXJVbml0IjoiJSIsImNvdW50ZXJEZXNjcmlwdGlvbiI6IkNvcmUgbWF4aW11bSBDUFUgb2NjdXBhdGlvbiByYXRpbyIsImNvdW50ZXJUeXBlIjoiQ291bnRlciIsImVuYWJsZWQiOm51bGwsInNvdXJjZU5hbWUiOm51bGwsImZvcm11bGEiOm51bGx9LHsiYWdncmVnYXRpb24iOm51bGwsImFnZ3JlZ2F0aW9uTGlzdCI6bnVsbCwiY291bnRlcktleSI6eyJjb3VudGVySWQiOiJFUENfQ18yIiwiY291bnRlckdyb3VwVHJhbnMiOm51bGx9LCJkaXNwbGF5TmFtZSI6IkNvcmUgQXZnIENQVSBvY2N1cGF0aW9uIHJhdGlvIiwiY291bnRlclVuaXQiOiIlIiwiY291bnRlckRlc2NyaXB0aW9uIjoiQ29yZSBhdmVyYWdlIENQVSBvY2N1cGF0aW9uIHJhdGlvIiwiY291bnRlclR5cGUiOiJDb3VudGVyIiwiZW5hYmxlZCI6bnVsbCwic291cmNlTmFtZSI6bnVsbCwiZm9ybXVsYSI6bnVsbH1dLCJwcm9wZXJ0aWVzIjpbeyJwcm9wZXJ0eUtleSI6eyJwcm9wZXJ0eUlkIjoiRVBDX1BfMSIsImNvdW50ZXJHcm91cHMiOnsiY291bnRlckdyb3VwSWQiOiJFUENfQ0dfMSIsImNvdW50ZXJHcm91cERldGFpbHMiOm51bGwsImRldmljZVR5cGUiOm51bGwsIm5lTGV2ZWwiOm51bGwsImNnU291cmNlIjpudWxsLCJjb3VudGVyTGlzdCI6bnVsbCwicHJvcGVydGllcyI6bnVsbCwia3BpcyI6bnVsbCwiZGlzcGxheU5hbWUiOm51bGx9fSwicHJvcGVydHlOYW1lIjoiTU1FX05BTUUiLCJwcm9wZXJ0eVZhbHVlcyI6IntcInZhbHVlc1wiOltcIk1NRTAwMUNST1wiLFwiTU1FMDAxTERTXCIsXCJNTUUwMDFMVE5cIixcIk1NRTAwMU1GRFwiLFwiTU1FMDAxV1ZOXCIsXCJNTUUwMDJCS1RcIixcIk1NRTAwMkNST1wiLFwiTU1FMDAyTERTXCIsXCJNTUUwMDJMVE5cIixcIk1NRTAwMk1GRFwiLFwiTU1FMDAyV1ZOXCIsXCJNTUUwMDFFTkZcIixcIk1NRTAwMVBSU1wiLFwiTU1FMDAxQktUXCJdfSIsInNlbGVjdGVkVmFsdWVzIjpbIk1NRTAwMVdWTiJdfSx7InByb3BlcnR5S2V5Ijp7InByb3BlcnR5SWQiOiJFUENfUF81IiwiY291bnRlckdyb3VwcyI6eyJjb3VudGVyR3JvdXBJZCI6IkVQQ19DR18xIiwiY291bnRlckdyb3VwRGV0YWlscyI6bnVsbCwiZGV2aWNlVHlwZSI6bnVsbCwibmVMZXZlbCI6bnVsbCwiY2dTb3VyY2UiOm51bGwsImNvdW50ZXJMaXN0IjpudWxsLCJwcm9wZXJ0aWVzIjpudWxsLCJrcGlzIjpudWxsLCJkaXNwbGF5TmFtZSI6bnVsbH19LCJwcm9wZXJ0eU5hbWUiOiJORVRXT1JLX05BTUUiLCJwcm9wZXJ0eVZhbHVlcyI6Im51bGwiLCJzZWxlY3RlZFZhbHVlcyI6W119XSwia3BpcyI6bnVsbCwiZGlzcGxheU5hbWUiOiJIV0lfTU1FX0NPUkVDUFVSRVNDIn1dfQ=="
  //                       }
  //                     ]
  //                   }
  //                 ]
  //               }
  //             ],
  //             "applicableProfiles": []
  //           },
  //           {
  //             "profileId": 7,
  //             "profileName": "Standard User",
  //             "communityString": "standarduseree",
  //             "dataAccess": "EE",
  //             "accesses": [
  //               {
  //                 "accessId": 1,
  //                 "accessName": "Dashboard creation",
  //                 "displayName": "Dashboard"
  //               },
  //               {
  //                 "accessId": 2,
  //                 "accessName": "View all Reports",
  //                 "displayName": "My Reports"
  //               }
  //             ],
  //             "dashboards": [
  //               {
  //                 "dashboardId": "C2zBxL",
  //                 "name": "MME Dashboard",
  //                 "type": "common",
  //                 "view": "both",
  //                 "subDashboards": [
  //                   {
  //                     "subDashboardId": "hNsO2b",
  //                     "name": "CPU View",
  //                     "dashboardTemplates": [
  //                       {
  //                         "dashboardtemplateId": "D07jiR2",
  //                         "reportName": "Pawan",
  //                         "reportDetail": "eyJjb25maWd1cmF0aW9uIjp7ImF0dHJpYnV0ZXMiOm51bGwsInByb3BlcnRpZXMiOm51bGwsIm1ldHJpY3MiOlt7ImlkIjoiRVBDX0NfMSIsImFnZ3JlZ2F0aW9uVHlwZSI6IkFWRyJ9LHsiaWQiOiJFUENfQ18yIiwiYWdncmVnYXRpb25UeXBlIjoiTUFYIn1dLCJrcGlNZXRyaWNzIjpudWxsLCJuYW1lIjoiUGF3YW4iLCJ0eXBlIjoiVGFibGUiLCJzdWJUeXBlIjoiVGFibGUiLCJkZXZpY2VUeXBlIjoiQ0dQIiwiZW50aXR5IjpudWxsLCJkaW1lbnNpb25zIjpbeyJuYW1lIjoiQ0dQX05BTUUiLCJkaXNwbGF5TmFtZSI6IkNHUF9OQU1FIiwiaWQiOiJFUENfUF8xIn0seyJuYW1lIjoiTkVUV09SS19OQU1FIiwiZGlzcGxheU5hbWUiOiJORVRXT1JLX05BTUUiLCJpZCI6IkVQQ19QXzUifV0sImNvbnRleHQiOm51bGwsImdyb3VwQnlEaW1lbnNpb25zIjpudWxsfSwiZmlsdGVyIjp7ImNvbmRpdGlvbiI6IkFORCIsInJ1bGVzIjpbeyJjb25kaXRpb24iOiJPUiIsInJ1bGVzIjpbeyJmaWVsZCI6IkNPVU5URVJfR1JPVVBfSUQiLCJ2YWx1ZSI6IkVQQ19DR18zMyIsInR5cGUiOiJzZWxlY3RvciJ9LHsiZmllbGQiOiJDT1VOVEVSX0dST1VQX0lEIiwidmFsdWUiOiJFUENfQ0dfMzYiLCJ0eXBlIjoic2VsZWN0b3IifV19LHsiY29uZGl0aW9uIjoiT1IiLCJydWxlcyI6W3siaWQiOiJFUENfQ18xIiwidmFsdWUiOiItMjE0NzQ4MzY0OCIsInR5cGUiOiJib3VuZCJ9LHsiaWQiOiJFUENfQ18yIiwidmFsdWUiOiItMjE0NzQ4MzY0OCIsInR5cGUiOiJib3VuZCJ9XX1dfSwic2FtcGxpbmdQZXJpb2QiOm51bGwsImludGVydmFscyI6Ikxhc3QgMSBkYXkiLCJwYWdpbmF0aW9uIjp7InBhZ2VudW1iZXIiOjEsInBhZ2VzaXplIjoxMDAwMCwicGFnaW5nU3BlYyI6bnVsbH0sImdyYW51bGFyaXR5IjoiQUxMIiwicmVwb3J0RGF0YVR5cGUiOiJyYXciLCJmaWx0ZXJNYXAiOnsiRVBDX1BfMSI6WyJNTUUwMDFCS1QiLCJNTUUwMDFDUk8iXX0sImNvdW50ZXJHcm91cHNXaXRoQ291bnRlckFuZFByb3BlcnRpZXMiOlt7ImNvdW50ZXJHcm91cElkIjoiRVBDX0NHXzMzIiwiY291bnRlckdyb3VwRGV0YWlscyI6bnVsbCwiZGV2aWNlVHlwZSI6bnVsbCwibmVMZXZlbCI6bnVsbCwiY2dTb3VyY2UiOm51bGwsImNvdW50ZXJMaXN0IjpbeyJhZ2dyZWdhdGlvbiI6bnVsbCwiYWdncmVnYXRpb25MaXN0IjpudWxsLCJjb3VudGVyS2V5Ijp7ImNvdW50ZXJJZCI6IkVQQ19DXzEiLCJjb3VudGVyR3JvdXBUcmFucyI6bnVsbH0sImRpc3BsYXlOYW1lIjoiTWVhbiBDUFUgTG9hZCIsImNvdW50ZXJVbml0IjoiJSIsImNvdW50ZXJEZXNjcmlwdGlvbiI6Ik1lYW4gQ1BVIExvYWQiLCJjb3VudGVyVHlwZSI6IkNvdW50ZXIiLCJlbmFibGVkIjpudWxsLCJzb3VyY2VOYW1lIjpudWxsLCJmb3JtdWxhIjpudWxsfSx7ImFnZ3JlZ2F0aW9uIjpudWxsLCJhZ2dyZWdhdGlvbkxpc3QiOm51bGwsImNvdW50ZXJLZXkiOnsiY291bnRlcklkIjoiRVBDX0NfMiIsImNvdW50ZXJHcm91cFRyYW5zIjpudWxsfSwiZGlzcGxheU5hbWUiOiJNYXhpbXVtIENQVSBMb2FkIiwiY291bnRlclVuaXQiOiIlIiwiY291bnRlckRlc2NyaXB0aW9uIjoiTWF4aW11bSBDUFUgTG9hZCIsImNvdW50ZXJUeXBlIjoiQ291bnRlciIsImVuYWJsZWQiOm51bGwsInNvdXJjZU5hbWUiOm51bGwsImZvcm11bGEiOm51bGx9XSwicHJvcGVydGllcyI6W3sicHJvcGVydHlLZXkiOnsicHJvcGVydHlJZCI6IkVQQ19QXzEiLCJjb3VudGVyR3JvdXBzIjp7ImNvdW50ZXJHcm91cElkIjoiRVBDX0NHXzMzIiwiY291bnRlckdyb3VwRGV0YWlscyI6bnVsbCwiZGV2aWNlVHlwZSI6bnVsbCwibmVMZXZlbCI6bnVsbCwiY2dTb3VyY2UiOm51bGwsImNvdW50ZXJMaXN0IjpudWxsLCJwcm9wZXJ0aWVzIjpudWxsLCJrcGlzIjpudWxsLCJkaXNwbGF5TmFtZSI6bnVsbH19LCJwcm9wZXJ0eU5hbWUiOiJDR1BfTkFNRSIsInByb3BlcnR5VmFsdWVzIjoie1widmFsdWVzXCI6W1wiTU1FMDAxQktUXCIsXCJNTUUwMDFDUk9cIixcIk1NRTAwMUxEU1wiLFwiTU1FMDAxTFROXCIsXCJNTUUwMDFNRkRcIixcIk1NRTAwMVdWTlwiLFwiTU1FMDAyQ1JPXCIsXCJNTUUwMDJMRFNcIixcIk1NRTAwMkxUTlwiLFwiTU1FMDAyV1ZOXCIsXCJQU0hDUk8xQ1wiLFwiUFNIS1QwM0NcIixcIlBTSExEMDJDXCIsXCJQU0hMVDAxQ1wiLFwiUFNITUYwMUNcIixcIlBTSFdWMDJDXCIsXCJQU0hXVjAzQ1wiXX0iLCJzZWxlY3RlZFZhbHVlcyI6WyJNTUUwMDFCS1QiLCJNTUUwMDFDUk8iXX0seyJwcm9wZXJ0eUtleSI6eyJwcm9wZXJ0eUlkIjoiRVBDX1BfNSIsImNvdW50ZXJHcm91cHMiOnsiY291bnRlckdyb3VwSWQiOiJFUENfQ0dfMzMiLCJjb3VudGVyR3JvdXBEZXRhaWxzIjpudWxsLCJkZXZpY2VUeXBlIjpudWxsLCJuZUxldmVsIjpudWxsLCJjZ1NvdXJjZSI6bnVsbCwiY291bnRlckxpc3QiOm51bGwsInByb3BlcnRpZXMiOm51bGwsImtwaXMiOm51bGwsImRpc3BsYXlOYW1lIjpudWxsfX0sInByb3BlcnR5TmFtZSI6Ik5FVFdPUktfTkFNRSIsInByb3BlcnR5VmFsdWVzIjoibnVsbCIsInNlbGVjdGVkVmFsdWVzIjpbXX1dLCJrcGlzIjpudWxsLCJkaXNwbGF5TmFtZSI6IkhXSV9DR1BfQ1BVX0xPQUQifSx7ImNvdW50ZXJHcm91cElkIjoiRVBDX0NHXzM2IiwiY291bnRlckdyb3VwRGV0YWlscyI6bnVsbCwiZGV2aWNlVHlwZSI6bnVsbCwibmVMZXZlbCI6bnVsbCwiY2dTb3VyY2UiOm51bGwsImNvdW50ZXJMaXN0IjpbeyJhZ2dyZWdhdGlvbiI6bnVsbCwiYWdncmVnYXRpb25MaXN0IjpudWxsLCJjb3VudGVyS2V5Ijp7ImNvdW50ZXJJZCI6IkVQQ19DXzIiLCJjb3VudGVyR3JvdXBUcmFucyI6bnVsbH0sImRpc3BsYXlOYW1lIjoiVXNlZCBNZW1vcnkgU2l6ZSIsImNvdW50ZXJVbml0IjoiTUIiLCJjb3VudGVyRGVzY3JpcHRpb24iOiJVc2VkIE1lbW9yeSBTaXplIiwiY291bnRlclR5cGUiOiJDb3VudGVyIiwiZW5hYmxlZCI6bnVsbCwic291cmNlTmFtZSI6bnVsbCwiZm9ybXVsYSI6bnVsbH1dLCJwcm9wZXJ0aWVzIjpbeyJwcm9wZXJ0eUtleSI6eyJwcm9wZXJ0eUlkIjoiRVBDX1BfMSIsImNvdW50ZXJHcm91cHMiOnsiY291bnRlckdyb3VwSWQiOiJFUENfQ0dfMzYiLCJjb3VudGVyR3JvdXBEZXRhaWxzIjpudWxsLCJkZXZpY2VUeXBlIjpudWxsLCJuZUxldmVsIjpudWxsLCJjZ1NvdXJjZSI6bnVsbCwiY291bnRlckxpc3QiOm51bGwsInByb3BlcnRpZXMiOm51bGwsImtwaXMiOm51bGwsImRpc3BsYXlOYW1lIjpudWxsfX0sInByb3BlcnR5TmFtZSI6IkNHUF9OQU1FIiwicHJvcGVydHlWYWx1ZXMiOiJ7XCJ2YWx1ZXNcIjpbXCJNTUUwMDFCS1RcIixcIk1NRTAwMUNST1wiLFwiTU1FMDAxTERTXCIsXCJNTUUwMDFMVE5cIixcIk1NRTAwMU1GRFwiLFwiTU1FMDAxV1ZOXCIsXCJNTUUwMDJDUk9cIixcIk1NRTAwMkxEU1wiLFwiTU1FMDAyTFROXCIsXCJNTUUwMDJXVk5cIixcIlBTSENSTzFDXCIsXCJQU0hLVDAzQ1wiLFwiUFNITEQwMkNcIixcIlBTSExUMDFDXCIsXCJQU0hNRjAxQ1wiLFwiUFNIV1YwMkNcIixcIlBTSFdWMDNDXCJdfSIsInNlbGVjdGVkVmFsdWVzIjpbIk1NRTAwMUJLVCIsIk1NRTAwMUNSTyJdfSx7InByb3BlcnR5S2V5Ijp7InByb3BlcnR5SWQiOiJFUENfUF81IiwiY291bnRlckdyb3VwcyI6eyJjb3VudGVyR3JvdXBJZCI6IkVQQ19DR18zNiIsImNvdW50ZXJHcm91cERldGFpbHMiOm51bGwsImRldmljZVR5cGUiOm51bGwsIm5lTGV2ZWwiOm51bGwsImNnU291cmNlIjpudWxsLCJjb3VudGVyTGlzdCI6bnVsbCwicHJvcGVydGllcyI6bnVsbCwia3BpcyI6bnVsbCwiZGlzcGxheU5hbWUiOm51bGx9fSwicHJvcGVydHlOYW1lIjoiTkVUV09SS19OQU1FIiwicHJvcGVydHlWYWx1ZXMiOiJudWxsIiwic2VsZWN0ZWRWYWx1ZXMiOltdfV0sImtwaXMiOm51bGwsImRpc3BsYXlOYW1lIjoiSFdJX0NHUF9NRU0ifV19"
  //                       },
  //                       {
  //                         "dashboardtemplateId": "H2HwaWv",
  //                         "reportName": "Aval",
  //                         "reportDetail": "eyJjb25maWd1cmF0aW9uIjp7ImF0dHJpYnV0ZXMiOm51bGwsInByb3BlcnRpZXMiOm51bGwsIm1ldHJpY3MiOlt7ImlkIjoiRVBDX0NfMSIsImFnZ3JlZ2F0aW9uVHlwZSI6IkFWRyJ9XSwia3BpTWV0cmljcyI6bnVsbCwibmFtZSI6IkF2YWwiLCJ0eXBlIjoiR3JhcGgiLCJzdWJUeXBlIjoiQmFyIiwiZGV2aWNlVHlwZSI6IkNHUCIsImVudGl0eSI6bnVsbCwiZGltZW5zaW9ucyI6W3sibmFtZSI6IkNHUF9OQU1FIiwiZGlzcGxheU5hbWUiOiJDR1BfTkFNRSIsImlkIjoiRVBDX1BfMSJ9LHsibmFtZSI6Ik5FVFdPUktfTkFNRSIsImRpc3BsYXlOYW1lIjoiTkVUV09SS19OQU1FIiwiaWQiOiJFUENfUF81In0seyJuYW1lIjoiQk9BUkRfTE9DQVRJT04iLCJkaXNwbGF5TmFtZSI6IkJPQVJEX0xPQ0FUSU9OIiwiaWQiOiJFUENfUF8yIn1dLCJjb250ZXh0IjpudWxsLCJncm91cEJ5RGltZW5zaW9ucyI6bnVsbH0sImZpbHRlciI6eyJjb25kaXRpb24iOiJBTkQiLCJydWxlcyI6W3siY29uZGl0aW9uIjoiT1IiLCJydWxlcyI6W3siZmllbGQiOiJDT1VOVEVSX0dST1VQX0lEIiwidmFsdWUiOiJFUENfQ0dfMzMiLCJ0eXBlIjoic2VsZWN0b3IifV19LHsiY29uZGl0aW9uIjoiT1IiLCJydWxlcyI6W3siaWQiOiJFUENfQ18xIiwidmFsdWUiOiItMjE0NzQ4MzY0OCIsInR5cGUiOiJib3VuZCJ9XX1dfSwic2FtcGxpbmdQZXJpb2QiOm51bGwsImludGVydmFscyI6Ikxhc3QgMSB3ZWVrIiwicGFnaW5hdGlvbiI6eyJwYWdlbnVtYmVyIjoxLCJwYWdlc2l6ZSI6MTAwMDAsInBhZ2luZ1NwZWMiOm51bGx9LCJncmFudWxhcml0eSI6IkFMTCIsInJlcG9ydERhdGFUeXBlIjoicmF3IiwiZmlsdGVyTWFwIjp7IkVQQ19QXzEiOlsiTU1FMDAxQktUIl19LCJjb3VudGVyR3JvdXBzV2l0aENvdW50ZXJBbmRQcm9wZXJ0aWVzIjpbeyJjb3VudGVyR3JvdXBJZCI6IkVQQ19DR18zMyIsImNvdW50ZXJHcm91cERldGFpbHMiOm51bGwsImRldmljZVR5cGUiOm51bGwsIm5lTGV2ZWwiOm51bGwsImNnU291cmNlIjpudWxsLCJjb3VudGVyTGlzdCI6W3siYWdncmVnYXRpb24iOm51bGwsImFnZ3JlZ2F0aW9uTGlzdCI6bnVsbCwiY291bnRlcktleSI6eyJjb3VudGVySWQiOiJFUENfQ18xIiwiY291bnRlckdyb3VwVHJhbnMiOm51bGx9LCJkaXNwbGF5TmFtZSI6Ik1lYW4gQ1BVIExvYWQiLCJjb3VudGVyVW5pdCI6IiUiLCJjb3VudGVyRGVzY3JpcHRpb24iOiJNZWFuIENQVSBMb2FkIiwiY291bnRlclR5cGUiOiJDb3VudGVyIiwiZW5hYmxlZCI6bnVsbCwic291cmNlTmFtZSI6bnVsbCwiZm9ybXVsYSI6bnVsbH1dLCJwcm9wZXJ0aWVzIjpbeyJwcm9wZXJ0eUtleSI6eyJwcm9wZXJ0eUlkIjoiRVBDX1BfMSIsImNvdW50ZXJHcm91cHMiOnsiY291bnRlckdyb3VwSWQiOiJFUENfQ0dfMzMiLCJjb3VudGVyR3JvdXBEZXRhaWxzIjpudWxsLCJkZXZpY2VUeXBlIjpudWxsLCJuZUxldmVsIjpudWxsLCJjZ1NvdXJjZSI6bnVsbCwiY291bnRlckxpc3QiOm51bGwsInByb3BlcnRpZXMiOm51bGwsImtwaXMiOm51bGwsImRpc3BsYXlOYW1lIjpudWxsfX0sInByb3BlcnR5TmFtZSI6IkNHUF9OQU1FIiwicHJvcGVydHlWYWx1ZXMiOiJ7XCJ2YWx1ZXNcIjpbXCJNTUUwMDFCS1RcIixcIk1NRTAwMUNST1wiLFwiTU1FMDAxTERTXCIsXCJNTUUwMDFMVE5cIixcIk1NRTAwMU1GRFwiLFwiTU1FMDAxV1ZOXCIsXCJNTUUwMDJDUk9cIixcIk1NRTAwMkxEU1wiLFwiTU1FMDAyTFROXCIsXCJNTUUwMDJXVk5cIixcIlBTSENSTzFDXCIsXCJQU0hLVDAzQ1wiLFwiUFNITEQwMkNcIixcIlBTSExUMDFDXCIsXCJQU0hNRjAxQ1wiLFwiUFNIV1YwMkNcIixcIlBTSFdWMDNDXCJdfSIsInNlbGVjdGVkVmFsdWVzIjpbIk1NRTAwMUJLVCJdfSx7InByb3BlcnR5S2V5Ijp7InByb3BlcnR5SWQiOiJFUENfUF8yIiwiY291bnRlckdyb3VwcyI6eyJjb3VudGVyR3JvdXBJZCI6IkVQQ19DR18zMyIsImNvdW50ZXJHcm91cERldGFpbHMiOm51bGwsImRldmljZVR5cGUiOm51bGwsIm5lTGV2ZWwiOm51bGwsImNnU291cmNlIjpudWxsLCJjb3VudGVyTGlzdCI6bnVsbCwicHJvcGVydGllcyI6bnVsbCwia3BpcyI6bnVsbCwiZGlzcGxheU5hbWUiOm51bGx9fSwicHJvcGVydHlOYW1lIjoiQk9BUkRfTE9DQVRJT04iLCJwcm9wZXJ0eVZhbHVlcyI6Im51bGwiLCJzZWxlY3RlZFZhbHVlcyI6W119LHsicHJvcGVydHlLZXkiOnsicHJvcGVydHlJZCI6IkVQQ19QXzUiLCJjb3VudGVyR3JvdXBzIjp7ImNvdW50ZXJHcm91cElkIjoiRVBDX0NHXzMzIiwiY291bnRlckdyb3VwRGV0YWlscyI6bnVsbCwiZGV2aWNlVHlwZSI6bnVsbCwibmVMZXZlbCI6bnVsbCwiY2dTb3VyY2UiOm51bGwsImNvdW50ZXJMaXN0IjpudWxsLCJwcm9wZXJ0aWVzIjpudWxsLCJrcGlzIjpudWxsLCJkaXNwbGF5TmFtZSI6bnVsbH19LCJwcm9wZXJ0eU5hbWUiOiJORVRXT1JLX05BTUUiLCJwcm9wZXJ0eVZhbHVlcyI6Im51bGwiLCJzZWxlY3RlZFZhbHVlcyI6W119XSwia3BpcyI6bnVsbCwiZGlzcGxheU5hbWUiOiJIV0lfQ0dQX0NQVV9MT0FEIn1dfQ=="
  //                       },
  //                       {
  //                         "dashboardtemplateId": "Q2AdOzc",
  //                         "reportName": "Network issue analysis for Location1",
  //                         "reportDetail": "eyJjb25maWd1cmF0aW9uIjp7ImF0dHJpYnV0ZXMiOm51bGwsInByb3BlcnRpZXMiOm51bGwsIm1ldHJpY3MiOlt7ImlkIjoiRVBDX0NfMSIsImFnZ3JlZ2F0aW9uVHlwZSI6IkFWRyJ9LHsiaWQiOiJFUENfQ18yIiwiYWdncmVnYXRpb25UeXBlIjoiTUFYIn0seyJpZCI6IkVQQ19DXzkiLCJhZ2dyZWdhdGlvblR5cGUiOiJTVU0ifV0sImtwaU1ldHJpY3MiOm51bGwsIm5hbWUiOiJOZXR3b3JrIGlzc3VlIGFuYWx5c2lzIGZvciBMb2NhdGlvbjEiLCJ0eXBlIjoiVGFibGUiLCJzdWJUeXBlIjoiVGFibGUiLCJkZXZpY2VUeXBlIjoiQ0dQIiwiZW50aXR5IjpudWxsLCJkaW1lbnNpb25zIjpbeyJuYW1lIjoiTkVUV09SS19OQU1FIiwiZGlzcGxheU5hbWUiOiJORVRXT1JLX05BTUUiLCJpZCI6IkVQQ19QXzUifSx7Im5hbWUiOiJCT0FSRF9MT0NBVElPTiIsImRpc3BsYXlOYW1lIjoiQk9BUkRfTE9DQVRJT04iLCJpZCI6IkVQQ19QXzIifSx7Im5hbWUiOiJDR1BfTkFNRSIsImRpc3BsYXlOYW1lIjoiQ0dQX05BTUUiLCJpZCI6IkVQQ19QXzEifV0sImNvbnRleHQiOm51bGwsImdyb3VwQnlEaW1lbnNpb25zIjpudWxsfSwiZmlsdGVyIjp7ImNvbmRpdGlvbiI6IkFORCIsInJ1bGVzIjpbeyJjb25kaXRpb24iOiJPUiIsInJ1bGVzIjpbeyJmaWVsZCI6IkNPVU5URVJfR1JPVVBfSUQiLCJ2YWx1ZSI6IkVQQ19DR18zMyIsInR5cGUiOiJzZWxlY3RvciJ9LHsiZmllbGQiOiJDT1VOVEVSX0dST1VQX0lEIiwidmFsdWUiOiJFUENfQ0dfMzUiLCJ0eXBlIjoic2VsZWN0b3IifV19LHsiY29uZGl0aW9uIjoiT1IiLCJydWxlcyI6W3siaWQiOiJFUENfQ18xIiwidmFsdWUiOiItMjE0NzQ4MzY0OCIsInR5cGUiOiJib3VuZCJ9LHsiaWQiOiJFUENfQ18yIiwidmFsdWUiOiItMjE0NzQ4MzY0OCIsInR5cGUiOiJib3VuZCJ9LHsiaWQiOiJFUENfQ185IiwidmFsdWUiOiItMjE0NzQ4MzY0OCIsInR5cGUiOiJib3VuZCJ9XX1dfSwic2FtcGxpbmdQZXJpb2QiOm51bGwsImludGVydmFscyI6IjIwMTgtMDQtMDJUMDQ6MjU6MDAuMDAwWi8yMDE4LTA0LTA0VDEzOjQ0OjAwLjAwMFoiLCJwYWdpbmF0aW9uIjp7InBhZ2VudW1iZXIiOjEsInBhZ2VzaXplIjoxMDAwMCwicGFnaW5nU3BlYyI6bnVsbH0sImdyYW51bGFyaXR5IjoiQUxMIiwicmVwb3J0RGF0YVR5cGUiOiJyYXciLCJmaWx0ZXJNYXAiOnsiRVBDX1BfMSI6WyJNTUUwMDFCS1QiLCJNTUUwMDFDUk8iLCJNTUUwMDFMRFMiLCJNTUUwMDFMVE4iXX0sImNvdW50ZXJHcm91cHNXaXRoQ291bnRlckFuZFByb3BlcnRpZXMiOlt7ImNvdW50ZXJHcm91cElkIjoiRVBDX0NHXzMzIiwiY291bnRlckdyb3VwRGV0YWlscyI6bnVsbCwiZGV2aWNlVHlwZSI6bnVsbCwibmVMZXZlbCI6bnVsbCwiY2dTb3VyY2UiOm51bGwsImNvdW50ZXJMaXN0IjpbeyJhZ2dyZWdhdGlvbiI6bnVsbCwiYWdncmVnYXRpb25MaXN0IjpudWxsLCJjb3VudGVyS2V5Ijp7ImNvdW50ZXJJZCI6IkVQQ19DXzEiLCJjb3VudGVyR3JvdXBUcmFucyI6bnVsbH0sImRpc3BsYXlOYW1lIjoiTWVhbiBDUFUgTG9hZCIsImNvdW50ZXJVbml0IjoiJSIsImNvdW50ZXJEZXNjcmlwdGlvbiI6Ik1lYW4gQ1BVIExvYWQiLCJjb3VudGVyVHlwZSI6IkNvdW50ZXIiLCJlbmFibGVkIjpudWxsLCJzb3VyY2VOYW1lIjpudWxsLCJmb3JtdWxhIjpudWxsfSx7ImFnZ3JlZ2F0aW9uIjpudWxsLCJhZ2dyZWdhdGlvbkxpc3QiOm51bGwsImNvdW50ZXJLZXkiOnsiY291bnRlcklkIjoiRVBDX0NfMiIsImNvdW50ZXJHcm91cFRyYW5zIjpudWxsfSwiZGlzcGxheU5hbWUiOiJNYXhpbXVtIENQVSBMb2FkIiwiY291bnRlclVuaXQiOiIlIiwiY291bnRlckRlc2NyaXB0aW9uIjoiTWF4aW11bSBDUFUgTG9hZCIsImNvdW50ZXJUeXBlIjoiQ291bnRlciIsImVuYWJsZWQiOm51bGwsInNvdXJjZU5hbWUiOm51bGwsImZvcm11bGEiOm51bGx9XSwicHJvcGVydGllcyI6W3sicHJvcGVydHlLZXkiOnsicHJvcGVydHlJZCI6IkVQQ19QXzEiLCJjb3VudGVyR3JvdXBzIjp7ImNvdW50ZXJHcm91cElkIjoiRVBDX0NHXzMzIiwiY291bnRlckdyb3VwRGV0YWlscyI6bnVsbCwiZGV2aWNlVHlwZSI6bnVsbCwibmVMZXZlbCI6bnVsbCwiY2dTb3VyY2UiOm51bGwsImNvdW50ZXJMaXN0IjpudWxsLCJwcm9wZXJ0aWVzIjpudWxsLCJrcGlzIjpudWxsLCJkaXNwbGF5TmFtZSI6bnVsbH19LCJwcm9wZXJ0eU5hbWUiOiJDR1BfTkFNRSIsInByb3BlcnR5VmFsdWVzIjoie1widmFsdWVzXCI6W1wiTU1FMDAxQktUXCIsXCJNTUUwMDFDUk9cIixcIk1NRTAwMUxEU1wiLFwiTU1FMDAxTFROXCIsXCJNTUUwMDFNRkRcIixcIk1NRTAwMVdWTlwiLFwiTU1FMDAyQ1JPXCIsXCJNTUUwMDJMRFNcIixcIk1NRTAwMkxUTlwiLFwiTU1FMDAyV1ZOXCIsXCJQU0hDUk8xQ1wiLFwiUFNIS1QwM0NcIixcIlBTSExEMDJDXCIsXCJQU0hMVDAxQ1wiLFwiUFNITUYwMUNcIixcIlBTSFdWMDJDXCIsXCJQU0hXVjAzQ1wiXX0iLCJzZWxlY3RlZFZhbHVlcyI6WyJNTUUwMDFCS1QiLCJNTUUwMDFDUk8iLCJNTUUwMDFMRFMiLCJNTUUwMDFMVE4iXX0seyJwcm9wZXJ0eUtleSI6eyJwcm9wZXJ0eUlkIjoiRVBDX1BfMiIsImNvdW50ZXJHcm91cHMiOnsiY291bnRlckdyb3VwSWQiOiJFUENfQ0dfMzMiLCJjb3VudGVyR3JvdXBEZXRhaWxzIjpudWxsLCJkZXZpY2VUeXBlIjpudWxsLCJuZUxldmVsIjpudWxsLCJjZ1NvdXJjZSI6bnVsbCwiY291bnRlckxpc3QiOm51bGwsInByb3BlcnRpZXMiOm51bGwsImtwaXMiOm51bGwsImRpc3BsYXlOYW1lIjpudWxsfX0sInByb3BlcnR5TmFtZSI6IkJPQVJEX0xPQ0FUSU9OIiwicHJvcGVydHlWYWx1ZXMiOiJudWxsIiwic2VsZWN0ZWRWYWx1ZXMiOltdfSx7InByb3BlcnR5S2V5Ijp7InByb3BlcnR5SWQiOiJFUENfUF81IiwiY291bnRlckdyb3VwcyI6eyJjb3VudGVyR3JvdXBJZCI6IkVQQ19DR18zMyIsImNvdW50ZXJHcm91cERldGFpbHMiOm51bGwsImRldmljZVR5cGUiOm51bGwsIm5lTGV2ZWwiOm51bGwsImNnU291cmNlIjpudWxsLCJjb3VudGVyTGlzdCI6bnVsbCwicHJvcGVydGllcyI6bnVsbCwia3BpcyI6bnVsbCwiZGlzcGxheU5hbWUiOm51bGx9fSwicHJvcGVydHlOYW1lIjoiTkVUV09SS19OQU1FIiwicHJvcGVydHlWYWx1ZXMiOiJudWxsIiwic2VsZWN0ZWRWYWx1ZXMiOltdfV0sImtwaXMiOm51bGwsImRpc3BsYXlOYW1lIjoiSFdJX0NHUF9DUFVfTE9BRCJ9LHsiY291bnRlckdyb3VwSWQiOiJFUENfQ0dfMzUiLCJjb3VudGVyR3JvdXBEZXRhaWxzIjpudWxsLCJkZXZpY2VUeXBlIjpudWxsLCJuZUxldmVsIjpudWxsLCJjZ1NvdXJjZSI6bnVsbCwiY291bnRlckxpc3QiOlt7ImFnZ3JlZ2F0aW9uIjpudWxsLCJhZ2dyZWdhdGlvbkxpc3QiOm51bGwsImNvdW50ZXJLZXkiOnsiY291bnRlcklkIjoiRVBDX0NfMSIsImNvdW50ZXJHcm91cFRyYW5zIjpudWxsfSwiZGlzcGxheU5hbWUiOiJTaXplIG9mIFBhY2tldHMgUmVjZWl2ZWQiLCJjb3VudGVyVW5pdCI6ImtpbG9ieXRlcyIsImNvdW50ZXJEZXNjcmlwdGlvbiI6IlNpemUgb2YgUGFja2V0cyBSZWNlaXZlZCBUaHJvdWdoIGEgUG9ydCIsImNvdW50ZXJUeXBlIjoiQ291bnRlciIsImVuYWJsZWQiOm51bGwsInNvdXJjZU5hbWUiOm51bGwsImZvcm11bGEiOm51bGx9LHsiYWdncmVnYXRpb24iOm51bGwsImFnZ3JlZ2F0aW9uTGlzdCI6bnVsbCwiY291bnRlcktleSI6eyJjb3VudGVySWQiOiJFUENfQ185IiwiY291bnRlckdyb3VwVHJhbnMiOm51bGx9LCJkaXNwbGF5TmFtZSI6IlNpemUgb2YgUGFja2V0cyBTZW50IiwiY291bnRlclVuaXQiOiJraWxvYnl0ZXMiLCJjb3VudGVyRGVzY3JpcHRpb24iOiJTaXplIG9mIFBhY2tldHMgU2VudCBUaHJvdWdoIGEgUG9ydCIsImNvdW50ZXJUeXBlIjoiQ291bnRlciIsImVuYWJsZWQiOm51bGwsInNvdXJjZU5hbWUiOm51bGwsImZvcm11bGEiOm51bGx9XSwicHJvcGVydGllcyI6W3sicHJvcGVydHlLZXkiOnsicHJvcGVydHlJZCI6IkVQQ19QXzEiLCJjb3VudGVyR3JvdXBzIjp7ImNvdW50ZXJHcm91cElkIjoiRVBDX0NHXzM1IiwiY291bnRlckdyb3VwRGV0YWlscyI6bnVsbCwiZGV2aWNlVHlwZSI6bnVsbCwibmVMZXZlbCI6bnVsbCwiY2dTb3VyY2UiOm51bGwsImNvdW50ZXJMaXN0IjpudWxsLCJwcm9wZXJ0aWVzIjpudWxsLCJrcGlzIjpudWxsLCJkaXNwbGF5TmFtZSI6bnVsbH19LCJwcm9wZXJ0eU5hbWUiOiJDR1BfTkFNRSIsInByb3BlcnR5VmFsdWVzIjoie1widmFsdWVzXCI6W1wiTU1FMDAxQktUXCIsXCJNTUUwMDFDUk9cIixcIk1NRTAwMUxEU1wiLFwiTU1FMDAxTFROXCIsXCJNTUUwMDFNRkRcIixcIk1NRTAwMVdWTlwiLFwiTU1FMDAyQ1JPXCIsXCJNTUUwMDJMRFNcIixcIk1NRTAwMkxUTlwiLFwiTU1FMDAyV1ZOXCIsXCJQU0hDUk8xQ1wiLFwiUFNIS1QwM0NcIixcIlBTSExEMDJDXCIsXCJQU0hMVDAxQ1wiLFwiUFNITUYwMUNcIixcIlBTSFdWMDJDXCIsXCJQU0hXVjAzQ1wiXX0iLCJzZWxlY3RlZFZhbHVlcyI6WyJNTUUwMDFCS1QiLCJNTUUwMDFDUk8iLCJNTUUwMDFMRFMiXX0seyJwcm9wZXJ0eUtleSI6eyJwcm9wZXJ0eUlkIjoiRVBDX1BfMiIsImNvdW50ZXJHcm91cHMiOnsiY291bnRlckdyb3VwSWQiOiJFUENfQ0dfMzUiLCJjb3VudGVyR3JvdXBEZXRhaWxzIjpudWxsLCJkZXZpY2VUeXBlIjpudWxsLCJuZUxldmVsIjpudWxsLCJjZ1NvdXJjZSI6bnVsbCwiY291bnRlckxpc3QiOm51bGwsInByb3BlcnRpZXMiOm51bGwsImtwaXMiOm51bGwsImRpc3BsYXlOYW1lIjpudWxsfX0sInByb3BlcnR5TmFtZSI6IlBPUlRfTkFNRSIsInByb3BlcnR5VmFsdWVzIjoibnVsbCIsInNlbGVjdGVkVmFsdWVzIjpbXX0seyJwcm9wZXJ0eUtleSI6eyJwcm9wZXJ0eUlkIjoiRVBDX1BfNSIsImNvdW50ZXJHcm91cHMiOnsiY291bnRlckdyb3VwSWQiOiJFUENfQ0dfMzUiLCJjb3VudGVyR3JvdXBEZXRhaWxzIjpudWxsLCJkZXZpY2VUeXBlIjpudWxsLCJuZUxldmVsIjpudWxsLCJjZ1NvdXJjZSI6bnVsbCwiY291bnRlckxpc3QiOm51bGwsInByb3BlcnRpZXMiOm51bGwsImtwaXMiOm51bGwsImRpc3BsYXlOYW1lIjpudWxsfX0sInByb3BlcnR5TmFtZSI6Ik5FVFdPUktfTkFNRSIsInByb3BlcnR5VmFsdWVzIjoibnVsbCIsInNlbGVjdGVkVmFsdWVzIjpbXX1dLCJrcGlzIjpudWxsLCJkaXNwbGF5TmFtZSI6IkhXSV9DR1BfRVRIX1RSQUZGIn1dfQ=="
  //                       }
  //                     ]
  //                   },
  //                   {
  //                     "subDashboardId": "PyAcpB",
  //                     "name": "Traffic",
  //                     "dashboardTemplates": [
  //                       {
  //                         "dashboardtemplateId": "qbCbw4L",
  //                         "reportName": "Aval",
  //                         "reportDetail": "eyJjb25maWd1cmF0aW9uIjp7ImF0dHJpYnV0ZXMiOm51bGwsInByb3BlcnRpZXMiOm51bGwsIm1ldHJpY3MiOlt7ImlkIjoiRVBDX0NfMSIsImFnZ3JlZ2F0aW9uVHlwZSI6IkFWRyJ9XSwia3BpTWV0cmljcyI6bnVsbCwibmFtZSI6IkF2YWwiLCJ0eXBlIjoiR3JhcGgiLCJzdWJUeXBlIjoiQmFyIiwiZGV2aWNlVHlwZSI6IkNHUCIsImVudGl0eSI6bnVsbCwiZGltZW5zaW9ucyI6W3sibmFtZSI6IkNHUF9OQU1FIiwiZGlzcGxheU5hbWUiOiJDR1BfTkFNRSIsImlkIjoiRVBDX1BfMSJ9LHsibmFtZSI6Ik5FVFdPUktfTkFNRSIsImRpc3BsYXlOYW1lIjoiTkVUV09SS19OQU1FIiwiaWQiOiJFUENfUF81In0seyJuYW1lIjoiQk9BUkRfTE9DQVRJT04iLCJkaXNwbGF5TmFtZSI6IkJPQVJEX0xPQ0FUSU9OIiwiaWQiOiJFUENfUF8yIn1dLCJjb250ZXh0IjpudWxsLCJncm91cEJ5RGltZW5zaW9ucyI6bnVsbH0sImZpbHRlciI6eyJjb25kaXRpb24iOiJBTkQiLCJydWxlcyI6W3siY29uZGl0aW9uIjoiT1IiLCJydWxlcyI6W3siZmllbGQiOiJDT1VOVEVSX0dST1VQX0lEIiwidmFsdWUiOiJFUENfQ0dfMzMiLCJ0eXBlIjoic2VsZWN0b3IifV19LHsiY29uZGl0aW9uIjoiT1IiLCJydWxlcyI6W3siaWQiOiJFUENfQ18xIiwidmFsdWUiOiItMjE0NzQ4MzY0OCIsInR5cGUiOiJib3VuZCJ9XX1dfSwic2FtcGxpbmdQZXJpb2QiOm51bGwsImludGVydmFscyI6Ikxhc3QgMSB3ZWVrIiwicGFnaW5hdGlvbiI6eyJwYWdlbnVtYmVyIjoxLCJwYWdlc2l6ZSI6MTAwMDAsInBhZ2luZ1NwZWMiOm51bGx9LCJncmFudWxhcml0eSI6IkFMTCIsInJlcG9ydERhdGFUeXBlIjoicmF3IiwiZmlsdGVyTWFwIjp7IkVQQ19QXzEiOlsiTU1FMDAxQktUIl19LCJjb3VudGVyR3JvdXBzV2l0aENvdW50ZXJBbmRQcm9wZXJ0aWVzIjpbeyJjb3VudGVyR3JvdXBJZCI6IkVQQ19DR18zMyIsImNvdW50ZXJHcm91cERldGFpbHMiOm51bGwsImRldmljZVR5cGUiOm51bGwsIm5lTGV2ZWwiOm51bGwsImNnU291cmNlIjpudWxsLCJjb3VudGVyTGlzdCI6W3siYWdncmVnYXRpb24iOm51bGwsImFnZ3JlZ2F0aW9uTGlzdCI6bnVsbCwiY291bnRlcktleSI6eyJjb3VudGVySWQiOiJFUENfQ18xIiwiY291bnRlckdyb3VwVHJhbnMiOm51bGx9LCJkaXNwbGF5TmFtZSI6Ik1lYW4gQ1BVIExvYWQiLCJjb3VudGVyVW5pdCI6IiUiLCJjb3VudGVyRGVzY3JpcHRpb24iOiJNZWFuIENQVSBMb2FkIiwiY291bnRlclR5cGUiOiJDb3VudGVyIiwiZW5hYmxlZCI6bnVsbCwic291cmNlTmFtZSI6bnVsbCwiZm9ybXVsYSI6bnVsbH1dLCJwcm9wZXJ0aWVzIjpbeyJwcm9wZXJ0eUtleSI6eyJwcm9wZXJ0eUlkIjoiRVBDX1BfMSIsImNvdW50ZXJHcm91cHMiOnsiY291bnRlckdyb3VwSWQiOiJFUENfQ0dfMzMiLCJjb3VudGVyR3JvdXBEZXRhaWxzIjpudWxsLCJkZXZpY2VUeXBlIjpudWxsLCJuZUxldmVsIjpudWxsLCJjZ1NvdXJjZSI6bnVsbCwiY291bnRlckxpc3QiOm51bGwsInByb3BlcnRpZXMiOm51bGwsImtwaXMiOm51bGwsImRpc3BsYXlOYW1lIjpudWxsfX0sInByb3BlcnR5TmFtZSI6IkNHUF9OQU1FIiwicHJvcGVydHlWYWx1ZXMiOiJ7XCJ2YWx1ZXNcIjpbXCJNTUUwMDFCS1RcIixcIk1NRTAwMUNST1wiLFwiTU1FMDAxTERTXCIsXCJNTUUwMDFMVE5cIixcIk1NRTAwMU1GRFwiLFwiTU1FMDAxV1ZOXCIsXCJNTUUwMDJDUk9cIixcIk1NRTAwMkxEU1wiLFwiTU1FMDAyTFROXCIsXCJNTUUwMDJXVk5cIixcIlBTSENSTzFDXCIsXCJQU0hLVDAzQ1wiLFwiUFNITEQwMkNcIixcIlBTSExUMDFDXCIsXCJQU0hNRjAxQ1wiLFwiUFNIV1YwMkNcIixcIlBTSFdWMDNDXCJdfSIsInNlbGVjdGVkVmFsdWVzIjpbIk1NRTAwMUJLVCJdfSx7InByb3BlcnR5S2V5Ijp7InByb3BlcnR5SWQiOiJFUENfUF8yIiwiY291bnRlckdyb3VwcyI6eyJjb3VudGVyR3JvdXBJZCI6IkVQQ19DR18zMyIsImNvdW50ZXJHcm91cERldGFpbHMiOm51bGwsImRldmljZVR5cGUiOm51bGwsIm5lTGV2ZWwiOm51bGwsImNnU291cmNlIjpudWxsLCJjb3VudGVyTGlzdCI6bnVsbCwicHJvcGVydGllcyI6bnVsbCwia3BpcyI6bnVsbCwiZGlzcGxheU5hbWUiOm51bGx9fSwicHJvcGVydHlOYW1lIjoiQk9BUkRfTE9DQVRJT04iLCJwcm9wZXJ0eVZhbHVlcyI6Im51bGwiLCJzZWxlY3RlZFZhbHVlcyI6W119LHsicHJvcGVydHlLZXkiOnsicHJvcGVydHlJZCI6IkVQQ19QXzUiLCJjb3VudGVyR3JvdXBzIjp7ImNvdW50ZXJHcm91cElkIjoiRVBDX0NHXzMzIiwiY291bnRlckdyb3VwRGV0YWlscyI6bnVsbCwiZGV2aWNlVHlwZSI6bnVsbCwibmVMZXZlbCI6bnVsbCwiY2dTb3VyY2UiOm51bGwsImNvdW50ZXJMaXN0IjpudWxsLCJwcm9wZXJ0aWVzIjpudWxsLCJrcGlzIjpudWxsLCJkaXNwbGF5TmFtZSI6bnVsbH19LCJwcm9wZXJ0eU5hbWUiOiJORVRXT1JLX05BTUUiLCJwcm9wZXJ0eVZhbHVlcyI6Im51bGwiLCJzZWxlY3RlZFZhbHVlcyI6W119XSwia3BpcyI6bnVsbCwiZGlzcGxheU5hbWUiOiJIV0lfQ0dQX0NQVV9MT0FEIn1dfQ=="
  //                       },
  //                       {
  //                         "dashboardtemplateId": "tbSzGIC",
  //                         "reportName": "Pawan",
  //                         "reportDetail": "eyJjb25maWd1cmF0aW9uIjp7ImF0dHJpYnV0ZXMiOm51bGwsInByb3BlcnRpZXMiOm51bGwsIm1ldHJpY3MiOlt7ImlkIjoiRVBDX0NfMSIsImFnZ3JlZ2F0aW9uVHlwZSI6IkFWRyJ9LHsiaWQiOiJFUENfQ18yIiwiYWdncmVnYXRpb25UeXBlIjoiTUFYIn1dLCJrcGlNZXRyaWNzIjpudWxsLCJuYW1lIjoiUGF3YW4iLCJ0eXBlIjoiVGFibGUiLCJzdWJUeXBlIjoiVGFibGUiLCJkZXZpY2VUeXBlIjoiQ0dQIiwiZW50aXR5IjpudWxsLCJkaW1lbnNpb25zIjpbeyJuYW1lIjoiQ0dQX05BTUUiLCJkaXNwbGF5TmFtZSI6IkNHUF9OQU1FIiwiaWQiOiJFUENfUF8xIn0seyJuYW1lIjoiTkVUV09SS19OQU1FIiwiZGlzcGxheU5hbWUiOiJORVRXT1JLX05BTUUiLCJpZCI6IkVQQ19QXzUifV0sImNvbnRleHQiOm51bGwsImdyb3VwQnlEaW1lbnNpb25zIjpudWxsfSwiZmlsdGVyIjp7ImNvbmRpdGlvbiI6IkFORCIsInJ1bGVzIjpbeyJjb25kaXRpb24iOiJPUiIsInJ1bGVzIjpbeyJmaWVsZCI6IkNPVU5URVJfR1JPVVBfSUQiLCJ2YWx1ZSI6IkVQQ19DR18zMyIsInR5cGUiOiJzZWxlY3RvciJ9LHsiZmllbGQiOiJDT1VOVEVSX0dST1VQX0lEIiwidmFsdWUiOiJFUENfQ0dfMzYiLCJ0eXBlIjoic2VsZWN0b3IifV19LHsiY29uZGl0aW9uIjoiT1IiLCJydWxlcyI6W3siaWQiOiJFUENfQ18xIiwidmFsdWUiOiItMjE0NzQ4MzY0OCIsInR5cGUiOiJib3VuZCJ9LHsiaWQiOiJFUENfQ18yIiwidmFsdWUiOiItMjE0NzQ4MzY0OCIsInR5cGUiOiJib3VuZCJ9XX1dfSwic2FtcGxpbmdQZXJpb2QiOm51bGwsImludGVydmFscyI6Ikxhc3QgMSBkYXkiLCJwYWdpbmF0aW9uIjp7InBhZ2VudW1iZXIiOjEsInBhZ2VzaXplIjoxMDAwMCwicGFnaW5nU3BlYyI6bnVsbH0sImdyYW51bGFyaXR5IjoiQUxMIiwicmVwb3J0RGF0YVR5cGUiOiJyYXciLCJmaWx0ZXJNYXAiOnsiRVBDX1BfMSI6WyJNTUUwMDFCS1QiLCJNTUUwMDFDUk8iXX0sImNvdW50ZXJHcm91cHNXaXRoQ291bnRlckFuZFByb3BlcnRpZXMiOlt7ImNvdW50ZXJHcm91cElkIjoiRVBDX0NHXzMzIiwiY291bnRlckdyb3VwRGV0YWlscyI6bnVsbCwiZGV2aWNlVHlwZSI6bnVsbCwibmVMZXZlbCI6bnVsbCwiY2dTb3VyY2UiOm51bGwsImNvdW50ZXJMaXN0IjpbeyJhZ2dyZWdhdGlvbiI6bnVsbCwiYWdncmVnYXRpb25MaXN0IjpudWxsLCJjb3VudGVyS2V5Ijp7ImNvdW50ZXJJZCI6IkVQQ19DXzEiLCJjb3VudGVyR3JvdXBUcmFucyI6bnVsbH0sImRpc3BsYXlOYW1lIjoiTWVhbiBDUFUgTG9hZCIsImNvdW50ZXJVbml0IjoiJSIsImNvdW50ZXJEZXNjcmlwdGlvbiI6Ik1lYW4gQ1BVIExvYWQiLCJjb3VudGVyVHlwZSI6IkNvdW50ZXIiLCJlbmFibGVkIjpudWxsLCJzb3VyY2VOYW1lIjpudWxsLCJmb3JtdWxhIjpudWxsfSx7ImFnZ3JlZ2F0aW9uIjpudWxsLCJhZ2dyZWdhdGlvbkxpc3QiOm51bGwsImNvdW50ZXJLZXkiOnsiY291bnRlcklkIjoiRVBDX0NfMiIsImNvdW50ZXJHcm91cFRyYW5zIjpudWxsfSwiZGlzcGxheU5hbWUiOiJNYXhpbXVtIENQVSBMb2FkIiwiY291bnRlclVuaXQiOiIlIiwiY291bnRlckRlc2NyaXB0aW9uIjoiTWF4aW11bSBDUFUgTG9hZCIsImNvdW50ZXJUeXBlIjoiQ291bnRlciIsImVuYWJsZWQiOm51bGwsInNvdXJjZU5hbWUiOm51bGwsImZvcm11bGEiOm51bGx9XSwicHJvcGVydGllcyI6W3sicHJvcGVydHlLZXkiOnsicHJvcGVydHlJZCI6IkVQQ19QXzEiLCJjb3VudGVyR3JvdXBzIjp7ImNvdW50ZXJHcm91cElkIjoiRVBDX0NHXzMzIiwiY291bnRlckdyb3VwRGV0YWlscyI6bnVsbCwiZGV2aWNlVHlwZSI6bnVsbCwibmVMZXZlbCI6bnVsbCwiY2dTb3VyY2UiOm51bGwsImNvdW50ZXJMaXN0IjpudWxsLCJwcm9wZXJ0aWVzIjpudWxsLCJrcGlzIjpudWxsLCJkaXNwbGF5TmFtZSI6bnVsbH19LCJwcm9wZXJ0eU5hbWUiOiJDR1BfTkFNRSIsInByb3BlcnR5VmFsdWVzIjoie1widmFsdWVzXCI6W1wiTU1FMDAxQktUXCIsXCJNTUUwMDFDUk9cIixcIk1NRTAwMUxEU1wiLFwiTU1FMDAxTFROXCIsXCJNTUUwMDFNRkRcIixcIk1NRTAwMVdWTlwiLFwiTU1FMDAyQ1JPXCIsXCJNTUUwMDJMRFNcIixcIk1NRTAwMkxUTlwiLFwiTU1FMDAyV1ZOXCIsXCJQU0hDUk8xQ1wiLFwiUFNIS1QwM0NcIixcIlBTSExEMDJDXCIsXCJQU0hMVDAxQ1wiLFwiUFNITUYwMUNcIixcIlBTSFdWMDJDXCIsXCJQU0hXVjAzQ1wiXX0iLCJzZWxlY3RlZFZhbHVlcyI6WyJNTUUwMDFCS1QiLCJNTUUwMDFDUk8iXX0seyJwcm9wZXJ0eUtleSI6eyJwcm9wZXJ0eUlkIjoiRVBDX1BfNSIsImNvdW50ZXJHcm91cHMiOnsiY291bnRlckdyb3VwSWQiOiJFUENfQ0dfMzMiLCJjb3VudGVyR3JvdXBEZXRhaWxzIjpudWxsLCJkZXZpY2VUeXBlIjpudWxsLCJuZUxldmVsIjpudWxsLCJjZ1NvdXJjZSI6bnVsbCwiY291bnRlckxpc3QiOm51bGwsInByb3BlcnRpZXMiOm51bGwsImtwaXMiOm51bGwsImRpc3BsYXlOYW1lIjpudWxsfX0sInByb3BlcnR5TmFtZSI6Ik5FVFdPUktfTkFNRSIsInByb3BlcnR5VmFsdWVzIjoibnVsbCIsInNlbGVjdGVkVmFsdWVzIjpbXX1dLCJrcGlzIjpudWxsLCJkaXNwbGF5TmFtZSI6IkhXSV9DR1BfQ1BVX0xPQUQifSx7ImNvdW50ZXJHcm91cElkIjoiRVBDX0NHXzM2IiwiY291bnRlckdyb3VwRGV0YWlscyI6bnVsbCwiZGV2aWNlVHlwZSI6bnVsbCwibmVMZXZlbCI6bnVsbCwiY2dTb3VyY2UiOm51bGwsImNvdW50ZXJMaXN0IjpbeyJhZ2dyZWdhdGlvbiI6bnVsbCwiYWdncmVnYXRpb25MaXN0IjpudWxsLCJjb3VudGVyS2V5Ijp7ImNvdW50ZXJJZCI6IkVQQ19DXzIiLCJjb3VudGVyR3JvdXBUcmFucyI6bnVsbH0sImRpc3BsYXlOYW1lIjoiVXNlZCBNZW1vcnkgU2l6ZSIsImNvdW50ZXJVbml0IjoiTUIiLCJjb3VudGVyRGVzY3JpcHRpb24iOiJVc2VkIE1lbW9yeSBTaXplIiwiY291bnRlclR5cGUiOiJDb3VudGVyIiwiZW5hYmxlZCI6bnVsbCwic291cmNlTmFtZSI6bnVsbCwiZm9ybXVsYSI6bnVsbH1dLCJwcm9wZXJ0aWVzIjpbeyJwcm9wZXJ0eUtleSI6eyJwcm9wZXJ0eUlkIjoiRVBDX1BfMSIsImNvdW50ZXJHcm91cHMiOnsiY291bnRlckdyb3VwSWQiOiJFUENfQ0dfMzYiLCJjb3VudGVyR3JvdXBEZXRhaWxzIjpudWxsLCJkZXZpY2VUeXBlIjpudWxsLCJuZUxldmVsIjpudWxsLCJjZ1NvdXJjZSI6bnVsbCwiY291bnRlckxpc3QiOm51bGwsInByb3BlcnRpZXMiOm51bGwsImtwaXMiOm51bGwsImRpc3BsYXlOYW1lIjpudWxsfX0sInByb3BlcnR5TmFtZSI6IkNHUF9OQU1FIiwicHJvcGVydHlWYWx1ZXMiOiJ7XCJ2YWx1ZXNcIjpbXCJNTUUwMDFCS1RcIixcIk1NRTAwMUNST1wiLFwiTU1FMDAxTERTXCIsXCJNTUUwMDFMVE5cIixcIk1NRTAwMU1GRFwiLFwiTU1FMDAxV1ZOXCIsXCJNTUUwMDJDUk9cIixcIk1NRTAwMkxEU1wiLFwiTU1FMDAyTFROXCIsXCJNTUUwMDJXVk5cIixcIlBTSENSTzFDXCIsXCJQU0hLVDAzQ1wiLFwiUFNITEQwMkNcIixcIlBTSExUMDFDXCIsXCJQU0hNRjAxQ1wiLFwiUFNIV1YwMkNcIixcIlBTSFdWMDNDXCJdfSIsInNlbGVjdGVkVmFsdWVzIjpbIk1NRTAwMUJLVCIsIk1NRTAwMUNSTyJdfSx7InByb3BlcnR5S2V5Ijp7InByb3BlcnR5SWQiOiJFUENfUF81IiwiY291bnRlckdyb3VwcyI6eyJjb3VudGVyR3JvdXBJZCI6IkVQQ19DR18zNiIsImNvdW50ZXJHcm91cERldGFpbHMiOm51bGwsImRldmljZVR5cGUiOm51bGwsIm5lTGV2ZWwiOm51bGwsImNnU291cmNlIjpudWxsLCJjb3VudGVyTGlzdCI6bnVsbCwicHJvcGVydGllcyI6bnVsbCwia3BpcyI6bnVsbCwiZGlzcGxheU5hbWUiOm51bGx9fSwicHJvcGVydHlOYW1lIjoiTkVUV09SS19OQU1FIiwicHJvcGVydHlWYWx1ZXMiOiJudWxsIiwic2VsZWN0ZWRWYWx1ZXMiOltdfV0sImtwaXMiOm51bGwsImRpc3BsYXlOYW1lIjoiSFdJX0NHUF9NRU0ifV19"
  //                       }
  //                     ]
  //                   }
  //                 ]
  //               }
  //             ],
  //             "applicableProfiles": []
  //           },
  //           {
  //             "profileId": 6,
  //             "profileName": "Standard User",
  //             "communityString": "standarduseremobile",
  //             "dataAccess": "Emobile",
  //             "accesses": [
  //               {
  //                 "accessId": 1,
  //                 "accessName": "Dashboard creation",
  //                 "displayName": "Dashboard"
  //               },
  //               {
  //                 "accessId": 2,
  //                 "accessName": "View all Reports",
  //                 "displayName": "My Reports"
  //               }
  //             ],
  //             "dashboards": [
  //               {
  //                 "dashboardId": "C2zBxL",
  //                 "name": "MME Dashboard",
  //                 "type": "common",
  //                 "view": "both",
  //                 "subDashboards": [
  //                   {
  //                     "subDashboardId": "hNsO2b",
  //                     "name": "CPU View",
  //                     "dashboardTemplates": [
  //                       {
  //                         "dashboardtemplateId": "D07jiR2",
  //                         "reportName": "Pawan",
  //                         "reportDetail": "eyJjb25maWd1cmF0aW9uIjp7ImF0dHJpYnV0ZXMiOm51bGwsInByb3BlcnRpZXMiOm51bGwsIm1ldHJpY3MiOlt7ImlkIjoiRVBDX0NfMSIsImFnZ3JlZ2F0aW9uVHlwZSI6IkFWRyJ9LHsiaWQiOiJFUENfQ18yIiwiYWdncmVnYXRpb25UeXBlIjoiTUFYIn1dLCJrcGlNZXRyaWNzIjpudWxsLCJuYW1lIjoiUGF3YW4iLCJ0eXBlIjoiVGFibGUiLCJzdWJUeXBlIjoiVGFibGUiLCJkZXZpY2VUeXBlIjoiQ0dQIiwiZW50aXR5IjpudWxsLCJkaW1lbnNpb25zIjpbeyJuYW1lIjoiQ0dQX05BTUUiLCJkaXNwbGF5TmFtZSI6IkNHUF9OQU1FIiwiaWQiOiJFUENfUF8xIn0seyJuYW1lIjoiTkVUV09SS19OQU1FIiwiZGlzcGxheU5hbWUiOiJORVRXT1JLX05BTUUiLCJpZCI6IkVQQ19QXzUifV0sImNvbnRleHQiOm51bGwsImdyb3VwQnlEaW1lbnNpb25zIjpudWxsfSwiZmlsdGVyIjp7ImNvbmRpdGlvbiI6IkFORCIsInJ1bGVzIjpbeyJjb25kaXRpb24iOiJPUiIsInJ1bGVzIjpbeyJmaWVsZCI6IkNPVU5URVJfR1JPVVBfSUQiLCJ2YWx1ZSI6IkVQQ19DR18zMyIsInR5cGUiOiJzZWxlY3RvciJ9LHsiZmllbGQiOiJDT1VOVEVSX0dST1VQX0lEIiwidmFsdWUiOiJFUENfQ0dfMzYiLCJ0eXBlIjoic2VsZWN0b3IifV19LHsiY29uZGl0aW9uIjoiT1IiLCJydWxlcyI6W3siaWQiOiJFUENfQ18xIiwidmFsdWUiOiItMjE0NzQ4MzY0OCIsInR5cGUiOiJib3VuZCJ9LHsiaWQiOiJFUENfQ18yIiwidmFsdWUiOiItMjE0NzQ4MzY0OCIsInR5cGUiOiJib3VuZCJ9XX1dfSwic2FtcGxpbmdQZXJpb2QiOm51bGwsImludGVydmFscyI6Ikxhc3QgMSBkYXkiLCJwYWdpbmF0aW9uIjp7InBhZ2VudW1iZXIiOjEsInBhZ2VzaXplIjoxMDAwMCwicGFnaW5nU3BlYyI6bnVsbH0sImdyYW51bGFyaXR5IjoiQUxMIiwicmVwb3J0RGF0YVR5cGUiOiJyYXciLCJmaWx0ZXJNYXAiOnsiRVBDX1BfMSI6WyJNTUUwMDFCS1QiLCJNTUUwMDFDUk8iXX0sImNvdW50ZXJHcm91cHNXaXRoQ291bnRlckFuZFByb3BlcnRpZXMiOlt7ImNvdW50ZXJHcm91cElkIjoiRVBDX0NHXzMzIiwiY291bnRlckdyb3VwRGV0YWlscyI6bnVsbCwiZGV2aWNlVHlwZSI6bnVsbCwibmVMZXZlbCI6bnVsbCwiY2dTb3VyY2UiOm51bGwsImNvdW50ZXJMaXN0IjpbeyJhZ2dyZWdhdGlvbiI6bnVsbCwiYWdncmVnYXRpb25MaXN0IjpudWxsLCJjb3VudGVyS2V5Ijp7ImNvdW50ZXJJZCI6IkVQQ19DXzEiLCJjb3VudGVyR3JvdXBUcmFucyI6bnVsbH0sImRpc3BsYXlOYW1lIjoiTWVhbiBDUFUgTG9hZCIsImNvdW50ZXJVbml0IjoiJSIsImNvdW50ZXJEZXNjcmlwdGlvbiI6Ik1lYW4gQ1BVIExvYWQiLCJjb3VudGVyVHlwZSI6IkNvdW50ZXIiLCJlbmFibGVkIjpudWxsLCJzb3VyY2VOYW1lIjpudWxsLCJmb3JtdWxhIjpudWxsfSx7ImFnZ3JlZ2F0aW9uIjpudWxsLCJhZ2dyZWdhdGlvbkxpc3QiOm51bGwsImNvdW50ZXJLZXkiOnsiY291bnRlcklkIjoiRVBDX0NfMiIsImNvdW50ZXJHcm91cFRyYW5zIjpudWxsfSwiZGlzcGxheU5hbWUiOiJNYXhpbXVtIENQVSBMb2FkIiwiY291bnRlclVuaXQiOiIlIiwiY291bnRlckRlc2NyaXB0aW9uIjoiTWF4aW11bSBDUFUgTG9hZCIsImNvdW50ZXJUeXBlIjoiQ291bnRlciIsImVuYWJsZWQiOm51bGwsInNvdXJjZU5hbWUiOm51bGwsImZvcm11bGEiOm51bGx9XSwicHJvcGVydGllcyI6W3sicHJvcGVydHlLZXkiOnsicHJvcGVydHlJZCI6IkVQQ19QXzEiLCJjb3VudGVyR3JvdXBzIjp7ImNvdW50ZXJHcm91cElkIjoiRVBDX0NHXzMzIiwiY291bnRlckdyb3VwRGV0YWlscyI6bnVsbCwiZGV2aWNlVHlwZSI6bnVsbCwibmVMZXZlbCI6bnVsbCwiY2dTb3VyY2UiOm51bGwsImNvdW50ZXJMaXN0IjpudWxsLCJwcm9wZXJ0aWVzIjpudWxsLCJrcGlzIjpudWxsLCJkaXNwbGF5TmFtZSI6bnVsbH19LCJwcm9wZXJ0eU5hbWUiOiJDR1BfTkFNRSIsInByb3BlcnR5VmFsdWVzIjoie1widmFsdWVzXCI6W1wiTU1FMDAxQktUXCIsXCJNTUUwMDFDUk9cIixcIk1NRTAwMUxEU1wiLFwiTU1FMDAxTFROXCIsXCJNTUUwMDFNRkRcIixcIk1NRTAwMVdWTlwiLFwiTU1FMDAyQ1JPXCIsXCJNTUUwMDJMRFNcIixcIk1NRTAwMkxUTlwiLFwiTU1FMDAyV1ZOXCIsXCJQU0hDUk8xQ1wiLFwiUFNIS1QwM0NcIixcIlBTSExEMDJDXCIsXCJQU0hMVDAxQ1wiLFwiUFNITUYwMUNcIixcIlBTSFdWMDJDXCIsXCJQU0hXVjAzQ1wiXX0iLCJzZWxlY3RlZFZhbHVlcyI6WyJNTUUwMDFCS1QiLCJNTUUwMDFDUk8iXX0seyJwcm9wZXJ0eUtleSI6eyJwcm9wZXJ0eUlkIjoiRVBDX1BfNSIsImNvdW50ZXJHcm91cHMiOnsiY291bnRlckdyb3VwSWQiOiJFUENfQ0dfMzMiLCJjb3VudGVyR3JvdXBEZXRhaWxzIjpudWxsLCJkZXZpY2VUeXBlIjpudWxsLCJuZUxldmVsIjpudWxsLCJjZ1NvdXJjZSI6bnVsbCwiY291bnRlckxpc3QiOm51bGwsInByb3BlcnRpZXMiOm51bGwsImtwaXMiOm51bGwsImRpc3BsYXlOYW1lIjpudWxsfX0sInByb3BlcnR5TmFtZSI6Ik5FVFdPUktfTkFNRSIsInByb3BlcnR5VmFsdWVzIjoibnVsbCIsInNlbGVjdGVkVmFsdWVzIjpbXX1dLCJrcGlzIjpudWxsLCJkaXNwbGF5TmFtZSI6IkhXSV9DR1BfQ1BVX0xPQUQifSx7ImNvdW50ZXJHcm91cElkIjoiRVBDX0NHXzM2IiwiY291bnRlckdyb3VwRGV0YWlscyI6bnVsbCwiZGV2aWNlVHlwZSI6bnVsbCwibmVMZXZlbCI6bnVsbCwiY2dTb3VyY2UiOm51bGwsImNvdW50ZXJMaXN0IjpbeyJhZ2dyZWdhdGlvbiI6bnVsbCwiYWdncmVnYXRpb25MaXN0IjpudWxsLCJjb3VudGVyS2V5Ijp7ImNvdW50ZXJJZCI6IkVQQ19DXzIiLCJjb3VudGVyR3JvdXBUcmFucyI6bnVsbH0sImRpc3BsYXlOYW1lIjoiVXNlZCBNZW1vcnkgU2l6ZSIsImNvdW50ZXJVbml0IjoiTUIiLCJjb3VudGVyRGVzY3JpcHRpb24iOiJVc2VkIE1lbW9yeSBTaXplIiwiY291bnRlclR5cGUiOiJDb3VudGVyIiwiZW5hYmxlZCI6bnVsbCwic291cmNlTmFtZSI6bnVsbCwiZm9ybXVsYSI6bnVsbH1dLCJwcm9wZXJ0aWVzIjpbeyJwcm9wZXJ0eUtleSI6eyJwcm9wZXJ0eUlkIjoiRVBDX1BfMSIsImNvdW50ZXJHcm91cHMiOnsiY291bnRlckdyb3VwSWQiOiJFUENfQ0dfMzYiLCJjb3VudGVyR3JvdXBEZXRhaWxzIjpudWxsLCJkZXZpY2VUeXBlIjpudWxsLCJuZUxldmVsIjpudWxsLCJjZ1NvdXJjZSI6bnVsbCwiY291bnRlckxpc3QiOm51bGwsInByb3BlcnRpZXMiOm51bGwsImtwaXMiOm51bGwsImRpc3BsYXlOYW1lIjpudWxsfX0sInByb3BlcnR5TmFtZSI6IkNHUF9OQU1FIiwicHJvcGVydHlWYWx1ZXMiOiJ7XCJ2YWx1ZXNcIjpbXCJNTUUwMDFCS1RcIixcIk1NRTAwMUNST1wiLFwiTU1FMDAxTERTXCIsXCJNTUUwMDFMVE5cIixcIk1NRTAwMU1GRFwiLFwiTU1FMDAxV1ZOXCIsXCJNTUUwMDJDUk9cIixcIk1NRTAwMkxEU1wiLFwiTU1FMDAyTFROXCIsXCJNTUUwMDJXVk5cIixcIlBTSENSTzFDXCIsXCJQU0hLVDAzQ1wiLFwiUFNITEQwMkNcIixcIlBTSExUMDFDXCIsXCJQU0hNRjAxQ1wiLFwiUFNIV1YwMkNcIixcIlBTSFdWMDNDXCJdfSIsInNlbGVjdGVkVmFsdWVzIjpbIk1NRTAwMUJLVCIsIk1NRTAwMUNSTyJdfSx7InByb3BlcnR5S2V5Ijp7InByb3BlcnR5SWQiOiJFUENfUF81IiwiY291bnRlckdyb3VwcyI6eyJjb3VudGVyR3JvdXBJZCI6IkVQQ19DR18zNiIsImNvdW50ZXJHcm91cERldGFpbHMiOm51bGwsImRldmljZVR5cGUiOm51bGwsIm5lTGV2ZWwiOm51bGwsImNnU291cmNlIjpudWxsLCJjb3VudGVyTGlzdCI6bnVsbCwicHJvcGVydGllcyI6bnVsbCwia3BpcyI6bnVsbCwiZGlzcGxheU5hbWUiOm51bGx9fSwicHJvcGVydHlOYW1lIjoiTkVUV09SS19OQU1FIiwicHJvcGVydHlWYWx1ZXMiOiJudWxsIiwic2VsZWN0ZWRWYWx1ZXMiOltdfV0sImtwaXMiOm51bGwsImRpc3BsYXlOYW1lIjoiSFdJX0NHUF9NRU0ifV19"
  //                       },
  //                       {
  //                         "dashboardtemplateId": "H2HwaWv",
  //                         "reportName": "Aval",
  //                         "reportDetail": "eyJjb25maWd1cmF0aW9uIjp7ImF0dHJpYnV0ZXMiOm51bGwsInByb3BlcnRpZXMiOm51bGwsIm1ldHJpY3MiOlt7ImlkIjoiRVBDX0NfMSIsImFnZ3JlZ2F0aW9uVHlwZSI6IkFWRyJ9XSwia3BpTWV0cmljcyI6bnVsbCwibmFtZSI6IkF2YWwiLCJ0eXBlIjoiR3JhcGgiLCJzdWJUeXBlIjoiQmFyIiwiZGV2aWNlVHlwZSI6IkNHUCIsImVudGl0eSI6bnVsbCwiZGltZW5zaW9ucyI6W3sibmFtZSI6IkNHUF9OQU1FIiwiZGlzcGxheU5hbWUiOiJDR1BfTkFNRSIsImlkIjoiRVBDX1BfMSJ9LHsibmFtZSI6Ik5FVFdPUktfTkFNRSIsImRpc3BsYXlOYW1lIjoiTkVUV09SS19OQU1FIiwiaWQiOiJFUENfUF81In0seyJuYW1lIjoiQk9BUkRfTE9DQVRJT04iLCJkaXNwbGF5TmFtZSI6IkJPQVJEX0xPQ0FUSU9OIiwiaWQiOiJFUENfUF8yIn1dLCJjb250ZXh0IjpudWxsLCJncm91cEJ5RGltZW5zaW9ucyI6bnVsbH0sImZpbHRlciI6eyJjb25kaXRpb24iOiJBTkQiLCJydWxlcyI6W3siY29uZGl0aW9uIjoiT1IiLCJydWxlcyI6W3siZmllbGQiOiJDT1VOVEVSX0dST1VQX0lEIiwidmFsdWUiOiJFUENfQ0dfMzMiLCJ0eXBlIjoic2VsZWN0b3IifV19LHsiY29uZGl0aW9uIjoiT1IiLCJydWxlcyI6W3siaWQiOiJFUENfQ18xIiwidmFsdWUiOiItMjE0NzQ4MzY0OCIsInR5cGUiOiJib3VuZCJ9XX1dfSwic2FtcGxpbmdQZXJpb2QiOm51bGwsImludGVydmFscyI6Ikxhc3QgMSB3ZWVrIiwicGFnaW5hdGlvbiI6eyJwYWdlbnVtYmVyIjoxLCJwYWdlc2l6ZSI6MTAwMDAsInBhZ2luZ1NwZWMiOm51bGx9LCJncmFudWxhcml0eSI6IkFMTCIsInJlcG9ydERhdGFUeXBlIjoicmF3IiwiZmlsdGVyTWFwIjp7IkVQQ19QXzEiOlsiTU1FMDAxQktUIl19LCJjb3VudGVyR3JvdXBzV2l0aENvdW50ZXJBbmRQcm9wZXJ0aWVzIjpbeyJjb3VudGVyR3JvdXBJZCI6IkVQQ19DR18zMyIsImNvdW50ZXJHcm91cERldGFpbHMiOm51bGwsImRldmljZVR5cGUiOm51bGwsIm5lTGV2ZWwiOm51bGwsImNnU291cmNlIjpudWxsLCJjb3VudGVyTGlzdCI6W3siYWdncmVnYXRpb24iOm51bGwsImFnZ3JlZ2F0aW9uTGlzdCI6bnVsbCwiY291bnRlcktleSI6eyJjb3VudGVySWQiOiJFUENfQ18xIiwiY291bnRlckdyb3VwVHJhbnMiOm51bGx9LCJkaXNwbGF5TmFtZSI6Ik1lYW4gQ1BVIExvYWQiLCJjb3VudGVyVW5pdCI6IiUiLCJjb3VudGVyRGVzY3JpcHRpb24iOiJNZWFuIENQVSBMb2FkIiwiY291bnRlclR5cGUiOiJDb3VudGVyIiwiZW5hYmxlZCI6bnVsbCwic291cmNlTmFtZSI6bnVsbCwiZm9ybXVsYSI6bnVsbH1dLCJwcm9wZXJ0aWVzIjpbeyJwcm9wZXJ0eUtleSI6eyJwcm9wZXJ0eUlkIjoiRVBDX1BfMSIsImNvdW50ZXJHcm91cHMiOnsiY291bnRlckdyb3VwSWQiOiJFUENfQ0dfMzMiLCJjb3VudGVyR3JvdXBEZXRhaWxzIjpudWxsLCJkZXZpY2VUeXBlIjpudWxsLCJuZUxldmVsIjpudWxsLCJjZ1NvdXJjZSI6bnVsbCwiY291bnRlckxpc3QiOm51bGwsInByb3BlcnRpZXMiOm51bGwsImtwaXMiOm51bGwsImRpc3BsYXlOYW1lIjpudWxsfX0sInByb3BlcnR5TmFtZSI6IkNHUF9OQU1FIiwicHJvcGVydHlWYWx1ZXMiOiJ7XCJ2YWx1ZXNcIjpbXCJNTUUwMDFCS1RcIixcIk1NRTAwMUNST1wiLFwiTU1FMDAxTERTXCIsXCJNTUUwMDFMVE5cIixcIk1NRTAwMU1GRFwiLFwiTU1FMDAxV1ZOXCIsXCJNTUUwMDJDUk9cIixcIk1NRTAwMkxEU1wiLFwiTU1FMDAyTFROXCIsXCJNTUUwMDJXVk5cIixcIlBTSENSTzFDXCIsXCJQU0hLVDAzQ1wiLFwiUFNITEQwMkNcIixcIlBTSExUMDFDXCIsXCJQU0hNRjAxQ1wiLFwiUFNIV1YwMkNcIixcIlBTSFdWMDNDXCJdfSIsInNlbGVjdGVkVmFsdWVzIjpbIk1NRTAwMUJLVCJdfSx7InByb3BlcnR5S2V5Ijp7InByb3BlcnR5SWQiOiJFUENfUF8yIiwiY291bnRlckdyb3VwcyI6eyJjb3VudGVyR3JvdXBJZCI6IkVQQ19DR18zMyIsImNvdW50ZXJHcm91cERldGFpbHMiOm51bGwsImRldmljZVR5cGUiOm51bGwsIm5lTGV2ZWwiOm51bGwsImNnU291cmNlIjpudWxsLCJjb3VudGVyTGlzdCI6bnVsbCwicHJvcGVydGllcyI6bnVsbCwia3BpcyI6bnVsbCwiZGlzcGxheU5hbWUiOm51bGx9fSwicHJvcGVydHlOYW1lIjoiQk9BUkRfTE9DQVRJT04iLCJwcm9wZXJ0eVZhbHVlcyI6Im51bGwiLCJzZWxlY3RlZFZhbHVlcyI6W119LHsicHJvcGVydHlLZXkiOnsicHJvcGVydHlJZCI6IkVQQ19QXzUiLCJjb3VudGVyR3JvdXBzIjp7ImNvdW50ZXJHcm91cElkIjoiRVBDX0NHXzMzIiwiY291bnRlckdyb3VwRGV0YWlscyI6bnVsbCwiZGV2aWNlVHlwZSI6bnVsbCwibmVMZXZlbCI6bnVsbCwiY2dTb3VyY2UiOm51bGwsImNvdW50ZXJMaXN0IjpudWxsLCJwcm9wZXJ0aWVzIjpudWxsLCJrcGlzIjpudWxsLCJkaXNwbGF5TmFtZSI6bnVsbH19LCJwcm9wZXJ0eU5hbWUiOiJORVRXT1JLX05BTUUiLCJwcm9wZXJ0eVZhbHVlcyI6Im51bGwiLCJzZWxlY3RlZFZhbHVlcyI6W119XSwia3BpcyI6bnVsbCwiZGlzcGxheU5hbWUiOiJIV0lfQ0dQX0NQVV9MT0FEIn1dfQ=="
  //                       },
  //                       {
  //                         "dashboardtemplateId": "Q2AdOzc",
  //                         "reportName": "Network issue analysis for Location1",
  //                         "reportDetail": "eyJjb25maWd1cmF0aW9uIjp7ImF0dHJpYnV0ZXMiOm51bGwsInByb3BlcnRpZXMiOm51bGwsIm1ldHJpY3MiOlt7ImlkIjoiRVBDX0NfMSIsImFnZ3JlZ2F0aW9uVHlwZSI6IkFWRyJ9LHsiaWQiOiJFUENfQ18yIiwiYWdncmVnYXRpb25UeXBlIjoiTUFYIn0seyJpZCI6IkVQQ19DXzkiLCJhZ2dyZWdhdGlvblR5cGUiOiJTVU0ifV0sImtwaU1ldHJpY3MiOm51bGwsIm5hbWUiOiJOZXR3b3JrIGlzc3VlIGFuYWx5c2lzIGZvciBMb2NhdGlvbjEiLCJ0eXBlIjoiVGFibGUiLCJzdWJUeXBlIjoiVGFibGUiLCJkZXZpY2VUeXBlIjoiQ0dQIiwiZW50aXR5IjpudWxsLCJkaW1lbnNpb25zIjpbeyJuYW1lIjoiTkVUV09SS19OQU1FIiwiZGlzcGxheU5hbWUiOiJORVRXT1JLX05BTUUiLCJpZCI6IkVQQ19QXzUifSx7Im5hbWUiOiJCT0FSRF9MT0NBVElPTiIsImRpc3BsYXlOYW1lIjoiQk9BUkRfTE9DQVRJT04iLCJpZCI6IkVQQ19QXzIifSx7Im5hbWUiOiJDR1BfTkFNRSIsImRpc3BsYXlOYW1lIjoiQ0dQX05BTUUiLCJpZCI6IkVQQ19QXzEifV0sImNvbnRleHQiOm51bGwsImdyb3VwQnlEaW1lbnNpb25zIjpudWxsfSwiZmlsdGVyIjp7ImNvbmRpdGlvbiI6IkFORCIsInJ1bGVzIjpbeyJjb25kaXRpb24iOiJPUiIsInJ1bGVzIjpbeyJmaWVsZCI6IkNPVU5URVJfR1JPVVBfSUQiLCJ2YWx1ZSI6IkVQQ19DR18zMyIsInR5cGUiOiJzZWxlY3RvciJ9LHsiZmllbGQiOiJDT1VOVEVSX0dST1VQX0lEIiwidmFsdWUiOiJFUENfQ0dfMzUiLCJ0eXBlIjoic2VsZWN0b3IifV19LHsiY29uZGl0aW9uIjoiT1IiLCJydWxlcyI6W3siaWQiOiJFUENfQ18xIiwidmFsdWUiOiItMjE0NzQ4MzY0OCIsInR5cGUiOiJib3VuZCJ9LHsiaWQiOiJFUENfQ18yIiwidmFsdWUiOiItMjE0NzQ4MzY0OCIsInR5cGUiOiJib3VuZCJ9LHsiaWQiOiJFUENfQ185IiwidmFsdWUiOiItMjE0NzQ4MzY0OCIsInR5cGUiOiJib3VuZCJ9XX1dfSwic2FtcGxpbmdQZXJpb2QiOm51bGwsImludGVydmFscyI6IjIwMTgtMDQtMDJUMDQ6MjU6MDAuMDAwWi8yMDE4LTA0LTA0VDEzOjQ0OjAwLjAwMFoiLCJwYWdpbmF0aW9uIjp7InBhZ2VudW1iZXIiOjEsInBhZ2VzaXplIjoxMDAwMCwicGFnaW5nU3BlYyI6bnVsbH0sImdyYW51bGFyaXR5IjoiQUxMIiwicmVwb3J0RGF0YVR5cGUiOiJyYXciLCJmaWx0ZXJNYXAiOnsiRVBDX1BfMSI6WyJNTUUwMDFCS1QiLCJNTUUwMDFDUk8iLCJNTUUwMDFMRFMiLCJNTUUwMDFMVE4iXX0sImNvdW50ZXJHcm91cHNXaXRoQ291bnRlckFuZFByb3BlcnRpZXMiOlt7ImNvdW50ZXJHcm91cElkIjoiRVBDX0NHXzMzIiwiY291bnRlckdyb3VwRGV0YWlscyI6bnVsbCwiZGV2aWNlVHlwZSI6bnVsbCwibmVMZXZlbCI6bnVsbCwiY2dTb3VyY2UiOm51bGwsImNvdW50ZXJMaXN0IjpbeyJhZ2dyZWdhdGlvbiI6bnVsbCwiYWdncmVnYXRpb25MaXN0IjpudWxsLCJjb3VudGVyS2V5Ijp7ImNvdW50ZXJJZCI6IkVQQ19DXzEiLCJjb3VudGVyR3JvdXBUcmFucyI6bnVsbH0sImRpc3BsYXlOYW1lIjoiTWVhbiBDUFUgTG9hZCIsImNvdW50ZXJVbml0IjoiJSIsImNvdW50ZXJEZXNjcmlwdGlvbiI6Ik1lYW4gQ1BVIExvYWQiLCJjb3VudGVyVHlwZSI6IkNvdW50ZXIiLCJlbmFibGVkIjpudWxsLCJzb3VyY2VOYW1lIjpudWxsLCJmb3JtdWxhIjpudWxsfSx7ImFnZ3JlZ2F0aW9uIjpudWxsLCJhZ2dyZWdhdGlvbkxpc3QiOm51bGwsImNvdW50ZXJLZXkiOnsiY291bnRlcklkIjoiRVBDX0NfMiIsImNvdW50ZXJHcm91cFRyYW5zIjpudWxsfSwiZGlzcGxheU5hbWUiOiJNYXhpbXVtIENQVSBMb2FkIiwiY291bnRlclVuaXQiOiIlIiwiY291bnRlckRlc2NyaXB0aW9uIjoiTWF4aW11bSBDUFUgTG9hZCIsImNvdW50ZXJUeXBlIjoiQ291bnRlciIsImVuYWJsZWQiOm51bGwsInNvdXJjZU5hbWUiOm51bGwsImZvcm11bGEiOm51bGx9XSwicHJvcGVydGllcyI6W3sicHJvcGVydHlLZXkiOnsicHJvcGVydHlJZCI6IkVQQ19QXzEiLCJjb3VudGVyR3JvdXBzIjp7ImNvdW50ZXJHcm91cElkIjoiRVBDX0NHXzMzIiwiY291bnRlckdyb3VwRGV0YWlscyI6bnVsbCwiZGV2aWNlVHlwZSI6bnVsbCwibmVMZXZlbCI6bnVsbCwiY2dTb3VyY2UiOm51bGwsImNvdW50ZXJMaXN0IjpudWxsLCJwcm9wZXJ0aWVzIjpudWxsLCJrcGlzIjpudWxsLCJkaXNwbGF5TmFtZSI6bnVsbH19LCJwcm9wZXJ0eU5hbWUiOiJDR1BfTkFNRSIsInByb3BlcnR5VmFsdWVzIjoie1widmFsdWVzXCI6W1wiTU1FMDAxQktUXCIsXCJNTUUwMDFDUk9cIixcIk1NRTAwMUxEU1wiLFwiTU1FMDAxTFROXCIsXCJNTUUwMDFNRkRcIixcIk1NRTAwMVdWTlwiLFwiTU1FMDAyQ1JPXCIsXCJNTUUwMDJMRFNcIixcIk1NRTAwMkxUTlwiLFwiTU1FMDAyV1ZOXCIsXCJQU0hDUk8xQ1wiLFwiUFNIS1QwM0NcIixcIlBTSExEMDJDXCIsXCJQU0hMVDAxQ1wiLFwiUFNITUYwMUNcIixcIlBTSFdWMDJDXCIsXCJQU0hXVjAzQ1wiXX0iLCJzZWxlY3RlZFZhbHVlcyI6WyJNTUUwMDFCS1QiLCJNTUUwMDFDUk8iLCJNTUUwMDFMRFMiLCJNTUUwMDFMVE4iXX0seyJwcm9wZXJ0eUtleSI6eyJwcm9wZXJ0eUlkIjoiRVBDX1BfMiIsImNvdW50ZXJHcm91cHMiOnsiY291bnRlckdyb3VwSWQiOiJFUENfQ0dfMzMiLCJjb3VudGVyR3JvdXBEZXRhaWxzIjpudWxsLCJkZXZpY2VUeXBlIjpudWxsLCJuZUxldmVsIjpudWxsLCJjZ1NvdXJjZSI6bnVsbCwiY291bnRlckxpc3QiOm51bGwsInByb3BlcnRpZXMiOm51bGwsImtwaXMiOm51bGwsImRpc3BsYXlOYW1lIjpudWxsfX0sInByb3BlcnR5TmFtZSI6IkJPQVJEX0xPQ0FUSU9OIiwicHJvcGVydHlWYWx1ZXMiOiJudWxsIiwic2VsZWN0ZWRWYWx1ZXMiOltdfSx7InByb3BlcnR5S2V5Ijp7InByb3BlcnR5SWQiOiJFUENfUF81IiwiY291bnRlckdyb3VwcyI6eyJjb3VudGVyR3JvdXBJZCI6IkVQQ19DR18zMyIsImNvdW50ZXJHcm91cERldGFpbHMiOm51bGwsImRldmljZVR5cGUiOm51bGwsIm5lTGV2ZWwiOm51bGwsImNnU291cmNlIjpudWxsLCJjb3VudGVyTGlzdCI6bnVsbCwicHJvcGVydGllcyI6bnVsbCwia3BpcyI6bnVsbCwiZGlzcGxheU5hbWUiOm51bGx9fSwicHJvcGVydHlOYW1lIjoiTkVUV09SS19OQU1FIiwicHJvcGVydHlWYWx1ZXMiOiJudWxsIiwic2VsZWN0ZWRWYWx1ZXMiOltdfV0sImtwaXMiOm51bGwsImRpc3BsYXlOYW1lIjoiSFdJX0NHUF9DUFVfTE9BRCJ9LHsiY291bnRlckdyb3VwSWQiOiJFUENfQ0dfMzUiLCJjb3VudGVyR3JvdXBEZXRhaWxzIjpudWxsLCJkZXZpY2VUeXBlIjpudWxsLCJuZUxldmVsIjpudWxsLCJjZ1NvdXJjZSI6bnVsbCwiY291bnRlckxpc3QiOlt7ImFnZ3JlZ2F0aW9uIjpudWxsLCJhZ2dyZWdhdGlvbkxpc3QiOm51bGwsImNvdW50ZXJLZXkiOnsiY291bnRlcklkIjoiRVBDX0NfMSIsImNvdW50ZXJHcm91cFRyYW5zIjpudWxsfSwiZGlzcGxheU5hbWUiOiJTaXplIG9mIFBhY2tldHMgUmVjZWl2ZWQiLCJjb3VudGVyVW5pdCI6ImtpbG9ieXRlcyIsImNvdW50ZXJEZXNjcmlwdGlvbiI6IlNpemUgb2YgUGFja2V0cyBSZWNlaXZlZCBUaHJvdWdoIGEgUG9ydCIsImNvdW50ZXJUeXBlIjoiQ291bnRlciIsImVuYWJsZWQiOm51bGwsInNvdXJjZU5hbWUiOm51bGwsImZvcm11bGEiOm51bGx9LHsiYWdncmVnYXRpb24iOm51bGwsImFnZ3JlZ2F0aW9uTGlzdCI6bnVsbCwiY291bnRlcktleSI6eyJjb3VudGVySWQiOiJFUENfQ185IiwiY291bnRlckdyb3VwVHJhbnMiOm51bGx9LCJkaXNwbGF5TmFtZSI6IlNpemUgb2YgUGFja2V0cyBTZW50IiwiY291bnRlclVuaXQiOiJraWxvYnl0ZXMiLCJjb3VudGVyRGVzY3JpcHRpb24iOiJTaXplIG9mIFBhY2tldHMgU2VudCBUaHJvdWdoIGEgUG9ydCIsImNvdW50ZXJUeXBlIjoiQ291bnRlciIsImVuYWJsZWQiOm51bGwsInNvdXJjZU5hbWUiOm51bGwsImZvcm11bGEiOm51bGx9XSwicHJvcGVydGllcyI6W3sicHJvcGVydHlLZXkiOnsicHJvcGVydHlJZCI6IkVQQ19QXzEiLCJjb3VudGVyR3JvdXBzIjp7ImNvdW50ZXJHcm91cElkIjoiRVBDX0NHXzM1IiwiY291bnRlckdyb3VwRGV0YWlscyI6bnVsbCwiZGV2aWNlVHlwZSI6bnVsbCwibmVMZXZlbCI6bnVsbCwiY2dTb3VyY2UiOm51bGwsImNvdW50ZXJMaXN0IjpudWxsLCJwcm9wZXJ0aWVzIjpudWxsLCJrcGlzIjpudWxsLCJkaXNwbGF5TmFtZSI6bnVsbH19LCJwcm9wZXJ0eU5hbWUiOiJDR1BfTkFNRSIsInByb3BlcnR5VmFsdWVzIjoie1widmFsdWVzXCI6W1wiTU1FMDAxQktUXCIsXCJNTUUwMDFDUk9cIixcIk1NRTAwMUxEU1wiLFwiTU1FMDAxTFROXCIsXCJNTUUwMDFNRkRcIixcIk1NRTAwMVdWTlwiLFwiTU1FMDAyQ1JPXCIsXCJNTUUwMDJMRFNcIixcIk1NRTAwMkxUTlwiLFwiTU1FMDAyV1ZOXCIsXCJQU0hDUk8xQ1wiLFwiUFNIS1QwM0NcIixcIlBTSExEMDJDXCIsXCJQU0hMVDAxQ1wiLFwiUFNITUYwMUNcIixcIlBTSFdWMDJDXCIsXCJQU0hXVjAzQ1wiXX0iLCJzZWxlY3RlZFZhbHVlcyI6WyJNTUUwMDFCS1QiLCJNTUUwMDFDUk8iLCJNTUUwMDFMRFMiXX0seyJwcm9wZXJ0eUtleSI6eyJwcm9wZXJ0eUlkIjoiRVBDX1BfMiIsImNvdW50ZXJHcm91cHMiOnsiY291bnRlckdyb3VwSWQiOiJFUENfQ0dfMzUiLCJjb3VudGVyR3JvdXBEZXRhaWxzIjpudWxsLCJkZXZpY2VUeXBlIjpudWxsLCJuZUxldmVsIjpudWxsLCJjZ1NvdXJjZSI6bnVsbCwiY291bnRlckxpc3QiOm51bGwsInByb3BlcnRpZXMiOm51bGwsImtwaXMiOm51bGwsImRpc3BsYXlOYW1lIjpudWxsfX0sInByb3BlcnR5TmFtZSI6IlBPUlRfTkFNRSIsInByb3BlcnR5VmFsdWVzIjoibnVsbCIsInNlbGVjdGVkVmFsdWVzIjpbXX0seyJwcm9wZXJ0eUtleSI6eyJwcm9wZXJ0eUlkIjoiRVBDX1BfNSIsImNvdW50ZXJHcm91cHMiOnsiY291bnRlckdyb3VwSWQiOiJFUENfQ0dfMzUiLCJjb3VudGVyR3JvdXBEZXRhaWxzIjpudWxsLCJkZXZpY2VUeXBlIjpudWxsLCJuZUxldmVsIjpudWxsLCJjZ1NvdXJjZSI6bnVsbCwiY291bnRlckxpc3QiOm51bGwsInByb3BlcnRpZXMiOm51bGwsImtwaXMiOm51bGwsImRpc3BsYXlOYW1lIjpudWxsfX0sInByb3BlcnR5TmFtZSI6Ik5FVFdPUktfTkFNRSIsInByb3BlcnR5VmFsdWVzIjoibnVsbCIsInNlbGVjdGVkVmFsdWVzIjpbXX1dLCJrcGlzIjpudWxsLCJkaXNwbGF5TmFtZSI6IkhXSV9DR1BfRVRIX1RSQUZGIn1dfQ=="
  //                       }
  //                     ]
  //                   },
  //                   {
  //                     "subDashboardId": "PyAcpB",
  //                     "name": "Traffic",
  //                     "dashboardTemplates": [
  //                       {
  //                         "dashboardtemplateId": "qbCbw4L",
  //                         "reportName": "Aval",
  //                         "reportDetail": "eyJjb25maWd1cmF0aW9uIjp7ImF0dHJpYnV0ZXMiOm51bGwsInByb3BlcnRpZXMiOm51bGwsIm1ldHJpY3MiOlt7ImlkIjoiRVBDX0NfMSIsImFnZ3JlZ2F0aW9uVHlwZSI6IkFWRyJ9XSwia3BpTWV0cmljcyI6bnVsbCwibmFtZSI6IkF2YWwiLCJ0eXBlIjoiR3JhcGgiLCJzdWJUeXBlIjoiQmFyIiwiZGV2aWNlVHlwZSI6IkNHUCIsImVudGl0eSI6bnVsbCwiZGltZW5zaW9ucyI6W3sibmFtZSI6IkNHUF9OQU1FIiwiZGlzcGxheU5hbWUiOiJDR1BfTkFNRSIsImlkIjoiRVBDX1BfMSJ9LHsibmFtZSI6Ik5FVFdPUktfTkFNRSIsImRpc3BsYXlOYW1lIjoiTkVUV09SS19OQU1FIiwiaWQiOiJFUENfUF81In0seyJuYW1lIjoiQk9BUkRfTE9DQVRJT04iLCJkaXNwbGF5TmFtZSI6IkJPQVJEX0xPQ0FUSU9OIiwiaWQiOiJFUENfUF8yIn1dLCJjb250ZXh0IjpudWxsLCJncm91cEJ5RGltZW5zaW9ucyI6bnVsbH0sImZpbHRlciI6eyJjb25kaXRpb24iOiJBTkQiLCJydWxlcyI6W3siY29uZGl0aW9uIjoiT1IiLCJydWxlcyI6W3siZmllbGQiOiJDT1VOVEVSX0dST1VQX0lEIiwidmFsdWUiOiJFUENfQ0dfMzMiLCJ0eXBlIjoic2VsZWN0b3IifV19LHsiY29uZGl0aW9uIjoiT1IiLCJydWxlcyI6W3siaWQiOiJFUENfQ18xIiwidmFsdWUiOiItMjE0NzQ4MzY0OCIsInR5cGUiOiJib3VuZCJ9XX1dfSwic2FtcGxpbmdQZXJpb2QiOm51bGwsImludGVydmFscyI6Ikxhc3QgMSB3ZWVrIiwicGFnaW5hdGlvbiI6eyJwYWdlbnVtYmVyIjoxLCJwYWdlc2l6ZSI6MTAwMDAsInBhZ2luZ1NwZWMiOm51bGx9LCJncmFudWxhcml0eSI6IkFMTCIsInJlcG9ydERhdGFUeXBlIjoicmF3IiwiZmlsdGVyTWFwIjp7IkVQQ19QXzEiOlsiTU1FMDAxQktUIl19LCJjb3VudGVyR3JvdXBzV2l0aENvdW50ZXJBbmRQcm9wZXJ0aWVzIjpbeyJjb3VudGVyR3JvdXBJZCI6IkVQQ19DR18zMyIsImNvdW50ZXJHcm91cERldGFpbHMiOm51bGwsImRldmljZVR5cGUiOm51bGwsIm5lTGV2ZWwiOm51bGwsImNnU291cmNlIjpudWxsLCJjb3VudGVyTGlzdCI6W3siYWdncmVnYXRpb24iOm51bGwsImFnZ3JlZ2F0aW9uTGlzdCI6bnVsbCwiY291bnRlcktleSI6eyJjb3VudGVySWQiOiJFUENfQ18xIiwiY291bnRlckdyb3VwVHJhbnMiOm51bGx9LCJkaXNwbGF5TmFtZSI6Ik1lYW4gQ1BVIExvYWQiLCJjb3VudGVyVW5pdCI6IiUiLCJjb3VudGVyRGVzY3JpcHRpb24iOiJNZWFuIENQVSBMb2FkIiwiY291bnRlclR5cGUiOiJDb3VudGVyIiwiZW5hYmxlZCI6bnVsbCwic291cmNlTmFtZSI6bnVsbCwiZm9ybXVsYSI6bnVsbH1dLCJwcm9wZXJ0aWVzIjpbeyJwcm9wZXJ0eUtleSI6eyJwcm9wZXJ0eUlkIjoiRVBDX1BfMSIsImNvdW50ZXJHcm91cHMiOnsiY291bnRlckdyb3VwSWQiOiJFUENfQ0dfMzMiLCJjb3VudGVyR3JvdXBEZXRhaWxzIjpudWxsLCJkZXZpY2VUeXBlIjpudWxsLCJuZUxldmVsIjpudWxsLCJjZ1NvdXJjZSI6bnVsbCwiY291bnRlckxpc3QiOm51bGwsInByb3BlcnRpZXMiOm51bGwsImtwaXMiOm51bGwsImRpc3BsYXlOYW1lIjpudWxsfX0sInByb3BlcnR5TmFtZSI6IkNHUF9OQU1FIiwicHJvcGVydHlWYWx1ZXMiOiJ7XCJ2YWx1ZXNcIjpbXCJNTUUwMDFCS1RcIixcIk1NRTAwMUNST1wiLFwiTU1FMDAxTERTXCIsXCJNTUUwMDFMVE5cIixcIk1NRTAwMU1GRFwiLFwiTU1FMDAxV1ZOXCIsXCJNTUUwMDJDUk9cIixcIk1NRTAwMkxEU1wiLFwiTU1FMDAyTFROXCIsXCJNTUUwMDJXVk5cIixcIlBTSENSTzFDXCIsXCJQU0hLVDAzQ1wiLFwiUFNITEQwMkNcIixcIlBTSExUMDFDXCIsXCJQU0hNRjAxQ1wiLFwiUFNIV1YwMkNcIixcIlBTSFdWMDNDXCJdfSIsInNlbGVjdGVkVmFsdWVzIjpbIk1NRTAwMUJLVCJdfSx7InByb3BlcnR5S2V5Ijp7InByb3BlcnR5SWQiOiJFUENfUF8yIiwiY291bnRlckdyb3VwcyI6eyJjb3VudGVyR3JvdXBJZCI6IkVQQ19DR18zMyIsImNvdW50ZXJHcm91cERldGFpbHMiOm51bGwsImRldmljZVR5cGUiOm51bGwsIm5lTGV2ZWwiOm51bGwsImNnU291cmNlIjpudWxsLCJjb3VudGVyTGlzdCI6bnVsbCwicHJvcGVydGllcyI6bnVsbCwia3BpcyI6bnVsbCwiZGlzcGxheU5hbWUiOm51bGx9fSwicHJvcGVydHlOYW1lIjoiQk9BUkRfTE9DQVRJT04iLCJwcm9wZXJ0eVZhbHVlcyI6Im51bGwiLCJzZWxlY3RlZFZhbHVlcyI6W119LHsicHJvcGVydHlLZXkiOnsicHJvcGVydHlJZCI6IkVQQ19QXzUiLCJjb3VudGVyR3JvdXBzIjp7ImNvdW50ZXJHcm91cElkIjoiRVBDX0NHXzMzIiwiY291bnRlckdyb3VwRGV0YWlscyI6bnVsbCwiZGV2aWNlVHlwZSI6bnVsbCwibmVMZXZlbCI6bnVsbCwiY2dTb3VyY2UiOm51bGwsImNvdW50ZXJMaXN0IjpudWxsLCJwcm9wZXJ0aWVzIjpudWxsLCJrcGlzIjpudWxsLCJkaXNwbGF5TmFtZSI6bnVsbH19LCJwcm9wZXJ0eU5hbWUiOiJORVRXT1JLX05BTUUiLCJwcm9wZXJ0eVZhbHVlcyI6Im51bGwiLCJzZWxlY3RlZFZhbHVlcyI6W119XSwia3BpcyI6bnVsbCwiZGlzcGxheU5hbWUiOiJIV0lfQ0dQX0NQVV9MT0FEIn1dfQ=="
  //                       },
  //                       {
  //                         "dashboardtemplateId": "tbSzGIC",
  //                         "reportName": "Pawan",
  //                         "reportDetail": "eyJjb25maWd1cmF0aW9uIjp7ImF0dHJpYnV0ZXMiOm51bGwsInByb3BlcnRpZXMiOm51bGwsIm1ldHJpY3MiOlt7ImlkIjoiRVBDX0NfMSIsImFnZ3JlZ2F0aW9uVHlwZSI6IkFWRyJ9LHsiaWQiOiJFUENfQ18yIiwiYWdncmVnYXRpb25UeXBlIjoiTUFYIn1dLCJrcGlNZXRyaWNzIjpudWxsLCJuYW1lIjoiUGF3YW4iLCJ0eXBlIjoiVGFibGUiLCJzdWJUeXBlIjoiVGFibGUiLCJkZXZpY2VUeXBlIjoiQ0dQIiwiZW50aXR5IjpudWxsLCJkaW1lbnNpb25zIjpbeyJuYW1lIjoiQ0dQX05BTUUiLCJkaXNwbGF5TmFtZSI6IkNHUF9OQU1FIiwiaWQiOiJFUENfUF8xIn0seyJuYW1lIjoiTkVUV09SS19OQU1FIiwiZGlzcGxheU5hbWUiOiJORVRXT1JLX05BTUUiLCJpZCI6IkVQQ19QXzUifV0sImNvbnRleHQiOm51bGwsImdyb3VwQnlEaW1lbnNpb25zIjpudWxsfSwiZmlsdGVyIjp7ImNvbmRpdGlvbiI6IkFORCIsInJ1bGVzIjpbeyJjb25kaXRpb24iOiJPUiIsInJ1bGVzIjpbeyJmaWVsZCI6IkNPVU5URVJfR1JPVVBfSUQiLCJ2YWx1ZSI6IkVQQ19DR18zMyIsInR5cGUiOiJzZWxlY3RvciJ9LHsiZmllbGQiOiJDT1VOVEVSX0dST1VQX0lEIiwidmFsdWUiOiJFUENfQ0dfMzYiLCJ0eXBlIjoic2VsZWN0b3IifV19LHsiY29uZGl0aW9uIjoiT1IiLCJydWxlcyI6W3siaWQiOiJFUENfQ18xIiwidmFsdWUiOiItMjE0NzQ4MzY0OCIsInR5cGUiOiJib3VuZCJ9LHsiaWQiOiJFUENfQ18yIiwidmFsdWUiOiItMjE0NzQ4MzY0OCIsInR5cGUiOiJib3VuZCJ9XX1dfSwic2FtcGxpbmdQZXJpb2QiOm51bGwsImludGVydmFscyI6Ikxhc3QgMSBkYXkiLCJwYWdpbmF0aW9uIjp7InBhZ2VudW1iZXIiOjEsInBhZ2VzaXplIjoxMDAwMCwicGFnaW5nU3BlYyI6bnVsbH0sImdyYW51bGFyaXR5IjoiQUxMIiwicmVwb3J0RGF0YVR5cGUiOiJyYXciLCJmaWx0ZXJNYXAiOnsiRVBDX1BfMSI6WyJNTUUwMDFCS1QiLCJNTUUwMDFDUk8iXX0sImNvdW50ZXJHcm91cHNXaXRoQ291bnRlckFuZFByb3BlcnRpZXMiOlt7ImNvdW50ZXJHcm91cElkIjoiRVBDX0NHXzMzIiwiY291bnRlckdyb3VwRGV0YWlscyI6bnVsbCwiZGV2aWNlVHlwZSI6bnVsbCwibmVMZXZlbCI6bnVsbCwiY2dTb3VyY2UiOm51bGwsImNvdW50ZXJMaXN0IjpbeyJhZ2dyZWdhdGlvbiI6bnVsbCwiYWdncmVnYXRpb25MaXN0IjpudWxsLCJjb3VudGVyS2V5Ijp7ImNvdW50ZXJJZCI6IkVQQ19DXzEiLCJjb3VudGVyR3JvdXBUcmFucyI6bnVsbH0sImRpc3BsYXlOYW1lIjoiTWVhbiBDUFUgTG9hZCIsImNvdW50ZXJVbml0IjoiJSIsImNvdW50ZXJEZXNjcmlwdGlvbiI6Ik1lYW4gQ1BVIExvYWQiLCJjb3VudGVyVHlwZSI6IkNvdW50ZXIiLCJlbmFibGVkIjpudWxsLCJzb3VyY2VOYW1lIjpudWxsLCJmb3JtdWxhIjpudWxsfSx7ImFnZ3JlZ2F0aW9uIjpudWxsLCJhZ2dyZWdhdGlvbkxpc3QiOm51bGwsImNvdW50ZXJLZXkiOnsiY291bnRlcklkIjoiRVBDX0NfMiIsImNvdW50ZXJHcm91cFRyYW5zIjpudWxsfSwiZGlzcGxheU5hbWUiOiJNYXhpbXVtIENQVSBMb2FkIiwiY291bnRlclVuaXQiOiIlIiwiY291bnRlckRlc2NyaXB0aW9uIjoiTWF4aW11bSBDUFUgTG9hZCIsImNvdW50ZXJUeXBlIjoiQ291bnRlciIsImVuYWJsZWQiOm51bGwsInNvdXJjZU5hbWUiOm51bGwsImZvcm11bGEiOm51bGx9XSwicHJvcGVydGllcyI6W3sicHJvcGVydHlLZXkiOnsicHJvcGVydHlJZCI6IkVQQ19QXzEiLCJjb3VudGVyR3JvdXBzIjp7ImNvdW50ZXJHcm91cElkIjoiRVBDX0NHXzMzIiwiY291bnRlckdyb3VwRGV0YWlscyI6bnVsbCwiZGV2aWNlVHlwZSI6bnVsbCwibmVMZXZlbCI6bnVsbCwiY2dTb3VyY2UiOm51bGwsImNvdW50ZXJMaXN0IjpudWxsLCJwcm9wZXJ0aWVzIjpudWxsLCJrcGlzIjpudWxsLCJkaXNwbGF5TmFtZSI6bnVsbH19LCJwcm9wZXJ0eU5hbWUiOiJDR1BfTkFNRSIsInByb3BlcnR5VmFsdWVzIjoie1widmFsdWVzXCI6W1wiTU1FMDAxQktUXCIsXCJNTUUwMDFDUk9cIixcIk1NRTAwMUxEU1wiLFwiTU1FMDAxTFROXCIsXCJNTUUwMDFNRkRcIixcIk1NRTAwMVdWTlwiLFwiTU1FMDAyQ1JPXCIsXCJNTUUwMDJMRFNcIixcIk1NRTAwMkxUTlwiLFwiTU1FMDAyV1ZOXCIsXCJQU0hDUk8xQ1wiLFwiUFNIS1QwM0NcIixcIlBTSExEMDJDXCIsXCJQU0hMVDAxQ1wiLFwiUFNITUYwMUNcIixcIlBTSFdWMDJDXCIsXCJQU0hXVjAzQ1wiXX0iLCJzZWxlY3RlZFZhbHVlcyI6WyJNTUUwMDFCS1QiLCJNTUUwMDFDUk8iXX0seyJwcm9wZXJ0eUtleSI6eyJwcm9wZXJ0eUlkIjoiRVBDX1BfNSIsImNvdW50ZXJHcm91cHMiOnsiY291bnRlckdyb3VwSWQiOiJFUENfQ0dfMzMiLCJjb3VudGVyR3JvdXBEZXRhaWxzIjpudWxsLCJkZXZpY2VUeXBlIjpudWxsLCJuZUxldmVsIjpudWxsLCJjZ1NvdXJjZSI6bnVsbCwiY291bnRlckxpc3QiOm51bGwsInByb3BlcnRpZXMiOm51bGwsImtwaXMiOm51bGwsImRpc3BsYXlOYW1lIjpudWxsfX0sInByb3BlcnR5TmFtZSI6Ik5FVFdPUktfTkFNRSIsInByb3BlcnR5VmFsdWVzIjoibnVsbCIsInNlbGVjdGVkVmFsdWVzIjpbXX1dLCJrcGlzIjpudWxsLCJkaXNwbGF5TmFtZSI6IkhXSV9DR1BfQ1BVX0xPQUQifSx7ImNvdW50ZXJHcm91cElkIjoiRVBDX0NHXzM2IiwiY291bnRlckdyb3VwRGV0YWlscyI6bnVsbCwiZGV2aWNlVHlwZSI6bnVsbCwibmVMZXZlbCI6bnVsbCwiY2dTb3VyY2UiOm51bGwsImNvdW50ZXJMaXN0IjpbeyJhZ2dyZWdhdGlvbiI6bnVsbCwiYWdncmVnYXRpb25MaXN0IjpudWxsLCJjb3VudGVyS2V5Ijp7ImNvdW50ZXJJZCI6IkVQQ19DXzIiLCJjb3VudGVyR3JvdXBUcmFucyI6bnVsbH0sImRpc3BsYXlOYW1lIjoiVXNlZCBNZW1vcnkgU2l6ZSIsImNvdW50ZXJVbml0IjoiTUIiLCJjb3VudGVyRGVzY3JpcHRpb24iOiJVc2VkIE1lbW9yeSBTaXplIiwiY291bnRlclR5cGUiOiJDb3VudGVyIiwiZW5hYmxlZCI6bnVsbCwic291cmNlTmFtZSI6bnVsbCwiZm9ybXVsYSI6bnVsbH1dLCJwcm9wZXJ0aWVzIjpbeyJwcm9wZXJ0eUtleSI6eyJwcm9wZXJ0eUlkIjoiRVBDX1BfMSIsImNvdW50ZXJHcm91cHMiOnsiY291bnRlckdyb3VwSWQiOiJFUENfQ0dfMzYiLCJjb3VudGVyR3JvdXBEZXRhaWxzIjpudWxsLCJkZXZpY2VUeXBlIjpudWxsLCJuZUxldmVsIjpudWxsLCJjZ1NvdXJjZSI6bnVsbCwiY291bnRlckxpc3QiOm51bGwsInByb3BlcnRpZXMiOm51bGwsImtwaXMiOm51bGwsImRpc3BsYXlOYW1lIjpudWxsfX0sInByb3BlcnR5TmFtZSI6IkNHUF9OQU1FIiwicHJvcGVydHlWYWx1ZXMiOiJ7XCJ2YWx1ZXNcIjpbXCJNTUUwMDFCS1RcIixcIk1NRTAwMUNST1wiLFwiTU1FMDAxTERTXCIsXCJNTUUwMDFMVE5cIixcIk1NRTAwMU1GRFwiLFwiTU1FMDAxV1ZOXCIsXCJNTUUwMDJDUk9cIixcIk1NRTAwMkxEU1wiLFwiTU1FMDAyTFROXCIsXCJNTUUwMDJXVk5cIixcIlBTSENSTzFDXCIsXCJQU0hLVDAzQ1wiLFwiUFNITEQwMkNcIixcIlBTSExUMDFDXCIsXCJQU0hNRjAxQ1wiLFwiUFNIV1YwMkNcIixcIlBTSFdWMDNDXCJdfSIsInNlbGVjdGVkVmFsdWVzIjpbIk1NRTAwMUJLVCIsIk1NRTAwMUNSTyJdfSx7InByb3BlcnR5S2V5Ijp7InByb3BlcnR5SWQiOiJFUENfUF81IiwiY291bnRlckdyb3VwcyI6eyJjb3VudGVyR3JvdXBJZCI6IkVQQ19DR18zNiIsImNvdW50ZXJHcm91cERldGFpbHMiOm51bGwsImRldmljZVR5cGUiOm51bGwsIm5lTGV2ZWwiOm51bGwsImNnU291cmNlIjpudWxsLCJjb3VudGVyTGlzdCI6bnVsbCwicHJvcGVydGllcyI6bnVsbCwia3BpcyI6bnVsbCwiZGlzcGxheU5hbWUiOm51bGx9fSwicHJvcGVydHlOYW1lIjoiTkVUV09SS19OQU1FIiwicHJvcGVydHlWYWx1ZXMiOiJudWxsIiwic2VsZWN0ZWRWYWx1ZXMiOltdfV0sImtwaXMiOm51bGwsImRpc3BsYXlOYW1lIjoiSFdJX0NHUF9NRU0ifV19"
  //                       }
  //                     ]
  //                   }
  //                 ]
  //               }
  //             ],
  //             "applicableProfiles": []
  //           }
  //         ],
  //         "dashboards": [
  //           {
  //             "id": "0eNyyc",
  //             "name": "DB1",
  //             "type": "common",
  //             "view": "both",
  //             "subDashboards": [
  //               {
  //                 "name": "DB1",
  //                 "subDashboardId": "6nnBRP",
  //                 "dashboardId": null,
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
  //             "profiles": null,
  //             "message": null
  //           },
  //           {
  //             "id": "C2zBxL",
  //             "name": "MME Dashboard",
  //             "type": "common",
  //             "view": "both",
  //             "subDashboards": [
  //               {
  //                 "name": "CPU View",
  //                 "subDashboardId": "hNsO2b",
  //                 "dashboardId": null,
  //                 "reports": [
  //                   {
  //                     "userTemplateId": "D07jiR2",
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
  //                           }
  //                         ],
  //                         "kpiMetrics": null,
  //                         "name": "Pawan",
  //                         "type": "Table",
  //                         "subType": "Table",
  //                         "deviceType": "CGP",
  //                         "entity": null,
  //                         "dimensions": [
  //                           {
  //                             "name": "CGP_NAME",
  //                             "displayName": "CGP_NAME",
  //                             "id": "EPC_P_1"
  //                           },
  //                           {
  //                             "name": "NETWORK_NAME",
  //                             "displayName": "NETWORK_NAME",
  //                             "id": "EPC_P_5"
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
  //                                 "value": "EPC_CG_36",
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
  //                               }
  //                             ]
  //                           }
  //                         ]
  //                       },
  //                       "samplingPeriod": null,
  //                       "intervals": "Last 1 day",
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
  //                           "MME001CRO"
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
  //                                 "MME001CRO"
  //                               ]
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
  //                           "counterGroupId": "EPC_CG_36",
  //                           "counterGroupDetails": null,
  //                           "deviceType": null,
  //                           "neLevel": null,
  //                           "cgSource": null,
  //                           "counterList": [
  //                             {
  //                               "aggregation": null,
  //                               "aggregationList": null,
  //                               "counterKey": {
  //                                 "counterId": "EPC_C_2",
  //                                 "counterGroupTrans": null
  //                               },
  //                               "displayName": "Used Memory Size",
  //                               "counterUnit": "MB",
  //                               "counterDescription": "Used Memory Size",
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
  //                                   "counterGroupId": "EPC_CG_36",
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
  //                                 "MME001CRO"
  //                               ]
  //                             },
  //                             {
  //                               "propertyKey": {
  //                                 "propertyId": "EPC_P_5",
  //                                 "counterGroups": {
  //                                   "counterGroupId": "EPC_CG_36",
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
  //                           "displayName": "HWI_CGP_MEM"
  //                         }
  //                       ]
  //                     },
  //                     "metrics": null,
  //                     "kpiMetrics": null,
  //                     "response": null,
  //                     "userName": null,
  //                     "reportName": "Pawan",
  //                     "graphData": null,
  //                     "header": null
  //                   },
  //                   {
  //                     "userTemplateId": "H2HwaWv",
  //                     "reportConfiguration": {
  //                       "configuration": {
  //                         "attributes": null,
  //                         "properties": null,
  //                         "metrics": [
  //                           {
  //                             "id": "EPC_C_1",
  //                             "aggregationType": "AVG"
  //                           }
  //                         ],
  //                         "kpiMetrics": null,
  //                         "name": "Aval",
  //                         "type": "Graph",
  //                         "subType": "Bar",
  //                         "deviceType": "CGP",
  //                         "entity": null,
  //                         "dimensions": [
  //                           {
  //                             "name": "CGP_NAME",
  //                             "displayName": "CGP_NAME",
  //                             "id": "EPC_P_1"
  //                           },
  //                           {
  //                             "name": "NETWORK_NAME",
  //                             "displayName": "NETWORK_NAME",
  //                             "id": "EPC_P_5"
  //                           },
  //                           {
  //                             "name": "BOARD_LOCATION",
  //                             "displayName": "BOARD_LOCATION",
  //                             "id": "EPC_P_2"
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
  //                               }
  //                             ]
  //                           }
  //                         ]
  //                       },
  //                       "samplingPeriod": null,
  //                       "intervals": "Last 1 week",
  //                       "pagination": {
  //                         "pagenumber": 1,
  //                         "pagesize": 10000,
  //                         "pagingSpec": null
  //                       },
  //                       "granularity": "ALL",
  //                       "reportDataType": "raw",
  //                       "filterMap": {
  //                         "EPC_P_1": [
  //                           "MME001BKT"
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
  //                                 "MME001BKT"
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
  //                         }
  //                       ]
  //                     },
  //                     "metrics": null,
  //                     "kpiMetrics": null,
  //                     "response": null,
  //                     "userName": null,
  //                     "reportName": "Aval",
  //                     "graphData": null,
  //                     "header": null
  //                   },
  //                   {
  //                     "userTemplateId": "Q2AdOzc",
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
  //               },
  //               {
  //                 "name": "Traffic",
  //                 "subDashboardId": "PyAcpB",
  //                 "dashboardId": null,
  //                 "reports": [
  //                   {
  //                     "userTemplateId": "qbCbw4L",
  //                     "reportConfiguration": {
  //                       "configuration": {
  //                         "attributes": null,
  //                         "properties": null,
  //                         "metrics": [
  //                           {
  //                             "id": "EPC_C_1",
  //                             "aggregationType": "AVG"
  //                           }
  //                         ],
  //                         "kpiMetrics": null,
  //                         "name": "Aval",
  //                         "type": "Graph",
  //                         "subType": "Bar",
  //                         "deviceType": "CGP",
  //                         "entity": null,
  //                         "dimensions": [
  //                           {
  //                             "name": "CGP_NAME",
  //                             "displayName": "CGP_NAME",
  //                             "id": "EPC_P_1"
  //                           },
  //                           {
  //                             "name": "NETWORK_NAME",
  //                             "displayName": "NETWORK_NAME",
  //                             "id": "EPC_P_5"
  //                           },
  //                           {
  //                             "name": "BOARD_LOCATION",
  //                             "displayName": "BOARD_LOCATION",
  //                             "id": "EPC_P_2"
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
  //                               }
  //                             ]
  //                           }
  //                         ]
  //                       },
  //                       "samplingPeriod": null,
  //                       "intervals": "Last 1 week",
  //                       "pagination": {
  //                         "pagenumber": 1,
  //                         "pagesize": 10000,
  //                         "pagingSpec": null
  //                       },
  //                       "granularity": "ALL",
  //                       "reportDataType": "raw",
  //                       "filterMap": {
  //                         "EPC_P_1": [
  //                           "MME001BKT"
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
  //                                 "MME001BKT"
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
  //                         }
  //                       ]
  //                     },
  //                     "metrics": null,
  //                     "kpiMetrics": null,
  //                     "response": null,
  //                     "userName": null,
  //                     "reportName": "Aval",
  //                     "graphData": null,
  //                     "header": null
  //                   },
  //                   {
  //                     "userTemplateId": "tbSzGIC",
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
  //                           }
  //                         ],
  //                         "kpiMetrics": null,
  //                         "name": "Pawan",
  //                         "type": "Table",
  //                         "subType": "Table",
  //                         "deviceType": "CGP",
  //                         "entity": null,
  //                         "dimensions": [
  //                           {
  //                             "name": "CGP_NAME",
  //                             "displayName": "CGP_NAME",
  //                             "id": "EPC_P_1"
  //                           },
  //                           {
  //                             "name": "NETWORK_NAME",
  //                             "displayName": "NETWORK_NAME",
  //                             "id": "EPC_P_5"
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
  //                                 "value": "EPC_CG_36",
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
  //                               }
  //                             ]
  //                           }
  //                         ]
  //                       },
  //                       "samplingPeriod": null,
  //                       "intervals": "Last 1 day",
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
  //                           "MME001CRO"
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
  //                                 "MME001CRO"
  //                               ]
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
  //                           "counterGroupId": "EPC_CG_36",
  //                           "counterGroupDetails": null,
  //                           "deviceType": null,
  //                           "neLevel": null,
  //                           "cgSource": null,
  //                           "counterList": [
  //                             {
  //                               "aggregation": null,
  //                               "aggregationList": null,
  //                               "counterKey": {
  //                                 "counterId": "EPC_C_2",
  //                                 "counterGroupTrans": null
  //                               },
  //                               "displayName": "Used Memory Size",
  //                               "counterUnit": "MB",
  //                               "counterDescription": "Used Memory Size",
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
  //                                   "counterGroupId": "EPC_CG_36",
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
  //                                 "MME001CRO"
  //                               ]
  //                             },
  //                             {
  //                               "propertyKey": {
  //                                 "propertyId": "EPC_P_5",
  //                                 "counterGroups": {
  //                                   "counterGroupId": "EPC_CG_36",
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
  //                           "displayName": "HWI_CGP_MEM"
  //                         }
  //                       ]
  //                     },
  //                     "metrics": null,
  //                     "kpiMetrics": null,
  //                     "response": null,
  //                     "userName": null,
  //                     "reportName": "Pawan",
  //                     "graphData": null,
  //                     "header": null
  //                   }
  //                 ],
  //                 "dashboardTemplates": null
  //               }
  //             ],
  //             "profiles": null,
  //             "message": null
  //           },
  //           {
  //             "id": "eTxP7M",
  //             "name": "AMAT7",
  //             "type": "common",
  //             "view": "both",
  //             "subDashboards": [
  //               {
  //                 "name": "AMAT7_RAW_Reports",
  //                 "subDashboardId": "BUiRvI",
  //                 "dashboardId": null,
  //                 "reports": [
  //                   {
  //                     "userTemplateId": "tNnwiyb",
  //                     "reportConfiguration": {
  //                       "configuration": {
  //                         "attributes": null,
  //                         "properties": null,
  //                         "metrics": [
  //                           {
  //                             "id": "AMAT7_C_1",
  //                             "aggregationType": "SUM"
  //                           },
  //                           {
  //                             "id": "AMAT7_C_2",
  //                             "aggregationType": "SUM"
  //                           }
  //                         ],
  //                         "kpiMetrics": null,
  //                         "name": "AMAT7_RAW_Report1",
  //                         "type": "Table",
  //                         "subType": "Table",
  //                         "deviceType": "AMAT7",
  //                         "entity": null,
  //                         "dimensions": [
  //                           {
  //                             "name": "AMAT7_SITE",
  //                             "displayName": "AMAT7_SITE",
  //                             "id": "AMAT7_P_1"
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
  //                                 "value": "AMAT7_CG_1",
  //                                 "type": "selector"
  //                               }
  //                             ]
  //                           },
  //                           {
  //                             "condition": "OR",
  //                             "rules": [
  //                               {
  //                                 "id": "AMAT7_C_1",
  //                                 "value": "-2147483648",
  //                                 "type": "bound"
  //                               },
  //                               {
  //                                 "id": "AMAT7_C_2",
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
  //                         "AMAT7_P_1": [
  //                           "a7cktlr0"
  //                         ]
  //                       },
  //                       "counterGroupsWithCounterAndProperties": [
  //                         {
  //                           "counterGroupId": "AMAT7_CG_1",
  //                           "counterGroupDetails": null,
  //                           "deviceType": null,
  //                           "neLevel": null,
  //                           "cgSource": null,
  //                           "counterList": [
  //                             {
  //                               "aggregation": null,
  //                               "aggregationList": null,
  //                               "counterKey": {
  //                                 "counterId": "AMAT7_C_1",
  //                                 "counterGroupTrans": null
  //                               },
  //                               "displayName": "MSU_CNT",
  //                               "counterUnit": "count",
  //                               "counterDescription": "Number of Message Signal Units (MSUs)",
  //                               "counterType": "Counter",
  //                               "enabled": null,
  //                               "sourceName": null,
  //                               "formula": null
  //                             },
  //                             {
  //                               "aggregation": null,
  //                               "aggregationList": null,
  //                               "counterKey": {
  //                                 "counterId": "AMAT7_C_2",
  //                                 "counterGroupTrans": null
  //                               },
  //                               "displayName": "OCTET_CNT",
  //                               "counterUnit": "count",
  //                               "counterDescription": "Number of Octets Message Signal Units (MSUs)",
  //                               "counterType": "Counter",
  //                               "enabled": null,
  //                               "sourceName": null,
  //                               "formula": null
  //                             }
  //                           ],
  //                           "properties": [
  //                             {
  //                               "propertyKey": {
  //                                 "propertyId": "AMAT7_P_1",
  //                                 "counterGroups": {
  //                                   "counterGroupId": "AMAT7_CG_1",
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
  //                               "propertyName": "AMAT7_SITE",
  //                               "propertyValues": "{\"values\":[\"a7cktlr0\",\"a7ccrlr0\"]}",
  //                               "selectedValues": [
  //                                 "a7cktlr0"
  //                               ]
  //                             }
  //                           ],
  //                           "kpis": null,
  //                           "displayName": "NS_AMAT7_LINKS"
  //                         }
  //                       ]
  //                     },
  //                     "metrics": null,
  //                     "kpiMetrics": null,
  //                     "response": null,
  //                     "userName": null,
  //                     "reportName": "AMAT7_RAW_Report1",
  //                     "graphData": null,
  //                     "header": null
  //                   }
  //                 ],
  //                 "dashboardTemplates": null
  //               }
  //             ],
  //             "profiles": null,
  //             "message": null
  //           },
  //           {
  //             "id": "Yw0fEA",
  //             "name": "Test Dash for MME",
  //             "type": "common",
  //             "view": "both",
  //             "subDashboards": [
  //               {
  //                 "name": "MME R",
  //                 "subDashboardId": "7L8KaM",
  //                 "dashboardId": null,
  //                 "reports": [
  //                   {
  //                     "userTemplateId": "aCkPPgU",
  //                     "reportConfiguration": {
  //                       "configuration": {
  //                         "attributes": null,
  //                         "properties": null,
  //                         "metrics": [
  //                           {
  //                             "id": "EPC_C_1"
  //                           },
  //                           {
  //                             "id": "EPC_C_2"
  //                           }
  //                         ],
  //                         "kpiMetrics": null,
  //                         "name": "MME-lineChart",
  //                         "type": "Graph",
  //                         "subType": "Vertical Stacked Bar",
  //                         "deviceType": "MME",
  //                         "entity": null,
  //                         "dimensions": [
  //                           {
  //                             "name": "MME_NAME",
  //                             "displayName": "MME_NAME",
  //                             "id": "EPC_P_1"
  //                           },
  //                           {
  //                             "name": "NETWORK_NAME",
  //                             "displayName": "NETWORK_NAME",
  //                             "id": "EPC_P_5"
  //                           },
  //                           {
  //                             "name": "NETWORK_NAME",
  //                             "displayName": "NETWORK_NAME",
  //                             "id": "EPC_P_3"
  //                           }
  //                         ],
  //                         "context": null,
  //                         "groupByDimensions": null
  //                       },
  //                       "filter": null,
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
  //                           "MME001CRO"
  //                         ]
  //                       },
  //                       "counterGroupsWithCounterAndProperties": [
  //                         {
  //                           "counterGroupId": "EPC_CG_11",
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
  //                               "displayName": "AUTH Req",
  //                               "counterUnit": "times",
  //                               "counterDescription": "Authentication request Times",
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
  //                                   "counterGroupId": "EPC_CG_11",
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
  //                               "propertyName": "MME_NAME",
  //                               "propertyValues": "{\"values\":[\"MME001CRO\",\"MME001LDS\",\"MME001LTN\",\"MME001MFD\",\"MME001WVN\",\"MME002BKT\",\"MME002CRO\",\"MME002LDS\",\"MME002LTN\",\"MME002MFD\",\"MME002WVN\",\"MME001ENF\",\"MME001PRS\",\"MME001BKT\"]}",
  //                               "selectedValues": [
  //                                 "MME001CRO"
  //                               ]
  //                             },
  //                             {
  //                               "propertyKey": {
  //                                 "propertyId": "EPC_P_3",
  //                                 "counterGroups": {
  //                                   "counterGroupId": "EPC_CG_11",
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
  //                               "selectedValues": null
  //                             }
  //                           ],
  //                           "kpis": null,
  //                           "displayName": "HWI_MME_S1MODSEC"
  //                         }
  //                       ]
  //                     },
  //                     "metrics": null,
  //                     "kpiMetrics": null,
  //                     "response": null,
  //                     "userName": null,
  //                     "reportName": "MME-lineChart",
  //                     "graphData": null,
  //                     "header": null
  //                   },
  //                   {
  //                     "userTemplateId": "ExeDTHm",
  //                     "reportConfiguration": {
  //                       "configuration": {
  //                         "attributes": null,
  //                         "properties": null,
  //                         "metrics": [
  //                           {
  //                             "id": "EPC_C_1",
  //                             "aggregationType": "MAX"
  //                           },
  //                           {
  //                             "id": "EPC_C_2",
  //                             "aggregationType": "AVG"
  //                           }
  //                         ],
  //                         "kpiMetrics": null,
  //                         "name": "Test-MME-Sai",
  //                         "type": "Table",
  //                         "subType": "Table",
  //                         "deviceType": "MME",
  //                         "entity": null,
  //                         "dimensions": [
  //                           {
  //                             "name": "MME_NAME",
  //                             "displayName": "MME_NAME",
  //                             "id": "EPC_P_1"
  //                           },
  //                           {
  //                             "name": "NETWORK_NAME",
  //                             "displayName": "NETWORK_NAME",
  //                             "id": "EPC_P_5"
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
  //                                 "value": "EPC_CG_1",
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
  //                           "MME001WVN"
  //                         ]
  //                       },
  //                       "counterGroupsWithCounterAndProperties": [
  //                         {
  //                           "counterGroupId": "EPC_CG_1",
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
  //                               "displayName": "Core maximum CPU",
  //                               "counterUnit": "%",
  //                               "counterDescription": "Core maximum CPU occupation ratio",
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
  //                               "displayName": "Core Avg CPU occupation ratio",
  //                               "counterUnit": "%",
  //                               "counterDescription": "Core average CPU occupation ratio",
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
  //                                   "counterGroupId": "EPC_CG_1",
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
  //                               "propertyName": "MME_NAME",
  //                               "propertyValues": "{\"values\":[\"MME001CRO\",\"MME001LDS\",\"MME001LTN\",\"MME001MFD\",\"MME001WVN\",\"MME002BKT\",\"MME002CRO\",\"MME002LDS\",\"MME002LTN\",\"MME002MFD\",\"MME002WVN\",\"MME001ENF\",\"MME001PRS\",\"MME001BKT\"]}",
  //                               "selectedValues": [
  //                                 "MME001WVN"
  //                               ]
  //                             },
  //                             {
  //                               "propertyKey": {
  //                                 "propertyId": "EPC_P_5",
  //                                 "counterGroups": {
  //                                   "counterGroupId": "EPC_CG_1",
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
  //                           "displayName": "HWI_MME_CORECPURESC"
  //                         }
  //                       ]
  //                     },
  //                     "metrics": null,
  //                     "kpiMetrics": null,
  //                     "response": null,
  //                     "userName": null,
  //                     "reportName": "Test-MME-Sai",
  //                     "graphData": null,
  //                     "header": null
  //                   }
  //                 ],
  //                 "dashboardTemplates": null
  //               }
  //             ],
  //             "profiles": null,
  //             "message": null
  //           },
  //           {
  //             "id": "ZKJwLP",
  //             "name": "CG",
  //             "type": "common",
  //             "view": "both",
  //             "subDashboards": [
  //               {
  //                 "name": "CG_Raw_Reports",
  //                 "subDashboardId": "aRH5Wy",
  //                 "dashboardId": null,
  //                 "reports": [
  //                   {
  //                     "userTemplateId": "LCUAzQa",
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
  //                   }
  //                 ],
  //                 "dashboardTemplates": null
  //               }
  //             ],
  //             "profiles": null,
  //             "message": null
  //           }
  //         ]
  //       }
  //     }
  //     this.loading = false;
  //      this.menuService.setMenu(data);
  //      this.menuService.setMenuSubject("Menu added");
  //      if(data && data.profileResponse && data.profileResponse.dashboards && data.profileResponse.dashboards.length>0){
  //        let dashboardId= data.profileResponse.dashboards[0].id;
  //        this.router.navigate(['/subdashboards/'+dashboardId]);        
  //      }else{
  //        this.router.navigate(['/report/createReport']);   
  //      }
  //         this.localStorageService.set("profile",profile);
  //         this.localStorageService.set("applicableProfiles",data.profileResponse.applicableProfiles);  
  //         this._spinner.removeSpinnerButton();
  //   // },(err)=>{
  //   //   if(err.status==401 || err.status==403){
  //   //     this._spinner.showErrorMessage("Incorrect Username or Password");
  //   //   }else if(err.status == 404){
  //   //      this._spinner.showErrorMessage("Server unavailable");
  //   //   }
  //   //   this._spinner.removeSpinnerButton();
  //   //    this.loading = false;
  //   // })
  // }
  signIn() {
    let request = {};
     if(this.loading){
      return false;
    }
    this.loading = true;
    this._spinner.setSpinnerButton($("#signIn").children('i'));
     request["userName"] = this.localStorageService.get("userName");
       request["profiles"] =[];
       let profile = this.profiles.filter((prof)=>{
        return prof.profileId == this.selectedProfile
       })
    request["profiles"].push({"profileId" : this.selectedProfile })
    this.loginService.afterLogin(request).subscribe((data)=>{
      this.loading = false;
       this.menuService.setMenu(data);
       this.menuService.setMenuSubject("Menu added");
       if(data && data.profileResponse && data.profileResponse.dashboards && data.profileResponse.dashboards.length>0){
         let dashboardId= data.profileResponse.dashboards[0].id;
         this.router.navigate(['/subdashboards/'+dashboardId]);        
       }else{
         this.router.navigate(['/report/createReport']);   
       }
          this.localStorageService.set("profile",profile);
          this.localStorageService.set("applicableProfiles",data.profileResponse.applicableProfiles);  
          this._spinner.removeSpinnerButton();
    },(err)=>{
      if(err.status==401 || err.status==403){
        this._spinner.showErrorMessage("Incorrect Username or Password");
      }else if(err.status == 404){
         this._spinner.showErrorMessage("Server unavailable");
      }
      this._spinner.removeSpinnerButton();
       this.loading = false;
    })
  }
}
