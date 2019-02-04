import {Component, Input, OnInit} from '@angular/core';
import {Post} from "../Models/post";
import {Router} from "@angular/router";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() post: Post;

  constructor(private router: Router) { }

  ngOnInit() {

  }

  route() {
    this.router.navigate([`blog/post/${this.post.postId}`, {post: this.post}])
  }

}
