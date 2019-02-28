import {Component, OnInit} from '@angular/core';
import {PostService} from '../Services/post.service';
import {Post} from '../Models/post';
import {User} from '../Models/user';
import {UserService} from '../Services/user.service';
import {first} from 'rxjs/operators';
import {Router} from '@angular/router';
import {faCoffee} from '@fortawesome/free-solid-svg-icons';
import {faTwitter} from '@fortawesome/free-brands-svg-icons/faTwitter';
import {faInstagram} from '@fortawesome/free-brands-svg-icons/faInstagram';
import {faReddit} from '@fortawesome/free-brands-svg-icons/faReddit';
import {faGithub} from '@fortawesome/free-brands-svg-icons/faGithub';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  faCoffee = faCoffee;
  faTwitter = faTwitter;
  faInstagram = faInstagram;
  faReddit = faReddit;
  faGithub = faGithub;

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

  routeBlog() {
    this.router.navigate(['blog']);
  }

  routeArticles() {
    this.router.navigate(['articles']);
  }

}
