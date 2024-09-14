import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from '../../interface/ListaPosts';
import { PostService } from '../../service/post.service';

@Component({
  selector: 'app-lista-posts',
  templateUrl: './lista-post.component.html',
  styleUrls: ['./lista-post.component.css'],
})
export class ListaPostsComponent implements OnInit {
  posts: Post[] = [];

  constructor(private postService: PostService, private router: Router) {}

  ngOnInit(): void {
    this.posts = this.postService.getAll();
  }

  filterByCategoria(cat: string): void {
    this.posts = this.postService.getByCategoria(cat);
  }

  navigateToNewPost(): void {
    this.router.navigate(['/new']);
  }
}
