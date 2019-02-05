import {Component, OnInit} from '@angular/core';
import {PostService} from "../Services/post.service";
import {Post} from "../Models/post";
import {User} from "../Models/user";
import {UserService} from "../Services/user.service";
import {first} from "rxjs/operators";
import {Router} from "@angular/router";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  users: User[] = [];
  theme: string;

  constructor(private userService: UserService,
              private router: Router) {
  }

  ngOnInit() {
    // this.userService.getAll().pipe(first()).subscribe(users => {
    //   this.users = users;
    // });
    this.theme = localStorage.getItem('theme');
    console.log(this.theme);
  }

  Blog() {
    this.router.navigate(['blog']);
  }

}
