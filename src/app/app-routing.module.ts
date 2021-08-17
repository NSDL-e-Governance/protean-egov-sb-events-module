import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { from } from 'rxjs';
import { DetailRedirectionComponent } from'./detail-redirection/detail-redirection.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserFomComponent } from './user-fom/user-fom.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { DemoComponent } from '../app/demo/demo.component';

const routes: Routes = [
  { path: '', redirectTo: '/demo', pathMatch: 'full' },
  //{ path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'redirect-detail', component: DetailRedirectionComponent },
  { path: 'list', component: UserListComponent },
  { path: 'form', component: UserFomComponent },
  { path: 'wrapper', component: UserDetailComponent },
  { path: 'demo', component: DemoComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
