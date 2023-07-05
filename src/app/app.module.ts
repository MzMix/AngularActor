import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';

import { AppComponent } from './app.component';
import { ActorPanelComponent } from './actor-panel/actor-panel.component';
import { SearchPanelComponent } from './search-panel/search-panel.component';
import { MessagesComponent } from './messages/messages.component';
import { AddActorComponent } from './add-actor/add-actor.component';
import { StarComponent } from './star/star.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ActorsComponent } from './actors/actors.component';
import { NewActorComponent } from './new-actor/new-actor.component';
import { ActorDetailsComponent } from './actor-details/actor-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ActorPanelComponent,
    SearchPanelComponent,
    MessagesComponent,
    AddActorComponent,
    StarComponent,
    DashboardComponent,
    ActorsComponent,
    NewActorComponent,
    ActorDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
