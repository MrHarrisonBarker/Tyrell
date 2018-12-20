import {Component, Input, OnInit} from '@angular/core';
import {Post} from "../post";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() Post: Post;

  constructor() { }

  ngOnInit() {
  }

}
