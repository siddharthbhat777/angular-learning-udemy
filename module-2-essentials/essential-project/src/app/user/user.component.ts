import { Component, EventEmitter, Input, Output } from '@angular/core';
import { type User } from './user.model';
import { CardComponent } from "../shared/card/card.component";

/* type User = { // any type can be defined
  id: string;
  avatar: string;
  name: string;
} */

/* interface User { // only object types can be defined
  id: string;
  avatar: string;
  name: string;
} */

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  imports: [CardComponent]
})
export class UserComponent {
  @Input({ required: true }) selected!: boolean;
  @Input({ required: true }) user!: User; // @Input decorator basically used to accept props passed by parent component
  @Output() select = new EventEmitter<string>(); // created output variable

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id); // with output variable sending(emitting) data to parent component
  }
}