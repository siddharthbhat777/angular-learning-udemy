import { Component, computed, input, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  // @Input({ required: true }) avatar!: string; // @Input decorator basically used to accept props passed by parent component
  // @Input({ required: true }) name!: string;
  avatar = input.required<string>();
  name = input.required<string>();

  imagePath = computed(() => 'assets/users/' + this.avatar());

  /* get imagePath() {
    return 'assets/users/' + this.avatar;
  } */

  onSelectUser() {
  }
}