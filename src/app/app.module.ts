import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { EventsAppComponent } from './events-app.component';
import { NavBarComponent } from './nav/nav-bar.component'
import { ToastrService } from './common/toastr.service'
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { EventsListComponent, EventService, EventDetailsComponent, EventsListResolver,
  CreateEventComponent, EventRouteActivator, EventThumbnailComponent, CreateSessionComponent,
  SessionListComponent  } from './events/index';
import { AuthService } from './user/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
    SessionListComponent
  ],
  providers: [EventService, ToastrService, EventsListResolver, EventRouteActivator,
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
