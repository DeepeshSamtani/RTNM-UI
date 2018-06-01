import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EENpmComponent } from './npm/npm.component';
import { CreateReportComponent } from './npm/create-report/create-report.component';
import { SelectUserComponent } from './select-user/select-user.component';
import { LoginComponent } from './login/login.component';
import { MibSupportComponent } from './npm/mib-support/mib-support.component';
import { DashboardComponent } from  './npm/dashboard/dashboard.component';
import { KpiCreationComponent } from  './npm/kpi-creation/kpi-creation.component';
import { DynamicCounterComponent } from  './npm/dynamic-counter/dynamic-counter.component';
import {ReportComponent} from './npm/report/report.component';
import {SchedularComponent} from './npm/schedular/schedular.component';
import {ReportDataResolver} from './npm/resolvers/report/report-data.resolver';
import {UserComponent} from './npm/user/user.component';
import { SubdashboardsComponent } from './npm/subdashboards/subdashboards.component';
import {MyReportsComponent} from './npm/my-reports/my-reports.component';
import {MyDashboardsComponent} from './npm/my-dashboards/my-dashboards.component';
import {ManageDashboardsComponent} from './npm/manage-dashboards/manage-dashboards.component';
import {AuthGuard} from './auth-guard.guard';
import { KpiComponent } from './npm/kpi/kpi.component';
import {GeolocationComponent} from './npm/geolocation/geolocation.component';
import {RealtimeMonitoringComponent} from './npm/realtime-monitoring/realtime-monitoring.component';
import {TrafficVisualizationComponent} from './npm/traffic-visualization/traffic-visualization.component';
import {AnalyticalReportsComponent} from './npm/analytical-reports/analytical-reports.component'
import { CapacityManagementAutomationComponent } from './npm/capacity-management-automation/capacity-management-automation.component';
import { IwanreportsComponent } from './npm/iwanreports/iwanreports.component';
import {AlarmMonitoringComponent} from './npm/alarm-monitoring/alarm-monitoring.component';

export const appRoutes: Routes = [

  { path: '', pathMatch: 'full', component: LoginComponent },  
  { path: 'selectProfile', component: SelectUserComponent ,
    canActivate:[AuthGuard]},  
  {
    path: '',
    component: EENpmComponent,
    children: [
      { path: 'report/createReport', component: CreateReportComponent },
      { path: 'report/editReport/:templateId/:type/:dashboardId', component: CreateReportComponent ,resolve:{configuration : ReportDataResolver}},
      { path: 'mibSupport', component: MibSupportComponent },
      { path: 'dashboard/:dashboardId/subdashboard/:subdashboardId' , component : DashboardComponent},
      { path: 'kpiCreation', component: KpiComponent },
      // { path: 'kpiCreation' , component : KpiCreationComponent},
      //  { path: 'kpiCreation/:id' , component : KpiCreationComponent},
       { path: 'dashboard/:reportId/:type/:dashboardId' , component : ReportComponent},
       { path: 'report/:reportId/:type' , component : ReportComponent},
       { path: 'user' , component : UserComponent},
        { path: 'dynamicCounterAddition' , component : DynamicCounterComponent},
        { path:  'subdashboards/:dashboardId' , component : SubdashboardsComponent},
      { path:  'Report' , component : MyReportsComponent},
      { path:  'MyDashboards' , component : MyDashboardsComponent},
    { path:  'createDashboard' , component : MyDashboardsComponent},
     { path:  'editDashboard/:dashboardId' , component : MyDashboardsComponent},
    { path:  'manageDashboard' , component : ManageDashboardsComponent},
     { path: 'dashboard/:reportId/:type/:dashboardId/:subdashboardId' , component : ReportComponent},
     {path:'geolocation',component:GeolocationComponent},
     {path:'RealtimeMonitoring',component:RealtimeMonitoringComponent},
     {path:'visualization',component:TrafficVisualizationComponent},
     {path:'analyticalReport',component:AnalyticalReportsComponent},
     {path:'capacityManagementAutomation',component:CapacityManagementAutomationComponent},
     {path:'IWANReports',component:IwanreportsComponent},
     {path:'alarm-monitoring',component:AlarmMonitoringComponent}
    ],
    canActivate:[AuthGuard]
  }

];


export const appRoutingProviders: any[] = [
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, { useHash: true });