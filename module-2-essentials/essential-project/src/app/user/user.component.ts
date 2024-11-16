import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({ required: true }) id!: string;
  @Input({ required: true }) avatar!: string; // @Input decorator basically used to accept props passed by parent component
  @Input({ required: true }) name!: string;
  @Output() select = new EventEmitter(); // send data to parent component

  get imagePath() {
    return 'assets/users/' + this.avatar;
  }

  onSelectUser() {
    this.select.emit(this.id);
  }
}