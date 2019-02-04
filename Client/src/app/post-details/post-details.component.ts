import {Component, Input, OnInit} from '@angular/core';
import {Post} from "../Models/post";
import {Location} from "@angular/common";
import {ActivatedRoute, Router} from "@angular/router";
import {switchMap} from "rxjs/operators";
import {PostService} from "../Services/post.service";

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {

  // @Input() post: Post;
  post: Post;

  constructor(private location: Location,
              private route: ActivatedRoute,
              private router: Router,
              private postService: PostService) {
  }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.postService.Get(id).subscribe(post => {
      console.log(typeof post);
      console.log(post);
      this.post = post;
    });
  }

  back() {
    this.location.back();
  }

}
