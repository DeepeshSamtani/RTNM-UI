import { Component, OnInit ,Input,SimpleChange} from '@angular/core';
import { GetreportService } from '../services/http/report/getreport.service';
import { CommonParsingService } from '../services/common/common.parsing.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-chart-table-loader',
  templateUrl: './chart-table-loader.component.html',
  styleUrls: ['./chart-table-loader.component.css']
})
export class ChartTableLoaderComponent implements OnInit {
  @Input() report :any;
  @Input() request :any;
  @Input() index:any;
  httpReq:any;
  counterListForReport=[];
  constructor(private router: Router, private route: ActivatedRoute,private commonParsingService:CommonParsingService,private reportService: GetreportService) { }



  ngOnChanges(changes: { [propKey: string]: SimpleChange}) {
    
  
  }

   ngOnInit(){
    this.httpReq = this.request;
    this.getUserReport(this.httpReq);   

  }

  getSpecificReport(report)
  { 
    if(null != report)
    {
      this.router.navigate(['/dashboard/' + report.userTemplateId + '/dashboardRep'+this.httpReq.dashboardId]);
    }

  }
  
  getUserReport(request){
    request.showSpinner = false;
      this.reportService.getUserReport(request).subscribe((reportData)=>{
       let report = { response: {}, name: "" ,userTemplateId: "" };
               // let view = data["view"];
               report.userTemplateId=reportData.userTemplateId;
               let view = "both";
                if (view == "both" || view == "table") {
                  report["tableResponse"] = this.commonParsingService.parseRestTableResponse(reportData);
                }
                if (view == "both" || view == "graph") {
                  report.response["type"] = reportData.reportConfiguration.configuration.subType;
                  report.response["graph"] = reportData;
                }
                report["name"] = reportData.reportConfiguration.configuration.name;
                this.report = report;

      this.counterListForReport=this.commonParsingService.getcounterListForReport(reportData);

    })
  }

}
