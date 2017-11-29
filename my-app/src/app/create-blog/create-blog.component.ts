import { Component, OnInit } from '@angular/core';
import {BlogStructure} from "../blog-list/BlogStructure";
import {BlogService} from "../blog-list/blog.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-blog',
  templateUrl: './create-blog.component.html',
  styleUrls: ['./create-blog.component.css']
})
export class CreateBlogComponent implements OnInit {

  Blogs:Object[];

  constructor(private request: BlogService, private router: Router) { }

  ngOnInit() {
  }


  addBlog(Title, Content, Author, Category) {
    debugger;
    let blog = new BlogStructure(Title, Content, Author, Category);

    this.request.postBlog(blog)
      .subscribe(data => {
        //this.Blogs = data;
        this.router.navigate(['']);
      },err =>{
        console.log(err);
      });
  }

}
