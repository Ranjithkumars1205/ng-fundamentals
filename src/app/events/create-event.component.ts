import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from './shared/index';

@Component({
  templateUrl: './create-event.component.html',
  styles: [
    `
      em {
        float: right;
        color: #e05c65;
        padding-left: 10px;
      }
      .error input {
        background-color: #e3c3c5;
      }
      /* for different browser */
      .error ::-webkit-input-placeholder {
        color: #999;
      }
      .error ::-moz-placeholder {
        color: #999;
      }
      .error :-moz-placeholder {
        color: #999;
      }
      .error ::-ms-input-placeholder {
        color: #999;
      }
    `,
  ],
})
export class CreateEventComponent implements OnInit {
  newEvent!: any;
  isDirty = true;
  constructor(private router: Router, private eventService: EventService) {}

  ngOnInit(): void {
    // It will be update in the template only when we use two way data binding [(ngModel)] instead of one way (ngModel).
    this.newEvent = {
      name: 'Ng Spectacular',
      date: '8/8/2024',
      time: '10am',
      price: 799.99,
      location: {
        address: '467 Happy St',
        city: 'Felicity',
        country: 'Angularistan'
      },
      onlineUrl: 'http://ngSpectacular.com',
      imageUrl: 'http://ngSpectacular.com/logo.png'
    }
  }

  cancel() {
    this.router.navigate(['/events']);
  }

  saveEvent(formValues: any) {
    console.log(formValues);
    this.eventService.saveEvent(formValues);
    this.isDirty = false;
    this.router.navigate(['/events']);
  }
}
