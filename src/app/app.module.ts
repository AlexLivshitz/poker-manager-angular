import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { SessionsListComponent } from './sessions-list/sessions-list.component';
import { AddSessionComponent } from './add-session/add-session.component';
import { SessionDetailsComponent } from './session-details/session-details.component';
import { ReversePipe } from './reverse.pipe';
import { SessionItemComponent } from './session-item/session-item.component';

@NgModule({
  declarations: [
    AppComponent,
    SessionsListComponent,
    AddSessionComponent,
    SessionDetailsComponent,
    ReversePipe,
    SessionItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
