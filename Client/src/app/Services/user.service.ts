import { HttpClient } from "@angular/common/http";
import {User} from "../Models/user";
import {Injectable} from "@angular/core";


@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<User[]>(`http://localhost:5000/api/users`);
  }
}
