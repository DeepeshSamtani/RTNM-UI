import { Component, OnInit } from '@angular/core';
declare var require, $: any;
const Highstock = require('highcharts/highstock.src');
const Highcharts = require('highcharts/highcharts.src');
require('highcharts/modules/exporting.js')(Highcharts);
require('highcharts/modules/offline-exporting.js')(Highcharts);
require('highcharts/modules/boost.js')(Highcharts);
@Component({
  selector: 'app-realtime-monitoring',
  templateUrl: './realtime-monitoring.component.html',
  styleUrls: ['./realtime-monitoring.component.css']
})
export class RealtimeMonitoringComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    

    Highcharts.setOptions({
      global: {
          useUTC: false
      }
  });
  
  Highcharts.chart('container', {
      chart: {
          type: 'spline',
          animation: Highcharts.svg, // don't animate in old IE
          marginRight: 10,
          events: {
              load: function () {
  
                  // set up the updating of the chart each second
                  var series = this.series[0];
                  setInterval(function () {
                      var x = (new Date()).getTime(), // current time
                          y = Math.random()*100;
                      series.addPoint([x, y], true, true);
                  }, 1000);
              }
          }
      },
      title: {
          text: 'Dynamic graph for CPU Utilization'
      },
      xAxis: {
          type: 'datetime',
          tickPixelInterval: 150
      },
      yAxis: {
          title: {
              text: 'Utilisation'
          },max: 100,
          plotLines: [{
              value: 0,
              width: 1,
              color: '#808080'
          }]
      },
      tooltip: {
          formatter: function () {
              return '<b>' + this.series.name + '</b><br/>' +
                  Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) + '<br/>' +
                  Highcharts.numberFormat(this.y, 2);
          }
      },
      legend: {
          enabled: false
      },
      exporting: {
          enabled: false
      },
      series: [{
          name: 'CPU Utization',
          data: (function () {
              // generate an array of random data
              var data = [],
                  time = (new Date()).getTime(),
                  i;
  
              for (i = -19; i <= 0; i += 1) {
                  data.push({
                      x: time + i * 1000,
                      y: Math.random() * 100
                  });
              }
              return data;
          }())
      }]
  });

  }

}
