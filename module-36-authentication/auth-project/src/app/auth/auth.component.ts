import { Component } from '@angular/core';

@Component({
  selector: 'app-auth',
  standalone: false,
  templateUrl: './auth.component.html'
})
export class AuthComponent {
  isLoginMode = true;

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }
}
