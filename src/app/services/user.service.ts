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
    name: "Antoine",
    surname: "Varnerot",
    email: "antoien@rrcz.fr",
    isDeleted: false,
    role: UserRole.user
}
  

  constructor(
    private http: HttpClient
  ) { }

  getUserById(userId: number){
    const route = `${this.configUrl}users/${userId}`;
    return this.user;
    // return this.http.get<User>(route);
  }

  getUsersByOrga(orgaId: number){
    const route = `${this.configUrl}orga/users/${orgaId}`;
    return [this.user, this.user]
    // return this.http.get<User>(route);
  }
}
