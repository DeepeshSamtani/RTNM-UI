import { Injectable, Inject } from '@angular/core';

@Injectable()
export class CommonGetterSetterService{
    constructor(){}
    counterNamesMap : Map<any, any> = new Map();
    configMap: Map<any, any> = new Map();
    subDashboardReportConfigList : Array<any>=[]; 
    isDashboardEdit:boolean = false;
    setCounterNamesMap(counterNamesMap){
        this.counterNamesMap = counterNamesMap;
    }

    getCounterNamesMap(){
         return this.counterNamesMap ;
    }

    setReportConfiguration(config){
        this.configMap = config;
    }

    getReportConfiguration(){
        return this.configMap;
    }

    setSubDashboardReportConfigList(list)
    {
        this.subDashboardReportConfigList = list;
    }
    getSubDashboardReportConfigList()
    {
        return this.subDashboardReportConfigList;
    }

    setDashboardEdit(isDashboardEdit){
     this.isDashboardEdit =isDashboardEdit   
    }

    getDashboardEdit(){
        return this.isDashboardEdit;
    }
}