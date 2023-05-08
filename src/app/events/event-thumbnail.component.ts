import { Component, Input } from "@angular/core"
import { IEvent } from "./shared/index"

@Component({
  selector: 'event-thumbnail',
  template: `
    <div class="well hoverwell thumbnail">
      <h2>{{event.name | uppercase }}</h2>
      <div>Date: {{event.date | date: 'shortDate'}}</div>
      <div [ngStyle]="getStartTimeStyle()" [ngSwitch]="event.time">Time: {{event.time}}
        <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
        <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
        <span *ngSwitchDefault>(Normal Start)</span>
      </div>
      <!-- we can parameterize that and some events can be in dollars, some events can be in pounds, some can be in euros. -->
      <!-- <div>Price: \${{event.price}}</div> -->
      <div>Price: {{event.price | currency: 'USD'}}</div>
      <div *ngIf="event.location">
        <span>Location: {{event.location.address}}</span>
        <span class="pad-left">{{event.location.city}}, {{event.location.country}}</span>
      </div>
      <div *ngIf="event.onlineUrl">
        Online URL: {{event.onlineUrl}}
      </div>
    </div>
  `,
  styles: [`
    .thumbnail { min-height: 210px; }
    .pad-left { margin-left: 10px; }
    .well div { color: #bbb; }
  `]
})
export class EventThumbnailComponent {
  @Input() event!: IEvent;

  getStartTimeStyle():any {
    if (this.event && this.event.time === '8:00 am')
      return {color: '#003300', 'font-weight': 'bold'}
    return {}
  }
}
