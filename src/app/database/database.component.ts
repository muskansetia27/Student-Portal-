import { Component, OnInit } from '@angular/core';
import {DatabaseService} from '../database.service';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-database',
  templateUrl: './database.component.html',
  styleUrls: ['./database.component.css'],
  providers:[DatabaseService]
})

export class DatabaseComponent implements OnInit {
  private API_URL = ' https://umzh683tqa.execute-api.us-east-1.amazonaws.com/dev/form';

    people :any;

  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.http.get(this.API_URL).subscribe(data => this.people = data);
    
  }

  refresh(){
    this.http.get(this.API_URL).subscribe(data => this.people = data);
    ;
  }

}
