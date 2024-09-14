import { Routes } from '@angular/router';
import { ListaPostsComponent } from './components/lista-post/lista-post.component';
import { FormularioComponent } from './components/formulario/formulario.component';

export const routes: Routes = [
  { path: 'posts', component: ListaPostsComponent },
  { path: 'new', component: FormularioComponent },
  { path: '', redirectTo: '/posts', pathMatch: 'full' },
];
