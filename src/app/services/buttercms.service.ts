import { Injectable } from '@angular/core';
import Butter from 'buttercms';
import { environment } from '../../environments/environment'; // Import the correct environment

@Injectable({
  providedIn: 'root',
})
export class ButtercmsService {
  private butter = Butter(environment.butterCMSAPIKey); // Replace with your ButterCMS API token

  constructor() {}

  // Fetch blog posts
  getPosts(): Promise<any> {
    return this.butter.post.list();
  }

  // Fetch a single post by slug
  getPost(slug: string): Promise<any> {
    return this.butter.post.retrieve(slug);
  }
}