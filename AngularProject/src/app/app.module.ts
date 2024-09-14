import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ListaPostsComponent } from './components/lista-post/lista-post.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { PostService } from './service/post.service';
import { routes } from './app.routes';

@NgModule({
  declarations: [AppComponent, ListaPostsComponent, FormularioComponent],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(routes)],
  providers: [PostService],
  bootstrap: [AppComponent],
})
export class AppModule {}
