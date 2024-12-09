import { Component, computed, DestroyRef, inject, input, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-tasks',
  standalone: true,
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.css',
})
export class UserTasksComponent implements OnInit {
  userName = '';
  // userId = input.required<string>();
  private usersService = inject(UsersService);
  private activatedRoute = inject(ActivatedRoute);
  private destroyRef = inject(DestroyRef);

  // userName = computed(() => this.usersService.users.find(u => u.id === this.userId())?.name);

  ngOnInit(): void {
      const subscription = this.activatedRoute.paramMap.subscribe({
        next: paramMap => {
          this.userName = this.usersService.users.find(u => u.id === paramMap.get('userId'))?.name || '';
        }
      });
      this.destroyRef.onDestroy(() => subscription.unsubscribe());
  }
}
