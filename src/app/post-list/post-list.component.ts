import { Component, OnInit } from '@angular/core';
import { Post } from '../post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  listOfPosts: Post[] = [
    new Post("Tech Crunch", "TechCrunch is a blog that provides technology and startup news, from the latest developments in Silicon Valley to venture capital funding. The blog’s target audience is technology and business enthusiasts, especially startup founders and investors worldwide.", "https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2021/12/techcrunch-website-homepage-1024x542.webp", "Reilan", new Date())
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
