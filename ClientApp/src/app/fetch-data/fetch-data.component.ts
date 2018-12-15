import {Component, OnInit} from '@angular/core';
import {Post} from "../post";
import {PostService} from "../post.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html'
})
export class FetchDataComponent implements OnInit{
  public posts: any[];

  constructor(private http:HttpClient) {

  }

  ngOnInit() {
    // this.postService.getPosts().subscribe(data => this.posts = data, error => {
    //   console.log(error);
    // });
    this.http.get<any[]>(environment.apiUrl + 'post', httpOptions).subscribe(
      data => this.posts = data,
      error => this.errorHandler(error)
    )

  }

  errorHandler(error: Response) {
    console.log(error);
    return Observable.throw(error);
  }
}
