import { Injectable }   from '@angular/core';
import { HttpClient }   from '@angular/common/http';
import { Observable }   from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {User} from '../../../models/User'

@Injectable()
export class AlarmMonitoringService {

  private serviceUrl = 'https://api.myjson.com/bins/107s6u';
  
  constructor(private http: HttpClient) { }
  
  getUser(): Observable<User[]> {
    return this.http.get<User[]>(this.serviceUrl);
  }
}