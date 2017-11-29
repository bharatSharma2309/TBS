import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from "@angular/router";
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

@NgModule({
  declarations: [
    AppComponent,
    HeadBarComponent,
    MainWindowComponent,
    BlogListComponent,
    UserBarLeftComponent,
    SignUpComponent,
    CreateBlogComponent,
    BlogDetailComponent
  ],
  imports: [FormsModule,
    BrowserModule,
    RouterModule.forRoot([
      { path: 'signup', component: SignUpComponent },
      { path: '', component: MainWindowComponent },
      { path: 'write', component: CreateBlogComponent },
      { path: ':id', component: BlogDetailComponent }
    ]),
    HttpModule
  ],
  providers: [BlogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
