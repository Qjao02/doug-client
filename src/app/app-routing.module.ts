import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminComponent} from './admin/admin.component';
import {AdminModule} from './admin/admin.module';
import {AdminHomeComponent} from './admin/admin-home/admin-home.component';
import {AdminLoginComponent} from './admin/admin-login/admin-login.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent}
];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
