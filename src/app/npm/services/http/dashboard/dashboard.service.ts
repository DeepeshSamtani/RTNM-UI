import { Injectable, Inject} from '@angular/core';
import { Http,Headers,RequestOptions,Response,RequestMethod,Request} from '@angular/http';
import { Observable } from 'rxjs';
import { LocalStorageService } from 'angular-2-local-storage';
import { AppConfig } from '../../../../configurations/app.config';
import { GetJSONService }  from '../../getJSON.service';
import { ConfigService }  from '../../config/config.service';
import { DataLoadSpinner }  from '../../dataLoadSpinner.service';
@Injectable()
export class DashboardService {
 constructor(private http :Http , private config :AppConfig,private configService : ConfigService,private getJSONService:GetJSONService,private dataLoadSpinner : DataLoadSpinner ){}
  baseUrl = this.configService.getConfiguration().baseUrl;
    druidUrl = this.configService.getConfiguration().druidBaseUrl;
    httpRestCall = this.configService.getConfiguration().httpRestCall;


 deleteDashboard(request){
     let postheaders = new Headers({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
        let url = this.baseUrl + this.config.deleteDashboard;
        let options = new RequestOptions({ headers: postheaders });
        if (this.httpRestCall) {
            
            return this.http.post(url, request, options).map(res => res.json()).catch(err => Observable.throw(err));
        } else {
            return this.getJSONService.getJSON(this.config.deleteDashboardJSON).map(res => res.json());
        }
 }

 editDashboard(request){
     let postheaders = new Headers({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
        let url = this.baseUrl + this.config.editDashboard;
        let options = new RequestOptions({ headers: postheaders });
        if (this.httpRestCall) {
            this.dataLoadSpinner.show();
            return this.http.post(url, request, options).map(res => res.json()).catch(err => Observable.throw(err));
        } else {
            return this.getJSONService.getJSON(this.config.deleteDashboardJSON).map(res => res.json());
        }
 }

}