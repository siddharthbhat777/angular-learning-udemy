import { AfterContentInit, afterNextRender, afterRender, Component, contentChild, ContentChild, ElementRef, inject, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None, // for adding input, textarea styles which will be loaded
  host: {
    class: 'control',
    '(click)': 'onClick()'
  }
})
export class ControlComponent implements AfterContentInit {
  // @HostBinding('class') className = 'control'; // class: control alternative
  /* @HostListener('click') onClick() { // click event alternative
    console.log('Clicked!');
  } */
  label = input.required<string>();
  // Accessing parent element info
  private el = inject(ElementRef); // dependency injection instead of using constructor way

  // @ContentChild('input') private control?: ElementRef<HTMLInputElement | HTMLTextAreaElement>; // old way
  private control = contentChild.required<ElementRef<HTMLInputElement | HTMLTextAreaElement>>('input');

  constructor() {
    afterRender(() => {
      console.log('afterRender');
    });
    afterNextRender(() => {
      console.log('afterNextRender');
    });
  }

  ngAfterContentInit() {
      // ...
  }

  onClick() {
    console.log('Clicked!');
    console.log(this.el);
    console.log(this.control());
  }
}
