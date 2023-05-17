import { Injectable } from "@angular/core";
import { EventService } from "./shared/index";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";
import { IEvent } from "./shared/index";


@Injectable()
export class EventsListResolver {
  constructor(private eventService: EventService) {}

  resolve(): Observable<IEvent[]> {
    // Here subscribe returs a subscription, not an observable.
    // Page doesn't show up until all the data's been loaded.
    return this.eventService.getEvents().pipe(map(events => events));
  }

}
