
import { Injectable, Inject } from '@angular/core';
@Injectable()
export class CommonHighchartsOptionsService {
    

    pieOptions(){
   let opts =     {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
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
               
            }
        }
    },
    series: [{
        name: 'Brands',
        colorByPoint: true,
        data: [{
            name: 'IE',
            y: 56.33
        }, {
            name: 'Chrome',
            y: 24.03,
            sliced: true,
            selected: true
        }, {
            name: 'Firefox',
            y: 10.38
        }, {
            name: 'Safari',
            y: 4.77
        }, {
            name: 'Opera',
            y: 0.91
        }, {
            name: 'Other',
            y: 0.2
        }]
    }]
}
    }

    columnOptions(){

        let options = {
            chart: {
                type: 'column',
                events: {
                    addSeries : function(){

                    }
                }

            }
            // ,
            // title: {
            //     text: ' Date time series'
            // }
            ,
            xAxis: {
                type: "datetime"
            },
            yAxis: {
                min: 0,
                labels: {
                    overflow: 'justify'
                }
            },

            plotOptions: {
                column: {
                    stacking: 'normal',
                     dataGrouping :{
                        enabled:false
                    }
                },
                   
            },
            colors: ['#8085e9','#f15c80', '#2b908f','#e7ba08', '#90ed7d','#FFF263', '#6AF9C4','#058DC7', '#DDDF00', 
             '#FF9655'],
            legend: { align:'left',
                 enabled: true,
                layout: 'horizontal',
             maxHeight: 80,
             margin:10
            },
            credits: {
                enabled: false
            },
            navigator:{
                height:25,
                margin:15,
                enabled: true
            },
            tooltip:{
                shared:true
            },
            lang: {noData: "No data available"},
            exporting:{
                libURL : "/assets/js"
            },
            series: undefined,
            rangeSelector:{enabled:false}
        }



        return options;

    }


    areasplineOptions(){
       let opts={ 
    chart: {
        type: 'areaspline',
         events:{

    },xAxis: {
                type: "datetime"
            },
    },
    yAxis: {
                min: 3000,
                labels: {
                    overflow: 'justify'
                }
            },

    colors: ['#FFA07A','#058DC7','#8085e9','#f15c80', '#2b908f', '#FFF263', '#6AF9C4', '#DDDF00', 
             '#FF9655'],
    
    tooltip: {
        shared: true,
    },
    legend: { align:'left',
                 enabled: true,
                layout: 'horizontal',
             maxHeight: 80,
             margin:10
            },
    credits: {
        enabled: false
    },
    plotOptions: {
        areaspline: {
            fillOpacity: 0.5
        }
    },
    exporting:{
                libURL : "./assets/js"
            },
    rangeSelector:{enabled:false}
}

return opts;
    }

    splineOptions(){
        console.log("spline optionssss")
        let options = 
        {
            chart: {
                type: 'spline',
                events: {
                }
            },
            colors: [  "#FFA07A","#66CDAA","#9370DB","#87CEFA","#90EE90","#FF69B4","#1E90FF"],
            xAxis: {
                type: 'datetime',


            },
            yAxis: {
                min: 0
            }
            ,
            plotOptions: {
                spline: {
                    marker: {
                        enabled: true
                    },
                    dataGrouping :{
                        enabled:false
                    }
                }
            },credits: {
                enabled: false
            }, tooltip:{
                shared:true,
                crosshairs :true
            },legend: {
                align:'left',
                enabled: true,
                layout: 'horizontal',
             maxHeight: 80,
             margin:10,
             labelFormat:'{value:%Y-%m-%d}'
             
            },
            exporting:{
                libURL : "./assets/js"
            },
            series: undefined,
            rangeSelector:{enabled:true},
        }
   
        return options;
    }
     

     lineOptions(){

        let options = 
        {
            chart: {
                type: 'line',
                events: {
                }
            },
            colors: [  "#FFA07A","#66CDAA","#9370DB","#87CEFA","#90EE90","#FF69B4","#1E90FF"],
            xAxis: {
                type: 'datetime',


            },
            yAxis: {
                min: 0
            }
            ,
            plotOptions: {
                spline: {
                    marker: {
                        enabled: true
                    },
                    dataGrouping :{
                        enabled:false
                    }
                }
            },credits: {
                enabled: false
            }, tooltip:{
                shared:true,
                crosshairs :true
            },legend: {
                align:'left',
                enabled: true,
                layout: 'horizontal',
             maxHeight: 80,
             margin:10
             
            },
            exporting:{
                libURL : "./assets/js"
            },
            series: undefined,
            rangeSelector:{enabled:false}
        }
   
        return options;
    }
}