import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../environments/environment";
import {Observable} from "rxjs";
import {Post} from "./post";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'}),
  withCredentials: true
};

@Injectable()
export class PostService {

  private url: string = environment.apiUrl;

  constructor(private http: HttpClient) {

  }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.url + 'post', httpOptions);
  }

}
