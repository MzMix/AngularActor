import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ActorsComponent } from './actors/actors.component';
import { AddActorComponent } from './add-actor/add-actor.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'actors', component: ActorsComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'new', component: AddActorComponent },
  //{ path: 'detail/:id', component: ActorDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
