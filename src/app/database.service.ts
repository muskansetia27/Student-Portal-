import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse, HttpRequest, HttpHeaders} from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  private API_URL = ' https://umzh683tqa.execute-api.us-east-1.amazonaws.com/dev/form';

  constructor(private http: HttpClient) { }

  createPerson(lastName, firstName, email, comments, option) {
    const headers = new Headers({'Content-Type' : 'application/json'});
    //const options = new Request('{ headers: headers}');
    const INFO =  Object.assign(lastName, firstName, email, comments, option);
    const body = JSON.stringify(INFO);
    return this.http.post(this.API_URL, body,{headers: new  HttpHeaders().set('content-type', 'application/json')})
    .subscribe(
       (response) => console.log(response),
      (error) => console.log(error))
  }

  getInfo(id: string){
    return this.http.get(this.API_URL + id)
    .subscribe(
      (response) => console.log(response),
      (error) => console.log(error))
  }

}


