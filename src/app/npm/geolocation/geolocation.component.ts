import { Component, OnInit } from '@angular/core';
declare var google:any;
@Component({
  selector: 'app-geolocation',
  templateUrl: './geolocation.component.html',
  styleUrls: ['./geolocation.component.css']
})
export class GeolocationComponent implements OnInit {
 //  markers :any =[];
  constructor() { }

  ngOnInit() {

    this.initMap();


}
 initMap() {


//Request to backend 

// var request={};
//  this.loginService.login(request).subscribe((data)=>{

// });

 
  var data = [{"position":{lat: 37.53, lng: 127.02},
"ragvalue":1,"title":"Korea","DeviceName":"MME001MFD","MetricName":"S1 Setup Req","MetricValue":"60","contentString":"Metric"},
{"position":{lat: 20.59, lng: 78.96},
"ragvalue":2,"title":"India","DeviceName":"MME001LDS","MetricName":"S1 Setup Req","MetricValue":"70","contentString":"Metric"},
{"position":{lat: -25.363, lng: 131.044},
"ragvalue":3,"title":"Australia","DeviceName":"MME001LTN","MetricName":"S1 Setup Req","MetricValue":"80","contentString":"Metric"},
{"position":{lat:51.50, lng: 0.12},
"ragvalue":4,"title":"London","DeviceName":"MME001MFD","MetricName":"S1 Setup Req","MetricValue":"90","contentString":"Metric"}];
var map = new google.maps.Map(document.getElementById('map'), {
  zoom: 2,
  center: data[0].position
});


for(let i=0;i<data.length;i++){
  
  var infowindow = new google.maps.InfoWindow({
    content: data[i].contentString
  });

  if(data[i].ragvalue==1){
    //console.log("variable-----"+this["marker"+i]);
       var marker1 = new google.maps.Marker({
      position: data[i].position,
      icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png',
      map: map,
      title:data[i].title+"\n DeviceName : "+data[i].DeviceName+"\n MetricName : "+data[i].MetricName+"\n MetricValue : "+data[i].MetricValue
    });
    /* marker1.addListener('hover', function() {
      infowindow.open(map, marker1);
    }); */
  
  }
  else if( data[i].ragvalue==2){
    var marker2 = new google.maps.Marker({
      position: data[i].position,
      icon: 'http://maps.google.com/mapfiles/ms/icons/yellow-dot.png',
      map: map,
      title:data[i].title+"\n DeviceName : "+data[i].DeviceName+"\n MetricName : "+data[i].MetricName+"\n MetricValue : "+data[i].MetricValue
    });
    /* marker2.addListener('click', function() {
      infowindow.open(map, marker2);
    }); */
  }else {
    var marker3 = new google.maps.Marker({
      position: data[i].position,
  map: map,
  title:data[i].title+"\n DeviceName : "+data[i].DeviceName+"\n MetricName : "+data[i].MetricName+"\n MetricValue : "+data[i].MetricValue
    });
    /* marker3.addListener('click', function() {
      infowindow.open(map, marker3);
    }); */
  }

 
}


}
}