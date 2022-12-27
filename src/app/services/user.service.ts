import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User, UserRole } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private configUrl = environment.apiUrl;

  user: User = {
    id: 1,
    name: "User1",
    surname: "reazr",
    email: "antoien@rr.fr",
    isDeleted: false,
    role: UserRole.user
}
  

  constructor(
    private http: HttpClient
  ) { }

  getUserById(userId: number){
    const route = `${this.configUrl}users/${userId}`
    // return this.http.get<User>(route);
  }

  getUsersByOrga(orgaId: number){
    const route = `${this.configUrl}orga/users/${orgaId}`;
    return [this.user]
    // return this.http.get<User>(route);
  }
}
