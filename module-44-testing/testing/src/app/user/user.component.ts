import { Component, OnInit } from '@angular/core';

import { UserService } from "./user.service";
import { DataService } from "../shared/data.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [UserService, DataService]
})
export class UserComponent implements OnInit {
  user: {name: string} = { name: '' };
  isLoggedIn = false;
  data: string = '';

  constructor(private userService: UserService, private dataService: DataService) { }

  ngOnInit() {
    this.user = this.userService.user;
    this.dataService.getDetails().then((data) => this.data = data as string);
  }

}
