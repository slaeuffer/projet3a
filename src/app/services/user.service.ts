import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private configUrl = environment.apiUrl;

  constructor(
    private http: HttpClient
  ) { }

  getUserById(userId: number){
    const route = `${this.configUrl}users/${userId}`
    // return this.http.get<User>(route);
  }
}
