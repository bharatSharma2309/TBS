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

  public categories: string[] = ["Technology", "Sports", "Society", "Others"];

  blogToCreate:BlogStructure = new BlogStructure("","","","");

  constructor(private request: BlogService, private router: Router) { }

  ngOnInit() {
  }

  addBlog(blogToCreate) {
    this.request.postBlog(blogToCreate)
      .subscribe(data => {
        //this.Blogs = data;
        this.router.navigate(['/postSuccess']);
      },err =>{
        console.log(err);
      });
  }

}
