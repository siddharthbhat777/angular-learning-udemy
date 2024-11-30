import { Component, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None, // for adding input, textarea styles which will be loaded
  host: {
    class: 'control'
  }
})
export class ControlComponent {
  label = input.required<string>();
}
