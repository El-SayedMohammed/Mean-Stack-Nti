import { Component, OnInit } from '@angular/core';
import { Ipost } from '../models/post.model';
import { Post } from '../services/post';

@Component({
  selector: 'app-posts',
  standalone: false,
  templateUrl: './posts.html',
  styleUrl: './posts.css'
})
export class Posts implements OnInit {
 showform: boolean = false;
 toggleForm() {
    this.showform = !this.showform;
  }

  posts: Ipost[] = [];

  constructor(private postService: Post) {}
ngOnInit(): void {
  this.loadPosts();
}

  loadPosts() {
    this.postService.getposts().subscribe(posts => {
      this.posts = posts;
    });
  }


  newpost: Ipost = {
    id: 0,
    date: new Date(),
    title: '',
    body: '',
    userid: 0,
    imgurl: '',
    like: true,
    likes: 0,
    comments: []
  };
addpost() {
  this.postService.addposts({ ...this.newpost }).subscribe(() => {
    this.loadPosts(); 
       });
  }

  removepost(id: number) {
    this.postService.deletePost(id).subscribe(() => {
      this.loadPosts();
    });
  }

  likecounter(post: Ipost) {
    post.like = true;
    post.likes=++post.likes;
  }

  commentMap: { [key: number]: string } = {};

  addcomment(post: Ipost) {
    const commentText = this.commentMap[post.id];
    if (commentText && commentText.trim() !== '') {
      post.comments.push(commentText);
      this.commentMap[post.id] = '';
    }
  }
}
