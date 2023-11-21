import { Component } from '@angular/core';
import { Post } from 'src/app/post';
import { LocalService } from 'src/app/local.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css'],
})
export class CreatePostComponent {
  newPost: Post = {
    id: this.localService.localPosts.length + 1,
    title: '',
    thumbnailUrl: '',
    body: '',
    creationDate: new Date(),
    likes: 0,
    dislikes: 0,
    comments: [],
  };

  constructor(
    private localService: LocalService,
    private toastr: ToastrService
  ) {}

  createPost() {
    this.localService.savePost(this.newPost);
    this.newPost = {
      id: this.localService.localPosts.length + 1,
      title: '',
      thumbnailUrl: '',
      body: '',
      creationDate: new Date(),
      likes: 0,
      dislikes: 0,
      comments: [],
    };

    this.localService.updateLocalStorage();
    this.showSuccess();
  }

  showSuccess() {
    this.toastr.success('Return to Home', 'The Post was created');
  }
}
