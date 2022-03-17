import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private backend:HttpClient) {

   }

   getData(){
     return this.backend.get('https://reqres.in/api/users')
   }

}
