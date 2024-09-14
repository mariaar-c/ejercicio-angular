import { Component } from '@angular/core';
import { PostService } from '../../service/post.service';
import { Post } from '../../interface/ListaPosts';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent {
  post: Post = {
    titulo: '',
    texto: '',
    autor: '',
    srcImagen: '',
    fecha: new Date(),
    cat: '',
  };

  constructor(private postService: PostService) {}

  submitPost(): void {
    this.postService.create(this.post);
    this.resetForm();
  }

  resetForm(): void {
    this.post = {
      titulo: '',
      texto: '',
      autor: '',
      srcImagen: '',
      fecha: new Date(),
      cat: '',
    };
  }
}
