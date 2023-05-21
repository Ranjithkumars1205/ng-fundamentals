import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { EventsAppComponent } from './events-app.component';
import { NavBarComponent } from './nav/nav-bar.component';
// import { TOASTR_TOKEN as TOASTR_TOKEN2 } from './common/toastr2.service' // we dont have any name collision, if we use like this
import {
  JQ_TOKEN,
  TOASTR_TOKEN,
  Toastr,
  CollapsibleWellComponent,
  SimpleModalComponent,
  ModalTriggerDirective,
} from './common/index';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import {
  EventsListComponent,
  EventService,
  EventDetailsComponent,
  EventsListResolver,
  CreateEventComponent,
  EventRouteActivator,
  EventThumbnailComponent,
  CreateSessionComponent,
  SessionListComponent,
  DurationPipe,
} from './events/index';
import { AuthService } from './user/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/**
 * lets fix an AOT compilation problem.. you may have already fixed this on your own.
 * We'll change this, get rid of the declare, and let toastr equal window toastr.
 *
 */
// declare let toastr: Toastr;

declare global {
  interface Window {
    $: any;
    toastr: any;
  }
}

// let window: any = new Map<string, Window[]>();
let toastr: Toastr | any = window.toastr;
let jQuery = window.$;
// declare let jQuery: any;
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
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
    DurationPipe,
    SimpleModalComponent,
    ModalTriggerDirective,
  ],
  providers: [
    EventService,
    { provide: TOASTR_TOKEN, useValue: toastr },
    { provide: JQ_TOKEN, useValue: jQuery },
    EventsListResolver,
    EventRouteActivator, // this is shorthand
    // { provide: EventRouteActivator, useClass: EventRouteActivator}, //  this is longhand provide - here key-provide, useClass
    // this is longhand provide
    { provide: 'canDeactivateCreateEvent', useValue: checkDirtyState },
    AuthService, // we can import auth service here also instead of usermodule
  ],
  bootstrap: [EventsAppComponent],
})
export class AppModule {}

export function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty) {
    return window.confirm(
      'You have not saved this event, do you really want to cancell?'
    );
  }
  return true;
}
