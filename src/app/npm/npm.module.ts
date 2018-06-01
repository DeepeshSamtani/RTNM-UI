import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, BrowserXhr, Http, Request, RequestOptionsArgs, Response, XHRBackend, RequestOptions, ConnectionBackend, Headers } from '@angular/http';
import { EENpmComponent } from './npm.component';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';

import { UploadMibComponent } from './upload-mib/upload-mib.component';
import { CreateReportComponent } from './create-report/create-report.component';
import { MibSupportComponent } from './mib-support/mib-support.component';
import { routing, appRoutingProviders } from '../app.routing';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoggedUserComponent } from './logged-user/logged-user.component';
import { LocalStorageModule } from 'angular-2-local-storage';
import { ChartsModule } from './charts/charts.module';
import {ChartTableModule } from './chart-table/chart-table.module';
import { GetreportService } from './services/http/report/getreport.service';
import { CommonParsingService } from './services/common/common.parsing.service';
import { CommonHighchartsOptionsService } from './services/common/common.highcharts.options.service';
import { SubdashboardsService } from './services/http/subdashboards/subdashboards.service';
import { AppConfig } from '../configurations/app.config';
import { CommonGetterSetterService } from './services/common/common.getterSetter.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { KpiCreationComponent } from './kpi-creation/kpi-creation.component';
import { KpiService } from './services/http/kpi/kpi.service';
import { ReportComponent } from './report/report.component';
import { SchedularComponent } from './schedular/schedular.component';
import { UserComponent } from './user/user.component';
import { DynamicCounterComponent } from './dynamic-counter/dynamic-counter.component';
import { VirtualScrollModule } from 'angular2-virtual-scroll';
import { SubdashboardsComponent } from './subdashboards/subdashboards.component';
import { MyReportsComponent } from './my-reports/my-reports.component';
import { MyDashboardsComponent } from './my-dashboards/my-dashboards.component';
import { ManageDashboardsComponent } from './manage-dashboards/manage-dashboards.component';

import { MatTabsModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatTableModule, MatButtonModule, MatDialogModule, MatListModule, MatCheckboxModule, MatProgressSpinnerModule, MatSnackBarModule, MatProgressBarModule} from '@angular/material';
import { KpiComponent } from './kpi/kpi.component';
import { KpiDeleteDialogComponent } from './kpi-delete-dialog/kpi-delete-dialog.component';
import { KpiCounterDisableComponent } from './kpi-counter-disable/kpi-counter-disable.component';
import { ChartTableLoaderComponent } from './chart-table-loader/chart-table-loader.component';
import { NguCarouselModule  } from '@ngu/carousel';
import { GeolocationComponent } from './geolocation/geolocation.component';
import { AgmCoreModule } from '@agm/core';
import { RealtimeMonitoringComponent } from './realtime-monitoring/realtime-monitoring.component';
import { TrafficVisualizationComponent } from './traffic-visualization/traffic-visualization.component';
import { AnalyticalReportsComponent } from './analytical-reports/analytical-reports.component';
import { CapacityManagementAutomationComponent } from './capacity-management-automation/capacity-management-automation.component';
import { IwanreportsComponent } from './iwanreports/iwanreports.component';
import { AlarmMonitoringComponent } from './alarm-monitoring/alarm-monitoring.component';
import { TableRowComponent } from './table-row/table-row.component';
@NgModule({
  declarations: [
    EENpmComponent,
    MenuComponent,
    HeaderComponent,

    UploadMibComponent,
    CreateReportComponent,
    MibSupportComponent,
    LoggedUserComponent,
    DashboardComponent,
    KpiCreationComponent,
    ReportComponent,
    SchedularComponent,
    UserComponent,
    DynamicCounterComponent,
    SubdashboardsComponent,
    MyReportsComponent,
    MyDashboardsComponent,
    ManageDashboardsComponent,
    KpiComponent,
    KpiDeleteDialogComponent,
    KpiCounterDisableComponent,
    ChartTableLoaderComponent,
    GeolocationComponent,
    RealtimeMonitoringComponent,
    TrafficVisualizationComponent,
    AnalyticalReportsComponent,
    CapacityManagementAutomationComponent,
    IwanreportsComponent,
    AlarmMonitoringComponent,
    TableRowComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    SharedModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    LocalStorageModule.withConfig({
      prefix: 'npm-app',
      storageType: 'localStorage'
    }),
    ChartsModule,
    ChartTableModule,
    VirtualScrollModule,   
    NguCarouselModule , 
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyACPWnAzhqIe-8OMTRYPYoLsutDMiWkAE8'
    })
  ],
  entryComponents: [
    KpiDeleteDialogComponent,
    KpiCounterDisableComponent
  ],
  exports: [
    EENpmComponent,
    MenuComponent,
    HeaderComponent,
    LoggedUserComponent],

  providers: [appRoutingProviders, GetreportService, CommonParsingService,  CommonHighchartsOptionsService, AppConfig,
  CommonGetterSetterService,KpiService ,SubdashboardsService
  ]
  
})
export class EENpmModule { }
