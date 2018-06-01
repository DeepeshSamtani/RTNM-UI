import { Component, OnInit, ViewChild } from '@angular/core';
import { AlarmMonitoringService } from '../services/http/alarm-monitoring/alarm-monitoring.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { DataSource } from '@angular/cdk/collections';
import { User } from '../models/User';
import { MatPaginator, MatTableDataSource, MatDialog ,MatCardModule} from '@angular/material'
import { CHARACTERS } from '../services/http/alarm-monitoring/mock';


@Component({
  selector: 'app-alarm-monitoring',
  templateUrl: './alarm-monitoring.component.html',
  styleUrls: ['./alarm-monitoring.component.css']
})
export class AlarmMonitoringComponent implements OnInit {
  highlightedRows = [];
  dataSource = new UserDataSource(this.amService);
  displayedColumns = ['severity','owner','acknowledged','className','ticketNumber','eventName','source','propertyName','occurrence','firstNotify','lastNotify'];

  constructor(private amService: AlarmMonitoringService, public dialog: MatDialog) { }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    // this.dataSource.paginator = this.paginator;
  }

  openDialog(row): void {
    console.log("Clicked Row " + row);
    let dialogRef = this.dialog.open(YourDialog, {
      height: '700px',
      width: '600px',
      data: { severity: row.severity, owner:row.owner,acknowledged:row.acknowledged,className:row.className,ticketNumber:row.ticketNumber,eventName:row.eventName,source:row.source,propertyName:row.propertyName,occurrence:row.occurrence,firstNotify:row.firstNotify,lastNotify:row.lastNotify},
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}

//****************************Fetching data from Model*****************************
export class UserDataSource extends DataSource<any> {
  constructor(private amService: AlarmMonitoringService) {
    super();
  }
  connect(): Observable<User[]> {
    return this.amService.getUser();
  }
  disconnect() { }
}
// ********************************Dialog Component********************************
import  { Inject, Input }  from  '@angular/core';
import  { MAT_DIALOG_DATA, MatDialogRef }  from  '@angular/material';

@Component({
  selector:  'your-dialog',
  template:  'Edit Thresold',
  templateUrl:  'YourDialog.html',
  styleUrls: ['./alarm-monitoring.component.css']

})
export  class  YourDialog  {
  constructor(
    public dialogRef: MatDialogRef<YourDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialog: MatDialog) { }

  onCancelClick(): void {
    this.dialogRef.close();
  }

  onRegisterClick(): void {
    this.dialogRef.close();
    this.dialog.open(TicketRefDialog, {
      width: '350px'
    })
  }
}
// ********************************Alert Component********************************
@Component({
  selector:  'your-dialog',
  template:  'Edit Thresold',
  templateUrl:  'TicketRefDialog.html',

})
export  class  TicketRefDialog  {
  constructor(
    public dialogRef: MatDialogRef<YourDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialog: MatDialog) { }

  onOkClick(): void {
    this.dialogRef.close();
  }


} 