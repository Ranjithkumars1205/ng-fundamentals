import { Directive, ElementRef, Inject, Input, OnInit } from '@angular/core';
import { JQ_TOKEN } from './jQuery.service';

@Directive({
  selector: '[modal-trigger]',
})
export class ModalTriggerDirective implements OnInit {
  @Input('modal-trigger') modalId!: string;
  private el: HTMLElement;
  constructor(ref: ElementRef, @Inject(JQ_TOKEN) private $: any) {
    this.el = ref.nativeElement;
  }

  /**
   * Elememt ref is angular 2 object which is a pointer to a specific element.
   * it is kind of a wrapper for the DOM element. we want actual DOM element (HTMLElement - this is just a global Javascript type)
   */
  ngOnInit(): void {
    this.el.addEventListener('click', (e) => {
      // here, we are calling jQuert function, and passing the id
      this.$(`#${this.modalId}`).modal({});
      /**
       * we could never have two different modals in the same application, we can only have one modal, which is a weakness, right?
       * this is generic modal dialog box. we would like to be able to use it multiple times. we should fix it,
       * because two elements have same id, it would make a big problem.
       *
       *  */
      //
    });
  }
}
