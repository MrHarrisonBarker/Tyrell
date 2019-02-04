import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WelcomeComponent} from "./welcome/welcome.component";
import {EditorComponent} from "./editor/editor.component";
import {PostDetailsComponent} from "./post-details/post-details.component";
import {Post} from "./Models/post";
import {LoginComponent} from "./login/login.component";
import {AuthGuard} from "./Services/auth-guard.service";
import {BlogComponent} from "./blog/blog.component";

const routes: Routes = [
  {path: '', pathMatch: 'full', component: WelcomeComponent},
  {path: 'blog/edit', component: EditorComponent, canActivate: [AuthGuard]},
  {path: 'blog/post/:id', component: PostDetailsComponent, data: {post: Post}},
  {path: 'login', pathMatch: 'full', component: LoginComponent},
  {path: 'blog', pathMatch: 'full', component: BlogComponent},
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
