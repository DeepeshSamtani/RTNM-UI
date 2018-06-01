import { Component, OnInit } from '@angular/core';
import { IwanreportService } from '../services/http/iwanreport/iwanreport.service';
import { version } from 'punycode';
import { CommonHighchartsOptionsService } from '../services/common/common.highcharts.options.service';
declare var require, $: any;
const Highstock = require('highcharts/highstock.src');
const Highcharts = require('highcharts/highcharts.src');
require('highcharts/modules/exporting.js')(Highcharts);
require('highcharts/modules/offline-exporting.js')(Highcharts);
require('highcharts/modules/boost.js')(Highcharts);
@Component({
  selector: 'app-iwanreports',
  templateUrl: './iwanreports.component.html',
  styleUrls: ['./iwanreports.component.css']
})
export class IwanreportsComponent implements OnInit {
  data=[];
  seriesData:any = {};
  destinationSeriesData:any={}
  destinationBarseriesData:any={}
  sourceBarseriesData:any={}
  outerArray=[];
  constructor(private iwanReportService: IwanreportService,private commonHighchartsOptionsService : CommonHighchartsOptionsService) { 
    
  
    //console.log("constructor"+this.seriesData)
  }

  ngOnInit() {
    this.seriesData=this.getAreaSeriesData()
    this.destinationSeriesData=this.getAreaDestinationSeriesData()
    
    this.destinationBarseriesData=this.getBarDestinationSeriesData()
    this.sourceBarseriesData=this.getBarSourceSeriesData()
    //console.log("getIWANReportData"+this.seriesData);

    //this.plotAreachart();

  }
 
    
  

// getSeriesData()
// {
//     let request: any = {
//         counter: "hii"
//       };
      
//     this.iwanReportService.getIWANReport(request).subscribe((data)=>{
//         console.log("Data from rest:"+JSON.stringify(data));
//         //console.log("Data from rest:"+this.version);
//        // let isFirst=true;
//         data.forEach(element => {
           
//             //let jsonelement=JSON.parse(element);
//             console.log("jsonelement"+element)
//             console.log("jsonelement"+element.event)
//             let eventData=JSON.parse(JSON.stringify(element.event))
//             let IPADDRESS=eventData.IPV4_DST_ADDR
//             let total_in_pkts=eventData.total_in_pkts
            
//             let temparry=[]
//             temparry.push("["+IPADDRESS)
//             temparry.push(total_in_pkts+"]")
//             this.outerArray.push(temparry)
//             //this.seriesData.map(IPADDRESS,total_in_pkts)
//             //console.log("IPADDRESS"+jsonelement.event.IPV4_DST_ADDR)
//             //console.log("this.seriesData"+this.outerArray)
//             //isFirst=false;
            
              
//         }
        
//     );
       
//     }); 
//     return this.outerArray;
// }


plotBarchartDest()
{
    this.destinationBarseriesData.data.forEach(element => {
        element[1]=parseInt(element[1]);
        //console.log("plotBarchartDest123"+element[1]);
    });
    let chartbar = Highcharts.chart('container_Dest_bar', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Destination Utilisation'
        },
      
        xAxis: {
            type: 'category',
            labels: {
                rotation: -45,
                style: {
                    fontSize: '13px',
                    fontFamily: 'Verdana, sans-serif'
                }
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Packets'
            }
        },
        legend: {
            enabled: true
        },
        tooltip: {
            pointFormat: 'Packets'
        },
        series: [{
            name: 'Packets',
            data: this.destinationBarseriesData.data,
            dataLabels: {   
                enabled: false,
                rotation: -90,
                color: '#FFFFFF',
                align: 'right',
                format: '{point.y:.1f}', // one decimal
                y: 10, // 10 pixels down from the top
                style: {
                    fontSize: '13px',
                    fontFamily: 'Verdana, sans-serif'
                }
            }
        }]
    });
  
    

    
    
    

}
plotAreachart()
{
   
    console.log("plot Area"+ JSON.stringify(this.seriesData.data));
    this.seriesData.data.forEach(element => {
        element["y"]=parseInt(element["y"]);
        //console.log("0-------"+element["y"]);
    });
    Highcharts.chart('container_src_area', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Source Utilization Distribution(%)'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    }
                }
            }
        },
        series: [{
            name: 'packet utilisation',
            colorByPoint: true,

             data: this.seriesData.data
         }]
    });

    
}

getAreaSeriesData()
{
    let data123=[]
    let request: any = {
        counter: "hii"
      };
      
    return this.iwanReportService.getIWANAreaReport(request).subscribe((data)=>{
       this.seriesData=data;
      
       //console.log("Data from resthdjshf:"+JSON.stringify(data));
       this.plotAreachart();
      
    });
    
}

getAreaDestinationSeriesData()
{
    let data123=[]
    let request: any = {
        counter: "hii"
      };
      
    return this.iwanReportService.getIWANAreaDestinationReport(request).subscribe((data)=>{
       this.destinationSeriesData=data;
      
       //console.log("Data from getAreaDestinationSeriesData:"+JSON.stringify(data));
       this.plotAreachartfordes();
      
    });
    
}


getBarDestinationSeriesData()
{
    let data123=[]
    let request: any = {
        counter: "hii"
      };
      
    return this.iwanReportService.getIWANBarDestinationReport(request).subscribe((data)=>{
       this.destinationBarseriesData=data;
      
       //console.log("Data from rest for getBarDestinationSeriesData:"+JSON.stringify(data));
       this.plotBarchartDest();
      
    });
    
}
getBarSourceSeriesData()
{
    let data123=[]
    let request: any = {
        counter: "hii"
      };
      
    return this.iwanReportService.getIWANBarSourceReport(request).subscribe((data)=>{
       this.sourceBarseriesData=data;
      
      // console.log("Data from getBarSourceSeriesData:"+JSON.stringify(data));
       this.plotBarSourceChart();
      
    });
    
}
plotBarSourceChart()
{
    //container_src_bar
    
    this.sourceBarseriesData.data.forEach(element => {
        element[1]=parseInt(element[1]);
        console.log("plotBarchartDest123------------------"+element[1]);
    });
    console.log("data-----------------"+this.sourceBarseriesData.data);
    let chart = Highcharts.chart('container_src_bar', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Source utilisation'
        },
      
        xAxis: {
            type: 'category',
            labels: {
                rotation: -45,
                style: {
                    fontSize: '13px',
                    fontFamily: 'Verdana, sans-serif'
                }
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Packets'
            }
        },
        legend: {
            enabled: true
        },
        tooltip: {
            pointFormat: 'Packets'
        },
        series: [{
            name: 'Packets',
            data:this.sourceBarseriesData.data,
            dataLabels: {
                enabled: false,
                rotation: -90,
                color: '#FFFFFF',
                align: 'right',
                format: '{point.y:.1f}', // one decimal
                y: 10, // 10 pixels down from the top
                style: {
                    fontSize: '13px',
                    fontFamily: 'Verdana, sans-serif'
                }
            }
        }]
    });

}


plotAreachartfordes()
{
    console.log("plot plotAreachartfordes"+ JSON.stringify(this.destinationSeriesData.data));
    this.destinationSeriesData.data.forEach(element => {
        element["y"]=parseInt(element["y"]);
      //  console.log("0-------"+element["y"]);
    });
    Highcharts.chart('container_dest_area', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Destination Utilization Distribution(%)'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    }
                }
            }
        },
        series: [{
            name: 'packet utilisation',
            colorByPoint: true,

             data: this.destinationSeriesData.data
         }]
    });
}

}
