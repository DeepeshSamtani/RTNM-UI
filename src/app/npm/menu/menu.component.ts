import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MenuService } from '../services/menu/menu.service';
import { ActivatedRoute ,Router ,NavigationEnd} from '@angular/router';
 import { LocalStorageService} from 'angular-2-local-storage';
declare var $: any;
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']

})
export class MenuComponent implements OnInit {
  // toggleClass:boolean = false;
  // @Output() toggleClassEvent =new EventEmitter();
  menu: any;

  constructor(private menuService: MenuService,private router :Router,private localStorageService:LocalStorageService ,private activatedRoute :ActivatedRoute) { 
   
  }

  ngOnInit() {
    this.menu = [{ displayName: "Dashboard",id:"1", icons: "span dashboard-icn",class:"item-8 deeper parent link-dashboard", routing: "dashboard", subMenu: [], toggle: false },
    { displayName: "My Reports",id:"2",class:"item-8 deeper parent link-report", icons: "span report-icn", routing: "Report", subMenu: [], toggle: false }, 
    { displayName: "Manage KPI",id:"3",class:"item-8 deeper parent link-kpi", icons: "span settings-icn", routing: "/kpiCreation", subMenu: [], toggle: false },
    { displayName: "Dynamic Counter Addition",id:"4",class:"item-8 deeper parent link-counters", icons: "span counters-icn", routing: "/dynamicCounterAddition", subMenu: [], toggle: false },
    { displayName: "Geo Map View",id:"8",class:"item-8 deeper parent link-counters", icons: "span location-icn", routing: "/geolocation", subMenu: [], toggle: false }, 
    { displayName: "RealtimeMonitoring",id:"9",class:"item-8 deeper parent link-counters", icons: "span realtimemonitoring-icn", routing: "/RealtimeMonitoring", subMenu: [], toggle: false } ,	
    { displayName: "Heat Map View",id:"10",class:"item-8 deeper parent link-counters", icons: "span traffic-visualization-icn", routing: "/visualization", subMenu: [], toggle: false },
    { displayName: "Analytical Reports",id:"11",class:"item-8 deeper parent link-counters", icons: "span analytical-report-icn", routing: "/analyticalReport", subMenu: [], toggle: false },
    { displayName: "Capacity Management Automation Reports",id:"12",class:"item-8 deeper parent link-counters", icons: "span analytical-report-icn", routing: "/capacityManagementAutomation", subMenu: [], toggle: false },
    { displayName: "IWAN Reports",id:"13",class:"item-8 deeper parent link-counters", icons: "span analytical-report-icn", routing: "/IWANReports", subMenu: [], toggle: false },
    { displayName: "Admin Settings",id:"5",class:"item-8 deeper parent link-threshold", icons: "span admin-icn", routing: "Dashboard", subMenu: [{ displayName: "Create Dashboard",id:"6",class:"item-8 deeper parent link-counters", icons: "span counters-icn", routing: "/createDashboard", subMenu: [], toggle: false },{ displayName: "Manage Dashboards",id:"7",class:"item-8 deeper parent link-counters", icons: "span counters-icn", routing: "/manageDashboard", subMenu: [], toggle: false }], toggle: false }
   ]
   let initialmenu = [{ displayName: "Dashboard",id:"1", icons: "span dashboard-icn",class:"item-8 deeper parent link-dashboard", routing: "dashboard", subMenu: [], toggle: false },
   { displayName: "My Reports",id:"2",class:"item-8 deeper parent link-report", icons: "span report-icn", routing: "Report", subMenu: [], toggle: false }, 
   { displayName: "Manage KPI",id:"3",class:"item-8 deeper parent link-kpi", icons: "span settings-icn", routing: "/kpiCreation", subMenu: [], toggle: false },
    { displayName: "Dynamic Counter Addition",id:"4",class:"item-8 deeper parent link-counters", icons: "span counters-icn", routing: "/dynamicCounterAddition", subMenu: [], toggle: false },
    { displayName: "Geo Map View",id:"8",class:"item-8 deeper parent link-counters", icons: "span location-icn", routing: "/geolocation", subMenu: [], toggle: false },
     { displayName: "RealtimeMonitoring",id:"9",class:"item-8 deeper parent link-counters", icons: "span realtimemonitoring-icn", routing: "/RealtimeMonitoring", subMenu: [], toggle: false },	
     { displayName: "Heat Map View",id:"10",class:"item-8 deeper parent link-counters", icons: "span traffic-visualization-icn", routing: "/visualization", subMenu: [], toggle: false },
     { displayName: "Analytical Reports",id:"11",class:"item-8 deeper parent link-counters", icons: "span analytical-report-icn", routing: "/analyticalReport", subMenu: [], toggle: false },
     { displayName: "Capacity Management Automation Reports",id:"12",class:"item-8 deeper parent link-counters", icons: "span analytical-report-icn", routing: "/capacityManagementAutomation", subMenu: [], toggle: false },
     { displayName: "IWAN Reports",id:"13",class:"item-8 deeper parent link-counters", icons: "span analytical-report-icn", routing: "/IWANReports", subMenu: [], toggle: false },
     { displayName: "Admin Settings",id:"5",class:"item-8 deeper parent link-threshold", icons: "span admin-icn", routing: "Dashboard", subMenu: [{ displayName: "Create Dashboard",id:"6",class:"item-8 deeper parent link-counters", icons: "span counters-icn", routing: "/createDashboard", subMenu: [], toggle: false },{ displayName: "Manage Dashboards",id:"7",class:"item-8 deeper parent link-counters", icons: "span counters-icn", routing: "/manageDashboard", subMenu: [], toggle: false }], toggle: false }
   ];
   let menu :any= this.localStorageService.get('menu');
   if(menu){
    this.menu = menu;
     this.localStorageService.set("menu",this.menu);
   }
        
   
       this.menuService.getMenuSubject().subscribe((data) => {
         let menuData=this.menuService.getMenu();
         if(data && data.value && data.value == "Menu added"){
           this.menu = initialmenu;
         }
      let menu1 =menuData && menuData.reports ? menuData.reports :menuData;
      let i :number=0;
      let index;
      let obj1 ={ displayName: "Create Report", icons: "span report-icn", routing: "/createReport", subMenu: [], toggle: false };
      if(menu1!=null &&  menu1 && data!=null && data.value!=null && !data.value.match("Dashboard") ){
        for(let m of this.menu){
          if(m.id== "2"){
          let obj =menu1;
          if(data && data.value && data.value !="Menu added" && data.value!=null ){
            obj=[];
            obj.push(menu1);
          }
             obj.forEach((r,j)=>{
          r["displayName"]=r.reportName;
          r["routing"] = "report/"+ r.userTemplateId+'/userReport';
          r["toggle"]=false;
          r["subMenu"]=[];
         });

         if(data.value == "Menu deleted") {
            if(m["subMenu"] && m["subMenu"].length>0){
               m["subMenu"] =  m["subMenu"].filter((mreport)=>{
            return mreport.userTemplateId != menu1.userTemplateId
              
            })
            }
          }else if
         (data && data.value && data.value !== "Menu updated"){

          m["subMenu"]=obj;
        }else if(data.value == "Menu updated") {
          
          if(m["subMenu"] && m["subMenu"].length>0){
           let dataFiltered = false;
           m["subMenu"].filter((mreport)=>{
              if(mreport.userTemplateId == menu1.userTemplateId){
               mreport["displayName"] = menu1.reportName;
               dataFiltered= true;
              }
            })
            if(!dataFiltered){
              m["subMenu"].unshift(obj[0]);
            }
          }else{
             m["subMenu"].push(obj[0]);
          }
             if($("#sub-menu-"+i).hasClass('collapsed')){
                this.toggle("#sub-menu-"+i,'ul.expanded');
             }
             
          }
       
       break;
        }
        i++;
        }    
      
      }
      if(menuData != null && ((menuData.profileResponse && menuData.profileResponse.dashboards !=null )|| menuData))
      {
      
        let obj = menuData.profileResponse ? menuData.profileResponse.dashboards : menuData;
          if(data && data.value != "Dashboard deleted" && obj && (data.value.match("Dashboard") || data.value.match("Menu added"))){
        for (let m of this.menu) {
          if (m.id == 1) {

          
            obj.forEach((d, j) => {
              d["displayName"] = d.name;
              d["routing"] = "/subdashboards/" + d.id;
              d["toggle"] = false;
             
              if(d.subDashboards && d.subDashboards.length >0){
                 d["subMenu"]=[];
             d.subDashboards.forEach((subd)=>{
           subd["displayName"]=subd.name;
          subd["routing"] = "/dashboard/"+ d.id+"/subdashboard/"+subd.subDashboardId;
          subd["toggle"]=false;
         
             if(subd.reports && subd.reports.length >0){
              subd["subMenu"]=[];
                subd.reports.forEach((r)=>{
                   r["displayName"]=r.reportName;
          r["routing"] = "/dashboard/"+ r.userTemplateId+'/dashboardRep/'+d.id+'/'+subd.subDashboardId;
          r["toggle"]=false;
          r["subMenu"]=[];
          subd["subMenu"].push(r);
                })
              }else{
              subd["subMenu"] = [];
              }
          d["subMenu"].push(subd);
                })             
          
              }else{
                d["subMenu"] = [];
              }

          //     if(d.reports && d.reports.length >0){
          //     d["subMenu"]=[];
          //       d.reports.forEach((r)=>{
          //          r["displayName"]=r.reportName;
          // r["routing"] = "/dashboard/"+ r.userTemplateId+'/dashboardRep/'+d.id;
          // r["toggle"]=false;
          // r["subMenu"]=[];
          // d["subMenu"].push(r);
          //       })
          //     }else{
          //     d["subMenu"] = [];
          //     }
           if(d["subMenu"] && d["subMenu"].length>0){
             if(data.value!="Dashboard modified"){
            m["subMenu"].unshift(d);
             }                      
            }else{
              m["subMenu"] = obj;
            }
          });
            
          //  setTimeout(()=>{
                  if(data.value=="Dashboard modified"){
               m.subMenu.forEach((dashboards)=>{
             if(dashboards.id == obj[0].id){
              let d=obj[0];
               dashboards["displayName"]=d["displayName"];
               dashboards["name"] = d["displayName"];
          dashboards["routing"] = d["routing"];
          dashboards["toggle"]=false;
         dashboards["subMenu"]=d["subMenu"];
             }
            })

             } 
              setTimeout(()=>{
             $('ul.collapsed[id^=sub-menu-0]').css('display', 'none');
              },0)
           // },0);
                
          }
            
          }

      }
        if(data && data.value == "Dashboard deleted"){
        this.menu.filter((menu)=>{
                if(menu.id=="1"){
                  let id= menuData.dashboardId;
               menu.subMenu =  menu.subMenu.filter((subm)=>{
                  return id!=subm.id
                })
                }

              })
        }
    }
    if(menuData!=null && data&& data.value =="Menu added"){
    let acceess = menuData.profileResponse ? menuData.profileResponse.accesses :[];
    let dataAccessAllowedProfiles =[];
    if(acceess){
      acceess.filter((data)=>{
        dataAccessAllowedProfiles.push(data.accessId);
      })
    }

    this.menu = this.menu.filter((data)=>{
      return (dataAccessAllowedProfiles.indexOf(parseInt(data.id))>=0)
    })
   
    
  }

   if(data &&data.value=="Dashboard modified"){
   // setTimeout(()=>{
     this.localStorageService.set("menu",this.menu);
  //  },0);
   }else{
     this.localStorageService.set("menu",this.menu);  
   }
       });
       
    this.menuService.getToggledValue().subscribe((data) => {
      if (data.value) {
        this.toggle('ul.expanded', 'closeAll');
      }
    });
  }

