import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/post';
import { LocalService } from 'src/app/local.service';
@Component({
  selector: 'app-list-posts',
  templateUrl: './list-posts.component.html',
  styleUrls: ['./list-posts.component.css'],
})
export class ListPostsComponent implements OnInit {
  localPosts: Post[] = [];

  constructor(private localService: LocalService) {}

  ngOnInit(): void {
    this.localPosts = this.localService.getPosts();
    console.log(this.localPosts);
  }

  increaseLikes(post: Post) {
    this.localService.increaseLikes(post);
  }

  increaseDislikes(post: Post) {
    this.localService.increaseDislikes(post);
  }

  decreaseDislikes(post: Post) {
    this.localService.decreaseDislikes(post);
  }

  decreaseLikes(post: Post) {
    this.localService.decreaseLikes(post);
  }

  deletePost(post: Post) {
    const index = this.localPosts.indexOf(post);
    if (index !== -1) {
      this.localPosts.splice(index, 1);
    }
  }
}
