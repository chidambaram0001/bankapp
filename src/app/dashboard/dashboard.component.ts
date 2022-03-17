import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  ngOnInit(): void {
   
  }

  public cDate:any = "";

  public objJson:Array<any> = [
    {
      "name":"chidhu",
      "age":28,
      "amount":"$50",
      "date":"21/12/2021"
    },
    {
      "name":"harini",
      "age":23,
      "amount":"$90",
      "date":"21/12/2022"
    },
    {
      "name":"chozhan",
      "age":1,
      "amount":"$5000",
      "date":"11/12/2022"
    },
    {
      "name":"ram",
      "age":28,
      "amount":"$5",
      "date":"10/11/2021"
    }
  ];

  public objJson1 = JSON.parse(JSON.stringify(this.objJson));
  public sortOrder = "";


  public filterData(){
    console.log(this.cDate);
    if(!this.cDate){
      return;
    }

    this.objJson1 = this.objJson.filter((x)=>{
      let aa = x.date.split('/');
      return new Date(aa[2]+'/'+aa[1]+'/'+aa[0]).setHours(0) == new Date(this.cDate).setHours(0);
    } 
    );
  }

  public sort(col:any){
    if(col == "age"){
      if(!this.sortOrder || this.sortOrder == "asc"){
        this.objJson1.sort((a:any,b:any)=>a.age-b.age);
        this.sortOrder = 'desc'
      }else{
        this.objJson1.sort((a:any,b:any)=>b.age-a.age);
        this.sortOrder = 'asc'
      }
      
    }

  }

}
