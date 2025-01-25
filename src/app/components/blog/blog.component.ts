import { Component, OnInit } from '@angular/core';
import { ButtercmsService } from '../../services/buttercms.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  imports: [CommonModule], 
  standalone: true
})
export class BlogComponent implements OnInit {
  posts: any[] = [];

  constructor(private butterCMSService: ButtercmsService) {}

  ngOnInit(): void {
    this.fetchPosts();
  }

  fetchPosts(): void {
    this.butterCMSService.getPosts().then(
      (response) => {
        this.posts = response.data.data;
        console.debug(this.posts)
      },
      (error) => {
        console.error('Error fetching posts:', error);
      }
    );
  }
}