import { Injectable } from '@angular/core';
import { Post } from '../interface/ListaPosts';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private posts: Post[] = [];

  create(post: Post): void {
    this.posts.push(post);
  }

  getAll(): Post[] {
    return this.posts;
  }

  getByCategoria(cat: string): Post[] {
    return this.posts.filter((post) => post.cat === cat);
  }
}
