import { EventService } from './shared/event.service'
import { ToastrService } from '../common/toastr.service'
import { Component, OnInit } from '@angular/core';

declare let toastr: any;

@Component({
  selector: 'events-list',
  templateUrl: './events-list.component.html'
})

export class EventsListComponent implements OnInit {
  events: any[] = [];
  constructor(private eventService: EventService, private toastr: ToastrService) {}

  ngOnInit() {
    this.events = this.eventService.getEvents()
  }

  handleThumbnailClick(eventName: string) {
    this.toastr.success(eventName)
  }
}
