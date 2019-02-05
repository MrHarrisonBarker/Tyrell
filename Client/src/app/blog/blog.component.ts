import { Component, OnInit } from '@angular/core';
import {PostService} from "../Services/post.service";
import {Post} from "../Models/post";
import {Router} from "@angular/router";
import {Local} from "protractor/built/driverProviders";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  posts: Post[] = [];

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postService.GetAll().subscribe(posts => {
        console.log(posts);
        this.posts = posts;
        localStorage.setItem('posts', JSON.stringify(this.posts));
      },
      error => {
        console.log(error);
      });
  }

}
