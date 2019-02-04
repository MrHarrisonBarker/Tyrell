export class Post {

  constructor(Title,AuthorId,Body,IsVisible) {
    this.title = Title;
    this.authorId = AuthorId;
    this.body = Body;
    this.isVisible = IsVisible;
  }

  postId: number;
  title: string;
  body: string;
  createdAt: Date;
  isVisible: boolean;

  authorId: number;
  author: Author;
}
