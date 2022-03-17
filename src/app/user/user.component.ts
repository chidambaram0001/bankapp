import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public responseData:any;
  constructor(private service:UserService) { }

  ngOnInit(): void {

    this.service.getData().subscribe((res)=>{
      console.log(res);
      this.responseData = res;
    })

  }

}
