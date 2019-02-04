
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Post} from "../Models/post";
import {Observable} from "rxjs/index";
import {Injectable} from "@angular/core";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private handleError(type,post) {
    console.log('error');
  }

  Url = 'http://localhost:5000/api/post';

  constructor(private client: HttpClient) {
  }

  public GetAll(): Observable<Post[]> {
    return this.client.get<Post[]>(this.Url , httpOptions);
  }

  public Get(id): Observable<Post> {
    return this.client.get<Post>(this.Url + `/${id}` , httpOptions);
  }

  public Add(post: Post) {
    this.client.post<Post>(this.Url, post , httpOptions)
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log(err);
        });
  }

  public Update(post: Post) {
    this.client.put<Post>(this.Url, post , httpOptions)
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log(err);
        });
  }

  public Delete(id: number) {
    this.client.delete(this.Url + `/${id}` , httpOptions)
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log(err);
        });
  }
}
