import { Injectable } from '@angular/core';
import { Post, BlogComment } from './post';

@Injectable({
  providedIn: 'root',
})
export class LocalService {
  post: Post | undefined;
  postComment: string = '';

  localPosts: Post[] = [
    {
      id: 0,
      title: 'Exempel titel',
      thumbnailUrl:
        'https://images.pexels.com/photos/2341290/pexels-photo-2341290.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      body: 'Exempel innehåll',
      creationDate: new Date(),
      likes: 0,
      dislikes: 0,
      comments: [
        { username: 'Anonymous', text: 'Kommentar 1' },
        { username: 'Anonymous', text: 'Kommentar 2' },
      ],
    },
  ];

  constructor() {
    const storedPosts = localStorage.getItem('posts');
    if (storedPosts) {
      this.localPosts = JSON.parse(storedPosts);
    }
  }

  updateLocalStorage() {
    localStorage.setItem('posts', JSON.stringify(this.localPosts));
  }

  addPost(post: Post) {
    this.localPosts.push(post);
    this.updateLocalStorage();
  }

  savePost(post: Post): void {
    this.localPosts.push(post);
    localStorage.setItem('localPosts', JSON.stringify(this.localPosts));
  }

  increaseLikes(post: Post) {
    post.likes++;
    this.updateLocalStorage();
  }

  decreaseLikes(post: Post) {
    post.likes--;
  }

  increaseDislikes(post: Post) {
    post.dislikes++;
    this.updateLocalStorage();
  }

  decreaseDislikes(post: Post) {
    post.dislikes--;
  }

  getPosts() {
    localStorage.getItem('posts');
    return this.localPosts;
  }

  getPostById(id: number): Post | undefined {
    return this.localPosts.find((post) => post.id === id);
  }

  addComment(id: number, comment: BlogComment) {
    const post = this.localPosts.find((post) => post.id === id);
    if (post) {
      post.comments.push(comment);
      this.updateLocalStorage();
    }
  }

  updatePost(updatedPost: Post) {
    const index = this.localPosts.findIndex(
      (post) => post.id === updatedPost.id
    );
    if (index !== -1) {
      this.localPosts[index] = updatedPost;
    }
  }

  deletePost(post: Post) {
    const index = this.localPosts.indexOf(post);
    if (index !== -1) {
      this.localPosts.splice(index, 1);
      this.updateLocalStorage();
    }
  }
}
