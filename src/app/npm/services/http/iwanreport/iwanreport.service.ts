import { Injectable, Inject } from '@angular/core';
import { HttpModule,Http,Headers,RequestOptions,Response,RequestMethod,Request} from '@angular/http';
import { Observable } from 'rxjs';
import { ConfigService }  from '../../config/config.service';
@Injectable()
export class IwanreportService {
  baseUrl = this.configService.getConfiguration().baseUrl;
  druidUrl = this.configService.getConfiguration().druidBaseUrl;
  httpRestCall = this.configService.getConfiguration().httpRestCall;
  constructor(private http :Http,private configService : ConfigService) { }
   getIWANReport(request:any){
//     let postheaders = new Headers({'Content-Type': 'application/json','Access-Control-Allow-Origin':'*'});
//     let url="http://localhost:8090/rtnm/reports/getIWANSpecificPacketReport";
    
//     let options = new RequestOptions({ headers: postheaders });
//    return this.http.post(url ,request ,options).map(res => res.json()).catch(err => Observable.throw(err));
    
 }


getIWANAreaReport(request:any){
  let postheaders = new Headers({'Content-Type': 'application/json','Access-Control-Allow-Origin':'*'});
  //let url="http://10.55.96.214:8080/rtnm/reports/getIWANSpecificSrcByteReport";
  let url=this.baseUrl+"/reports/getIWANSpecificSrcByteReport"
  let options = new RequestOptions({ headers: postheaders });
 return this.http.post(url ,request ,options).map(res => res.json()).catch(err => Observable.throw(err));
  
}
getIWANAreaDestinationReport(request:any){
  let postheaders = new Headers({'Content-Type': 'application/json','Access-Control-Allow-Origin':'*'});
  //let url="http://10.55.96.214:8080/rtnm/reports/getIWANSpecificDestByteReport";
  let url=this.baseUrl+"/reports/getIWANSpecificDestByteReport"
  let options = new RequestOptions({ headers: postheaders });
 return this.http.post(url ,request ,options).map(res => res.json()).catch(err => Observable.throw(err));
  
}
getIWANBarDestinationReport(request:any){
  let postheaders = new Headers({'Content-Type': 'application/json','Access-Control-Allow-Origin':'*'});
  //let url="http://10.55.96.214:8080/rtnm/reports/getIWANSpecificDestPacketReport";
  let url=this.baseUrl+"/reports/getIWANSpecificDestPacketReport"
  let options = new RequestOptions({ headers: postheaders });
 return this.http.post(url ,request ,options).map(res => res.json()).catch(err => Observable.throw(err));
  
}
getIWANBarSourceReport(request:any){
  let postheaders = new Headers({'Content-Type': 'application/json','Access-Control-Allow-Origin':'*'});
  //let url="http://10.55.96.214:8080/rtnm/reports/getIWANSpecificSrcPacketReport";
  let url=this.baseUrl+"/reports/getIWANSpecificSrcPacketReport"
  let options = new RequestOptions({ headers: postheaders });
 return this.http.post(url ,request ,options).map(res => res.json()).catch(err => Observable.throw(err));
  
}

  }

