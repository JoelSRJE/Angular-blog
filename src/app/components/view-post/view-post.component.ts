import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LocalService } from 'src/app/local.service';
import { Post, BlogComment } from 'src/app/post';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from 'src/app/login.service';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.css'],
})
export class ViewPostComponent implements OnInit {
  post: Post | undefined;
  postComment: string = '';
  comment: string = '';

  editing: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private localService: LocalService,
    private toastr: ToastrService,
    public LoginService: LoginService
  ) {}

  ngOnInit() {
    const postIdString = this.route.snapshot.paramMap.get('id');

    if (postIdString !== null) {
      const postId = +postIdString;
      this.post = this.localService.getPostById(postId);
    } else {
      console.error('Post ID is null');
    }
  }

  updatePost() {
    console.log('Updating post:', this.post);
    if (this.post) {
      const postId = this.post?.id;

      if (postId !== undefined) {
        this.localService.updatePost(this.post);
        this.post = this.localService.getPostById(postId);
      } else {
        console.error('Post ID is undefined');
      }
    }
  }

  addComment() {
    if (this.postComment.trim() !== '') {
      const postId = this.post?.id;

      if (postId !== undefined) {
        const newComment: BlogComment = {
          username: 'Anonymous',
          text: this.postComment,
        };

        this.localService.addComment(postId, newComment);
        this.post = this.localService.getPostById(postId);
        this.postComment = '';
        this.localService.updateLocalStorage();
        this.createdComment();
      }
    } else {
      console.error('Comment is empty');
    }
  }

  deleteComment(comment: BlogComment) {
    console.log('Deleting comment:', comment);
    console.log('current post:', this.post);

    if (this.post) {
      const commentIndex = this.post.comments.indexOf(comment);

      if (commentIndex !== -1) {
        this.post.comments.splice(commentIndex, 1);
        this.updatePost();
      }
    }
  }

  increaseLikes() {
    if (this.post) {
      this.localService.increaseLikes(this.post);
      this.updatePost();
    }
  }

  decreaseLikes() {
    if (this.post) {
      this.localService.decreaseLikes(this.post);
      this.updatePost();
    }
  }

  increaseDislikes() {
    if (this.post) {
      this.localService.increaseDislikes(this.post);
      this.updatePost();
    }
  }

  decreaseDislikes() {
    if (this.post) {
      this.localService.decreaseDislikes(this.post);
      this.updatePost();
    }
  }

  editPost() {
    this.editing = true;
  }

  saveEdit() {
    if (this.post) {
      this.localService.updatePost(this.post);
      this.editing = false;
      this.editPostSucces();
    }
  }

  cancelEdit() {
    this.editing = false;
  }

  deletePost() {
    if (this.post) {
      this.localService.deletePost(this.post);
      this.showDeleted();
    }
  }

  // Toastr messages

  editPostSucces() {
    this.toastr.success('Your changes have been saved', 'Edited Post');
  }

  createdComment() {
    this.toastr.success(
      'Your comment was successfully published',
      'Comment was published'
    );
  }

  showDeleted() {
    this.toastr.error('Post has been deleted, Return home', 'Deleted Post');
  }

  // Admin view toggle

  toggleAdminView() {
    this.LoginService.toggleAdmin();
  }
}
