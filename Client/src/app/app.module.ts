import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AngularMarkdownEditorModule} from 'angular-markdown-editor';
import {MarkdownModule, MarkedOptions, MarkedRenderer} from 'ngx-markdown';

import {AppComponent} from './app.component';
import {WelcomeComponent} from './welcome/welcome.component';
import {NavComponent} from './nav/nav.component';
import {EditorComponent} from './editor/editor.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { PostComponent } from './post/post.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { BlogComponent } from './blog/blog.component';
import { LoginComponent } from './login/login.component';
import {ErrorInterceptor, JwtInterceptor} from './Helpers';
import {RouteReuseStrategy} from '@angular/router';
import {ReuseStrategy} from './Helpers/ReuseStrategy';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    NavComponent,
    EditorComponent,
    PostComponent,
    PostDetailsComponent,
    BlogComponent,
    LoginComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    MarkdownModule.forRoot({
      markedOptions: {
        provide: MarkedOptions,
        useFactory: (): MarkedOptions => {
          return {
            renderer: new MarkedRenderer(),
            gfm: true,
            tables: true,
            breaks: false,
            pedantic: false,
            sanitize: false,
            smartLists: true,
            smartypants: false,
          };
        }
      }
    }),
    ReactiveFormsModule,
    AngularMarkdownEditorModule.forRoot({
      // add any Global Options/Config you might want
      // to avoid passing the same options over and over in each components of your App
      iconlibrary: 'glyph'
    })
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    // { provide: RouteReuseStrategy, useClass: ReuseStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
