import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-kpi-delete-dialog',
  templateUrl: './kpi-delete-dialog.component.html',
  styleUrls: ['./kpi-delete-dialog.component.css']
})
export class KpiDeleteDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    console.log('Dialog data : ' + JSON.stringify(data));
   }

  ngOnInit() {
  }

  

}
