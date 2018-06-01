import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
ngOnInit(){
  if(window["npm"]){
  console.log(window["npm"]["SM_USER"]);
  console.log(window["npm"]["groupName"]);
  }
}
}
