import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Chart } from 'chart.js';  

import { Data } from '../data';


@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.css']
})
export class BarchartComponent implements OnInit {

  data: Data[];  
  url = 'https://umzh683tqa.execute-api.us-east-1.amazonaws.com/dev/form';  
  RollNumber = [];  
  XAttendedLectures = [];  
  XTotalLectures=[];
  SAPID=[];
  Total=[];
  

  
  barchart = [];  
  Player=[];
  constructor(private httpClient: HttpClient) { }  
  ngOnInit() {  
    this.httpClient.get(this.url).subscribe((result: Data[]) => {   result.forEach(x => {  
      this.Player.push(x.SAPID);
      this.XAttendedLectures.push(x.AttendedLectures);  
      this.XTotalLectures.push(x.TotalLectures) ;
    this.Total.push(x.AttendedLectures*100/x.TotalLectures)
    });  
       
     //tslint:disable   
   this.barchart = new Chart('canvas', {  
        type: 'bar',  
        data: {  
          labels: this.Player,  
          datasets: [  
            {  
              data: this.Total,  
              borderColor: '#3cba9f',  
              backgroundColor: [  
                  
                "#3cb371",  
                "#0000FF",  
                "#9966FF",  
                "#4C4CFF",  
                "#00FFFF",  
                "#f990a7",  
                "#aad2ed",  
                "#FF00FF",  
                "Blue",  
                "Red",  
                "Blue",
                "Pink",
                "Yellow",
                "Orange",
                "Brown",
                "Purple",
                "Black",
                "Grey"
                
              ],  
              fill: true  
            }  
          ]  
        },  
        options: {  
          legend: {  
            display: false 
          },  
          scales: {  
            xAxes: [{  
              display: true  
            }],  
            yAxes: [{  
              display: true  
            }],  
          }  
        }  
      });  
    });  
  }  
}





