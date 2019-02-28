import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WelcomeComponent} from './welcome/welcome.component';
import {EditorComponent} from './editor/editor.component';
import {PostDetailsComponent} from './post-details/post-details.component';
import {LoginComponent} from './login/login.component';
import {AuthGuard} from './Services/auth-guard.service';
import {BlogComponent} from './blog/blog.component';
import {ArticlesComponent} from './articles/articles.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', component: WelcomeComponent},
  {path: 'blog/edit', component: EditorComponent, canActivate: [AuthGuard]},
  {path: 'blog/post/:id', component: PostDetailsComponent},
  {path: 'login', pathMatch: 'full', component: LoginComponent},
  {path: 'blog', pathMatch: 'full', component: BlogComponent},
  {path: 'articles', pathMatch: 'full', component: ArticlesComponent},
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
