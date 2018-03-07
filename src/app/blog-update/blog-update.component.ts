import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {BlogService} from "../blog-list/blog.service";
import {BlogStructure} from "../blog-list/BlogStructure";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-blog-update',
  templateUrl: './blog-update.component.html',
  styleUrls: ['./blog-update.component.css']
})

export class BlogUpdateComponent implements OnInit {

  updatedBlog: BlogStructure;

  public categories: string[] = ["Technology", "Sports", "Society", "Others"];

  private sub: any;

  private id:number;

  blogToCreate:BlogStructure = new BlogStructure("","","","");

  constructor(private blogService:BlogService, private route: ActivatedRoute) { }

  ngOnInit() {

    this.id = +this.route.snapshot.paramMap.get('id');

    this.blogService.getBlog(this.id).subscribe(res => {
      this.blogToCreate = res as BlogStructure;
      console.log(this.blogToCreate);
    }, err => {
      console.log(err);
    });
    // this.updatedBlog = this.blogService.getBlog(2);
  }

  /**
   * This method will use the Blog Service's Update Method
   */
  updateBlog(updatedBlog:BlogStructure){
    debugger;
    this.blogService.deleteBlog(updatedBlog.id).subscribe(data => {
      // this.Blogs = data;
    },err =>{
      console.log(err);
    });

    // this.blogService.postBlog(this.updatedBlog);

    this.blogService.postBlog(updatedBlog)
      .subscribe(data => {
        // this.Blogs = data;
      },err =>{
        console.log(err);
      });

    alert('Blog has been updated. You can stay to make more changes or go to List of Blogs!!!');

  }

}