  toggle(selector, close?,link?,id? ) {
    console.log($(selector).siblings('a').find('i.icon-white'))
    $(selector).siblings('a').find('i.icon-white').toggleClass('icon-minus');
    // if ($(selector).parent().hasClass('active')) {
    //   $(selector).parent().removeClass('active');
    // }
    // else { $(selector).parent().addClass('active'); }
    
    if ($(selector).length > 0) {

      if (close == 'closeAll' ) {
       
        $(selector).slideUp("fast");
        $(selector).toggleClass('collapsed').toggleClass('expanded');
        $(selector).parent().removeClass('active');
      } else if (close != undefined) {
        $(selector).slideToggle("fast");
        $(selector).toggleClass('collapsed').toggleClass('expanded');
        
        // let elementSelector1 = 'ul.expanded:not([id^=' + selector.replace("#", "") + '],[class=nav])';
        // console.log($(elementSelector1));
        // if ($(elementSelector1).length > 0) {
        //   $(elementSelector1).slideUp("fast");
        //   $(elementSelector1).siblings('a').find('i.icon-white').toggleClass('icon-minus');
        //   $(elementSelector1).toggleClass('collapsed').toggleClass('expanded');
        // }
        // if ($(selector).hasClass('collapsed')) {
        //   let elementSelector = selector + ' ul[id^=' + selector.replace("#", "") + ']';
        //   if ($(elementSelector).hasClass('expanded')) {
        //  this.toggle(elementSelector, 'closeAll');
        //   }
        // }
      }
      else {
        $(selector).slideToggle(200);
        $(selector).toggleClass('collapsed').toggleClass('expanded');
      }
    }

    if(link && link.toLowerCase()!='dashboard' ){
      this.redirectTo(link);
    }
  }

  redirectTo(link){
    if(link.length>0){
    this.router.navigate([link]);
    }
  }

  ngAfterViewInit() {
    this.menuHide();
    this.showCustomScrollbar('.overflow-div');
    //this.toggle("#sub-menu-"+0,'ul.expanded');
  }

checkRouteParam(link){

  return {
    'active': this.checkRoutes(link)
  };
  
}

checkRoutes(link){
  //this.activatedRoute.url.subscribe(()=>{
    let url = this.router.url;
    if(link==null || link==""){
      return false;
    }
    else if(url.indexOf(link)>=0){
      return true;
    }else if(url.indexOf('editReport')>=0 && link.indexOf('createReport')<0 ){
      if(link.indexOf('/')>=0 ){
        let ids =link.split('/');
        if(url.indexOf(ids[1])>=0){
          return true;
        }
      }
      
    }else false;
  //});
}
menuHide(){
  setTimeout(()=>{
    $('ul[id^=sub-menu-]').css('display', 'none');
  })
}

showCustomScrollbar(elem) {
  setTimeout(()=>{
     $(elem).mCustomScrollbar({
       theme: "minimal",
       advanced: {
         autoScrollOnFocus: false,
         updateOnContentResize: true
       }
     });
  },0)
    
    }


}
