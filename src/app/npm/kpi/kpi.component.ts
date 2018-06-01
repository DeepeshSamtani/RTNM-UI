import { Component, OnInit, ViewChild, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { MatDialog, MatSnackBar, MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { KpiDeleteDialogComponent } from '../kpi-delete-dialog/kpi-delete-dialog.component';
import { KpiCounterDisableComponent } from '../kpi-counter-disable/kpi-counter-disable.component';
import { GetreportService } from '../services/http/report/getreport.service';
import { KpiService } from '../services/http/kpi/kpi.service';

declare var $: any;

@Component({
  selector: 'app-kpi',
  templateUrl: './kpi.component.html',
  styleUrls: ['./kpi.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class KpiComponent implements OnInit, AfterViewInit {

  breadcrumb = { mainlink: "KPI", sublinks: [{ displayName: 'KPI Properties' }] };

  aggregationTypes: string[] = ['SUM', 'AVG', 'MIN', 'MAX'];
  units: string[] = ['Number', 'Count','Percentage(%)'];
  kpiListColumns: string[] = ['KPI name', 'Aggregation type', 'Unit', 'Formula', 'Description', 'Actions'];
  numKeys: string[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
  operatorKeys: string[] = ['+', '-', '*', '/'];
  deviceTypes: string[] = [];
  selectedDeviceType: string;
  selectedCounterGroupId: string;
  counterGroupList: any[];
  counters: any[];
  selectedCounters: any[] = [];
  formulaTokens: string[] = [];
  kpiListDataSource: any;
  saveButtonName: string = "Save";
  selectedTab: number;
  searchTextCG: string = '';
  SearchTextCounters: string = '';

  KPI_DATA: KPI[] = [];
  kpiPropertiesForm: FormGroup;
  isEditMode: boolean = false;
  isCGLoading: boolean = false;
  isCounterLoading: boolean = false;
  isOperatorMode: boolean = false;
  isNumMode: boolean = false;
  editModeCounterId: string = '';
  isListLoading: boolean = false;
  isLoading: boolean = false;
  isLastTokenOperator: boolean = false;
  isNoKPIRecords: boolean = false;

  // @ViewChild(MatPaginator) paginator: MatPaginator;
  // @ViewChild(MatSort) sort: MatSort;

  constructor(public deleteDialog: MatDialog, public counterDisableDialog: MatDialog, private fb: FormBuilder, private getreportService: GetreportService, private kpiService: KpiService, public snackBar: MatSnackBar) { }

  openDeleteDialog(data): void {
    let dialogRef = this.deleteDialog.open(KpiDeleteDialogComponent, {
      width: '300px',
      disableClose: true,
      data: data
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        let request: any = {
          counter: {},
          counterId: data.actions.counterId,
          counterGroupId: data.actions.counterGroupId
        };
        request.counter.enabled = "0";
        request.counter.displayName=data.name;
        console.log("Display Name while deleting..."+request.displayName);
        this.isListLoading = true;

        this.kpiService.updateKPI(request).subscribe(data => {
          this.loadKPIList();
          let snackBarRef = this.snackBar.open('KPI Deleted successfully !', '', {
            duration: 3000,
            horizontalPosition: 'right',
            verticalPosition: 'top'
          });
        });
        console.log('Delete request : ' + JSON.stringify(request));
      } else {
        console.log('No delete needed ! User said No!');
      }
    });
  }

  openCounterDisableDialog(counter: any): void {
    let dialogRef = this.deleteDialog.open(KpiCounterDisableComponent, {
      width: '500px',
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        counter.checked = false;
        this.formulaTokens = [];
        this.isOperatorMode = false;
        this.selectedCounters.forEach((element, index) => {
          if (element.displayName === counter.displayName) {
            this.selectedCounters.splice(index, 1);
          }
        });
      } else {
        counter.checked = true;
      }
    });
  }

  createKPIPropertiesForm(obj: any) {
    if (this.isEditMode) {
      console.log('Inside EditMode create Form');
      console.log('Obj : ' + JSON.stringify(obj));
      this.kpiPropertiesForm.reset({
        name: obj.name,
        aggregationType: obj.aggregationType,
        unit: obj.unit,
        description: obj.description
      });
    } else {
      this.kpiPropertiesForm = this.fb.group({
        name: [obj.name, Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z0-9\\s]*$')])],
        aggregationType: [obj.aggregationType, Validators.required],
        unit: [obj.unit, Validators.required],
        description: [obj.description, Validators.required]
      });
    }
  }

  loadKPIList() {
    let request = { "deviceType": "ALL" };
    this.isListLoading = true;
    /*let data = [
      {
        "logicalName": "Dynamic KPi",
        "counter": {
          "displayName": "Dynamic KPi",
          "unit": "Number",
          "description": "Dynamic KPi from Gui",
          "type": "DKPI",
          "isActive": "1",
          "sourceName": "",
          "formula": "AMAT7_C_1+AMAT7_C_2"
        },
        "deviceType": "AMAT7",
        "counterId": "AMAT7_C_3",
        "aggregationType": "SUM",
        "counterGroupId": "AMAT7_CG_1",
        "mapCounterIdNames": {
          "AMAT7_C_1": "MSU_CNT",
          "AMAT7_C_2": "OCTET_CNT"
        }
      },
      {
        "logicalName": "one more KPI",
        "counter": {
          "displayName": "one more KPI",
          "unit": "number",
          "description": "one more dynamic kpi added",
          "type": "DKPI",
          "isActive": "1",
          "sourceName": "one more KPI",
          "formula": "AMAT7_C_1+AMAT7_C_2"
        },
        "deviceType": "AMAT7",
        "counterId": "AMAT7_C_4",
        "aggregationType": "SUM",
        "counterGroupId": "AMAT7_CG_1",
        "mapCounterIdNames": {
          "AMAT7_C_1": "MSU_CNT",
          "AMAT7_C_2": "OCTET_CNT"
        }
      }
    ];*/

    this.isNoKPIRecords = false;
    this.kpiService.getKPIs(request).subscribe((data) => {
      if (data) {
        this.KPI_DATA = [];
        console.log('KPILIST data : ' + JSON.stringify(data));
        data.forEach(element => {
          let temp = {
            name: element.counter.displayName,
            aggregationType: element.aggregationType,
            unit: element.counter.counterUnit,
            formula: element.counter.formula,
            formulaInDisplayName: '',
            description: element.counter.counterDescription,
            actions: element
          };

          let str = element.counter.formula;
          for (let property in element.mapCounterIdNames) {
            str = str.replace(new RegExp(property, 'g'), element.mapCounterIdNames[property]);
          }

          console.log('Formula in DisplayName : ' + JSON.stringify(str));
          temp.formulaInDisplayName = str;
          this.KPI_DATA.push(temp);
        });

        if (this.KPI_DATA.length == 0) {
          this.isNoKPIRecords = true;
        }
        this.kpiListDataSource = new MatTableDataSource<KPI>(this.KPI_DATA);
        // this.kpiListDataSource.paginator = this.paginator;
        // this.kpiListDataSource.sort = this.sort;

        this.isListLoading = false;
      }
    }, (err) => {
      if (err._body == "[]") {
        this.isListLoading = false;
        this.isNoKPIRecords = true;
      }
      console.log(err);
    });
  }

  nextTab(index: number) {
    if (index == 2) {
      this.loadKPIList();
      this.breadcrumb = { mainlink: "KPI", sublinks: [{ displayName: 'KPI List' }] };
    } else if (index == 0) {
      this.breadcrumb = { mainlink: "KPI", sublinks: [{ displayName: 'KPI Properties' }] };
    } else if (index == 1) {
      this.breadcrumb = { mainlink: "KPI", sublinks: [{ displayName: 'KPI Configuration' }] };
    }
    this.selectedTab = index;
  }

  ngOnInit() {
    this.loadKPIList();
    this.makePristine();
  }

  selectCounter(e: any, counter: any) {
    counter.checked = e.checked;
    if (e.checked) {
      this.selectedCounters.push(counter);
    } else {
      if (this.formulaTokens.includes(counter.displayName)) {
        this.openCounterDisableDialog(counter);
        return;
      }
      this.selectedCounters.forEach((element, index) => {
        if (element.displayName === counter.displayName) {
          this.selectedCounters.splice(index, 1);
        }
      });
    }
  }

  getCounterGroups(device: string) {
    this.counters = [];
    this.selectedCounters = [];
    this.formulaTokens = [];
    this.selectedDeviceType = device;
    let req: any = {
      deviceType: this.selectedDeviceType
    };
    this.isCGLoading = true;
    this.getreportService.getCounterGroups(req).subscribe(groups => {
      this.counterGroupList = groups;
      if (this.isEditMode) {
        let temp: any;
        this.counterGroupList.forEach(element => {
          if (element.counterGroupId === this.selectedCounterGroupId) {
            temp = element;
          }
        });
        this.counterGroupList = [];
        this.counterGroupList.push(temp);
      }
      this.isCGLoading = false;
    });
  }

  getCounters(groupId: string, counterDisplayNameMap?: any) {
    if (this.isEditMode && this.counters && this.counters.length != 0) {
      return;
    }
    this.selectedCounters = [];
    this.formulaTokens = [];
    this.counters = [];
    this.selectedCounterGroupId = groupId;
    let request: any = {
      counterGroups: [
        {
          counterGroupId: groupId
        }
      ]
    };
    this.isCounterLoading = true;
    this.getreportService.getCounterIDs(request).subscribe(data => {
      this.counters = data[0].counterList;
      if (this.isEditMode) {
        this.selectedCounters = [];
        for (let property in counterDisplayNameMap) {
          this.counters.forEach(e => {
            if (e.displayName === counterDisplayNameMap[property]) {
              e.checked = true;
              this.selectedCounters.push(e);
            }
          });
        }
      } else {
        this.counters.forEach(element => {
          element.checked = false;
        });
      }
      this.isCounterLoading = false;
    });
  }

  ngAfterViewInit() { }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.kpiListDataSource.filter = filterValue;
  }

  addTokenToFormula(token: string) {
    if (token === '(') {
      this.isOperatorMode = false;
      this.isNumMode = true;
      this.formulaTokens.push(token);
      return;
    }

    if (token === ')') {
      this.isOperatorMode = true;
      this.isNumMode = false;
      this.formulaTokens.push(token);
      return;
    }

    if (['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'].includes(token)) {
      this.isLastTokenOperator = false;
      if (this.formulaTokens.length == 0) {
        this.formulaTokens.push(token);
        this.isOperatorMode = true;
        this.isNumMode = true;
        return;
      }
      let temp = this.formulaTokens[this.formulaTokens.length - 1];
      this.isOperatorMode = true;
      this.isNumMode = true;
      if (['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'].includes(temp.charAt(temp.length - 1))) {
        temp += token;
        this.formulaTokens[this.formulaTokens.length - 1] = temp;
      } else {
        this.formulaTokens.push(token);
      }
    } else {
      this.formulaTokens.push(token);
      if (['+', '-', '*', '/'].includes(token)) {
        this.isLastTokenOperator = true;
        this.isOperatorMode = false;
        this.isNumMode = true;
      } else {
        this.isLastTokenOperator = false;
        this.isNumMode = false;
        this.isOperatorMode = true;
      }
    }
  }

  popFormulaTokens() {
    let temp = this.formulaTokens.pop();
    if (this.operatorKeys.includes(temp)) {
      console.log('Removing : ' + temp);
      this.isOperatorMode = true;
    }

    if (this.operatorKeys.includes(this.formulaTokens[this.formulaTokens.length - 1])) {
      this.isOperatorMode = false;
      this.isNumMode = true;
    }

    if (this.formulaTokens.length === 0) {
      this.isOperatorMode = false;
      this.isNumMode = false;
    }
  }

  clearAllFormulaTokens() {
    this.formulaTokens = [];
    this.isOperatorMode = false;
  }

  saveKPI() {
    if (this.kpiPropertiesForm.valid && this.formulaTokens.length != 0) {
      if (!this.isEditMode) {
        let request: any = {
          deviceType: this.selectedDeviceType,
          aggregationType: this.kpiPropertiesForm.get("aggregationType").value,
          counterGroupId: this.selectedCounterGroupId,
          counter: {
            formula: "",
            displayName: this.kpiPropertiesForm.get("name").value,
            sourceName: "",
            enabled: "1",
            counterUnit: this.kpiPropertiesForm.get("unit").value,
            counterDescription: this.kpiPropertiesForm.get("description").value
          }
        };

        this.formulaTokens.forEach(element => {
          let temp = element;
          for (let i = 0; i < this.selectedCounters.length; i++) {
            if (this.selectedCounters[i].displayName === temp) {
              temp = this.selectedCounters[i].counterKey.counterId;
              break;
            }
          }
          request.counter.formula += temp;
        });

        this.isLoading = true;
        this.kpiService.createKPI(request).subscribe(data => {
          console.log('Create KPI: res data : ' + JSON.stringify(data));
          if (data._body === 'Duplicate Name Found') {
            console.log('Duplicate name found');
            let snackBarRef = this.snackBar.open('KPI name already exists !', '', {
              duration: 3000,
              horizontalPosition: 'right',
              verticalPosition: 'top'
            });
            this.isLoading = false;
            this.kpiPropertiesForm.reset({
              name: request.counter.displayName,
              aggregationType: request.aggregationType,
              unit: request.counter.counterUnit,
              description: request.counter.counterDescription
            });
            return;
          } else {
            this.makePristine();
            this.nextTab(2);
            this.loadKPIList();
            let snackBarRef = this.snackBar.open('KPI Saved successfully !', '', {
              duration: 3000,
              horizontalPosition: 'right',
              verticalPosition: 'top'
            });
            this.isLoading = false;
            console.log('Create request : ' + JSON.stringify(request));
          }
        }, (err) => {
          console.log(err);
        });

      } else {
        this.saveButtonName = 'Save';
        let request: any = {
          logicalName: this.kpiPropertiesForm.get("name").value,
          counter: {
            displayName: this.kpiPropertiesForm.get("name").value,
            counterUnit: this.kpiPropertiesForm.get("unit").value,
            counterDescription: this.kpiPropertiesForm.get("description").value,
            counterType: "DKPI",
            enabled: '1',
            sourceName: "",
            formula: ""
          },
          deviceType: this.selectedDeviceType,
          counterId: this.editModeCounterId,
          aggregationType: this.kpiPropertiesForm.get("aggregationType").value,
          counterGroupId: this.selectedCounterGroupId
        };

        this.formulaTokens.forEach(element => {
          let temp = element;
          for (let i = 0; i < this.selectedCounters.length; i++) {
            if (this.selectedCounters[i].displayName === temp) {
              temp = this.selectedCounters[i].counterKey.counterId;
              break;
            }
          }
          request.counter.formula += temp;
        });

        this.isLoading = true;
        this.kpiService.updateKPI(request).subscribe(data => {
          console.log('Update KPI: res data : ' + JSON.stringify(data));
          if (data._body === 'Duplicate Name Found') {
            console.log('Duplicate name found');
            let snackBarRef = this.snackBar.open('KPI name already exists !', '', {
              duration: 3000,
              horizontalPosition: 'right',
              verticalPosition: 'top'
            });
            this.isLoading = false;
            return;
          }
          console.log('Update request : ' + JSON.stringify(request));
          this.isEditMode = false;
          this.makePristine();
          this.nextTab(2);
          this.loadKPIList();
          let snackBarRef = this.snackBar.open('KPI Saved successfully !', '', {
            duration: 3000,
            horizontalPosition: 'right',
            verticalPosition: 'top'
          });
          this.isLoading = false;
        }, (err) => {
          console.log(err);
        });

      }
    }
  }

  editKPI(kpi: any) {
    console.log('Edit Mode - KPI : ' + JSON.stringify(kpi));
    this.isEditMode = true;
    this.selectedTab = 0;
    this.saveButtonName = 'Save';
    let request: any = {
      counterId: kpi.actions.counterId,
      counterGroupId: kpi.actions.counterGroupId,
      displayName:kpi.name
    };

    console.log('Edit KPI- request : ' + JSON.stringify(request));

    this.isLoading = true;
    this.selectedTab = 0;

    /*let data: any = {
      "logicalName": "Dynamic KPi",
      "aggregationID": 4,
      "counter": {
        "counterKey": {
          "counterId": "AMAT7_C_3"
        },
        "displayName": "Dynamic KPi",
        "unit": "Number",
        "description": "Dynamic KPi from Gui",
        "type": "DKPI",
        "isActive": "1",
        "sourceName": "",
        "formula": "AMAT7_C_1+AMAT7_C_2"
      },
      "deviceType": "AMAT7",
      "aggregationType": "SUM",
      "counterGroupId": "AMAT7_CG_1",
      "mapCounterIdNames": {
        "AMAT7_C_1": "MSU_CNT",
        "AMAT7_C_2": "OCTET_CNT"
      }
    };*/

    // this.kpiService.getKPIByCounterID(request).subscribe((data) => {
    this.editModeCounterId = kpi.actions.counter.counterKey.counterId;
    let temp = {
      name: kpi.actions.counter.displayName,
      aggregationType: kpi.actions.aggregationType,
      unit: kpi.actions.counter.counterUnit,
      description: kpi.actions.counter.counterDescription
    };

    console.log('Edit KPI Form data : ' + JSON.stringify(temp));

    this.selectedCounterGroupId = kpi.actions.counterGroupId;
    this.getCounterGroups(kpi.actions.deviceType);
    this.counters = [];
    this.getCounters(this.selectedCounterGroupId, kpi.actions.mapCounterIdNames);
    let fm: string = kpi.actions.counter.formula;
    this.formulaTokens = [];

    let token: string = '';
    for (let i = 0; i < fm.length; i++) {
      if (['+', '-', '*', '/', '(', ')'].includes(fm.charAt(i))) {
        this.formulaTokens.push(token);
        this.formulaTokens.push(fm.charAt(i));
        token = '';
      } else {
        token += fm.charAt(i);
      }
    }
    this.formulaTokens.push(token);

    for (let property in kpi.actions.mapCounterIdNames) {
      this.formulaTokens.forEach((element, index) => {
        if (element === property) {
          this.formulaTokens[index] = kpi.actions.mapCounterIdNames[property];
        }
      });
    }

    this.isOperatorMode = true;
    this.createKPIPropertiesForm(temp);
    this.isLoading = false;
    // });

    console.log('counters : ' + JSON.stringify(this.counters));
    console.log('selected counters : ' + JSON.stringify(this.selectedCounters));

  }

  cancelEditMode() {
    this.isEditMode = false;
    this.makePristine();
  }

  makePristine() {
    this.saveButtonName = 'Save';
    this.selectedTab = null;
    this.searchTextCG = '';
    this.SearchTextCounters = '';
    this.isOperatorMode = false;
    this.createKPIPropertiesForm({
      name: '',
      aggregationType: 'SUM',
      unit: 'Number',
      description: ''
    });

    // get Device types
    let request: any = {
      "profile": {
        "profileName": ""
      }
    };
    this.getreportService.getDevices(request).subscribe(data => {
      if (data) {
        this.deviceTypes = data;
        if (this.deviceTypes.length > 0) {
          this.selectedDeviceType = this.deviceTypes[0];
          this.getCounterGroups(this.deviceTypes[0]);
        }
      }
    });

    this.counters = [];
    this.selectedCounters = [];
    this.formulaTokens = [];
    this.selectedCounterGroupId = '';
  }

  clearAllCounters() {
    if (this.selectedCounters.length > 0) {
      this.formulaTokens = [];
      this.selectedCounters = [];
      this.isOperatorMode = false;
      this.counters.forEach(element => {
        element.checked = false;
      });
    }
  }

}

export interface KPI {
  name: string;
  aggregationType: string;
  unit: string;
  formula: string;
  description: string;
  actions: any;
}
