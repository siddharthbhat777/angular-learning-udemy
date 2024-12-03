import { Component, EventEmitter, Input, input, model, Output } from '@angular/core';

@Component({
  selector: 'app-rect',
  standalone: true,
  imports: [],
  templateUrl: './rect.component.html',
  styleUrl: './rect.component.css',
})
export class RectComponent {
  // Implemented custom two-way binding
  /* @Input({ required: true }) size!: { width: string; height: string; };
  @Output() sizeChange = new EventEmitter<{ width: string; height: string; }>();  */
  // naming is critical here for output for two-way binding it should be "<input_variable_name>Change"

  // new way
  size = model.required<{ width: string; height: string; }>();

  onReset() {
    /* this.sizeChange.emit({
      width: '200',
      height: '100'
    }); */
    this.size.set({
      width: '200',
      height: '100'
    });
  }
}
