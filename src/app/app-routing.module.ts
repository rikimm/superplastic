import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './views/pages/dashboard/dashboard.component';


const routes: Routes = [
  {
    path:"home",
    component:DashboardComponent
  },
  {
    path:"",
    redirectTo:"home",
    pathMatch:"full"
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
