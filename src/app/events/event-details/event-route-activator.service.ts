import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Router } from "@angular/router";
import { EventService } from "../shared/index";

@Injectable()
export class EventRouteActivator {

  constructor(private eventService: EventService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot) {
    const eventExists = !!this.eventService.getEvent(+route.params['id']); // Accessing route parameters

    if (!eventExists) {
      return this.router.navigate(['/404']);
    }
    return eventExists;
  }
}