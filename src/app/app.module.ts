import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import { AppComponent } from './app.component';
import { HeadBarComponent } from './head-bar/head-bar.component';
import { MainWindowComponent } from './main-window/main-window.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { UserBarLeftComponent } from './user-bar-left/user-bar-left.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import { CreateBlogComponent } from './create-blog/create-blog.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import {BlogService} from "./blog-list/blog.service";
import { BlogSideNavComponent } from './blog-side-nav/blog-side-nav.component';
import {TimeAgoPipe} from 'time-ago-pipe';
import index from "@angular/cli/lib/cli";
import {HttpClientModule} from "@angular/common/http";
import { BlogUpdateComponent } from './blog-update/blog-update.component';
import {PagerService} from "./blog-list/pager.service";
import { CreateSuccessComponent } from './create-blog/create-success/create-success.component';
import { ModalBlogEditorComponent } from './blog-side-nav/modal-blog-editor/modal-blog-editor.component';
import { ModalEditorComponent } from './blog-list/modal-editor/modal-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadBarComponent,
    MainWindowComponent,
    BlogListComponent,
    UserBarLeftComponent,
    SignUpComponent,
    CreateBlogComponent,
    BlogDetailComponent,
    BlogSideNavComponent,
    TimeAgoPipe,
    BlogUpdateComponent,
    CreateSuccessComponent,
    ModalBlogEditorComponent,
    ModalEditorComponent
  ],
  imports: [FormsModule,
    BrowserModule,
    RouterModule.forRoot([
      { path: 'signup', component: SignUpComponent },
      { path: '', component: MainWindowComponent },
      { path: 'write', component: CreateBlogComponent },
      { path: 'postSuccess', component: CreateSuccessComponent},
      { path: ':id', component: BlogDetailComponent },
      {path: ':id/update', component: BlogUpdateComponent}
    ]),
    HttpModule,
    HttpClientModule
  ],
  providers: [BlogService, PagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
