import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { EventsAppComponent } from './events-app.component';
import { NavBarComponent } from './nav/nav-bar.component'
import { TOASTR_TOKEN, Toastr } from './common/toastr.service'
// import { TOASTR_TOKEN as TOASTR_TOKEN2 } from './common/toastr2.service' // we dont have any name collision, if we use like this

import { CollapsibleWellComponent } from './common/collapsible-well.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { EventsListComponent, EventService, EventDetailsComponent, EventsListResolver,
  CreateEventComponent, EventRouteActivator, EventThumbnailComponent, CreateSessionComponent,
  SessionListComponent,
  DurationPipe } from './events/index';
import { AuthService } from './user/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


declare let toastr: Toastr;

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    DurationPipe
  ],
  providers: [EventService,
    { provide: TOASTR_TOKEN, useValue: toastr },
    EventsListResolver,
    EventRouteActivator, // this is shorthand
    // { provide: EventRouteActivator, useClass: EventRouteActivator}, //  this is longhand provide - here key-provide, useClass
    // this is longhand provide
    { provide: 'canDeactivateCreateEvent', useValue: checkDirtyState },
    AuthService // we can import auth service here also instead of usermodule
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

export function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty) {
    return window.confirm('You have not saved this event, do you really want to cancell?');
  }
  return true;
}
