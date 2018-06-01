import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule, BrowserXhr, Http , Request, RequestOptionsArgs, Response, XHRBackend, RequestOptions, ConnectionBackend, Headers } from '@angular/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { EENpmModule } from './npm/npm.module';
import { APP_BASE_HREF } from '@angular/common';
import { routing, appRoutingProviders } from './app.routing';
import { HttpClientModule } from '@angular/common/http'; 
import {MatTableModule} from '@angular/material/table';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {ModalModule} from "ng2-modal";

import { SelectUserComponent } from './select-user/select-user.component';
import { HttpClientService } from './npm/services/httpClient.service';
import { DataLoadSpinner } from './npm/services/dataLoadSpinner.service';
import { GetJSONService } from './npm/services/getJSON.service';
import { LocalStorageService, LocalStorageModule } from 'angular-2-local-storage';
import { LineChartComponent } from './npm/charts/line-chart/line-chart.component';
import { InlineChartComponent } from './npm/charts/inline-chart/inline-chart.component';
import { ConfigService } from './npm/services/config/config.service';
import { environment } from '../environments/environment.prod';
import { MenuService } from './npm/services/menu/menu.service';
import { LoginService } from './npm/services/http/login/login.service';
import { IwanreportService } from './npm/services/http/iwanreport/iwanreport.service';
import { SharedModule } from './npm/shared/shared.module';
import {ReportDataResolver} from './npm/resolvers/report/report-data.resolver';
import {AuthGuard} from './auth-guard.guard';
// AlarmMonitoringComponents
import {AlarmMonitoringComponent} from './npm/alarm-monitoring/alarm-monitoring.component';
import {AlarmMonitoringService} from './npm/services/http/alarm-monitoring/alarm-monitoring.service';
import {YourDialog } from './npm/alarm-monitoring/alarm-monitoring.component';
import {TicketRefDialog} from './npm/alarm-monitoring/alarm-monitoring.component'

export function HttpServiceFactory(xhrBackend: XHRBackend, requestOptions: RequestOptions, localStorageService: LocalStorageService, spinner: DataLoadSpinner) {
  return new HttpClientService(xhrBackend, requestOptions, spinner, localStorageService);
}
export function ConfigLoader(configService: ConfigService) {
  if (environment.production) {
    return () => configService.load(environment.configProdFile);
  } else {
    return () => configService.load(environment.configDevFile);
  }
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SelectUserComponent,
    YourDialog ,
   TicketRefDialog
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    EENpmModule,
    routing,
    LocalStorageModule.withConfig({
      prefix: 'npm',
      storageType: 'localStorage'
    }),
    ModalModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [HttpClientModule,ConfigService, {provide: APP_INITIALIZER,useFactory: ConfigLoader,deps: [ConfigService],multi: true}, { provide: APP_BASE_HREF, useValue: '/npm-harman/' }, appRoutingProviders, DataLoadSpinner, LocalStorageService,ReportDataResolver, {
      provide: Http,
      useFactory: HttpServiceFactory,
      deps: [XHRBackend, RequestOptions, LocalStorageService, DataLoadSpinner]
    }, GetJSONService,MenuService,LoginService,AuthGuard,IwanreportService,AlarmMonitoringService],
  bootstrap: [AppComponent],
  entryComponents: [LineChartComponent,InlineChartComponent,YourDialog,TicketRefDialog]
})
export class AppModule {

}
