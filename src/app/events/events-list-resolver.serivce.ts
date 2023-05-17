import { Injectable } from "@angular/core";
import { EventService } from "./shared/event.service";
import { map } from "rxjs/operators";


@Injectable()
export class EventsListResolver {
  constructor(private eventService: EventService) {}

  resolve() {
    // Here subscribe returs a subscription, not an observable.
    // Page doesn't show up until all the data's been loaded.
    return this.eventService.getEvents().pipe(map(events => events));
  }

}
