import { Component, DestroyRef, inject, input, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { ActivatedRoute, ActivatedRouteSnapshot, ResolveFn, RouterLink, RouterOutlet, RouterStateSnapshot } from '@angular/router';

@Component({
  selector: 'app-user-tasks',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.css'
})
export class UserTasksComponent {
  userName = input.required<string>(); // same name as resolve key
  // private usersService = inject(UsersService);
  // new way
  // userId = input.required<string>(); // input variable name must be same as you mentioned dynamic route name in routing file
  message = input.required<string>(); // message is and should be same name as key in data

  // old way
  // userName = '';
  // private activatedRoute = inject(ActivatedRoute);
  // private destroyRef = inject(DestroyRef);

  // new way
  // userName = computed(() => this.usersService.users.find(u => u.id === this.userId())?.name);

  // old way
  /* ngOnInit(): void {
    console.log('Input data: ' + this.message());
    
    const subscription = this.activatedRoute.paramMap.subscribe({
      next: paramMap => {
        this.userName = this.usersService.users.find(u => u.id === paramMap.get('userId'))?.name || '';
      }
    });
    this.destroyRef.onDestroy(() => subscription.unsubscribe());
  } */
}

export const resolveUserName: ResolveFn<string> = (activatedRoute: ActivatedRouteSnapshot, routerState: RouterStateSnapshot) => {
  const usersService = inject(UsersService);
  const userName = usersService.users.find(u => u.id === activatedRoute.paramMap.get('userId'))?.name || '';
  return userName;
};