import { ToastrService } from '../common/toastr.service'
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// declare let toastr: any;

@Component({
  // selector: 'events-list', // we dont need this one right now
  templateUrl: './events-list.component.html'
})

export class EventsListComponent implements OnInit {
  events: any;
  constructor(private toastr: ToastrService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.events = this.route.snapshot.data['events'];
  }

  handleThumbnailClick(eventName: string) {
    this.toastr.success(eventName)
  }
}
