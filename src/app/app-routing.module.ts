import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DatabaseComponent} from './database/database.component';
import {HomeComponent} from './home/home.component';
import {FormsComponent} from './forms/forms.component';

import { AttendanceComponent } from './attendance/attendance.component';
import {PiechartComponent} from './piechart/piechart.component';
import {BarchartComponent} from './barchart/barchart.component';
import {LinechartComponent} from './linechart/linechart.component';
import {DoughnutComponent} from './doughnut/doughnut.component';
import {PolarareaComponent} from './polararea/polararea.component';


const routes: Routes = [
   { path: '', component: HomeComponent },
{ path: 'home', component: HomeComponent },
{ path: 'forms', component: FormsComponent },
{ path: 'database', component: DatabaseComponent },
{path :'attendance',component: AttendanceComponent},
{path :'linechart',component: LinechartComponent},
{path :'barchart',component: BarchartComponent},
{path :'doughnut',component: DoughnutComponent},
{path :'polararea',component: PolarareaComponent},

{path:'piechart',component:PiechartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
