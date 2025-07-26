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

  posts: Ipost[] = [];

  commentMap: { [key: number]: string } = {};

  newpost: Ipost = {
    id: 0,
    date: new Date(),
    title: '',
    body: '',
    userid: 0,
    imgurl: '',
    like: false,
    likes: 0,
    comments: []
  };

  constructor(private postService: Post) {}

  ngOnInit(): void {
    this.loadposts();
  }

  toggleForm() {
    this.showform = !this.showform;
  }

  loadposts() {
    this.postService.getposts().subscribe(posts => {
      this.posts = posts;
    });
  }

  addpost() {
    // احذف الـ id علشان json-server يولد id تلقائي
const postToSend: any = { ...this.newpost };
delete postToSend.id;

this.postService.addposts(postToSend).subscribe(() => {
  this.loadposts();
  this.resetForm();
});
  }

  removepost(id: number) {
    this.postService.deletePost(id).subscribe(() => {
      this.loadposts();
    });
  }
  likecounter(post:Ipost){
    post.like=true;
    post.likes=++post.likes

  }

  addcomment(post: Ipost) {
    const commentText = this.commentMap[post.id];
    if (commentText && commentText.trim() !== '') {
      post.comments.push(commentText.trim());
      this.commentMap[post.id] = '';
    }
  }

  resetForm() {
    this.newpost = {
      id: 0,
      date: new Date(),
      title: '',
      body: '',
      userid: 0,
      imgurl: '',
      like: false,
      likes: 0,
      comments: []
    };
    this.showform = false;
  }
}
