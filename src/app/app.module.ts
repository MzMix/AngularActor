import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActorPanelComponent } from './actor-panel/actor-panel.component';
import { SearchPanelComponent } from './search-panel/search-panel.component';
import { Messages1Component } from './messages1/messages1.component';
import { ActorsListComponent } from './actors-list/actors-list.component';
import { AddActorComponent } from './add-actor/add-actor.component';
import { StarComponent } from './star/star.component';

@NgModule({
  declarations: [
    AppComponent,
    ActorPanelComponent,
    SearchPanelComponent,
    Messages1Component,
    ActorsListComponent,
    AddActorComponent,
    StarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
