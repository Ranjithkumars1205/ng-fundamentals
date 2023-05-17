import { Component, OnInit } from "@angular/core";
import { EventService, ISession } from "../shared/index";
import { ActivatedRoute } from "@angular/router";

@Component({
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']

})
export class EventDetailsComponent implements OnInit {
  event: any;
  addMode!: boolean;
  constructor(private eventService: EventService, private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.event = this.eventService.getEvent(+this.route.snapshot.params['id']);
  }

  addSession() {
    this.addMode = true;
  }

  saveNewSession(newSession: ISession) {
    const nextId = Math.max.apply(null, this.event.sessions.map((s: any) => s.id));
    newSession.id = nextId + 1;
    this.event.sessions.push(newSession);
    this.eventService.updateEvent(this.event);
    this.addMode = false;
  }

  cancelAddSession() {
    this.addMode = false;
  }
}
