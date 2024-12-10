import { Component, DestroyRef, inject, input, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-user-tasks',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.css'
})
export class UserTasksComponent implements OnInit {
  private usersService = inject(UsersService);
  // new way
  // userId = input.required<string>(); // input variable name must be same as you mentioned dynamic route name in routing file
  message = input.required<string>();

  // old way
  userName = '';
  private activatedRoute = inject(ActivatedRoute);
  private destroyRef = inject(DestroyRef);

  // new way
  // userName = computed(() => this.usersService.users.find(u => u.id === this.userId())?.name);

  // old way
  ngOnInit(): void {
    console.log('Input data: ' + this.message());
    
    const subscription = this.activatedRoute.paramMap.subscribe({
      next: paramMap => {
        this.userName = this.usersService.users.find(u => u.id === paramMap.get('userId'))?.name || '';
      }
    });
    this.destroyRef.onDestroy(() => subscription.unsubscribe());
  }
}
