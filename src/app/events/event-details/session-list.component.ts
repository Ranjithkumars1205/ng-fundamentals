import { Component, Input, OnChanges, OnInit, SimpleChanges } from "@angular/core";
import { ISession } from "../shared";


@Component({
  selector: 'session-list',
  templateUrl: './session-list.component.html'
})
export class SessionListComponent implements OnChanges {
  @Input() sessions: ISession[] = [];
  @Input() filterBy = '';
  @Input() sortBy = '';
  visibleSessions: ISession[] = [];

  ngOnChanges(simpleChanges: SimpleChanges): void {
    if (simpleChanges?.['filterBy']) {
      this.visibleSessions = this.sessions;
      this.filterSessions(this.filterBy);
    } else if (simpleChanges?.['sortBy']) {
      this.sortBy === 'name' ? this.visibleSessions.sort(this.sortByNameAsc) : this.visibleSessions.sort(this.sortByVotesDesc);
    }
  }

  filterSessions(filter: string) {
    if (filter === 'all') {
      this.visibleSessions = this.sessions.slice(0); // copy method
    } else {
      this.visibleSessions = this.sessions.filter(session => session.level.toLocaleLowerCase() === filter);
    }
  }

  sortByNameAsc(s1: ISession, s2: ISession) {
    if (s1.name > s2.name) return 1;
    else if (s1.name === s2.name) return 0;
    else return -1;
  }

  sortByVotesDesc(s1: ISession, s2: ISession) {
    return s2.voters.length - s1.voters.length;
  }
}
