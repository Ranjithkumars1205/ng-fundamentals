import { Component, Input } from "@angular/core";

@Component({
  selector: 'collapsible-well',
  template: `
  <div class="well pointable" (click)="toggleContent()">
    <!-- Content project - if you want to resuse some component (parent) template like collapse, you can go with it.. -->
    <!-- this selector a little bit better than the class selector. becz, there's always possible that a class tha we put in here could conflict
    with something that we actuall have in a css file. -->
    <h4 class="well-title">
      <ng-content select="[well-title]"></ng-content>
    </h4>
    <ng-content *ngIf="visible" select="[well-body]"></ng-content>
  </div>
  `
})
export class CollapsibleWellComponent {
  visible: boolean = true;

  toggleContent() {
    this.visible = !this.visible;
  }
}
