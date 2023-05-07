import { Route } from "@angular/router";
import { Error404Component } from "./errors/404.component";
import { CreateEventComponent, EventRouteActivator, EventsListResolver,
  EventDetailsComponent, EventsListComponent, CreateSessionComponent } from './events/index';

export const appRoutes: Route[] = [
  // canDeactivate - If i click on anything that would take me away from this page, it prevent me from doing that.
  { path: 'events/new', component: CreateEventComponent, canDeactivate: [ 'canDeactivateCreateEvent']}, // it should be first as always.. becoz, this path actually mathches the path below this events/:id path.
  // so, angular  doesn't have a way to diffrentiate between whether we're trying to pass in the id new to the event id path or whether we're trying to hit the events/new path.
  //  when angular see this events/new, it will hit that first and will send us to this route.
  { path: 'events', component: EventsListComponent, resolve: { events: EventsListResolver } },
  { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivator] },
  { path: 'events/session/new', component: CreateSessionComponent },
  { path: '404', component: Error404Component },
  // { path: '**', component: Error404Component},
  { path: '', redirectTo: '/events', pathMatch: 'full' },
  // this syntax was deprecated in angular 8
  // { path: 'user', loadChildren: './user/user.module#UserModule'}
  /** In this function, we'll use a dynamic import to load this module. Dynamic imports return a promise that
   * contains the module to be imported, and we need to return the UserModule class from that import,so we'll add
   * .then here
   *
   * we dont need to import this in appModule if it is lazyloading module
   */
  { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule)}

]


