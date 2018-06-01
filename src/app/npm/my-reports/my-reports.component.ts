import { Component, OnInit } from '@angular/core';
import { DataLoadSpinner } from '../services/dataLoadSpinner.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SubdashboardsService } from '../services/http/subdashboards/subdashboards.service';
 import { LocalStorageService} from 'angular-2-local-storage';
import { GetreportService } from '../services/http/report/getreport.service';
import { MenuService } from '../services/menu/menu.service';
@Component({
  selector: 'app-my-reports',
  templateUrl: './my-reports.component.html',
  styleUrls: ['./my-reports.component.css']
})
export class MyReportsComponent implements OnInit {

  reports:Array<any>=[];
  deleteReportConf :any = { };
  deleteReportindex :any;
isLoading = true;
searchCG:any;
  constructor(private reportService:GetreportService,private router :Router,private localStorageService :LocalStorageService,public dataLoadSpinner: DataLoadSpinner,private menuService: MenuService) { }

  ngOnInit() {
this.isLoading = true;    
    let request = {userName:this.localStorageService.get('userName')};
     this.reportService.getMyReport(request).subscribe((data)=>{
      this.reports = data;
      this.isLoading = false;
     }, (err) => {
      console.log(err);
       this.isLoading = false;
      this.dataLoadSpinner.showErrorMessage("Data cannot be retrieved .Please try after sometime.")
    })
  }

   getSpecificReport(report,subDashboard)
  {  
     this.router.navigate(['/report/' + report.userTemplateId + '/userReport']);
  }

  setDeleteReport(report , deleteindex)
  {
    this.deleteReportConf = report;
    this.deleteReportindex = deleteindex;
  }

  deleteReport()
  {
    let request: any = {

      "userName": this.localStorageService.get('userName'),
      "isDashboardReport": false,
      "userTemplateId": this.deleteReportConf.userTemplateId

    }
    this.reportService.deleteReport(request).subscribe(data => {
     
      this.reports = this.reports.filter((report)=>{
        return report.userTemplateId != this.deleteReportConf.userTemplateId
      })
      this.dataLoadSpinner.showSuccessMessage("Report "+  this.deleteReportConf.reportName+" is deleted successfully.");
       let menu: any = this.localStorageService.get('menu');
      let reportId = data.userTemplateId;
      this.menuService.setMenu(this.deleteReportConf);
      this.menuService.setMenuSubject("Menu deleted");
      this.deleteReportConf = {};
    }, (err) => {
      console.log(err);
      this.dataLoadSpinner.showErrorMessage("Data cannot be updated .Please try after sometime.")
    });
  }
}
