export interface Post {
  id: number;
  title: string;
  thumbnailUrl: string;
  body: string;
  creationDate: Date;
  likes: number;
  dislikes: number;
  comments: BlogComment[];

  // Gav error i updatePost i localService annars.
  [key: string]: any;
}

export interface BlogComment {
  username: string;
  text: string;
}
