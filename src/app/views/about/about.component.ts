import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  list: string[] = [
    'Frontend Frameworks: Angular, React, Vue, etc.',
    'Programming Languages: JavaScript, TypeScript, HTML, CSS',
    'UI/UX Design Trends',
    'Code Reviews and Best Practices',
    'Interviews with Developers',
  ];

  snippet1 = `updatePost() {
    console.log('Updating post:', this.post);
    if (this.post) {
      const postId = `;

  snippet2 = `      
      if (postId !== undefined) {
        this.localService.updatePost(this.post);
        this.post = this.`;

  snippet3 = `.getPostById(postId);
      } else {
        console.error('Post ID is undefined');
      }
    }
  }`;

  snippet4: string =
    "addComment() {\n  if (this.postComment.trim() !== '') {\n    const postId = this.post?.id;\n\n    if (postId !== undefined) {\n      const newComment: BlogComment = {\n        username: 'Anonymous',\n        text: this.postComment,\n      };\n\n      this.localService.addComment(postId, newComment);\n      this.post = this.localService.getPostById(postId);\n      this.postComment = '';\n      this.localService.updateLocalStorage();\n      this.createdComment();\n    }\n  } else {\n    console.error('Comment is empty');\n  }";

  ngOnInit(): void {
    this.animateLoop();
  }

  animateLoop() {
    this.animateText(() => {
      this.reverseAnimateText(() => {
        this.animateLoop();
      });
    });
  }

  animateText(callback: () => void) {
    const animatedText = document.getElementById('animatedText');
    if (animatedText) {
      let index = 0;

      const interval = setInterval(() => {
        animatedText.textContent = this.snippet4.slice(0, index);
        index++;

        if (index > this.snippet4.length) {
          clearInterval(interval);
          setTimeout(() => {
            animatedText.textContent = ''; // Rensa texten innan nästa iteration
            callback(); // Anropa nästa steg
          }, 1000); // Justera tiden innan nästa iteration
        }
      }, 50); // Justera intervallet efter behov
    }
  }

  reverseAnimateText(callback: () => void) {
    const animatedText = document.getElementById('animatedText');
    if (animatedText) {
      let index = this.snippet4.length;

      const interval = setInterval(() => {
        animatedText.textContent = this.snippet4.slice(0, index);
        index--;

        if (index < 0) {
          clearInterval(interval);
          callback(); // Anropa nästa steg
        }
      }, 50); // Justera intervallet efter behov
    }
  }
}
