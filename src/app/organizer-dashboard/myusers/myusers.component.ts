import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-myusers',
  templateUrl: './myusers.component.html',
  styleUrls: ['./myusers.component.scss']
})
export class MyusersComponent implements OnInit {

  constructor(
    private userService: UserService
  ) { }

  users: User[];

  ngOnInit(): void {
    this.users = this.userService.getUsersByOrga(1);
  }
}
