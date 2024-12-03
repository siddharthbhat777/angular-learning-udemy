import { AfterViewInit, Component, ElementRef, OnInit, output, viewChild } from '@angular/core';
import { ControlComponent } from "../../../shared/control/control.component";
import { ButtonComponent } from '../../../shared/button/button.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ControlComponent, ButtonComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent implements OnInit, AfterViewInit {
  // @ViewChild('formTemplate') form?: ElementRef<HTMLFormElement>; // old way
  // @ViewChildren(ButtonComponent) btn .... // for multiple elements
  private form = viewChild.required<ElementRef<HTMLFormElement>>('formTemplate');
  add = output<{ title: string; text: string; }>();

  ngOnInit() {
    console.log('ONINIT');
    console.log(this.form().nativeElement);
  }

  ngAfterViewInit() {
      console.log('AFTER VIEW INIT');
      console.log(this.form().nativeElement);
  }

  onSubmit(title: string, text: string) {
    this.add.emit({ title, text });
    this.form()?.nativeElement.reset();
    // this.form -> we are accessing ElementRef
    // this.form.nativeElement -> we are accessing actual form element
  }
}
