import { Component, computed, inject, input } from '@angular/core';
import { UsersService } from '../users.service';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-user-tasks',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.css'
})
export class UserTasksComponent {
  // new way
  userId = input.required<string>();
  private usersService = inject(UsersService);
  // old way
  // userName = '';
  // private activatedRoute = inject(ActivatedRoute);
  // private destroyRef = inject(DestroyRef);

  // new way
  userName = computed(() => this.usersService.users.find(u => u.id === this.userId())?.name);

  // old way
  /* ngOnInit(): void {
      const subscription = this.activatedRoute.paramMap.subscribe({
        next: paramMap => {
          this.userName = this.usersService.users.find(u => u.id === paramMap.get('userId'))?.name || '';
        }
      });
      this.destroyRef.onDestroy(() => subscription.unsubscribe());
  } */
}
